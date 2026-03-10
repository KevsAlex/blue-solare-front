import { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi'

const faqs = [
  {
    q: '¿Cuánto dura la película una vez instalada?',
    a: 'Nuestras películas tienen una vida útil de 8 a 10 años, dependiendo de la exposición solar, el tipo de película y su mantenimiento. Utilizamos materiales de alta calidad para asegurar durabilidad.',
  },
  {
    q: '¿Qué tanto reduce el calor la película de control solar?',
    a: 'Las películas solares pueden reducir hasta el 80% del calor que entra por los cristales, haciendo tus espacios más frescos y ayudándote a ahorrar en aire acondicionado.',
  },
  {
    q: '¿La instalación daña los vidrios o los muros?',
    a: 'No. La instalación es limpia, profesional y sin perforaciones. Utilizamos adhesivos diseñados para cristales que no dañan ni los marcos ni los muros.',
  },
  {
    q: '¿Cómo se limpian los vidrios con película?',
    a: 'Solo necesitas agua y jabón neutro aplicados con un paño suave. No uses limpiadores abrasivos ni fibras duras para evitar rayones.',
  },
  {
    q: '¿La película de seguridad realmente evita robos?',
    a: 'No impide el robo por sí sola, pero refuerza el cristal y dificulta su rotura, reteniendo los fragmentos. Es una barrera efectiva de protección adicional.',
  },
  {
    q: '¿Puedo aplicar películas en vidrios ya instalados?',
    a: 'Sí. Todas nuestras películas pueden instalarse sobre vidrios existentes, sin necesidad de reemplazarlos.',
  },
  {
    q: '¿Tienen garantía?',
    a: 'Sí. Ofrecemos garantía tanto por desprendimiento o burbujas como por defectos del material, de acuerdo con el tipo de película.',
  },
  {
    q: '¿Necesito saber las medidas exactas para cotizar?',
    a: 'No es indispensable. Puedes enviarnos un estimado y una foto. Nuestro equipo puede ayudarte o incluso agendar una visita técnica gratuita.',
  },
  {
    q: '¿Dónde atienden?',
    a: 'Atendemos Querétaro y alrededores. Puedes contactarnos para confirmar si llegamos a tu zona.',
  },
]

const features = [
  { icon: '☀️', title: 'Control Solar', desc: 'Filtra el calor y los rayos UV sin sacrificar la luz natural.' },
  { icon: '🔒', title: 'Privacidad', desc: 'Opciones desde tono ligero hasta opaco para cada necesidad.' },
  { icon: '🛡️', title: 'Seguridad', desc: 'Refuerza el vidrio y retiene fragmentos ante impactos.' },
  { icon: '✨', title: 'Estética', desc: 'Acabados decorativos, esmerilados y dicróicos para diseño interior.' },
  { icon: '🌿', title: 'Protección UV', desc: 'Hasta 99–100% de bloqueo de rayos ultravioleta.' },
  { icon: '⚡', title: 'Eficiencia energética', desc: 'Reduce el consumo de aire acondicionado y la factura eléctrica.' },
]

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.q}</span>
        {open ? (
          <FiChevronUp className="text-brand-blue flex-shrink-0" size={20} />
        ) : (
          <FiChevronDown className="text-gray-400 flex-shrink-0" size={20} />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 bg-brand-light border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function QueEsUnaPelicula() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-primary-900 to-primary-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            ¿Qué es una{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              película para cristales?
            </span>
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Un laminado delgado que se instala sobre el vidrio para mejorar su funcionalidad, rendimiento y estética.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Visual */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/pelicula_ventana.jpg"
                  alt="Mano despegando una película de cristal - PELÍCULA sobre VENTANA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tag */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span className="text-sm font-semibold text-gray-700">No daña el vidrio</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="section-title mb-5">Tecnología delgada, beneficios enormes</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Las películas para cristales son <strong className="text-gray-900">laminados delgados</strong> que
                  se instalan sobre la superficie del vidrio con el objetivo de mejorar su funcionalidad y rendimiento.
                </p>
                <p>
                  Están fabricadas con capas de <strong className="text-gray-900">poliéster tratado, metales reflectivos
                  o nanopartículas cerámicas</strong>, dependiendo del tipo de película.
                </p>
                <p>
                  Se instalan por la <strong className="text-gray-900">cara interior del cristal</strong> y no dañan
                  el vidrio original.
                </p>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-3 items-start p-3 bg-brand-light rounded-xl">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                      <p className="text-gray-500 text-xs leading-tight mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="section-subtitle mx-auto">
              Todo lo que necesitas saber antes de instalar una película.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900">¿Listo para transformar tus espacios?</h2>
          <p className="mt-4 text-gray-500 text-lg">
            Cotiza sin compromiso. Atendemos Querétaro y zona metropolitana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/#contacto" className="btn-primary px-8 py-4 text-base">
              Solicitar cotización <FiArrowRight />
            </a>
            <a
              href={`https://wa.me/524424488516?text=${encodeURIComponent('Hola! Quiero más información sobre películas para cristales.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4 text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
