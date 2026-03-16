// app/page.tsx

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import VisionMissionValues from '@/components/sections/VisionMissionValues'
import Services from '@/components/sections/Services'
import CaseStudy from '@/components/sections/CaseStudy'
import Team from '@/components/sections/Team'
import Clients from '@/components/sections/Clients'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

/**
 * Home Page
 * 
 * Main landing page assembling all sections
 * 
 * Structure follows conversion funnel:
 * 1. Hero - Capture attention
 * 2. About - Build credibility
 * 3. VMV - Establish values
 * 4. Services - Show offerings
 * 5. Case Study - Prove capability
 * 6. Team - Humanize brand
 * 7. Clients - Social proof
 * 8. Contact - Convert leads
 * 9. Footer - Site navigation
 */

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <VisionMissionValues />
      <Services />
      <CaseStudy />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}