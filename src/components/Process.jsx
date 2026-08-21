import { Link } from 'react-router-dom'
import { FiArrowRight, FiMaximize, FiFileText, FiTool, FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

/**
 * The seven-step list this replaced read as a lot of work — which is the exact
 * opposite of the message. The same seven steps are still all here, grouped into
 * four phases so the shape of the job is legible at a glance, with the detail
 * demoted to a sub-line.
 *
 * The old illustration was dropped: it is a wide marketing diagram, and cropping
 * it into a square panel sliced the arrows in half.
 */
const PHASES = [
  {
    n: '01',
    Icon: FiMaximize,
    title: 'Medimos',
    lead: 'Visitamos y tomamos medidas exactas. ¿Prefieres rapidez? Mándanos fotos.',
    detail: 'Medición de ventanas · Cotización personalizada',
  },
  {
    n: '02',
    Icon: FiFileText,
    title: 'Confirmas',
    lead: 'Aceptas la propuesta con 50% de anticipo y agendamos a tu horario.',
    detail: 'Confirmación del pedido · Fecha de instalación',
  },
  {
    n: '03',
    Icon: FiTool,
    title: 'Instalamos',
    lead: 'Técnicos certificados, trabajo limpio y normalmente en el mismo día.',
    detail: 'Instalación profesional',
  },
  {
    n: '04',
    Icon: FiCheckCircle,
    title: 'Apruebas',
    lead: 'Revisamos juntos el resultado. El saldo se paga sólo si quedas conforme.',
    detail: 'Inspección final · Liquidación',
  },
]

export default function Process() {
  return (
    <section className="py-14 lg:py-20 bg-ink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proceso"
          title="Cuatro pasos. Sin sorpresas."
          subtitle="Así de simple es trabajar con nosotros, de la primera medida a la instalación terminada."
        />

        <div className="relative">
          {/* Connector. Grows left-to-right as the row reveals, so the eye is
              pulled through the sequence instead of reading four separate cards.
              Hidden on mobile, where the layout stacks vertically. */}
          <div
            className="hidden lg:block absolute top-[38px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r
                       from-primary-200 via-primary-400 to-primary-200 origin-left animate-[grow_1.2s_.25s_both]"
            aria-hidden="true"
          />

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={i * 130}>
                <li className="group h-full flex flex-col items-center text-center">
                  {/* Icon medallion */}
                  <div className="relative mb-5">
                    <span className="absolute inset-0 rounded-2xl bg-primary-400/25 blur-lg opacity-0
                                     group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    <span className="relative flex items-center justify-center w-[76px] h-[76px] rounded-2xl
                                     bg-white border-2 border-primary-100 text-primary-700 shadow-soft
                                     transition-all duration-300
                                     group-hover:border-primary-500 group-hover:-translate-y-1 group-hover:shadow-lift">
                      <p.Icon size={28} />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-600 text-white
                                       text-[11px] font-black flex items-center justify-center shadow-glow
                                       transition-transform duration-300 group-hover:scale-110">
                        {p.n}
                      </span>
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-ink-900">{p.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed mt-2 max-w-[15rem]">{p.lead}</p>
                  <p className="text-[11px] text-ink-400 mt-3 uppercase tracking-wide">{p.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* The commercial promise, stated plainly — it is the strongest thing in
            the whole process and was previously buried as step 07. */}
        <Reveal delay={560}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800
                          bg-primary-50 border border-primary-100 rounded-full px-5 py-2.5">
              <FiCheckCircle size={16} />
              50% al confirmar · 50% sólo cuando quedes conforme
            </p>
            <Link to="/cotiza" className="btn-primary text-base px-8 py-4">
              Comenzar mi cotización <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
