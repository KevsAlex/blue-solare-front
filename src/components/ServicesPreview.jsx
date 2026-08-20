import { Link } from 'react-router-dom'
import { FiHome, FiTruck, FiArrowRight } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const services = [
  {
    icon: FiHome,
    title: 'Línea Arquitectónica',
    description: 'Películas para ventanas de hogares, oficinas y negocios. Control solar, privacidad, seguridad y diseño decorativo.',
    href: '/linea-arquitectonica',
    image: '/images/bajar_calor.jpg',
    items: ['Control Solar', 'Reflectivas', 'Polarizadas', 'Nanocerámica', 'Esmeriladas', 'Seguridad'],
  },
  {
    icon: FiTruck,
    title: 'Línea Automotriz',
    description: 'Polarizados y películas de alta tecnología para todo tipo de vehículos. Más frescura, privacidad y protección.',
    href: '/linea-automotriz',
    image: '/images/polarizada_20.jpg',
    items: ['No Reflectivo', 'Cerámica', 'Seguridad', 'Alto Desempeño'],
  },
]

export default function ServicesPreview() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Dos líneas, una misma exigencia"
          subtitle="Soluciones profesionales para cada espacio y necesidad."
        />

        <div className="grid md:grid-cols-2 gap-7">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 90}>
                <Link
                  to={service.href}
                  className="card card-hover group block h-full focus-visible:ring-2"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/25 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-ink-500 leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.items.map((item) => (
                        <span key={item} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 font-semibold text-sm text-primary-700">
                      Ver todos los productos
                      <FiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
