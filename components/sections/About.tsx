// components/sections/About.tsx

'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * About Section Component
 * 
 * Establishes company credibility and expertise
 * 
 * Design Strategy:
 * - Split layout: Stats left, story right
 * - Year established builds trust
 * - Tagline reinforces positioning
 * 
 * Content Strategy:
 * - Emphasizes "team" not individual
 * - Lists expertise areas for SEO
 * - Ends with memorable tagline
 */

export default function About() {
  const stats = [
    { label: 'Established', value: '2020' },
    { label: 'Projects Delivered', value: '200+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Team Members', value: '12' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-kinertic-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats Column */}
          <div>
            <ScrollReveal variant="fadeUp">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl text-center">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-gold bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Content Column */}
          <div>
            <SectionHeader 
              title="About Us"
              subtitle="Building brands through strategic creativity"
              accent
            />

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Kinertic Media Arts, established in 2020, is a premium digital marketing 
                  and media solutions company delivering strategic, results-driven brand 
                  growth for modern businesses.
                </p>
                <p>
                  Formed by a team of creatives, marketers, and developers, the company 
                  combines strategy, creativity, and technology to build powerful digital 
                  experiences.
                </p>
                <p>
                  Expertise includes digital marketing, visual content production, film, 
                  brand storytelling, and performance-driven campaigns.
                </p>
                <p>
                  The company focuses on storytelling, brand positioning, and measurable 
                  outcomes to help businesses achieve sustainable growth.
                </p>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                    "We don't just market brands — we build them."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}