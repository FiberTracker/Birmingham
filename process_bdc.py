#!/usr/bin/env python3
"""
process_bdc.py — FCC BDC CSV → GeoJSON JS files for Birmingham GIS tool.

Usage:
  1. Download BDC CSVs for Alabama (FIPS 01) per-provider from:
     https://broadbandmap.fcc.gov/data-download/fixed
  2. Place CSVs in fcc_data/ directory
  3. Run: python3 process_bdc.py

Outputs JS files to bdc_output/ — one per provider.
Each file defines: var PROVIDER_BDC_COVERAGE = {GeoJSON FeatureCollection}

Requirements: pip install shapely requests
"""

import csv
import json
import os
import sys
import time
from collections import defaultdict
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.parse import urlencode

try:
    from shapely.geometry import shape, mapping
    from shapely import wkt
    HAS_SHAPELY = True
except ImportError:
    HAS_SHAPELY = False
    print("[WARN] shapely not installed. Polygons will not be simplified.")
    print("       Install with: pip install shapely")

# ============================================
# CONFIGURATION
# ============================================

# Map FCC provider IDs to output config
# Update these after inspecting your downloaded CSV filenames
# Filename pattern: bdc_01_{providerID}_fixed_broadband_{period}.csv
PROVIDER_MAP = {
    # AT&T / BellSouth — 140K+ fiber BSLs in Jefferson Co
    '130077': {'var': 'ATT_BDC_COVERAGE', 'file': 'att_bdc.js', 'name': 'AT&T Fiber'},
    # Charter / Spectrum — 3.3K fiber BSLs in Jefferson Co
    '130235': {'var': 'SPECTRUM_BDC_COVERAGE', 'file': 'spectrum_bdc.js', 'name': 'Spectrum'},
    # C Spire — 6.3K fiber BSLs in Jefferson Co
    '131302': {'var': 'CSPIRE_BDC_COVERAGE', 'file': 'cspire_bdc.js', 'name': 'C Spire'},
}

# Alabama FIPS
STATE_FIPS = '01'

# Technology code for FTTP (Fiber to the Premises)
TECH_FTTP = 50

# Birmingham metro area county FIPS codes (scope output to metro area)
# Set to None to include all Alabama counties
METRO_COUNTIES = {
    '01073',  # Jefferson
    '01117',  # Shelby
    '01115',  # St. Clair
    '01009',  # Blount
    '01021',  # Chilton
    '01007',  # Bibb
    '01127',  # Walker
}

# Census TIGERweb REST API for block group polygons (Layer 10 = Census Block Groups)
TIGER_URL = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_ACS2023/MapServer/10/query'

# Simplification tolerance (degrees, ~200m at Birmingham latitude)
SIMPLIFY_TOLERANCE = 0.002

# Coordinate decimal places
COORD_DECIMALS = 4

# Batch size for TIGERweb queries
TIGER_BATCH_SIZE = 50

# Paths
SCRIPT_DIR = Path(__file__).parent
FCC_DATA_DIR = SCRIPT_DIR / 'fcc_data'
BDC_OUTPUT_DIR = SCRIPT_DIR / 'bdc_output'

# Polygon cache (shared across providers)
POLYGON_CACHE = {}  # geoid -> simplified GeoJSON geometry


# ============================================
# STEP 1: SCAN AND READ BDC CSVs
# ============================================

def find_csv_files():
    """Find all BDC CSV files in fcc_data/ directory."""
    if not FCC_DATA_DIR.exists():
        print(f"[ERROR] fcc_data/ directory not found at {FCC_DATA_DIR}")
        print("  Create it and place downloaded BDC CSV files there.")
        sys.exit(1)

    csvs = list(FCC_DATA_DIR.glob('*.csv'))
    if not csvs:
        print(f"[ERROR] No CSV files found in {FCC_DATA_DIR}")
        print("  Download BDC CSVs from https://broadbandmap.fcc.gov/data-download/fixed")
        print("  Select: State=Alabama, Provider=[each provider], Technology=All")
        sys.exit(1)

    print(f"[INFO] Found {len(csvs)} CSV file(s) in fcc_data/")
    for f in csvs:
        print(f"  - {f.name} ({f.stat().st_size / 1e6:.1f} MB)")
    return csvs


def detect_provider_id(csv_path):
    """Try to detect provider ID from filename or CSV header."""
    name = csv_path.stem.lower()
    # Try pattern: bdc_01_PROVIDERID_fixed_broadband_...
    parts = name.split('_')
    for i, p in enumerate(parts):
        if p == STATE_FIPS and i + 1 < len(parts):
            candidate = parts[i + 1]
            if candidate.isdigit():
                return candidate

    # Fallback: read first row and get provider_id column
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            pid = row.get('provider_id', row.get('frn', ''))
            if pid:
                return str(pid)
            break
    return None


def read_bdc_csv(csv_path):
    """Read a BDC CSV, filter to FTTP, aggregate to block group level.

    Returns: dict { block_group_geoid: { bsls: int, blocks: int } }
    """
    print(f"\n[STEP 1] Reading {csv_path.name}...")
    block_groups = defaultdict(lambda: {'bsls': 0, 'blocks': set()})
    total_rows = 0
    fttp_rows = 0

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)

        # Detect column names (BDC format varies slightly)
        fieldnames = reader.fieldnames
        tech_col = 'technology' if 'technology' in fieldnames else 'technology_code'
        geoid_col = 'block_geoid' if 'block_geoid' in fieldnames else 'census_block_geoid'

        # Check for location_id (BSL-level) vs block-level data
        has_location = 'location_id' in fieldnames

        for row in reader:
            total_rows += 1
            tech = int(row.get(tech_col, 0))
            if tech != TECH_FTTP:
                continue

            fttp_rows += 1
            geoid = row.get(geoid_col, '')
            if not geoid:
                continue

            # Block group = first 12 digits of block GEOID
            bg_geoid = geoid[:12]

            # Only include Alabama blocks
            if not bg_geoid.startswith(STATE_FIPS):
                continue

            # Filter to metro counties if configured
            if METRO_COUNTIES and bg_geoid[:5] not in METRO_COUNTIES:
                continue

            block_groups[bg_geoid]['bsls'] += 1
            block_groups[bg_geoid]['blocks'].add(geoid[:15])  # Full block GEOID

    # Convert sets to counts
    for bg in block_groups.values():
        bg['blocks'] = len(bg['blocks'])

    print(f"  Total rows: {total_rows:,}")
    print(f"  FTTP rows: {fttp_rows:,}")
    print(f"  Block groups: {len(block_groups):,}")
    return dict(block_groups)


# ============================================
# STEP 2: FETCH POLYGONS FROM TIGERweb
# ============================================

def fetch_tiger_polygons(geoids):
    """Fetch block group polygon boundaries from Census TIGERweb REST API.

    Uses Layer 8 (Block Groups) with POST queries batched by county.
    """
    print(f"\n[STEP 2] Fetching polygons for {len(geoids)} block groups from TIGERweb...")

    # Check cache first
    uncached = [g for g in geoids if g not in POLYGON_CACHE]
    if len(uncached) < len(geoids):
        print(f"  {len(geoids) - len(uncached)} already cached")

    if not uncached:
        return

    # Group by state+county FIPS (first 5 digits) for efficient queries
    by_county = defaultdict(list)
    for g in uncached:
        county_fips = g[:5]
        by_county[county_fips].append(g)

    total_fetched = 0
    for county, county_geoids in by_county.items():
        state_fips = county[:2]
        county_code = county[2:]

        # Batch queries
        for i in range(0, len(county_geoids), TIGER_BATCH_SIZE):
            batch = county_geoids[i:i + TIGER_BATCH_SIZE]
            geoid_list = "','".join(batch)

            params = {
                'where': f"STATE='{state_fips}' AND COUNTY='{county_code}' AND GEOID IN ('{geoid_list}')",
                'outFields': 'GEOID,AREALAND',
                'f': 'geojson',
                'outSR': '4326',
            }

            url = TIGER_URL + '?' + urlencode(params)

            try:
                req = Request(url, headers={'User-Agent': 'BirminghamFiberGIS/1.0'})
                with urlopen(req, timeout=30) as resp:
                    data = json.loads(resp.read())

                if 'features' in data:
                    for feature in data['features']:
                        geoid = feature['properties'].get('GEOID', '')
                        if geoid and feature.get('geometry'):
                            # Simplify polygon
                            geom = simplify_geometry(feature['geometry'])
                            POLYGON_CACHE[geoid] = {
                                'geometry': geom,
                                'arealand': feature['properties'].get('AREALAND', 0),
                            }
                            total_fetched += 1

                print(f"  County {county}: fetched {len(data.get('features', []))} polygons (batch {i // TIGER_BATCH_SIZE + 1})")

            except Exception as e:
                print(f"  [WARN] Failed to fetch county {county} batch {i}: {e}")

            # Rate limiting
            time.sleep(0.3)

    print(f"  Total polygons fetched: {total_fetched}")
    print(f"  Cache size: {len(POLYGON_CACHE)}")


def simplify_geometry(geojson_geom):
    """Simplify a GeoJSON geometry and round coordinates."""
    if HAS_SHAPELY:
        try:
            geom = shape(geojson_geom)
            simplified = geom.simplify(SIMPLIFY_TOLERANCE, preserve_topology=True)
            result = mapping(simplified)
            # Round coordinates
            result = round_coords(result)
            return result
        except Exception:
            pass

    # Fallback: just round coordinates without simplification
    return round_coords(geojson_geom)


def round_coords(geojson_geom):
    """Round all coordinates in a GeoJSON geometry to N decimal places."""
    def _round(coords):
        if isinstance(coords, (int, float)):
            return round(coords, COORD_DECIMALS)
        elif isinstance(coords, (list, tuple)):
            return [_round(c) for c in coords]
        return coords

    result = dict(geojson_geom)
    if 'coordinates' in result:
        result['coordinates'] = _round(result['coordinates'])
    return result


# ============================================
# STEP 3: BUILD GEOJSON AND WRITE JS FILES
# ============================================

def build_geojson(block_groups, provider_name):
    """Build a GeoJSON FeatureCollection from aggregated block group data."""
    features = []

    for geoid, data in sorted(block_groups.items()):
        cached = POLYGON_CACHE.get(geoid)
        if not cached:
            continue

        # Derive county name from FIPS (simplified)
        county_fips = geoid[:5]
        county_name = COUNTY_NAMES.get(county_fips, f'FIPS {county_fips}')
        state_abbr = 'AL'

        area_sq_km = cached.get('arealand', 0) / 1e6  # Convert sq meters to sq km
        # BSL density per sq km (useful for shading intensity)
        density = (data['bsls'] / area_sq_km) if area_sq_km > 0 else 0

        feature = {
            'type': 'Feature',
            'properties': {
                'id': geoid,
                'bsls': data['bsls'],
                'blocks': data['blocks'],
                'state': state_abbr,
                'county': county_name,
                'areaLandSqKm': round(area_sq_km, 2),
                'density': round(density, 1),
            },
            'geometry': cached['geometry'],
        }
        features.append(feature)

    return {
        'type': 'FeatureCollection',
        'features': features,
    }


def write_js_file(geojson, provider_config):
    """Write GeoJSON to a JS file."""
    BDC_OUTPUT_DIR.mkdir(exist_ok=True)
    filepath = BDC_OUTPUT_DIR / provider_config['file']

    js_content = f"var {provider_config['var']} = {json.dumps(geojson, separators=(',', ':'))};\n"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)

    size_mb = os.path.getsize(filepath) / 1e6
    print(f"  Written: {filepath.name} ({size_mb:.1f} MB, {len(geojson['features'])} features)")


# ============================================
# COUNTY FIPS LOOKUP (Alabama)
# ============================================

COUNTY_NAMES = {
    '01001': 'Autauga', '01003': 'Baldwin', '01005': 'Barbour', '01007': 'Bibb',
    '01009': 'Blount', '01011': 'Bullock', '01013': 'Butler', '01015': 'Calhoun',
    '01017': 'Chambers', '01019': 'Cherokee', '01021': 'Chilton', '01023': 'Choctaw',
    '01025': 'Clarke', '01027': 'Clay', '01029': 'Cleburne', '01031': 'Coffee',
    '01033': 'Colbert', '01035': 'Conecuh', '01037': 'Coosa', '01039': 'Covington',
    '01041': 'Crenshaw', '01043': 'Cullman', '01045': 'Dale', '01047': 'Dallas',
    '01049': 'DeKalb', '01051': 'Elmore', '01053': 'Escambia', '01055': 'Etowah',
    '01057': 'Fayette', '01059': 'Franklin', '01061': 'Geneva', '01063': 'Greene',
    '01065': 'Hale', '01067': 'Henry', '01069': 'Houston', '01071': 'Jackson',
    '01073': 'Jefferson', '01075': 'Lamar', '01077': 'Lauderdale', '01079': 'Lawrence',
    '01081': 'Lee', '01083': 'Limestone', '01085': 'Lowndes', '01087': 'Macon',
    '01089': 'Madison', '01091': 'Marengo', '01093': 'Marion', '01095': 'Marshall',
    '01097': 'Mobile', '01099': 'Monroe', '01101': 'Montgomery', '01103': 'Morgan',
    '01105': 'Perry', '01107': 'Pickens', '01109': 'Pike', '01111': 'Randolph',
    '01113': 'Russell', '01115': 'St. Clair', '01117': 'Shelby', '01119': 'Sumter',
    '01121': 'Talladega', '01123': 'Tallapoosa', '01125': 'Tuscaloosa', '01127': 'Walker',
    '01129': 'Washington', '01131': 'Wilcox', '01133': 'Winston',
}


# ============================================
# MAIN
# ============================================

def main():
    print("=" * 60)
    print("Birmingham Alabama FCC BDC → GeoJSON Pipeline")
    print("=" * 60)

    csv_files = find_csv_files()

    # Process each CSV
    all_geoids = set()
    provider_data = {}  # provider_id -> { block_groups, config }

    for csv_path in csv_files:
        provider_id = detect_provider_id(csv_path)
        if not provider_id:
            print(f"\n[WARN] Could not detect provider ID for {csv_path.name}")
            print("  Skipping. Update PROVIDER_MAP with the correct ID.")
            continue

        config = PROVIDER_MAP.get(provider_id)
        if not config:
            print(f"\n[INFO] Provider ID {provider_id} not in PROVIDER_MAP. Skipping {csv_path.name}")
            print(f"  Add this to PROVIDER_MAP if you want to process it:")
            print(f"  '{provider_id}': {{'var': 'PROVIDER_BDC_COVERAGE', 'file': 'provider_bdc.js', 'name': 'Provider Name'}},")
            continue

        block_groups = read_bdc_csv(csv_path)
        all_geoids.update(block_groups.keys())
        provider_data[provider_id] = {
            'block_groups': block_groups,
            'config': config,
        }

    if not provider_data:
        print("\n[ERROR] No provider data to process.")
        print("  Check that your CSV filenames match expected patterns")
        print("  and that PROVIDER_MAP has the correct FCC provider IDs.")
        sys.exit(1)

    # Fetch all polygons (shared cache)
    fetch_tiger_polygons(list(all_geoids))

    # Build and write JS files
    print(f"\n[STEP 3] Building GeoJSON and writing JS files...")
    for provider_id, pdata in provider_data.items():
        geojson = build_geojson(pdata['block_groups'], pdata['config']['name'])
        write_js_file(geojson, pdata['config'])

    print(f"\n{'=' * 60}")
    print(f"DONE. Output files in {BDC_OUTPUT_DIR}/")
    print(f"Load them in the HTML by placing alongside the map file.")
    print(f"{'=' * 60}")


if __name__ == '__main__':
    main()
