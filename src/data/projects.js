export const totals = {
  interactions: 8060610,
  countries: 66,
  projects: 4,
}

export const tiles = [
  { value: '7,512,159', label: 'Slap Pelayo', note: '57 countries · three languages' },
  { value: '513,546', label: 'Clown Cloe', note: 'two languages' },
  { value: '34,905', label: 'Whack A Bianca', note: '2,516 games won · two languages' },
  { value: '66', label: 'Countries reached', note: 'zero paid promotion' },
]

export const topCountries = [
  { code: 'MX', value: 1613795 },
  { code: 'ES', value: 1536967 },
  { code: 'BR', value: 1061542 },
  { code: 'IT', value: 760236 },
  { code: 'HN', value: 511507 },
  { code: 'AR', value: 426304 },
  { code: 'GT', value: 317520 },
  { code: 'US', value: 266051 },
]

export const projects = [
  {
    slug: 'slap-pelayo',
    name: 'Slap Pelayo',
    metric: '7,512,159',
    metricLabel: 'hits',
    note: 'A one-button fan page for a Spanish daily drama. Every click is counted, matched to a country, and added to a live leaderboard.',
    tagline:
      'A fan page for the Sueños de Libertad fandom with a single button on it. Behind that button are atomic counters, a four-API country lookup, bot filtering and three languages, because 7.5 million hits arrived from 57 countries with nothing spent on promotion.',
    facts: [
      { key: 'Role', val: 'Sole developer and designer' },
      { key: 'Stack', val: 'Vanilla JavaScript, Firebase Realtime Database, App Check with reCAPTCHA Enterprise, Netlify' },
      { key: 'Recorded', val: '7,512,159 hits from 57 countries' },
      { key: 'Languages', val: 'Spanish, English, Portuguese' },
    ],
    steps: [
      {
        title: 'Transactions, not writes',
        body:
          'Every click fires an atomic Firebase transaction on both the global counter and the visitor’s country counter, v => (v || 0) + 1, instead of a set(). With thousands of fans clicking at the same second, set() silently loses writes; transactions retry against the latest server value until they land. That is why the 7.5 million figure can be trusted.',
      },
      {
        title: 'A geolocation chain that cannot strand a click',
        body:
          'Country detection runs through four independent APIs in sequence (Cloudflare trace, ipapi.co, country.is, freeipapi.com), stopping at the first valid two-letter code. Clicks that arrive before detection finishes are buffered in a pendingSlaps queue and flushed as a single transaction the moment the country resolves, so a slow connection never loses a click. The result is cached in localStorage, so return visits skip the chain entirely.',
      },
      {
        title: 'Counting people, not bots',
        body:
          'Clicks are rate-limited to 100ms, e.isTrusted is verified so synthetic events are discarded, and App Check with reCAPTCHA Enterprise guards every database write. The database rules themselves are default-deny and only permit bounded increments on the two counter paths, so the public key in the browser cannot be used to write anything else.',
      },
      {
        title: 'A leaderboard nobody has to translate',
        body:
          'The board shows 57 country names and flags without a flag library and without a 57-row translation table. Each flag is built from the country code itself, by shifting its two letters into the Unicode regional indicator range, which the browser draws as a flag. Each name comes from Intl.DisplayNames in the language the visitor picked, so switching to Spanish or Portuguese renames every row at once. Nothing is hard-coded, so a country that shows up for the first time is displayed correctly without a code change.',
      },
    ],
    live: 'https://mafinslappelayo.netlify.app/',
    repo: 'https://github.com/altindaselif/mafin-slap-pelayo',
  },
  {
    slug: 'clown-cloe',
    name: 'Clown Cloe',
    metric: '513,546',
    metricLabel: 'hits',
    note: 'A click-to-throw fan page for the same daily drama. After fifty tomatoes they stop landing at random and start spelling words.',
    tagline:
      'A fan page for the Sueños de Libertad fandom where every click throws a tomato at the villain. Cloe is dressed as a clown piece by piece as the count rises, and past fifty hits every tomato is drawn on a canvas and placed to spell a word. The counter is shared by everyone on the page, and it reached 513,546 with nothing spent on promotion.',
    facts: [
      { key: 'Role', val: 'Sole developer and designer' },
      { key: 'Stack', val: 'Vanilla JavaScript, Canvas 2D, Firebase Realtime Database, Netlify' },
      { key: 'Recorded', val: '513,546 global hits' },
      { key: 'Languages', val: 'Spanish, English' },
    ],
    steps: [
      {
        title: 'Splats drawn in code, not loaded as images',
        body:
          'Each splat is drawn with the Canvas 2D API: an ellipse at a random size and angle, three small droplets around it, two pale seeds on top. There are no image files, so every splat is different and the page stays the same size whether you throw one tomato or four hundred.',
      },
      {
        title: 'Coordinates that spell words',
        body:
          'Each pattern (FINA, MARTA, MAFIN, a heart) is a list of {x, y} coordinates stored as percentages and turned into pixels against the canvas size on every call. Because they are percentages, the letters stay correct at any size, and switching patterns only resets an index instead of recalculating the layout.',
      },
      {
        title: 'Sound and costume as feedback',
        body:
          'The clown music speeds up slightly with every hit, so the page feels faster as the count climbs, then cuts out just before the tomatoes start. The costume arrives in steps: makeup at ten, wig at twenty, bowtie at thirty, nose at forty. It gives people a reason to watch the counter instead of just reading it.',
      },
    ],
    live: 'https://mafinclowncloe.netlify.app/',
    repo: 'https://github.com/altindaselif/mafin-clown-cloe',
  },
  {
    slug: 'whack-a-bianca',
    name: 'Whack A Bianca',
    metric: '34,905',
    metricLabel: 'hits',
    note: 'A whack-a-mole game for the same daily drama. The whole cast, its sprites, its spawn odds and its effects, lives in one config file.',
    tagline:
      'A whack-a-mole for the Sueños de Libertad fandom: hit Bianca twelve times to reunite the two characters she keeps apart, unless the peacock, the sick cow or a wrong hit ruins it first. Behind the joke is a real game engine, with difficulty that rises as you play, a spawner that stays fair, and a live country leaderboard.',
    facts: [
      { key: 'Role', val: 'Sole developer and designer' },
      { key: 'Stack', val: 'React 19, custom hooks, Firebase Realtime Database, App Check, Netlify' },
      { key: 'Recorded', val: '34,905 hits from 52 countries · 2,516 games won' },
      { key: 'Languages', val: 'Spanish, English' },
    ],
    steps: [
      {
        title: 'Data-driven characters, React-free',
        body:
          'Every character is one entry in a single config object: its sprites, spawn weight, hit sound and an onHit function. A hit calls CHARACTERS[type].onHit(actions, windowId), where actions is a small set of functions (scorePoint, loseLife, stealTime, flashbang) defined inside the hook. The config file imports nothing from React, so it stays simple, and adding an enemy means adding an object instead of another branch in the game loop.',
      },
      {
        title: 'The game loop split into three hooks',
        body:
          'useCountdown owns the clock, including the peacock’s time penalty and the elapsed time that drives difficulty. useSpawner owns the barn windows, the spawn schedule and hit resolution. useGameLogic connects the two and decides what a hit means. Each part can be read on its own, which is what kept the difficulty system easy to debug.',
      },
      {
        title: 'Randomness that feels fair',
        body:
          'Pure random spawning bunches up, and bunching looks like a bug. Characters are picked from a Fisher-Yates shuffle bag instead, so the mix stays even over time. A limit on how many can appear at once keeps the board readable, and occasional 750ms fake-outs stop the rhythm from becoming automatic.',
      },
      {
        title: 'One write per finished game',
        body:
          'Instead of writing on every hit, a finished game is saved once: one transaction adds the run’s hits to the global counter while another adds them to the country counter. Far fewer writes, nothing lost when two players finish at the same moment, and a leaderboard built from finished games rather than noise.',
      },
    ],
    live: 'https://mafinesabianca.netlify.app/',
    repo: 'https://github.com/altindaselif/mafin-whack-a-bianca',
  },
  {
    slug: 'mafin-archive',
    name: 'Mafin Archive',
    metric: 'In progress',
    metricLabel: '',
    note: 'A detailed archive of the same daily drama, so fans can look up episode summaries, quotes, milestone scenes, outfits, photos and the cast.',
    tagline:
      'An archive of Sueños de Libertad, broadcast every weekday since 2024, which is a lot of story to keep track of. It runs on Cloudflare Workers with its media on R2, a CMS the fans maintain themselves, and submissions that are reviewed before they appear. The site is live; the content is still being filled in.',
    facts: [
      { key: 'Role', val: 'Sole developer and designer' },
      { key: 'Stack', val: 'React 18, Vite, Cloudflare Workers, R2, Sveltia CMS, Turnstile, GitHub Actions' },
      { key: 'Status', val: 'In progress · deployed, domain not yet connected' },
      { key: 'Languages', val: 'Spanish and English, down to the data' },
    ],
    steps: [
      {
        title: 'One JSON file per record',
        body:
          'Every record is its own file, collected with import.meta.glob and given an id derived from its filename. That is what makes the CMS safe for editors who are not developers: adding a quote creates a new file instead of editing a shared list, so two fans editing at the same time cannot clash, and one broken record cannot break a whole section.',
      },
      {
        title: 'Bilingual at the data layer',
        body:
          'Every piece of text in the data is stored as {es, en}, not just the interface labels. Switching language changes the archive itself, not a translation layer on top of it. Menu labels hold both languages in the same cell, so the navigation never changes width when you switch.',
      },
      {
        title: 'Taking over a login the platform stopped providing',
        body:
          'Sveltia CMS authenticates editors through Netlify’s OAuth service by default. When the site moved from Netlify to Cloudflare Workers that service no longer recognised the origin and every login returned Not Found. Rather than move the site back, I deployed my own sveltia-cms-auth Worker and pointed the CMS at it, so the GitHub OAuth keys now live in my own Cloudflare account instead of someone else’s, and the editors never noticed the outage.',
      },
      {
        title: 'Submissions that cannot publish themselves',
        body:
          'A Worker checks each fan submission, verifies the Turnstile token on the server instead of trusting the browser, and saves the entry as approved: false. Nothing reaches the site without review, because the review step is built into the system rather than being a rule someone has to remember.',
      },
      {
        title: 'Work moved from the browser to build time',
        body:
          'A script that runs before the build creates an index, which cuts what the home page loads by about six times. Each section ships in its own chunk, loaded only when opened. A weekly GitHub Actions job pulls missing air dates from TVMaze and commits them, never overwriting a date a person typed.',
      },
    ],
    live: 'https://archivo.universomafin.workers.dev',
    repo: 'https://github.com/altindaselif/mafin-archive',
  },
]

export const practice = [
  {
    name: 'Link-Sharing Profile App',
    note:
      'A link dashboard with login, drag-and-drop reordering through dnd-kit, per-field validation and a live phone preview that updates as you type.',
    slug: '13-react-link-sharing-app',
  },
  {
    name: 'Multi-Step Form Wizard',
    note:
      'A four-step subscription flow where each step validates before it lets you move on, and a monthly/yearly switch reprices every add-on.',
    slug: '12-react-multi-step-form-wizard',
  },
  {
    name: 'Space Tourism Website',
    note:
      'A four-page site on React Router with a shared layout, where every page is built from one data file instead of hand-written markup.',
    slug: '7-react-space-tourism-website',
  },
  {
    name: 'E-Commerce Product Page',
    note:
      'A product page with a thumbnail gallery, a fullscreen lightbox, quantity control and a cart that keeps its state across the page.',
    slug: '6-react-ecommerce-product-page',
  },
  {
    name: 'Pomodoro Timer',
    note:
      'A timer with an SVG progress ring drawn with stroke-dashoffset, three themes, three fonts and adjustable session lengths.',
    slug: '10-react-pomodoro-app',
  },
  {
    name: 'Tic-Tac-Toe',
    note:
      'A game with a CPU opponent that takes a winning move first, blocks the player second, and takes the centre square third.',
    slug: '9-react-tic-tac-toe-game',
  },
].map((p) => ({
  ...p,
  live: `https://altindaselif.github.io/${p.slug}/`,
  repo: `https://github.com/altindaselif/${p.slug}`,
}))

export const getProject = (slug) => projects.find((p) => p.slug === slug)
