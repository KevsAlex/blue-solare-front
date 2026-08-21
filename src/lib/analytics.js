/**
 * Analytics dispatch.
 *
 * Every event goes to the GTM dataLayer, and the conversion ALSO fires the Meta
 * Pixel directly.
 *
 * ⚠️ DO NOT ALSO CREATE A "Lead" TAG IN GTM. The Lead event is fired here, in
 * code. Adding a GTM tag on the same `cotizacion_enviada` event would fire it a
 * second time and double-count every quote — which would quietly halve your
 * apparent cost-per-lead and corrupt campaign optimisation.
 *
 * The dataLayer pushes remain so GA4 / Google Ads / anything else can still be
 * attached in the GTM UI without touching code.
 */

const PIXEL_EVENT = {
  // Meta's standard event names. Mapping ours -> theirs here keeps the vendor
  // vocabulary out of the components.
  cotizacion_enviada: 'Lead',
  whatsapp_click: 'Contact',
  cotizador_usado: 'ViewContent',
}

export function track(event, payload = {}) {
  if (typeof window === 'undefined') return

  // 1. GTM dataLayer — always.
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })

  // 2. Meta Pixel — only for events we have a mapping for. Guarded because fbq
  //    may be absent: blocked by an ad blocker, or not yet loaded. A throw here
  //    would happen inside a click handler and could swallow the WhatsApp
  //    hand-off, losing the actual lead to save a tracking call.
  try {
    const name = PIXEL_EVENT[event]
    if (name && typeof window.fbq === 'function') {
      window.fbq('track', name, {
        // Value lets Meta optimise for high-value quotes instead of counting
        // every lead equally. Omitted when we have no estimate.
        ...(payload.valor_estimado ? { value: payload.valor_estimado, currency: 'MXN' } : {}),
        ...(payload.pelicula ? { content_name: payload.pelicula } : {}),
      })
    }
  } catch {
    /* tracking must never break the page */
  }
}

/** Event names are a contract — GTM triggers match on them. Do not rename. */
export const EVENTS = {
  // Quote sent through to WhatsApp. THE conversion -> Meta "Lead".
  COTIZACION_ENVIADA: 'cotizacion_enviada',
  // Any other WhatsApp entry point -> Meta "Contact".
  WHATSAPP_CLICK: 'whatsapp_click',
  // Simulator interaction — intent, not conversion -> Meta "ViewContent".
  COTIZADOR_USADO: 'cotizador_usado',
}
