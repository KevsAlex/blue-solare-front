import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const films = [
  {
    id: 'calor',
    emoji: '🌡️',
    title: 'Reducción de Calor',
    tagline: 'Hasta 80% de rechazo solar',
    image: '/images/bajar_calor.jpg',
    imageAlt: 'Sala con ventanas y película de control solar BluSolare',
    description:
      'Nuestras películas de control solar son la solución más eficiente para combatir el calor. Disponibles en versiones reflectivas y cerámicas para cada necesidad.',
    specs: [
      { label: 'Rechazo de energía solar', value: 'Hasta 80%' },
      { label: 'Bloqueo de rayos UV', value: '99%' },
      { label: 'Rechazo infrarrojo', value: 'Hasta 84%' },
      { label: 'Vida útil', value: '8–10 años' },
    ],
    color: 'orange',
  },
  {
    id: 'seguridad',
    emoji: '🛡️',
    title: 'Seguridad',
    tagline: 'Protección ante impactos',
    description:
      'Las películas de seguridad refuerzan el vidrio manteniéndolo unido ante impactos. Disponibles transparentes o con ligera tonalidad, son ideales para vitrinas, ventanas de alto tráfico o vehículos.',
    specs: [
      { label: 'Espesor', value: '4–7 micras' },
      { label: 'Vida útil', value: '10–12 años' },
      { label: 'Función', value: 'Retención de fragmentos' },
      { label: 'Aspecto', value: 'Transparente o tintado ligero' },
    ],
    color: 'blue',
  },
  {
    id: 'decorativas',
    emoji: '✨',
    title: 'Decorativas',
    tagline: 'Estética y privacidad sin oscurecer',
    description:
      'Transforma cualquier espacio con nuestras películas decorativas. Desde esmerilados clásicos hasta efectos dicróicos multicolor, la creatividad no tiene límites.',
    specs: [
      { label: 'Esmerilado', value: 'Privacidad sin perder luz' },
      { label: 'Dicróico tricolor', value: 'Efecto multicolor dinámico' },
      { label: 'Microperforado', value: 'Diseños personalizables' },
      { label: 'Vida útil', value: '5–8 años' },
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
    <section id="peliculas" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">¿Qué es una película de ventana?</h2>
          <p className="section-subtitle mx-auto">
            Una lámina delgada y funcional que se adhiere al vidrio para mejorar sus propiedades.
            Conoce los tres tipos principales que ofrecemos.
          </p>
        </div>

        {/* Desktop: grid cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {films.map((film) => {
            const c = colorMap[film.color]
            return (
              <div key={film.id} className={`card ${c.bg} border ${c.border} p-8`}>
                <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                  {film.emoji}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${c.tag}`}>
                  {film.tagline}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-3">{film.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{film.description}</p>
                <div className="space-y-3">
                  {film.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className={`font-semibold ${c.val}`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                    <span className="text-2xl">{film.emoji}</span>
                    <div>
                      <p className="font-bold text-gray-900">{film.title}</p>
                      <p className={`text-xs font-medium ${c.val}`}>{film.tagline}</p>
                    </div>
                  </div>
                  {isOpen ? <FiChevronUp className="text-gray-500" /> : <FiChevronDown className="text-gray-500" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed my-4">{film.description}</p>
                    <div className="space-y-2">
                      {film.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between text-sm">
                          <span className="text-gray-500">{spec.label}</span>
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
