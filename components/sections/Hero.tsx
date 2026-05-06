// components/sections/Hero.tsx

'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'

/**
 * Hero Section Component
 * 
 * First impression - establishes brand positioning
 * 
 * Design Strategy:
 * - Bold headline with casual + professional mix
 * - Browser mockup creates aspirational "this could be you" feeling
 * - Dual CTA: Low commitment + high intent
 * - Gradient mesh background adds depth without distraction
 * 
 * Marketing Psychology:
 * - "Lit Websites" = modern, relatable language
 * - "Build Your Business" = outcome-focused
 * - Visual mockup = social proof simulation
 * 
 * Animation Sequence:
 * 1. Headline words reveal (stagger)
 * 2. Subtext fades up
 * 3. CTAs scale in
 * 4. Browser mockup parallax ready
 */

export default function Hero() {
  const headlineWords = "We Build Lit Websites That Build Your Business".split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Animated Headline */}
        <div className="mb-6 overflow-hidden">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-3 md:mr-4"
              >
                {word === 'Lit' ? (
                  <span className="bg-gradient-gold bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtext */}
        <FadeIn delay={0.8}>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Premium digital marketing and media solutions delivering strategic, 
            results-driven brand growth.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button href="#services" size="lg">
              View Services
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get a Quote
            </Button>
          </div>
        </FadeIn>

        {/* Browser Mockup */}
        <FadeIn delay={1.2}>
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Browser Window Frame */}
            <div className="glass-card rounded-lg overflow-hidden shadow-2xl">
              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-white/5 rounded px-4 py-1.5 text-sm text-gray-400 max-w-md">
                    https://yourbrand.com
                  </div>
                </div>
              </div>

              {/* Browser Content - Placeholder for actual website preview */}
              <div className="aspect-video bg-gradient-to-br from-kinertic-purple/20 to-kinertic-blue/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-kinertic-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Your Brand Here</h3>
                  <p className="text-gray-400">Premium web experiences that convert</p>
                </div>
              </div>
            </div>

            {/* Floating Elements for Depth */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-kinertic-gold/20 rounded-full blur-xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-kinertic-purple/20 rounded-full blur-xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </FadeIn>

        {/* Scroll Indicator */}
        <FadeIn delay={1.5}>
          <motion.div
            className="mt-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 mx-auto text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}