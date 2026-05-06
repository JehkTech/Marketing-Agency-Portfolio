// components/sections/Testimonials.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * Testimonials Section
 *
 * CONVERSION STRATEGY:
 * - Auto-rotating carousel keeps content fresh without user effort
 * - Star ratings (5/5) trigger psychological anchoring
 * - Full name + company = verifiable social proof
 * - Industry diversity shows versatility
 * - Results-focused quotes ("increased", "grew", "doubled") = outcomes, not compliments
 *
 * DESIGN:
 * - Large quote mark as visual anchor
 * - Avatar + name builds human trust
 * - Subtle auto-advance shows activity/credibility
 */

const testimonials = [
  {
    quote:
      "Kinertic completely transformed how we present ourselves online. Their photography work for our school was nothing short of cinematic. Enrolment enquiries grew by over 40% in the semester after launch.",
    author: 'Dr. Sandra Mwale',
    role: 'Principal',
    company: 'American International School',
    avatar: 'SM',
    rating: 5,
  },
  {
    quote:
      "We needed a brand refresh before our product launch and Kinertic delivered far beyond expectations. The social media content they produced was so sharp it felt like working with an agency ten times the size.",
    author: 'Chanda Bwalya',
    role: 'CEO',
    company: 'Detox Labs Zambia',
    avatar: 'CB',
    rating: 5,
  },
  {
    quote:
      "Their performance marketing campaigns doubled our qualified leads within 60 days. More importantly, they understood our audience and crafted messaging that actually converted. Not just vanity metrics.",
    author: 'Mulenga Kasonde',
    role: 'Marketing Manager',
    company: 'LPGB Properties',
    avatar: 'MK',
    rating: 5,
  },
  {
    quote:
      "The website they built for us didn't just look premium — it converted. Within three months of launch our online bookings increased by 85%. ROI on the project was clear within the first month.",
    author: 'Thandeka Phiri',
    role: 'Director',
    company: 'PRND Consulting',
    avatar: 'TP',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    if (!paused) startTimer()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused])

  const goTo = (index: number) => {
    setCurrent(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!paused) startTimer()
  }

  const t = testimonials[current]

  return (
    <section
      className="py-20 md:py-32 bg-kinertic-black relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-kinertic-purple/5 via-transparent to-kinertic-blue/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Results speak louder than promises"
          centered
        />

        <ScrollReveal variant="scaleIn" delay={0.2}>
          <div className="relative glass-card rounded-3xl p-10 md:p-16">
            {/* Large quote mark */}
            <div className="absolute top-8 left-10 text-8xl font-black text-kinertic-gold/10 leading-none select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-kinertic-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-10">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kinertic-gold to-kinertic-gold-light flex items-center justify-center text-kinertic-black font-black text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-gray-400">
                      {t.role} &bull; {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current
                      ? 'w-8 bg-kinertic-gold'
                      : 'w-4 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Trust badges below */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Retention Rate' },
            ].map((stat, i) => (
              <div key={i} className="px-6 py-4 glass-card rounded-xl min-w-[130px]">
                <div className="text-2xl font-black bg-gradient-gold bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
