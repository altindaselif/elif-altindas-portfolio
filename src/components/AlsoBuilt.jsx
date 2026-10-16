import { useState } from 'react'
import { practice } from '../data/projects.js'

export default function AlsoBuilt() {
  const [open, setOpen] = useState(false)

  return (
    <section className="wrap section">
      <button
        type="button"
        className="disclosure"
        aria-expanded={open}
        aria-controls="also-list"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="disclosure__mark" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
        <span className="disclosure__label">Also built</span>
        <span className="disclosure__aside">
          {practice.length} practice briefs, selected from 30+
        </span>
      </button>

      {open && (
        <ul className="also" id="also-list">
          {practice.map((p) => (
            <li className="also__item" key={p.slug}>
              <h3 className="also__name">{p.name}</h3>
              <p className="also__note">{p.note}</p>
              <p className="also__links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
