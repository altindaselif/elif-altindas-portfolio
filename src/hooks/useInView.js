import { useEffect, useRef, useState } from 'react'

const noMotionWanted = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window)

/* Returns a ref and a flag that turns true the first time the element
   scrolls into view, so a group can animate once and then stay put.
   If the visitor asked for less motion, or the browser has no observer,
   the flag starts true and the final state renders straight away. */
export default function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(noMotionWanted)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView])

  return [ref, inView]
}
