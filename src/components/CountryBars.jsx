export default function CountryBars({ rows }) {
  const max = Math.max(...rows.map((r) => r.value))

  return (
    <ul className="bars">
      {rows.map((r) => (
        <li className="bar" key={r.code}>
          <span className="bar__code">{r.code}</span>
          <div className="bar__track">
            <div className="bar__fill" style={{ width: `${Math.round((r.value / max) * 100)}%` }} />
          </div>
          <span className="bar__value">{r.value.toLocaleString('en-US')}</span>
        </li>
      ))}
    </ul>
  )
}
