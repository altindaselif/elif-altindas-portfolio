import useInView from '../hooks/useInView.js'

export default function CountryBars({ rows }) {
  const max = Math.max(...rows.map((r) => r.value))
  const [ref, inView] = useInView()

  return (
    <ul className={`bars${inView ? ' is-in' : ''}`} ref={ref}>
      {rows.map((r, i) => (
        <li
          className="bar"
          key={r.code}
          style={{ '--i': i, '--w': `${Math.round((r.value / max) * 100)}%` }}
        >
          <span className="bar__code">{r.code}</span>
          <div className="bar__track">
            <div className="bar__fill" />
          </div>
          <span className="bar__value">{r.value.toLocaleString('en-US')}</span>
        </li>
      ))}
    </ul>
  )
}
