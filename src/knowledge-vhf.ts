import type { KnowledgeArticle } from "./knowledge-types";

export const VHF_ARTICLES: KnowledgeArticle[] = [
  {
    id: "vhf-channels",
    category: "vhf",
    titleKey: "vhfChannelsTitle",
    descKey: "vhfChannelsDesc",
    icon: "📻",
    order: 1,
    content: [
      { type: "heading", content: "Distress & Safety" },
      {
        type: "list",
        items: [
          "Ch 16: Emergency, DSC alerts, initial contact (Monitor ALWAYS!)",
          "Ch 13: Bridge-to-bridge (bridges, locks, large vessels)",
          "Ch 70: DSC digital calls only",
        ],
      },
      { type: "heading", content: "Working Channels" },
      {
        type: "list",
        items: [
          "Ch 06: Ship-to-ship (after initial contact on Ch 16)",
          "Ch 08: Ship-to-ship (commercial)",
          "Ch 09: Ship-to-ship / Port operations",
          "Ch 72: Ship-to-ship (recreational)",
          "Ch 77: Ship-to-ship (recreational)",
        ],
      },
      { type: "heading", content: "Marina & Harbor" },
      {
        type: "list",
        items: [
          "Ch 09: Marinas, docks (USA)",
          "Ch 12, 14: Harbormasters (varies by country)",
          "Ch 80-87: UK marinas",
        ],
      },
      { type: "heading", content: "Weather" },
      {
        type: "list",
        items: [
          "WX1-WX7: NOAA Weather (USA) - receive only!",
          "Ch 67, 68: Small craft (local)",
        ],
      },
      {
        type: "tip",
        content: "Always listen before transmitting. Channel 16 is for emergencies and initial contact only - then switch to a working channel!",
      },
    ],
  },
  {
    id: "vhf-dsc",
    category: "vhf",
    titleKey: "vhfDscTitle",
    descKey: "vhfDscDesc",
    icon: "🔴",
    order: 2,
    content: [
      {
        type: "text",
        content: "DSC (Digital Selective Calling) automatically sends MAYDAY with GPS coordinates. Requires MMSI registration.",
      },
      { type: "heading", content: "Functions" },
      {
        type: "list",
        items: [
          "DISTRESS: Red button under cover - auto sends MAYDAY + GPS",
          "All Ships Call: Like voice call on Ch 16",
          "Individual Call: Direct call to vessel by MMSI",
          "Position Request: Ask another vessel for GPS coordinates",
        ],
      },
      { type: "heading", content: "MMSI Registration" },
      {
        type: "list",
        items: [
          "USA: BoatUS, Sea Tow, or FCC",
          "Europe: National regulators",
          "FREE registration!",
          "9-digit number unique to your vessel",
        ],
      },
      {
        type: "warning",
        content: "Without MMSI, your DSC emergency call won't include vessel identification!",
      },
    ],
  },
  {
    id: "vhf-etiquette",
    category: "vhf",
    titleKey: "vhfEtiquetteTitle",
    descKey: "vhfEtiquetteDesc",
    icon: "🎙️",
    order: 3,
    content: [
      { type: "heading", content: "Radio Procedures" },
      {
        type: "list",
        items: [
          "LISTEN before transmit (check channel is free)",
          "Think before speaking (prepare your message)",
          "Press PTT → wait 0.5s → speak → release",
          "Speak clearly, slowly, near microphone",
          "Use Seaspeak / Plain Language (avoid slang)",
          'Say "OVER" when done, "OUT" to end conversation',
          "Don't hog the channel (be brief)",
        ],
      },
      { type: "heading", content: "Radio Check" },
      {
        type: "code",
        content: `"ANY STATION, ANY STATION, ANY STATION
This is sailing yacht ANEMELIA
Radio check on channel one-six
Over"`,
      },
      {
        type: "text",
        content: 'Response: "ANEMELIA, this is BLUE HORIZON. Receiving you loud and clear. Over"',
      },
      { type: "heading", content: "Power Settings" },
      {
        type: "list",
        items: [
          "1W: 5-10 miles (ship-to-ship, harbor)",
          "25W: 50+ miles (coast guard, offshore)",
          "Don't blast 25W in busy harbor!",
        ],
      },
      {
        type: "tip",
        content: "Channel 16 is for emergency and initial contact only. After establishing contact, say 'Switch to channel zero-six' and continue conversation there.",
      },
    ],
  },
  {
    id: "vhf-phonetic",
    category: "vhf",
    titleKey: "phoneticAlphabet",
    descKey: "phoneticAlphabetDesc",
    icon: "🔤",
    order: 4,
    content: [
      {
        type: "text",
        content: "Use phonetic alphabet to spell vessel names, call signs, or unclear words.",
      },
      {
        type: "table",
        rows: [
          { letter: "A", word: "ALPHA" },
          { letter: "B", word: "BRAVO" },
          { letter: "C", word: "CHARLIE" },
          { letter: "D", word: "DELTA" },
          { letter: "E", word: "ECHO" },
          { letter: "F", word: "FOXTROT" },
          { letter: "G", word: "GOLF" },
          { letter: "H", word: "HOTEL" },
          { letter: "I", word: "INDIA" },
          { letter: "J", word: "JULIET" },
          { letter: "K", word: "KILO" },
          { letter: "L", word: "LIMA" },
          { letter: "M", word: "MIKE" },
          { letter: "N", word: "NOVEMBER" },
          { letter: "O", word: "OSCAR" },
          { letter: "P", word: "PAPA" },
          { letter: "Q", word: "QUEBEC" },
          { letter: "R", word: "ROMEO" },
          { letter: "S", word: "SIERRA" },
          { letter: "T", word: "TANGO" },
          { letter: "U", word: "UNIFORM" },
          { letter: "V", word: "VICTOR" },
          { letter: "W", word: "WHISKEY" },
          { letter: "X", word: "X-RAY" },
          { letter: "Y", word: "YANKEE" },
          { letter: "Z", word: "ZULU" },
        ],
      },
    ],
  },
];
