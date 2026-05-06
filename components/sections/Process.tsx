// components/sections/Process.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'

/**
 * Process / How We Work Section
 *
 * CONVERSION PSYCHOLOGY:
 * - "Removing the mystery" is one of the highest-impact CRO levers for service businesses
 * - When clients know exactly what happens after they click "Contact", friction drops
 * - Numbered steps create a sense of progression — "just 4 steps to launch"
 * - Timeframes anchor expectations and reduce post-sale buyer's remorse
 * - CTA at the bottom capitalizes on momentum from reading the process
 *
 * DESIGN:
 * - Horizontal connecting line on desktop (visual journey)
 * - Step numbers in gold circles (premium, countable progress)
 * - Subtle scroll-linked opacity changes add cinematic depth
 */

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    duration: '30–60 min',
    description:
      'We start with a deep-dive consultation to understand your brand, goals, target audience, and competitive landscape. No templates — every strategy starts with listening.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Strategy & Proposal',
    duration: '3–5 days',
    description:
      'We present a tailored strategic plan with clear deliverables, timelines, and pricing. No hidden costs, no vague scope. You approve before we begin.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Production',
    duration: '1–6 weeks',
    description:
      'Our creatives, marketers, and developers execute with precision. You get regular progress updates and milestone approvals so you\'re never in the dark.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Launch & Growth',
    duration: 'Ongoing',
    description:
      'We don\'t disappear after delivery. We track performance, report results monthly, and iterate to keep your brand growing. Long-term partners, not one-off vendors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-20 md:py-32 bg-gradient-to-b from-kinertic-black via-kinertic-purple/5 to-kinertic-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-kinertic-gold/10 border border-kinertic-gold/20 rounded-full mb-4">
              <span className="text-kinertic-gold font-semibold text-sm">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              From Brief to{' '}
              <span className="bg-gradient-gold bg-clip-text text-transparent">Brilliant</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven process built to deliver outcomes, not just outputs.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal steps with animated connector line */}
        <div className="hidden md:block relative mb-16">
          {/* Connector line background */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/10" />
          {/* Animated fill line */}
          <motion.div
            className="absolute top-10 left-[12.5%] h-px bg-gradient-gold origin-left"
            style={{ width: lineWidth, right: 'auto' }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.12}>
                <div className="text-center relative">
                  {/* Step circle */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-kinertic-gold to-kinertic-gold-light flex items-center justify-center text-kinertic-black relative z-10 shadow-lg shadow-kinertic-gold/20">
                    <span className="text-xl font-black">{step.step}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-kinertic-gold text-xs font-semibold mb-3 bg-kinertic-gold/10 px-3 py-1 rounded-full">
                    {step.icon}
                    <span>{step.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden space-y-8 mb-16">
          {steps.map((step, index) => (
            <ScrollReveal key={index} variant="slideRight" delay={index * 0.1}>
              <div className="flex gap-6">
                {/* Left column: number + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-kinertic-black font-black text-sm">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-kinertic-gold/40 to-transparent mt-3" />
                  )}
                </div>

                {/* Right column: content */}
                <div className="pb-8">
                  <div className="inline-flex items-center gap-1 text-kinertic-gold text-xs font-semibold mb-2 bg-kinertic-gold/10 px-3 py-1 rounded-full">
                    {step.icon}
                    <span>{step.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA - capitalize on momentum after reading process */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="text-center glass-card rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Ready to start the process?</h3>
            <p className="text-gray-400 mb-6">
              The discovery call is free. No obligations, no pressure — just a conversation about your brand.
            </p>
            <Button href="#contact" size="lg">
              Book a Discovery Call
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
