import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="wrap lost">
      <p className="eyebrow">404</p>
      <h1 className="case__title">Nothing here</h1>
      <p className="case__tagline">
        This page does not exist — or it did, on an older version of this site.
      </p>
      <div className="case__actions">
        <Link className="btn btn--solid" to="/">
          Back to the work
        </Link>
      </div>
    </section>
  )
}
