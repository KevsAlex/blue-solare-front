import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Home from './pages/Home'
import LineaArquitectonica from './pages/LineaArquitectonica'
import LineaAutomotriz from './pages/LineaAutomotriz'
import QueEsUnaPelicula from './pages/QueEsUnaPelicula'
import Cotiza from './pages/Cotiza'

/** React Router keeps scroll position across route changes; reset it so a new
 *  page always starts at the top. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linea-arquitectonica" element={<LineaArquitectonica />} />
          <Route path="/linea-automotriz" element={<LineaAutomotriz />} />
          <Route path="/que-es-una-pelicula" element={<QueEsUnaPelicula />} />
          <Route path="/cotiza" element={<Cotiza />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  )
}
