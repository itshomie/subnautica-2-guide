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
      { label: 'Core loop', value: 'Scan, gather, craft, return, upgrade' }
    ],
    sections: [
      {
        heading: 'What to do first',
        body:
          'Start by treating the opening area as a supply loop instead of a sightseeing trip. Check your pod, gather common materials, craft basic survival tools, and return often before oxygen becomes the real enemy.',
        bullets: [
          'Read every objective or message before swimming away.',
          'Gather titanium-style common materials before chasing rare resources.',
          'Scan fragments as soon as you can; new blueprints are the main progression gate.',
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
        heading: 'When to build a base',
        body:
          'Build the first simple base when storage, crafting trips, or oxygen resets start costing more time than the base parts. The first base should be functional, not beautiful.'
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
    related: ['subnautica-2-walkthrough', 'subnautica-2-resources', 'subnautica-2-map']
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
      { label: 'Route style', value: 'Checkpoint-based' },
      { label: 'Spoiler options', value: 'Spoiler-free and full route sections' },
      { label: 'Use when', value: 'You have no active objective or upgrade target' }
    ],
    sections: [
      {
        heading: 'Spoiler-free progression order',
        body:
          'Use this page as a checklist of systems to unlock rather than a story transcript. Progression usually means finding the next scan, crafting the next tool, or reaching a safer depth range.',
        bullets: [
          'Stabilize food, water, and oxygen.',
          'Craft the first scanner or multitool equivalent as soon as the recipe allows.',
          'Scan base-building and equipment fragments before committing to long trips.',
          'Upgrade mobility before pushing deep or dangerous areas.',
          'Return to black box or NOA-style objectives after each major tool unlock.'
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
    title: 'Subnautica 2 Map Guide',
    shortTitle: 'Map Guide',
    description:
      'A route-planning guide for early directions, depth bands, landmarks, danger checks, and Early Access caveats.',
    category: 'Map',
    intent: 'Players who need safer route planning without relying on unverified exact coordinates.',
    priority: 3,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Map type', value: 'Route planner and checklist' },
      { label: 'Visual status', value: 'Original explanatory illustrations only' },
      { label: 'Best use', value: 'Compare direction, depth, landmarks, and route risk' }
    ],
    sections: [
      {
        heading: 'How to use this map guide',
        body:
          'Use this page as a route planner rather than a fixed world map. During Early Access, the most useful details are direction, depth band, landmark type, required gear, and route risk.',
        bullets: [
          'Check official store or roadmap links for release status and update context.',
          'Treat exact coordinates as patch-sensitive during Early Access.',
          'Avoid decorative map images that players could mistake for real game data.',
          'Use the route checklist to compare preparation needs before leaving base.'
        ]
      },
      {
        heading: 'Route planning checklist',
        body:
          'Route checklists are safest when exact coordinates are not reliable. Compare starter resources, fragment hunts, base candidates, and dangerous routes by preparation needs.',
        bullets: [
          'Route name and player goal.',
          'Starting landmark and compass direction.',
          'Approximate depth band when available.',
          'Required tool, oxygen, or vehicle.',
          'Patch status and update risk.'
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
    sources: [officialSources.steam, officialSources.roadmap]
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
        question: 'Should every patch get a new page?',
        answer:
          'No. Update existing guides when the patch changes existing advice. Create a separate patch page when players search for that update directly.'
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
      'A resource hub for Subnautica 2: silver, gold, lead, sulphur, salt, fibrous pulp, and how to prioritize materials.',
    category: 'Resources',
    intent: 'Players comparing resource uses and opening the right material guide quickly.',
    priority: 6,
    status: 'Early Access guide',
    quickFacts: [
      earlyAccessFact,
      { label: 'Coverage', value: 'Common and progression resources' },
      { label: 'Best use', value: 'Find the specific resource page you need' },
      { label: 'Update risk', value: 'High for exact routes and recipes' }
    ],
    sections: [
      {
        heading: 'How resource pages are organized',
        body:
          'Resource pages are organized around the direct answer: where the material fits, what it is used for, what equipment helps, and which related guide solves the next blocker.',
        bullets: [
          'Start with the direct answer.',
          'Add a quick facts table.',
          'Use route preparation steps when exact locations are patch-sensitive.',
          'Check version notes and related map/checklist links.',
          'Link to recipes and tools that use the resource.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why do resource pages use illustrations?',
        answer:
          'Original illustrations make the page easier to scan without pretending to show a real pickup location. Route notes stay cautious during Early Access.'
      }
    ],
    related: ['subnautica-2-item-codes', 'subnautica-2-silver', 'subnautica-2-gold', 'subnautica-2-lead']
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
      { label: 'Console status', value: 'Unofficial mod-enabled debug console' },
      { label: 'Update risk', value: 'High during Early Access' }
    ],
    sections: [
      {
        heading: 'How item codes work',
        body:
          'In the current Early Access build, item spawning is tied to an unofficial debug-console setup rather than a built-in public option. After opening the console, use the item command with an internal code and an amount.',
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
    sources: [
      {
        label: 'PC Gamer console command testing',
        url: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-console-commands-turn-on-god-mode-unlock-all-blueprints-craft-without-resources-and-change-your-fov/'
      },
      officialSources.steam,
      officialSources.roadmap
    ]
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
      { label: 'Use case', value: 'Wiring-style components and tool progression' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'Danger level', value: 'Varies by route and depth' },
      { label: 'Related unlocks', value: 'Tools, builder, advanced crafting' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Silver matters because it often blocks tool, builder, or advanced crafting progress. Start by checking the recipe that needs silver, then follow the related tool or resource guide for the next blocker.'
      },
      {
        heading: 'Route checklist',
        body:
          'Before searching for silver, prepare for oxygen limits, route risk, and any required scanner or tool dependency.',
        bullets: [
          'Compass direction from the starting pod.',
          'Depth range where silver nodes or containers appear.',
          'Required scanner, cutter, or tool dependencies.',
          'Nearby threats and oxygen refill options.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why is silver a priority page?',
        answer:
          'Players usually search for silver when a key recipe blocks tool or base progression, so it is one of the highest-value resource pages.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-habitat-builder', 'subnautica-2-sonic-resonator']
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
      { label: 'Use case', value: 'Advanced crafting and electronics-style recipes' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'Pair with', value: 'Silver and lead runs when routes overlap' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Gold is usually worth collecting after you know which recipe needs it. Prioritize routes that match your oxygen, mobility, and storage setup.'
      },
      {
        heading: 'Common mistakes',
        body:
          'Players often chase rare resources too early. If a gold route feels unsafe, unlock better oxygen, mobility, or base support first.'
      }
    ],
    faqs: [
      {
        question: 'Should gold be farmed early?',
        answer:
          'Only gather enough for immediate recipes until storage and route safety improve.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-silver', 'subnautica-2-fabricator']
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
      { label: 'Use case', value: 'Vehicle and equipment-style progression' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'Route risk', value: 'Varies by depth and route' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Lead is best handled as a progression resource: explain what it unlocks, what gear may make collection safer, and which adjacent pages help with vehicle or base recipes.'
      },
      {
        heading: 'Before you go',
        body:
          'Check whether the recipe you are chasing has another bottleneck. Lead runs are more efficient when combined with vehicle or base-building prep.'
      }
    ],
    faqs: [
      {
        question: 'What matters most when looking for lead?',
        answer:
          'Focus on what lead unlocks, which recipe needs it, how risky the trip is, and whether the related vehicle or base system has another missing ingredient.'
      }
    ],
    related: ['subnautica-2-tadpole', 'subnautica-2-base-building', 'subnautica-2-resources']
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
      { label: 'Use case', value: 'Advanced resource and tool recipes' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'Safety note', value: 'Watch oxygen and threats' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Sulphur is often associated with riskier Subnautica-style progression routes, so oxygen, threats, and return planning matter before you push deeper.'
      },
      {
        heading: 'Safety checklist',
        body:
          'Keep the checklist focused on preparation: oxygen safety, route risk, likely tool needs, and the recipes sulphur may unlock.'
      }
    ],
    faqs: [
      {
        question: 'Can I collect sulphur without better oxygen?',
        answer:
          'Treat sulphur routes as higher risk during Early Access. Bring better oxygen or mobility before pushing deeper areas.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-tools', 'subnautica-2-walkthrough']
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
      { label: 'Use case', value: 'Survival and crafting support' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'Best page type', value: 'Short, direct, checklist-led' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'Salt is a utility material: check what it supports, when to collect it, and which early survival or crafting loops it affects.'
      },
      {
        heading: 'When to collect salt',
        body:
          'Pick up salt during normal resource loops instead of dedicating an entire trip unless a specific recipe needs several pieces.'
      }
    ],
    faqs: [
      {
        question: 'Is salt worth storing?',
        answer:
          'Store a small stack if it feeds survival or crafting recipes, but keep early storage focused on immediate progression items.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-beginners-guide', 'subnautica-2-base-building']
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
        question: 'Why does this page use an illustration?',
        answer:
          'The illustration helps explain the crafting chain without using copied or unlicensed game media.'
      }
    ],
    related: ['subnautica-2-resources', 'subnautica-2-tools', 'subnautica-2-beginners-guide']
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
      { label: 'Unlock type', value: 'Fragment or blueprint progression' },
      { label: 'Route note', value: 'May change by patch' },
      { label: 'After unlock', value: 'Build utility rooms, storage, and power first' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'This guide focuses on the unlock path, likely prerequisites, and the first base-building choices to make after the Habitat Builder is available.'
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
      }
    ],
    faqs: [
      {
        question: 'Why is the Habitat Builder a core SEO page?',
        answer:
          'Base building is a major survival-game milestone, so players search for it as soon as storage and crafting become painful.'
      }
    ],
    related: ['subnautica-2-base-building', 'subnautica-2-best-base-locations', 'subnautica-2-silver']
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
      { label: 'Unlock type', value: 'Blueprint route notes' },
      { label: 'Recipe status', value: 'May change by patch' },
      { label: 'Related resources', value: 'Silver, gold, advanced crafting materials' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'The Sonic Resonator matters when a route or objective requires a new interaction tool. Check the unlock path, recipe ingredients, and related resource pages before making a long trip.'
      },
      {
        heading: 'Before crafting',
        body:
          'Check every ingredient route first. If one rare material is missing, link directly to that material page rather than repeating a full resource guide here.'
      }
    ],
    faqs: [
      {
        question: 'Should this page use HowTo schema?',
        answer:
          'Use HowTo schema only for steps that are stable, concrete, and not speculative during Early Access.'
      }
    ],
    related: ['subnautica-2-tools', 'subnautica-2-silver', 'subnautica-2-fabricator']
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
      { label: 'Unlock path', value: 'May change by patch' },
      { label: 'Pairs with', value: 'Map, base outposts, vehicle progression' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'The Rebreather becomes valuable when a route starts pushing oxygen limits. Check its unlock path, ingredients, and the depth band you are trying to reach.'
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
    related: ['subnautica-2-tools', 'subnautica-2-map', 'subnautica-2-walkthrough']
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
      { label: 'Use case', value: 'Core crafting station progression' },
      { label: 'Unlock path', value: 'May change by patch' },
      { label: 'Best linked pages', value: 'Resources, base building, tools' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'A fully functioning Fabricator setup depends on station access, required parts, storage flow, and any power or base dependencies in the current Early Access build.'
      },
      {
        heading: 'Base setup',
        body:
          'Place crafting stations where storage and power are already solved. A crafting station far from materials creates more friction than it removes.'
      }
    ],
    faqs: [
      {
        question: 'Why use a base-layout illustration?',
        answer:
          'A base-layout illustration helps readers understand placement and workflow without implying that the image is an exact build layout.'
      }
    ],
    related: ['subnautica-2-tools', 'subnautica-2-base-building', 'subnautica-2-gold']
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
      { label: 'Coverage', value: 'Scanner, builder, resonator, rebreather, fabricator paths' },
      { label: 'Best use', value: 'Choose the next tool to pursue' },
      { label: 'Update risk', value: 'Medium to high during Early Access' }
    ],
    sections: [
      {
        heading: 'Recommended tool order',
        body:
          'Prioritize tools by survival impact and progression gates: scanning first, base utility next, then depth and mobility upgrades.'
      },
      {
        heading: 'How to avoid tool bottlenecks',
        body:
          'Pin the recipe, check missing materials, and avoid long trips until you know whether the missing dependency is a scan, station, or raw resource.'
      }
    ],
    faqs: [
      {
        question: 'Should tools and resources be separate pages?',
        answer:
          'Yes. Tool pages answer “how to unlock or craft this,” while resource pages answer “where do I find the missing ingredient.”'
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
      { label: 'Use case', value: 'Mobility and route extension' },
      { label: 'Unlock path', value: 'May change by patch' },
      { label: 'Related pages', value: 'Lead, fabricator, map, base locations' }
    ],
    sections: [
      {
        heading: 'Quick answer',
        body:
          'The Tadpole is useful once a route is too long or risky for basic swimming. Check the unlock source, crafting station, ingredient list, and the first routes it makes safer.'
      },
      {
        heading: 'Before building the Tadpole',
        body:
          'Gather vehicle materials in planned runs. If the recipe needs lead or advanced components, link to those pages and keep this guide focused on the vehicle path.'
      }
    ],
    faqs: [
      {
        question: 'Why is Tadpole a priority page?',
        answer:
          'Vehicle unlocks are high-intent searches because they change what areas players can reach safely.'
      }
    ],
    related: ['subnautica-2-lead', 'subnautica-2-fabricator', 'subnautica-2-map']
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
      { label: 'First goal', value: 'Storage, oxygen, crafting, power' },
      { label: 'Avoid', value: 'Oversized decorative builds before stable supply routes' },
      { label: 'Co-op note', value: 'Shared storage rules prevent wasted trips' }
    ],
    sections: [
      {
        heading: 'First base priorities',
        body:
          'A strong first base shortens resource loops. Build for utility first: storage, power, crafting access, and a clear entrance near safe routes.',
        bullets: [
          'Keep the first footprint small.',
          'Build close to early resource routes.',
          'Leave room for power and crafting expansion.',
          'Label or visually separate co-op storage areas.'
        ]
      },
      {
        heading: 'When to expand',
        body:
          'Expand only when a new route, vehicle, or resource zone makes the current base inconvenient. Outposts should solve a specific route problem.'
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
      { label: 'Best criteria', value: 'Safety, resources, power, route access' },
      { label: 'Location style', value: 'Criteria-based' },
      { label: 'Image policy', value: 'Original explanatory visuals only' }
    ],
    sections: [
      {
        heading: 'How to judge a base location',
        body:
          'The best base is not always the prettiest spot. It should reduce travel time and keep you alive during repeated crafting and exploration loops.',
        bullets: [
          'Safe approach path.',
          'Nearby resource variety.',
          'Good visibility and landmarks.',
          'Room for vehicles and power.',
          'Useful position between early and mid-game routes.'
        ]
      },
      {
        heading: 'How to compare locations',
        body:
          'Compare locations by what they solve: safer returns, better resource access, easier power, and room for vehicle or storage expansion.'
      }
    ],
    faqs: [
      {
        question: 'Should I move my main base later?',
        answer:
          'Often no. Add outposts when routes get longer, and move the main base only if the old location blocks progression or wastes time.'
      }
    ],
    related: ['subnautica-2-base-building', 'subnautica-2-map', 'subnautica-2-tadpole']
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
    related: ['subnautica-2-4k-resolution-fix', 'subnautica-2-early-access', 'subnautica-2-faq']
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
        question: 'Should this page include config-file edits?',
        answer:
          'Risky config-file edits should not be the first step. Start with display mode, resolution, scaling, and restart checks.'
      }
    ],
    related: ['subnautica-2-performance-settings', 'subnautica-2-early-access', 'subnautica-2-faq']
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
        question: 'Why do some pages say Early Access guide?',
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
