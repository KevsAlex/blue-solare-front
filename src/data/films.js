/**
 * Catalogue and measured specs — SINGLE SOURCE OF TRUTH.
 *
 * Every number here comes from BluSolare's own pricing workbook
 * ("BLUSOLARE CRM • CONFIGURACIÓN" + the film spec table). Do NOT invent
 * performance figures: customers buy on them and we have to stand behind them.
 * If a value isn't in the workbook, leave it out rather than estimating.
 *
 * Prices are MXN per m², installation included, before IVA.
 */

// Measured per-SKU performance. VLT = visible light transmission
// (LOWER = darker). IR rejection varies enormously between films — RB20 is 12%,
// UL60 is 95% — so never quote a single blanket "infrared" number for the range.
export const FILM_SPECS = [
  { code: 'CR20',  name: 'Polarizado Premium CR20', vlt: 21, uv: 100, ir: 94, mil: 1, tone: 'Humo' },
  { code: 'SP70V', name: 'Solar SP70V',             vlt: 69, uv: 100, ir: 94, mil: 2, tone: 'Verde' },
  { code: 'UL60',  name: 'Ultra Claro UL60',        vlt: 68, uv: 100, ir: 95, mil: 2, tone: 'Azul' },
  { code: 'RB20',  name: 'Reflectiva RB20',         vlt: 10, uv: 100, ir: 12, mil: 1, tone: 'Verde' },
  { code: 'HU20',  name: 'Seguridad HU20',          vlt: 20, uv: 100, ir: 59, mil: 4, tone: 'Humo' },
]

// Línea Arquitectónica price list, installation included (MXN/m², sin IVA).
export const ARQ_PRICES = [
  { name: 'Polarizada 5%',                 price: 460,  note: 'Máximo Control Solar' },
  { name: 'Polarizada 20%',                price: 460,  note: 'Balance Luz y Protección' },
  { name: 'Polarizada 35%',                price: 460,  note: 'Alta Claridad con Protección' },
  { name: 'Polarizada 50%',                price: 460,  note: 'Alta Claridad con Protección' },
  { name: 'Película Espejo Plata',         price: 460,  note: 'Control Solar Alto Rendimiento' },
  { name: 'Película Espejo Humo',          price: 760,  note: 'Privacidad y Control Solar' },
  { name: 'Espejo Plata Exterior',         price: 760,  note: 'Control Solar Alto Rendimiento en Exterior' },
  { name: 'Seguridad Espejo Plata',        price: 560,  note: 'Protección + Control Solar' },
  { name: 'Seguridad Polarizada 20%',      price: 590,  note: 'Protección + Control Solar' },
  { name: 'Seguridad 4 Mic',               price: 490,  note: 'Protección Básica de Cristales' },
  { name: 'Seguridad 7 Mic',               price: 660,  note: 'Alta Resistencia Antivandalismo' },
  { name: 'Nanocerámica Premium',          price: 1160, note: 'Alta Tecnología sin Oscurecer' },
  { name: 'Esmerilado Premium',            price: 490,  note: 'Privacidad sin Oscurecer' },
  { name: 'Microperforado Publicitario',   price: 530,  note: 'Vista Interior / Publicidad Exterior' },
]

// Documented in the quotation template footer.
export const WARRANTY_YEARS = '8–10'

// Highest measured IR rejection in the catalogue (UL60). Stated as a maximum and
// attributed, rather than implied for every film.
export const MAX_IR = 95
export const UV_BLOCK = 100

export const WHATSAPP = '524424488516'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
