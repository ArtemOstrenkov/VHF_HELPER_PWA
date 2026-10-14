import type { KnowledgeArticle, ContentBlock } from "./knowledge-types";
import type { Lang } from "./i18n";

// Multilingual content helper
function getContent(lang: Lang, contentMap: Record<string, ContentBlock[]>): ContentBlock[] {
  return contentMap[lang] || contentMap["en"] || [];
}

const vhfChannelsContent: Record<string, ContentBlock[]> = {
  en: [
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
  ru: [
    { type: "heading", content: "Бедствие и безопасность" },
    {
      type: "list",
      items: [
        "Канал 16: Аварийная связь, DSC сигналы, первый контакт (Слушать ВСЕГДА!)",
        "Канал 13: Мостик-мостик (мосты, шлюзы, крупные суда)",
        "Канал 70: Только DSC цифровые вызовы",
      ],
    },
    { type: "heading", content: "Рабочие каналы" },
    {
      type: "list",
      items: [
        "Канал 06: Судно-судно (после первого контакта на 16)",
        "Канал 08: Судно-судно (коммерческие)",
        "Канал 09: Судно-судно / Портовые операции",
        "Канал 72: Судно-судно (прогулочные)",
        "Канал 77: Судно-судно (прогулочные)",
      ],
    },
    { type: "heading", content: "Марины и гавани" },
    {
      type: "list",
      items: [
        "Канал 09: Марины, доки (США)",
        "Каналы 12, 14: Капитаны портов (зависит от страны)",
        "Каналы 80-87: Марины Великобритании",
      ],
    },
    { type: "heading", content: "Погода" },
    {
      type: "list",
      items: [
        "WX1-WX7: Погода NOAA (США) - только приём!",
        "Каналы 67, 68: Малые суда (местное)",
      ],
    },
    {
      type: "tip",
      content: "Всегда слушайте перед передачей. Канал 16 только для чрезвычайных ситуаций и первого контакта - затем переходите на рабочий канал!",
    },
  ],
  zh: [
    { type: "heading", content: "遇险与安全" },
    {
      type: "list",
      items: [
        "第16频道：紧急情况、DSC警报、初次联系（务必监听！）",
        "第13频道：驾驶台间通信（桥梁、船闸、大型船舶）",
        "第70频道：仅DSC数字呼叫",
      ],
    },
    { type: "heading", content: "工作频道" },
    {
      type: "list",
      items: [
        "第06频道：船对船（16频道初次联系后）",
        "第08频道：船对船（商业）",
        "第09频道：船对船/港口作业",
        "第72频道：船对船（娱乐用）",
        "第77频道：船对船（娱乐用）",
      ],
    },
    { type: "heading", content: "码头与港口" },
    {
      type: "list",
      items: [
        "第09频道：码头、停泊区（美国）",
        "第12、14频道：港务长（因国家而异）",
        "第80-87频道：英国码头",
      ],
    },
    { type: "heading", content: "天气" },
    {
      type: "list",
      items: [
        "WX1-WX7：NOAA天气（美国）- 仅接收！",
        "第67、68频道：小型船艇（本地）",
      ],
    },
    {
      type: "tip",
      content: "发送前务必先收听。第16频道仅用于紧急情况和初次联系 - 然后切换到工作频道！",
    },
  ],
};

export const VHF_ARTICLES: KnowledgeArticle[] = [
  {
    id: "vhf-channels",
    category: "vhf",
    titleKey: "vhfChannelsTitle",
    descKey: "vhfChannelsDesc",
    icon: "📻",
    order: 1,
    content: [], // Will be populated dynamically
    getContent: (lang: Lang) => getContent(lang, vhfChannelsContent),
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
