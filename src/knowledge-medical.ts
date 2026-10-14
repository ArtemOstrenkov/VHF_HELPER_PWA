import type { KnowledgeArticle, ContentBlock } from "./knowledge-types";
import type { Lang } from "./i18n";

function getContent(lang: Lang, contentMap: Record<string, ContentBlock[]>): ContentBlock[] {
  return contentMap[lang] || contentMap["en"] || [];
}

// Seasickness multilingual content
const seasicknessIntro: Record<string, string> = {
  en: "Seasickness (motion sickness) affects 70-80% of people on their first days at sea. It's NOT a sign of weakness - even experienced sailors can get it!",
  ru: "Морская болезнь (укачивание) затрагивает 70-80% людей в первые дни в море. Это НЕ признак слабости - даже опытные моряки могут её испытывать!",
  zh: "晕船（晕动病）影响70-80%的人在海上的头几天。这不是软弱的表现 - 即使是经验丰富的水手也会晕船！",
};

const whyContent: Record<string, ContentBlock[]> = {
  en: [
    {
      type: "list",
      items: [
        "Conflict between inner ear (senses motion) and eyes (sees stable cabin)",
        "Brain gets confused signals → nausea",
        "Worsened by: lack of sleep, anxiety, stuffy air, reading, strong smells",
      ],
    },
  ],
  ru: [
    {
      type: "list",
      items: [
        "Конфликт между внутренним ухом (чувствует движение) и глазами (видят стабильную каюту)",
        "Мозг получает противоречивые сигналы → тошнота",
        "Ухудшается от: недосыпа, тревоги, спёртого воздуха, чтения, сильных запахов",
      ],
    },
  ],
  zh: [
    {
      type: "list",
      items: [
        "内耳（感知运动）和眼睛（看到稳定的船舱）之间的冲突",
        "大脑收到混乱信号 → 恶心",
        "以下情况会加重：缺乏睡眠、焦虑、闷热空气、阅读、强烈气味",
      ],
    },
  ],
};

const preventionContent: Record<string, ContentBlock[]> = {
  en: [
    { type: "heading", content: "24 Hours Before" },
    {
      type: "list",
      items: [
        "☐ Get 8+ hours of sleep",
        "☐ Eat moderate meals (avoid fatty, spicy food)",
        "☐ Avoid alcohol",
        "☐ Stay hydrated",
      ],
    },
    { type: "heading", content: "1 Hour Before" },
    {
      type: "list",
      items: [
        "☐ Light snack (crackers, banana)",
        "☐ Take medication if planning to",
        "☐ Don't read or look at screens",
      ],
    },
    { type: "heading", content: "Medications" },
    {
      type: "list",
      items: [
        "Dramamine (dimenhydrinate): Take 1 hour before. Side effect: drowsiness",
        "Bonine (meclizine): Less drowsy than Dramamine",
        "Scopolamine patch: Apply 4 hours before, lasts 3 days. Prescription.",
        "Ginger: Natural option (candies, tea). Moderate effectiveness.",
        "Acupressure bands: Worn on wrists. Works for some.",
      ],
    },
    {
      type: "warning",
      content: "Some medications cause drowsiness. Skipper should not take them if on watch!",
    },
  ],
  ru: [
    { type: "heading", content: "За 24 часа" },
    {
      type: "list",
      items: [
        "☐ Спите 8+ часов",
        "☐ Умеренное питание (избегайте жирного, острого)",
        "☐ Избегайте алкоголя",
        "☐ Пейте достаточно воды",
      ],
    },
    { type: "heading", content: "За 1 час" },
    {
      type: "list",
      items: [
        "☐ Лёгкий перекус (крекеры, банан)",
        "☐ Примите лекарство, если планируете",
        "☐ Не читайте и не смотрите в экраны",
      ],
    },
    { type: "heading", content: "Лекарства" },
    {
      type: "list",
      items: [
        "Драмина (дименгидринат): Принять за 1 час. Побочный эффект: сонливость",
        "Бонин (меклозин): Меньше сонливости чем Драмина",
        "Пластырь со скополамином: Наклеить за 4 часа, действует 3 дня. По рецепту.",
        "Имбирь: Натуральный вариант (конфеты, чай). Умеренная эффективность.",
        "Акупрессурные браслеты: Носить на запястьях. Помогает некоторым.",
      ],
    },
    {
      type: "warning",
      content: "Некоторые лекарства вызывают сонливость. Шкипер не должен их принимать на вахте!",
    },
  ],
  zh: [
    { type: "heading", content: "提前24小时" },
    {
      type: "list",
      items: [
        "☐ 睡眠8小时以上",
        "☐ 适度饮食（避免油腻、辛辣食物）",
        "☐ 避免饮酒",
        "☐ 保持水分",
      ],
    },
    { type: "heading", content: "提前1小时" },
    {
      type: "list",
      items: [
        "☐ 轻食（饼干、香蕉）",
        "☐ 如计划服药请提前服用",
        "☐ 不要阅读或看屏幕",
      ],
    },
    { type: "heading", content: "药物" },
    {
      type: "list",
      items: [
        "茶苯海明（Dramamine）：提前1小时服用。副作用：嗜睡",
        "美克洛嗪（Bonine）：比茶苯海明嗜睡少",
        "东莨菪碱贴片：提前4小时贴，持续3天。需处方。",
        "生姜：天然选择（糖果、茶）。中等效果。",
        "穴位按压带：戴在手腕上。对某些人有效。",
      ],
    },
    {
      type: "warning",
      content: "某些药物会引起嗜睡。值班时船长不应服用！",
    },
  ],
};

const atSeaContent: Record<string, ContentBlock[]> = {
  en: [
    { type: "heading", content: "Immediate Actions" },
    {
      type: "list",
      items: [
        "1. Go on deck (fresh air!)",
        "2. Look at HORIZON (not inside boat)",
        "3. Sit/lie in center of boat (less motion)",
        "4. Cold water on face/neck",
        "5. Take the helm if possible (engages brain)",
      ],
    },
    { type: "heading", content: "What to Eat/Drink" },
    {
      type: "list",
      items: [
        "✅ Drink water: small sips, frequently (dehydration worsens it!)",
        "✅ Dry crackers, bread, pretzels",
        "✅ Green apple",
        "✅ Ginger tea/candies",
        "❌ Avoid: milk, fatty foods, acidic foods, alcohol",
      ],
    },
    { type: "heading", content: "DON'Ts" },
    {
      type: "list",
      items: [
        "❌ Go below deck (makes it MUCH worse)",
        "❌ Read, look at phone/tablet",
        "❌ Smell strong odors (fuel, cooking)",
        "❌ Lie on your side (lie flat on back better)",
      ],
    },
  ],
  ru: [
    { type: "heading", content: "Немедленные действия" },
    {
      type: "list",
      items: [
        "1. Выйдите на палубу (свежий воздух!)",
        "2. Смотрите на ГОРИЗОНТ (не внутрь лодки)",
        "3. Сядьте/лягте в центре лодки (меньше качки)",
        "4. Холодная вода на лицо/шею",
        "5. Возьмите штурвал, если возможно (занимает мозг)",
      ],
    },
    { type: "heading", content: "Что есть/пить" },
    {
      type: "list",
      items: [
        "✅ Пейте воду: маленькими глотками, часто (обезвоживание ухудшает!)",
        "✅ Сухие крекеры, хлеб, соленые палочки",
        "✅ Зелёное яблоко",
        "✅ Имбирный чай/конфеты",
        "❌ Избегайте: молоко, жирную еду, кислую еду, алкоголь",
      ],
    },
    { type: "heading", content: "НЕ делайте" },
    {
      type: "list",
      items: [
        "❌ Не спускайтесь вниз (станет НАМНОГО хуже)",
        "❌ Не читайте, не смотрите в телефон/планшет",
        "❌ Не нюхайте сильные запахи (топливо, готовка)",
        "❌ Не лежите на боку (лучше плашмя на спине)",
      ],
    },
  ],
  zh: [
    { type: "heading", content: "立即行动" },
    {
      type: "list",
      items: [
        "1. 到甲板上（新鲜空气！）",
        "2. 看地平线（不要看船内）",
        "3. 坐/躺在船中心（晃动较小）",
        "4. 用冷水洗脸/颈部",
        "5. 如果可能，接管舵轮（让大脑专注）",
      ],
    },
    { type: "heading", content: "吃什么/喝什么" },
    {
      type: "list",
      items: [
        "✅ 喝水：小口，频繁（脱水会加重！）",
        "✅ 干饼干、面包、椒盐饼干",
        "✅ 青苹果",
        "✅ 姜茶/姜糖",
        "❌ 避免：牛奶、油腻食物、酸性食物、酒精",
      ],
    },
    { type: "heading", content: "不要做" },
    {
      type: "list",
      items: [
        "❌ 不要下舱（会严重恶化）",
        "❌ 不要阅读、看手机/平板",
        "❌ 不要闻强烈气味（燃料、烹饪）",
        "❌ 不要侧躺（平躺更好）",
      ],
    },
  ],
};

export const MEDICAL_ARTICLES: KnowledgeArticle[] = [
  {
    id: "seasickness",
    category: "medical",
    titleKey: "seasicknessTitle",
    descKey: "seasicknessDesc",
    icon: "🤢",
    order: 1,
    content: [],
    getContent: (lang: Lang) => {
      const l = lang === "en" ? "en" : lang === "ru" ? "ru" : lang === "zh" ? "zh" : "en";
      return [
        { type: "text", content: seasicknessIntro[l] },
        {
          type: "accordion",
          title: { en: "Why It Happens", ru: "Почему это происходит", zh: "为什么会发生" }[l] as string,
          children: getContent(lang, whyContent),
        },
        {
          type: "accordion",
          title: { en: "Prevention (BEFORE Going to Sea)", ru: "Профилактика (ДО выхода в море)", zh: "预防（出海前）" }[l] as string,
          children: getContent(lang, preventionContent),
        },
        {
          type: "accordion",
          title: { en: "At Sea (If Starting to Feel Sick)", ru: "В море (если начинаете чувствовать тошноту)", zh: "在海上（如果开始感觉不适）" }[l] as string,
          children: getContent(lang, atSeaContent),
        },
        {
          type: "accordion",
          title: { en: "Severe Stage (Vomiting)", ru: "Тяжёлая стадия (Рвота)", zh: "严重阶段（呕吐）" }[l] as string,
          children: [
            {
              type: "warning",
              content: {
                en: "Vomiting = dehydration = DANGEROUS. This is a medical issue now, not just discomfort!",
                ru: "Рвота = обезвоживание = ОПАСНО. Это уже медицинская проблема, а не просто дискомфорт!",
                zh: "呕吐 = 脱水 = 危险。这已经是医疗问题，而不仅仅是不适！",
              }[l] as string,
            },
            {
              type: "list",
              items: {
                en: [
                  "☐ Sip water every 15 minutes (even if vomiting)",
                  "☐ If can't keep water down → medical evacuation may be needed",
                  "☐ Phenergan suppository (if available) - bypasses stomach",
                  "☐ Consider turning back / seeking shelter",
                ],
                ru: [
                  "☐ Пейте воду каждые 15 минут (даже при рвоте)",
                  "☐ Если не можете удержать воду → может потребоваться медицинская эвакуация",
                  "☐ Свечи Фенергана (если есть) - минуют желудок",
                  "☐ Подумайте о возвращении / поиске укрытия",
                ],
                zh: [
                  "☐ 每15分钟喝水（即使呕吐）",
                  "☐ 如果无法保持水分 → 可能需要医疗疏散",
                  "☐ 非那根栓剂（如有）- 绕过胃部",
                  "☐ 考虑返航/寻求庇护",
                ],
              }[l] as string[],
            },
            {
              type: "note",
              content: {
                en: "Severe dehydration symptoms: dark urine, dizziness, rapid heart, confusion. This is medical emergency.",
                ru: "Симптомы сильного обезвоживания: тёмная моча, головокружение, учащённое сердцебиение, спутанность сознания. Это неотложная медицинская помощь.",
                zh: "严重脱水症状：尿液发黑、头晕、心跳加快、意识混乱。这是医疗紧急情况。",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: { en: "Acclimatization (Sea Legs)", ru: "Адаптация (Морская походка)", zh: "适应期（海上平衡）" }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "70% of people adapt in 2-3 days",
                  "'Sea legs' is real - your brain learns to compensate",
                  "Even experienced sailors can feel queasy on day 1",
                  "Once adapted, symptoms unlikely to return on that voyage",
                ],
                ru: [
                  "70% людей адаптируются за 2-3 дня",
                  "'Морская походка' реальна - ваш мозг учится компенсировать",
                  "Даже опытные моряки могут чувствовать тошноту в 1-й день",
                  "После адаптации симптомы вряд ли вернутся в этом рейсе",
                ],
                zh: [
                  "70%的人在2-3天内适应",
                  "'海上平衡'是真实的 - 你的大脑学会补偿",
                  "即使是经验丰富的水手在第1天也可能感到不适",
                  "适应后，症状在该航程中不太可能复发",
                ],
              }[l] as string[],
            },
            {
              type: "tip",
              content: {
                en: "First day is hardest. Push through if you can - it usually gets much better day 2-3!",
                ru: "Первый день самый тяжёлый. Продержитесь, если можете - обычно на 2-3 день становится гораздо легче!",
                zh: "第一天最难。如果可以，坚持住 - 通常第2-3天会好很多！",
              }[l] as string,
            },
          ],
        },
        {
          type: "accordion",
          title: { en: "For Skippers (Managing Seasick Crew)", ru: "Для шкиперов (Управление командой с морской болезнью)", zh: "给船长（管理晕船船员）" }[l] as string,
          children: [
            {
              type: "list",
              items: {
                en: [
                  "Arrange watch schedule (let them rest)",
                  "Smooth sailing (avoid jerky maneuvers if possible)",
                  "Ventilate cabins",
                  "Simple food (crackers, soup - avoid greasy)",
                  "Morale support (it's NOT weakness!)",
                  "Consider shorter passages while crew acclimates",
                ],
                ru: [
                  "Организуйте график вахт (дайте им отдохнуть)",
                  "Плавное движение (избегайте резких манёвров, если возможно)",
                  "Проветривайте каюты",
                  "Простая еда (крекеры, суп - избегайте жирного)",
                  "Моральная поддержка (это НЕ слабость!)",
                  "Рассмотрите более короткие переходы, пока экипаж адаптируется",
                ],
                zh: [
                  "安排值班时间表（让他们休息）",
                  "平稳航行（如可能避免急转弯）",
                  "通风舱室",
                  "简单食物（饼干、汤 - 避免油腻）",
                  "士气支持（这不是软弱！）",
                  "在船员适应期间考虑较短航程",
                ],
              }[l] as string[],
            },
          ],
        },
      ];
    },
  },
  {
    id: "first-aid",
    category: "medical",
    titleKey: "firstAidTitle",
    descKey: "firstAidDesc",
    icon: "🩹",
    order: 2,
    content: [
      {
        type: "text",
        content: "A well-stocked medical kit and basic first aid knowledge can handle most onboard injuries.",
      },
      {
        type: "accordion",
        title: "Essential Medical Kit",
        children: [
          { type: "heading", content: "Medications" },
          {
            type: "list",
            items: [
              "☐ Pain relievers: Ibuprofen, Acetaminophen/Paracetamol",
              "☐ Antihistamines: Benadryl/Diphenhydramine (allergies, bites)",
              "☐ Seasickness: Dramamine, Bonine",
              "☐ Antibiotics: (prescription!) Amoxicillin, Azithromycin",
              "☐ Stomach: Pepto-Bismol, Imodium, antacids",
              "☐ Epinephrine auto-injector (if anyone has severe allergies)",
              "☐ Personal medications for crew",
            ],
          },
          { type: "heading", content: "Wound Care" },
          {
            type: "list",
            items: [
              "☐ Adhesive bandages (waterproof!)",
              "☐ Sterile gauze pads (various sizes)",
              "☐ Elastic bandages (compression)",
              "☐ Medical tape",
              "☐ Butterfly closures / Steri-strips",
              "☐ Antiseptics: Betadine, alcohol wipes, hydrogen peroxide",
              "☐ Antibiotic ointment (Neosporin)",
              "☐ Burn gel / aloe vera",
              "☐ Scissors, tweezers, safety pins",
            ],
          },
          { type: "heading", content: "Specialized" },
          {
            type: "list",
            items: [
              "☐ Thermal blanket (hypothermia)",
              "☐ SAM splint (fractures)",
              "☐ Eye wash",
              "☐ Seasickness bags",
              "☐ Disposable gloves",
              "☐ CPR face shield",
              "☐ Thermometer",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Common Injuries & Treatment",
        children: [
          { type: "heading", content: "Cuts / Lacerations" },
          {
            type: "list",
            items: [
              "1. Stop bleeding: direct pressure (5-10 min)",
              "2. Clean wound: fresh water + antiseptic",
              "3. Close wound: butterfly strips or pressure",
              "4. Bandage: sterile gauze + tape",
              "5. Watch for infection (redness, swelling, pus)",
            ],
          },
          {
            type: "warning",
            content: "Deep cuts (see muscle/bone): may need stitches. Call for medical advice. Clean + bandage, keep pressure, monitor.",
          },
          { type: "heading", content: "Burns" },
          {
            type: "list",
            items: [
              "1. Cool immediately: cold water 10-15 min (NOT ice!)",
              "2. Remove jewelry/tight items (before swelling)",
              "3. Don't pop blisters",
              "4. Apply burn gel / aloe vera",
              "5. Cover with sterile gauze (not cotton)",
              "6. Pain relief: Ibuprofen",
            ],
          },
          {
            type: "warning",
            content: "Severe burns (large area, face/hands, charred): medical evacuation. Cover with clean cloth, treat for shock.",
          },
          { type: "heading", content: "Head Injuries / Boom Strike" },
          {
            type: "list",
            items: [
              "Watch for concussion signs:",
              "  - Confusion, disorientation",
              "  - Nausea, vomiting",
              "  - Vision problems",
              "  - Severe headache",
              "  - Loss of consciousness (ANY duration!)",
              "If concussion suspected:",
              "  - Keep person awake for several hours",
              "  - Monitor closely",
              "  - No alcohol, no medications (mask symptoms)",
              "  - Medical consultation via radio",
            ],
          },
          {
            type: "warning",
            content: "Loss of consciousness, even brief: potential serious injury. Monitor constantly, consider evacuation.",
          },
          { type: "heading", content: "Bruises / Sprains" },
          {
            type: "list",
            items: [
              "RICE protocol:",
              "  R - Rest (don't use injured part)",
              "  I - Ice (cold compress 15 min every hour)",
              "  C - Compression (elastic bandage, not too tight)",
              "  E - Elevation (raise above heart if possible)",
              "Pain relief: Ibuprofen (also reduces swelling)",
            ],
          },
          { type: "heading", content: "Sunburn" },
          {
            type: "list",
            items: [
              "Prevention better than cure!",
              "Treatment:",
              "  - Cool compress",
              "  - Aloe vera gel",
              "  - Hydrate (drink water)",
              "  - Ibuprofen for pain/inflammation",
              "  - Stay out of sun!",
            ],
          },
          { type: "heading", content: "Jellyfish Stings" },
          {
            type: "list",
            items: [
              "1. Rinse with vinegar (NOT fresh water!)",
              "2. Remove tentacles (use tweezers, don't touch)",
              "3. Hot water (as hot as tolerable) for 20-40 min",
              "4. Pain relief: Ibuprofen",
              "5. Watch for allergic reaction",
            ],
          },
          {
            type: "warning",
            content: "Box jellyfish sting (tropics): potentially fatal. Vinegar + immediate medical evacuation!",
          },
        ],
      },
      {
        type: "accordion",
        title: "Medical Emergencies",
        children: [
          { type: "heading", content: "When to Call for Help" },
          {
            type: "list",
            items: [
              "❗ Unconsciousness (not seasickness)",
              "❗ Severe bleeding (can't control)",
              "❗ Chest pain (heart attack?)",
              "❗ Difficulty breathing (not minor asthma)",
              "❗ Suspected stroke (FAST: Face droop, Arm weakness, Speech difficulty, Time to call)",
              "❗ Severe burns (> 10% body, or face/hands)",
              "❗ Spinal injury (don't move person!)",
              "❗ Severe allergic reaction (anaphylaxis)",
            ],
          },
          { type: "heading", content: "Radio Medical Consultation" },
          {
            type: "text",
            content: "Coast Guard can connect you with doctors:",
          },
          {
            type: "code",
            content: `"PAN-PAN MEDICO, PAN-PAN MEDICO, PAN-PAN MEDICO
ALL SHIPS, ALL SHIPS, ALL SHIPS
This is [VESSEL NAME] x3
Position: [GPS]
Medical emergency: [brief description]
Requesting medical consultation
Over"`,
          },
          {
            type: "list",
            items: [
              "Have ready:",
              "  - Patient age, sex",
              "  - Symptoms (onset, duration)",
              "  - Vital signs (pulse, breathing, temp)",
              "  - Current medications",
              "  - Allergies",
              "  - What you've done so far",
            ],
          },
        ],
      },
      {
        type: "tip",
        content: "Take a marine first aid course! Reading is good, but hands-on practice with CPR, wound care, etc. is invaluable.",
      },
    ],
  },
];
