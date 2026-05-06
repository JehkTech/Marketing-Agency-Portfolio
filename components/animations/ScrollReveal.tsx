// components/animations/ScrollReveal.tsx

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

/**
 * ScrollReveal Component
 * 
 * Animates children when they enter viewport
 * Supports multiple animation variants
 * 
 * Props:
 * @param children - Content to animate
 * @param variant - Animation type ('fadeUp', 'fadeIn', 'slideRight')
 * @param delay - Animation delay in seconds
 * @param className - Additional CSS classes
 * 
 * Usage:
 * <ScrollReveal variant="fadeUp">
 *   <h1>Animated Heading</h1>
 * </ScrollReveal>
 */

interface ScrollRevealProps {
  children: ReactNode
  variant?: 'fadeUp' | 'fadeIn' | 'slideRight' | 'scaleIn'
  delay?: number
  className?: string
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function ScrollReveal({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}