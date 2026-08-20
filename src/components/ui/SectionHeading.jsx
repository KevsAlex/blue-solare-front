export default function SectionHeading({ eyebrow, title, subtitle, center = true, dark = false }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-14`}>
      {eyebrow && (
        <span className={eyebrow && dark
          ? 'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent-400 bg-white/10 border border-white/15 rounded-full px-3 py-1'
          : 'eyebrow'}>
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title mt-4 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${center ? 'mx-auto' : ''} ${dark ? 'text-white/60' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
