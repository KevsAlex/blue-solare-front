import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const steps = [
  { n: '01', title: 'Medición de ventanas', description: 'Agendamos una visita para tomar medidas exactas, o envíanos fotos para una estimación inicial.' },
  { n: '02', title: 'Cotización personalizada', description: 'Cotización detallada según tipo de película, área a cubrir y necesidades específicas.' },
  { n: '03', title: 'Confirmación del pedido', description: 'Aceptada la propuesta, confirmamos con un anticipo del 50% para adquirir el material.' },
  { n: '04', title: 'Agendamos la instalación', description: 'Coordinamos fecha y hora que mejor se adapten a tu agenda.' },
  { n: '05', title: 'Instalación profesional', description: 'Técnicos certificados instalan de manera limpia, rápida y profesional.' },
  { n: '06', title: 'Inspección final', description: 'Revisamos juntos el trabajo terminado hasta que quede a tu entera satisfacción.' },
  { n: '07', title: 'Liquidación del saldo', description: 'Sólo cuando estés conforme con el resultado se cubre el saldo restante.' },
]

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo trabajamos"
          subtitle="Un proceso claro y transparente, de principio a fin. Pagas el saldo sólo cuando estás conforme."
        />

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          <Reveal className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-lift border border-ink-100 sticky top-28">
              <img src="/images/contratacion.jpg" alt="Proceso de contratación BluSolare"
                   loading="lazy" className="w-full h-[380px] object-cover" />
            </div>
          </Reveal>

          {/* Vertical timeline */}
          <ol className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-300 via-primary-200 to-transparent" aria-hidden="true" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 55}>
                <li className="relative flex gap-5 pb-7 last:pb-0">
                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-xl bg-white border-2 border-primary-200 text-primary-700 font-black text-xs flex items-center justify-center shadow-soft">
                    {s.n}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-ink-900 leading-tight">{s.title}</h3>
                    <p className="text-ink-500 text-sm leading-relaxed mt-1.5">{s.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="text-center mt-14">
          <Link to="/cotiza" className="btn-primary text-base px-8 py-4">
            Comenzar mi cotización <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
