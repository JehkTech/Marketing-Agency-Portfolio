// components/sections/VisionMissionValues.tsx

'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import Card from '@/components/ui/Card'

/**
 * VisionMissionValues Component
 * 
 * Communicates company philosophy and core values
 * 
 * Design Strategy:
 * - Three-column layout for clarity
 * - Icon-based visual hierarchy
 * - Glassmorphism cards for premium feel
 * 
 * Marketing Purpose:
 * - Differentiates from commodity services
 * - Appeals to values-driven clients
 * - Establishes long-term partnership mindset
 */

export default function VisionMissionValues() {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Vision',
      description: 'To become a trusted digital growth partner delivering innovative marketing solutions that transform businesses.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Mission',
      description: 'Help businesses grow through strategic marketing, visual storytelling, and technology-driven solutions.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Values',
      description: 'Excellence, innovation, collaboration, integrity, and measurable results guide everything we do.',
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-kinertic-black via-kinertic-purple/5 to-kinertic-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our foundation built on clear vision, purposeful mission, and unwavering values
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
              <Card hover gradient>
                <div className="text-kinertic-gold mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}