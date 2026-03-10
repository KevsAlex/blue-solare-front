import { useState } from 'react'
import { FiMail, FiPhone, FiMessageCircle, FiSend, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you'd integrate with a real backend / email service
    setSent(true)
  }

  const whatsappMsg = encodeURIComponent(
    'Hola! Me interesa cotizar una película para mis ventanas. ¿Pueden ayudarme?'
  )

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-br from-brand-dark to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info */}
          <div>
            <img
              src="/images/logo.png"
              alt="BluSolare"
              className="h-10 w-auto object-contain mb-5 brightness-0 invert opacity-80"
            />
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Cotiza tu proyecto{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                hoy mismo
              </span>
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed">
              Contáctanos y recibe una cotización personalizada sin compromiso. Atendemos hogares,
              negocios y vehículos en Querétaro.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: FiPhone,
                  label: 'Teléfono',
                  value: '(442) 448-8516',
                  href: 'tel:+524424488516',
                },
                {
                  icon: FiMail,
                  label: 'Correo',
                  value: 'contacto@blusolare.com',
                  href: 'mailto:contacto@blusolare.com',
                },
                {
                  icon: FiMapPin,
                  label: 'Ubicación',
                  value: 'Querétaro, México',
                  href: null,
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-300" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-blue-300 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/524424488516?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-lg"
            >
              <FiMessageCircle size={22} />
              Cotizar por WhatsApp
            </a>

            {/* Payments */}
            <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-white/60 text-sm font-medium mb-2">Métodos de pago</p>
              <p className="text-white/80 text-sm">
                Tarjeta de débito/crédito · Transferencia · Hasta{' '}
                <span className="text-blue-300 font-semibold">24 MSI</span> en tarjetas participantes
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500">
                  Gracias por contactarnos. Te responderemos a la brevedad posible.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Solicita tu cotización</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="442 000 0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de servicio</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors bg-white"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="residencial">Residencial / Hogar</option>
                      <option value="comercial">Comercial / Oficina</option>
                      <option value="automotriz">Automotriz / Vehículo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto, dimensiones aproximadas, tipo de película que te interesa..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    <FiSend size={18} />
                    Enviar cotización
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Al enviar aceptas nuestra política de privacidad. No hacemos spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
