import type { KnowledgeArticle } from "./knowledge-types";

export const CHECKLIST_ARTICLES: KnowledgeArticle[] = [
  {
    id: "pre-charter",
    category: "checklists",
    titleKey: "preCharterTitle",
    descKey: "preCharterDesc",
    icon: "📋",
    order: 1,
    content: [
      {
        type: "warning",
        content: "Take photos/videos of ALL damage BEFORE departure! This protects your deposit.",
      },
      {
        type: "accordion",
        title: "Documents (Before Boarding)",
        children: [
          {
            type: "list",
            items: [
              "☐ Charter contract signed",
              "☐ Deposit hold on credit card confirmed",
              "☐ Insurance checked (coverage, deductible)",
              "☐ Skipper license valid",
              "☐ Radio license (if required in region)",
              "☐ Crew passports/ID",
              "☐ Provisioning list ready",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Exterior (On Water)",
        children: [
          { type: "heading", content: "Hull" },
          {
            type: "list",
            items: [
              "☐ Inspect for scratches, damage (PHOTO!)",
              "☐ Gelcoat cracks (note in acceptance report)",
              "☐ Hull below waterline (if visible)",
              "☐ Rudder moves freely",
              "☐ Prop blades intact, not bent",
            ],
          },
          { type: "heading", content: "Deck" },
          {
            type: "list",
            items: [
              "☐ Stanchions strong",
              "☐ Lifelines not worn, tight",
              "☐ Cleats securely fastened",
              "☐ Winches rotate, no squeaks",
              "☐ Hatches open/close, seals intact",
              "☐ Non-slip not critically worn",
              "☐ Anchor chain marked, not rusty",
              "☐ Anchor: proper type & weight",
            ],
          },
          { type: "heading", content: "Rigging (Sailboat)" },
          {
            type: "list",
            items: [
              "☐ Shrouds tensioned, no corrosion",
              "☐ Forestay/Backstay intact, strong",
              "☐ Turnbuckles cotter-pinned",
              "☐ Boom straight, fittings intact",
              "☐ Spreaders straight, ends capped",
              "☐ Mast straight, no cracks",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Systems",
        children: [
          {
            type: "list",
            items: [
              "☐ Engine start (cold + hot start)",
              "☐ Engine hour meter (record reading!)",
              "☐ Oil level check (dipstick)",
              "☐ Coolant level adequate",
              "☐ Fuel level (record - full tanks?)",
              "☐ Battery voltage ~12.5V (rest), 13.5+ (charging)",
              "☐ Battery isolator switches work",
              "☐ Bilge pumps: manual + auto test",
              "☐ Fresh water tanks full, pressure OK",
              "☐ Holding tank empty",
              "☐ Heads flush, no leaks",
              "☐ Gas (propane) ignites, flame even",
              "☐ Refrigerator cools",
              "☐ Heater starts (if present)",
              "☐ Shore power works, charging",
              "☐ All navigation lights work",
              "☐ Deck lights work",
              "☐ Interior lights work",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Navigation",
        children: [
          {
            type: "list",
            items: [
              "☐ Chartplotter powers on, charts loaded",
              "☐ GPS coordinates accurate",
              "☐ VHF radio transmit/receive, DSC setup",
              "☐ Depth sounder reading reasonable",
              "☐ Wind instruments working",
              "☐ Autopilot powers on, test in place",
              "☐ AIS working (if installed)",
              "☐ Radar powers on (if installed)",
              "☐ Compass: liquid clear, no bubbles",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Safety Equipment",
        children: [
          {
            type: "list",
            items: [
              "☐ Life jackets: count matches crew + correct sizes",
              "☐ Harnesses + tethers: count matches crew",
              "☐ Life raft: valid, certificate not expired",
              "☐ Flares: not expired (rockets, hand-held)",
              "☐ Fire extinguishers: pressure green, not expired",
              "☐ Smoke detector works",
              "☐ Gas detector works",
              "☐ First aid kit stocked",
              "☐ Foghorn works",
              "☐ EPIRB: registered, battery not expired",
              "☐ Flashlights charged, working",
              "☐ Jack lines installed on deck",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Sails (if applicable)",
        children: [
          {
            type: "list",
            items: [
              "☐ Mainsail: inspect for tears, wear",
              "☐ Genoa/Jib: condition, attachments",
              "☐ Spinnaker (if present): inspect",
              "☐ Reefing lines run freely",
              "☐ Sail ties/covers present",
              "☐ Halyards not twisted, not worn",
              "☐ Sheets intact",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Additional",
        children: [
          {
            type: "list",
            items: [
              "☐ Dinghy intact, oars, pump",
              "☐ Outboard motor starts, fuel",
              "☐ Fenders: enough, intact",
              "☐ Dock lines: 4-6, good condition",
              "☐ Ship's log present",
              "☐ System manuals present",
              "☐ Tools: basic set",
              "☐ Spare parts: oil, belts, gaskets",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Final Walk-Through",
        children: [
          {
            type: "list",
            items: [
              "☐ Full tour with charter manager",
              "☐ Ask to demonstrate specific systems",
              "☐ Ask about local hazards",
              "☐ Ask about restricted zones",
              "☐ Nearest port of refuge location",
              "☐ Emergency contacts noted",
              "☐ Photo/video ALL damage BEFORE leaving!",
              "☐ Agree on check-out process",
            ],
          },
        ],
      },
      {
        type: "tip",
        content: "Don't let the manager rush you! Take your time. Document everything. If they say 'it's minor, we'll note it' - YOU note it too with photos!",
      },
      {
        type: "note",
        content: "Common issues: Manager rushes inspection, acceptance in darkness, systems not demonstrated, damage minimized. Be thorough!",
      },
    ],
  },
  {
    id: "before-departure",
    category: "checklists",
    titleKey: "beforeDepartureTitle",
    descKey: "beforeDepartureDesc",
    icon: "⛵",
    order: 2,
    content: [
      {
        type: "accordion",
        title: "Weather & Route",
        children: [
          {
            type: "list",
            items: [
              "☐ Forecast checked (3-5 days)",
              "☐ Wind: direction, strength",
              "☐ Waves: height, period",
              "☐ Visibility adequate",
              "☐ Tides / currents noted",
              "☐ Waypoints in plotter",
              "☐ Alternative harbors identified",
              "☐ Hazards marked",
              "☐ Distance, ETA calculated",
              "☐ Fuel/water sufficient",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Crew",
        children: [
          {
            type: "list",
            items: [
              "☐ Safety briefing completed",
              "☐ Roles assigned",
              "☐ Life jackets on (if offshore)",
              "☐ Harnesses ready (if night/storm)",
              "☐ Seasickness meds taken (if needed)",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Systems",
        children: [
          {
            type: "list",
            items: [
              "☐ Engine warm-up (5 min)",
              "☐ Navigation instruments ON",
              "☐ VHF radio ON (Ch 16)",
              "☐ Depth sounder ON",
              "☐ Autopilot ready",
              "☐ Anchor secured (windlass, stoppers)",
              "☐ Sails ready (halyards, sheets)",
              "☐ Fenders stowed or left (next mooring?)",
              "☐ Dock lines released or ready",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Safety",
        children: [
          {
            type: "list",
            items: [
              "☐ Hatches secured",
              "☐ Loose items stowed",
              "☐ Lifelines checked",
              "☐ MOB equipment ready (life ring, dan buoy)",
              "☐ Bilge dry",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Communication",
        children: [
          {
            type: "list",
            items: [
              "☐ Marina departure notice (if required)",
              "☐ Float plan left ashore (with someone)",
              "☐ VHF radio check completed",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "daily-checks",
    category: "checklists",
    titleKey: "dailyChecksTitle",
    descKey: "dailyChecksDesc",
    icon: "🌅",
    order: 3,
    content: [
      {
        type: "accordion",
        title: "Morning",
        children: [
          {
            type: "list",
            items: [
              "☐ Weather forecast update",
              "☐ Engine oil level",
              "☐ Bilge check (dry?)",
              "☐ Battery voltage",
              "☐ Navigation lights test (if night passage)",
              "☐ Plan the day (route, ETA, fuel)",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Evening (At Anchor)",
        children: [
          {
            type: "list",
            items: [
              "☐ Anchor holding (bearing check)",
              "☐ Weather check (night, tomorrow)",
              "☐ Navigation lights ON",
              "☐ Anchor light ON",
              "☐ Batteries charging",
              "☐ Bilge check",
              "☐ Secure loose items (wind increase forecast?)",
              "☐ Emergency grab bag ready (if storm expected)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "emergency-bag",
    category: "checklists",
    titleKey: "emergencyBagTitle",
    descKey: "emergencyBagDesc",
    icon: "🆘",
    order: 4,
    content: [
      {
        type: "warning",
        content: "If you need to abandon the vessel, this waterproof bag goes with you into the life raft.",
      },
      {
        type: "list",
        items: [
          "☐ EPIRB (if not built into life raft)",
          "☐ Handheld VHF (charged)",
          "☐ GPS or smartphone in waterproof case",
          "☐ Flares",
          "☐ Flashlights + spare batteries",
          "☐ Water bottles (5L minimum)",
          "☐ Energy bars / emergency rations",
          "☐ First aid kit",
          "☐ Thermal blankets",
          "☐ Knife",
          "☐ Duct tape",
          "☐ Fishing kit (long drift)",
          "☐ Sunscreen + chapstick",
          "☐ Passports (laminated copies)",
          "☐ Ship's papers",
          "☐ Cash",
          "☐ Essential medications",
          "☐ Whistle",
        ],
      },
      {
        type: "tip",
        content: "Keep this bag in an accessible location, not buried in a locker. In an emergency, you may have only minutes.",
      },
    ],
  },
];
