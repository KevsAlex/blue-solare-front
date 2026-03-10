import { FiHome, FiTruck, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: FiHome,
    title: 'Línea Arquitectónica',
    description: 'Películas para ventanas de hogares, oficinas y negocios. Control solar, privacidad, seguridad y diseño decorativo.',
    href: '/linea-arquitectonica',
    color: 'blue',
    items: ['Control Solar', 'Reflectivas', 'Polarizadas', 'Nanocerámica', 'Esmeriladas', 'Seguridad'],
  },
  {
    icon: FiTruck,
    title: 'Línea Automotriz',
    description: 'Polarizados y películas de alta tecnología para todo tipo de vehículos. Más frescura, privacidad y protección.',
    href: '/linea-automotriz',
    color: 'indigo',
    items: ['No Reflectivo', 'Cerámica', 'Seguridad', 'Alto Desempeño'],
  },
]

const colorMap = {
  blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-100 text-blue-600', btn: 'text-blue-600 hover:text-blue-700', tag: 'bg-blue-100 text-blue-700' },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-100 text-indigo-600', btn: 'text-indigo-600 hover:text-indigo-700', tag: 'bg-indigo-100 text-indigo-700' },
}

export default function ServicesPreview() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto">
            Soluciones profesionales para cada espacio y necesidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            const c = colorMap[service.color]
            return (
              <div key={service.title} className={`card ${c.bg} p-8`}>
                <div className={`w-12 h-12 ${c.icon} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {service.items.map((item) => (
                    <span key={item} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.tag}`}>
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={service.href}
                  className={`inline-flex items-center gap-2 font-semibold text-sm ${c.btn} transition-colors`}
                >
                  Ver todos los productos <FiArrowRight size={16} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
