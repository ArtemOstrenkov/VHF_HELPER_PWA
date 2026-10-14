import type { KnowledgeArticle } from "./knowledge-types";

export const SEAMANSHIP_ARTICLES: KnowledgeArticle[] = [
  {
    id: "essential-knots",
    category: "seamanship",
    titleKey: "knotsTitle",
    descKey: "knotsDesc",
    icon: "🪢",
    order: 1,
    content: [
      {
        type: "text",
        content: "Master these essential knots - they cover 90% of situations aboard.",
      },
      {
        type: "accordion",
        title: "⭐ Bowline (Булинь) - MUST KNOW",
        children: [
          {
            type: "text",
            content: "The 'King of Knots' - creates a fixed loop that won't slip or jam.",
          },
          { type: "heading", content: "Uses" },
          {
            type: "list",
            items: [
              "Attaching sheets to sail clew",
              "Mooring lines to dock cleats",
              "Rescue loops",
              "Any time you need a secure loop",
            ],
          },
          { type: "heading", content: "How to Tie" },
          {
            type: "list",
            items: [
              "1. Make small loop (rabbit hole) in standing part",
              "2. Working end comes up through hole (rabbit up)",
              "3. Goes around behind standing part (around tree)",
              "4. Goes back down through original hole (back down)",
              "5. Pull tight",
            ],
          },
          {
            type: "note",
            content: "Mnemonic: 'Rabbit comes out of hole, around tree, back down hole'",
          },
          {
            type: "tip",
            content: "Can be tied one-handed! Essential skill for MOB rescue.",
          },
        ],
      },
      {
        type: "accordion",
        title: "⭐ Cleat Hitch - MUST KNOW",
        children: [
          {
            type: "text",
            content: "Proper way to secure a line to a cleat (horn-shaped fitting).",
          },
          { type: "heading", content: "How to Tie" },
          {
            type: "list",
            items: [
              "1. One full turn around base",
              "2. Figure-8 over horns (cross over top)",
              "3. Another figure-8",
              "4. Final underhand loop over one horn (locking turn)",
            ],
          },
          {
            type: "warning",
            content: "NEVER tie multiple figure-8s without the locking turn - line can slip! One locking turn at the end is essential.",
          },
          {
            type: "tip",
            content: "Quick release: skip the locking turn if you need to cast off fast (docking practice).",
          },
        ],
      },
      {
        type: "accordion",
        title: "⭐ Figure Eight (Восьмёрка)",
        children: [
          {
            type: "text",
            content: "Stopper knot - prevents line from running through blocks, cleats.",
          },
          { type: "heading", content: "Uses" },
          {
            type: "list",
            items: [
              "End of all sheets (so they don't escape)",
              "Halyards",
              "Any line that runs through something",
            ],
          },
          { type: "heading", content: "How to Tie" },
          {
            type: "list",
            items: [
              "1. Make loop in rope",
              "2. Bring working end around and under standing part",
              "3. Thread through original loop",
              "4. Tighten (looks like number 8)",
            ],
          },
          {
            type: "note",
            content: "Preferred over overhand knot - easier to untie after loading.",
          },
        ],
      },
      {
        type: "accordion",
        title: "⭐ Clove Hitch (Выбленочный)",
        children: [
          {
            type: "text",
            content: "Quick attachment to a post, rail, or ring.",
          },
          { type: "heading", content: "Uses" },
          {
            type: "list",
            items: [
              "Temporary mooring to pile",
              "Attaching fenders to rail",
              "Quick lashing",
            ],
          },
          {
            type: "warning",
            content: "Can slip under intermittent loads. Add half-hitches or use different knot for critical applications.",
          },
        ],
      },
      {
        type: "accordion",
        title: "⭐ Round Turn + 2 Half Hitches",
        children: [
          {
            type: "text",
            content: "Secure, reliable way to tie to a post, ring, or rail.",
          },
          { type: "heading", content: "How to Tie" },
          {
            type: "list",
            items: [
              "1. Pass line around post twice (round turn)",
              "2. Tie two half-hitches around standing part",
              "3. Tighten",
            ],
          },
          {
            type: "tip",
            content: "Round turn takes most of the load - you can tie the half-hitches while holding tension with the turn.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Sheet Bend (Шкотовый)",
        children: [
          {
            type: "text",
            content: "Joins two ropes, especially of different diameters.",
          },
          { type: "heading", content: "How to Tie" },
          {
            type: "list",
            items: [
              "1. Make bight (loop) in thicker rope",
              "2. Pass thinner rope up through bight",
              "3. Around behind both parts of bight",
              "4. Tuck under itself",
            ],
          },
          {
            type: "note",
            content: "Double Sheet Bend: pass around bight twice before tucking. More secure for slippery ropes.",
          },
        ],
      },
      {
        type: "accordion",
        title: "Rolling Hitch (Стремя)",
        children: [
          {
            type: "text",
            content: "Attaches to another rope or spar, can slide but grips under load.",
          },
          { type: "heading", content: "Uses" },
          {
            type: "list",
            items: [
              "Taking strain off a line (to clear winch override)",
              "Attaching to spinnaker pole",
              "Snubbing anchor rode",
            ],
          },
        ],
      },
      {
        type: "accordion",
        title: "Reef Knot (Прямой узел)",
        children: [
          {
            type: "text",
            content: "Joins two ropes of SAME diameter. 'Left over right, right over left'.",
          },
          {
            type: "warning",
            content: "Can slip if ropes are different sizes or under intermittent load. Use Sheet Bend instead for critical applications.",
          },
          { type: "heading", content: "Uses" },
          {
            type: "list",
            items: ["Reefing sail points", "Tying bundles", "Non-critical joins"],
          },
        ],
      },
      {
        type: "accordion",
        title: "Constrictor Knot (Удавка)",
        children: [
          {
            type: "text",
            content: "Binding knot - extremely tight, holds firmly.",
          },
          { type: "heading", content: "Uses" },
          {
            type: "list",
            items: [
              "Temporary whipping on rope end",
              "Securing hose to fitting",
              "Emergency repairs",
              "Closing bags",
            ],
          },
          {
            type: "warning",
            content: "Very hard to untie - may need to cut. Don't use where you'll need to undo it!",
          },
        ],
      },
      {
        type: "tip",
        content: "Practice these knots at home until you can tie them in the dark, with cold wet hands. In an emergency, you won't have time to think!",
      },
    ],
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
