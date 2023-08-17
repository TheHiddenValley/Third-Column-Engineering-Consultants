import Image from 'next/image'
// import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
// import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import TestimonialsPage from '@/components/TestimonialsPage'
import Team from '@/components/Team'
import ContactUs from '@/components/ContactUs'

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <TestimonialsPage />
      <Team />
      <ContactUs />
    </main>
  )
}
