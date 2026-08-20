import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number up once it scrolls into view.
 *
 * Respects prefers-reduced-motion by jumping straight to the final value, and
 * renders the final value immediately if IntersectionObserver is unavailable —
 * the real number must never be withheld because an animation didn't run.
 */
const FLOOR = 0.6

export default function CountUp({ value, duration = 1100, className = '' }) {
  // Only animate a value that is a single number with an optional trailing unit
  // (e.g. "100%", "95%", "10+"). A RANGE like "8-10" must NOT be animated: the
  // matcher would grab the leading 8 and the counter would render "3-10" on its
  // way up, which reads as a different, wrong claim.
  const m = String(value).match(/^(\d+(?:[.,]\d+)?)([%+]?)$/)
  const target = m ? parseFloat(m[1].replace(',', '.')) : null
  const prefix = ''
  const suffix = m ? m[2] : ''

  const ref = useRef(null)
  const [n, setN] = useState(target)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    if (target === null) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') { setN(target); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setArmed(true); io.disconnect() }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  useEffect(() => {
    if (!armed || target === null) return
    let raf, start
    const step = (t) => {
      if (!start) start = t
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      // Sweep from 60% of the value, never from zero. These are claims — a frame
      // reading "0% Bloqueo de rayos UV" states the opposite of the truth, and
      // on a slow paint it can be on screen long enough to read.
      setN(Math.round(target * (FLOOR + (1 - FLOOR) * eased)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    setN(Math.round(target * FLOOR))
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [armed, target, duration])

  if (target === null) return <span className={className}>{value}</span>
  return <span ref={ref} className={`tabular-nums ${className}`}>{prefix}{n}{suffix}</span>
}
