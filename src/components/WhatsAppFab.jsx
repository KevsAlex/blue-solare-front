import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

/**
 * Floating WhatsApp action. WhatsApp is this business's actual sales channel —
 * the cotizador and the contact form both end there — so it earns a persistent
 * entry point. Appears after a little scrolling so it never competes with the
 * hero's primary CTA.
 */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const msg = encodeURIComponent('Hola! Me interesa cotizar una pelicula para mis ventanas.')

  return (
    <a
      href={`https://wa.me/524424488516?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`fixed z-40 bottom-5 right-5 flex items-center gap-2.5 rounded-full bg-[#25D366] text-white
                  pl-4 pr-5 py-3.5 shadow-lift font-semibold text-sm
                  transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5
                  ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <FaWhatsapp size={21} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
