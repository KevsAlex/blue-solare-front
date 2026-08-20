import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiInfo, FiArrowRight, FiEye, FiShield } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { ARQ_PRICES, UV_BLOCK, waLink } from '../data/films'

/**
 * Slim quote builder that lives ON the home page.
 *
 * The full /cotiza page is a second click, and a second click loses sales — so
 * the common case (a few windows of one polarizado) is answered here: drag the
 * tint, type the measurements, see the price, send it.
 *
 * The tint slider doubles as the visual preview: darker overlay = lower VLT.
 * Prices are the real installed rate per m² from the pricing workbook.
 */
const LEVELS = [5, 20, 35, 50].map((vlt) => ({
  ...ARQ_PRICES.find((p) => p.name === `Polarizada ${vlt}%`),
  vlt,
  opacity: +(0.86 - vlt * 0.0125).toFixed(3),
  privacy: vlt <= 5 ? 'Máxima' : vlt <= 20 ? 'Alta' : vlt <= 35 ? 'Media' : 'Ligera',
}))

export default function QuickQuote() {
  const [idx, setIdx] = useState(1)
  const [ancho, setAncho] = useState('1.5')
  const [alto, setAlto] = useState('1.2')
  const [qty, setQty] = useState(2)

  const level = LEVELS[idx]

  const { area, total } = useMemo(() => {
    const w = parseFloat(ancho), h = parseFloat(alto)
    if (!(w > 0) || !(h > 0) || !(qty > 0)) return { area: 0, total: 0 }
    const a = w * h * qty
    // Same model the quotation workbook uses: area x rate, rounded to the
    // nearest $5. Installation on architectural jobs is already in the rate.
    return { area: a, total: Math.round((a * level.price) / 5) * 5 }
  }, [ancho, alto, qty, level])

  const msg =
    `Hola! Quiero cotizar ${qty} ventana(s) de ${ancho} x ${alto} m ` +
    `con ${level.name}. Area aproximada: ${area.toFixed(2)} m2.`

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cotiza en 10 segundos"
          title="¿Qué tan oscuro y cuánto cuesta?"
          subtitle="Mueve el control, pon tus medidas y mira el estimado al instante."
        />

        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Preview */}
            <div className="relative rounded-3xl overflow-hidden shadow-lift border border-ink-100 min-h-[330px] group">
              <img
                src="/images/window-clean.jpg"
                alt={`Simulación de una ventana con ${level.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-ink-950 transition-opacity duration-700 ease-out"
                style={{ opacity: level.opacity }}
                aria-hidden="true"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl px-3.5 py-2 shadow-soft">
                <p className="text-sm font-bold text-ink-900 leading-none">{level.name}</p>
                <p className="text-[11px] text-ink-400 mt-1 leading-none">{level.note}</p>
              </div>

              {/* Live blocking readout over the image */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                {[
                  { Icon: FiShield, k: 'Rayos UV', v: `${UV_BLOCK}%` },
                  { Icon: FiEye, k: 'Luz visible', v: `${level.vlt}%` },
                ].map(({ Icon, k, v }) => (
                  <div key={k} className="bg-black/45 backdrop-blur rounded-lg px-3 py-2">
                    <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/60">
                      <Icon size={11} /> {k}
                    </p>
                    <p className="text-white font-bold text-lg leading-tight tabular-nums">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col">
              <label htmlFor="qq-tint" className="block text-sm font-semibold text-ink-700 mb-3">
                Nivel de polarizado
              </label>
              <input
                id="qq-tint" type="range" min="0" max={LEVELS.length - 1} step="1" value={idx}
                onChange={(e) => setIdx(Number(e.target.value))}
                aria-valuetext={level.name}
                className="w-full accent-primary-600 cursor-pointer"
              />
              <div className="flex justify-between mt-2 mb-6">
                {LEVELS.map((l, i) => (
                  <button
                    key={l.vlt} onClick={() => setIdx(i)}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200 ${
                      i === idx ? 'text-primary-700 bg-primary-50 scale-105' : 'text-ink-400 hover:text-ink-700'
                    }`}
                  >{l.vlt}%</button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { id: 'qq-w', label: 'Ancho (m)', v: ancho, set: setAncho, step: '0.1' },
                  { id: 'qq-h', label: 'Alto (m)', v: alto, set: setAlto, step: '0.1' },
                  { id: 'qq-q', label: 'Ventanas', v: qty, set: (x) => setQty(Number(x)), step: '1' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-semibold text-ink-600 mb-1">{f.label}</label>
                    <input
                      id={f.id} type="number" min="0" step={f.step} value={f.v}
                      onChange={(e) => f.set(e.target.value)}
                      className="w-full border border-ink-200 rounded-xl px-3 py-2.5 text-sm tabular-nums
                                 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                ))}
              </div>

              {/* Estimate */}
              <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-5 mb-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700">Estimado</p>
                    <p className="text-4xl font-black text-primary-700 tabular-nums leading-tight transition-all duration-300">
                      ${total.toLocaleString('es-MX')}
                    </p>
                    <p className="text-xs text-ink-500 mt-1 tabular-nums">
                      {area.toFixed(2)} m² · ${level.price}/m² instalado
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-ink-500 bg-white rounded-lg px-2.5 py-1 border border-ink-100">
                    Privacidad {level.privacy}
                  </span>
                </div>
                <p className="flex items-start gap-1.5 text-[11px] text-ink-400 mt-3 leading-relaxed">
                  <FiInfo size={12} className="shrink-0 mt-0.5" />
                  Estimado sin IVA, sujeto a validación de medidas y accesibilidad.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <a href={waLink(msg)} target="_blank" rel="noopener noreferrer"
                   className="btn inline-flex bg-[#25D366] text-white hover:brightness-105 hover:-translate-y-0.5 px-6 py-3.5">
                  <FaWhatsapp size={18} /> Enviar por WhatsApp
                </a>
                <Link to="/cotiza" className="btn-outline px-6 py-3.5">
                  Cotizar varias medidas <FiArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
