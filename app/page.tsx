// // app/page.tsx

// import Hero from '@/components/sections/Hero'
// import About from '@/components/sections/About'
// import VisionMissionValues from '@/components/sections/VisionMissionValues'
// import Services from '@/components/sections/Services'
// import CaseStudy from '@/components/sections/CaseStudy'
// import Team from '@/components/sections/Team'
// import Clients from '@/components/sections/Clients'
// import Contact from '@/components/sections/Contact'
// import Footer from '@/components/sections/Footer'

// /**
//  * Home Page
//  * 
//  * Main landing page assembling all sections
//  * 
//  * Structure follows conversion funnel:
//  * 1. Hero - Capture attention
//  * 2. About - Build credibility
//  * 3. VMV - Establish values
//  * 4. Services - Show offerings
//  * 5. Case Study - Prove capability
//  * 6. Team - Humanize brand
//  * 7. Clients - Social proof
//  * 8. Contact - Convert leads
//  * 9. Footer - Site navigation
//  */

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Hero />
//       <About />
//       <VisionMissionValues />
//       <Services />
//       <CaseStudy />
//       <Team />
//       <Clients />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

// app/page.tsx  (UPDATED — adds Navbar, Testimonials, Process; optimizes funnel order)
//
// CONVERSION FUNNEL RATIONALE:
//
// 1.  Hero          — Capture attention, communicate core value prop
// 2.  About         — Who we are (credibility foundation)
// 3.  Services      — What we do (scope & expertise)
// 4.  Process       — How we work (remove purchase anxiety ← NEW)
// 5.  CaseStudy     — Proof we deliver (evidence)
// 6.  Testimonials  — Others validate us (social proof ← NEW)
// 7.  VMV           — Why we exist (values-driven clients)
// 8.  Team          — The humans behind the work (trust)
// 9.  Clients       — Logos = instant credibility signal
// 10. Contact       — Convert (action)
// 11. Footer        — Navigation + trust signals
//
// Key change: Testimonials now sits after CaseStudy ("proof then peer validation")
// rather than nowhere. Process sits before CaseStudy to prime the reader.

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import VisionMissionValues from '@/components/sections/VisionMissionValues'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CaseStudy from '@/components/sections/CaseStudy'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import Clients from '@/components/sections/Clients'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Process />
        <CaseStudy />
        <Testimonials />
        <VisionMissionValues />
        <Team />
        <Clients />
        <Contact />
        <Footer />
      </main>
      <FloatingCTA />
    </>
  )
}
