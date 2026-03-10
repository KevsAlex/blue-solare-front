import { FiHome, FiTruck, FiCheckCircle } from 'react-icons/fi'

const services = [
  {
    id: 'arquitectonica',
    icon: FiHome,
    tag: 'Línea Arquitectónica',
    title: 'Hogares y Negocios',
    description:
      'Transforma tus espacios con películas de alto rendimiento. Ideal para ventanas de casas, oficinas y negocios en Querétaro.',
    items: [
      {
        title: 'Negocios y Oficinas',
        description:
          'Eficiencia energética y estética profesional. Reduce el deslumbramiento, mejora la imagen corporativa y protege tu mobiliario del sol.',
        benefits: ['Ahorro energético', 'Imagen corporativa', 'Protección de interiores', 'Reducción de deslumbramiento'],
        color: 'blue',
      },
      {
        title: 'Hogares',
        description:
          'Confort, privacidad y protección para tu familia. Reduce el calor, bloquea los rayos UV y mejora la privacidad sin sacrificar la luz natural.',
        benefits: ['Reducción de calor', 'Bloqueo UV al 99%', 'Privacidad', 'Luz natural preservada'],
        color: 'indigo',
      },
    ],
  },
  {
    id: 'automotriz',
    icon: FiTruck,
    tag: 'Línea Automotriz',
    title: 'Vehículos',
    description:
      'Protege tu vehículo y a sus ocupantes con nuestras películas automotrices de última generación.',
    items: [
      {
        title: 'Polarizado No Reflectivo',
        description: 'Estética limpia y discreta, sin reflejos molestos. Ideal para quienes buscan privacidad con un look sobrio.',
        benefits: ['Sin reflejos', 'Privacidad', 'Reducción de calor', 'UV Protection'],
        color: 'sky',
      },
      {
        title: 'Cerámica',
        description: 'La mejor tecnología en control solar. Máximo rechazo de calor e infrarrojos sin interferir con señales GPS ni celular.',
        benefits: ['84% rechazo infrarrojo', 'Sin interferencia GPS', 'Máxima claridad', 'Larga duración'],
        color: 'cyan',
      },
      {
        title: 'Película de Seguridad',
        description: 'Mantiene los fragmentos de vidrio unidos en caso de impacto. Protección extra para ti y tus acompañantes.',
        benefits: ['Retención de fragmentos', 'Anti-robo', 'Seguridad en accidentes', 'Transparente'],
        color: 'teal',
      },
    ],
  },
]

const colorMap = {
  blue:   { bg: 'bg-blue-50',   icon: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',   check: 'text-blue-500' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700', check: 'text-indigo-500' },
  sky:    { bg: 'bg-sky-50',    icon: 'text-sky-600',    badge: 'bg-sky-100 text-sky-700',      check: 'text-sky-500' },
  cyan:   { bg: 'bg-cyan-50',   icon: 'text-cyan-600',   badge: 'bg-cyan-100 text-cyan-700',    check: 'text-cyan-500' },
  teal:   { bg: 'bg-teal-50',   icon: 'text-teal-600',   badge: 'bg-teal-100 text-teal-700',    check: 'text-teal-500' },
}

export default function Services() {
  return (
    <>
      {services.map((service) => {
        const Icon = service.icon
        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 lg:py-28 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-brand-light border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                  <Icon className="text-brand-blue" size={16} />
                  <span className="text-brand-blue text-sm font-semibold">{service.tag}</span>
                </div>
                <h2 className="section-title">{service.title}</h2>
                <p className="section-subtitle mx-auto">{service.description}</p>
              </div>

              {/* Cards */}
              <div className={`grid gap-6 ${service.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {service.items.map((item) => {
                  const c = colorMap[item.color]
                  return (
                    <div key={item.title} className={`card p-7 ${c.bg} border border-transparent hover:border-blue-100`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.description}</p>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                            <FiCheckCircle className={`${c.check} flex-shrink-0`} size={16} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              <div className="text-center mt-10">
                <a href="#contacto" className="btn-primary">
                  Cotizar {service.tag}
                </a>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
