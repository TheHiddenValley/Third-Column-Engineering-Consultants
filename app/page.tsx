import Image from 'next/image'
// import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
    </main>
  )
}
