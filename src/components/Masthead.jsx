import { Link } from 'react-router-dom'

export default function Masthead() {
  return (
    <header className="wrap masthead">
      <p className="masthead__identity">
        <Link to="/" className="masthead__name">
          Elif Altındaş
        </Link>
        <span className="masthead__sep" aria-hidden="true">
          ·
        </span>
        <span className="masthead__role">Front-End Developer</span>
      </p>
      <p className="masthead__meta">
        Open to remote ·{' '}
        <a className="masthead__cv" href="/Elif_Altindas_CV.pdf" target="_blank" rel="noreferrer">
          CV
        </a>
      </p>
    </header>
  )
}
