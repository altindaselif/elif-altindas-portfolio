import { useEffect, useState } from 'react'

const noMotionWanted = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Counts from zero up to the real figure once, on mount. The number uses
   tabular figures, so the digits do not jump around while it runs. */
export default function CountUp({ value, duration = 1300 }) {
  const [shown, setShown] = useState(() => (noMotionWanted() ? value : 0))

  useEffect(() => {
    if (noMotionWanted()) return

    let frame
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setShown(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [value, duration])

  return shown.toLocaleString('en-US')
}
