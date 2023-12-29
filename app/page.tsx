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
    <main className="overflow-hidden bg-gray-200">
      {/* <Navbar /> */}
      <Hero />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Team />
      <TestimonialsPage />
      
      <ContactUs />
    </main>
  )
}
