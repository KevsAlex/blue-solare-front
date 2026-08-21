import { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiThermometer, FiShield, FiFeather } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const films = [
  {
    id: 'calor',
    Icon: FiThermometer,
    title: 'Reducción de Calor',
    tagline: 'Hasta 95% de rechazo infrarrojo',
    image: '/images/real-espejo.jpg',
    imageAlt: 'Sala con ventanas y película de control solar BluSolare',
    description:
      'Nuestras películas de control solar son la solución más eficiente para combatir el calor. Disponibles en versiones reflectivas y cerámicas para cada necesidad.',
    specs: [
      { label: 'Bloqueo de rayos UV', value: '100%' },
      { label: 'Rechazo infrarrojo', value: 'Hasta 95%' },
      { label: 'Tonos disponibles', value: 'Humo, verde, azul' },
      { label: 'Garantía', value: '8–10 años' },
    ],
    color: 'orange',
  },
  {
    id: 'seguridad',
    Icon: FiShield,
    title: 'Seguridad',
    tagline: 'Protección ante impactos',
    description:
      'Las películas de seguridad refuerzan el vidrio manteniéndolo unido ante impactos. Disponibles transparentes o con ligera tonalidad, son ideales para vitrinas, ventanas de alto tráfico o vehículos.',
    specs: [
      { label: 'Espesor', value: '4–7 mil' },
      { label: 'Garantía', value: '8–10 años' },
      { label: 'Función', value: 'Retención de fragmentos' },
      { label: 'Aspecto', value: 'Transparente o tintado ligero' },
    ],
    color: 'blue',
  },
  {
    id: 'decorativas',
    Icon: FiFeather,
    title: 'Decorativas',
    tagline: 'Estética y privacidad sin oscurecer',
    description:
      'Transforma cualquier espacio con nuestras películas decorativas. Desde esmerilados clásicos hasta efectos dicróicos multicolor, la creatividad no tiene límites.',
    specs: [
      { label: 'Esmerilado', value: 'Privacidad sin perder luz' },
      { label: 'Dicróico tricolor', value: 'Efecto multicolor dinámico' },
      { label: 'Microperforado', value: 'Diseños personalizables' },
      { label: 'Garantía', value: '8–10 años' },
    ],
    color: 'purple',
  },
]

const colorMap = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', tag: 'bg-orange-100 text-orange-700', val: 'text-orange-600', icon: 'bg-orange-100' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   tag: 'bg-blue-100 text-blue-700',     val: 'text-blue-600',   icon: 'bg-blue-100' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', tag: 'bg-purple-100 text-purple-700', val: 'text-purple-600', icon: 'bg-purple-100' },
}

export default function FilmTypes() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="peliculas" className="py-14 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tipos de película"
          title="¿Qué es una película de ventana?"
          subtitle="Una lámina delgada y funcional que se adhiere al vidrio para mejorar sus propiedades. Estos son los tres tipos principales que ofrecemos."
        />

        {/* Desktop: grid cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {films.map((film) => {
            const c = colorMap[film.color]
            return (
              <Reveal key={film.id} delay={films.indexOf(film) * 90} className="h-full">
               <div className={`card card-hover ${c.bg} border ${c.border} p-8 h-full`}>
                <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center mb-5`}>
                  <film.Icon size={24} className={c.val} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${c.tag}`}>
                  {film.tagline}
                </span>
                <h3 className="text-xl font-bold text-ink-900 mt-3 mb-3">{film.title}</h3>
                <p className="text-ink-600 text-sm leading-relaxed mb-6">{film.description}</p>
                <div className="space-y-3">
                  {film.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center text-sm">
                      <span className="text-ink-500">{spec.label}</span>
                      <span className={`font-semibold ${c.val}`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
               </div>
              </Reveal>
            )
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-3">
          {films.map((film) => {
            const c = colorMap[film.color]
            const isOpen = openId === film.id
            return (
              <div key={film.id} className={`card border ${c.border} ${c.bg}`}>
                <button
                  onClick={() => setOpenId(isOpen ? null : film.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center`}>
                      <film.Icon size={19} className={c.val} />
                    </span>
                    <div>
                      <p className="font-bold text-ink-900">{film.title}</p>
                      <p className={`text-xs font-medium ${c.val}`}>{film.tagline}</p>
                    </div>
                  </div>
                  {isOpen ? <FiChevronUp className="text-ink-500" /> : <FiChevronDown className="text-ink-500" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-ink-100">
                    <p className="text-ink-600 text-sm leading-relaxed my-4">{film.description}</p>
                    <div className="space-y-2">
                      {film.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between text-sm">
                          <span className="text-ink-500">{spec.label}</span>
                          <span className={`font-semibold ${c.val}`}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
