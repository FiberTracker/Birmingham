// ============================================================
// BIRMINGHAM ALABAMA FTTH COMPETITIVE INTELLIGENCE — DATA LAYER
// All data publicly sourced. Every entry has source + sourceUrl.
// Focus: Halo Fiber competitive positioning
// Last updated: February 2026
// ============================================================

// ---- PROVIDER DEFINITIONS ----
const PROVIDERS = {
    halo:      { name: "Halo Fiber",              sponsor: "ARPA-funded startup",        color: "#7C3AED", short: "HLO" },
    att:       { name: "AT&T Fiber",              sponsor: "Public (NYSE: T)",           color: "#009FDB", short: "ATT" },
    lumos:     { name: "Lumos",                   sponsor: "T-Mobile / EQT Partners",    color: "#FF6B00", short: "LUM" },
    cspire:    { name: "C Spire",                 sponsor: "Private (Telapex)",          color: "#00205B", short: "CSP" },
    spectrum:  { name: "Spectrum (Charter)",       sponsor: "Public (NASDAQ: CHTR)",      color: "#0072CE", short: "SPE" },
    comcast:   { name: "Comcast / Xfinity",       sponsor: "Public (NASDAQ: CMCSA)",     color: "#E31937", short: "CMC" },
    windstream:{ name: "Windstream / Kinetic",    sponsor: "Public (WIN)",               color: "#4CAF50", short: "WND" },
    gonetspeed:{ name: "GoNetSpeed",              sponsor: "Oak Hill Capital",           color: "#00A651", short: "GNS" },
    earthlink: { name: "EarthLink",               sponsor: "Public (reseller)",          color: "#F59E0B", short: "EL"  },
};

// ---- OPERATOR PROFILES (public data only) ----
const OPERATOR_PROFILES = [
    {
        id: "halo",
        name: "Halo Fiber",
        sponsor: "ARPA-funded startup",
        hq: "Alabama",
        ceo: "Brian Snider",
        states: ["AL"],
        stateCount: 1,
        metrics: [
            { label: "Focus Area", value: "Black Belt / underserved Alabama", asOf: "Feb 2025", source: "Alabama News Center", sourceUrl: "https://alabamanewscenter.com/2025/02/03/alabama-based-fiber-company-plans-to-help-bring-high-speed-internet-to-underserved-communities-across-the-state/" },
            { label: "Funding Source", value: "ARPA grants (part of $324M AL allocation)", asOf: "Feb 2025", source: "Broadband Breakfast", sourceUrl: "https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/" },
            { label: "Middle-Mile Partner", value: "Alabama Fiber Network (AFN)", asOf: "Feb 2025", source: "Broadband Breakfast", sourceUrl: "https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/" },
            { label: "Service Speeds", value: "250 Mbps to multi-gigabit (symmetric)", asOf: "Feb 2025", source: "Community Networks", sourceUrl: "https://communitynetworks.org/content/new-isp-halo-fiber-leveraging-arpa-grants-help-bridge-alabamas-digital-divide/" },
            { label: "Launch Timeline", value: "First neighborhoods in 2025", asOf: "Feb 2025", source: "The Bama Buzz", sourceUrl: "https://thebamabuzz.com/new-alabama-isp-bringing-high-speed-internet-to-underserved-communities/" },
            { label: "Co-Founder / CMO", value: "Dennis Leonard (Birmingham-based)", asOf: "2025", source: "LinkedIn", sourceUrl: "https://www.linkedin.com/in/dennis-leonard-00aa821b/" },
            { label: "Team Experience", value: "150+ years combined broadband experience", asOf: "Feb 2025", source: "Alabama News Center", sourceUrl: "https://alabamanewscenter.com/2025/02/03/alabama-based-fiber-company-plans-to-help-bring-high-speed-internet-to-underserved-communities-across-the-state/" },
        ]
    },
    {
        id: "att",
        name: "AT&T Fiber",
        sponsor: "Public (NYSE: T)",
        hq: "Dallas, TX",
        ceo: "John Stankey",
        states: ["AL","TX","FL","GA","NC","SC","TN","LA","MS","AR","KY","OH","IN","IL","MI","WI","MO","KS","OK","CA","NV"],
        stateCount: 21,
        metrics: [
            { label: "Birmingham Coverage", value: "91.2% of city", asOf: "2026", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham" },
            { label: "Alabama Locations", value: "590,000+ customer locations in 72 cities", asOf: "2026", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham" },
            { label: "BEAD Award (Alabama)", value: "$93.2M", asOf: "Oct 2025", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
            { label: "National HHP Target", value: "60M by 2030", asOf: "2025", source: "AT&T Investor Day", sourceUrl: "https://investors.att.com/" },
            { label: "Max Speed", value: "5 Gbps symmetric", asOf: "2026", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham" },
            { label: "Lumen Acquisition", value: "Closed Feb 2, 2026 — adds mass-market fiber", asOf: "Feb 2026", source: "AT&T Newsroom", sourceUrl: "https://about.att.com/" },
        ]
    },
    {
        id: "lumos",
        name: "Lumos",
        sponsor: "T-Mobile (50%) / EQT Partners (50%)",
        hq: "Waynesboro, VA",
        ceo: "Not publicly disclosed",
        states: ["VA","WV","NC","AL"],
        stateCount: 4,
        metrics: [
            { label: "Birmingham Metro Passings", value: "~100,000 announced", asOf: "Feb 2025", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/" },
            { label: "Fiber Miles (Birmingham)", value: "1,300+ miles", asOf: "Feb 2025", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/" },
            { label: "T-Mobile / EQT JV", value: "$950M T-Mobile investment for 50% stake, closed Apr 1, 2025", asOf: "Apr 2025", source: "T-Mobile Newsroom", sourceUrl: "https://www.t-mobile.com/news/business/t-mobile-eqt-close-lumos-fiber-jv" },
            { label: "Additional Investment", value: "$500M planned 2027-2028", asOf: "Apr 2025", source: "T-Mobile Newsroom", sourceUrl: "https://www.t-mobile.com/news/business/t-mobile-eqt-close-lumos-fiber-jv" },
            { label: "Existing Network", value: "7,500 miles serving 475,000 homes (Mid-Atlantic)", asOf: "Feb 2025", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/04/t-mobile-and-eqt-close-joint-venture-to-acquire-lumos-and-expand-fiber-internet-access/" },
            { label: "JV Long-Term Target", value: "3.5M homes by end of 2028", asOf: "Apr 2025", source: "T-Mobile Newsroom", sourceUrl: "https://www.t-mobile.com/news/business/t-mobile-eqt-close-lumos-fiber-jv" },
            { label: "Birmingham Markets", value: "Jefferson County, Irondale, Mountain Brook, Homewood, Vestavia Hills, Hoover", asOf: "Feb 2025", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/" },
            { label: "Hoover Franchise", value: "Unanimously approved by City Council", asOf: "Feb 2025", source: "Broadband Communities", sourceUrl: "https://bbcmag.com/lumos-announces-major-fiber-internet-expansion-in-birmingham/" },
        ]
    },
    {
        id: "cspire",
        name: "C Spire",
        sponsor: "Private (Telapex Inc.)",
        hq: "Ridgeland, MS",
        ceo: "Hu Meena",
        states: ["MS","AL","TN"],
        stateCount: 3,
        metrics: [
            { label: "AL/MS Investment", value: "$1 billion (3-year commitment)", asOf: "Jan 2021", source: "C Spire", sourceUrl: "https://www.cspire.com/cms/news/wireless/35600003/C%20Spire%20Invests%20$1%20Billion%20to%20Speed%20Deployment%20of%20Fiber%20Broadband%20and%20Network%20Enhancements%20in%20Alabama" },
            { label: "AL Target Homes", value: "200,000+ homes and businesses (AL/MS combined)", asOf: "2025", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
            { label: "Birmingham Area Builds", value: "Hoover, Homewood (active construction); Pelham, Helena (active)", asOf: "2025", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
            { label: "Other AL Markets", value: "Trussville, Jasper, Tuscaloosa, Northport (launched)", asOf: "2025", source: "Yellowhammer News", sourceUrl: "https://yellowhammernews.com/c-spire-fiber-to-deliver-homewood-residents-ultra-fast-gigabit-internet-firm-plans-further-expansion-of-alabama-footprint/" },
            { label: "Grant Funding", value: "$40.7M (8 state grants + 1 federal RDOF)", asOf: "2025", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
            { label: "AL Cities Launched", value: "50+ cities statewide", asOf: "2025", source: "Yellowhammer News", sourceUrl: "https://yellowhammernews.com/c-spire-fiber-to-deliver-homewood-residents-ultra-fast-gigabit-internet-firm-plans-further-expansion-of-alabama-footprint/" },
            { label: "New Jobs (AL)", value: "250+ planned direct positions", asOf: "2025", source: "C Spire", sourceUrl: "https://www.cspire.com/cms/news/wireless/35600003/C%20Spire%20Invests%20$1%20Billion%20to%20Speed%20Deployment%20of%20Fiber%20Broadband%20and%20Network%20Enhancements%20in%20Alabama" },
        ]
    },
    {
        id: "spectrum",
        name: "Spectrum (Charter Communications)",
        sponsor: "Public (NASDAQ: CHTR)",
        hq: "Stamford, CT",
        ceo: "Chris Winfrey",
        states: ["AL","NY","TX","CA","FL","OH","NC","WI","MO"],
        stateCount: 41,
        metrics: [
            { label: "Birmingham Coverage", value: "92.6% of city (HFC network)", asOf: "2026", source: "BestNeighborhood.org", sourceUrl: "https://bestneighborhood.org/fiber-tv-and-internet-birmingham-al/" },
            { label: "Technology", value: "Hybrid Fiber-Coax (HFC) — fiber backbone + cable delivery", asOf: "2026", source: "Spectrum", sourceUrl: "https://www.spectrum.com/services/alabama/birmingham" },
            { label: "BEAD Award (Alabama)", value: "$16.6M", asOf: "Oct 2025", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
            { label: "AL Expansion", value: "Cullman & Winston Counties gigabit launch", asOf: "2025", source: "Charter Newsroom", sourceUrl: "https://corporate.charter.com/newsroom/spectrum-launches-gigabit-broadband-in-cullman-and-winston-counties-alabama" },
            { label: "Max Speed", value: "Up to 2 Gbps", asOf: "2026", source: "Spectrum", sourceUrl: "https://www.spectrum.com/services/alabama/birmingham" },
        ]
    },
    {
        id: "comcast",
        name: "Comcast / Xfinity",
        sponsor: "Public (NASDAQ: CMCSA)",
        hq: "Philadelphia, PA",
        ceo: "Brian Roberts",
        states: ["AL","PA","IL","FL","CA","MA","NJ","MD","CO","CT","GA","IN","MI","MN","NH","NM","NY","OR","TN","TX","UT","VA","WA"],
        stateCount: 39,
        metrics: [
            { label: "BEAD Award (Alabama)", value: "$157.2M (largest individual award in AL)", asOf: "Oct 2025", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
            { label: "Technology", value: "Fiber + HFC (hybrid fiber-coax)", asOf: "2025", source: "Comcast", sourceUrl: "https://corporate.comcast.com/" },
        ]
    },
    {
        id: "windstream",
        name: "Windstream / Kinetic",
        sponsor: "Public (WIN) — fiber owned by Uniti Group",
        hq: "Little Rock, AR",
        ceo: "Tony Thomas",
        states: ["AL","AR","FL","GA","IA","KY","MN","MO","MS","NC","NE","NM","NY","OH","OK","PA","SC","TX"],
        stateCount: 18,
        metrics: [
            { label: "Birmingham Coverage", value: "4.2% of city", asOf: "2026", source: "Windstream", sourceUrl: "https://www.windstream.com/locations/al/birmingham" },
            { label: "Kinetic Max Speed", value: "Up to 2 Gbps", asOf: "2026", source: "Windstream", sourceUrl: "https://www.windstream.com/locations" },
            { label: "National Footprint", value: "1.6M+ households across 18 states", asOf: "2025", source: "Windstream", sourceUrl: "https://www.windstream.com/locations" },
        ]
    },
    {
        id: "gonetspeed",
        name: "GoNetSpeed",
        sponsor: "Oak Hill Capital",
        hq: "Portland, ME",
        ceo: "Richard Clark",
        states: ["CT","ME","MA","NY","PA","VT","WV","RI","NJ","AL","MO"],
        stateCount: 11,
        metrics: [
            { label: "Alabama Markets", value: "Clay, Blountsville, Brindlee Mountain, Hopper, Morgan City, Somerville, Boaz, Birmingham (limited)", asOf: "2026", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/al/" },
            { label: "Clay, AL Investment", value: "$2.7M (2,600 homes/businesses)", asOf: "2025", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/about/news/gonetspeed-to-bring-gigabit-fiber-internet-to-clay-alabama/" },
            { label: "National Passings", value: "390,000+ (building ~140K/yr)", asOf: "Apr 2023", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/gonetspeed-homes-northeast-targets-fiber-20-new-towns-2023" },
        ]
    },
    {
        id: "earthlink",
        name: "EarthLink",
        sponsor: "Public (reseller / virtual ISP)",
        hq: "Atlanta, GA",
        ceo: "Glenn Goad",
        states: ["AL","GA","FL","TX","CA","NY","IL","PA","OH","NC"],
        stateCount: 50,
        metrics: [
            { label: "Birmingham Coverage", value: "54.6% of city (644,917 people)", asOf: "2026", source: "BestNeighborhood.org", sourceUrl: "https://bestneighborhood.org/fiber-tv-and-internet-birmingham-al/" },
            { label: "Max Speed", value: "Up to 5 Gbps", asOf: "2026", source: "BestNeighborhood.org", sourceUrl: "https://bestneighborhood.org/fiber-tv-and-internet-birmingham-al/" },
            { label: "Note", value: "Resells AT&T, Spectrum, and other carrier capacity — not a facilities-based provider", asOf: "2026", source: "EarthLink", sourceUrl: "https://www.earthlink.net/" },
        ]
    },
];

// ---- MAP MARKERS ----
// Each entry: lat, lng, name, provider, passings, status, notes, source, sourceUrl, size, isNew, overlapWith
const MARKETS = [
    // ======= HALO FIBER =======
    { lat: 32.407, lng: -87.021, name: "Selma / Dallas County, AL", provider: "halo", passings: "ARPA-funded (TBD)", status: "Planned", notes: "Black Belt focus. ARPA grant leveraging AFN middle-mile backbone. First neighborhoods 2025.", source: "Broadband Breakfast", sourceUrl: "https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/", size: 12, isNew: true },
    { lat: 32.443, lng: -87.588, name: "Demopolis / Marengo County, AL", provider: "halo", passings: "ARPA-funded (TBD)", status: "Planned", notes: "Black Belt target area. Severe connectivity gap.", source: "Alabama News Center", sourceUrl: "https://alabamanewscenter.com/2025/02/03/alabama-based-fiber-company-plans-to-help-bring-high-speed-internet-to-underserved-communities-across-the-state/", size: 8, isNew: true },
    { lat: 32.252, lng: -87.534, name: "Linden / Marengo County, AL", provider: "halo", passings: "ARPA-funded (TBD)", status: "Planned", notes: "Black Belt underserved community.", source: "Community Networks", sourceUrl: "https://communitynetworks.org/content/new-isp-halo-fiber-leveraging-arpa-grants-help-bridge-alabamas-digital-divide/", size: 6, isNew: true },
    { lat: 32.297, lng: -87.113, name: "Marion / Perry County, AL", provider: "halo", passings: "ARPA-funded (TBD)", status: "Planned", notes: "Black Belt target. Perry County among most underserved in AL.", source: "The Bama Buzz", sourceUrl: "https://thebamabuzz.com/new-alabama-isp-bringing-high-speed-internet-to-underserved-communities/", size: 6, isNew: true },
    { lat: 31.995, lng: -87.385, name: "Camden / Wilcox County, AL", provider: "halo", passings: "ARPA-funded (TBD)", status: "Planned", notes: "Wilcox County — one of lowest broadband penetration rates in AL.", source: "Broadband Breakfast", sourceUrl: "https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/", size: 6, isNew: true },

    // ======= AT&T FIBER =======
    { lat: 33.520, lng: -86.802, name: "Birmingham (Downtown/UAB)", provider: "att", passings: "Core ILEC — 91.2% metro coverage", status: "Core Market", notes: "ILEC territory. 590K+ locations across 72 AL cities. Spectrum cable incumbent.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 16 },
    { lat: 33.448, lng: -86.799, name: "Homewood, AL", provider: "att", passings: "Served", status: "Active", notes: "Affluent suburb. C Spire + Lumos building into this market.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 10, overlapWith: ["cspire","lumos"] },
    { lat: 33.405, lng: -86.811, name: "Vestavia Hills, AL", provider: "att", passings: "Served", status: "Active", notes: "High-income suburb. Lumos announced entry.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 10, overlapWith: ["lumos"] },
    { lat: 33.375, lng: -86.810, name: "Hoover, AL", provider: "att", passings: "Served", status: "Active", notes: "Largest suburb. Triple fiber overbuild zone: AT&T + Lumos + C Spire.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 14, overlapWith: ["cspire","lumos"] },
    { lat: 33.487, lng: -86.750, name: "Mountain Brook, AL", provider: "att", passings: "Served", status: "Active", notes: "Wealthiest suburb. Lumos announced entry.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 9, overlapWith: ["lumos"] },
    { lat: 33.558, lng: -86.753, name: "Irondale, AL", provider: "att", passings: "Served", status: "Active", notes: "Eastern suburb. Lumos announced entry.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 8, overlapWith: ["lumos"] },
    { lat: 33.619, lng: -86.594, name: "Trussville, AL", provider: "att", passings: "Served", status: "Active", notes: "C Spire has also launched here.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 10, overlapWith: ["cspire"] },
    { lat: 33.553, lng: -86.661, name: "Center Point, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 8 },
    { lat: 33.401, lng: -86.954, name: "Bessemer, AL", provider: "att", passings: "Served", status: "Active", notes: "Western suburb.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 10 },
    { lat: 33.244, lng: -86.844, name: "Alabaster, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 8 },
    { lat: 33.301, lng: -86.735, name: "Pelham, AL", provider: "att", passings: "Served", status: "Active", notes: "C Spire active build in this market.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 8, overlapWith: ["cspire"] },
    { lat: 33.295, lng: -86.843, name: "Helena, AL", provider: "att", passings: "Served", status: "Active", notes: "C Spire active build.", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 7, overlapWith: ["cspire"] },
    { lat: 33.340, lng: -86.614, name: "Chelsea, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 7 },
    { lat: 33.475, lng: -86.951, name: "Pleasant Grove, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 7 },
    { lat: 33.488, lng: -86.899, name: "Hueytown, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 7 },
    { lat: 33.444, lng: -86.670, name: "Leeds, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 6 },
    { lat: 33.661, lng: -86.812, name: "Gardendale, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 8 },
    { lat: 33.734, lng: -86.800, name: "Fultondale, AL", provider: "att", passings: "Served", status: "Active", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham", size: 6 },

    // ======= LUMOS (T-Mobile / EQT) =======
    { lat: 33.515, lng: -86.810, name: "Birmingham Metro (Lumos)", provider: "lumos", passings: "100,000 announced", status: "Construction", notes: "1,300+ fiber miles. Feb 2025 announcement. Engineering underway, construction starting 2025.", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/", size: 16, isNew: true, overlapWith: ["att","spectrum"] },
    { lat: 33.380, lng: -86.815, name: "Hoover, AL (Lumos)", provider: "lumos", passings: "Part of 100K metro", status: "Construction", notes: "Hoover City Council unanimously approved franchise. T-Mobile/EQT JV backing.", source: "Broadband Communities", sourceUrl: "https://bbcmag.com/lumos-announces-major-fiber-internet-expansion-in-birmingham/", size: 12, isNew: true, overlapWith: ["att","cspire"] },
    { lat: 33.407, lng: -86.808, name: "Vestavia Hills, AL (Lumos)", provider: "lumos", passings: "Part of 100K metro", status: "Construction", notes: "Named in Lumos Birmingham metro announcement.", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/", size: 10, isNew: true, overlapWith: ["att"] },
    { lat: 33.450, lng: -86.797, name: "Homewood, AL (Lumos)", provider: "lumos", passings: "Part of 100K metro", status: "Construction", notes: "Named in Lumos Birmingham metro announcement.", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/", size: 10, isNew: true, overlapWith: ["att","cspire"] },
    { lat: 33.490, lng: -86.748, name: "Mountain Brook, AL (Lumos)", provider: "lumos", passings: "Part of 100K metro", status: "Construction", notes: "Named in Lumos Birmingham metro announcement.", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/", size: 9, isNew: true, overlapWith: ["att"] },
    { lat: 33.560, lng: -86.750, name: "Irondale, AL (Lumos)", provider: "lumos", passings: "Part of 100K metro", status: "Construction", notes: "Named in Lumos Birmingham metro announcement.", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/", size: 8, isNew: true, overlapWith: ["att"] },

    // ======= C SPIRE =======
    { lat: 33.378, lng: -86.808, name: "Hoover, AL (C Spire)", provider: "cspire", passings: "Active build", status: "Active Build", notes: "Part of $1B AL/MS investment. Under construction.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 12, isNew: true, overlapWith: ["att","lumos"] },
    { lat: 33.446, lng: -86.801, name: "Homewood, AL (C Spire)", provider: "cspire", passings: "Active build", status: "Active Build", notes: "Under construction. Gigabit fiber service.", source: "Yellowhammer News", sourceUrl: "https://yellowhammernews.com/c-spire-fiber-to-deliver-homewood-residents-ultra-fast-gigabit-internet-firm-plans-further-expansion-of-alabama-footprint/", size: 10, isNew: true, overlapWith: ["att","lumos"] },
    { lat: 33.299, lng: -86.733, name: "Pelham, AL (C Spire)", provider: "cspire", passings: "Active build", status: "Active Build", notes: "Part of Birmingham metro expansion.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 10, isNew: true, overlapWith: ["att"] },
    { lat: 33.293, lng: -86.845, name: "Helena, AL (C Spire)", provider: "cspire", passings: "Active build", status: "Active Build", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 8, isNew: true, overlapWith: ["att"] },
    { lat: 33.621, lng: -86.590, name: "Trussville, AL (C Spire)", provider: "cspire", passings: "Launched", status: "Active", notes: "Service already live.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 10, overlapWith: ["att"] },
    { lat: 33.831, lng: -87.277, name: "Jasper, AL (C Spire)", provider: "cspire", passings: "Launched", status: "Active", notes: "Walker County. C Spire launched.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 8 },
    { lat: 33.210, lng: -87.569, name: "Tuscaloosa, AL (C Spire)", provider: "cspire", passings: "Launched", status: "Active", notes: "University of Alabama market.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 12 },
    { lat: 33.231, lng: -87.584, name: "Northport, AL (C Spire)", provider: "cspire", passings: "Launched", status: "Active", notes: "Adjacent to Tuscaloosa.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/", size: 8 },

    // ======= SPECTRUM (CHARTER) =======
    { lat: 33.525, lng: -86.795, name: "Birmingham Metro (Spectrum)", provider: "spectrum", passings: "92.6% coverage (HFC)", status: "Core Market", notes: "Primary cable incumbent. HFC network with fiber backbone. Up to 2 Gbps.", source: "BestNeighborhood.org", sourceUrl: "https://bestneighborhood.org/fiber-tv-and-internet-birmingham-al/", size: 16 },
    { lat: 34.067, lng: -86.877, name: "Cullman County, AL (Spectrum)", provider: "spectrum", passings: "Gigabit launch", status: "Expanding", notes: "Cullman & Winston Counties gigabit broadband.", source: "Charter Newsroom", sourceUrl: "https://corporate.charter.com/newsroom/spectrum-launches-gigabit-broadband-in-cullman-and-winston-counties-alabama", size: 8 },

    // ======= COMCAST / XFINITY =======
    { lat: 33.529, lng: -86.790, name: "Birmingham (Comcast)", provider: "comcast", passings: "$157.2M BEAD statewide", status: "Expanding", notes: "Largest BEAD recipient in Alabama. Fiber + HFC.", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/", size: 10 },

    // ======= WINDSTREAM / KINETIC =======
    { lat: 33.535, lng: -86.788, name: "Birmingham (Windstream)", provider: "windstream", passings: "4.2% coverage", status: "Active", notes: "Limited Birmingham presence. Kinetic brand for fiber/high-speed.", source: "Windstream", sourceUrl: "https://www.windstream.com/locations/al/birmingham", size: 6 },

    // ======= GONETSPEED (OAK HILL) =======
    { lat: 33.700, lng: -86.527, name: "Clay, AL (GoNetSpeed)", provider: "gonetspeed", passings: "2,600 homes ($2.7M)", status: "Active", notes: "Privately funded 100% fiber buildout.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/about/news/gonetspeed-to-bring-gigabit-fiber-internet-to-clay-alabama/", size: 8 },
    { lat: 33.960, lng: -86.566, name: "Blountsville, AL (GoNetSpeed)", provider: "gonetspeed", passings: "Limited", status: "Active", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/al/", size: 6 },
    { lat: 34.100, lng: -86.516, name: "Boaz, AL (GoNetSpeed)", provider: "gonetspeed", passings: "Limited", status: "Active", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/al/", size: 6 },
];

// ---- CENSUS TRACT OVERLAP ANALYSIS ZONES ----
const CENSUS_TRACTS = {
    birmingham_core: {
        county: 'Jefferson',
        state: 'Alabama',
        fips: '01073',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.5207,-86.8025&zoom=11',
        tracts: [
            {
                id: 'BHM-001',
                name: 'Downtown Birmingham / UAB',
                coords: [[33.540, -86.830], [33.540, -86.775], [33.500, -86.775], [33.500, -86.830]],
                housingUnits: 18500,
                density: 'urban',
                costPerPassing: 750,
                provider: 'AT&T Fiber + Spectrum (HFC)',
                permitStatus: 'AT&T ILEC Core + Lumos Announced',
                sourceType: 'AT&T + Lumos Fiber',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'AT&T 91.2% Birmingham coverage; Lumos 100K metro passings announced Feb 2025',
                notes: 'AT&T ILEC territory. Spectrum cable incumbent. Lumos announced overbuild Feb 2025.',
                isNew: false,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.5207,-86.8025&zoom=14',
                fccProviders: []
            },
            {
                id: 'BHM-002',
                name: 'Southside / Five Points',
                coords: [[33.510, -86.810], [33.510, -86.770], [33.490, -86.770], [33.490, -86.810]],
                housingUnits: 8500,
                density: 'urban',
                costPerPassing: 750,
                provider: 'AT&T Fiber + Spectrum (HFC)',
                permitStatus: 'AT&T ILEC Core',
                sourceType: 'AT&T',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'Part of AT&T 91.2% Birmingham coverage area',
                notes: 'Dense urban neighborhood. Strong AT&T presence.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.5000,-86.7900&zoom=14',
                fccProviders: []
            },
        ]
    },
    hoover_vestavia: {
        county: 'Jefferson / Shelby',
        state: 'Alabama',
        fips: '01073/01117',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.3900,-86.8100&zoom=12',
        tracts: [
            {
                id: 'HVR-001',
                name: 'Hoover (Central)',
                coords: [[33.400, -86.840], [33.400, -86.780], [33.360, -86.780], [33.360, -86.840]],
                housingUnits: 25000,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'AT&T + C Spire + Lumos (Triple)',
                permitStatus: 'Triple Overbuild — All Active',
                sourceType: 'Lumos + Telecompetitor + AT&T',
                sourceUrl: 'https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/',
                sourceText: 'Lumos franchise approved by Hoover City Council; C Spire active construction; AT&T ILEC incumbent',
                notes: 'HIGHEST OVERLAP ZONE. Three fiber providers + Spectrum cable. Birmingham\'s largest suburb (~85K pop).',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.3750,-86.8100&zoom=14',
                fccProviders: []
            },
            {
                id: 'HVR-002',
                name: 'Vestavia Hills',
                coords: [[33.425, -86.830], [33.425, -86.790], [33.395, -86.790], [33.395, -86.830]],
                housingUnits: 14000,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'AT&T + Lumos',
                permitStatus: 'AT&T Core + Lumos Announced',
                sourceType: 'Lumos Fiber + AT&T',
                sourceUrl: 'https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/',
                sourceText: 'Named in Lumos Birmingham metro announcement',
                notes: 'Affluent suburb. AT&T core territory. Lumos entering.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4050,-86.8110&zoom=14',
                fccProviders: []
            },
        ]
    },
    mountain_brook_homewood: {
        county: 'Jefferson',
        state: 'Alabama',
        fips: '01073',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4600,-86.7700&zoom=13',
        tracts: [
            {
                id: 'MBH-001',
                name: 'Mountain Brook',
                coords: [[33.505, -86.770], [33.505, -86.720], [33.470, -86.720], [33.470, -86.770]],
                housingUnits: 8500,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'AT&T + Lumos',
                permitStatus: 'AT&T Core + Lumos Announced',
                sourceType: 'Lumos Fiber',
                sourceUrl: 'https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/',
                sourceText: 'Mountain Brook named in Lumos Birmingham metro announcement',
                notes: 'Wealthiest Birmingham suburb (median HHI ~$130K). AT&T incumbent + Lumos entering.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4870,-86.7500&zoom=14',
                fccProviders: []
            },
            {
                id: 'MBH-002',
                name: 'Homewood',
                coords: [[33.470, -86.820], [33.470, -86.780], [33.435, -86.780], [33.435, -86.820]],
                housingUnits: 11500,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'AT&T + C Spire + Lumos (Triple)',
                permitStatus: 'Triple Overbuild — All Active',
                sourceType: 'Yellowhammer News + Lumos',
                sourceUrl: 'https://yellowhammernews.com/c-spire-fiber-to-deliver-homewood-residents-ultra-fast-gigabit-internet-firm-plans-further-expansion-of-alabama-footprint/',
                sourceText: 'C Spire under construction in Homewood; Lumos announced entry; AT&T ILEC incumbent',
                notes: 'TRIPLE OVERBUILD. AT&T core + C Spire active build + Lumos announced. Plus Spectrum cable.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4480,-86.7990&zoom=14',
                fccProviders: []
            },
        ]
    },
    south_suburbs: {
        county: 'Shelby',
        state: 'Alabama',
        fips: '01117',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.3000,-86.7500&zoom=11',
        tracts: [
            {
                id: 'SS-001',
                name: 'Pelham',
                coords: [[33.320, -86.760], [33.320, -86.710], [33.280, -86.710], [33.280, -86.760]],
                housingUnits: 10000,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'AT&T + C Spire',
                permitStatus: 'Both Active',
                sourceType: 'Telecompetitor',
                sourceUrl: 'https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/',
                sourceText: 'C Spire active build in Pelham; AT&T ILEC coverage',
                notes: 'Growing suburban market. C Spire actively building. AT&T incumbent.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.3010,-86.7350&zoom=14',
                fccProviders: []
            },
            {
                id: 'SS-002',
                name: 'Helena',
                coords: [[33.310, -86.870], [33.310, -86.820], [33.275, -86.820], [33.275, -86.870]],
                housingUnits: 7500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'AT&T + C Spire',
                permitStatus: 'Both Active',
                sourceType: 'Telecompetitor',
                sourceUrl: 'https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/',
                sourceText: 'C Spire active build in Helena',
                notes: 'Fast-growing suburb south of Hoover. Dual fiber build.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.2950,-86.8430&zoom=14',
                fccProviders: []
            },
            {
                id: 'SS-003',
                name: 'Alabaster',
                coords: [[33.270, -86.870], [33.270, -86.820], [33.230, -86.820], [33.230, -86.870]],
                housingUnits: 13000,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'AT&T',
                permitStatus: 'AT&T Active',
                sourceType: 'AT&T',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'Part of AT&T Alabama service territory',
                notes: 'Shelby County\'s second-largest city. AT&T incumbent, no announced overbuild yet.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.2440,-86.8440&zoom=14',
                fccProviders: []
            },
            {
                id: 'SS-004',
                name: 'Chelsea',
                coords: [[33.360, -86.640], [33.360, -86.590], [33.320, -86.590], [33.320, -86.640]],
                housingUnits: 6000,
                density: 'suburban',
                costPerPassing: 900,
                provider: 'AT&T',
                permitStatus: 'AT&T Active',
                sourceType: 'AT&T',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'Part of AT&T Alabama service territory',
                notes: 'Rapidly growing eastern suburb.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.3400,-86.6140&zoom=14',
                fccProviders: []
            },
        ]
    },
    north_jefferson: {
        county: 'Jefferson',
        state: 'Alabama',
        fips: '01073',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.6200,-86.5600&zoom=11',
        tracts: [
            {
                id: 'NJ-001',
                name: 'Trussville',
                coords: [[33.640, -86.620], [33.640, -86.560], [33.600, -86.560], [33.600, -86.620]],
                housingUnits: 9500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'AT&T + C Spire',
                permitStatus: 'Both Active',
                sourceType: 'Telecompetitor',
                sourceUrl: 'https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/',
                sourceText: 'C Spire launched in Trussville',
                notes: 'C Spire already live. AT&T incumbent.',
                isNew: false,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.6190,-86.5940&zoom=14',
                fccProviders: []
            },
            {
                id: 'NJ-002',
                name: 'Clay / Chalkville',
                coords: [[33.720, -86.560], [33.720, -86.500], [33.680, -86.500], [33.680, -86.560]],
                housingUnits: 5000,
                density: 'suburban',
                costPerPassing: 900,
                provider: 'GoNetSpeed',
                permitStatus: 'GoNetSpeed Active ($2.7M)',
                sourceType: 'GoNetSpeed',
                sourceUrl: 'https://www.gonetspeed.com/about/news/gonetspeed-to-bring-gigabit-fiber-internet-to-clay-alabama/',
                sourceText: 'GoNetSpeed $2.7M fiber buildout serving 2,600 homes in Clay',
                notes: 'GoNetSpeed is the primary fiber provider here. Limited AT&T/Spectrum coverage.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.7000,-86.5270&zoom=14',
                fccProviders: []
            },
            {
                id: 'NJ-003',
                name: 'Gardendale',
                coords: [[33.680, -86.840], [33.680, -86.790], [33.645, -86.790], [33.645, -86.840]],
                housingUnits: 6500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'AT&T',
                permitStatus: 'AT&T Active',
                sourceType: 'AT&T',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'Part of AT&T Alabama service territory',
                notes: 'Northern suburb. AT&T incumbent.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.6610,-86.8120&zoom=14',
                fccProviders: []
            },
        ]
    },
    west_jefferson: {
        county: 'Jefferson',
        state: 'Alabama',
        fips: '01073',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4000,-86.9500&zoom=11',
        tracts: [
            {
                id: 'WJ-001',
                name: 'Bessemer',
                coords: [[33.420, -86.980], [33.420, -86.930], [33.380, -86.930], [33.380, -86.980]],
                housingUnits: 12000,
                density: 'urban',
                costPerPassing: 800,
                provider: 'AT&T + Spectrum (HFC)',
                permitStatus: 'AT&T Active',
                sourceType: 'AT&T',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'Part of AT&T Alabama service territory',
                notes: 'Western suburb. Industrial base. No announced fiber overbuild.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4010,-86.9540&zoom=14',
                fccProviders: []
            },
            {
                id: 'WJ-002',
                name: 'Hueytown / Pleasant Grove',
                coords: [[33.500, -86.970], [33.500, -86.890], [33.465, -86.890], [33.465, -86.970]],
                housingUnits: 9000,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'AT&T',
                permitStatus: 'AT&T Active',
                sourceType: 'AT&T',
                sourceUrl: 'https://www.att.com/local/fiber/alabama/birmingham',
                sourceText: 'Part of AT&T Alabama service territory',
                notes: 'Western suburbs. AT&T incumbent.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=33.4880,-86.8990&zoom=14',
                fccProviders: []
            },
        ]
    },
    black_belt: {
        county: 'Dallas / Perry / Wilcox / Marengo',
        state: 'Alabama',
        fips: '01047/01105/01131/01091',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=32.4000,-87.0000&zoom=9',
        tracts: [
            {
                id: 'BB-001',
                name: 'Selma / Dallas County',
                coords: [[32.450, -87.080], [32.450, -86.960], [32.370, -86.960], [32.370, -87.080]],
                housingUnits: 8000,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'Halo Fiber (Planned)',
                permitStatus: 'ARPA Grant — Planned',
                sourceType: 'Broadband Breakfast + Meridiam',
                sourceUrl: 'https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/',
                sourceText: 'Halo Fiber leveraging ARPA grants; Meridiam also building $230M fiber in Black Belt',
                notes: 'HALO FIBER PRIMARY TARGET. Severe digital divide. Meridiam also building $230M project in overlapping counties. AFN middle-mile backbone nearing completion.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=32.4070,-87.0210&zoom=12',
                fccProviders: []
            },
            {
                id: 'BB-002',
                name: 'Perry County (Marion)',
                coords: [[32.340, -87.170], [32.340, -87.060], [32.260, -87.060], [32.260, -87.170]],
                housingUnits: 3500,
                density: 'rural',
                costPerPassing: 1200,
                provider: 'Halo Fiber (Planned)',
                permitStatus: 'ARPA Grant — Planned',
                sourceType: 'Alabama News Center',
                sourceUrl: 'https://alabamanewscenter.com/2025/02/03/alabama-based-fiber-company-plans-to-help-bring-high-speed-internet-to-underserved-communities-across-the-state/',
                sourceText: 'Halo Fiber plans to serve underserved communities across Alabama',
                notes: 'Among most underserved counties in Alabama. Very low broadband penetration.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=32.2970,-87.1130&zoom=12',
                fccProviders: []
            },
            {
                id: 'BB-003',
                name: 'Wilcox County (Camden)',
                coords: [[32.050, -87.430], [32.050, -87.340], [31.940, -87.340], [31.940, -87.430]],
                housingUnits: 3000,
                density: 'rural',
                costPerPassing: 1300,
                provider: 'Halo Fiber (Planned)',
                permitStatus: 'ARPA Grant — Planned',
                sourceType: 'Broadband Breakfast',
                sourceUrl: 'https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/',
                sourceText: 'Halo targeting Black Belt underserved communities',
                notes: 'One of lowest broadband penetration rates in Alabama.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=31.9950,-87.3850&zoom=12',
                fccProviders: []
            },
            {
                id: 'BB-004',
                name: 'Marengo County (Demopolis/Linden)',
                coords: [[32.480, -87.640], [32.480, -87.490], [32.370, -87.490], [32.370, -87.640]],
                housingUnits: 4000,
                density: 'rural',
                costPerPassing: 1200,
                provider: 'Halo Fiber (Planned) + Meridiam',
                permitStatus: 'ARPA Grant (Halo) + Meridiam $230M Project',
                sourceType: 'Meridiam + Alabama News Center',
                sourceUrl: 'https://www.meridiam.com/news/meridiam-breaks-ground-in-selma-alabama-on-transformative-fiber-infrastructure-project/',
                sourceText: 'Meridiam $230M fiber project covering Marengo County; Halo also targeting area',
                notes: 'Potential overlap between Halo Fiber and Meridiam/Omnipoint. Meridiam targets 53K homes across 8 counties.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=32.4430,-87.5880&zoom=12',
                fccProviders: []
            },
        ]
    },
};

// ---- BUILD PIPELINE ----
const BUILD_PIPELINE = [
    { provider: "lumos", market: "Birmingham Metro (100K passings)", state: "AL", status: "CONSTRUCTION", targetHHP: "100,000 passings (1,300 miles)", timeline: "Feb 2025 announcement; H2 2025 target", overlap: "AT&T (91.2%) + Spectrum (92.6%)", overlapRisk: "High", notes: "T-Mobile/EQT JV. Hoover franchise approved.", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/" },
    { provider: "cspire", market: "Hoover / Homewood", state: "AL", status: "CONSTRUCTION", targetHHP: "Part of $1B AL/MS", timeline: "Active construction 2025", overlap: "AT&T + Lumos", overlapRisk: "High", notes: "Triple overbuild zone.", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
    { provider: "cspire", market: "Pelham / Helena", state: "AL", status: "ACTIVE", targetHHP: "Part of $1B AL/MS", timeline: "Active 2025", overlap: "AT&T", overlapRisk: "Medium", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
    { provider: "halo", market: "Black Belt (Selma / Perry / Wilcox / Marengo)", state: "AL", status: "PLANNED", targetHHP: "ARPA-funded (TBD)", timeline: "First neighborhoods 2025", overlap: "Meridiam/Omnipoint (partial)", overlapRisk: "Low", notes: "Leveraging AFN middle-mile. Greenfield underserved.", source: "Broadband Breakfast", sourceUrl: "https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/" },
    { provider: "att", market: "Alabama (BEAD locations)", state: "AL", status: "EXPANDING", targetHHP: "$93.2M BEAD award", timeline: "2025-2028", overlap: "N/A (unserved)", overlapRisk: "Low", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
    { provider: "comcast", market: "Alabama (BEAD locations)", state: "AL", status: "EXPANDING", targetHHP: "$157.2M BEAD (largest AL award)", timeline: "2025-2028", overlap: "N/A (unserved)", overlapRisk: "Low", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
    { provider: "spectrum", market: "Alabama (BEAD + Cullman/Winston)", state: "AL", status: "EXPANDING", targetHHP: "$16.6M BEAD + gigabit launches", timeline: "2025-2028", overlap: "N/A", overlapRisk: "Low", source: "Brander Group / Charter", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
    { provider: "gonetspeed", market: "Clay / Blountsville / Boaz", state: "AL", status: "ACTIVE", targetHHP: "2,600 homes (Clay) + others", timeline: "Active", overlap: "Low", overlapRisk: "Low", notes: "Small rural builds. $2.7M Clay investment.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/about/news/gonetspeed-to-bring-gigabit-fiber-internet-to-clay-alabama/" },
    { provider: "cspire", market: "Tuscaloosa / Northport / Jasper", state: "AL", status: "ACTIVE", targetHHP: "Part of 50+ AL cities", timeline: "Launched", overlap: "AT&T", overlapRisk: "Medium", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
];

// ---- OVERLAP MATRIX (market-by-operator grid) ----
const OVERLAP_MATRIX = [
    { market: "Downtown Birmingham", state: "AL", att: "core", lumos: "building", cspire: null, spectrum: "core", halo: null, comcast: "limited", gonetspeed: null, risk: "HIGH", sourceNote: "AT&T ILEC + Lumos 100K overbuild + Spectrum HFC." },
    { market: "Hoover", state: "AL", att: "core", lumos: "building", cspire: "active", spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "HIGH", sourceNote: "Triple fiber: AT&T + Lumos + C Spire. Plus Spectrum cable." },
    { market: "Homewood", state: "AL", att: "core", lumos: "building", cspire: "active", spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "HIGH", sourceNote: "Triple fiber: AT&T + Lumos + C Spire. Affluent suburb." },
    { market: "Vestavia Hills", state: "AL", att: "core", lumos: "building", cspire: null, spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "AT&T + Lumos. No C Spire announced yet." },
    { market: "Mountain Brook", state: "AL", att: "core", lumos: "building", cspire: null, spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "AT&T + Lumos. Wealthiest suburb." },
    { market: "Irondale", state: "AL", att: "core", lumos: "building", cspire: null, spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "AT&T + Lumos." },
    { market: "Pelham", state: "AL", att: "active", lumos: null, cspire: "active", spectrum: "active", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "AT&T + C Spire dual build." },
    { market: "Helena", state: "AL", att: "active", lumos: null, cspire: "active", spectrum: "active", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "AT&T + C Spire dual build." },
    { market: "Trussville", state: "AL", att: "core", lumos: null, cspire: "active", spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "AT&T + C Spire. C Spire already live." },
    { market: "Clay / Blountsville", state: "AL", att: "limited", lumos: null, cspire: null, spectrum: null, halo: null, comcast: null, gonetspeed: "active", risk: "Low", sourceNote: "GoNetSpeed rural presence. $2.7M Clay investment." },
    { market: "Bessemer", state: "AL", att: "active", lumos: null, cspire: null, spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "Low", sourceNote: "AT&T + Spectrum only." },
    { market: "Gardendale", state: "AL", att: "active", lumos: null, cspire: null, spectrum: "core", halo: null, comcast: null, gonetspeed: null, risk: "Low", sourceNote: "AT&T + Spectrum only." },
    { market: "Black Belt (Selma area)", state: "AL", att: null, lumos: null, cspire: null, spectrum: null, halo: "planned", comcast: null, gonetspeed: null, risk: "Low", sourceNote: "Halo Fiber ARPA-funded. Greenfield underserved. Meridiam also building nearby." },
    { market: "Tuscaloosa", state: "AL", att: "active", lumos: null, cspire: "active", spectrum: "active", halo: null, comcast: null, gonetspeed: null, risk: "Medium", sourceNote: "C Spire launched. AT&T incumbent." },
];

// ---- CALCULATIONS (methodology for derived metrics) ----
const CALCULATIONS = {
    beadAlabama: {
        label: "Total Alabama BEAD Awards (Major Carriers)",
        result: "$267.0M",
        formula: "AT&T ($93.2M) + Comcast ($157.2M) + Spectrum ($16.6M)",
        inputs: [
            { label: "AT&T / BellSouth BEAD", value: "$93.2M", asOf: "Oct 2025", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
            { label: "Comcast Cable BEAD", value: "$157.2M", asOf: "Oct 2025", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
            { label: "Charter / Spectrum BEAD", value: "$16.6M", asOf: "Oct 2025", source: "Brander Group", sourceUrl: "https://brandergroup.net/2025/11/bead-broadband-status-awards-by-state-october-2025/" },
        ],
        caveat: "These are provisional awards. BEAD targets unserved/underserved locations — not Birmingham metro core. Total AL BEAD allocation: $1.4B. C Spire's $40.7M are separate state/ADECA grants, not BEAD."
    },
    lumosPassings: {
        label: "Lumos Birmingham Metro Target",
        result: "100,000 passings",
        formula: "Announced Feb 2025: ~100K passings across 1,300+ fiber miles in Jefferson County metro",
        inputs: [
            { label: "Announced passings", value: "~100,000", asOf: "Feb 2025", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/" },
            { label: "Fiber miles", value: "1,300+", asOf: "Feb 2025", source: "Lumos Fiber", sourceUrl: "https://www.lumosfiber.com/blog/2025/02/05/lumos-expands-into-alabama-building-nearly-1300-miles-of-its-100-fiber-optic-internet-to-reach-nearly-100k-passings-in-birmingham-metro/" },
            { label: "T-Mobile/EQT JV investment", value: "$950M (T-Mobile) + $500M planned 2027-28", asOf: "Apr 2025", source: "T-Mobile Newsroom", sourceUrl: "https://www.t-mobile.com/news/business/t-mobile-eqt-close-lumos-fiber-jv" },
        ],
        caveat: "First-time Alabama entry. Specific sub-market allocation within 100K not yet disclosed. Hoover franchise unanimously approved."
    },
    cspireInvestment: {
        label: "C Spire Alabama/Mississippi Investment",
        result: "$1B+ total commitment",
        formula: "$1B corporate investment + $40.7M grants",
        inputs: [
            { label: "3-year investment commitment", value: "$1 billion (AL + MS)", asOf: "Jan 2021", source: "C Spire", sourceUrl: "https://www.cspire.com/cms/news/wireless/35600003/C%20Spire%20Invests%20$1%20Billion%20to%20Speed%20Deployment%20of%20Fiber%20Broadband%20and%20Network%20Enhancements%20in%20Alabama" },
            { label: "Grant funding secured", value: "$40.7M (8 state + 1 federal)", asOf: "2025", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
            { label: "Target homes (AL/MS)", value: "200,000+", asOf: "2025", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/c-spire-fiber-projects-underway-in-numerous-alabama-markets/" },
        ],
        caveat: "Investment covers both Alabama and Mississippi. AL-specific allocation not publicly broken out."
    },
    attBirminghamCoverage: {
        label: "AT&T Fiber Birmingham Coverage",
        result: "91.2%",
        formula: "Per AT&T availability checker for Birmingham, AL market",
        inputs: [
            { label: "City coverage %", value: "91.2%", asOf: "2026", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham" },
            { label: "AL customer locations", value: "590,000+ across 72 cities", asOf: "2026", source: "AT&T", sourceUrl: "https://www.att.com/local/fiber/alabama/birmingham" },
        ],
        caveat: "Self-reported by AT&T. May include FTTN (fiber-to-node) addresses alongside true FTTP. Verify against FCC BDC for FTTP-only counts."
    },
    tripleOverbuild: {
        label: "Triple Overbuild Housing Units (Hoover + Homewood)",
        result: "~36,500 housing units",
        formula: "Hoover Central (~25,000 HU) + Homewood (~11,500 HU)",
        inputs: [
            { label: "Hoover Central HU estimate", value: "~25,000", asOf: "2020 Census est.", source: "Census / Hoover City", sourceUrl: "https://www.census.gov/quickfacts/hoovercityalabama" },
            { label: "Homewood HU estimate", value: "~11,500", asOf: "2020 Census est.", source: "Census / Homewood City", sourceUrl: "https://www.census.gov/quickfacts/homewoodcityalabama" },
        ],
        caveat: "Housing unit estimates based on 2020 Census QuickFacts. Actual fiber passings may differ from total HU based on network design and construction scope."
    },
    haloFunding: {
        label: "Halo Fiber Funding Context",
        result: "ARPA-backed (part of $324M AL allocation)",
        formula: "Alabama invested $324M ARPA on middle-mile; Halo leveraging for last-mile",
        inputs: [
            { label: "Alabama total ARPA broadband", value: "$324M (middle-mile)", asOf: "2025", source: "Broadband Breakfast", sourceUrl: "https://broadbandbreakfast.com/new-isp-halo-fiber-leveraging-arpa-grants-to-help-bridge-alabamas-digital-divide/" },
            { label: "AFN backbone", value: "3,500 miles across all 67 counties", asOf: "Nov 2025", source: "Governor Ivey", sourceUrl: "https://governor.alabama.gov/newsroom/2025/11/governor-ivey-celebrates-major-milestone-in-alabamas-statewide-middle-mile-fiber-network-/" },
            { label: "AFN BEAD award", value: "$82.4M (Sep 2022)", asOf: "Sep 2022", source: "Governor Ivey", sourceUrl: "https://governor.alabama.gov/newsroom/2025/11/governor-ivey-celebrates-major-milestone-in-alabamas-statewide-middle-mile-fiber-network-/" },
        ],
        caveat: "Halo Fiber's specific grant amounts not publicly disclosed. Company is leveraging ARPA middle-mile (AFN) to reduce last-mile build costs."
    },
    meridiam: {
        label: "Meridiam Black Belt Fiber Project",
        result: "$230M / 53,000 homes",
        formula: "Meridiam 100%-funded project across 8 Black Belt counties",
        inputs: [
            { label: "Total investment", value: "$230M", asOf: "2024", source: "Meridiam", sourceUrl: "https://www.meridiam.com/news/meridiam-breaks-ground-in-selma-alabama-on-transformative-fiber-infrastructure-project/" },
            { label: "Target homes/businesses", value: "53,000", asOf: "2024", source: "Meridiam", sourceUrl: "https://www.meridiam.com/news/meridiam-breaks-ground-in-selma-alabama-on-transformative-fiber-infrastructure-project/" },
            { label: "Fiber route miles", value: "300+", asOf: "2024", source: "Meridiam", sourceUrl: "https://www.meridiam.com/news/meridiam-breaks-ground-in-selma-alabama-on-transformative-fiber-infrastructure-project/" },
            { label: "Counties", value: "Bibb, Dallas, Greene, Hale, Marengo, Perry, Sumter, Wilcox", asOf: "2024", source: "Meridiam", sourceUrl: "https://www.meridiam.com/news/meridiam-breaks-ground-in-selma-alabama-on-transformative-fiber-infrastructure-project/" },
        ],
        caveat: "ISP partner is Omnipoint (open-access model). Target completion March 2027. Overlaps with some Halo Fiber target counties."
    },
};
