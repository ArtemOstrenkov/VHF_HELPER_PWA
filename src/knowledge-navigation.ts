import type { KnowledgeArticle, ContentBlock } from "./knowledge-types";
import type { Lang } from "./i18n";

function getContent(lang: Lang, contentMap: Record<string, ContentBlock[]>): ContentBlock[] {
  return contentMap[lang] || contentMap["en"] || [];
}

// Power-driven vessel lights with visual diagram
const powerDrivenContent: Record<string, ContentBlock[]> = {
  en: [
    { type: "heading", content: "Underway" },
    {
      type: "illustration",
      src: `
╔════════════════════════════════════╗
║ POWER VESSEL (<50m) - FROM AHEAD  ║
╚════════════════════════════════════╝

         ⚪ White masthead
            │
    🔴  ═══╪═══  🟢
   Port    │     Starboard
  (Left)   │     (Right)
          ╱│╲
         ╱ │ ╲
        ╱  │  ╲
       ╱   │   ╲
      ╱    │    ╲
     ╱     │     ╲
    ╱      │      ╲
   ────────────────
   Approaching you

What you see:
- Green → passing on YOUR left
- Red → passing on YOUR right
- Both → coming straight at you!
      `,
      caption: "Green = starboard (right), Red = port (left), White = forward",
    },
    {
      type: "list",
      items: [
        "Green light: starboard (right) side",
        "Red light: port (left) side",
        "White masthead light(s): forward",
        "White stern light: aft",
      ],
    },
    {
      type: "list",
      items: [
        "Length < 50m: 2 white masthead lights",
        "Length ≥ 50m: 3 white masthead lights (forward higher)",
      ],
    },
    { type: "heading", content: "At Anchor" },
    {
      type: "list",
      items: ["White all-round light visible 360°"],
    },
    { type: "heading", content: "Towing" },
    {
      type: "list",
      items: [
        "2 masthead lights + yellow towing light aft",
        "If tow > 200m: 3 masthead lights",
      ],
    },
  ],
  ru: [
    { type: "heading", content: "На ходу" },
    {
      type: "illustration",
      src: `
╔════════════════════════════════════╗
║ МОТОРНОЕ СУДНО (<50м) - СПЕРЕДИ    ║
╚════════════════════════════════════╝

         ⚪ Белый топовый
            │
    🔴  ═══╪═══  🟢
  Порт     │     Старборд
  (Левый)  │     (Правый)
          ╱│╲
         ╱ │ ╲
        ╱  │  ╲
       ╱   │   ╲
      ╱    │    ╲
     ╱     │     ╲
    ╱      │      ╲
   ────────────────
   Идёт на вас

Что вы видите:
- Зелёный → проходит СЛЕВА от вас
- Красный → проходит СПРАВА от вас
- Оба → идёт прямо на вас!
      `,
      caption: "Зелёный = правый борт, Красный = левый борт, Белый = впереди",
    },
    {
      type: "list",
      items: [
        "Зелёный огонь: правый борт (старборд)",
        "Красный огонь: левый борт (порт)",
        "Белый топовый огонь: впереди",
        "Белый кормовой огонь: сзади",
      ],
    },
    {
      type: "list",
      items: [
        "Длина < 50м: 2 белых топовых огня",
        "Длина ≥ 50м: 3 белых топовых огня (передний выше)",
      ],
    },
    { type: "heading", content: "На якоре" },
    {
      type: "list",
      items: ["Белый круговой огонь видимый на 360°"],
    },
    { type: "heading", content: "Буксировка" },
    {
      type: "list",
      items: [
        "2 топовых огня + жёлтый буксировочный огонь на корме",
        "Если буксир > 200м: 3 топовых огня",
      ],
    },
  ],
  zh: [
    { type: "heading", content: "航行中" },
    {
      type: "illustration",
      src: `
╔════════════════════════════════════╗
║ 机动船（<50米）- 从前方看          ║
╚════════════════════════════════════╝

         ⚪ 白色桁灯
            │
    🔴  ═══╪═══  🟢
   左舷     │     右舷
          ╱│╲
         ╱ │ ╲
        ╱  │  ╲
       ╱   │   ╲
      ╱    │    ╲
     ╱     │     ╲
    ╱      │      ╲
   ────────────────
   迎面驶来

你看到的：
- 绿色 → 从你左侧经过
- 红色 → 从你右侧经过
- 两个都有 → 直冲你而来！
      `,
      caption: "绿色 = 右舷，红色 = 左舷，白色 = 前方",
    },
    {
      type: "list",
      items: [
        "绿灯：右舷",
        "红灯：左舷",
        "白色桁灯：前方",
        "白色尾灯：后方",
      ],
    },
    {
      type: "list",
      items: [
        "长度 < 50米：2盏白色桁灯",
        "长度 ≥ 50米：3盏白色桁灯（前面较高）",
      ],
    },
    { type: "heading", content: "锚泊" },
    {
      type: "list",
      items: ["白色全方位灯，360°可见"],
    },
    { type: "heading", content: "拖带" },
    {
      type: "list",
      items: [
        "2盏桁灯 + 黄色拖带灯（船尾）",
        "拖带 > 200米：3盏桁灯",
      ],
    },
  ],
};

const sailingContent: Record<string, ContentBlock[]> = {
  en: [
    { type: "heading", content: "Under Sail Only" },
    {
      type: "illustration",
      src: `
╔════════════════════════════════╗
║ SAILING VESSEL - FROM AHEAD    ║
╚════════════════════════════════╝

    🔴  ═══════  🟢
   Port         Starboard
        ╱│╲
       ╱ │ ╲    ⚪ White stern
      ╱  │  ╲      (behind)
     ╱   │   ╲
    ╱   ⛵️   ╲
   ───────────────

OR (boats <20m):
      ⚪ Tricolor
     ╱│╲  at masthead
    ╱ │ ╲
   ╱  │  ╲
  ╱  ⛵️  ╲
 ────────────
      `,
      caption: "No white forward light = sailing vessel",
    },
    {
      type: "list",
      items: [
        "Green (starboard) + Red (port) sidelights",
        "White stern light",
        "OR: Tricolor light at masthead (< 20m only)",
      ],
    },
    { type: "heading", content: "Under Power (engine on)" },
    {
      type: "list",
      items: [
        "Show lights as power-driven vessel",
        "Daytime: black cone point-down forward",
      ],
    },
    {
      type: "warning",
      content: "If your engine is running, you are a POWER vessel under COLREGS, even if sails are up!",
    },
  ],
  ru: [
    { type: "heading", content: "Только под парусами" },
    {
      type: "illustration",
      src: `
╔════════════════════════════════╗
║ ПАРУСНОЕ СУДНО - СПЕРЕДИ       ║
╚════════════════════════════════╝

    🔴  ═══════  🟢
   Порт        Старборд
        ╱│╲
       ╱ │ ╲    ⚪ Белый кормовой
      ╱  │  ╲      (сзади)
     ╱   │   ╲
    ╱   ⛵️   ╲
   ───────────────

ИЛИ (суда <20м):
      ⚪ Трёхцветный
     ╱│╲  на мачте
    ╱ │ ╲
   ╱  │  ╲
  ╱  ⛵️  ╲
 ────────────
      `,
      caption: "Нет белого огня спереди = парусное судно",
    },
    {
      type: "list",
      items: [
        "Зелёный (старборд) + Красный (порт) бортовые огни",
        "Белый кормовой огонь",
        "ИЛИ: Трёхцветный огонь на мачте (только < 20м)",
      ],
    },
    { type: "heading", content: "Под мотором (двигатель включён)" },
    {
      type: "list",
      items: [
        "Показывать огни как моторное судно",
        "Днём: чёрный конус вершиной вниз впереди",
      ],
    },
    {
      type: "warning",
      content: "Если двигатель работает, вы - МОТОРНОЕ судно по МППСС, даже если паруса подняты!",
    },
  ],
  zh: [
    { type: "heading", content: "仅帆航行" },
    {
      type: "illustration",
      src: `
╔════════════════════════════════╗
║ 帆船 - 从前方看                ║
╚════════════════════════════════╝

    🔴  ═══════  🟢
   左舷        右舷
        ╱│╲
       ╱ │ ╲    ⚪ 白色尾灯
      ╱  │  ╲      （后方）
     ╱   │   ╲
    ╱   ⛵️   ╲
   ───────────────

或（船只<20米）：
      ⚪ 三色灯
     ╱│╲  在桅杆顶
    ╱ │ ╲
   ╱  │  ╲
  ╱  ⛵️  ╲
 ────────────
      `,
      caption: "前方无白灯 = 帆船",
    },
    {
      type: "list",
      items: [
        "绿灯（右舷）+ 红灯（左舷）舷灯",
        "白色尾灯",
        "或：桅顶三色灯（仅限< 20米）",
      ],
    },
    { type: "heading", content: "机动（发动机开启）" },
    {
      type: "list",
      items: [
        "显示机动船灯光",
        "白天：前方黑色圆锥体尖端向下",
      ],
    },
    {
      type: "warning",
      content: "如果发动机运转，根据COLREGS你是机动船，即使帆升起！",
    },
  ],
};

export const NAVIGATION_ARTICLES: KnowledgeArticle[] = [
  {
    id: "nav-lights",
    category: "navigation",
    titleKey: "navLightsTitle",
    descKey: "navLightsDesc",
    icon: "🔦",
    order: 1,
    content: [],
    getContent: (lang: Lang) => {
      const l = lang === "en" ? "en" : lang === "ru" ? "ru" : lang === "zh" ? "zh" : "en";
      return [
        {
          type: "text",
          content: {
            en: "Navigation lights help identify vessel type, direction, and activity at night or in poor visibility.",
            ru: "Навигационные огни помогают определить тип судна, направление и деятельность ночью или при плохой видимости.",
            zh: "导航灯有助于在夜间或能见度差时识别船只类型、方向和活动。",
          }[l] as string,
        },
        {
          type: "accordion",
          title: {
            en: "Power-Driven Vessels (Motor)",
            ru: "Моторные суда",
            zh: "机动船",
          }[l] as string,
          children: getContent(lang, powerDrivenContent),
        },
        {
          type: "accordion",
          title: {
            en: "Sailing Vessels",
            ru: "Парусные суда",
            zh: "帆船",
          }[l] as string,
          children: getContent(lang, sailingContent),
        },
        {
          type: "accordion",
          title: {
            en: "Vessels Restricted in Ability to Maneuver",
            ru: "Суда с ограниченной манёвренностью",
            zh: "操纵受限船只",
          }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "Red-White-Red lights vertical + normal navigation lights",
                  "Examples: dredging, cable laying, survey work",
                  "Green side = safe to pass, Red side = obstruction",
                ],
                ru: [
                  "Красный-Белый-Красный огни вертикально + обычные навигационные огни",
                  "Примеры: дноуглубление, прокладка кабелей, изыскательские работы",
                  "Зелёная сторона = можно пройти, Красная сторона = препятствие",
                ],
                zh: [
                  "红-白-红垂直灯 + 正常导航灯",
                  "示例：挖泥、铺设电缆、测量作业",
                  "绿色侧 = 可通过，红色侧 = 障碍物",
                ],
              }[l] as string[],
            },
            {
              type: "tip",
              content: {
                en: "Stay clear of these vessels - they CANNOT maneuver to avoid you!",
                ru: "Держитесь подальше от этих судов - они НЕ МОГУТ маневрировать, чтобы избежать вас!",
                zh: "远离这些船只 - 它们无法机动避让你！",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Fishing Vessels",
            ru: "Рыболовные суда",
            zh: "渔船",
          }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "Trawling: Red over White vertical",
                  "Other fishing: Green over White vertical",
                  "+ normal sidelights & stern light",
                ],
                ru: [
                  "Траление: Красный над Белым вертикально",
                  "Другой промысел: Зелёный над Белым вертикально",
                  "+ обычные бортовые и кормовой огни",
                ],
                zh: [
                  "拖网：红色在白色上方",
                  "其他捕鱼：绿色在白色上方",
                  "+ 正常舷灯和尾灯",
                ],
              }[l] as string[],
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Vessel Not Under Command",
            ru: "Судно лишённое возможности управляться",
            zh: "失控船只",
          }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "2 Red all-round lights vertical",
                  "Example: engine failure, steering loss",
                  "Cannot maneuver - stay clear!",
                ],
                ru: [
                  "2 Красных круговых огня вертикально",
                  "Пример: отказ двигателя, потеря управления",
                  "Не может маневрировать - держитесь в стороне!",
                ],
                zh: [
                  "2盏红色全方位灯垂直",
                  "示例：发动机故障、失去转向",
                  "无法机动 - 保持距离！",
                ],
              }[l] as string[],
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Day Shapes",
            ru: "Дневные знаки",
            zh: "日间标志",
          }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "Black ball: At anchor",
                  "Black cone point-down: Sailing vessel under power",
                  "Black cylinder: Restricted in ability to maneuver",
                  "Black diamond: Vessel towing (+ tow shows diamond)",
                  "2 black cones base-to-base: Fishing vessel",
                  "2 black balls: Not under command",
                ],
                ru: [
                  "Чёрный шар: На якоре",
                  "Чёрный конус вершиной вниз: Парусное судно под мотором",
                  "Чёрный цилиндр: Ограниченная манёвренность",
                  "Чёрный ромб: Судно на буксире (+ буксируемое показывает ромб)",
                  "2 чёрных конуса основаниями вместе: Рыболовное судно",
                  "2 чёрных шара: Лишено возможности управляться",
                ],
                zh: [
                  "黑球：锚泊",
                  "黑色圆锥尖端向下：机动中的帆船",
                  "黑色圆柱：操纵受限",
                  "黑色菱形：拖带船只（+ 被拖船显示菱形）",
                  "2个黑色圆锥底对底：渔船",
                  "2个黑球：失控",
                ],
              }[l] as string[],
            },
          ],
        },
        {
          type: "note",
          content: {
            en: "Memorization tip: Red = Port (both 4 letters). Green = Starboard. White = All-round visibility.",
            ru: "Мнемоника: Красный = Левый борт (оба 'ый'). Зелёный = Правый/Старборд.",
            zh: "记忆提示：红色 = 左舷（红左都简单）。绿色 = 右舷。",
          }[l] as string,
        },
      ];
    },
  },
  {
    id: "colregs",
    category: "navigation",
    titleKey: "colregsTitle",
    descKey: "colregsDesc",
    icon: "⚖️",
    order: 2,
    content: [
      {
        type: "text",
        content: "International Regulations for Preventing Collisions at Sea (COLREGS) - the 'rules of the road' on water.",
      },
      {
        type: "accordion",
        title: "Sailing Vessels vs Sailing Vessels",
        children: [
          {
            type: "list",
            items: [
              "Port tack gives way to starboard tack",
              "Both on same tack: windward vessel gives way",
              "Windward vessel unsure of other's tack: gives way",
            ],
          },
          {
            type: "note",
            content: "Port tack = wind coming from port side. Starboard tack = wind from starboard.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Sailing vs Power",
        children: [
          {
            type: "list",
            items: [
              "General rule: Power gives way to sail",
              "EXCEPTIONS:",
              "  - Sailboat overtaking power vessel: sailboat gives way",
              "  - Vessel restricted in ability: sailboat gives way",
              "  - Large vessel in narrow channel/fairway: sailboat gives way",
            ],
          },
          {
            type: "warning",
            content: "In narrow channels, don't be 'technically right' - large ships CANNOT maneuver. Stay clear!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Power Vessels vs Power Vessels",
        children: [
          { type: "heading", content: "Head-on" },
          {
            type: "list",
            items: [
              "Both vessels alter course to starboard",
              "Pass port-to-port (left to left)",
            ],
          },
          { type: "heading", content: "Crossing" },
          {
            type: "list",
            items: [
              "Vessel with other on STARBOARD side gives way",
              "'If to starboard Red appear, it is your duty to keep clear'",
            ],
          },
          { type: "heading", content: "Overtaking" },
          {
            type: "list",
            items: [
              "Overtaking vessel ALWAYS gives way",
              "Overtaking = approaching from more than 22.5° abaft the beam",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Narrow Channels & Fairways",
        children: [
          {
            type: "list",
            items: [
              "Stay to starboard (right) side of channel",
              "Vessels < 20m or sailing: don't impede large vessels",
              "Cross channels perpendicularly and quickly",
              "Don't anchor in narrow channels",
              "Sound signals: 1 short blast = altering course to starboard",
              "                2 short blasts = altering course to port",
              "                3 short blasts = operating astern (reversing)",
            ],
          },
          {
            type: "tip",
            content: "When in doubt in a channel: monitor VHF Ch 13 and communicate your intentions!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Hierarchy (Who Gives Way)",
        children: [
          {
            type: "text",
            content: "In order of priority (top = most restricted, others must avoid):",
          },
          {
            type: "list",
            items: [
              "1. Vessel not under command",
              "2. Vessel restricted in ability to maneuver",
              "3. Vessel constrained by draught (deep draft in shallow water)",
              "4. Fishing vessel (actively fishing)",
              "5. Sailing vessel",
              "6. Power-driven vessel",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Lookout & Safe Speed",
        children: [
          {
            type: "list",
            items: [
              "Maintain proper lookout at ALL times (sight, hearing, ALL available means)",
              "Proceed at safe speed (able to stop in time)",
              "Safe speed depends on: visibility, traffic density, vessel maneuverability, sea state, proximity to hazards",
            ],
          },
          {
            type: "warning",
            content: "Autopilot is NOT a lookout! Maintain visual watch, especially at night.",
          },
        ],
      },
      {
        type: "note",
        content: "Remember: Rules are for preventing collisions, but seamanship and common sense trump all. If unsure, communicate and give way!",
      },
    ],
  },
  {
    id: "buoys-marks",
    category: "navigation",
    titleKey: "buoysTitle",
    descKey: "buoysDesc",
    icon: "🟢",
    order: 3,
    content: [],
    getContent: (lang: Lang) => {
      const l = lang === "en" ? "en" : lang === "ru" ? "ru" : lang === "zh" ? "zh" : "en";
      return [
        {
          type: "text",
          content: {
            en: "IALA (International Association of Lighthouse Authorities) system has two regions: A (most of world) and B (Americas, Japan, Philippines).",
            ru: "Система IALA (Международная ассоциация маячных служб) имеет два региона: A (большая часть мира) и B (Америки, Япония, Филиппины).",
            zh: "IALA（国际航标协会）系统分为两个区域：A（世界大部分地区）和B（美洲、日本、菲律宾）。",
          }[l] as string,
        },
        {
          type: "accordion",
          title: {
            en: "IALA Region A (Europe, Asia, Africa, Australia)",
            ru: "Регион IALA A (Европа, Азия, Африка, Австралия)",
            zh: "IALA A区（欧洲、亚洲、非洲、澳大利亚）",
          }[l] as string,
          children: [
            { 
              type: "heading", 
              content: {
                en: "Lateral Marks (entering port from sea)",
                ru: "Латеральные знаки (заход в порт с моря)",
                zh: "侧面标志（从海上进港）",
              }[l] as string,
            },
            {
              type: "illustration",
              src: {
                en: `
╔═══════════════════════════════════════╗
║     IALA REGION A - LATERAL MARKS     ║
╚═══════════════════════════════════════╝

    ENTERING PORT FROM SEA ⬆️
    
         ← TO PORT →
    
    🔴          ⛵️         🟢
  Cylinder                Cone
  (Can)                  (Nun)
  Even #                 Odd #
  Red                   Green
   ║                      ║
   ║                      ║
  LEFT                  RIGHT
  SIDE                   SIDE

Mnemonic for Region A:
"Red LEFT Returning from sea"
(opposite of US!)
                `,
                ru: `
╔═══════════════════════════════════════╗
║   РЕГИОН IALA A - ЛАТЕРАЛЬНЫЕ ЗНАКИ   ║
╚═══════════════════════════════════════╝

    ЗАХОД В ПОРТ С МОРЯ ⬆️
    
         ← В ПОРТ →
    
    🔴          ⛵️         🟢
  Цилиндр              Конус
  Чётный №            Нечётный №
  Красный             Зелёный
   ║                      ║
   ║                      ║
 ЛЕВЫЙ                 ПРАВЫЙ
  БОРТ                  БОРТ

Мнемоника для Региона A:
"Красный СЛЕВА при возврате с моря"
(противоположно США!)
                `,
                zh: `
╔═══════════════════════════════════════╗
║     IALA A区 - 侧面标志               ║
╚═══════════════════════════════════════╝

    从海上进港 ⬆️
    
         ← 到港口 →
    
    🔴          ⛵️         🟢
  圆柱体                圆锥体
  偶数                  奇数
  红色                  绿色
   ║                      ║
   ║                      ║
  左侧                  右侧

A区记忆法：
"红色在左，返港时"
（与美国相反！）
                `,
              }[l] as string,
              caption: {
                en: "Region A: Red LEFT when returning from sea",
                ru: "Регион A: Красный СЛЕВА при заходе с моря",
                zh: "A区：返港时红色在左",
              }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "Port (left): RED cylinders, even numbers, red light",
                  "Starboard (right): GREEN cones, odd numbers, green light",
                ],
                ru: [
                  "Левый борт: КРАСНЫЕ цилиндры, чётные номера, красный огонь",
                  "Правый борт: ЗЕЛЁНЫЕ конусы, нечётные номера, зелёный огонь",
                ],
                zh: [
                  "左舷：红色圆柱体，偶数，红灯",
                  "右舷：绿色圆锥体，奇数，绿灯",
                ],
              }[l] as string[],
            },
            {
              type: "note",
              content: {
                en: "Mnemonic: 'Red Right Returning' DOES NOT apply to IALA A! Red is LEFT when returning from sea.",
                ru: "Мнемоника: 'Red Right Returning' НЕ действует в регионе IALA A! Красный СЛЕВА при возврате с моря.",
                zh: "记忆法：'Red Right Returning'（红右返航）不适用于IALA A！红色在左侧返港。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "IALA Region B (Americas)",
            ru: "Регион IALA B (Америки)",
            zh: "IALA B区（美洲）",
          }[l] as string,
          children: [
            { 
              type: "heading", 
              content: {
                en: "Lateral Marks (entering port from sea)",
                ru: "Латеральные знаки (заход в порт с моря)",
                zh: "侧面标志（从海上进港）",
              }[l] as string,
            },
            {
              type: "illustration",
              src: {
                en: `
╔═══════════════════════════════════════╗
║     IALA REGION B - LATERAL MARKS     ║
╚═══════════════════════════════════════╝

    ENTERING PORT FROM SEA ⬆️
    
         ← TO PORT →
    
    🟢          ⛵️         🔴
  Cylinder                Cone
  Odd #                  Even #
  Green                   Red
   ║                      ║
   ║                      ║
  LEFT                  RIGHT
  SIDE                   SIDE

Mnemonic for Region B:
"Red RIGHT Returning"
(US, Japan, Philippines)
                `,
                ru: `
╔═══════════════════════════════════════╗
║   РЕГИОН IALA B - ЛАТЕРАЛЬНЫЕ ЗНАКИ   ║
╚═══════════════════════════════════════╝

    ЗАХОД В ПОРТ С МОРЯ ⬆️
    
         ← В ПОРТ →
    
    🟢          ⛵️         🔴
  Цилиндр              Конус
  Нечётный №           Чётный №
  Зелёный              Красный
   ║                      ║
   ║                      ║
 ЛЕВЫЙ                 ПРАВЫЙ
  БОРТ                  БОРТ

Мнемоника для Региона B:
"Красный СПРАВА при возврате"
(США, Япония, Филиппины)
                `,
                zh: `
╔═══════════════════════════════════════╗
║     IALA B区 - 侧面标志               ║
╚═══════════════════════════════════════╝

    从海上进港 ⬆️
    
         ← 到港口 →
    
    🟢          ⛵️         🔴
  圆柱体                圆锥体
  奇数                  偶数
  绿色                  红色
   ║                      ║
   ║                      ║
  左侧                  右侧

B区记忆法：
"红右返航"
（美国、日本、菲律宾）
                `,
              }[l] as string,
              caption: {
                en: "Region B: Red RIGHT when returning from sea",
                ru: "Регион B: Красный СПРАВА при заходе с моря",
                zh: "B区：返港时红色在右",
              }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "Port (left): GREEN cylinders, odd numbers, green light",
                  "Starboard (right): RED cones, even numbers, red light",
                ],
                ru: [
                  "Левый борт: ЗЕЛЁНЫЕ цилиндры, нечётные номера, зелёный огонь",
                  "Правый борт: КРАСНЫЕ конусы, чётные номера, красный огонь",
                ],
                zh: [
                  "左舷：绿色圆柱体，奇数，绿灯",
                  "右舷：红色圆锥体，偶数，红灯",
                ],
              }[l] as string[],
            },
            {
              type: "note",
              content: {
                en: "Mnemonic: 'Red Right Returning' - red on starboard when returning from sea.",
                ru: "Мнемоника: 'Red Right Returning' - красный справа при возврате с моря.",
                zh: "记忆法：'红右返航' - 返港时红色在右舷。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Cardinal Marks (same worldwide)",
            ru: "Кардинальные знаки (одинаковые во всём мире)",
            zh: "基本方位标志（全球通用）",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Indicate safe water relative to mark. Pass on the named side:",
                ru: "Указывают безопасную воду относительно знака. Проходите с указанной стороны:",
                zh: "指示相对标志的安全水域。从指定侧通过：",
              }[l] as string,
            },
            {
              type: "illustration",
              src: {
                en: `
╔═══════════════════════════════════════╗
║        CARDINAL MARKS (WORLDWIDE)      ║
╚═══════════════════════════════════════╝

         NORTH (↑↑)
    Pass NORTH of mark
    2 cones points UP
         ▲▲
         ║║
        ┌──┐
WEST    │  │    EAST
(↔↔)    │⚠️│    (◄►)
┌──┐    │  │    ┌──┐
▼▲      └──┘      ◄►
Point             Base
Touch          to Base

         SOUTH (↓↓)
    Pass SOUTH of mark
    2 cones points DOWN
         ║║
         ▼▼

Danger is on OPPOSITE side
of where you should pass!
                `,
                ru: `
╔═══════════════════════════════════════╗
║   КАРДИНАЛЬНЫЕ ЗНАКИ (ГЛОБАЛЬНЫЕ)     ║
╚═══════════════════════════════════════╝

        СЕВЕР (↑↑)
  Проходите СЕВЕРНЕЕ
    2 конуса вверх
         ▲▲
         ║║
        ┌──┐
ЗАПАД   │  │   ВОСТОК
(↔↔)    │⚠️│    (◄►)
┌──┐    │  │    ┌──┐
▼▲      └──┘      ◄►
Острие          Основание
Касаются      к Основанию

         ЮГ (↓↓)
  Проходите ЮЖНЕЕ
   2 конуса вниз
         ║║
         ▼▼

Опасность на ПРОТИВОПОЛОЖНОЙ
стороне от прохода!
                `,
                zh: `
╔═══════════════════════════════════════╗
║        基本方位标志（全球）           ║
╚═══════════════════════════════════════╝

         北 (↑↑)
    从北侧通过
    2锥体尖朝上
         ▲▲
         ║║
        ┌──┐
西      │  │    东
(↔↔)    │⚠️│    (◄►)
┌──┐    │  │    ┌──┐
▼▲      └──┘      ◄►
尖对尖          底对底

         南 (↓↓)
    从南侧通过
    2锥体尖朝下
         ║║
         ▼▼

危险在应通过侧的
相反方向！
                `,
              }[l] as string,
              caption: {
                en: "Cardinal marks show safe passage direction",
                ru: "Кардинальные знаки показывают направление безопасного прохода",
                zh: "基本方位标志显示安全通过方向",
              }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "North: 2 black cones points UP (like N points up). Pass NORTH of mark.",
                  "South: 2 black cones points DOWN. Pass SOUTH of mark.",
                  "East: 2 black cones base-to-base (like E points outward). Pass EAST.",
                  "West: 2 black cones point-to-point (like W points inward). Pass WEST.",
                ],
                ru: [
                  "Север: 2 чёрных конуса вершинами ВВЕРХ (как N указывает вверх). Проходите СЕВЕРНЕЕ.",
                  "Юг: 2 чёрных конуса вершинами ВНИЗ. Проходите ЮЖНЕЕ.",
                  "Восток: 2 чёрных конуса основаниями друг к другу (как E указывает наружу). Проходите ВОСТОЧНЕЕ.",
                  "Запад: 2 чёрных конуса вершинами друг к другу (как W указывает внутрь). Проходите ЗАПАДНЕЕ.",
                ],
                zh: [
                  "北：2个黑色锥体尖端向上（如N指向上）。从北侧通过。",
                  "南：2个黑色锥体尖端向下。从南侧通过。",
                  "东：2个黑色锥体底对底（如E指向外）。从东侧通过。",
                  "西：2个黑色锥体尖对尖（如W指向内）。从西侧通过。",
                ],
              }[l] as string[],
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Special Marks",
            ru: "Специальные знаки",
            zh: "特殊标志",
          }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "Isolated Danger: Red-Black-Red horizontal bands, 2 black balls. Danger beneath, but navigable water around.",
                  "Safe Water: Red-White vertical stripes, red sphere on top. Safe water all around (mid-channel, landfall).",
                  "Special Purpose: Yellow (X-shape topmark). Indicates: traffic separation, pipelines, recreation zones, cables, etc.",
                ],
                ru: [
                  "Отдельная опасность: Красно-Чёрно-Красные горизонтальные полосы, 2 чёрных шара. Опасность под знаком, но вокруг судоходно.",
                  "Чистая вода: Красно-Белые вертикальные полосы, красная сфера сверху. Чистая вода вокруг (середина фарватера, приход к берегу).",
                  "Специального назначения: Жёлтый (крестообразный верхний знак). Означает: разделение движения, трубопроводы, зоны отдыха, кабели и т.д.",
                ],
                zh: [
                  "孤立危险：红-黑-红水平条纹，2个黑球。下方有危险，但周围可航行。",
                  "安全水域：红白垂直条纹，顶部红球。周围全是安全水域（航道中央、登陆点）。",
                  "特殊用途：黄色（X形顶标）。表示：交通分隔、管道、娱乐区、电缆等。",
                ],
              }[l] as string[],
            },
          ],
        },
        {
          type: "tip",
          content: {
            en: "Always check which IALA region you're in! App or chart will indicate. Getting it wrong can put you on rocks!",
            ru: "Всегда проверяйте, в каком регионе IALA вы находитесь! Приложение или карта укажут. Ошибка может посадить вас на камни!",
            zh: "务必检查你在哪个IALA区域！应用或海图会显示。搞错可能会让你触礁！",
          }[l] as string,
        },
      ];
    },
  },
  {
    id: "emergencies",
    category: "navigation",
    titleKey: "emergenciesTitle",
    descKey: "emergenciesDesc",
    icon: "🆘",
    order: 4,
    content: [
      {
        type: "accordion",
        title: "Man Overboard (MOB)",
        children: [
          { type: "heading", content: "Immediate Actions" },
          {
            type: "list",
            items: [
              "1. SHOUT 'Man Overboard!' + side (port/starboard)",
              "2. Throw life ring + dan buoy (smoke/light)",
              "3. Assign spotter (NEVER lose visual contact!)",
              "4. Press MOB button on chartplotter/GPS",
              "5. Note time and position",
              "6. Begin recovery maneuver",
            ],
          },
          { type: "heading", content: "Recovery Maneuvers" },
          {
            type: "text",
            content: "Sailboat - Quick Stop:",
          },
          {
            type: "list",
            items: [
              "Immediately head up into wind",
              "Drop headsail (jib/genoa)",
              "Hold mainsail in tight reach position",
              "Circle back to MOB",
              "Approach into wind, person to windward",
            ],
          },
          {
            type: "text",
            content: "Power Vessel - Williamson Turn:",
          },
          {
            type: "list",
            items: [
              "Full turn 60° away from MOB side",
              "Then hard over to opposite direction",
              "When heading 180° from original: straighten course",
              "Approach MOB slowly from downwind",
            ],
          },
          {
            type: "warning",
            content: "Engine in neutral when person is near prop! Many MOB fatalities are from propeller strikes during rescue.",
          },
          { type: "heading", content: "Getting Person Aboard" },
          {
            type: "list",
            items: [
              "Use swim ladder if available",
              "Throw line with loop for person to hold",
              "Use halyard + winch to hoist if exhausted",
              "Consider cutting away lifelines if needed",
              "Check for hypothermia, injuries",
            ],
          },
          { type: "heading", content: "VHF MAYDAY" },
          {
            type: "text",
            content: "If cannot recover quickly or person injured:",
          },
          {
            type: "code",
            content: `"MAYDAY, MAYDAY, MAYDAY
ALL SHIPS, ALL SHIPS, ALL SHIPS
This is [VESSEL NAME] x3
MAN OVERBOARD
Position: [GPS]
[NUMBER] person in water
Over"`,
          },
        ],
      },
      {
        type: "accordion",
        title: "Grounding",
        children: [
          { type: "heading", content: "Immediate Actions" },
          {
            type: "list",
            items: [
              "1. DON'T immediately shut off engine!",
              "2. Check for hull damage / leaks",
              "3. Sound bilges (any water ingress?)",
              "4. Note tide state (rising or falling?)",
              "5. Note wind/wave direction",
            ],
          },
          { type: "heading", content: "Soft Grounding (sand/mud)" },
          {
            type: "list",
            items: [
              "Try gentle reverse (don't dig in deeper)",
              "Heel boat to reduce draft (crew to one side / boom out)",
              "If tide rising: wait (kedge anchor if drifting)",
              "If tide falling: prepare to stay grounded until next tide",
            ],
          },
          { type: "heading", content: "Hard Grounding (rock)" },
          {
            type: "list",
            items: [
              "Do NOT try to power off (may damage hull more)",
              "Check for damage immediately",
              "Pump bilges continuously if leaking",
              "Kedge anchor technique: row anchor out, winch boat off",
              "Wait for high tide if not critical",
              "Consider calling for tow assistance",
            ],
          },
          { type: "heading", content: "Kedge Anchor Technique" },
          {
            type: "list",
            items: [
              "Load kedge anchor in dinghy",
              "Row out perpendicular to direction you want to pull",
              "Drop anchor 100-200m away",
              "Return to yacht",
              "Winch on anchor line (halyard winch for power)",
              "May need to heel boat simultaneously",
            ],
          },
          {
            type: "warning",
            content: "If holed and leaking badly, DON'T pull off until temporary patch applied! Grounding may be only thing preventing sinking.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Fire",
        children: [
          { type: "heading", content: "Immediate Actions" },
          {
            type: "list",
            items: [
              "1. SHOUT 'Fire!'",
              "2. Turn off gas + electrical systems (if source)",
              "3. Close hatches/doors (starve oxygen)",
              "4. Grab fire extinguisher",
              "5. Don life jackets (prepare to abandon)",
            ],
          },
          { type: "heading", content: "Fighting Fire" },
          {
            type: "list",
            items: [
              "Use correct extinguisher type:",
              "  - A: Wood, paper, cloth (water OK)",
              "  - B: Fuel, oil, grease (foam/CO2, NO WATER!)",
              "  - C: Electrical (CO2, NO WATER!)",
              "Aim at BASE of flames, sweep side-to-side",
              "Stay low (smoke rises)",
              "Approach from upwind if possible",
              "Have escape route",
            ],
          },
          {
            type: "warning",
            content: "If engine fire: don't open engine compartment! Oxygen rush can cause explosion. Use CO2 system if installed.",
          },
          { type: "heading", content: "When to Abandon" },
          {
            type: "list",
            items: [
              "Fire out of control (entire cabin involved)",
              "Fuel/gas lines threatened",
              "Smoke too thick to breathe",
              "Explosive materials nearby",
            ],
          },
          {
            type: "note",
            content: "Stay with vessel as long as safe - it's bigger, more visible than life raft. Abandon only when necessary.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Flooding",
        children: [
          { type: "heading", content: "Immediate Actions" },
          {
            type: "list",
            items: [
              "1. Locate source of water",
              "2. Start ALL bilge pumps (manual + electric)",
              "3. All hands bail (buckets, pots, anything!)",
              "4. Try to reduce inflow",
            ],
          },
          { type: "heading", content: "Reducing Inflow" },
          {
            type: "list",
            items: [
              "Through-hull damage: push cushion/mattress against hole",
              "Seacock failure: stuff rags, wedge wood, apply collision mat",
              "Hose failure: clamp, tape, or cut and plug seacock",
              "Deck leak: tarps, duct tape, anything to cover",
            ],
          },
          { type: "heading", content: "Temporary Patches" },
          {
            type: "list",
            items: [
              "Collision mat (canvas + lines): drape over hole from outside, water pressure holds it",
              "Pillows/cushions tied with lines: push into hole",
              "Wood + underwater epoxy: if you have time",
              "Duct tape: surprisingly effective on small holes",
            ],
          },
          {
            type: "warning",
            content: "If water ingress exceeds pump capacity and can't be stopped: prepare to abandon. Send MAYDAY before electrical systems fail!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Medical Emergencies",
        children: [
          { type: "heading", content: "Severe Injury / Illness" },
          {
            type: "list",
            items: [
              "Assess: Breathing? Bleeding? Conscious?",
              "Stabilize: Stop bleeding, secure airway, CPR if needed",
              "Radio for advice: VHF Ch 16 → Coast Guard → Medical consultation",
              "Consider evacuation: PAN-PAN MEDICO or MAYDAY if life-threatening",
            ],
          },
          { type: "heading", content: "When to Call for Evacuation" },
          {
            type: "list",
            items: [
              "Unconsciousness (not seasickness)",
              "Severe bleeding (can't control)",
              "Chest pain (potential heart attack)",
              "Difficulty breathing (not asthma with inhaler working)",
              "Suspected stroke (facial droop, arm weakness, speech difficulty)",
              "Severe burns (>10% body or face/hands)",
              "Spinal injury (don't move person!)",
            ],
          },
          { type: "heading", content: "Radio Call" },
          {
            type: "code",
            content: `PAN-PAN MEDICO (urgency):
"PAN-PAN, PAN-PAN, PAN-PAN
ALL SHIPS, ALL SHIPS, ALL SHIPS
This is [VESSEL] x3
Position: [GPS]
Medical emergency
[Brief description: unconscious crew, chest pain, etc.]
Requesting medical advice
Over"

MAYDAY (life-threatening):
"MAYDAY, MAYDAY, MAYDAY
Medical evacuation required
[Details]"`,
          },
          {
            type: "tip",
            content: "Coast Guard can patch you through to doctors for remote consultation. Have patient details ready: age, symptoms, vital signs, medications.",
          },
        ],
      },
    ],
  },
];
