import { useEffect, useRef, useState } from 'react'

/**
 * Fades + lifts children into view once, when they first intersect.
 *
 * Uses IntersectionObserver rather than a scroll listener so it costs nothing
 * while idle. If the API is missing (or the element is already on screen at
 * mount) the content is shown immediately — this must never be able to leave
 * content invisible.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)

    // Failsafe: reveal regardless after a short delay. If the observer never
    // fires — an odd scroll container, an iframe, a browser quirk — the content
    // would otherwise stay at opacity 0 FOREVER. A missed animation is a cosmetic
    // problem; an invisible section is a broken page.
    const failsafe = setTimeout(() => setShown(true), 1600)

    return () => { io.disconnect(); clearTimeout(failsafe) }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
