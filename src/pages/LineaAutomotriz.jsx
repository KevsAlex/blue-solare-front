import Stat from '../components/ui/Stat'
import { FiArrowRight, FiAward, FiCheck, FiCheckCircle, FiEye, FiLock, FiShield, FiSun, FiTruck, FiUsers, FiZap } from 'react-icons/fi'

const films = [
  {
    id: 'no-reflectivo',
    title: 'Polarizado No Reflectivo',
    subtitle: 'Alto Desempeño',
    tag: 'Más popular',
    description:
      'Estética limpia y discreta sin reflejos molestos. Ideal para quienes buscan privacidad con un look sobrio y elegante. Compatible con señales GPS y celular.',
    benefits: [
      { stat: '↓', label: 'Sin reflejos', detail: 'Acabado neutral que no deslumbra.' },
      { stat: FiLock, label: 'Privacidad', detail: 'Visibilidad reducida desde el exterior.' },
      { stat: FiSun, label: 'Reducción de calor', detail: 'Mantén el habitáculo más fresco.' },
      { stat: '100%', label: 'Bloqueo UV', detail: 'Protege piel e interiores del auto.' },
    ],
    color: 'slate',
  },
  {
    id: 'ceramica',
    title: 'Película Cerámica',
    subtitle: 'Tecnología Premium',
    tag: 'Recomendado',
    description:
      'La mejor tecnología en control solar. Máximo rechazo de calor e infrarrojos sin interferir con señales GPS, Bluetooth ni celular. Claridad óptica superior.',
    benefits: [
      { stat: '95%', label: 'Rechazo infrarrojo', detail: 'Máximo control de calor sin oscurecer.' },
      { stat: FiCheck, label: 'Sin interferencia GPS', detail: 'Compatible con todos los sistemas.' },
      { stat: FiEye, label: 'Máxima claridad', detail: 'Visibilidad perfecta día y noche.' },
      { stat: '8–10', label: 'Años de garantía', detail: 'Material de larga duración.' },
    ],
    color: 'sky',
  },
  {
    id: 'seguridad-auto',
    title: 'Película de Seguridad',
    subtitle: 'Protección',
    tag: 'Protección extra',
    description:
      'Mantiene los fragmentos de vidrio unidos en caso de impacto o accidente. Disponible en versión transparente para parabrisas o con ligera tonalidad para los laterales.',
    benefits: [
      { stat: FiShield, label: 'Retención de fragmentos', detail: 'Evita lesiones ante impactos.' },
      { stat: FiLock, label: 'Anti-robo', detail: 'Dificulta la rotura de ventanas.' },
      { stat: FiCheck, label: 'Transparente', detail: 'No modifica la visibilidad del conductor.' },
      { stat: '100%', label: 'Bloqueo UV', detail: 'Protección solar total.' },
    ],
    color: 'blue',
  },
]

const colorMap = {
  slate: { bg: 'bg-slate-50', border: 'border-slate-200', stat: 'text-slate-600', check: 'text-slate-500', tag: 'bg-slate-100 text-slate-700 border-slate-200', dot: 'bg-slate-400' },
  sky:   { bg: 'bg-sky-50',   border: 'border-sky-200',   stat: 'text-sky-600',   check: 'text-sky-500',   tag: 'bg-sky-100 text-sky-700 border-sky-200',     dot: 'bg-sky-400' },
  blue:  { bg: 'bg-blue-50',  border: 'border-blue-200',  stat: 'text-blue-600',  check: 'text-blue-500',  tag: 'bg-blue-100 text-blue-700 border-blue-200',   dot: 'bg-blue-400' },
}

export default function LineaAutomotriz() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-primary-900 to-primary-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <FiTruck className="text-blue-300" size={15} />
            <span className="text-white/80 text-sm font-medium">Línea Automotriz</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Protege tu vehículo con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              tecnología de punta
            </span>
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Polarizados y películas de alto rendimiento para todo tipo de vehículos.
            Más frescura, privacidad y seguridad en cada trayecto.
          </p>
          <a href="/cotiza" className="btn-primary mt-8 text-base px-8 py-4 inline-flex items-center gap-2">
            Cotizar mi vehículo <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Films */}
      <section className="py-14 lg:py-14 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Nuestras películas automotrices</h2>
            <p className="section-subtitle mx-auto">
              Opciones para cada necesidad: desde polarizados clásicos hasta cerámica de última generación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {films.map((film) => {
              const c = colorMap[film.color]
              return (
                <div key={film.id} className={`card ${c.bg} border ${c.border} p-7 relative`}>
                  {film.tag && (
                    <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full border ${c.tag}`}>
                      {film.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-ink-900 mb-1 pr-24">{film.title}</h3>
                  <p className={`text-xs font-semibold mb-4 ${c.stat}`}>{film.subtitle}</p>
                  <p className="text-ink-600 text-sm leading-relaxed mb-6">{film.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {film.benefits.map((b) => (
                      <div key={b.label} className="flex gap-2 items-start">
                        <FiCheckCircle className={`${c.check} flex-shrink-0 mt-0.5`} size={14} />
                        <div>
                          <p className={c.stat}><Stat value={b.stat} /></p>
                          <p className="text-xs font-semibold text-ink-700 leading-tight">{b.label}</p>
                          <p className="text-xs text-ink-400 leading-tight mt-0.5">{b.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <a href="/cotiza" className="btn-primary px-8 py-4 text-base">
              Solicitar cotización <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Por qué elegir BluSolare?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FiAward, title: 'Materiales certificados', desc: 'Trabajamos con marcas líderes en la industria.' },
              { icon: FiUsers, title: 'Instaladores certificados', desc: 'Técnicos con experiencia y precisión comprobada.' },
              { icon: FiZap, title: 'Instalación rápida', desc: 'Terminamos en el mismo día en la mayoría de los casos.' },
              { icon: FiCheckCircle, title: 'Garantía incluida', desc: 'Respaldamos nuestro trabajo con garantía por escrito.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-brand-light rounded-2xl">
                <span className={`w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-3`}><item.icon size={22} /></span>
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
