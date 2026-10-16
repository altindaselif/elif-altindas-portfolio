import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function NotFound() {
  return (
    <section className="wrap lost">
      <p className="lost__code">404</p>
      <h1 className="case__title">Nothing here</h1>
      <p className="case__tagline">
        This page does not exist, or it did on an older version of this site.
      </p>

      <ul className="lost__list">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link to={`/work/${p.slug}`}>
              <span className="lost__name">{p.name}</span>
              <span className="lost__metric">
                {p.metric} {p.metricLabel}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="case__actions">
        <Link className="btn btn--solid" to="/">
          Back to the home page
        </Link>
      </div>
    </section>
  )
}
