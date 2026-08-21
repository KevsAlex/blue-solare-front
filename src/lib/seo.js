/**
 * Per-route SEO metadata.
 *
 * This is a client-rendered SPA: every route is served the SAME index.html, so
 * anything hardcoded there applies to all five pages. That made the canonical
 * tag actively harmful — every route declared itself a duplicate of "/", which
 * invites Google to drop the subpages from the index.
 *
 * Google executes JS and picks up title/description/canonical updated at
 * runtime, so setting them per route here fixes it without a build step.
 * A crawler that does NOT run JS still sees the index.html defaults — that is a
 * real limitation and only prerendering/SSR removes it.
 */
const SITE = 'https://blusolare.com'

export const ROUTE_SEO = {
  '/': {
    title: 'BluSolare — Películas para Cristales en Querétaro',
    description:
      'Películas de control solar, seguridad y decorativas para hogares, oficinas y vehículos en Querétaro. 100% de bloqueo UV, hasta 95% de rechazo infrarrojo, garantía de 8 a 10 años.',
  },
  '/linea-arquitectonica': {
    title: 'Línea Arquitectónica — Películas para ventanas | BluSolare',
    description:
      'Películas de control solar, seguridad y decorativas para casas, oficinas y negocios en Querétaro. Polarizadas, espejo plata, nanocerámica y esmerilados desde $460/m² instalado.',
  },
  '/linea-automotriz': {
    title: 'Línea Automotriz — Polarizado para autos | BluSolare',
    description:
      'Polarizado y películas de seguridad para todo tipo de vehículos en Querétaro. Control de calor, privacidad y protección, con instalación profesional.',
  },
  '/que-es-una-pelicula': {
    title: '¿Qué es una película para ventanas? | BluSolare',
    description:
      'Qué es una película de control solar, cómo funciona y qué resuelve: calor, rayos UV, privacidad y seguridad del cristal. Guía y preguntas frecuentes.',
  },
  '/cotiza': {
    title: 'Cotizador en línea — Calcula tu proyecto | BluSolare',
    description:
      'Calcula el costo de tus películas para ventanas en línea. Ingresa medidas, elige el tipo de película y recibe tu cotización por WhatsApp. Sin compromiso.',
  },
}

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    const [, k, v] = selector.match(/\[(\w+)="([^"]+)"\]/) || []
    if (k) el.setAttribute(k, v)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export function applySeo(pathname) {
  const meta = ROUTE_SEO[pathname] || ROUTE_SEO['/']
  const url = `${SITE}${pathname === '/' ? '/' : pathname}`

  document.title = meta.title
  setMeta('meta[name="description"]', 'content', meta.description)
  setMeta('link[rel="canonical"]', 'href', url)          // ← per route, not always "/"
  setMeta('meta[property="og:title"]', 'content', meta.title)
  setMeta('meta[property="og:description"]', 'content', meta.description)
  setMeta('meta[property="og:url"]', 'content', url)
}
