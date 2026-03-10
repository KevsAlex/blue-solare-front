import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiInstagram, FiFacebook, FiMail, FiLinkedin, FiGlobe } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Línea Arquitectónica', href: '/linea-arquitectonica' },
  { label: 'Línea Automotriz', href: '/linea-automotriz' },
  { label: 'Cotiza aquí', href: '/cotiza' },
  { label: '¿Qué es una película?', href: '/que-es-una-pelicula' },
]

const social = [
  { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FiMail, href: 'mailto:contacto@blusolare.com', label: 'Email' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: SiTiktok, href: 'https://tiktok.com', label: 'TikTok' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="BluSolare - Películas de control solar"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav — center */}
          <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 border-b-2 ${
                  pathname === link.href
                    ? 'text-[#1a56db] border-[#1a56db]'
                    : 'text-gray-600 border-transparent hover:text-[#1a56db] hover:border-[#1a56db]/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: social icons + language */}
          <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-lg"
              >
                <Icon size={17} />
              </a>
            ))}
            <div className="ml-2 flex items-center gap-1 text-gray-500 text-sm border border-gray-200 rounded-lg px-2 py-1.5 cursor-default">
              <FiGlobe size={14} />
              <span className="text-xs font-medium">Español</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`block py-3 text-sm font-medium border-b border-gray-50 last:border-0 ${
                  pathname === link.href ? 'text-[#1a56db]' : 'text-gray-600 hover:text-[#1a56db]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile social */}
          <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-1.5 text-gray-400 hover:text-gray-700"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
