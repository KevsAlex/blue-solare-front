/**
 * dataLayer push helper.
 *
 * Everything goes through GTM (container GTM-MXC6VM5P) rather than calling any
 * vendor SDK directly. That means a Meta Pixel — or GA4, or Google Ads
 * conversions — can be attached to these events inside the GTM UI later WITHOUT
 * another code change or deploy. Adding fbq() calls here instead would hard-wire
 * one vendor into the bundle.
 *
 * Safe to call before GTM loads: the snippet creates window.dataLayer first, and
 * we create it defensively anyway so an ad blocker can never throw.
 */
export function track(event, payload = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })
}

/** Events used on the site. Keep these names stable — GTM triggers match on them. */
export const EVENTS = {
  // Fired when a visitor sends a quote request through to WhatsApp.
  // This is the conversion to map the Meta Pixel "Lead" event onto.
  COTIZACION_ENVIADA: 'cotizacion_enviada',
  // Any other WhatsApp entry point (floating button, shortcut menu, contact card).
  WHATSAPP_CLICK: 'whatsapp_click',
  // Visitor interacted with the tint/price simulator — intent, not conversion.
  COTIZADOR_USADO: 'cotizador_usado',
}
