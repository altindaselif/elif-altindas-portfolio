# 📊 Elif Altındaş — Portfolio

> _8,060,610 recorded interactions across 66 countries._  
> A portfolio built around the one thing a junior front-end developer rarely has: production traffic — with a case study behind every number.

---

## 🔗 Links

- **Live Site:** [View Live Demo](https://elifaltindas.netlify.app/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/elif-altindas-portfolio)

---

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.webp)
- [View Mobile Version](./mobile-screenshot.webp)

---

## 🎭 What Is This?

A portfolio that leads with evidence instead of adjectives. The home page opens on the total number of real interactions recorded across four independent projects — none of them briefed, commissioned or promoted — then breaks that number down by project and by country. Each project has its own case study at `/work/:slug` covering the brief, the stack and the engineering decisions behind it, next to a screenshot of the thing itself.

Every figure comes from the projects' own Firebase Realtime Database counters, exported and read directly. Nothing is estimated from analytics, and nothing is rounded up.

---

## 💡 Key Features

- **📈 A home page built from data:** the hero number, the four project tiles and the country bars all render from one data file, so changing a figure is a one-line edit and the layout follows.
- **🗂️ A case study per project:** `/work/slap-pelayo`, `/work/clown-cloe`, `/work/whack-a-bianca` and `/work/mafin-archive`, each with a brief table, a screenshot and the technical decisions worth defending.
- **🧮 Country bars without a chart library:** each bar is sized as a percentage of the largest value, with `ch` units keeping the code and figure columns aligned whatever the font size.
- **📂 A collapsed second tier:** six practice briefs sit behind one disclosure button, so they answer "is there more?" without competing with the four projects that carry real traffic.
- **🔗 Deep links that survive a refresh:** a `_redirects` rule hands every unknown path to the router, so `/work/clown-cloe` works when opened cold, shared or reloaded.
- **🎞️ Motion that stops when asked:** the total counts up from zero once, the country bars grow when the chart scrolls into view, and the second tier slides open; all of it is off under `prefers-reduced-motion`, and the hover effects only exist on pointer devices.
- **🖼️ Share-ready:** an SVG favicon, an Apple touch icon and a 1200×630 Open Graph image, so the link carries the number wherever it is pasted.
- **♿ Accessibility:** a skip link, labelled sections, `aria-expanded` on the disclosure, focus-visible outlines in the accent colour, and `prefers-reduced-motion` honoured.
- **📱 Responsive:** a single-column layout below 640px, with the brief table, the tiles and the chip strip each reflowing rather than shrinking.

---

## 🛠️ Technical Implementation

### One Data File, Four Pages

`src/data/projects.js` holds every figure, tagline, brief row and decision for all four projects, plus the six practice briefs. The home page maps over it, and `/work/:slug` looks a project up by its slug. Adding a project means adding an object; no component changes, no new route.

### Scroll Restoration Without a Library

React Router keeps the scroll position when the URL changes, which means opening a case study from halfway down the home page lands you halfway down the case study. A small `ScrollToTop` component watches `useLocation()` and resets the scroll on every pathname change.

### Layout Driven by Grid, Not Magic Numbers

The numbered decision list is a two-column grid whose first column holds the counter, so the body text aligns itself instead of being pushed by a guessed left margin. The country bars size their columns in `ch` units, so a nine-character figure always fits. The brief table and the screenshot share one grid, and both columns start at the section heading.

### Screenshots That Are Already There

Each screenshot ships in two widths behind one `srcset`, and the page never
displays it wider than 620px, so most visitors download a 1400px file of
around 50KB instead of the 3420px original. Hovering a project on the home
page, or focusing it with the keyboard, injects a `<link rel="prefetch">` for
the screenshot its case study will use; by the time the page opens the image
is already in the cache. A `_headers` rule keeps the files there for a week.

### SPA Rewrites on Netlify

GitHub Pages has no server-side rewrite, so deep links 404 there unless `404.html` duplicates the app. Netlify does: `public/_redirects` contains a single `/* /index.html 200` rule, and `netlify.toml` pins the build command and publish directory so the site deploys the same way from any machine.

---

## 🧰 Built With

- **React 19** — function components and hooks only
- **React Router 7** — one layout route, a dynamic `/work/:slug` route and a catch-all 404
- **Vite 8** — build and dev server
- **Plain CSS** — custom properties for the palette, no framework and no utility classes
- **Netlify** — continuous deploy from `main`, with an SPA rewrite

---

## 📁 Structure

```
src/
├── components/   Layout, masthead, footer, country bars, disclosure, scroll restoration
├── data/         projects.js — every figure and every case study lives here
├── pages/        Home, CaseStudy, NotFound
├── App.jsx       Routes
└── index.css     Design tokens and all styles
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Build with `npm run build`, preview the build with `npm run preview`.

---

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)

---

## 📄 License

MIT © Elif Altındaş
