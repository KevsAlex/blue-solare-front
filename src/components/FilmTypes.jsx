import { Link } from 'react-router-dom'
import { FiSun, FiShield, FiFeather, FiArrowRight } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { ARQ_PRICES, UV_BLOCK, MAX_IR, WARRANTY_YEARS } from '../data/films'

/**
 * Rewritten from three paragraph cards with 4-row spec tables — nobody scans
 * that on a landing page.
 *
 * Now each card leads with the PROBLEM in the customer's words, then one number
 * big enough to read at a glance, then a single line, then the real starting
 * price. Every figure is sourced from films.js; where a category has no
 * comparable measured number, the price leads instead of inventing one.
 */
const from = (name) => ARQ_PRICES.find((p) => p.name === name).price

const GROUPS = [
  {
    id: 'calor',
    Icon: FiSun,
    problem: 'Hace demasiado calor',
    hero: `${MAX_IR}%`,
    heroLabel: 'rechazo infrarrojo',
    line: 'Películas reflectivas y cerámicas que bajan el calor sin dejarte a oscuras.',
    chips: [`${UV_BLOCK}% rayos UV`, 'Humo, verde o azul'],
    price: from('Película Espejo Plata'),
    href: '/linea-arquitectonica',
    tone: {
      ring: 'hover:border-orange-300', chip: 'bg-orange-50 text-orange-700 border-orange-100',
      icon: 'bg-orange-50 text-orange-600 border-orange-100', hero: 'text-orange-600',
    },
  },
  {
    id: 'seguridad',
    Icon: FiShield,
    problem: 'Me preocupa la seguridad',
    hero: '4–7',
    heroLabel: 'mil de espesor',
    line: 'Refuerzan el cristal y lo mantienen unido ante un impacto. Transparentes o con tono ligero.',
    chips: ['Retiene fragmentos', 'Vitrinas y accesos'],
    price: from('Seguridad 4 Mic'),
    href: '/linea-arquitectonica',
    tone: {
      ring: 'hover:border-primary-300', chip: 'bg-primary-50 text-primary-700 border-primary-100',
      icon: 'bg-primary-50 text-primary-700 border-primary-100', hero: 'text-primary-700',
    },
  },
  {
    id: 'privacidad',
    Icon: FiFeather,
    problem: 'Quiero privacidad y diseño',
    hero: 'Sin',
    heroLabel: 'oscurecer el espacio',
    line: 'Esmerilados, dicroicos multicolor y microperforado para lograr privacidad conservando la luz.',
    chips: ['Esmerilado', 'Dicroico tricolor'],
    price: from('Esmerilado Premium'),
    href: '/linea-arquitectonica',
    tone: {
      ring: 'hover:border-purple-300', chip: 'bg-purple-50 text-purple-700 border-purple-100',
      icon: 'bg-purple-50 text-purple-600 border-purple-100', hero: 'text-purple-600',
    },
  },
]

export default function FilmTypes() {
  return (
    <section id="peliculas" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tipos de película"
          title="¿Qué quieres resolver?"
          subtitle="Elige por el problema, no por el producto. Nosotros te decimos qué película lo soluciona."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.id} delay={i * 120} className="h-full">
              <Link
                to={g.href}
                className={`group card card-hover ${g.tone.ring} h-full flex flex-col p-7 border-2`}
              >
                <span className={`w-[52px] h-[52px] rounded-2xl border flex items-center justify-center mb-5
                                  transition-transform duration-300 group-hover:-translate-y-1 ${g.tone.icon}`}>
                  <g.Icon size={24} />
                </span>

                <p className="text-sm font-semibold text-ink-400">{g.problem}</p>

                {/* The number is the hook — big enough to read while scrolling past. */}
                <p className="mt-2 flex items-baseline gap-2">
                  <span className={`text-4xl lg:text-5xl font-black leading-none tabular-nums ${g.tone.hero}`}>
                    {g.hero}
                  </span>
                  <span className="text-sm text-ink-500 leading-tight">{g.heroLabel}</span>
                </p>

                <p className="text-ink-500 text-sm leading-relaxed mt-4">{g.line}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {g.chips.map((c) => (
                    <span key={c} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${g.tone.chip}`}>
                      {c}
                    </span>
                  ))}
                </div>

                {/* Price is the thing that converts a browser into an enquiry. */}
                <div className="mt-auto pt-6 flex items-end justify-between gap-3">
                  <span className="text-sm text-ink-500">
                    desde <strong className="text-ink-900 text-lg tabular-nums">${g.price}</strong>
                    <span className="text-ink-400"> /m² instalado</span>
                  </span>
                  <FiArrowRight
                    size={18}
                    className="text-ink-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-700"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs text-ink-400 mt-8">
          Precios sin IVA · Garantía de {WARRANTY_YEARS} años · Instalación incluida
        </p>
      </div>
    </section>
  )
}
