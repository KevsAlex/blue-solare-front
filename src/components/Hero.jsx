import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin, FiShield, FiSun, FiCheck } from 'react-icons/fi'
import CountUp from './ui/CountUp'

// Sourced from BluSolare's own spec sheet — see src/data/films.js.
// UV 100% is measured across the catalogue; 95% IR is the UL60 maximum, so it is
// labelled "hasta"; 8–10 years is the warranty printed on the quotation.
const stats = [
  { value: '100%', label: 'Bloqueo de rayos UV' },
  { value: '95%',  label: 'Rechazo infrarrojo (máx.)' },
  { value: '8–10', label: 'Años de garantía' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="on-dark relative flex items-center overflow-hidden pt-28 pb-24 lg:pt-32 lg:pb-32
                 bg-gradient-to-br from-ink-950 via-ink-900 to-primary-950"
    >
      {/* Ambient light — suggests sun hitting glass without needing another photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-24 w-[32rem] h-[32rem] bg-primary-600/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] bg-accent-500/15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div className="animate-fade-up [&>*]:animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-7">
              <FiMapPin className="text-accent-400" size={15} />
              <span className="text-white/90 text-sm font-medium">Querétaro, México</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.05]">
              Menos calor.
              <br />
              Más{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-300 to-primary-200">
                confort
              </span>{' '}
              en cada cristal.
            </h1>

            <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl">
              Películas de alto rendimiento para hogares, oficinas y vehículos.
              Reducen el calor, bloquean los rayos UV y refuerzan el vidrio —
              instaladas por técnicos certificados.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/cotiza" className="btn-primary text-base px-8 py-4">
                Cotiza gratis <FiArrowRight />
              </Link>
              <Link to="/que-es-una-pelicula" className="btn-ghost-light text-base px-8 py-4">
                ¿Qué es una película?
              </Link>
            </div>

            {/* Trust row */}
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {['Cotización sin costo', 'Instalación profesional', 'Garantía por escrito'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-white/70">
                  <FiCheck className="text-accent-400" size={15} /> {t}
                </li>
              ))}
            </ul>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-9 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <CountUp value={s.value} className="block text-3xl lg:text-4xl font-black text-white" />
                    <span className="block text-[11px] text-white/45 mt-1.5 leading-tight text-balance">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl ring-1 ring-white/15">
              <img
                src="/images/pelicula_ventana.jpg"
                alt="Instalación de película de control solar en una ventana"
                className="w-full h-[480px] object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-5 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lift flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <FiSun size={17} />
              </div>
              <div>
                <p className="text-[11px] text-ink-400 font-medium leading-none">Rayos UV</p>
                <p className="text-base font-extrabold text-ink-900 leading-tight">100% bloqueo</p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-lift flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center">
                <FiShield size={17} />
              </div>
              <div>
                <p className="text-[11px] text-ink-400 font-medium leading-none">Vidrio reforzado</p>
                <p className="text-base font-extrabold text-ink-900 leading-tight">anti-impacto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition into the white section below */}
      <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 90h1440V44C1200 88 720 4 0 46v44Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
