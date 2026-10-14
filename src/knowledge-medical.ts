import type { KnowledgeArticle } from "./knowledge-types";

export const MEDICAL_ARTICLES: KnowledgeArticle[] = [
  {
    id: "seasickness",
    category: "medical",
    titleKey: "seasicknessTitle",
    descKey: "seasicknessDesc",
    icon: "🤢",
    order: 1,
    content: [
      {
        type: "text",
        content: "Seasickness (motion sickness) affects 70-80% of people on their first days at sea. It's NOT a sign of weakness - even experienced sailors can get it!",
      },
      {
        type: "accordion",
        title: "Why It Happens",
        children: [
          {
            type: "list",
            items: [
              "Conflict between inner ear (senses motion) and eyes (sees stable cabin)",
              "Brain gets confused signals → nausea",
              "Worsened by: lack of sleep, anxiety, stuffy air, reading, strong smells",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Prevention (BEFORE Going to Sea)",
        children: [
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
      },
      {
        type: "accordion",
        title: "At Sea (If Starting to Feel Sick)",
        children: [
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
      },
      {
        type: "accordion",
        title: "Severe Stage (Vomiting)",
        children: [
          {
            type: "warning",
            content: "Vomiting = dehydration = DANGEROUS. This is a medical issue now, not just discomfort!",
          },
          {
            type: "list",
            items: [
              "☐ Sip water every 15 minutes (even if vomiting)",
              "☐ If can't keep water down → medical evacuation may be needed",
              "☐ Phenergan suppository (if available) - bypasses stomach",
              "☐ Consider turning back / seeking shelter",
            ],
          },
          {
            type: "note",
            content: "Severe dehydration symptoms: dark urine, dizziness, rapid heart, confusion. This is medical emergency.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Acclimatization (Sea Legs)",
        children: [
          {
            type: "list",
            items: [
              "70% of people adapt in 2-3 days",
              "'Sea legs' is real - your brain learns to compensate",
              "Even experienced sailors can feel queasy on day 1",
              "Once adapted, symptoms unlikely to return on that voyage",
            ],
          },
          {
            type: "tip",
            content: "First day is hardest. Push through if you can - it usually gets much better day 2-3!",
          },
        ],
      },
      {
        type: "accordion",
        title: "For Skippers (Managing Seasick Crew)",
        children: [
          {
            type: "list",
            items: [
              "Arrange watch schedule (let them rest)",
              "Smooth sailing (avoid jerky maneuvers if possible)",
              "Ventilate cabins",
              "Simple food (crackers, soup - avoid greasy)",
              "Morale support (it's NOT weakness!)",
              "Consider shorter passages while crew acclimates",
            ],
          },
        ],
      },
    ],
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
