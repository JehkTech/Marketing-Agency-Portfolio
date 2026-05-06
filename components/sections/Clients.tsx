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
  // Client logos sourced from public assets
  const clients = [
    { name: 'Kinertic Media', logo: '/logos/clientele.png' },
    { name: 'Detox Labs', logo: '/images/detox.png' },
    { name: 'LPGB', logo: '/images/lpgb.png' },
    { name: 'PRND', logo: '/images/prnd.png' },
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
                  <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {client.name}
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