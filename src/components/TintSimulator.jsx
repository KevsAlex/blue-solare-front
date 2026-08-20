import { useState } from 'react'
import { FiSun, FiEye, FiInfo } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

/**
 * Lets a visitor drag through the polarizado levels we actually sell and see
 * roughly how each one looks, plus the trade-off between heat rejection and
 * visible light.
 *
 * The preview is a CSS overlay on a real photo, NOT a photograph of each film —
 * it is labelled as an illustration on purpose. The percentages are VLT (visible
 * light transmission), which is what the "5% / 20% / 35%" product names mean:
 * LOWER number = darker film. That naming confuses almost every customer, so the
 * copy spells it out.
 */
const LEVELS = [
  { vlt: 5,  label: 'Polarizada 5%',  opacity: 0.80, heat: '~78%', privacy: 'Máxima',  note: 'El más oscuro. Privacidad total de día.' },
  { vlt: 20, label: 'Polarizada 20%', opacity: 0.62, heat: '~68%', privacy: 'Alta',    note: 'El equilibrio más solicitado.' },
  { vlt: 35, label: 'Polarizada 35%', opacity: 0.44, heat: '~58%', privacy: 'Media',   note: 'Discreto, mantiene buena visibilidad.' },
  { vlt: 50, label: 'Polarizada 50%', opacity: 0.26, heat: '~45%', privacy: 'Ligera',  note: 'Casi imperceptible desde fuera.' },
]

export default function TintSimulator() {
  const [idx, setIdx] = useState(1)
  const level = LEVELS[idx]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simulador"
          title="¿Qué tan oscuro se ve cada tono?"
          subtitle="Mueve el control para comparar los niveles de polarizado que manejamos."
        />

        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Preview */}
            <div className="relative rounded-3xl overflow-hidden shadow-lift border border-ink-100">
              <img
                src="/images/pelicula_ventana.jpg"
                alt={`Simulación de una ventana con película ${level.label}`}
                className="w-full h-[320px] sm:h-[380px] object-cover"
                loading="lazy"
              />
              {/* The tint itself */}
              <div
                className="absolute inset-0 bg-ink-950 transition-opacity duration-500 ease-out pointer-events-none"
                style={{ opacity: level.opacity }}
                aria-hidden="true"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl px-3 py-1.5 text-sm font-bold text-ink-900 shadow-soft">
                {level.label}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[11px] text-white/85 bg-black/45 backdrop-blur rounded-lg px-3 py-2">
                <FiInfo size={13} className="shrink-0" />
                <span>Simulación ilustrativa. El resultado real varía según el vidrio y la luz.</span>
              </div>
            </div>

            {/* Controls */}
            <div>
              <label htmlFor="tint" className="block text-sm font-semibold text-ink-700 mb-3">
                Nivel de polarizado
              </label>
              <input
                id="tint"
                type="range"
                min="0"
                max={LEVELS.length - 1}
                step="1"
                value={idx}
                onChange={(e) => setIdx(Number(e.target.value))}
                aria-valuetext={level.label}
                className="w-full accent-primary-600 cursor-pointer"
              />
              <div className="flex justify-between mt-2 mb-8">
                {LEVELS.map((l, i) => (
                  <button
                    key={l.vlt}
                    onClick={() => setIdx(i)}
                    className={`text-xs font-semibold px-2 py-1 rounded-md transition-colors ${
                      i === idx ? 'text-primary-700 bg-primary-50' : 'text-ink-400 hover:text-ink-700'
                    }`}
                  >
                    {l.vlt}%
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card p-5">
                  <div className="flex items-center gap-2 text-ink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <FiSun size={14} /> Rechazo de calor
                  </div>
                  <p className="text-2xl font-extrabold text-primary-700">{level.heat}</p>
                </div>
                <div className="card p-5">
                  <div className="flex items-center gap-2 text-ink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <FiEye size={14} /> Privacidad
                  </div>
                  <p className="text-2xl font-extrabold text-primary-700">{level.privacy}</p>
                </div>
              </div>

              <p className="text-ink-500 mt-5 leading-relaxed">{level.note}</p>

              <p className="text-xs text-ink-400 mt-4 leading-relaxed">
                El porcentaje indica cuánta <strong className="text-ink-600">luz visible deja pasar</strong>:
                a menor número, más oscura es la película.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
