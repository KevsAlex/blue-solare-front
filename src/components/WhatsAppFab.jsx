import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiX, FiMessageSquare, FiTag, FiCalendar, FiShield } from 'react-icons/fi'
import { waLink } from '../data/films'

/**
 * WhatsApp is BluSolare's actual sales channel, so it gets a persistent entry
 * point — but with shortcuts, so the first message already says what the person
 * wants instead of a bare "hola".
 */
const OPTIONS = [
  { Icon: FiTag,           label: 'Cotizar mi proyecto', msg: 'Hola! Quiero cotizar peliculas para mis ventanas.' },
  { Icon: FiMessageSquare, label: 'Precios y películas', msg: 'Hola! Me gustaria conocer los precios y tipos de pelicula que manejan.' },
  { Icon: FiCalendar,      label: 'Agendar medición',    msg: 'Hola! Quiero agendar una visita para medir mis ventanas.' },
  { Icon: FiShield,        label: 'Garantía o soporte',  msg: 'Hola! Tengo una consulta sobre una instalacion ya realizada.' },
]

export default function WhatsAppFab() {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click and on Escape — a panel that traps the user is worse
  // than no panel.
  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <div
      ref={wrapRef}
      className={`fixed z-40 bottom-5 right-5 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Panel */}
      <div
        id="wa-panel"
        className={`w-[270px] rounded-2xl overflow-hidden bg-white shadow-lift border border-ink-100 origin-bottom-right
                    transition-all duration-300 ${
          open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-3 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-2 bg-[#25D366] px-4 py-3">
          <span className="flex items-center gap-2 text-white font-semibold text-sm">
            <FaWhatsapp size={17} /> ¿Cómo podemos ayudarte?
          </span>
          <button onClick={() => setOpen(false)} aria-label="Cerrar" className="text-white/85 hover:text-white p-0.5">
            <FiX size={17} />
          </button>
        </div>
        <div className="p-2">
          {OPTIONS.map(({ Icon, label, msg }, i) => (
            <a
              key={label}
              href={waLink(msg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : '0ms' }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-700
                          hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 ${
                open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
              }`}
            >
              <span className="w-8 h-8 rounded-lg bg-ink-50 text-ink-500 flex items-center justify-center shrink-0">
                <Icon size={15} />
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Cerrar menú de WhatsApp' : 'Escríbenos por WhatsApp'}
        aria-expanded={open}
        aria-controls="wa-panel"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white
                   shadow-lift transition-all duration-300 hover:brightness-105 hover:scale-105 active:scale-95"
      >
        {/* Attention pulse, only while the panel is closed */}
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />}
        <span className={`transition-transform duration-300 ${open ? 'rotate-90 scale-90' : ''}`}>
          {open ? <FiX size={24} /> : <FaWhatsapp size={27} />}
        </span>
      </button>
    </div>
  )
}
