/**
 * Renders a `stat` that may be EITHER an icon component or a plain string
 * ("100%", "8-10"). The data arrays mix both, so rendering `<b.stat />`
 * unconditionally makes React try to mount a component literally named "99%"
 * and the whole page white-screens.
 */
export default function Stat({ value, className = '' }) {
  if (typeof value === 'function') {
    const Icon = value
    return <Icon size={18} className={className} />
  }
  return <span className={`text-sm font-bold ${className}`}>{value}</span>
}
