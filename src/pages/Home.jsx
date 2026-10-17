import { Link } from 'react-router-dom'
import CountryBars from '../components/CountryBars.jsx'
import CountUp from '../components/CountUp.jsx'
import AlsoBuilt from '../components/AlsoBuilt.jsx'
import prefetchShot from '../lib/prefetch.js'
import { projects, tiles, topCountries, totals } from '../data/projects.js'

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">Total recorded interactions</p>
        <p className="hero__number">
          <CountUp value={totals.interactions} />
        </p>
        <p className="hero__lede">
          Four projects nobody paid for, nobody promoted and nobody but me built. The counters
          stopped as the show wrote the characters out. The number is final, which is the point:
          it is a <strong>record, not a dashboard</strong>.
        </p>

        <div className="tiles">
          {tiles.map((t) => (
            <div className="tile" key={t.label}>
              <p className="tile__value">{t.value}</p>
              <p className="tile__label">{t.label}</p>
              <p className="tile__note">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section" aria-labelledby="bars-title">
        <div className="section__head">
          <h2 className="section__title" id="bars-title">
            Slap Pelayo, by country
          </h2>
          <span className="section__aside">57 countries recorded · eight shown</span>
        </div>
        <CountryBars rows={topCountries} />
      </section>

      <section className="wrap section" aria-labelledby="work-title">
        <div className="section__head">
          <h2 className="section__title" id="work-title">
            The work
          </h2>
          <span className="section__aside">four projects · one developer</span>
        </div>
        <ul className="work">
          {projects.map((p) => (
            <li
              className="work__item"
              key={p.slug}
              onMouseEnter={() => prefetchShot(p.slug)}
              onTouchStart={() => prefetchShot(p.slug)}
            >
              <div className="work__link">
                <Link
                  className="work__name"
                  to={`/work/${p.slug}`}
                  onFocus={() => prefetchShot(p.slug)}
                >
                  {p.name}
                </Link>
                <span className="work__metric">
                  {p.metric} {p.metricLabel}
                </span>
                <p className="work__note">{p.note}</p>
                <a
                  className="work__live"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live site ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <AlsoBuilt />

      <section className="wrap section" aria-labelledby="about-title">
        <div className="prose">
          <h2 id="about-title">What the number proves</h2>
          <p>
            I am a front-end developer in Eskişehir, Turkey. Before this I spent three years at
            Renault Group in industrial automation, designing robotic production lines with
            international teams, building digital twins of them, and writing RPA bots to take
            repetitive work off people. Those years taught me something tutorials skip: code is
            finished when someone else can run it, read it and fix it, not when it works on my
            machine.
          </p>
          <p>
            I built my four biggest projects for the fans of a Spanish daily drama. The fans shared them
            themselves, and they reached {totals.interactions.toLocaleString('en-US')} interactions
            across {totals.countries} countries on no budget and no advertising. That is not a
            number I chose; it is traffic I had to survive. Atomic database transactions, rate
            limiting, bot filtering, geolocation fallbacks and two or three languages per project
            are in this work because the traffic required them.
          </p>
          <p>
            I am looking for remote front-end work, with teams in Turkey and worldwide. I am in UTC+3,
            which covers the whole CET working day.
          </p>
        </div>

        <ul className="chips">
          {[
            'HTML',
            'CSS',
            'CSS Modules',
            'Tailwind',
            'Bootstrap',
            'JavaScript',
            'REST APIs',
            'React',
            'React Router',
            'Vite',
            'Canvas API',
            'Intl API',
            'Web Audio',
            'Firebase',
            'Cloudflare Workers',
            'R2',
            'Netlify',
            'i18n',
            'Accessibility',
            'Responsive Design',
            'Git',
            'GitHub Actions',
            'Figma',
          ].map((c) => (
            <li className="chip" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
