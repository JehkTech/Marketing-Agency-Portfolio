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
    '/images/6M2B3586.jpg',
    '/images/6M2B3648.jpg',
    '/images/6M2B3651.jpg',
    '/images/6M2B3655.jpg',
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
              Brand Launch Visual Campaign
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bringing a new brand story to life through polished photography and dynamic
              social-first content designed for modern audiences.
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
                  className="absolute inset-0"
                >
                  <img
                    src={images[activeImage]}
                    alt={`Project Gallery ${activeImage + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-kinertic-purple/40 via-transparent to-kinertic-blue/40" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((src, index) => (
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
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
                The brand needed a cohesive visual identity that could scale across social,
                website, and campaign materials. The goal was to create imagery that felt
                premium while staying authentic to the audience.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-400 leading-relaxed">
                We produced a suite of high-impact photos and short-form assets that highlight
                the brand’s personality. The result is a flexible visual system ready for
                use across digital and print channels.
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
            <Button size="lg" href="/portfolio">
              View Full Portfolio
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}