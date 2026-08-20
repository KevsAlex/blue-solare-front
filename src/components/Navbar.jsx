import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiInstagram, FiFacebook, FiMail, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Arquitectónica', href: '/linea-arquitectonica' },
  { label: 'Automotriz', href: '/linea-automotriz' },
  { label: '¿Qué es una película?', href: '/que-es-una-pelicula' },
]

const social = [
  { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: SiTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: FiMail, href: 'mailto:contacto@blusolare.com', label: 'Email' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Prevent the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-soft border-b border-ink-100'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'h-16' : 'h-[72px]'}`}>
          <Link to="/" className="flex-shrink-0" aria-label="BluSolare — inicio">
            <img
              src="/images/logo.png"
              alt="BluSolare"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors ${
                    active ? 'text-primary-700' : 'text-ink-500 hover:text-primary-700 hover:bg-primary-50/60'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary-600 transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-ink-300 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
            <Link to="/cotiza" className="btn-primary ml-2 px-5 py-2.5 text-sm">
              Cotiza aquí <FiArrowRight size={15} />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 rounded-lg text-ink-600 hover:bg-ink-100"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-ink-100 transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-2">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center justify-between py-3.5 text-[15px] font-medium border-b border-ink-50 last:border-0 ${
                  active ? 'text-primary-700' : 'text-ink-600'
                }`}
              >
                {link.label}
                <FiArrowRight size={15} className="text-ink-300" />
              </Link>
            )
          })}
        </nav>
        <div className="px-4 pb-4">
          <Link to="/cotiza" className="btn-primary w-full py-3.5">
            Cotiza aquí <FiArrowRight size={15} />
          </Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-4 border-t border-ink-100">
          {social.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
               aria-label={label} className="p-2 text-ink-400 hover:text-primary-700">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
