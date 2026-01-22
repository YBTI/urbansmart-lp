import Hero from '@/components/sections/Hero'
import Concept from '@/components/sections/Concept'
import EventInfo from '@/components/sections/EventInfo'
import Comparison from '@/components/sections/Comparison'
import Collection from '@/components/sections/Collection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Concept />
      <EventInfo />
      <Comparison />
      <Collection />
      <Footer />
    </main>
  )
}
