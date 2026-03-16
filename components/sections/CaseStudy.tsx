// components/sections/CaseStudy.tsx

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'

/**
 * CaseStudy Component
 * 
 * Showcases featured project with detailed breakdown
 * 
 * Design Strategy:
 * - Large hero image for impact
 * - Stats demonstrate results
 * - Gallery shows range of work
 * - CTA to view more projects
 * 
 * Marketing Psychology:
 * - Social proof through recognizable client
 * - Quantifiable results build trust
 * - Visual portfolio reduces uncertainty
 * - "View Full Portfolio" creates FOMO
 */

export default function CaseStudy() {
  const [activeImage, setActiveImage] = useState(0)
  
  const images = [
    '/case-study-1.jpg',
    '/case-study-2.jpg',
    '/case-study-3.jpg',
    '/case-study-4.jpg',
  ]

  const stats = [
    { label: 'Campaign Duration', value: '6 Months' },
    { label: 'Content Pieces', value: '120+' },
    { label: 'Engagement Increase', value: '340%' },
    { label: 'Brand Reach', value: '2.5M+' },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-kinertic-black to-kinertic-purple/10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-kinertic-gold/10 border border-kinertic-gold/20 rounded-full mb-4">
              <span className="text-kinertic-gold font-semibold text-sm">Featured Case Study</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              American International School
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive photography and videography campaign focused on brand 
              positioning and cinematic visual storytelling for one of Lusaka's premier 
              educational institutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Gallery */}
        <ScrollReveal variant="scaleIn" delay={0.2}>
          <div className="mb-16">
            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 glass-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-kinertic-purple/30 to-kinertic-blue/30 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-kinertic-gold/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Project Image {activeImage + 1}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`
                    aspect-video rounded-lg overflow-hidden transition-all duration-300
                    ${activeImage === index 
                      ? 'ring-2 ring-kinertic-gold scale-105' 
                      : 'opacity-50 hover:opacity-100'
                    }
                  `}
                >
                  <div className="w-full h-full glass-card flex items-center justify-center">
                    <span className="text-sm text-gray-400">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Challenge & Solution */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                American International School needed to elevate their brand positioning 
                to attract international families and showcase their world-class facilities 
                and educational programs through compelling visual storytelling.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-400 leading-relaxed">
                We delivered a comprehensive 6-month campaign featuring cinematic 
                photography and videography that captured the essence of student life, 
                academic excellence, and campus culture. Our strategic approach combined 
                brand storytelling with performance-driven content distribution.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal variant="fadeUp" delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Results That Matter</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="text-3xl font-black bg-gradient-gold bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="text-center">
            <Button size="lg">
              View Full Portfolio
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}