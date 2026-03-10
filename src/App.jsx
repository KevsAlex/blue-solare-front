import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LineaArquitectonica from './pages/LineaArquitectonica'
import LineaAutomotriz from './pages/LineaAutomotriz'
import QueEsUnaPelicula from './pages/QueEsUnaPelicula'
import Cotiza from './pages/Cotiza'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
