import { useState } from 'react'
import { FiEye, FiInfo, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { ARQ_PRICES, UV_BLOCK } from '../data/films'

/**
 * Lets a visitor see roughly how dark each polarizado level looks, and what it
 * costs per m².
 *
 * Deliberately shows only figures we can source: the VLT (which IS the product
 * name), the official catalogue description, the real installed price, and the
 * measured 100% UV block. No invented heat-rejection percentages — IR rejection
 * varies from 12% to 95% across the range, so a per-tint number would be fiction.
 *
 * The preview is a CSS overlay on a photo, labelled as an illustration.
 */
const LEVELS = [5, 20, 35, 50].map((vlt) => {
  const row = ARQ_PRICES.find((p) => p.name === `Polarizada ${vlt}%`)
  return {
    vlt,
    label: `Polarizada ${vlt}%`,
    note: row.note,
    price: row.price,
    // Visual approximation only: less transmitted light => heavier overlay.
    opacity: +(0.86 - vlt * 0.0125).toFixed(3),
    privacy: vlt <= 5 ? 'Máxima' : vlt <= 20 ? 'Alta' : vlt <= 35 ? 'Media' : 'Ligera',
  }
})

export default function TintSimulator() {
  const [idx, setIdx] = useState(1)
  const level = LEVELS[idx]

  return (
    <section className="py-14 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simulador"
          title="¿Qué tan oscuro se ve cada tono?"
          subtitle="Compara los niveles de polarizado y su precio por metro cuadrado, instalación incluida."
        />

        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lift border border-ink-100 group">
              <img
                src="/images/window-clean.jpg"
                alt={`Simulación de una ventana con película ${level.label}`}
                className="w-full h-[320px] sm:h-[430px] object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-ink-950 transition-opacity duration-700 ease-out pointer-events-none"
                style={{ opacity: level.opacity }}
                aria-hidden="true"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl px-3.5 py-2 shadow-soft">
                <p className="text-sm font-bold text-ink-900 leading-none">{level.label}</p>
                <p className="text-[11px] text-ink-400 mt-1 leading-none">{level.note}</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-start gap-2 text-[11px] text-white/85 bg-black/45 backdrop-blur rounded-lg px-3 py-2">
                <FiInfo size={13} className="shrink-0 mt-0.5" />
                <span>Simulación ilustrativa. El resultado real varía según el cristal y la luz.</span>
              </div>
            </div>

            <div>
              <label htmlFor="tint" className="block text-sm font-semibold text-ink-700 mb-3">
                Nivel de polarizado
              </label>
              <input
                id="tint" type="range" min="0" max={LEVELS.length - 1} step="1" value={idx}
                onChange={(e) => setIdx(Number(e.target.value))}
                aria-valuetext={level.label}
                className="w-full accent-primary-600 cursor-pointer"
              />
              <div className="flex justify-between mt-2 mb-8">
                {LEVELS.map((l, i) => (
                  <button
                    key={l.vlt}
                    onClick={() => setIdx(i)}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200 ${
                      i === idx ? 'text-primary-700 bg-primary-50 scale-105' : 'text-ink-400 hover:text-ink-700'
                    }`}
                  >
                    {l.vlt}%
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="card p-5">
                  <p className="text-ink-400 text-[11px] font-semibold uppercase tracking-wider mb-1">Desde</p>
                  <p className="text-2xl font-extrabold text-primary-700 tabular-nums">${level.price}</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">por m² instalado</p>
                </div>
                <div className="card p-5">
                  <p className="flex items-center gap-1.5 text-ink-400 text-[11px] font-semibold uppercase tracking-wider mb-1">
                    <FiEye size={12} /> Privacidad
                  </p>
                  <p className="text-2xl font-extrabold text-primary-700">{level.privacy}</p>
                </div>
                <div className="card p-5">
                  <p className="text-ink-400 text-[11px] font-semibold uppercase tracking-wider mb-1">Rayos UV</p>
                  <p className="text-2xl font-extrabold text-primary-700 tabular-nums">{UV_BLOCK}%</p>
                  <p className="text-[11px] text-ink-400 mt-0.5">bloqueados</p>
                </div>
              </div>

              <p className="text-xs text-ink-400 mt-5 leading-relaxed">
                El porcentaje indica cuánta <strong className="text-ink-600">luz visible deja pasar</strong>:
                a menor número, más oscura es la película. Precios sin IVA.
              </p>

              <Link to="/cotiza" className="btn-primary mt-6">
                Calcular mi cotización <FiArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
