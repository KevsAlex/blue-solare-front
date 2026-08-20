import Hero from '../components/Hero'
import QuickQuote from '../components/QuickQuote'
import ServicesPreview from '../components/ServicesPreview'
import FilmTypes from '../components/FilmTypes'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Straight after the hero on purpose: this is the conversion step, and
          every section it sits behind is a chance to lose the visitor. */}
      <QuickQuote />
      <ServicesPreview />
      <FilmTypes />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
