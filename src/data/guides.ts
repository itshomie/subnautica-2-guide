export const site = {
  name: 'Subnautica 2 Guide',
  url: 'https://subnautica-2-guide.com',
  lastUpdated: 'May 18, 2026',
  isoUpdated: '2026-05-18',
  versionNote:
    'Based on the current Subnautica 2 Early Access build. Routes, recipes, and balance may change in future updates.'
};

export type GuideCategory =
  | 'Start Here'
  | 'Resources'
  | 'Tools'
  | 'Commands'
  | 'Vehicles'
  | 'Base Building'
  | 'Map'
  | 'Multiplayer'
  | 'Updates'
  | 'Troubleshooting'
  | 'FAQ';

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: GuideCategory;
  intent: string;
  priority: number;
  status: 'Early Access guide' | 'Early Access summary' | 'Evergreen primer';
  quickFacts: { label: string; value: string }[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  commandRows?: { command: string; effect: string }[];
  itemCodeRows?: { item: string; code: string; note?: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  sources?: { label: string; url: string }[];
  noindex?: boolean;
};

export const officialSources = {
  steam: {
    label: 'Steam store page',
    url: 'https://store.steampowered.com/app/1962700/Subnautica_2/'
  },
  roadmap: {
    label: 'Unknown Worlds Early Access Roadmap',
    url: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap'
  }
};

const currentGuideSources = {
  pcGamerSilver: {
    label: 'PC Gamer silver launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-silver-location/'
  },
  gameSpotSilver: {
    label: 'GameSpot silver launch-build notes',
    url: 'https://www.gamespot.com/articles/how-to-get-silver-in-subnautica-2/1100-6539967/'
  },
  pcGamerGold: {
    label: 'PC Gamer gold launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-gold-location/'
  },
  pcGamerLead: {
    label: 'PC Gamer lead launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-lead-location/'
  },
  pcGamerSulfur: {
    label: 'PC Gamer sulfur launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-sulfur-location/'
  },
  pcGamerSalt: {
    label: 'PC Gamer salt launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-salt-location/'
  },
  pcGamerHabitatBuilder: {
    label: 'PC Gamer Habitat Builder launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-base-habitat-builder/'
  },
  pcGamerSonicResonator: {
    label: 'PC Gamer Sonic Resonator launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-mining-unknown-tool-sonic-resonator/'
  },
  pcGamerTadpole: {
    label: 'PC Gamer Tadpole launch-build route',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/'
  },
  pcGamerBaseLocations: {
    label: 'PC Gamer base location launch-build notes',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-best-base-locations/'
  },
  pcGamerFabricator: {
    label: 'PC Gamer fully functional Fabricator guide',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-fully-functional-fabricator-upgrade/'
  },
  pcGamerRepairTool: {
    label: 'PC Gamer Repair Tool and Rebreather route notes',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-repair-tool-fragment-locations/'
  },
  gameSpotRebreather: {
    label: 'GameSpot Rebreather fragment guide',
    url: 'https://www.gamespot.com/articles/subnautica-2-rebreather-location-guide/1100-6539975/'
  },
  pcGamerConsole: {
    label: 'PC Gamer console command testing',
    url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-console-commands-turn-on-god-mode-unlock-all-blueprints-craft-without-resources-and-change-your-fov/'
  }
};

const earlyAccessFact = {
  label: 'Version',
  value: 'Early Access, last reviewed May 18, 2026'
};

export const guides: Guide[] = [
  {
    slug: 'subnautica-2-beginners-guide',
    title: "Subnautica 2 Beginner's Guide",
    shortTitle: "Beginner's Guide",
    description:
      'A practical starting route for new Subnautica 2 players: first objectives, survival priorities, crafting, oxygen, and early base planning.',
    category: 'Start Here',
    intent: 'Help new players survive the first session and avoid wandering without a progression target.',
    priority: 1,
    status: 'Early Access summary',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best for', value: 'First 30-90 minutes' },
      { label: 'Spoilers', value: 'Light, progression-focused' },
      { label: 'Core loop', value: 'Scan, gather, craft, return, upgrade' },
      { label: 'First targets', value: 'Scanner, air tank, Habitat Builder, silver route' }
    ],
    sections: [
      {
        heading: 'What to do first',
        body:
          'Start by treating the opening area as a supply loop instead of a sightseeing trip. Check your pod, gather titanium, quartz, copper, and battery materials, craft the Scanner, then turn early trips into blueprint scans and air tank progress.',
        bullets: [
          'Read every objective or message before swimming away.',
          'Gather common materials before chasing gold or deep routes.',
          'Scan fragments as soon as you can; new blueprints are the main progression gate.',
          'Use north cave and Old Habitat routes for early silver and builder-related progress.',
          'Place early storage near your pod so failed trips still save time.'
        ]
      },
      {
        heading: 'Early survival priorities',
        body:
          'Oxygen, water, food, and inventory space matter more than distant exploration at the start. If a route takes too long without a clear landmark, turn back and prepare better equipment first.',
        bullets: [
          'Make short radial trips from the safe starting area.',
          'Pin recipes for the tool or module you are chasing.',
          'Do not carry every material at once; dedicate runs to one objective.',
          'Keep one return route in mind before entering caves or deeper shelves.'
        ]
      },
      {
        heading: 'First 60-minute route',
        body:
          'Use this route when you have spawned in and do not know what to do next. It keeps you close to safe landmarks while opening the first meaningful tools.',
        bullets: [
          'Check the Lifepod, active objective text, and available Fabricator recipes.',
          'Gather titanium, quartz, copper, rubber-style material, and battery materials in short loops.',
          'Craft the Scanner before committing to ruin, cave, or wreck exploration.',
          'Run the Welcome Center route for Habitat Builder scans when base-building becomes available.',
          'Run the north silver cave route before trying gold or heat routes.',
          'Build a small powered base near the Lifepod, then add a full Fabricator and storage.',
          'Use the northeast lead ravine and Old Habitat scans to work toward the Sonic Resonator.',
          'Start Tadpole progress only after base crafting and oxygen feel stable.'
        ]
      },
      {
        heading: 'When to build a base',
        body:
          'Build the first simple base after unlocking the Habitat Builder, usually close to the Lifepod. The first base should solve power, oxygen, storage, and a fully functioning Fabricator before it becomes decorative.'
      },
      {
        heading: 'Common first-session mistakes',
        body:
          'Most early frustration comes from going too far before the tool chain is ready.',
        bullets: [
          'Chasing gold before Heat Tolerance and the Sonic Resonator.',
          'Searching open water for silver instead of cave routes.',
          'Using only the Lifepod Fabricator after base recipes should move to a full Fabricator.',
          'Carrying every material at once instead of pinning one recipe and finishing it.',
          'Ignoring oxygen return distance when scanning ruins or caves.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Should I play Subnautica 2 solo first?',
        answer:
          'Solo is viable. Co-op can speed up gathering, but new players should still learn oxygen limits, scanning, and recipe pinning before splitting up.'
      },
      {
        question: 'Is this guide spoiler-free?',
        answer:
          'It avoids story reveals and focuses on survival and progression habits. Use the full walkthrough when you want exact next steps.'
      }
    ],
    related: ['subnautica-2-walkthrough', 'subnautica-2-resources', 'subnautica-2-habitat-builder']
  },
  {
    slug: 'subnautica-2-walkthrough',
    title: 'Subnautica 2 Walkthrough',
    shortTitle: 'Walkthrough',
    description:
      'A hub for spoiler-free and full progression routes through Subnautica 2 Early Access, with checkpoints for stuck players.',
    category: 'Start Here',
    intent: 'Players who need a clear next objective without opening full story spoilers.',
    priority: 2,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Route style', value: 'Checkpoint-based and spoiler-light' },
      { label: 'Spoiler options', value: 'Spoiler-free and full route sections' },
      { label: 'Use when', value: 'You have no active objective or upgrade target' },
      { label: 'Core unlocks', value: 'Scanner, Habitat Builder, full Fabricator, Sonic Resonator, Tadpole' }
    ],
    sections: [
      {
        heading: 'Spoiler-free progression order',
        body:
          'Use this page as a checklist of systems to unlock rather than a story transcript. Progression usually means finding the next scan, crafting the next tool, or reaching a safer route range.',
        bullets: [
          'Stabilize food, water, and oxygen.',
          'Craft the Scanner as soon as the recipe allows.',
          'Scan Habitat Builder parts near the Welcome Center route.',
          'Build a powered starter base and place a fully functional Fabricator.',
          'Collect silver, lead, and salt for oxygen, Sonic Resonator, and Tadpole progress.',
          'Return to black box or NOA-style objectives after each major tool unlock.'
        ]
      },
      {
        heading: 'First practical unlock order',
        body:
          'This order keeps the player moving without sending them into gold or heat routes too early.',
        bullets: [
          'Scanner: opens blueprint progress from fragments.',
          'Standard Air Tank: silver route solves early oxygen pressure.',
          'Habitat Builder: unlocks base power, storage, and a full Fabricator.',
          'Sonic Resonator: lead and wiring kit path unlocks large resource deposits.',
          'Tadpole: requires scans, vehicle infrastructure, and Power Cell materials.'
        ]
      },
      {
        heading: 'Checkpoint route',
        body:
          'Follow these checkpoints if your only question is what to do next.',
        bullets: [
          'Checkpoint 1: Scanner crafted and first nearby fragments scanned.',
          'Checkpoint 2: silver gathered and oxygen upgrade path started.',
          'Checkpoint 3: Habitat Builder scanned at the Welcome Center and crafted.',
          'Checkpoint 4: starter base powered, storage placed, full Fabricator available.',
          'Checkpoint 5: lead gathered from the northeast ravine and Sonic Resonator crafted.',
          'Checkpoint 6: Repair Tool and Rebreather path checked through wreck access.',
          'Checkpoint 7: Tadpole scans and vehicle infrastructure gathered after base crafting is stable.'
        ]
      },
      {
        heading: 'Stuck checklist',
        body:
          'If progression stops, check recipes, pinned ingredients, scan targets, and active objectives before assuming the game is bugged.',
        bullets: [
          'Look for unscanned fragments near wreckage, caves, or biome borders.',
          'Check whether a new fabricator, module, or base piece unlocked a hidden dependency.',
          'Revisit earlier areas with better oxygen and mobility.',
          'For Early Access bugs, save, restart, and check current patch notes before rebuilding a save.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Will the walkthrough change during Early Access?',
        answer:
          'Yes. Unknown Worlds has said updates can expand systems, biomes, resources, tools, vehicles, and story content, so route details may change after major updates.'
      },
      {
        question: 'Can I use this without story spoilers?',
        answer:
          'Yes. Start with the spoiler-free checklist and only open full route sections when you want exact objective order.'
      }
    ],
    related: ['subnautica-2-beginners-guide', 'subnautica-2-roadmap', 'subnautica-2-faq']
  },
  {
    slug: 'subnautica-2-map',
    title: 'Subnautica 2 Route Planning Guide',
    shortTitle: 'Route Planning',
    description:
      'A route-planning guide for early directions, landmarks, depth risk, return checks, and Early Access caveats.',
    category: 'Map',
    intent: 'Players who need safer route planning before a reliable full map exists.',
    priority: 3,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best use', value: 'Compare direction, landmarks, oxygen, and route risk' },
      { label: 'Visual status', value: 'Original explanatory illustrations only' },
      { label: 'Caveat', value: 'Not a complete coordinate map' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Use this page as a route planner, not a full map. The useful launch-build details are direction from the Lifepod, obvious landmarks, oxygen pressure, required tools, and whether the trip is worth marking with a beacon.',
        bullets: [
          'Start every route from a known landmark such as the Lifepod, Welcome Center, Old Habitat, or Cicada Wreck.',
          'Carry a Scanner when visiting ruins, wrecks, or abandoned bases.',
          'Turn back when the route needs a tool you have not unlocked yet.',
          'Place beacons only after you know a location solves a recurring problem.'
        ]
      },
      {
        heading: 'Route planning checklist',
        body:
          'For launch, this page intentionally avoids claiming to be a complete map. Use it to compare starter resource routes, fragment hunts, base candidates, and dangerous detours by preparation needs.',
        bullets: [
          'Goal: resource run, blueprint scan, base site, or story objective.',
          'Start: Lifepod, Old Habitat, Welcome Center, or another clear landmark.',
          'Direction: compass bearing or plain direction when available.',
          'Requirement: Scanner, Habitat Builder, Sonic Resonator, Repair Tool, Tadpole, oxygen upgrade, or heat tolerance.',
          'Abort signal: low oxygen, heat damage, hostile route, blocked door, or missing tool.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Does Subnautica 2 have an official map?',
        answer:
          'This fan site treats map data as Early Access-dependent. Use route notes as guidance and check the latest update notes when something changes.'
      },
      {
        question: 'Why are the visuals illustrations?',
        answer:
          'Original illustrations improve readability without implying that an image is a real game location or official map.'
      }
    ],
    related: ['subnautica-2-best-base-locations', 'subnautica-2-resources', 'subnautica-2-beginners-guide'],
    sources: [officialSources.steam, officialSources.roadmap],
    noindex: true
  },
  {
    slug: 'subnautica-2-roadmap',
    title: 'Subnautica 2 Roadmap',
    shortTitle: 'Roadmap',
    description:
      'A concise guide to the Subnautica 2 Early Access roadmap, likely update impact, and which guide pages need review after patches.',
    category: 'Updates',
    intent: 'Players checking what Early Access updates may change in routes, recipes, and progression.',
    priority: 4,
    status: 'Early Access summary',
    quickFacts: [
      { label: 'Official roadmap date', value: 'May 15, 2026' },
      { label: 'EA 1.1 focus', value: 'Quality-of-life and system improvements' },
      { label: 'EA 1.2 focus', value: 'Co-op improvements' },
      { label: 'Guide risk', value: 'Resources, tools, vehicles, and story can change' }
    ],
    sections: [
      {
        heading: 'What the roadmap means for guides',
        body:
          'Unknown Worlds says updates will range from hotfixes to system improvements and larger expansions. The most fragile pages are exact locations, crafting requirements, vehicle progression, and story steps.',
        bullets: [
          'Review resource routes after biome or resource changes.',
          'Review tool pages after crafting or scanner changes.',
          'Review multiplayer pages after co-op updates.',
          'Keep a recently updated section on the homepage after each patch.'
        ]
      },
      {
        heading: 'Update coverage plan',
        body:
          'Use one evergreen roadmap page for the big picture, then add patch-specific pages only when an update changes player behavior or search demand.'
      }
    ],
    faqs: [
      {
        question: 'Will every patch change this guide?',
        answer:
          'Not always. Small hotfixes may only need a freshness review, while larger updates can change routes, recipes, tools, vehicles, or co-op behavior.'
      }
    ],
    related: ['subnautica-2-early-access', 'subnautica-2-walkthrough', 'subnautica-2-multiplayer'],
    sources: [officialSources.roadmap, officialSources.steam]
  },
  {
    slug: 'subnautica-2-multiplayer',
    title: 'Subnautica 2 Multiplayer & Co-op Guide',
    shortTitle: 'Multiplayer',
    description:
      'How Subnautica 2 co-op works in Early Access, what to plan before inviting friends, and which systems may change in roadmap updates.',
    category: 'Multiplayer',
    intent: 'Players setting up co-op, cross-platform sessions, or role splits.',
    priority: 5,
    status: 'Early Access summary',
    quickFacts: [
      earlyAccessFact,
      { label: 'Mode', value: 'Online co-op listed on Steam' },
      { label: 'Party size', value: 'Up to 4 players according to official launch messaging' },
      { label: 'Cross-platform', value: 'Listed on Steam as cross-platform multiplayer' },
      { label: 'Roadmap risk', value: 'Co-op improvements are planned during Early Access' }
    ],
    sections: [
      {
        heading: 'Co-op planning tips',
        body:
          'Co-op is strongest when the group avoids four players chasing the same material. Split jobs by scanning, gathering, base setup, and route checking.',
        bullets: [
          'Agree on a shared storage system early.',
          'Pin different recipes so players do not duplicate the same trip.',
          'Keep one player near a safe return route when exploring deep areas.',
          'Save before long expeditions during Early Access.'
        ]
      },
      {
        heading: 'Cross-platform note',
        body:
          'The Steam page lists cross-platform multiplayer. Use this page as a co-op checklist for team roles, invite-flow differences, and Early Access changes.'
      }
    ],
    faqs: [
      {
        question: 'Can Subnautica 2 be played solo?',
        answer:
          'Yes. Official launch messaging says players can explore alone or with friends in co-op.'
      },
      {
        question: 'Should co-op players build one base or several?',
        answer:
          'Start with one shared utility base. Add outposts later when deeper routes become routine.'
      }
    ],
    related: ['subnautica-2-beginners-guide', 'subnautica-2-base-building', 'subnautica-2-roadmap'],
    sources: [officialSources.steam, officialSources.roadmap]
  },
  {
    slug: 'subnautica-2-resources',
    title: 'Subnautica 2 Resources Guide',
    shortTitle: 'Resources',
    description:
      'A resource hub for Subnautica 2 Early Access: silver, gold, lead, sulfur, salt, and which material route to run first.',
    category: 'Resources',
    intent: 'Players comparing resource uses and opening the right material guide quickly.',
    priority: 6,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Start with', value: 'Silver for oxygen and wiring, lead for Sonic Resonator, salt for Power Cell' },
      { label: 'Avoid early', value: 'Gold trips before heat tolerance and better route safety' },
      { label: 'Update risk', value: 'High for exact routes and recipes' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'For the launch-build resource loop, prioritize silver near Old Habitat caves for air tank and wiring progress, lead in the northeast ravine for the Sonic Resonator, and salt near Chap-related cave routes for Power Cell crafting. Gold belongs later because the best reported route is in the volcanic vent region and requires heat tolerance.',
        bullets: [
          'Silver: north of the Lifepod near Old Habitat cave routes.',
          'Lead: northeast ravine near the blue natural current and Tadpole fragment route.',
          'Salt: southeast cave near Chap-related objectives and rocky pillar routes.',
          'Sulfur: southeast rock pillar near Coral Crabs; bulk mining needs the Sonic Resonator.',
          'Gold: east volcanic vent region near the crashed colony ship after heat tolerance.'
        ]
      },
      {
        heading: 'What to collect first',
        body:
          'Do not farm every material at once. Gather only what unlocks the next survival upgrade, then return with better oxygen, storage, or mobility.',
        bullets: [
          'First oxygen push: silver, titanium, rubber, quartz, and battery materials.',
          'Mining push: lead, titanium ingots, wiring kit, and the Sonic Resonator scans.',
          'Vehicle push: salt for Power Cell, system chip materials, and Tadpole scans.',
          'Base push: Habitat Builder scans, glass, copper wire, power, and storage materials.'
        ]
      },
      {
        heading: 'Fast route selector',
        body:
          'Use this selector when you know the item you need but not the route. If two routes overlap, combine them only when your oxygen and inventory can handle the return trip.',
        bullets: [
          'Need Standard Air Tank or Wiring Kit: run the north silver caves near Old Habitat.',
          'Need Sonic Resonator: run the northeast lead ravine, then gather silver for the wiring kit.',
          'Need Repair Tool: run the southeast sulfur pillar near Coral Crabs after checking the recipe.',
          'Need Tadpole Power Cell: collect salt near Chap cave routes before chasing deeper vehicle scans.',
          'Need advanced electronics or Thermal Plant: wait for Heat Tolerance, then run the east volcanic gold route.'
        ]
      },
      {
        heading: 'How to avoid wasted resource runs',
        body:
          'Most bad resource trips start with the wrong goal. Pin the recipe first, empty your inventory, and decide whether the material is a hand pickup or a Sonic Resonator deposit before leaving base.',
        bullets: [
          'Hand pickups solve the first craft; large deposits are for repeat farming after the Sonic Resonator.',
          'If a route needs Heat Tolerance, finish story and adaptation progress first instead of forcing the trip.',
          'If a resource page mentions a wreck, ruin, or cave, bring the Scanner because nearby fragments can matter more than the material.',
          'Return with one completed recipe path rather than half-farming five unrelated materials.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which resource should I farm first?',
        answer:
          'Farm silver first if oxygen or wiring blocks you, lead first if the Sonic Resonator blocks you, and salt first if the Tadpole Power Cell blocks you.'
      }
    ],
    related: ['subnautica-2-silver', 'subnautica-2-lead', 'subnautica-2-salt', 'subnautica-2-gold'],
    sources: [
      currentGuideSources.pcGamerSilver,
      currentGuideSources.pcGamerLead,
      currentGuideSources.pcGamerSalt,
      currentGuideSources.pcGamerGold,
      officialSources.roadmap
    ]
  },
  {
    slug: 'subnautica-2-item-codes',
    title: 'Subnautica 2 Item Codes',
    shortTitle: 'Item Codes',
    description:
      'Subnautica 2 item code guide with the item command format, common item IDs, useful console commands, and Early Access caveats.',
    category: 'Commands',
    intent: 'Players using the current PC debug-console route to test items, recover a blocked save, or check resource IDs.',
    priority: 7,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Command format', value: 'item [code] [amount]' },
      { label: 'Console status', value: 'Unofficial mod-enabled debug console on PC' },
      { label: 'Verification', value: 'Reported and cross-checked May 18, 2026; not independently tested' },
      { label: 'Save advice', value: 'Use a backup or test save' }
    ],
    sections: [
      {
        heading: 'How item codes work',
        body:
          'In the current Early Access build, item spawning is tied to an unofficial debug-console setup rather than a built-in public option. Treat this as a PC mod/testing page, not a normal gameplay feature. After opening the console, use the item command with an internal code and an amount.',
        bullets: [
          'Use item titanium 10 to add 10 titanium.',
          'Use item quartz 5 to add 5 quartz.',
          'If a display name fails, try the internal ID from the table instead.',
          'Back up important saves before testing commands or mods.'
        ]
      },
      {
        heading: 'Use codes carefully',
        body:
          'Item codes are most useful for testing routes, replacing a bugged item, or checking recipe dependencies. Avoid using them on a main save unless you are comfortable with Early Access and mod-related risk.',
        bullets: [
          'Treat provisional item IDs as unstable until a patch confirms them.',
          'Check whether the item belongs in inventory before using item commands.',
          'Restart and recheck after hotfixes because commands can change quickly.'
        ]
      },
      {
        heading: 'Tested status',
        body:
          'These IDs are listed as reported launch-build commands and are not independently tested by this site. Use a backup save, expect hotfix changes, and do not assume Xbox or unmodded PC support.',
        bullets: [
          'Platform: PC only unless official console support changes later.',
          'Build context: Early Access launch window, last reviewed May 18, 2026.',
          'Confidence: common material IDs are higher confidence than advanced or unused-looking IDs.',
          'Risk: commands and IDs can change after hotfixes.'
        ]
      },
      {
        heading: 'What to check after patches',
        body:
          'Review the command format, changed item IDs, and any official console support after each major Subnautica 2 update. Item names and debug behavior are not guaranteed to stay fixed.'
      }
    ],
    commandRows: [
      { command: 'item [code] [amount]', effect: 'Adds an inventory item, for example item quartz 5.' },
      { command: 'nocost', effect: 'Craft or process without required materials.' },
      { command: 'unlock all', effect: 'Unlocks recipes, blueprints, and journal entries in the current debug-console setup.' },
      { command: 'god', effect: 'Disables normal survival pressure and damage.' },
      { command: 'oxygen', effect: 'Prevents oxygen from changing.' },
      { command: 'day / night', effect: 'Switches the current time of day.' }
    ],
    itemCodeRows: [
      { item: 'Titanium', code: 'titanium' },
      { item: 'Copper', code: 'copper' },
      { item: 'Quartz', code: 'quartz' },
      { item: 'Silver', code: 'silver' },
      { item: 'Gold', code: 'gold' },
      { item: 'Lead', code: 'lead' },
      { item: 'Salt', code: 'salt' },
      { item: 'Sulfur / Sulphur', code: 'sulfur', note: 'Use the US spelling in the item ID.' },
      { item: 'Lithium', code: 'lithium' },
      { item: 'Diamond', code: 'diamond' },
      { item: 'Metal Salvage', code: 'metalsalvage' },
      { item: 'Fibrous Pulp', code: 'plantmatter', note: 'The display name and internal ID differ.' },
      { item: 'Fiber Mesh', code: 'fibermesh' },
      { item: 'Rubber', code: 'rubber' },
      { item: 'Glass', code: 'glass' },
      { item: 'Enameled Glass', code: 'enameledglass' },
      { item: 'Wiring Kit', code: 'wiringkit' },
      { item: 'Advanced Wiring Kit', code: 'advancedwiringkit' },
      { item: 'Power Cell', code: 'powercell' },
      { item: 'Scanner', code: 'scanner' },
      { item: 'Flashlight', code: 'flashlight' },
      { item: 'Repair Tool', code: 'repairtool' },
      { item: 'Air Bladder', code: 'airbladder' },
      { item: 'Distraction Flare', code: 'flares', note: 'Internal ID differs from the display name.' }
    ],
    faqs: [
      {
        question: 'Do Subnautica 2 item codes work without mods?',
        answer:
          'Not as a stable official feature in the current Early Access build. Current public guidance uses a mod-enabled debug console on PC, so availability can vary by platform and patch.'
      },
      {
        question: 'Why is the sulphur item code spelled sulfur?',
        answer:
          'The internal item ID uses sulfur. The guide keeps both spellings visible so players searching with either version can still find the right code.'
      },
      {
        question: 'Should I use item codes in my main save?',
        answer:
          'Use a backup or test save first. Early Access commands, unofficial console access, and provisional item IDs can change after updates.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-tools', 'subnautica-2-faq'],
    sources: [currentGuideSources.pcGamerConsole, officialSources.steam, officialSources.roadmap],
    noindex: true
  },
  {
    slug: 'subnautica-2-silver',
    title: 'Where to Find Silver in Subnautica 2',
    shortTitle: 'Silver',
    description:
      'Silver location guide for Subnautica 2, including uses, route notes, safety checks, and related crafting pages.',
    category: 'Resources',
    intent: 'Players blocked by silver-related tools, builder parts, or advanced crafting steps.',
    priority: 7,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best early route', value: 'North from Lifepod toward Old Habitat cave routes' },
      { label: 'Pickup type', value: 'Small ore by hand; larger deposits need Sonic Resonator' },
      { label: 'Used for', value: 'Air tank progress, wiring kits, system chips, base facilities' },
      { label: 'Route risk', value: 'Oxygen pressure and hostile fish near deeper routes' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'For early silver, swim north from the Lifepod toward the Old Habitat route and check cave entrances before the ruins. Current launch-build reports point to caves near Old Habitat, including a concealed cave below an overhang with Jelly Lei, as one of the best early hand-pickup silver routes.'
      },
      {
        heading: 'Best early silver route',
        body:
          'Start at the Lifepod, head north past the Coral Dome landmark, and watch for ruined colony structures ahead. Before reaching the ruins, look right for a cave entrance below an overhang. Pick up small silver nodes by hand first; save larger deposits for after you unlock the Sonic Resonator.',
        bullets: [
          'Bring a Scanner because the same route can overlap with useful early fragments.',
          'Carry extra oxygen support if you are still on the basic tank.',
          'Do not chase every large silver deposit until the Sonic Resonator is crafted.',
          'If the cave feels too deep, mark the entrance mentally and return after an air tank upgrade.'
        ]
      },
      {
        heading: '10-minute silver run',
        body:
          'Use this as a repeatable first silver loop. It is written for players who have a Scanner and basic survival supplies but do not yet have the Sonic Resonator.',
        bullets: [
          'Empty your inventory except food, water, and any oxygen support you are using.',
          'Swim north from the Lifepod toward the Old Habitat area, using cave entrances and green cave flora as the main search cue.',
          'Check the cave floor and walls for loose silver ore before touching large deposits.',
          'Leave when you have enough for the next recipe; early silver is valuable only if you survive the return swim.',
          'If you see large silver outcrops, remember the spot and return with the Sonic Resonator instead of wasting oxygen.'
        ]
      },
      {
        heading: 'Required gear',
        body:
          'You can collect loose silver without a special mining tool, but the route is smoother with basic preparation.',
        bullets: [
          'Scanner: useful because Old Habitat routes overlap with early fragments.',
          'Air tank upgrade or spare oxygen support: recommended before searching deeper cave branches.',
          'Empty inventory: silver trips fail when common materials fill every slot.',
          'Sonic Resonator: needed later for large silver deposits, not for the first loose ore run.'
        ]
      },
      {
        heading: 'What silver is used for',
        body:
          'Silver is worth prioritizing because it unlocks longer dives and later electronics. Collect enough for immediate recipes before stockpiling.',
        bullets: [
          'Standard Air Tank progress.',
          'Wiring Kit and Advanced Wiring Kit chains.',
          'System Chip and dedicated core-style crafting.',
          'Base facilities and Tadpole-related progression.'
        ]
      },
      {
        heading: 'Common mistakes',
        body:
          'The fastest mistake is swimming past cave entrances and searching open water. Silver is more reliable around cave routes and colony ruin routes than in a random sweep of the starting basin.',
        bullets: [
          'Do not confuse gold-colored sulfur with silver when checking later routes.',
          'Do not spend a full trip on large ore blocks before you have the mining tool.',
          'Do not forget to empty inventory before a cave run; silver trips are only useful if you can bring the ore home.'
        ]
      },
      {
        heading: 'If you still cannot find silver',
        body:
          'Reset the search around route cues rather than distance alone. Early Access routes can feel inconsistent when you enter the wrong cave branch.',
        bullets: [
          'Look for small cave entrances north of the Lifepod instead of wide open seabed.',
          'Search walls and floor around Jelly Lei or other obvious cave flora.',
          'Check near Old Habitat cave networks rather than only inside the visible ruins.',
          'If every visible ore block says it needs another tool, you are looking at deposit farming content and should unlock the Sonic Resonator.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where should I look first for silver?',
        answer:
          'Start north of the Lifepod toward the Old Habitat cave routes. Current launch-build guides repeatedly point players to caves near Old Habitat and Chap-related routes for early silver.'
      },
      {
        question: 'Do I need the Sonic Resonator for silver?',
        answer:
          'No for small pieces you can pick up by hand. Yes for the larger silver deposits that need mining.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-habitat-builder', 'subnautica-2-sonic-resonator'],
    sources: [currentGuideSources.pcGamerSilver, currentGuideSources.gameSpotSilver]
  },
  {
    slug: 'subnautica-2-gold',
    title: 'Where to Find Gold in Subnautica 2',
    shortTitle: 'Gold',
    description:
      'Gold location guide for Subnautica 2, with route notes, crafting uses, and Early Access checklist.',
    category: 'Resources',
    intent: 'Players who need gold for advanced crafting and want to avoid unsafe early trips.',
    priority: 8,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best reported route', value: 'East volcanic vent region near the crashed colony ship' },
      { label: 'Requirement', value: 'Heat Tolerance adaptation before entering hot water safely' },
      { label: 'Used for', value: 'Advanced Wiring Kit, System Chip, Strong Acid, Thermal Plant' },
      { label: 'Collection', value: 'Hand pickups, breakable blocks, and Sonic Resonator deposits' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Gold is not the first resource to chase. Current launch-build reports place the best gold route in the volcanic vent region east of the Lifepod, especially around the crashed colony ship roughly 450 meters east. Get heat tolerance before treating this as a normal farming route.'
      },
      {
        heading: 'How to reach the gold route',
        body:
          'From the Lifepod, head east until the water turns warmer and the temperature warning appears. The crashed colony ship route is the target, but the area has predators and heat risk, so arrive with a clear return plan.',
        bullets: [
          'Unlock Heat Tolerance before pushing into the volcanic region.',
          'Bring the Sonic Resonator if you want to mine larger deposits.',
          'Keep inventory space open; the trip is not worth making for one or two pieces.',
          'Return if heat damage, oxygen pressure, or hostile patrols make the route unstable.'
        ]
      },
      {
        heading: 'Before you farm gold',
        body:
          'Gold is a mid-progression material in the current launch build. If you are still missing basic oxygen, base, or mining tools, gold is probably not the next best trip.',
        bullets: [
          'Unlock Heat Tolerance before entering the volcanic vent route as a farming loop.',
          'Bring the Sonic Resonator if you plan to mine large gold deposits instead of grabbing loose pieces.',
          'Make sure your base has storage and a fully functioning Fabricator so the gold can immediately become electronics or power parts.',
          'Do not bring a full inventory of common materials; the east route is too risky to return with only one useful item.'
        ]
      },
      {
        heading: 'Gold farming loop',
        body:
          'Once Heat Tolerance is available, use the crashed colony ship area as the anchor. Sweep rocks around the wreck, avoid hostile patrols, and leave before oxygen turns the return path into an emergency.',
        bullets: [
          'Start at the Lifepod and head east toward the volcanic vent region.',
          'Use the crashed colony ship around the 450-meter east route as the landmark.',
          'Check rocks and deposit surfaces near the wreck first; do not wander into hotter terrain without a clear reason.',
          'Return to base after filling the recipe need for Advanced Wiring Kit, System Chip, Strong Acid, or Thermal Plant materials.'
        ]
      },
      {
        heading: 'What gold is used for',
        body:
          'Gold becomes important once you move into electronics, advanced components, and better base power. Do not hoard it before you can use it.',
        bullets: [
          'Advanced Wiring Kit and System Chip chains.',
          'Strong Acid recipes that pair gold with sulfur.',
          'Thermal Plant setup for stronger base power options.',
          'Later tool and base facility progression.'
        ]
      },
      {
        heading: 'Common mistakes',
        body:
          'The biggest mistake is treating gold like an early shallow resource. If you still lack heat tolerance, better oxygen, or safe mobility, finish silver, lead, salt, and tool unlocks first.',
        bullets: [
          'Do not mistake sulfur for gold around the southeast pillar; gold belongs to the east volcanic route.',
          'Do not enter hot water before Heat Tolerance just because the target is visible.',
          'Do not farm gold before you know which electronics recipe needs it.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where is the best early gold route?',
        answer:
          'Use the east volcanic vent region near the crashed colony ship once you have heat tolerance. The route is useful, but it is not a first-hour material run.'
      },
      {
        question: 'Can I collect gold without the Sonic Resonator?',
        answer:
          'Small pieces can be collected by hand, but the Sonic Resonator is needed for larger ore deposits.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-silver', 'subnautica-2-fabricator'],
    sources: [currentGuideSources.pcGamerGold, officialSources.roadmap]
  },
  {
    slug: 'subnautica-2-lead',
    title: 'Where to Find Lead in Subnautica 2',
    shortTitle: 'Lead',
    description:
      'Lead location guide for Subnautica 2, including likely equipment needs, route notes, and crafting links.',
    category: 'Resources',
    intent: 'Players blocked by vehicle, base, or equipment recipes that need lead.',
    priority: 9,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best early route', value: 'Northeast ravine about 280m from the Lifepod' },
      { label: 'Route cue', value: 'Blue natural current and a nearby Tadpole fragment route' },
      { label: 'Used for', value: 'Sonic Resonator and some ingot processing paths' },
      { label: 'Collection', value: 'Small pieces by hand; larger deposits need Sonic Resonator' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'For early lead, head northeast from the Lifepod toward the ravine with a blue natural current, roughly 280 meters out on a 75 degree bearing. Current launch-build route notes point to small lead pickups and larger deposits along this ravine.'
      },
      {
        heading: 'How to reach the lead ravine',
        body:
          'Swim northeast from the Lifepod until you see the blue current below you, then drop into the ravine. Watch for the colony platform and Tadpole fragment on the left; lead appears along the ravine floor and nearby sides.',
        bullets: [
          'Bring enough oxygen for a return swim, especially before vehicle access.',
          'Pick up hand-collectable lead first because the Sonic Resonator itself needs lead.',
          'After crafting the Sonic Resonator, return for larger lead deposits if needed.',
          'Combine this trip with Tadpole fragment scouting when inventory allows.'
        ]
      },
      {
        heading: 'Fast lead run',
        body:
          'This run is mainly for players trying to craft the Sonic Resonator. Get enough lead for the recipe first, then return later for larger deposits after the tool is built.',
        bullets: [
          'Leave the Lifepod with a mostly empty inventory and enough oxygen for a ravine descent.',
          'Hold a northeast line toward about 75 degrees until the blue current becomes visible below.',
          'Drop into the ravine, sweep the floor and lower walls, and collect small lead pieces before checking large deposits.',
          'Scan nearby Tadpole fragments only if oxygen allows; do not lose the lead run trying to complete a vehicle route early.',
          'Return once you have the lead needed for the Sonic Resonator or any immediate recipe.'
        ]
      },
      {
        heading: 'What to combine with lead',
        body:
          'The lead route overlaps useful progression, but only combine objectives when you can safely return.',
        bullets: [
          'Sonic Resonator: lead is one of the key materials, so this is the main early reason to visit.',
          'Tadpole scans: one efficient Tadpole fragment route overlaps the same northeast ravine.',
          'Base outpost scouting: the northeast route has later progression value, but do not build there before power and storage are solved.',
          'Large deposit farming: return after the Sonic Resonator is crafted.'
        ]
      },
      {
        heading: 'What lead is used for',
        body:
          'Lead is a focused progression material in the opening phase. Its main early value is getting the Sonic Resonator built so larger ore deposits stop blocking progress.',
        bullets: [
          'Sonic Resonator crafting.',
          'Germanium ingot processing paths when silver is not used.',
          'Later vehicle, tool, and base-related material chains.'
        ]
      },
      {
        heading: 'If the ravine looks empty',
        body:
          'Lead can be easy to miss because the useful search area is below the visible surface route.',
        bullets: [
          'Drop into the ravine rather than circling above the blue current.',
          'Check the sand and walls near the colony platform and Tadpole fragment route.',
          'If every useful object is a large deposit, finish the Sonic Resonator path and return for deposit mining.',
          'If oxygen is the problem, do silver and air tank progress first.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where should I look first for lead?',
        answer:
          'Use the northeast ravine route from the Lifepod. The blue natural current and nearby Tadpole fragment are the easiest route cues to confirm you are in the right area.'
      },
      {
        question: 'Why do I need lead early?',
        answer:
          'Lead is needed for the Sonic Resonator, which lets you mine larger resource deposits and clear some blocked progression objects.'
      }
    ],
    related: ['subnautica-2-tadpole', 'subnautica-2-sonic-resonator', 'subnautica-2-resources'],
    sources: [currentGuideSources.pcGamerLead]
  },
  {
    slug: 'subnautica-2-sulphur',
    title: 'Where to Find Sulphur in Subnautica 2',
    shortTitle: 'Sulphur',
    description:
      'Sulphur location guide for Subnautica 2, focused on safe collection routes and advanced recipe links.',
    category: 'Resources',
    intent: 'Players hitting advanced crafting gates that may require sulphur.',
    priority: 10,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best early route', value: 'Southeast rock pillar near Coral Crabs, about 200m from Lifepod' },
      { label: 'Depth cue', value: 'Around 25m in current launch-build reports' },
      { label: 'Used for', value: 'Repair Tool, Strong Acid, advanced wiring chains' },
      { label: 'Bulk mining', value: 'Large deposits need the Sonic Resonator' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'For early sulphur, swim southeast from the Lifepod toward the rocky pillar near Coral Crabs, past the Welcome Center route. Current launch-build reports place small sulphur pickups and larger deposits around that pillar, roughly 200 meters out and around 25 meters deep.'
      },
      {
        heading: 'How to collect it safely',
        body:
          'Sulphur is easy to mistake for gold, so check the route and recipe before assuming you found the wrong material. Pick up small pieces by hand, then return with the Sonic Resonator for larger deposits.',
        bullets: [
          'Bring the Sonic Resonator if you want to mine in bulk.',
          'Stay out of hotter volcanic water until you have heat tolerance.',
          'Treat the Coral Crab area as a short collection route, not a long exploration route.',
          'Keep inventory space for sulfur, salt, and other nearby pickups.'
        ]
      },
      {
        heading: 'Fast sulphur route for Repair Tool',
        body:
          'Use this route when the Repair Tool recipe is the immediate blocker. The goal is one reliable sulphur pickup, not a full volcanic expedition.',
        bullets: [
          'From the Lifepod, swim southeast past the Welcome Center route toward the open seabed pillar.',
          'Use Coral Crabs, a rock pillar, and the nearby science platform as route cues.',
          'Search around the pillar at roughly shallow-to-mid starter depth for yellowish sulphur crystals.',
          'Pick up loose sulphur first; mine larger deposits only after the Sonic Resonator is available.',
          'Leave once the Repair Tool material need is solved, then use the tool to open blocked wreck doors.'
        ]
      },
      {
        heading: 'Sulphur and gold difference',
        body:
          'Sulphur and gold can both look yellow at a glance, but they belong to different early routes.',
        bullets: [
          'Sulphur route: southeast pillar near Coral Crabs, useful for Repair Tool and Strong Acid chains.',
          'Gold route: east volcanic vent region near the crashed colony ship, best after Heat Tolerance.',
          'If you are still near the Welcome Center and Coral Crabs, expect sulphur or salt before gold.',
          'If you are taking heat damage, you are likely pushing toward gold or volcanic progression too early.'
        ]
      },
      {
        heading: 'What sulphur is used for',
        body:
          'Sulphur matters because it connects early repair progress to later material chains. The first pressure point is usually the Repair Tool.',
        bullets: [
          'Repair Tool crafting.',
          'Strong Acid recipes with gold.',
          'Advanced Wiring Kit and later tool/base chains.',
          'Wreck access indirectly, because the Repair Tool opens blocked doors.'
        ]
      },
      {
        heading: 'When to return with Sonic Resonator',
        body:
          'The first sulphur trip should be short. After the Sonic Resonator is crafted, return to the pillar and nearby deposits when you need stronger acid or advanced material chains.',
        bullets: [
          'Return for larger sulphur deposits only after the mining tool is available.',
          'Combine the second trip with salt collection because the routes are close together.',
          'Do not stay in the area if oxygen pressure or hostile movement turns the return path uncertain.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where is the first sulphur route?',
        answer:
          'Start southeast of the Lifepod near the rock pillar by Coral Crabs. Current launch-build notes place small sulphur pickups and larger Sonic Resonator deposits there.'
      },
      {
        question: 'Is sulphur the same as sulfur in item codes?',
        answer:
          'The material is often spelled sulphur in guides, but current item-code reports use sulfur as the internal ID.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-sonic-resonator', 'subnautica-2-salt'],
    sources: [currentGuideSources.pcGamerSulfur]
  },
  {
    slug: 'subnautica-2-salt',
    title: 'Where to Find Salt in Subnautica 2',
    shortTitle: 'Salt',
    description:
      'Salt location and use guide for Subnautica 2, with early route planning and crafting notes.',
    category: 'Resources',
    intent: 'Help players find a common but easy-to-miss crafting material.',
    priority: 11,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Best early route', value: 'Southeast cave near Chap-related objectives' },
      { label: 'Other route', value: 'Southeast rocky pillar near sulfur deposits' },
      { label: 'Used for', value: 'Power Cell, water, food, and some base components' },
      { label: 'Tool needed', value: 'None for small salt pickups' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'For early salt, swim southeast from the Lifepod toward Chap-related cave routes near the Welcome Center and Coral Crab area. Current launch-build reports point to salt in the cave by Chap objectives and around the rocky pillar that also has sulphur nearby.'
      },
      {
        heading: 'Best early salt route',
        body:
          'Head southeast from the Lifepod, pass the Welcome Center, and look for the cave route near the pillar and Chap objective area. Salt appears as small light orange or pinkish clusters on cave floors, sand, or rock. Pick it up by hand and keep enough for Power Cell crafting.',
        bullets: [
          'No special tool is needed for hand pickups.',
          'Combine this run with sulfur if you are already near the rocky pillar.',
          'Mark the route mentally because salt becomes important again for Power Cell and survival loops.',
          'Avoid deeper volcanic routes until heat tolerance is available.'
        ]
      },
      {
        heading: 'Two starter salt routes',
        body:
          'If one salt route is empty or hard to navigate, switch to the other instead of wasting oxygen circling the same cave.',
        bullets: [
          'Chap cave route: follow the southeast objective path toward Chap habitat and black box cave, then check the cave floor.',
          'Rocky pillar route: search the southeast pillar near the sulfur route and Coral Crab area.',
          'If a route also contains sulphur, collect both only if the Repair Tool or Strong Acid path is active.',
          'If you are farming for Tadpole parts, keep salt for the Power Cell instead of using every piece on food.'
        ]
      },
      {
        heading: 'How much salt to keep',
        body:
          'Salt is common enough to spend, but the Tadpole Power Cell path makes it worth keeping a small reserve once you have base storage.',
        bullets: [
          'Keep at least a small stack after your first base has lockers.',
          'Spend salt on survival supplies only when food or water is the current problem.',
          'Before building the Tadpole, check Power Cell and Strong Acid needs before curing extra food.',
          'After the vehicle is built, salt becomes a convenient pickup during other southeast runs.'
        ]
      },
      {
        heading: 'What salt is used for',
        body:
          'Salt is easy to underrate until the Tadpole route asks for a Power Cell. Keep a small stack once your first base has storage.',
        bullets: [
          'Power Cell crafting for vehicle progression.',
          'Bleach and water support if the recipe path is available.',
          'Cured food and travel supplies.',
          'Some base or utility components as recipes expand.'
        ]
      },
      {
        heading: 'If you cannot see salt',
        body:
          'Search terrain features, not just open water. Salt is easier to miss when you swim above caves or pillars without checking the floor.',
        bullets: [
          'Check cave floors near Chap route objectives.',
          'Sweep the base of rocky pillars rather than only the top surface.',
          'Use the sulphur pillar as a second route cue if Chap cave does not give enough salt.',
          'If you only need food, compare fish options before spending every salt piece.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where should I find salt first?',
        answer:
          'Check the southeast Chap-related cave route first, then the nearby rocky pillar area where sulphur also appears.'
      },
      {
        question: 'Do salt nodes respawn?',
        answer:
          'Launch-build guide reports differ on exact behavior, so treat each pickup as finite and widen the route instead of waiting at one empty spot.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-sulphur', 'subnautica-2-tadpole'],
    sources: [currentGuideSources.pcGamerSalt]
  },
  {
    slug: 'subnautica-2-fibrous-pulp',
    title: 'How to Get Fibrous Pulp in Subnautica 2',
    shortTitle: 'Fibrous Pulp',
    description:
      'How to get Fibrous Pulp in Subnautica 2, what it is used for, and how to approach safe gathering routes.',
    category: 'Resources',
    intent: 'Players checking where Fibrous Pulp fits in fiber and equipment recipes.',
    priority: 12,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Use case', value: 'Fiber-style crafting chain' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'Visual approach', value: 'Original explanatory illustration' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Fibrous Pulp is easiest to track by crafting role first, then by safe preparation steps and related fiber or equipment pages.'
      },
      {
        heading: 'Gathering notes',
        body:
          'Check whether the material fits an immediate recipe before dedicating a long trip to it. New players should prioritize short, safe gathering loops.'
      }
    ],
    faqs: [
      {
        question: 'What is Fibrous Pulp used for?',
        answer:
          'Treat it as part of the fiber-style crafting chain until the page is expanded with a verified collection route and recipe table.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-tools', 'subnautica-2-beginners-guide'],
    noindex: true
  },
  {
    slug: 'subnautica-2-habitat-builder',
    title: 'Habitat Builder Fragment Locations in Subnautica 2',
    shortTitle: 'Habitat Builder',
    description:
      'How to unlock the Habitat Builder in Subnautica 2, what it changes, and what to build first.',
    category: 'Tools',
    intent: 'Target players blocked from base-building progression.',
    priority: 13,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Scans needed', value: '2 Habitat Builder scans' },
      { label: 'Best early route', value: 'Welcome Center colony ruin southeast of the Lifepod' },
      { label: 'Crafting', value: '2 titanium, 1 glass, 1 basic battery, 1 copper wire' },
      { label: 'After unlock', value: 'Build a compact powered base with storage first' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'To unlock the Habitat Builder, craft a Scanner and scan two Habitat Builder devices. Current launch-build route notes place two early scans at the Welcome Center colony ruin southeast of the Lifepod: one in an open crate near the entrance sign, and one in the cave below the building after clearing the blocked floor opening.'
      },
      {
        heading: 'How to unlock it',
        body:
          'Make the Scanner first, then run the Welcome Center route. Scan both builders before returning to craft your own tool.',
        bullets: [
          'Scanner crafting route: 2 titanium, 2 quartz, and 1 basic battery.',
          'First scan: open crate to the right of the Welcome Center entrance sign.',
          'Second scan: cave below the building, reached after removing the metal blocking the floor hole.',
          'Habitat Builder craft: 2 titanium, 1 glass, 1 basic battery, and 1 copper wire.'
        ]
      },
      {
        heading: 'Welcome Center scan route',
        body:
          'This is the practical early route when storage and crafting trips start slowing you down.',
        bullets: [
          'Craft the Scanner before leaving the Lifepod route.',
          'Swim southeast toward the Welcome Center colony ruin.',
          'Scan the first Habitat Builder in the open crate near the entrance sign.',
          'Enter the structure and check the floor opening that leads into the cave below.',
          'Clear the blockage, drop into the shallow cave, and scan the second Habitat Builder.'
        ]
      },
      {
        heading: 'Materials to prepare',
        body:
          'You can save time by gathering the craft materials before returning to base.',
        bullets: [
          'Titanium: keep at least two pieces for the builder itself and more for the first base module.',
          'Glass: prepare quartz ahead of time so the Habitat Builder craft does not stall.',
          'Basic battery: keep battery materials reserved instead of spending everything on other tools.',
          'Copper wire: collect copper during starter resource loops.'
        ]
      },
      {
        heading: 'What to build first',
        body:
          'After unlocking the builder, prioritize a compact base that solves storage, oxygen resets, and crafting access before decorative modules.',
        bullets: [
          'A small room or compartment.',
          'Reliable power.',
          'Storage near the entrance.',
          'Crafting and upgrade access if unlocked.'
        ]
      },
      {
        heading: 'First base after the unlock',
        body:
          'Build small and functional. The first base is good when it reduces repeated Lifepod trips, not when it uses every material you own.',
        bullets: [
          'Start near the Lifepod or another safe early landmark.',
          'Add power before extra rooms.',
          'Place storage and a Fabricator where you can reach them immediately after entering.',
          'Leave clear space if you plan to add Moonpool or Tadpole infrastructure later.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How many Habitat Builder scans do I need?',
        answer:
          'You need two scans to unlock the craftable Habitat Builder blueprint in the launch build.'
      },
      {
        question: 'Where should I build after unlocking it?',
        answer:
          'Start close to the Lifepod or another safe starter route. Prioritize power, storage, oxygen, and a clear entrance before expanding.'
      }
    ],
    related: ['subnautica-2-base-building', 'subnautica-2-best-base-locations', 'subnautica-2-silver'],
    sources: [currentGuideSources.pcGamerHabitatBuilder]
  },
  {
    slug: 'subnautica-2-sonic-resonator',
    title: 'How to Get the Sonic Resonator in Subnautica 2',
    shortTitle: 'Sonic Resonator',
    description:
      'Sonic Resonator guide for Subnautica 2, including unlock checklist, likely recipe bottlenecks, and preparation notes.',
    category: 'Tools',
    intent: 'Help players unlock or craft a key tool without guessing dependencies.',
    priority: 14,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Scans needed', value: '2 Sonic Resonator scans' },
      { label: 'Fast route', value: 'Old Habitat north of Lifepod or cave near Lifepod' },
      { label: 'Crafting', value: '1 basic battery, 2 titanium ingots, 2 lead, 1 wiring kit' },
      { label: 'Use', value: 'Mine large ore deposits and clear Bloom Biofilm' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'To unlock the Sonic Resonator, scan two fragments. Current launch-build reports list two inside the Old Habitat around 370 meters north of the Lifepod, plus another on a desk in a cave only a short swim from the Lifepod on a northward route.'
      },
      {
        heading: 'Best scan route',
        body:
          'Old Habitat is the cleanest route if you already have the Scanner and enough oxygen. Enter the building and scan the fragments before leaving the ruins. If you miss one, check the nearby Lifepod cave route or later black box routes.',
        bullets: [
          'Old Habitat route: about 370 meters north of the Lifepod.',
          'Fragment cue: two Sonic Resonators inside the Old Habitat building.',
          'Backup cue: one on a desk in a cave close to the Lifepod, on a roughly northward heading.',
          'Extra route: one behind Wander-related black box routes near the Spider Dome area.'
        ]
      },
      {
        heading: 'Crafting recipe',
        body:
          'After unlocking the blueprint, craft the Sonic Resonator at a fully functional Fabricator. The basic Lifepod Fabricator may not expose every recipe.',
        bullets: [
          '1 basic battery.',
          '2 titanium ingots.',
          '2 lead.',
          '1 wiring kit.'
        ]
      },
      {
        heading: 'Missing ingredient routes',
        body:
          'If the blueprint is unlocked but crafting is blocked, solve the missing ingredient directly instead of repeating the fragment route.',
        bullets: [
          'Lead: use the northeast ravine route with the blue natural current.',
          'Wiring Kit: run the north silver caves near Old Habitat, then craft from silver.',
          'Titanium ingots: gather enough common titanium before using rare-route inventory space.',
          'Basic battery: reserve battery materials before spending them on secondary tools.'
        ]
      },
      {
        heading: 'How to use it',
        body:
          'Swim to a large ore vein, charge the Sonic Resonator, and break the deposit into collectible chunks. This turns silver, lead, titanium, sulfur, and other large deposits into practical farming targets.'
      },
      {
        heading: 'What the Sonic Resonator unlocks next',
        body:
          'The tool is more than a mining upgrade. It changes which blocked objects and resource deposits are worth revisiting.',
        bullets: [
          'Large silver and lead deposits become practical repeat farms.',
          'Sulfur deposits near the southeast pillar become useful for Strong Acid and advanced chains.',
          'Bloom Biofilm blockers can be cleared when a route requires it.',
          'Long routes become more efficient because one trip can produce enough raw material for several crafts.'
        ]
      },
      {
        heading: 'Common Sonic Resonator mistakes',
        body:
          'Most failures come from trying to craft it at the wrong station or missing the lead/wiring chain.',
        bullets: [
          'Use a full base Fabricator if the Lifepod Fabricator does not show the recipe.',
          'Do not mine every deposit you see; mine the material tied to your next unlock.',
          'Do not forget lead before leaving the northeast ravine, because it is part of the tool recipe itself.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why does the game say an unknown tool is required?',
        answer:
          'That message usually means you are looking at a large deposit that needs the Sonic Resonator rather than a hand pickup.'
      },
      {
        question: 'Do I need a base before crafting it?',
        answer:
          'Yes, in practice. Build a base and place a fully functional Fabricator there so the Sonic Resonator recipe is available.'
      }
    ],
    related: ['subnautica-2-tools', 'subnautica-2-lead', 'subnautica-2-fabricator'],
    sources: [currentGuideSources.pcGamerSonicResonator]
  },
  {
    slug: 'subnautica-2-rebreather',
    title: 'How to Get the Rebreather in Subnautica 2',
    shortTitle: 'Rebreather',
    description:
      'Rebreather unlock guide for Subnautica 2, with depth progression notes and Early Access checklist.',
    category: 'Tools',
    intent: 'Answer depth-gate searches from players trying to explore deeper routes.',
    priority: 15,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Use case', value: 'Safer deep exploration' },
      { label: 'Common route', value: 'Wreck route northeast of the Lifepod after Repair Tool' },
      { label: 'Requirement', value: 'Scanner and often Repair Tool access' },
      { label: 'Pairs with', value: 'Air tank, Tadpole, route planning, base outposts' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'The Rebreather becomes valuable when deeper routes burn oxygen too quickly. Current launch-build reports point players toward wreck routes after unlocking the Repair Tool, including a large wreck northeast of the Lifepod where blocked doors can lead to Rebreather equipment.'
      },
      {
        heading: 'How to unlock it',
        body:
          'Treat the Rebreather as a follow-up to the Repair Tool path. Scan Rebreather equipment when you find it, then craft it once the recipe appears.',
        bullets: [
          'Craft the Scanner before chasing equipment fragments.',
          'Unlock the Repair Tool if a wreck door blocks access.',
          'Check large wreck routes northeast of the Lifepod after repair access.',
          'Do not push deeper only because you found the blueprint; oxygen and route safety still matter.'
        ]
      },
      {
        heading: 'Repair Tool path',
        body:
          'If a wreck door blocks the route, solve the Repair Tool first. The sulphur route and fully functioning Fabricator path are usually the practical blockers before the Rebreather.',
        bullets: [
          'Collect sulphur from the southeast pillar route if the Repair Tool recipe needs it.',
          'Use the base Fabricator if advanced tool recipes do not appear in the Lifepod.',
          'Open blocked wreck doors only when oxygen and return direction are under control.',
          'Scan Rebreather equipment before leaving the wreck route.'
        ]
      },
      {
        heading: 'When the Rebreather matters',
        body:
          'The Rebreather does not replace oxygen planning. It makes deeper routes less punishing, but you still need enough total air and a return path.',
        bullets: [
          'Use it before exploring deeper wreck, crater, or vehicle routes.',
          'Pair it with a better tank or Tadpole route when distance becomes the problem.',
          'Do not treat it as a reason to skip beacons, storage, or base outposts.',
          'If you are only doing shallow resource loops, finish immediate crafting needs first.'
        ]
      },
      {
        heading: 'Depth planning',
        body:
          'Treat the Rebreather as part of a route plan. Better depth safety is useful only if you also have enough inventory, health, and a clear return path.'
      }
    ],
    faqs: [
      {
        question: 'Is the Rebreather required for every deep trip?',
        answer:
          'Not every trip needs the same equipment. Treat the Rebreather as a depth-safety upgrade when a route starts to push oxygen limits.'
      }
    ],
    related: ['subnautica-2-tools', 'subnautica-2-walkthrough', 'subnautica-2-tadpole'],
    sources: [currentGuideSources.pcGamerRepairTool, currentGuideSources.gameSpotRebreather]
  },
  {
    slug: 'subnautica-2-fabricator',
    title: 'How to Get a Fully Functioning Fabricator in Subnautica 2',
    shortTitle: 'Fabricator',
    description:
      'Fabricator progression guide for Subnautica 2, including unlock dependencies, crafting access, and base setup notes.',
    category: 'Tools',
    intent: 'Help players resolve crafting-station progression blockers.',
    priority: 16,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Quick fix', value: 'Build a base, then place your own Fabricator inside it' },
      { label: 'Why blocked', value: 'The Lifepod Fabricator is basic and can hide advanced recipes' },
      { label: 'Required first', value: 'Habitat Builder, powered sealed base, wall space' },
      { label: 'Unlocks', value: 'Sonic Resonator, Repair Tool, air tank, Wakemaker paths' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'If a recipe says it requires a fully functioning Fabricator, build a small powered base and place a Fabricator from the interior facilities menu. The Lifepod Fabricator looks similar, but launch-build guides report that it does not expose the same advanced recipe access.'
      },
      {
        heading: 'How to build it',
        body:
          'Unlock the Habitat Builder, seal and power a small base, then place the Fabricator on an interior wall. Keep storage close to the station so repeated crafting does not turn into inventory shuffling.',
        bullets: [
          'Unlock and craft the Habitat Builder first.',
          'Build a small room or compartment with power and oxygen.',
          'Open interior facilities and place the Fabricator on a wall.',
          'Move key materials into nearby storage before crafting advanced tools.'
        ]
      },
      {
        heading: 'Why recipes are missing',
        body:
          'If a tool recipe exists but does not appear at the Lifepod, the blocker is often the station, not the blueprint. A proper base Fabricator is the fix for several early progression crafts.',
        bullets: [
          'Build a powered base first, even if it is only a small utility room.',
          'Place the Fabricator from the Habitat Builder interior facilities menu.',
          'Check the base Fabricator again after scanning new tool or vehicle fragments.',
          'If a recipe still does not appear, verify the scan count and related station requirement before farming more materials.'
        ]
      },
      {
        heading: 'Minimum crafting corner',
        body:
          'A small, organized crafting corner is enough for the first base.',
        bullets: [
          'Fabricator on an interior wall.',
          'Storage beside the entrance for silver, lead, salt, titanium, copper, and quartz.',
          'Power source that stays positive while you craft.',
          'Clear expansion space for Moonpool, Tadpole Dock, or Vehicle Fabricator later.'
        ]
      },
      {
        heading: 'Base setup',
        body:
          'Place crafting stations where storage and power are already solved. A crafting station far from materials creates more friction than it removes.'
      }
    ],
    faqs: [
      {
        question: 'What if advanced recipes still do not appear?',
        answer:
          'Check that the item is scanned, the base has power, and you are using the Fabricator placed inside the base instead of only the Lifepod station.'
      }
    ],
    related: ['subnautica-2-tools', 'subnautica-2-base-building', 'subnautica-2-gold']
    ,
    sources: [currentGuideSources.pcGamerFabricator, currentGuideSources.pcGamerHabitatBuilder]
  },
  {
    slug: 'subnautica-2-tools',
    title: 'Subnautica 2 Tools Guide',
    shortTitle: 'Tools',
    description:
      'A Subnautica 2 tools hub covering essential equipment, unlock order, recipe tracking, and related resource pages.',
    category: 'Tools',
    intent: 'Make equipment progression scannable from one page.',
    priority: 17,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'First tool', value: 'Scanner' },
      { label: 'Key builder path', value: 'Habitat Builder, base Fabricator, Sonic Resonator' },
      { label: 'Best use', value: 'Choose the next tool and missing material route' },
      { label: 'Update risk', value: 'Medium to high during Early Access' }
    ],
    sections: [
      {
        heading: 'Recommended tool order',
        body:
          'Prioritize tools by survival impact and progression gates: Scanner first, Habitat Builder next, fully functioning Fabricator after that, then Sonic Resonator, Repair Tool, depth gear, and mobility upgrades.',
        bullets: [
          'Scanner: turns ruins, fragments, and wrecks into progression instead of scenery.',
          'Habitat Builder: solves storage, power, oxygen reset, and full Fabricator access.',
          'Sonic Resonator: opens large ore deposits and blocked biofilm routes.',
          'Repair Tool: opens damaged doors and leads into depth gear routes.',
          'Rebreather and vehicle path: make deeper and longer routes repeatable.'
        ]
      },
      {
        heading: 'How to avoid tool bottlenecks',
        body:
          'Pin the recipe, check missing materials, and avoid long trips until you know whether the missing dependency is a scan, station, or raw resource.',
        bullets: [
          'If the recipe is hidden, build a base Fabricator instead of using only the Lifepod station.',
          'If a large ore says unknown tool, unlock the Sonic Resonator.',
          'If a tool needs lead, use the northeast ravine route.',
          'If a vehicle path needs a Power Cell, check salt and Strong Acid requirements.'
        ]
      },
      {
        heading: 'Tool blocker checklist',
        body:
          'When a tool path stalls, identify the exact blocker before swimming away from base.',
        bullets: [
          'Missing scans: go to the fragment route, not the resource route.',
          'Missing material: open the matching resource page and gather only that bottleneck.',
          'Missing station: build the base Fabricator or vehicle infrastructure first.',
          'Missing adaptation: follow the story/adaptation route before entering dangerous terrain.',
          'Missing oxygen: upgrade tank or build an outpost before trying the same route again.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which tool should I unlock first?',
        answer:
          'Unlock the Scanner first because fragments and blueprint scans open most early progression paths.'
      }
    ],
    related: ['subnautica-2-habitat-builder', 'subnautica-2-sonic-resonator', 'subnautica-2-rebreather']
  },
  {
    slug: 'subnautica-2-tadpole',
    title: 'How to Get the Tadpole in Subnautica 2',
    shortTitle: 'Tadpole',
    description:
      'Tadpole vehicle guide for Subnautica 2, covering unlock planning, ingredient checklist, and route-safety notes.',
    category: 'Vehicles',
    intent: 'Players trying to unlock the Tadpole and extend safe travel range.',
    priority: 18,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Scans needed', value: '3 Tadpole scans' },
      { label: 'Efficient scans', value: 'Old Habitat, northeast ravine, abyssal crater edge' },
      { label: 'Build setup', value: 'Moonpool, Tadpole Dock, Vehicle Fabricator' },
      { label: 'Crafting', value: '2 titanium ingots, 1 glass, 1 system chip, 1 power cell' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'To get the Tadpole, scan three Tadpole fragments, then build the Moonpool and vehicle setup in a base. Current launch-build route notes list efficient fragments near Old Habitat, in the northeast ravine, and on the edge of the abyssal crater.'
      },
      {
        heading: 'Best scan route',
        body:
          'Use the Tadpole hunt as a planned loop, not a random deep swim. Scan tools and nearby base tech while you are already at the ruins.',
        bullets: [
          'Old Habitat: north of the Old Habitat colony ruins, around 370 meters due north of the Lifepod.',
          'Northeast ravine: around 280 meters northeast, near the same route used for early lead.',
          'Abyssal crater edge: northeast over the drop-off, better attempted with stronger oxygen and mobility.',
          'Optional scans: current guides report more than three fragments, so do not panic if you miss one route.'
        ]
      },
      {
        heading: 'Pre-build checklist',
        body:
          'The Tadpole is not just a recipe. You need the blueprint, the base space, and the vehicle crafting setup ready at the same time.',
        bullets: [
          'Three Tadpole scans completed.',
          'Powered base with enough room for Moonpool expansion.',
          'Moonpool, Tadpole Dock, and Vehicle Fabricator unlocked and placed.',
          'Processor and Fabricator access for ingots, glass, system chip, and Power Cell parts.',
          'Salt and acid-chain materials checked before spending supplies elsewhere.'
        ]
      },
      {
        heading: 'Build requirements',
        body:
          'After scanning enough fragments, set up the vehicle infrastructure under your base. Leave enough clearance below the room because the dock extends downward.',
        bullets: [
          'Moonpool and Tadpole Dock setup.',
          'Vehicle Fabricator attached to the pool.',
          'Tadpole craft: 2 titanium ingots, 1 glass, 1 system chip, 1 power cell.',
          'Power Cell bottleneck: salt and Strong Acid paths can block the build.'
        ]
      },
      {
        heading: 'Ingredient route plan',
        body:
          'Gather Tadpole materials in short, separate runs instead of trying to finish the vehicle in one overfilled trip.',
        bullets: [
          'Titanium ingots: use common titanium runs before spending time in dangerous routes.',
          'Glass: gather quartz during starter loops or silver-route trips.',
          'System chip: check silver and gold chains before blaming the vehicle station.',
          'Power Cell: reserve salt and related materials before using them on survival supplies.',
          'Lead route overlap: use the northeast ravine for both lead and one Tadpole scan when oxygen allows.'
        ]
      },
      {
        heading: 'Common mistakes',
        body:
          'Do not start the Tadpole build without a powered base and enough underside clearance. Also avoid the crater-edge fragment until oxygen and route confidence are strong enough.',
        bullets: [
          'Do not assume the vehicle setup is available just because the Moonpool is built.',
          'Do not place the Moonpool where the dock or vehicle has no room below it.',
          'Do not spend salt before checking the Power Cell requirement.',
          'Do not chase the abyssal-edge fragment before easier Old Habitat and ravine scans.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How many Tadpole fragments do I need?',
        answer:
          'You need three Tadpole scans to unlock the craftable blueprint.'
      },
      {
        question: 'What usually blocks Tadpole crafting?',
        answer:
          'The Power Cell and vehicle infrastructure are common blockers. Check salt, Strong Acid, system chip, Moonpool, Tadpole Dock, and Vehicle Fabricator requirements.'
      }
    ],
    related: ['subnautica-2-lead', 'subnautica-2-fabricator', 'subnautica-2-salt'],
    sources: [currentGuideSources.pcGamerTadpole]
  },
  {
    slug: 'subnautica-2-base-building',
    title: 'Subnautica 2 Base Building Guide',
    shortTitle: 'Base Building',
    description:
      'A practical Subnautica 2 base building guide focused on first bases, storage, power, expansion, and co-op layout.',
    category: 'Base Building',
    intent: 'Help players build a useful first base without wasting materials.',
    priority: 19,
    status: 'Early Access summary',
    quickFacts: [
      earlyAccessFact,
      { label: 'First goal', value: 'Power, oxygen, storage, full Fabricator' },
      { label: 'First location', value: 'Close to the Lifepod unless a route forces an outpost' },
      { label: 'Avoid', value: 'Oversized decorative builds before stable supply routes' },
      { label: 'Co-op note', value: 'Shared storage rules prevent wasted trips' }
    ],
    sections: [
      {
        heading: 'First base priorities',
        body:
          'A strong first base shortens resource loops. Build close enough to safe starter routes that oxygen, storage, and crafting become easier instead of more expensive.',
        bullets: [
          'Keep the first footprint small.',
          'Build close to the Lifepod or another safe early landmark.',
          'Leave room for power and crafting expansion.',
          'Place a full Fabricator inside the base as soon as possible.',
          'Label or visually separate co-op storage areas.'
        ]
      },
      {
        heading: 'Minimum useful base',
        body:
          'The first useful base is simple: a powered sealed space, a Fabricator, storage, and a route back to the Lifepod or a beaconed landmark. Expand after the Tadpole path makes longer routes repeatable.',
        bullets: [
          'One compact room or compartment.',
          'Reliable early power before extra modules.',
          'Fabricator and storage near the entrance.',
          'A clear outside approach so oxygen emergencies do not become navigation problems.',
          'Enough nearby open space for later vehicle infrastructure.'
        ]
      },
      {
        heading: 'When to expand',
        body:
          'Expand only when a new route, vehicle, or resource zone makes the current base inconvenient. Outposts should solve a specific route problem.',
        bullets: [
          'Build an Old Habitat outpost if silver, caves, and current power routes become routine.',
          'Build a northeast outpost if lead, Tadpole scans, and story travel pull you that direction repeatedly.',
          'Do not move the whole main base because of one material trip.',
          'In co-op, add labeled shared storage before adding decorative space.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Where should the first base go?',
        answer:
          'Choose a safe area near early resources and future routes. Base-location advice is presented as criteria and route-risk notes rather than exact coordinates.'
      }
    ],
    related: ['subnautica-2-habitat-builder', 'subnautica-2-best-base-locations', 'subnautica-2-multiplayer']
  },
  {
    slug: 'subnautica-2-best-base-locations',
    title: 'Best Base Locations in Subnautica 2',
    shortTitle: 'Best Base Locations',
    description:
      'How to choose the best Subnautica 2 base locations by safety, resource access, depth, expansion room, and route value.',
    category: 'Base Building',
    intent: 'Players comparing base locations by safety, resources, power, and route value.',
    priority: 20,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'First base', value: 'Under or next to the Lifepod' },
      { label: 'Second candidate', value: 'Old Habitat route for resources and current power later' },
      { label: 'Third candidate', value: 'Cicada Wreck route for lead and northeast progression' },
      { label: 'Image policy', value: 'Original explanatory visuals only' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'For the first base, build under or next to the Lifepod. It gives you nearby oxygen, the basic Fabricator, storage support, a respawn point, and safe access while you are still short on power. After that, compare Old Habitat and Cicada Wreck routes as practical outpost or second-base candidates.',
      },
      {
        heading: 'Best starter locations',
        body:
          'Pick a base spot because it solves a repeat route, not because it looks scenic. These launch-build options are practical before a full map page is ready.',
        bullets: [
          'Lifepod base: safest first build, good oxygen fallback, and low material waste.',
          'Old Habitat area: north route with copper, silver, titanium, caves, and a useful current after power tech improves.',
          'Cicada Wreck route: northeast route with strong lead access and later progression value.',
          'Heat cave routes: tempting for power later, but wait until heat and story pressure justify it.'
        ]
      },
      {
        heading: 'Location comparison',
        body:
          'Use this comparison when choosing between convenience and progression value.',
        bullets: [
          'Lifepod base: best first choice, safest return, lowest material risk, weakest long-term route value.',
          'Old Habitat outpost: stronger for silver, copper, caves, and current-power experiments once base basics are solved.',
          'Cicada Wreck route: stronger for lead and northeast progression, but less comfortable as a first build.',
          'Volcanic or heat-adjacent base: wait until Heat Tolerance and thermal power needs make the risk worthwhile.'
        ]
      },
      {
        heading: 'How to compare locations',
        body:
          'Score each location by safety, oxygen return, nearby materials, power options, visibility, room for Tadpole infrastructure, and how often you will revisit the route.',
        bullets: [
          'Safety: hostile patrols, heat damage, and visibility.',
          'Resources: titanium, quartz, copper, silver, lead, salt, and nearby cave routes.',
          'Power: solar first, current or thermal options later.',
          'Expansion: clear space below for Tadpole Dock and around the base for modules.'
        ]
      },
      {
        heading: 'First base decision',
        body:
          'If you are unsure, build near the Lifepod and treat every other location as an outpost candidate. The cost of a small starter base is lower than the time lost carrying materials through unsafe routes.',
        bullets: [
          'Build first where you already survive comfortably.',
          'Add outposts when a route becomes repeatable.',
          'Move only when the old base forces long trips for most recipes.',
          'Keep vehicle clearance in mind before committing to a crowded site.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Should I move my main base later?',
        answer:
          'Often no. Add outposts when routes get longer, and move the main base only if the old location blocks progression or wastes time.'
      }
    ],
    related: ['subnautica-2-base-building', 'subnautica-2-habitat-builder', 'subnautica-2-tadpole'],
    sources: [currentGuideSources.pcGamerBaseLocations]
  },
  {
    slug: 'subnautica-2-performance-settings',
    title: 'Best Settings for Subnautica 2',
    shortTitle: 'Best Settings',
    description:
      'A PC settings guide for Subnautica 2 Early Access, focused on performance, visual clarity, and patch-dependent troubleshooting.',
    category: 'Troubleshooting',
    intent: 'Players looking for safer display and performance checks before changing config files.',
    priority: 21,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Focus', value: 'Performance, stability, readability' },
      { label: 'Performance', value: 'Hardware-dependent' },
      { label: 'Update risk', value: 'High after hotfixes and optimization patches' }
    ],
    sections: [
      {
        heading: 'Settings method',
        body:
          'Start with the game preset closest to your hardware, then lower the heaviest visual options first. Avoid chasing one universal setting mix for every machine.'
      },
      {
        heading: 'Recommended starting point',
        body:
          'If performance feels uneven, reduce shadows, effects, view distance, or upscaling quality before lowering resolution. Restart the game after major display changes.'
      }
    ],
    faqs: [
      {
        question: 'Why do settings vary by PC?',
        answer:
          'Early Access hotfixes and hardware differences can change performance quickly. Use the page as a starting point, then tune for your system.'
      }
    ],
    related: ['subnautica-2-4k-resolution-fix', 'subnautica-2-early-access', 'subnautica-2-faq'],
    noindex: true
  },
  {
    slug: 'subnautica-2-4k-resolution-fix',
    title: 'Subnautica 2 4K Resolution Fix',
    shortTitle: '4K Resolution Fix',
    description:
      'A troubleshooting guide for Subnautica 2 4K resolution issues, display mode checks, scaling, and Early Access patch notes.',
    category: 'Troubleshooting',
    intent: 'Players troubleshooting 4K or display issues with low-risk checks first.',
    priority: 22,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Issue type', value: 'Resolution, display mode, UI scaling' },
      { label: 'Fix style', value: 'Low-risk display checks first' },
      { label: 'Risk', value: 'May change with hotfixes' }
    ],
    sections: [
      {
        heading: 'Diagnostic order',
        body:
          'Start with low-risk display checks before editing files or changing driver settings.',
        bullets: [
          'Confirm desktop resolution and refresh rate.',
          'Switch between fullscreen, borderless, and windowed modes if available.',
          'Restart the game after applying resolution changes.',
          'Check current patch notes for known display bugs.'
        ]
      },
      {
        heading: 'What to check next',
        body:
          'If the issue remains, check current patch notes, GPU control panel scaling, and platform-specific display settings before editing configuration files.'
      }
    ],
    faqs: [
      {
        question: 'Should I edit config files first?',
        answer:
          'Risky config-file edits should not be the first step. Start with display mode, resolution, scaling, and restart checks.'
      }
    ],
    related: ['subnautica-2-performance-settings', 'subnautica-2-early-access', 'subnautica-2-faq'],
    noindex: true
  },
  {
    slug: 'subnautica-2-faq',
    title: 'Subnautica 2 FAQ',
    shortTitle: 'FAQ',
    description:
      'Frequently asked questions about Subnautica 2 Early Access, solo play, co-op, roadmap updates, guides, and site coverage.',
    category: 'FAQ',
    intent: 'Players who want quick answers before opening a detailed guide.',
    priority: 23,
    status: 'Evergreen primer',
    quickFacts: [
      { label: 'Early Access date', value: 'May 14, 2026' },
      { label: 'Official developer', value: 'Unknown Worlds Entertainment' },
      { label: 'Site status', value: 'Unofficial fan-made guide' },
      { label: 'Best use', value: 'Quick answers and links to detailed guides' }
    ],
    sections: [
      {
        heading: 'What this FAQ covers',
        body:
          'Use this page for quick answers, then follow the internal links to deeper pages for resources, tools, walkthroughs, multiplayer, and updates.'
      }
    ],
    faqs: [
      {
        question: 'Is Subnautica 2 in Early Access?',
        answer:
          'Yes. Steam lists the Early Access release date as May 14, 2026.'
      },
      {
        question: 'Is this an official Subnautica 2 site?',
        answer:
          'No. This is an unofficial fan-made guide site and is not affiliated with or endorsed by Unknown Worlds Entertainment.'
      },
      {
        question: 'What does Early Access guide mean?',
        answer:
          'Early Access guide means the page is useful now but patch-sensitive. Route notes, recipes, and unlocks may change as the game updates.'
      }
    ],
    related: ['subnautica-2-beginners-guide', 'subnautica-2-roadmap', 'subnautica-2-multiplayer'],
    sources: [officialSources.steam]
  },
  {
    slug: 'subnautica-2-early-access',
    title: 'Subnautica 2 Early Access Explained',
    shortTitle: 'Early Access',
    description:
      'What Subnautica 2 Early Access means for players, updates, roadmap changes, guide freshness, and whether to start now.',
    category: 'Updates',
    intent: 'Players deciding whether Early Access routes, saves, and guide details are stable enough for them.',
    priority: 24,
    status: 'Early Access summary',
    quickFacts: [
      { label: 'Release status', value: 'Early Access' },
      { label: 'Release date', value: 'May 14, 2026' },
      { label: 'Update model', value: 'Hotfixes, improvements, and larger expansions' },
      { label: 'Guide impact', value: 'Locations, recipes, and story may change' }
    ],
    sections: [
      {
        heading: 'What Early Access changes',
        body:
          'Early Access means the game is playable but still evolving. Update dates and version notes are important because routes, recipes, and story beats can change.'
      },
      {
        heading: 'Should you start now?',
        body:
          'Start now if you enjoy discovering systems as they change. Wait if you want the most stable story and route experience.'
      }
    ],
    faqs: [
      {
        question: 'Will saves or routes change?',
        answer:
          'They can. Unknown Worlds describes ongoing updates and larger content expansions, so route and recipe details may change after major updates.'
      }
    ],
    related: ['subnautica-2-roadmap', 'subnautica-2-walkthrough', 'subnautica-2-faq'],
    sources: [officialSources.steam, officialSources.roadmap]
  }
];

export const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));

export function getRelatedGuides(guide: Guide) {
  return guide.related
    .map((slug) => guideBySlug.get(slug))
    .filter((item): item is Guide => Boolean(item));
}

export function getGuidesByCategory(category: GuideCategory) {
  return guides
    .filter((guide) => guide.category === category)
    .sort((a, b) => a.priority - b.priority);
}

export const categories: GuideCategory[] = [
  'Start Here',
  'Resources',
  'Tools',
  'Commands',
  'Vehicles',
  'Base Building',
  'Map',
  'Multiplayer',
  'Updates',
  'Troubleshooting',
  'FAQ'
];
