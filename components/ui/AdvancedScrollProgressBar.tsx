'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * AdvancedScrollProgressBar Component
 * 
 * Premium animated progress bar with multiple visual effects:
 * - Smooth spring animations
 * - Particle effects
 * - Gradient animations
 * - Glow pulses
 * - Section indicators
 * 
 * Usage in app/layout.tsx:
 * import AdvancedScrollProgressBar from '@/components/ui/AdvancedScrollProgressBar'
 * <AdvancedScrollProgressBar variant="premium" />
 */

interface AdvancedScrollProgressBarProps {
  variant?: 'minimal' | 'standard' | 'premium' | 'particles'
  showSectionDots?: boolean
  showPercentage?: boolean
}

export default function AdvancedScrollProgressBar({ 
  variant = 'standard',
  showSectionDots = false,
  showPercentage = false
}: AdvancedScrollProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [percentage, setPercentage] = useState(0)
  
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Opacity based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  // Handle visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update percentage
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Section dots calculation
  const sections = [0, 0.25, 0.5, 0.75, 1]

  if (variant === 'minimal') {
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-0.5"
        style={{ opacity }}
      >
        <motion.div
          className="h-full bg-kinertic-gold origin-left"
          style={{ scaleX }}
        />
      </motion.div>
    )
  }

  if (variant === 'standard') {
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-white/5" />
        
        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-full origin-left bg-gradient-to-r from-kinertic-gold via-kinertic-gold-light to-kinertic-purple"
          style={{ scaleX }}
        />
        
        {/* Glow */}
        <motion.div
          className="absolute top-0 left-0 h-full origin-left bg-gradient-to-r from-kinertic-gold/40 via-kinertic-gold-light/40 to-kinertic-purple/40 blur-sm"
          style={{ scaleX }}
        />
      </motion.div>
    )
  }

  if (variant === 'premium') {
    return (
      <>
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 h-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-gradient" 
               style={{ backgroundSize: '200% 100%' }} />
          
          {/* Main progress bar with animated gradient */}
          <motion.div
            className="absolute top-0 left-0 h-full origin-left"
            style={{ scaleX }}
          >
            <div className="h-full bg-gradient-to-r from-kinertic-gold via-kinertic-gold-light via-kinertic-purple to-kinertic-blue animate-gradient"
                 style={{ backgroundSize: '200% 100%' }} />
          </motion.div>
          
          {/* Double glow effect */}
          <motion.div
            className="absolute top-0 left-0 h-full origin-left blur-md"
            style={{ scaleX }}
          >
            <div className="h-full bg-gradient-to-r from-kinertic-gold/50 via-kinertic-gold-light/50 to-kinertic-purple/50" />
          </motion.div>
          
          <motion.div
            className="absolute top-0 left-0 h-full origin-left blur-lg"
            style={{ scaleX }}
          >
            <div className="h-full bg-gradient-to-r from-kinertic-gold/30 via-kinertic-gold-light/30 to-kinertic-purple/30" />
          </motion.div>
          
          {/* Moving light point */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-kinertic-gold"
            style={{ 
              left: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Percentage indicator */}
        {showPercentage && isVisible && (
          <motion.div
            className="fixed top-4 right-4 z-50 px-4 py-2 glass-card rounded-full"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-kinertic-gold animate-pulse" />
              <span className="text-sm font-bold bg-gradient-gold bg-clip-text text-transparent">
                {percentage}%
              </span>
            </div>
          </motion.div>
        )}

        {/* Section indicators */}
        {showSectionDots && isVisible && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
            {sections.map((section, index) => {
              const isActive = percentage >= section * 100
              return (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-kinertic-gold scale-125' 
                      : 'bg-white/20 scale-100'
                  }`}
                  animate={isActive ? {
                    boxShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 8px rgba(212, 175, 55, 0.6)',
                      '0 0 0px rgba(212, 175, 55, 0)',
                    ]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )
            })}
          </div>
        )}
      </>
    )
  }

  if (variant === 'particles') {
    return (
      <>
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 h-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-white/5" />
          
          {/* Progress bar */}
          <motion.div
            className="absolute top-0 left-0 h-full origin-left bg-gradient-to-r from-kinertic-gold via-kinertic-gold-light to-kinertic-purple"
            style={{ scaleX }}
          />
          
          {/* Animated particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-kinertic-gold-light"
              style={{
                left: useTransform(
                  scrollYProgress, 
                  [0, 1], 
                  [`${i * 20}%`, `${(i * 20) + 100}%`]
                ),
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </motion.div>
      </>
    )
  }

  return null
}


/**
 * Pre-configured Variants
 */

// Minimal clean look
export function MinimalProgress() {
  return <AdvancedScrollProgressBar variant="minimal" />
}

// Standard with glow
export function StandardProgress() {
  return <AdvancedScrollProgressBar variant="standard" />
}

// Premium with all effects
export function PremiumProgress() {
  return (
    <AdvancedScrollProgressBar 
      variant="premium" 
      showPercentage={true}
      showSectionDots={true}
    />
  )
}

// Particles effect
export function ParticlesProgress() {
  return <AdvancedScrollProgressBar variant="particles" />
}


/**
 * Custom Animation Styles (Add to globals.css)
 * 
 * @keyframes gradient-shift {
 *   0%, 100% { background-position: 0% 50%; }
 *   50% { background-position: 100% 50%; }
 * }
 * 
 * .animate-gradient {
 *   animation: gradient-shift 3s ease infinite;
 * }
 */
