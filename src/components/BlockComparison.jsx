import { FiSun, FiEye, FiShield } from 'react-icons/fi'
import { UV_BLOCK } from '../data/films'

/**
 * Side-by-side "sin película / con película" for the film currently selected.
 *
 * Only renders a metric when the value is actually known:
 *  - UV is 100% across the catalogue (documented), so it always shows.
 *  - Visible light only shows when the film's VLT is known — for the polarizadas
 *    the number in the product name IS the VLT.
 * Nothing here is estimated. If we don't have the figure, the row is omitted
 * rather than filled with a plausible-looking guess.
 */
export default function BlockComparison({ film }) {
  if (!film) return null

  const rows = [
    {
      Icon: FiShield,
      label: 'Rayos UV bloqueados',
      before: 0,
      after: UV_BLOCK,
      fmt: (v) => `${v}%`,
      tone: 'bg-primary-600',
    },
    film.vlt != null && {
      Icon: FiEye,
      label: 'Luz visible que entra',
      before: 100,
      after: film.vlt,
      fmt: (v) => `${v}%`,
      tone: 'bg-accent-500',
      invert: true, // lower = darker, not "more blocked"
    },
  ].filter(Boolean)

  return (
    <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-4">
      <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700 mb-3 flex items-center gap-1.5">
        <FiSun size={13} /> ¿Qué hace esta película?
      </p>

      <div className="space-y-3.5">
        {rows.map(({ Icon, label, before, after, fmt, tone, invert }) => (
          <div key={label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="flex items-center gap-1.5 text-xs font-medium text-ink-600">
                <Icon size={12} /> {label}
              </span>
              <span className="text-xs text-ink-400 tabular-nums">
                sin: {fmt(before)} <span className="mx-1 text-ink-300">→</span>
                <strong className="text-primary-700">con: {fmt(after)}</strong>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              {/* sin película */}
              <div className="flex-1 h-2 rounded-full bg-ink-200 overflow-hidden">
                <div className="h-full bg-ink-300 transition-all duration-500" style={{ width: `${before}%` }} />
              </div>
              {/* con película */}
              <div className="flex-1 h-2 rounded-full bg-ink-200 overflow-hidden">
                <div className={`h-full ${tone} transition-all duration-700`} style={{ width: `${after}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {film.note && (
        <p className="text-[11px] text-ink-500 mt-3 leading-relaxed">{film.note}.</p>
      )}
      {film.vlt == null && (
        <p className="text-[11px] text-ink-400 mt-2 leading-relaxed">
          El nivel de luz depende del acabado; lo confirmamos en la visita de medición.
        </p>
      )}
    </div>
  )
}
