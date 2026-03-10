import { FiCheckCircle, FiArrowRight, FiSun, FiShield, FiFeather } from 'react-icons/fi'

const categories = [
  {
    id: 'control-solar',
    label: 'Control Solar',
    icon: FiSun,
    color: 'amber',
    image: '/images/bajar_calor.jpg',
    imageAlt: 'Sala con ventanas amplias mostrando reducción de calor solar - BluSolare',
    films: [
      {
        id: 'control-solar-reflectiva',
        title: 'Película de Control Solar',
        subtitle: 'Reflectiva',
        image: '/images/control_reflectiva.jpg',
        description:
          'Películas de alta tecnología diseñadas para reducir el calor excesivo y bloquear hasta el 99% de los rayos ultravioleta, sin sacrificar la luz natural.',
        benefits: [
          { stat: '80%', label: 'Reducción de calor', detail: 'Sin necesidad de aire acondicionado constante.' },
          { stat: '99%', label: 'Bloqueo UV', detail: 'Protege muebles y superficies.' },
          { stat: '84%', label: 'Rechazo IR', detail: 'Bloqueo de infrarrojos.' },
          { stat: '8-10', label: 'Años de vida útil', detail: 'Material de alta durabilidad.' },
        ],
      },
      {
        id: 'plata-humo',
        title: 'Película Plata / Humo',
        subtitle: 'Reflectiva',
        image: '/images/plata_humo.jpg',
        description:
          'Película reflectiva que combina un acabado espejo exterior (plata) con un tono humo interior. Privacidad diurna con efecto moderno y elegante.',
        benefits: [
          { stat: '62%', label: 'Rechazo solar (TSER)', detail: 'Alta eficiencia en control térmico.' },
          { stat: '100%', label: 'Bloqueo UV', detail: 'Protección completa para interiores.' },
          { stat: '83%', label: 'Bloqueo IR', detail: 'Rechazo de infrarrojos.' },
          { stat: '20%', label: 'VLT', detail: 'Tono Plata/Humo vista interior.' },
        ],
      },
      {
        id: 'polarizada-05',
        title: 'Película Polarizada 05%',
        subtitle: 'Alto Desempeño',
        image: '/images/polarizada_05.jpg',
        description:
          'Máxima privacidad y control solar. Su tono oscuro bloquea gran parte del calor y reduce notablemente el ingreso de luz.',
        benefits: [
          { stat: '72%', label: 'Rechazo solar (TSER)', detail: 'Perfecta para espacios muy soleados.' },
          { stat: '100%', label: 'Bloqueo UV', detail: 'Protege pisos, muebles y cortinas.' },
          { stat: '95%', label: 'Bloqueo IR', detail: 'Máximo rechazo de infrarrojos.' },
          { stat: '6%', label: 'VLT', detail: 'Tono Humo · Espesor 1.5 mil.' },
        ],
      },
      {
        id: 'polarizada-20',
        title: 'Película Polarizada 20%',
        subtitle: 'Alto Desempeño',
        image: '/images/polarizada_20.jpg',
        description:
          'Reduce el resplandor y mejora la visibilidad al filtrar una parte significativa de la luz solar. Balance perfecto entre protección y luminosidad.',
        benefits: [
          { stat: '56%', label: 'Rechazo solar (TSER)', detail: 'Control térmico eficiente.' },
          { stat: '99%', label: 'Bloqueo UV', detail: 'Protección casi total contra rayos UV.' },
          { stat: '77%', label: 'Bloqueo IR', detail: 'Reducción de infrarrojos.' },
          { stat: '22%', label: 'VLT reducido', detail: 'Hogares, oficinas y negocios.' },
        ],
      },
      {
        id: 'polarizada-35',
        title: 'Película Polarizada 35%',
        subtitle: 'Alto Desempeño',
        image: '/images/polarizada_35.jpg',
        description:
          'Película polarizada clara con tono humo para quienes buscan protección solar sin perder luminosidad. Ideal para espacios corporativos y residencias.',
        benefits: [
          { stat: '51%', label: 'Rechazo solar (TSER)', detail: 'Buena entrada de luz y protección.' },
          { stat: '100%', label: 'Bloqueo UV', detail: 'Protege eficazmente todo el interior.' },
          { stat: '66%', label: 'Bloqueo IR', detail: 'VLT 33% · Tono Humo.' },
          { stat: '1mil', label: 'Espesor', detail: 'Espacios corporativos y residencias.' },
        ],
      },
      {
        id: 'nanoceramica',
        title: 'Película Nanocerámica',
        subtitle: 'Alto Desempeño',
        image: null,
        description:
          'Película de alto rendimiento con tono azul, para reducir el calor solar con excelente claridad visual. Balance perfecto entre estética moderna y confort.',
        benefits: [
          { stat: '51%', label: 'Control solar', detail: 'Rechaza hasta el 51% de energía solar.' },
          { stat: '100%', label: 'Protección UV', detail: 'Bloqueo total de rayos ultravioleta.' },
          { stat: '68%', label: 'Transmisión VLT', detail: 'Espacios claros y confortables.' },
          { stat: '🔵', label: 'Tono azul', detail: 'Acabado moderno en fachadas.' },
        ],
      },
    ],
  },
  {
    id: 'decorativas',
    label: 'Decorativas',
    icon: FiFeather,
    color: 'purple',
    image: '/images/decorativas.jpg',
    imageAlt: 'Ventanas con películas decorativas: esmerilada, dicroica y microperforado - BluSolare',
    films: [
      {
        id: 'esmerilada',
        title: 'Película Esmerilada',
        subtitle: 'Decorativa',
        image: '/images/decorativas.jpg',
        description:
          'Acabado opaco o esmerilado ideal para privacidad elegante. Perfecta para oficinas, baños y espacios donde la privacidad es esencial sin perder luz natural.',
        benefits: [
          { stat: '🔒', label: 'Privacidad instantánea', detail: 'Sin cortinas ni persianas.' },
          { stat: '✨', label: 'Acabado sofisticado', detail: 'Estética moderna y minimalista.' },
          { stat: '☀️', label: 'Luz natural', detail: 'Privacidad sin oscurecer.' },
          { stat: '5-8', label: 'Años de vida útil', detail: 'Material duradero.' },
        ],
      },
      {
        id: 'microperforado',
        title: 'Película Microperforado',
        subtitle: 'Decorativa',
        image: '/images/decorativas.jpg',
        description:
          'Microperforaciones que permiten ver hacia el exterior desde adentro, mientras proyectan una imagen o diseño desde afuera. Ideal para publicidad en vidrios.',
        benefits: [
          { stat: '👁️', label: 'Visibilidad interior', detail: 'Ver hacia fuera sin obstrucción.' },
          { stat: '🖨️', label: 'Personalizable', detail: 'Logotipos, diseños o campañas.' },
          { stat: '🔒', label: 'Privacidad de día', detail: 'Opaco desde el exterior.' },
          { stat: '☀️', label: 'Control solar parcial', detail: 'Reduce deslumbramiento.' },
        ],
      },
      {
        id: 'dicroica',
        title: 'Película Dicroica Tricolor',
        subtitle: 'Decorativa',
        image: '/images/decorativas.jpg',
        description:
          'Diseño de filtrado especial con tres tonos de color para una estética única y moderna. Cambia de color según el ángulo de la luz.',
        benefits: [
          { stat: '🌈', label: 'Efecto multicolor', detail: 'Dinámico según ángulo de luz.' },
          { stat: '☀️', label: 'Control solar', detail: 'Reducción del calor y UV.' },
          { stat: '✓', label: 'Versátil', detail: 'Oficinas y hogares modernos.' },
          { stat: '5-8', label: 'Años de vida útil', detail: 'Material de alta calidad.' },
        ],
      },
    ],
  },
  {
    id: 'seguridad',
    label: 'Seguridad',
    icon: FiShield,
    color: 'blue',
    image: '/images/seguridad.jpg',
    imageAlt: 'Ventana con vidrio reforzado mostrando seguridad ante impactos - BluSolare',
    films: [
      {
        id: 'seguridad-4m',
        title: 'Película de Seguridad 4M',
        subtitle: 'Seguridad',
        image: '/images/seguridad.jpg',
        description:
          'Película reforzada de alta resistencia contra impactos, robos y accidentes. Refuerza el vidrio y previene la rotura en situaciones extremas.',
        benefits: [
          { stat: '4mil', label: 'Espesor', detail: 'Grosor óptimo para protección cotidiana.' },
          { stat: '🔒', label: 'Anti-robo', detail: 'Dificulta rotura y acceso no autorizado.' },
          { stat: '💪', label: 'Resistencia al impacto', detail: 'Retiene fragmentos ante rotura.' },
          { stat: '10-12', label: 'Años de vida útil', detail: 'Larga durabilidad.' },
        ],
      },
      {
        id: 'seguridad-plata',
        title: 'Película de Seguridad Plata',
        subtitle: 'Seguridad',
        image: '/images/seguridad.jpg',
        description:
          'Película de seguridad con acabado reflectivo plata. Combina control solar con protección contra impactos. Privacidad diurna + seguridad en una sola solución.',
        benefits: [
          { stat: '80%', label: 'Rechazo de calor', detail: 'Máximo control solar con acabado plata.' },
          { stat: '99%', label: 'Bloqueo UV', detail: 'Protección solar completa.' },
          { stat: '🔒', label: 'Anti-robo', detail: 'Barrera reforzada ante accesos no autorizados.' },
          { stat: '🪞', label: 'Efecto espejo', detail: 'Privacidad durante el día.' },
        ],
      },
      {
        id: 'seguridad-7m',
        title: 'Película de Seguridad 7M',
        subtitle: 'Seguridad',
        image: '/images/seguridad.jpg',
        description:
          'Película incolora de seguridad con 7 milésimas de espesor. Refuerza el vidrio sin modificar su estética. Cumple normativas de seguridad para negocios.',
        benefits: [
          { stat: '7mil', label: 'Mayor espesor', detail: 'Alta resistencia a impactos severos.' },
          { stat: '100%', label: 'Bloqueo UV', detail: 'Sin cambiar la visibilidad.' },
          { stat: '📋', label: 'Cumple normativas', detail: 'Para negocios con certificación.' },
          { stat: '🔍', label: 'Incolora', detail: 'No modifica la estética del cristal.' },
        ],
      },
    ],
  },
]

const brand = {
  section: 'bg-blue-50',
  fallback: 'bg-blue-50',
  badge: 'bg-blue-100 text-blue-700',
  icon: 'bg-blue-100 text-blue-700',
  border: 'border-blue-200',
  stat: 'text-blue-700',
  check: 'text-blue-500',
  tag: 'bg-blue-50 text-blue-700 border-blue-200',
  dot: 'bg-blue-500',
}

const colorMap = {
  amber: brand,
  purple: brand,
  blue: brand,
}

function FilmRow({ film, c, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100`}>
      {/* Image */}
      <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden">
        {film.image ? (
          <img
            src={film.image}
            alt={film.title}
            className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-64 lg:h-80 ${c.section} flex items-center justify-center`}>
            <span className="text-6xl opacity-30">🪟</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-7 lg:py-10 lg:px-8">
        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${c.tag}`}>
          {film.subtitle}
        </span>
        <h3 className="text-2xl font-black text-gray-900 mb-2">{film.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{film.description}</p>

        <div className="grid grid-cols-2 gap-3">
          {film.benefits.map((b) => (
            <div key={b.label} className="flex gap-2 items-start">
              <FiCheckCircle className={`${c.check} flex-shrink-0 mt-0.5`} size={14} />
              <div>
                <p className={`text-sm font-bold ${c.stat}`}>{b.stat}</p>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{b.label}</p>
                <p className="text-xs text-gray-400 leading-tight mt-0.5">{b.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LineaArquitectonica() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-primary-900 to-primary-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <FiSun className="text-yellow-400" size={15} />
            <span className="text-white/80 text-sm font-medium">Línea Arquitectónica</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Elevamos tus espacios con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              soluciones arquitectónicas
            </span>
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Diseñadas para mejorar el confort, la estética y la eficiencia de tu hogar u oficina.
            Protección solar, privacidad, seguridad y diseño moderno sin obras.
          </p>
          <a href="/cotiza" className="btn-primary mt-8 text-base px-8 py-4 inline-flex items-center gap-2">
            Cotizar ahora <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Category nav pills */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon
              const c = colorMap[cat.color]
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${c.badge} hover:opacity-80`}
                >
                  <Icon size={14} />
                  {cat.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat) => {
        const Icon = cat.icon
        const c = colorMap[cat.color]
        return (
          <section key={cat.id} id={cat.id} className={`py-20 lg:py-28 ${c.section}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 ${c.icon} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} />
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${c.stat}`}>Categoría</span>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Películas {cat.label}
                  </h2>
                </div>
              </div>

              {/* Category image banner */}
              {cat.image && (
                <div className="rounded-3xl overflow-hidden shadow-xl mb-10 aspect-square max-w-sm mx-auto">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Film rows — image + text alternating */}
              <div className="space-y-6">
                {cat.films.map((film, idx) => (
                  <FilmRow key={film.id} film={film} c={c} reverse={idx % 2 !== 0} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900">¿No sabes cuál elegir?</h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Nuestros expertos te asesoran sin costo. Contáctanos y te recomendamos la película ideal
            para tu espacio, presupuesto y necesidades.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/cotiza" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Solicitar asesoría gratis <FiArrowRight />
            </a>
            <a
              href={`https://wa.me/524424488516?text=${encodeURIComponent('Hola! Necesito asesoría sobre la línea arquitectónica.')}`}
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
