# BluSolare Front — Project Guide

## Overview
React clone of blusolare.com — a window film company based in Querétaro, México.
Stack: **Vite + React 18 + Tailwind CSS 3 + React Router v6 + react-icons**.

## Commands
```bash
npm run dev      # dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Routes
| Path | Page | File |
|---|---|---|
| `/` | Home | `src/pages/Home.jsx` |
| `/linea-arquitectonica` | Línea Arquitectónica (12 films) | `src/pages/LineaArquitectonica.jsx` |
| `/linea-automotriz` | Línea Automotriz (3 films) | `src/pages/LineaAutomotriz.jsx` |
| `/que-es-una-pelicula` | ¿Qué es una película? + FAQ | `src/pages/QueEsUnaPelicula.jsx` |
| `/cotiza` | Cotizador (quote builder) | `src/pages/Cotiza.jsx` |

## Project Structure
```
src/
├── App.jsx                   # BrowserRouter + Routes
├── index.css                 # Tailwind directives + global component classes
├── components/
│   ├── Navbar.jsx            # Fixed top, white bg, logo left, nav center, social icons right
│   ├── Footer.jsx            # Dark bg, logo (inverted), nav links, contact info
│   ├── Hero.jsx              # Home hero — dark blue gradient, pelicula_ventana.jpg right side
│   ├── ServicesPreview.jsx   # Home: two service cards linking to sub-pages
│   ├── FilmTypes.jsx         # Home: heat/security/decorative accordion (mobile) / cards (desktop)
│   ├── Process.jsx           # Home: contratacion.jpg + 7-step grid
│   ├── Testimonials.jsx      # Home: 6 review cards
│   └── Contact.jsx           # Home + /cotiza: contact form → WhatsApp / email
└── pages/
    ├── Home.jsx
    ├── LineaArquitectonica.jsx  # FilmRow component (image left/right alternating)
    ├── LineaAutomotriz.jsx
    ├── QueEsUnaPelicula.jsx     # FaqItem accordion
    └── Cotiza.jsx               # ItemRow builder → WhatsApp pre-formatted message
```

## Tailwind Custom Classes (src/index.css)
- `.btn-primary` — blue filled button
- `.btn-outline` — blue outlined button
- `.section-title` — 3xl/4xl bold heading
- `.section-subtitle` — lg gray subtitle
- `.card` — white rounded shadow card

## Brand Colors (tailwind.config.js)
- `brand-blue`: `#1a56db` — primary CTA, active links, badges
- `brand-dark`: `#0f172a` — dark backgrounds (hero, footer, contact)
- `brand-light`: `#f0f7ff` — light blue tint backgrounds

## Images (`public/images/`)
All compressed with sips at 75–80% JPEG quality, max 1200px wide.

| File | Used in | Original size → Compressed |
|---|---|---|
| `logo.png` | Navbar, Footer, Contact, Cotiza hero | 20 KB |
| `logo2.webp` | (backup logo) | 63 KB |
| `blusolare_logo.webp` | (backup logo) | 63 KB |
| `pelicula_ventana.jpg` | Hero right visual, QueEsUnaPelicula | 132 KB |
| `bajar_calor.jpg` | LineaArquitectonica — Control Solar banner | 275 KB |
| `decorativas.jpg` | LineaArquitectonica — Decorativas banner | 277 KB |
| `seguridad.jpg` | LineaArquitectonica — Seguridad banner | 300 KB |
| `contratacion.jpg` | Process section | 116 KB |
| `control_reflectiva.jpg` | Film card: Control Solar Reflectiva | 198 KB |
| `plata_humo.jpg` | Film card: Plata/Humo | 172 KB |
| `polarizada_05.jpg` | Film card: Polarizada 05% | 183 KB |
| `polarizada_20.jpg` | Film card: Polarizada 20% | 189 KB |
| `polarizada_35.jpg` | Film card: Polarizada 35% | 184 KB |

## Key Design Decisions
- **Single brand color** — all category sections use the same blue scheme (no amber/purple per category)
- **LineaArquitectonica layout** — `FilmRow` component: image + text alternating left/right per film
- **Category banners** — `aspect-square max-w-sm mx-auto` (square, centered, not full-width banner)
- **Navbar** — always white background; active route gets blue underline; social icons on right
- **Footer logo** — uses `brightness-0 invert` CSS to turn the dark logo white on dark background

## Cotizador (`/cotiza`)
- Client selects: Line → Film → Quantity → Width × Height (meters)
- Area auto-calculated per item; running total m² shown
- On submit: opens WhatsApp (`wa.me/524424488516`) with pre-formatted message
- Film list matches the owner's Excel catalogue exactly (as of March 2026)
- **Future**: replace WhatsApp dispatch with API call (DynamoDB + Cognito admin portal planned)

## Film Catalogue — Arquitectónica (matches owner's Excel)
- Pelicula Polarizada 5% / 20% / 35% / 50%
- Pelicula Reflectiva Plata / Plata/Humo
- Pelicula Seguridad Plata 4mil / Transp 4mil / Transp 7mil
- Pelicula Nanoceramica
- Película Esmerilada / Dicroica Tricolor / Microperforado
- Pelicula Seguridad Polarizada 20%

## Film Catalogue — Automotriz
- Polarizado No Reflectivo
- Película Cerámica
- Película de Seguridad Automotriz

## Contact Info (in code)
- WhatsApp / Phone: `+52 442 448-8516`
- Email: `contacto@blusolare.com`

## Planned (not yet built)
- Admin portal with AWS DynamoDB + Cognito
- Backend for cotizador (auto-price calculation replacing Excel workflow)
- PDF quote generation matching the existing Excel template
