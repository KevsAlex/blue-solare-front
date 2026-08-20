import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import QuickQuote from '../components/QuickQuote'
import FilmTypes from '../components/FilmTypes'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      {/* High in the page on purpose: this is the conversion step. */}
      <QuickQuote />
      <FilmTypes />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
