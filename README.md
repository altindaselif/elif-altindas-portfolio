# Elif Altındaş — Portfolio

> _8,060,610 recorded interactions across 66 countries._
> A portfolio built around the one thing a junior front-end developer rarely has: production traffic.

---

## 🔗 Links

- **Live Site:** [View Live Demo](https://elifaltindas.netlify.app/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/elif-altindas-portfolio)

---

## 🎭 What Is This?

A single-page portfolio with a separate route per project. The home page leads with the total
number of real interactions recorded across four independent projects — none of them briefed,
commissioned or promoted — and breaks it down by project and by country. Each project then has its
own case study at `/work/:slug` covering the brief, the stack and the engineering decisions behind
it.

All figures are exported from the projects' own Firebase Realtime Database counters, not from
analytics estimates.

---

## 🛠️ Stack

- **React 19** with **React Router 7** — one layout route, a dynamic `/work/:slug` route and a 404
- **Vite 8** for the build
- **Plain CSS** with custom properties — no framework, no utility classes
- **Netlify** for hosting, with an SPA rewrite so deep links survive a refresh

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`; preview the build with `npm run preview`.

---

## 📁 Structure

```
src/
├── components/   Layout, masthead, footer, country bars, scroll restoration
├── data/         projects.js — every figure and every case study lives here
├── pages/        Home, CaseStudy, NotFound
├── App.jsx       Routes
└── index.css     Design tokens and all styles
```

Adding or editing a project means editing one object in `src/data/projects.js`; no component
changes are required.

---

## 📄 License

MIT © Elif Altındaş
