// components/sections/Services.tsx

'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Card from '@/components/ui/Card'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

/**
 * Services Section Component
 * 
 * Showcases service offerings with visual hierarchy
 * 
 * Design Strategy:
 * - Grid layout for easy scanning
 * - Icons establish quick recognition
 * - Hover states encourage exploration
 * - CTA drives to contact
 * 
 * Marketing Strategy:
 * - Digital Marketing listed first (highest margin)
 * - Specific service items build credibility
 * - "Get Started" CTA creates urgency
 * 
 * UX Features:
 * - Mobile-responsive grid
 * - Accessible card interactions
 * - Clear visual hierarchy
 */

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive measurable growth and ROI',
      items: [
        'Brand Strategy',
        'Campaign Management',
        'Performance Marketing',
        'Social Media Marketing',
      ],
      color: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Photography',
      description: 'Professional imagery that tells your brand story',
      items: [
        'Corporate Photography',
        'Product Photography',
        'Real Estate Photography',
        'Event Photography',
      ],
      color: 'from-gold-500/20 to-yellow-500/20',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Videography',
      description: 'Cinematic content that captures attention and converts',
      items: [
        'Corporate Video',
        'Advertising Video',
        'Social Media Reels',
        'Brand Storytelling Films',
      ],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Website Design',
      description: 'Beautiful, high-converting digital experiences',
      items: [
        'UI/UX Design',
        'Landing Pages',
        'Business Websites',
        'E-commerce Solutions',
      ],
      color: 'from-green-500/20 to-teal-500/20',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-kinertic-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive solutions for modern brands"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
              <Card hover gradient className="h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-kinertic-gold`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <svg className="w-5 h-5 text-kinertic-gold mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fadeUp">
          <div className="text-center">
            <Button href="#contact" size="lg">
              Get Started
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}