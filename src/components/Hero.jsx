import { Link } from 'react-router-dom'
import { FiArrowRight, FiSun } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-dark via-primary-900 to-primary-800 overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-700/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <FiSun className="text-yellow-400" size={16} />
              <span className="text-white/90 text-sm font-medium">Querétaro, México</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Innovación y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                protección
              </span>{' '}
              para tus cristales
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
              Embellecemos y protegemos tus espacios mediante películas de alto rendimiento para hogares,
              oficinas y vehículos. Reducción de calor, privacidad y seguridad garantizados.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/cotiza" className="btn-primary text-base px-8 py-4">
                Cotiza aquí <FiArrowRight />
              </Link>
              <Link to="/que-es-una-pelicula" className="btn-outline border-white/40 text-white hover:bg-white hover:text-brand-dark text-base px-8 py-4">
                ¿Qué es una película?
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {[
                { value: '80%', label: 'Reducción de calor solar' },
                { value: '99%', label: 'Bloqueo de rayos UV' },
                { value: '10+', label: 'Años de durabilidad' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/pelicula_ventana.jpg"
                  alt="Mano instalando película en ventana - BluSolare"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-2xl px-4 py-2 font-bold text-sm shadow-lg">
                #1 en Querétaro
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span className="text-gray-700 text-sm font-semibold">Instalación profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 720 0 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
