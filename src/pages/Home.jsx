import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import FilmTypes from '../components/FilmTypes'
import TintSimulator from '../components/TintSimulator'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FilmTypes />
      <TintSimulator />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
