import type { KnowledgeArticle } from "./knowledge-types";

export const WEATHER_ARTICLES: KnowledgeArticle[] = [
  {
    id: "weather-reading",
    category: "weather",
    titleKey: "weatherReadingTitle",
    descKey: "weatherReadingDesc",
    icon: "☁️",
    order: 1,
    content: [
      {
        type: "accordion",
        title: "Cloud Types & Meanings",
        children: [
          {
            type: "list",
            items: [
              "Cirrus (high, wispy): Fair weather, but may indicate front approaching in 24-48h",
              "Cumulus (puffy, white): Fair weather if small and scattered",
              "Cumulonimbus (towering, dark): Thunderstorms! Avoid.",
              "Stratus (low, gray sheet): Overcast, light rain/drizzle",
              "Nimbostratus (dark, thick): Steady rain",
              "Cirrostratus (high, thin layer): Halo around sun/moon = rain in 12-24h",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Barometer Trends",
        children: [
          {
            type: "list",
            items: [
              "Rising rapidly (3+ mb/3h): Strong winds coming",
              "Rising slowly: Fair weather continuing or improving",
              "Steady: Current weather continues",
              "Falling slowly: Worsening weather, still time",
              "Falling rapidly (3+ mb/3h): Storm approaching SOON!",
            ],
          },
          {
            type: "note",
            content: "Trend matters more than absolute value. Rapid change = significant weather event.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Beaufort Scale (Wind Estimation)",
        children: [
          {
            type: "table",
            rows: [
              { force: "0", wind: "0 kt", desc: "Calm - mirror sea" },
              { force: "1-2", wind: "1-6 kt", desc: "Light air - ripples" },
              { force: "3", wind: "7-10 kt", desc: "Gentle - small waves" },
              { force: "4", wind: "11-16 kt", desc: "Moderate - whitecaps" },
              { force: "5", wind: "17-21 kt", desc: "Fresh - many whitecaps" },
              { force: "6", wind: "22-27 kt", desc: "Strong - spray" },
              { force: "7", wind: "28-33 kt", desc: "Near gale - breaking waves" },
              { force: "8+", wind: "34+ kt", desc: "Gale / Storm - don't go out!" },
            ],
          },
          {
            type: "note",
            content: "For new sailors: comfortable max is Force 4-5 (< 20 kt). Force 6+ is challenging.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Weather Sayings (That Actually Work)",
        children: [
          {
            type: "list",
            items: [
              "'Red sky at night, sailor's delight' - True! Red sunset = high pressure, clear weather",
              "'Red sky in morning, sailor's warning' - True! Red dawn = low pressure approaching",
              "'Mackerel sky, not 24 hours dry' - True! Cirrocumulus clouds = rain coming",
              "'Rainbow in morning, sailors take warning' - True! Rainbow west = weather coming",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Wave Height vs Period",
        children: [
          {
            type: "text",
            content: "Wave period (time between waves) is as important as height:",
          },
          {
            type: "list",
            items: [
              "Short period (< 6s) + big waves = choppy, uncomfortable",
              "Long period (> 10s) + big waves = rolly but manageable",
              "Period < height (e.g., 1m waves every 4s) = rough!",
              "Period > 2x height (e.g., 2m waves every 10s) = smooth",
            ],
          },
        ],
      },
      {
        type: "tip",
        content: "Check multiple sources: official forecast, GRIB files, pilot charts, local knowledge. Always add safety margin!",
      },
    ],
  },
  {
    id: "weather-sources",
    category: "weather",
    titleKey: "weatherSourcesTitle",
    descKey: "weatherSourcesDesc",
    icon: "📡",
    order: 2,
    content: [
      {
        type: "accordion",
        title: "VHF Weather",
        children: [
          {
            type: "list",
            items: [
              "USA: NOAA Weather Radio (WX1-WX7)",
              "UK: Inshore Waters Forecast (times vary by region)",
              "Europe: Various national services on designated channels",
              "Updates every 3-6 hours typically",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Online / Apps",
        children: [
          {
            type: "list",
            items: [
              "Windy.com: Excellent visualization, multiple models",
              "PredictWind: Marine-specific, routing",
              "Windfinder: Spot forecasts for coastal areas",
              "Navionics Boating: Integrated with charts",
              "XCWeather: Good for Europe",
            ],
          },
          {
            type: "note",
            content: "Download forecasts before leaving! Don't rely on having cell signal.",
          },
        ],
      },
      {
        type: "accordion",
        title: "GRIB Files",
        children: [
          {
            type: "text",
            content: "Gridded weather data - works with chartplotters and apps:",
          },
          {
            type: "list",
            items: [
              "Small file size (good for satellite phone download)",
              "Shows wind, pressure, waves, clouds",
              "Update 2x daily",
              "Apps: Windy, PredictWind, OpenCPN",
            ],
          },
        ],
      },
    ],
  },
];

export const NAV_BASICS_ARTICLES: KnowledgeArticle[] = [
  {
    id: "chart-reading",
    category: "nav-basics",
    titleKey: "chartReadingTitle",
    descKey: "chartReadingDesc",
    icon: "🗺️",
    order: 1,
    content: [
      {
        type: "accordion",
        title: "Common Chart Symbols",
        children: [
          {
            type: "list",
            items: [
              "Depth numbers: meters or fathoms (check chart datum!)",
              "Blue/white: water (darker = deeper)",
              "Green: very shallow / drying (exposed at low tide)",
              "Yellow/tan: land",
              "Magenta: human-made (buoys, lights, harbors)",
              "Rocks:",
              "  • (dot) + depth = underwater rock",
              "  * (asterisk) = rock awash at chart datum",
              "  + = rock always above water",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Magnetic vs True",
        children: [
          {
            type: "text",
            content: "Compass points to magnetic north, not true north:",
          },
          {
            type: "list",
            items: [
              "Variation: angle between true & magnetic north (shown on chart)",
              "Deviation: local errors from boat's metal/electronics",
              "True → Magnetic: subtract easterly variation (or add westerly)",
              "Magnetic → True: add easterly variation (or subtract westerly)",
            ],
          },
          {
            type: "note",
            content: "Mnemonic: 'True Virgins Make Dull Company, Add Whiskey' (True + Variation = Magnetic + Deviation = Compass, Add West)",
          },
        ],
      },
      {
        type: "tip",
        content: "Always verify chartplotter with visual bearings and depth sounder. Electronics can fail!",
      },
    ],
  },
  {
    id: "dead-reckoning",
    category: "nav-basics",
    titleKey: "deadReckoningTitle",
    descKey: "deadReckoningDesc",
    icon: "📐",
    order: 2,
    content: [
      {
        type: "text",
        content: "Estimating position based on course, speed, and time - essential backup if GPS fails.",
      },
      {
        type: "accordion",
        title: "Basic DR",
        children: [
          {
            type: "list",
            items: [
              "1. Note last known position (GPS, visual fix)",
              "2. Note course steered (compass)",
              "3. Note speed (log, estimate)",
              "4. Calculate: Distance = Speed × Time",
              "5. Plot: from last position, direction = course, distance = calculated",
            ],
          },
          {
            type: "note",
            content: "DR doesn't account for current/leeway - it's an estimate! Check with visual bearings when possible.",
          },
        ],
      },
    ],
  },
];

export const TROUBLESHOOTING_ARTICLES: KnowledgeArticle[] = [
  {
    id: "engine-problems",
    category: "troubleshooting",
    titleKey: "engineProblemsTitle",
    descKey: "engineProblemsDesc",
    icon: "🔧",
    order: 1,
    content: [
      {
        type: "accordion",
        title: "Won't Start",
        children: [
          { type: "heading", content: "Checklist" },
          {
            type: "list",
            items: [
              "☐ Battery charged? (check voltage, try lights)",
              "☐ Battery switches ON?",
              "☐ Kill switch / cutoff engaged?",
              "☐ Neutral safety (must be in neutral)",
              "☐ Fuel: tank not empty? Fuel valve open?",
              "☐ Air: air filter clogged?",
              "☐ Glow plugs warmed up? (diesel)",
            ],
          },
          {
            type: "note",
            content: "Engine needs 3 things: fuel, air, spark (or compression for diesel). Check each!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Overheating",
        children: [
          { type: "heading", content: "Immediate Action" },
          {
            type: "list",
            items: [
              "1. STOP engine immediately (prevents serious damage)",
              "2. Let cool 30+ minutes before investigating",
              "3. Don't open coolant cap when hot!",
            ],
          },
          { type: "heading", content: "Causes" },
          {
            type: "list",
            items: [
              "Seawater intake clogged (weed, plastic bag)",
              "Impeller failed (rubber blades worn/broken)",
              "Coolant low (leak?)",
              "Thermostat stuck",
              "Belt loose/broken",
            ],
          },
          { type: "heading", content: "Checks" },
          {
            type: "list",
            items: [
              "☐ Water exiting exhaust? (should be steady stream)",
              "☐ Seawater strainer clean?",
              "☐ Impeller blades intact? (count them!)",
              "☐ Coolant level OK?",
              "☐ Belts tight?",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Loss of Power / Won't Rev",
        children: [
          {
            type: "list",
            items: [
              "Fuel filter clogged (common!)",
              "Air in fuel lines (diesel)",
              "Propeller fouled (rope, net, weed)",
              "Transmission slipping",
            ],
          },
          {
            type: "tip",
            content: "If engine runs but boat slow: check prop! Diver may be needed to clear.",
          },
        ],
      },
      {
        type: "accordion",
        title: "When to Call for Tow",
        children: [
          {
            type: "list",
            items: [
              "Can't diagnose problem",
              "Don't have spare parts",
              "Approaching danger (rocks, reef)",
              "Weather worsening",
              "Crew exhausted / unsafe",
            ],
          },
          {
            type: "note",
            content: "No shame in calling for help! Better safe than sorry. Most insurance covers towing.",
          },
        ],
      },
    ],
  },
  {
    id: "electrical-problems",
    category: "troubleshooting",
    titleKey: "electricalProblemsTitle",
    descKey: "electricalProblemsDesc",
    icon: "⚡",
    order: 2,
    content: [
      {
        type: "accordion",
        title: "Battery Won't Charge",
        children: [
          {
            type: "list",
            items: [
              "☐ Alternator belt broken/loose?",
              "☐ Battery switch on correct bank?",
              "☐ Connections corroded?",
              "☐ Alternator failed? (voltmeter: should be 13.5-14.5V when running)",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Nothing Works / Dead",
        children: [
          {
            type: "list",
            items: [
              "1. Check battery voltage (multimeter)",
              "2. Check battery switches (both OFF?)",
              "3. Check main fuse/breaker",
              "4. Individual circuit breakers tripped?",
            ],
          },
        ],
      },
      {
        type: "tip",
        content: "Carry spare fuses and know where fuse panel is! Label all breakers clearly.",
      },
    ],
  },
];
