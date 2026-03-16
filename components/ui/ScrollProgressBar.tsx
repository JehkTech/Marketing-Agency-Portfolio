'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgressBar Component
 * 
 * Displays an animated progress bar at the top of the page
 * showing scroll progress through the page
 * 
 * Features:
 * - Smooth spring animation
 * - Gradient color (customizable)
 * - Shows/hides based on scroll position
 * - Responsive design
 * - High performance using transform
 * 
 * Usage:
 * Add to app/layout.tsx inside the body tag:
 * <ScrollProgressBar />
 */

interface ScrollProgressBarProps {
  height?: number
  gradient?: boolean
  showPercentage?: boolean
  hideOnTop?: boolean
}

export default function ScrollProgressBar({ 
  height = 3,
  gradient = true,
  showPercentage = false,
  hideOnTop = true
}: ScrollProgressBarProps) {
  const [isVisible, setIsVisible] = useState(!hideOnTop)
  
  // Get scroll progress (0 to 1)
  const { scrollYProgress } = useScroll()
  
  // Apply spring animation for smooth movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Monitor scroll position for visibility
  useEffect(() => {
    if (!hideOnTop) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      setIsVisible(scrolled > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hideOnTop])

  // Calculate percentage for display
  const [percentage, setPercentage] = useState(0)
  
  useEffect(() => {
    if (!showPercentage) return
    
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100))
    })
    
    return () => unsubscribe()
  }, [scrollYProgress, showPercentage])

  return (
    <>
      {/* Progress Bar Container */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1"
        style={{ height: `${height}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background Track */}
        <div className="absolute inset-0 bg-white/5" />
        
        {/* Progress Bar */}
        <motion.div
          className={`
            absolute top-0 left-0 h-full origin-left
            ${gradient 
              ? 'bg-gradient-to-r from-kinertic-gold via-kinertic-gold-light to-kinertic-purple' 
              : 'bg-kinertic-gold'
            }
          `}
          style={{
            scaleX,
            transformOrigin: '0%',
          }}
        />
        
        {/* Glow Effect */}
        <motion.div
          className={`
            absolute top-0 left-0 h-full origin-left blur-sm
            ${gradient 
              ? 'bg-gradient-to-r from-kinertic-gold/50 via-kinertic-gold-light/50 to-kinertic-purple/50' 
              : 'bg-kinertic-gold/50'
            }
          `}
          style={{
            scaleX,
            transformOrigin: '0%',
          }}
        />
      </motion.div>

      {/* Percentage Indicator (Optional) */}
      {showPercentage && isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-50 px-3 py-1 glass-card rounded-full text-xs font-semibold text-kinertic-gold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {percentage}%
        </motion.div>
      )}
    </>
  )
}


/**
 * Alternative Variants
 * 
 * You can create different styles by passing different props
 */

// Variant 1: Thick bar with percentage
export function ThickProgressBar() {
  return (
    <ScrollProgressBar 
      height={5} 
      gradient={true} 
      showPercentage={true}
      hideOnTop={false}
    />
  )
}

// Variant 2: Minimal thin bar
export function MinimalProgressBar() {
  return (
    <ScrollProgressBar 
      height={2} 
      gradient={false} 
      showPercentage={false}
      hideOnTop={true}
    />
  )
}

// Variant 3: Gradient with glow
export function GlowProgressBar() {
  return (
    <ScrollProgressBar 
      height={4} 
      gradient={true} 
      showPercentage={false}
      hideOnTop={false}
    />
  )
}
