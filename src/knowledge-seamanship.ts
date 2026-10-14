import type { KnowledgeArticle } from "./knowledge-types";
import type { Lang } from "./i18n";

export const SEAMANSHIP_ARTICLES: KnowledgeArticle[] = [
  {
    id: "essential-knots",
    category: "seamanship",
    titleKey: "knotsTitle",
    descKey: "knotsDesc",
    icon: "🪢",
    order: 1,
    content: [],
    getContent: (lang: Lang) => {
      const l = lang === "en" ? "en" : lang === "ru" ? "ru" : lang === "zh" ? "zh" : "en";
      return [
        {
          type: "text",
          content: {
            en: "Master these essential knots - they cover 90% of situations aboard.",
            ru: "Освойте эти основные узлы - они покрывают 90% ситуаций на борту.",
            zh: "掌握这些基本绳结 - 它们涵盖船上90%的情况。",
          }[l] as string,
        },
        {
          type: "accordion",
          title: {
            en: "⭐ Bowline - MUST KNOW",
            ru: "⭐ Булинь - ОБЯЗАТЕЛЬНО",
            zh: "⭐ 单套结 - 必须掌握",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "The 'King of Knots' - creates a fixed loop that won't slip or jam.",
                ru: "'Король узлов' - создаёт фиксированную петлю, которая не проскальзывает и не заклинивает.",
                zh: "'绳结之王' - 形成固定环圈，不会滑动或卡住。",
              }[l] as string,
            },
            {
              type: "illustration",
              src: "/knowledge/illustrations/knot-bowline.jpg",
              alt: {
                en: "Bowline knot step-by-step diagram",
                ru: "Пошаговая схема узла булинь",
                zh: "单套结分步图解",
              }[l] as string,
              caption: {
                en: "Rabbit comes out of hole, around tree, back down hole",
                ru: "Кролик выходит из норы, вокруг дерева, обратно в нору",
                zh: "兔子从洞里出来，绕过树，回到洞里",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "Uses", ru: "Применение", zh: "用途" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "Attaching sheets to sail clew",
                  "Mooring lines to dock cleats",
                  "Rescue loops",
                  "Any time you need a secure loop",
                ],
                ru: [
                  "Крепление шкотов к шкотовому углу паруса",
                  "Швартовые концы к кнехтам",
                  "Спасательные петли",
                  "Любая ситуация, когда нужна надёжная петля",
                ],
                zh: [
                  "将帆脚索固定到帆角",
                  "将系泊缆绳固定到系船柱",
                  "救援环圈",
                  "任何需要安全环圈的时候",
                ],
              }[l] as string[],
            },
            { 
              type: "heading", 
              content: { en: "How to Tie", ru: "Как вязать", zh: "如何打结" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "1. Make small loop (rabbit hole) in standing part",
                  "2. Working end comes up through hole (rabbit up)",
                  "3. Goes around behind standing part (around tree)",
                  "4. Goes back down through original hole (back down)",
                  "5. Pull tight",
                ],
                ru: [
                  "1. Сделайте маленькую петлю (нора кролика) в коренном конце",
                  "2. Ходовой конец проходит вверх через петлю (кролик выходит)",
                  "3. Идёт вокруг коренного конца (вокруг дерева)",
                  "4. Возвращается вниз через исходную петлю (обратно в нору)",
                  "5. Затяните",
                ],
                zh: [
                  "1. 在主绳上做一个小环（兔子洞）",
                  "2. 工作端从环中向上穿出（兔子出来）",
                  "3. 绕到主绳后面（绕树）",
                  "4. 从原来的环向下穿回（回洞）",
                  "5. 拉紧",
                ],
              }[l] as string[],
            },
            {
              type: "note",
              content: {
                en: "Mnemonic: 'Rabbit comes out of hole, around tree, back down hole'",
                ru: "Мнемоника: 'Кролик выходит из норы, вокруг дерева, обратно в нору'",
                zh: "记忆口诀：'兔子从洞里出来，绕过树，回到洞里'",
              }[l] as string,
            },
            {
              type: "tip",
              content: {
                en: "Can be tied one-handed! Essential skill for MOB rescue.",
                ru: "Можно вязать одной рукой! Важный навык для спасения человека за бортом.",
                zh: "可以单手打结！救援落水人员的必备技能。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "⭐ Cleat Hitch - MUST KNOW",
            ru: "⭐ Узел на утке - ОБЯЗАТЕЛЬНО",
            zh: "⭐ 系缆桩结 - 必须掌握",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Proper way to secure a line to a cleat (horn-shaped fitting).",
                ru: "Правильный способ крепления конца к утке (рогообразное устройство).",
                zh: "将缆绳固定到系缆桩（角状配件）的正确方法。",
              }[l] as string,
            },
            {
              type: "illustration",
              src: "/knowledge/illustrations/knot-cleat-hitch.jpg",
              alt: {
                en: "Cleat hitch step-by-step diagram",
                ru: "Пошаговая схема узла на утке",
                zh: "系缆桩结分步图解",
              }[l] as string,
              caption: {
                en: "Full turn, figure-8s, then locking turn",
                ru: "Полный оборот, восьмёрки, затем стопорящий шлаг",
                zh: "整圈、8字形、然后锁定圈",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "How to Tie", ru: "Как вязать", zh: "如何打结" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "1. One full turn around base",
                  "2. Figure-8 over horns (cross over top)",
                  "3. Another figure-8",
                  "4. Final underhand loop over one horn (locking turn)",
                ],
                ru: [
                  "1. Один полный оборот вокруг основания",
                  "2. Восьмёрка через рога (перекрест сверху)",
                  "3. Ещё одна восьмёрка",
                  "4. Финальная петля снизу на один рог (стопорящий шлаг)",
                ],
                zh: [
                  "1. 在底部绕一整圈",
                  "2. 在角上做8字形（从顶部交叉）",
                  "3. 再做一个8字形",
                  "4. 最后一个下手环套在一个角上（锁定圈）",
                ],
              }[l] as string[],
            },
            {
              type: "warning",
              content: {
                en: "NEVER tie multiple figure-8s without the locking turn - line can slip! One locking turn at the end is essential.",
                ru: "НИКОГДА не делайте несколько восьмёрок без стопорящего шлага - конец может проскользнуть! Один стопорящий шлаг в конце обязателен.",
                zh: "永远不要只打多个8字形而不加锁定圈 - 绳索会滑脱！最后的锁定圈至关重要。",
              }[l] as string,
            },
            {
              type: "tip",
              content: {
                en: "Quick release: skip the locking turn if you need to cast off fast (docking practice).",
                ru: "Быстрое освобождение: пропустите стопорящий шлаг, если нужно быстро отдать конец (при швартовке).",
                zh: "快速解脱：如果需要快速解缆（停靠练习），可省略锁定圈。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "⭐ Figure Eight",
            ru: "⭐ Восьмёрка",
            zh: "⭐ 8字结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Stopper knot - prevents line from running through blocks, cleats.",
                ru: "Стопорный узел - предотвращает проскальзывание конца через блоки, утки.",
                zh: "止索结 - 防止绳索从滑轮、系缆桩中滑出。",
              }[l] as string,
            },
            {
              type: "illustration",
              src: "/knowledge/illustrations/knot-figure-eight.jpg",
              alt: {
                en: "Figure eight knot step-by-step diagram",
                ru: "Пошаговая схема узла восьмёрка",
                zh: "8字结分步图解",
              }[l] as string,
              caption: {
                en: "Forms a figure-8 shape when tightened",
                ru: "Образует форму цифры 8 при затягивании",
                zh: "拉紧后形成8字形",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "Uses", ru: "Применение", zh: "用途" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "End of all sheets (so they don't escape)",
                  "Halyards",
                  "Any line that runs through something",
                ],
                ru: [
                  "Конец всех шкотов (чтобы не убежали)",
                  "Фалы",
                  "Любой конец, проходящий через что-либо",
                ],
                zh: [
                  "所有帆脚索末端（防止脱落）",
                  "升降索",
                  "任何需要穿过物体的绳索",
                ],
              }[l] as string[],
            },
            { 
              type: "heading", 
              content: { en: "How to Tie", ru: "Как вязать", zh: "如何打结" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "1. Make loop in rope",
                  "2. Bring working end around and under standing part",
                  "3. Thread through original loop",
                  "4. Tighten (looks like number 8)",
                ],
                ru: [
                  "1. Сделайте петлю в верёвке",
                  "2. Проведите ходовой конец вокруг и под коренным концом",
                  "3. Проденьте через исходную петлю",
                  "4. Затяните (похоже на цифру 8)",
                ],
                zh: [
                  "1. 在绳索上做一个环",
                  "2. 将工作端绕过并从主绳下穿过",
                  "3. 穿过原来的环",
                  "4. 拉紧（看起来像数字8）",
                ],
              }[l] as string[],
            },
            {
              type: "note",
              content: {
                en: "Preferred over overhand knot - easier to untie after loading.",
                ru: "Предпочтительнее простого узла - легче развязать после нагрузки.",
                zh: "优于单结 - 受力后更容易解开。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "⭐ Clove Hitch",
            ru: "⭐ Выбленочный узел",
            zh: "⭐ 双套结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Quick attachment to a post, rail, or ring.",
                ru: "Быстрое крепление к столбу, релингу или кольцу.",
                zh: "快速固定到柱子、栏杆或环上。",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "Uses", ru: "Применение", zh: "用途" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "Temporary mooring to pile",
                  "Attaching fenders to rail",
                  "Quick lashing",
                ],
                ru: [
                  "Временная швартовка к свае",
                  "Крепление кранцев к релингу",
                  "Быстрая найтовка",
                ],
                zh: [
                  "临时系泊到桩上",
                  "将护舷固定到栏杆",
                  "快速捆绑",
                ],
              }[l] as string[],
            },
            {
              type: "warning",
              content: {
                en: "Can slip under intermittent loads. Add half-hitches or use different knot for critical applications.",
                ru: "Может проскользнуть при переменных нагрузках. Добавьте полуштыки или используйте другой узел для критичных случаев.",
                zh: "在间歇性负载下可能滑脱。关键应用中需加半结或使用其他绳结。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "⭐ Round Turn + 2 Half Hitches",
            ru: "⭐ Простой штык с двумя полуштыками",
            zh: "⭐ 圆木结+两半结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Secure, reliable way to tie to a post, ring, or rail.",
                ru: "Надёжный, проверенный способ крепления к столбу, кольцу или релингу.",
                zh: "安全可靠的方式固定到柱子、环或栏杆。",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "How to Tie", ru: "Как вязать", zh: "如何打结" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "1. Pass line around post twice (round turn)",
                  "2. Tie two half-hitches around standing part",
                  "3. Tighten",
                ],
                ru: [
                  "1. Обведите конец вокруг столба дважды (шлаг)",
                  "2. Завяжите два полуштыка вокруг коренного конца",
                  "3. Затяните",
                ],
                zh: [
                  "1. 将绳索绕柱两圈（圆木结）",
                  "2. 在主绳上打两个半结",
                  "3. 拉紧",
                ],
              }[l] as string[],
            },
            {
              type: "tip",
              content: {
                en: "Round turn takes most of the load - you can tie the half-hitches while holding tension with the turn.",
                ru: "Шлаг принимает большую часть нагрузки - можно завязывать полуштыки, удерживая натяжение шлагом.",
                zh: "圆木结承受大部分负载 - 可以在保持圆木结张力的同时打半结。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Sheet Bend",
            ru: "Шкотовый узел",
            zh: "接绳结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Joins two ropes, especially of different diameters.",
                ru: "Соединяет два конца, особенно разного диаметра.",
                zh: "连接两根绳索，特别是不同直径的。",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "How to Tie", ru: "Как вязать", zh: "如何打结" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "1. Make bight (loop) in thicker rope",
                  "2. Pass thinner rope up through bight",
                  "3. Around behind both parts of bight",
                  "4. Tuck under itself",
                ],
                ru: [
                  "1. Сделайте колышку (петлю) в более толстом конце",
                  "2. Проведите тонкий конец вверх через колышку",
                  "3. Вокруг обеих частей колышки",
                  "4. Заведите под себя",
                ],
                zh: [
                  "1. 在较粗的绳索上做一个弯曲（环）",
                  "2. 将较细的绳索从弯曲中向上穿过",
                  "3. 绕过弯曲的两个部分",
                  "4. 塞进自身下面",
                ],
              }[l] as string[],
            },
            {
              type: "note",
              content: {
                en: "Double Sheet Bend: pass around bight twice before tucking. More secure for slippery ropes.",
                ru: "Двойной шкотовый: обведите вокруг колышки дважды перед заведением. Надёжнее для скользких концов.",
                zh: "双接绳结：在塞进前绕弯曲两圈。对滑溜的绳索更安全。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Rolling Hitch",
            ru: "Выбленочный узел со шлагом",
            zh: "滚动结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Attaches to another rope or spar, can slide but grips under load.",
                ru: "Крепится к другому концу или рею, может скользить, но держит под нагрузкой.",
                zh: "固定到另一根绳索或圆材，可以滑动但受力时抓牢。",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "Uses", ru: "Применение", zh: "用途" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "Taking strain off a line (to clear winch override)",
                  "Attaching to spinnaker pole",
                  "Snubbing anchor rode",
                ],
                ru: [
                  "Снятие нагрузки с конца (для очистки захлёстнутой лебёдки)",
                  "Крепление к гику спинакера",
                  "Разгрузка якорной цепи",
                ],
                zh: [
                  "减轻绳索张力（清理绞盘卡死）",
                  "固定到大三角帆杆",
                  "缓冲锚链",
                ],
              }[l] as string[],
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Reef Knot",
            ru: "Прямой узел",
            zh: "平结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Joins two ropes of SAME diameter. 'Left over right, right over left'.",
                ru: "Соединяет два конца ОДИНАКОВОГО диаметра. 'Левый над правым, правый над левым'.",
                zh: "连接两根相同直径的绳索。'左压右，右压左'。",
              }[l] as string,
            },
            {
              type: "warning",
              content: {
                en: "Can slip if ropes are different sizes or under intermittent load. Use Sheet Bend instead for critical applications.",
                ru: "Может проскользнуть, если концы разного размера или под переменной нагрузкой. Используйте шкотовый узел для критичных случаев.",
                zh: "如果绳索大小不同或间歇性负载可能滑脱。关键应用请使用接绳结。",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "Uses", ru: "Применение", zh: "用途" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: ["Reefing sail points", "Tying bundles", "Non-critical joins"],
                ru: ["Рифовые концы парусов", "Связывание тюков", "Некритичные соединения"],
                zh: ["缩帆点", "捆扎", "非关键连接"],
              }[l] as string[],
            },
          ],
        },
        {
          type: "accordion",
          title: {
            en: "Constrictor Knot",
            ru: "Удавка",
            zh: "绞索结",
          }[l] as string,
          children: [
            {
              type: "text",
              content: {
                en: "Binding knot - extremely tight, holds firmly.",
                ru: "Связывающий узел - очень тугой, держит крепко.",
                zh: "绑扎结 - 极其紧固，牢牢抓住。",
              }[l] as string,
            },
            { 
              type: "heading", 
              content: { en: "Uses", ru: "Применение", zh: "用途" }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "Temporary whipping on rope end",
                  "Securing hose to fitting",
                  "Emergency repairs",
                  "Closing bags",
                ],
                ru: [
                  "Временная оплётка конца троса",
                  "Крепление шланга к фитингу",
                  "Аварийный ремонт",
                  "Закрытие мешков",
                ],
                zh: [
                  "绳索末端临时包扎",
                  "将软管固定到接头",
                  "紧急修理",
                  "封闭袋子",
                ],
              }[l] as string[],
            },
            {
              type: "warning",
              content: {
                en: "Very hard to untie - may need to cut. Don't use where you'll need to undo it!",
                ru: "Очень трудно развязать - может потребоваться разрезать. Не используйте там, где нужно будет развязывать!",
                zh: "很难解开 - 可能需要剪断。不要在需要解开的地方使用！",
              }[l] as string,
            },
          ],
        },
        {
          type: "tip",
          content: {
            en: "Practice these knots at home until you can tie them in the dark, with cold wet hands. In an emergency, you won't have time to think!",
            ru: "Тренируйте эти узлы дома, пока не сможете вязать их в темноте, холодными мокрыми руками. В чрезвычайной ситуации у вас не будет времени думать!",
            zh: "在家练习这些绳结，直到你能在黑暗中、用冷湿的手打结。紧急情况下你没有时间思考！",
          }[l] as string,
        },
      ];
    },
  },
  {
    id: "anchoring",
    category: "seamanship",
    titleKey: "anchoringTitle",
    descKey: "anchoringDesc",
    icon: "⚓",
    order: 2,
    content: [
      {
        type: "accordion",
        title: "Choosing an Anchorage",
        children: [
          { type: "heading", content: "Good Anchorage Has" },
          {
            type: "list",
            items: [
              "Protection from wind/swell (current forecast!)",
              "Good holding ground (mud, sand, clay)",
              "Adequate depth (check tide range!)",
              "Swing room (360° radius = your rode + nearby boats)",
              "Clear bottom (no cables, pipes, moorings)",
              "Safe exit route if weather changes",
            ],
          },
          { type: "heading", content: "Ground Types" },
          {
            type: "list",
            items: [
              "✅ Best: Mud (M), Clay (Cl)",
              "✅ Good: Sand (S), Mixed (M/S)",
              "⚠️ Poor: Rock (Rk), Gravel (G), Weed (Wd)",
              "❌ Bad: Coral (Co) - also damages coral!",
            ],
          },
          {
            type: "note",
            content: "Chart abbreviations show bottom type. Check before anchoring!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Scope Calculation",
        children: [
          {
            type: "text",
            content: "Scope = Ratio of rode length to depth. More scope = better holding.",
          },
          {
            type: "list",
            items: [
              "Calm weather: 5:1 (e.g., 5m depth = 25m rode)",
              "Normal conditions: 7:1",
              "Strong wind/overnight: 10:1",
              "Storm: 10-15:1 or more",
            ],
          },
          { type: "heading", content: "Depth Calculation" },
          {
            type: "list",
            items: [
              "Water depth + tide rise + bow height above water",
              "Example: 4m chart depth + 1m tide + 1m bow = 6m",
              "For 7:1 scope: need 42m of rode",
            ],
          },
          {
            type: "tip",
            content: "Mark your anchor chain every 5-10m (paint, cable ties, different color shackles) so you know how much you've let out.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Anchoring Procedure",
        children: [
          { type: "heading", content: "Preparation" },
          {
            type: "list",
            items: [
              "Prepare anchor (remove windlass brake)",
              "Check rode (not tangled, clear to run)",
              "Assign crew: helm, anchor, lookout",
              "Brief crew on plan",
            ],
          },
          { type: "heading", content: "Setting the Anchor" },
          {
            type: "list",
            items: [
              "1. Approach slowly into wind/current",
              "2. Stop over chosen spot (use GPS or bearings)",
              "3. Lower anchor (DON'T throw!)",
              "4. Let boat drift back slowly",
              "5. Pay out rode gradually as you drift",
              "6. When desired scope reached, snub rode",
              "7. Give short burst of reverse (engine or backing sail)",
              "8. Check anchor is set (bearing, GPS track)",
            ],
          },
          {
            type: "warning",
            content: "Never drop anchor while moving forward - chain can tangle in prop!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Checking if Anchor Holds",
        children: [
          {
            type: "list",
            items: [
              "Take compass bearings to 2-3 shore objects (90° apart)",
              "Mark GPS position (anchor watch alarm)",
              "Watch for 15-30 minutes",
              "Signs of dragging:",
              "  - Bearings change",
              "  - GPS shows movement (> swing radius)",
              "  - Chain vibrates / jerks (felt through hull)",
              "  - You're closer to shore/other boats",
            ],
          },
          { type: "heading", content: "If Dragging" },
          {
            type: "list",
            items: [
              "Let out more scope first",
              "If still dragging: re-anchor in new spot",
              "Don't drag onto rocks or other boats!",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Anchor Types",
        children: [
          {
            type: "list",
            items: [
              "CQR / Plow: Universal, good in most bottoms",
              "Bruce / Claw: Modern, strong holding",
              "Danforth: Excellent in sand/mud, poor in rocks",
              "Rocna / Manson: Premium, best all-round",
              "Fortress: Aluminum, lightweight, good holding-to-weight",
            ],
          },
          {
            type: "note",
            content: "Anchor size matters! Bigger = better holding. Check manufacturer's recommendations for your boat size.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Weighing Anchor",
        children: [
          {
            type: "list",
            items: [
              "1. Start engine (for control)",
              "2. Motor forward while crew hoists chain",
              "3. Stop when boat is over anchor",
              "4. Break anchor free (may need short reverse)",
              "5. Hoist remaining rode",
              "6. Check anchor is aboard and secured",
              "7. Rinse chain if muddy",
            ],
          },
          {
            type: "tip",
            content: "Hauling anchor into wind is easier - wind helps break it free. But watch for drift onto other boats!",
          },
        ],
      },
    ],
  },
  {
    id: "docking",
    category: "seamanship",
    titleKey: "dockingTitle",
    descKey: "dockingDesc",
    icon: "🛥️",
    order: 3,
    content: [
      {
        type: "text",
        content: "Docking is often the most stressful part of sailing - but with preparation and practice, it becomes routine.",
      },
      {
        type: "accordion",
        title: "Preparation",
        children: [
          {
            type: "list",
            items: [
              "Fenders out (correct height for dock)",
              "Lines ready (4 minimum: bow, stern, 2 springs)",
              "Assign crew roles (who handles which line)",
              "Brief the plan (which side, wind/current effect)",
              "Slow down well before dock!",
            ],
          },
          {
            type: "tip",
            content: "Prepare fenders and lines EARLY, while still offshore. Don't scramble at the last minute!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Alongside / Berthing",
        children: [
          { type: "heading", content: "Four Lines" },
          {
            type: "list",
            items: [
              "Bow line: forward from bow",
              "Stern line: aft from stern",
              "Forward spring: from bow leading aft",
              "Aft spring: from stern leading forward",
            ],
          },
          {
            type: "note",
            content: "Springs prevent fore/aft movement. Bow/stern lines prevent leaving dock.",
          },
          { type: "heading", content: "Approach" },
          {
            type: "list",
            items: [
              "1. Approach at 20-30° angle to dock",
              "2. Into wind/current if possible",
              "3. SLOW! Walking pace or less",
              "4. Aim for mid-point of berth",
              "5. Turn parallel just before reaching",
              "6. Use reverse to stop forward motion",
              "7. Spring line first (holds boat to dock)",
              "8. Then bow, stern, remaining spring",
            ],
          },
          {
            type: "warning",
            content: "Wind/current pushing you OFF dock: approach at steeper angle. ON to dock: shallower angle and use reverse early.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Mediterranean Mooring (Stern-to)",
        children: [
          {
            type: "text",
            content: "Anchoring bow, backing stern to dock. Common in Mediterranean marinas.",
          },
          { type: "heading", content: "Procedure" },
          {
            type: "list",
            items: [
              "1. Set anchor 3-4 boat lengths from dock",
              "2. Pay out chain while reversing toward dock",
              "3. Prepare stern lines (crew ready with lines)",
              "4. Approach dock slowly in reverse",
              "5. Pass stern lines to dock",
              "6. Tension anchor chain to pull bow away",
              "7. Adjust position with chain and stern lines",
            ],
          },
          { type: "heading", content: "Wind/Current" },
          {
            type: "list",
            items: [
              "Side wind: anchor upwind, let wind blow stern to dock",
              "Helps push you into position",
            ],
          },
          {
            type: "tip",
            content: "Practice in empty spot first! Med mooring is hard. Many marinas have staff to help catch lines.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Prop Walk Effect",
        children: [
          {
            type: "text",
            content: "Right-hand prop (clockwise viewed from stern - most common):",
          },
          {
            type: "list",
            items: [
              "Forward gear: stern pushes slightly to starboard",
              "Reverse gear: stern pushes strongly to port",
            ],
          },
          {
            type: "note",
            content: "Use this! Reverse into dock port-side-to, and prop walk helps push you in. Starboard-side-to fights you.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Wind & Current Strategy",
        children: [
          {
            type: "list",
            items: [
              "Wind off dock (pushing away): Approach at steeper angle, get line ashore FAST",
              "Wind onto dock (pushing you in): Shallow angle, use reverse early to control",
              "Wind along dock: Approach from downwind, let wind blow you in",
              "Current: Face into it when possible, like wind",
            ],
          },
          {
            type: "tip",
            content: "Can't dock nicely? Circle and try again. Better to repeat approach than crash!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Common Mistakes",
        children: [
          {
            type: "list",
            items: [
              "❌ Coming in too fast (most common!)",
              "❌ Not preparing lines/fenders early",
              "❌ Wrong side (fenders on wrong side)",
              "❌ Not briefing crew",
              "❌ Ignoring wind/current",
              "❌ Throttle panic (too much throttle when worried)",
              "❌ Not using springs (boat moves fore/aft)",
            ],
          },
        ],
      },
      {
        type: "note",
        content: "Remember: slow is smooth, smooth is fast. There's no prize for quick docking, but there's a penalty for crashing!",
      },
    ],
  },
];
