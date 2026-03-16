// components/sections/Clients.tsx

'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * Clients Section Component
 * 
 * Displays client logos for social proof
 * 
 * Design Strategy:
 * - Grid layout for clean organization
 * - Grayscale logos for consistency
 * - Hover effect adds interactivity
 * 
 * Marketing Psychology:
 * - Logo recognition builds instant trust
 * - Quantity suggests experience
 * - Diversity shows versatility
 */

export default function Clients() {
  // Placeholder for client logos
  const clients = [
    'Client 1', 'Client 2', 'Client 3', 'Client 4',
    'Client 5', 'Client 6', 'Client 7', 'Client 8',
    'Client 9', 'Client 10', 'Client 11', 'Client 12',
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-kinertic-black to-kinertic-purple/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Trusted By Leading Brands"
          subtitle="We're proud to partner with forward-thinking companies"
          centered
        />

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 flex items-center justify-center h-32 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-kinertic-gold/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-400">
              Join 50+ companies that trust us with their brand
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}