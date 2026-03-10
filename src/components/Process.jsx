import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Medición de ventanas',
    description: 'Agendamos una visita para tomar las medidas exactas de tus ventanas o envianos fotos para una estimación inicial.',
    icon: '📐',
  },
  {
    number: '02',
    title: 'Cotización personalizada',
    description: 'Generamos una cotización detallada según el tipo de película, área a cubrir y necesidades específicas.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Confirmación del pedido',
    description: 'Una vez aceptada la propuesta, confirmamos el pedido con un anticipo del 50% para la adquisición del material.',
    icon: '✅',
  },
  {
    number: '04',
    title: 'Agendamos la instalación',
    description: 'Coordinamos fecha y hora que mejor se adapte a tu agenda para la instalación.',
    icon: '📅',
  },
  {
    number: '05',
    title: 'Instalación profesional',
    description: 'Nuestros técnicos certificados realizan la instalación de manera limpia, rápida y profesional.',
    icon: '🛠️',
  },
  {
    number: '06',
    title: 'Inspección final',
    description: 'Revisamos juntos el trabajo terminado para asegurarnos de que todo quede perfecto y a tu satisfacción.',
    icon: '🔍',
  },
  {
    number: '07',
    title: 'Liquidación del saldo',
    description: 'Una vez que estés satisfecho con el resultado, se cubre el saldo restante. ¡Así de sencillo!',
    icon: '💳',
  },
]

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">¿Cómo trabajamos?</h2>
          <p className="section-subtitle mx-auto">
            Un proceso claro y transparente para que tengas la mejor experiencia de principio a fin.
          </p>
        </div>

        {/* Process image */}
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-12">
          <img
            src="/images/contratacion.jpg"
            alt="Proceso de contratación BluSolare"
            className="w-full h-auto object-cover max-h-64"
          />
        </div>

        {/* Step details */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-4 items-start p-5 bg-brand-light rounded-2xl border border-blue-100"
            >
              <div className="w-12 h-12 bg-white border-2 border-blue-200 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                {step.icon}
              </div>
              <div>
                <span className="text-xs font-black text-brand-blue/50 tracking-widest uppercase">
                  Paso {step.number}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mt-0.5 mb-1 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/cotiza" className="btn-primary text-base px-8 py-4">
            Comenzar mi cotización
          </Link>
        </div>
      </div>
    </section>
  )
}
