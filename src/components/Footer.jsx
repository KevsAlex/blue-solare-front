import { Link } from 'react-router-dom'
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiPhone,
} from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Línea Arquitectónica', href: '/linea-arquitectonica' },
  { label: 'Línea Automotriz', href: '/linea-automotriz' },
  { label: '¿Qué es una película?', href: '/que-es-una-pelicula' },
  { label: 'Cotiza aquí', href: '/cotiza' },
]

const social = [
  { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: SiTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: FiMail, href: 'mailto:contacto@blusolare.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="BluSolare logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Innovación y protección para tus cristales. Películas de alto rendimiento para hogares,
              oficinas y vehículos en Querétaro.
            </p>
            <div className="flex gap-3 mt-6">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/50">
                <FiPhone size={14} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+524424488516" className="hover:text-white transition-colors">
                  (442) 448-8516
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <FiMail size={14} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:contacto@blusolare.com" className="hover:text-white transition-colors">
                  contacto@blusolare.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/70 text-xs font-medium mb-1">Área de servicio</p>
              <p className="text-white/50 text-sm">Querétaro, México</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© {year} BluSolare. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-5">
            {['Términos y condiciones', 'Aviso de privacidad', 'Política de devoluciones'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
