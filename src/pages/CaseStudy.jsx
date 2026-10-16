import { Link, useParams } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import { getNextProject, getProject } from '../data/projects.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  const next = getNextProject(slug)

  if (!project) return <NotFound />

  return (
    <article>
      <div className="wrap">
        <Link className="case__back" to="/">
          ← All work
        </Link>
        <h1 className="case__title">{project.name}</h1>
        <p className="case__tagline">{project.tagline}</p>

        <div className="case__actions">
          <a className="btn btn--solid" href={project.live} target="_blank" rel="noreferrer">
            Open the live site
          </a>
          <a className="btn btn--ghost" href={project.repo} target="_blank" rel="noreferrer">
            Read the code
          </a>
        </div>

      </div>

      <section className="wrap section" aria-labelledby="facts-title">
        <div className="brief">
          <div>
            <div className="section__head">
              <h2 className="section__title" id="facts-title">
                The brief
              </h2>
            </div>
            <ul className="facts">
              {project.facts.map((f) => (
                <li className="facts__row" key={f.key}>
                  <span className="facts__key">{f.key}</span>
                  <span className="facts__val">{f.val}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.shot !== false && (
            <figure className="shot">
              <img
                src={`/shots/${project.slug}.webp`}
                alt={`The ${project.name} page as visitors see it`}
                width="3420"
                height="1902"
              />
            </figure>
          )}
        </div>
      </section>

      <section className="wrap section section--tight" aria-labelledby="steps-title">
        <div className="section__head">
          <h2 className="section__title" id="steps-title">
            Key decisions
          </h2>
          <span className="section__aside">{project.steps.length} of them</span>
        </div>
        <ol className="steps">
          {project.steps.map((s) => (
            <li className="steps__item" key={s.title}>
              <h3 className="steps__head">{s.title}</h3>
              <p className="steps__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section section--tight">
        <Link className="next" to={`/work/${next.slug}`}>
          <span className="next__label">Next project</span>
          <span className="next__name">{next.name} →</span>
        </Link>
      </section>
    </article>
  )
}
