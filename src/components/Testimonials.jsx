import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Adela Zerón',
    role: 'Cliente Residencial',
    text: 'Fueron muy puntuales y la aplicación, muy rápida. El resultado superó mis expectativas, mi casa está mucho más fresca ahora.',
    stars: 5,
    initials: 'AZ',
    color: 'bg-blue-500',
  },
  {
    name: 'Gabriela Ruiz',
    role: 'Cliente Residencial',
    text: 'Super rápido la instalación, muy puntual y atento. Muy profesionales y dejaron todo limpio. ¡Totalmente recomendados!',
    stars: 5,
    initials: 'GR',
    color: 'bg-purple-500',
  },
  {
    name: 'Ricardo Ortiz',
    role: 'Cliente Comercial',
    text: 'La instalación fue rápida, limpia y el resultado se nota de inmediato. La oficina está mucho más fresca y se ve muy profesional.',
    stars: 5,
    initials: 'RO',
    color: 'bg-teal-500',
  },
  {
    name: 'Mónica Hdz',
    role: 'Cliente Automotriz',
    text: 'Llevé mi carro para el polarizado y quedé encantada. El servicio fue excelente y el precio muy justo. Sin duda lo recomiendo.',
    stars: 5,
    initials: 'MH',
    color: 'bg-pink-500',
  },
  {
    name: 'Luis Pérez',
    role: 'Cliente Residencial',
    text: 'Excelente servicio. Vinieron a tiempo, trabajaron muy limpio y el resultado es increíble. Se redujo mucho el calor en mi cuarto.',
    stars: 5,
    initials: 'LP',
    color: 'bg-orange-500',
  },
  {
    name: 'Carmen Soto',
    role: 'Cliente Comercial',
    text: 'Pusieron película en toda la fachada de nuestra tienda y la diferencia es notable. Menos calor, mejor imagen y ahorramos en electricidad.',
    stars: 5,
    initials: 'CS',
    color: 'bg-indigo-500',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle mx-auto">
            Más de cientos de instalaciones exitosas en Querétaro. La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card bg-white p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
