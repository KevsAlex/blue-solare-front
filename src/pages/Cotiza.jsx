import { useState } from 'react'
import { FiPlus, FiTrash2, FiSend, FiArrowRight } from 'react-icons/fi'

// ── Film catalogue ────────────────────────────────────────────────────────────
const FILMS = {
  arquitectonica: [
    'Pelicula Polarizada 5%',
    'Pelicula Polarizada 20%',
    'Pelicula Polarizada 35%',
    'Pelicula Polarizada 50%',
    'Pelicula Reflectiva Plata',
    'Pelicula Reflectiva Plata/Humo',
    'Pelicula Seguridad Plata 4mil',
    'Pelicula Seguridad Transp 4mil',
    'Pelicula Seguridad Transp 7mil',
    'Pelicula Nanoceramica',
    'Película Esmerilada',
    'Película Dicroica Tricolor',
    'Película Microperforado',
    'Pelicula Seguridad Polarizada 20%',
  ],
  automotriz: [
    'Polarizado No Reflectivo',
    'Película Cerámica',
    'Película de Seguridad Automotriz',
  ],
}

const LINE_LABELS = {
  arquitectonica: 'Línea Arquitectónica',
  automotriz: 'Línea Automotriz',
}

// ── Empty item template ───────────────────────────────────────────────────────
const emptyItem = () => ({
  id: crypto.randomUUID(),
  linea: 'arquitectonica',
  pelicula: FILMS.arquitectonica[0],
  cantidad: 1,
  ancho: '',
  alto: '',
  notas: '',
})

// ── Area helper ───────────────────────────────────────────────────────────────
const area = (item) => {
  const a = parseFloat(item.ancho)
  const h = parseFloat(item.alto)
  return a > 0 && h > 0 ? (a * h * item.cantidad).toFixed(2) : null
}

const totalArea = (items) =>
  items.reduce((sum, it) => {
    const a = parseFloat(it.ancho)
    const h = parseFloat(it.alto)
    return a > 0 && h > 0 ? sum + a * h * it.cantidad : sum
  }, 0).toFixed(2)

// ── WhatsApp message builder ──────────────────────────────────────────────────
function buildMessage(client, items) {
  const lines = [
    '🏷️ *Solicitud de Cotización — BluSolare*',
    '',
    `👤 *Nombre:* ${client.nombre}`,
    `📞 *Teléfono:* ${client.telefono}`,
    `📧 *Email:* ${client.email}`,
    '',
    '*📋 Productos solicitados:*',
    '',
  ]

  items.forEach((it, i) => {
    const a = area(it)
    lines.push(`*${i + 1}. ${LINE_LABELS[it.linea]}*`)
    lines.push(`   Película: ${it.pelicula}`)
    lines.push(`   Cantidad: ${it.cantidad} ventana(s)`)
    if (it.ancho && it.alto) {
      lines.push(`   Medida: ${it.ancho} m × ${it.alto} m`)
      lines.push(`   Área total: ${a} m²`)
    }
    if (it.notas) lines.push(`   Notas: ${it.notas}`)
    lines.push('')
  })

  const tot = totalArea(items)
  if (parseFloat(tot) > 0) {
    lines.push(`📐 *Área total estimada:* ${tot} m²`)
  }

  lines.push('')
  lines.push('Por favor, envíenme una cotización. ¡Gracias!')

  return encodeURIComponent(lines.join('\n'))
}

// ── Item row component ────────────────────────────────────────────────────────
function ItemRow({ item, onChange, onRemove, index, isOnly }) {
  const handleChange = (field, value) => onChange(item.id, field, value)

  const handleLineChange = (linea) => {
    onChange(item.id, 'linea', linea)
    onChange(item.id, 'pelicula', FILMS[linea][0])
  }

  const a = area(item)

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
          Ventana / Área #{index + 1}
        </span>
        {!isOnly && (
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <FiTrash2 size={16} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Line */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Línea</label>
          <select
            value={item.linea}
            onChange={(e) => handleLineChange(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue bg-white"
          >
            <option value="arquitectonica">Línea Arquitectónica</option>
            <option value="automotriz">Línea Automotriz</option>
          </select>
        </div>

        {/* Film */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Película</label>
          <select
            value={item.pelicula}
            onChange={(e) => handleChange('pelicula', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue bg-white"
          >
            {FILMS[item.linea].map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Cantidad (ventanas)</label>
          <input
            type="number"
            min="1"
            value={item.cantidad}
            onChange={(e) => handleChange('cantidad', Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue"
          />
        </div>

        {/* Measurements */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Medidas (metros)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="Ancho"
              value={item.ancho}
              onChange={(e) => handleChange('ancho', e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue"
            />
            <span className="text-gray-400 font-bold flex-shrink-0">×</span>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="Alto"
              value={item.alto}
              onChange={(e) => handleChange('alto', e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue"
            />
            <span className="text-gray-400 text-xs flex-shrink-0">m</span>
          </div>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1">Notas (opcional)</label>
          <input
            type="text"
            placeholder="Ubicación, color preferido, observaciones..."
            value={item.notas}
            onChange={(e) => handleChange('notas', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-brand-blue"
          />
        </div>
      </div>

      {/* Area preview */}
      {a && (
        <div className="mt-3 flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2">
          <span className="text-xs text-blue-600 font-medium">
            📐 Área estimada: <strong>{a} m²</strong>
            {item.cantidad > 1 && (
              <span className="text-blue-400 ml-1">
                ({item.cantidad} × {parseFloat(item.ancho) * parseFloat(item.alto)} m²)
              </span>
            )}
          </span>
        </div>
      )}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Cotiza() {
  const [client, setClient] = useState({ nombre: '', telefono: '', email: '' })
  const [items, setItems] = useState([emptyItem()])
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const updateClient = (field, value) => setClient((c) => ({ ...c, [field]: value }))

  const updateItem = (id, field, value) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: value } : it)))

  const addItem = () => setItems((prev) => [...prev, emptyItem()])

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id))

  const validate = () => {
    const e = {}
    if (!client.nombre.trim()) e.nombre = true
    if (!client.telefono.trim()) e.telefono = true
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    const msg = buildMessage(client, items)
    window.open(`https://wa.me/524424488516?text=${msg}`, '_blank')
    setSent(true)
  }

  const tot = totalArea(items)

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">¡Solicitud enviada!</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Tu cotización fue enviada a nuestro equipo vía WhatsApp. Te responderemos con los precios
            a la brevedad posible.
          </p>
          <button
            onClick={() => { setSent(false); setItems([emptyItem()]); setClient({ nombre: '', telefono: '', email: '' }) }}
            className="btn-primary w-full justify-center py-3"
          >
            Nueva cotización
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-primary-900 to-primary-800 pt-32 pb-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <img
            src="/images/logo.png"
            alt="BluSolare"
            className="h-14 w-auto object-contain mx-auto mb-6 brightness-0 invert"
          />
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Cotizador en línea
          </h1>
          <p className="mt-4 text-white/60 text-lg leading-relaxed">
            Ingresa tus medidas y elige el tipo de película. Tu solicitud llegará directo a nuestro
            equipo para prepararte una cotización personalizada.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Client info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4">Tus datos de contacto</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={client.nombre}
                    onChange={(e) => updateClient('nombre', e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.nombre ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    placeholder="442 000 0000"
                    value={client.telefono}
                    onChange={(e) => updateClient('telefono', e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.telefono ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={client.email}
                    onChange={(e) => updateClient('email', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-gray-900">
                  Ventanas / Áreas a cubrir
                </h2>
                <span className="text-xs text-gray-400">{items.length} elemento(s)</span>
              </div>

              {items.map((item, idx) => (
                <ItemRow
                  key={item.id}
                  item={item}
                  index={idx}
                  onChange={updateItem}
                  onRemove={removeItem}
                  isOnly={items.length === 1}
                />
              ))}

              <button
                type="button"
                onClick={addItem}
                className="w-full border-2 border-dashed border-blue-200 text-blue-600 hover:border-brand-blue hover:bg-blue-50 rounded-2xl py-4 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FiPlus size={18} />
                Agregar otra ventana / área
              </button>
            </div>

            {/* Summary */}
            {parseFloat(tot) > 0 && (
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold text-blue-700">Resumen de tu solicitud</p>
                    <p className="text-xs text-blue-500 mt-0.5">{items.length} elemento(s) · Área total estimada</p>
                  </div>
                  <p className="text-3xl font-black text-blue-700">{tot} m²</p>
                </div>
                <p className="text-xs text-blue-400 mt-3">
                  * El precio final depende del tipo de película, accesibilidad y condiciones. Recibirás una cotización formal de nuestro equipo.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl text-base transition-colors flex items-center justify-center gap-3 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.528 5.845L.057 23.57a.75.75 0 0 0 .916.953l5.9-1.547A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.868 0-3.63-.49-5.157-1.348l-.369-.214-3.818 1.001.975-3.739-.234-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Enviar solicitud por WhatsApp
            </button>

            <div className="flex flex-col items-center gap-2 pt-2">
              <img
                src="/images/logo.png"
                alt="BluSolare"
                className="h-7 w-auto object-contain opacity-40"
              />
              <p className="text-xs text-gray-400">
                Se abrirá WhatsApp con tu solicitud lista para enviar. Sin compromiso.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
