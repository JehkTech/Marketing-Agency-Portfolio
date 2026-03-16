// components/animations/FadeIn.tsx

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * FadeIn Component
 * 
 * Simple fade-in animation on mount
 * Use for immediate animations without scroll trigger
 * 
 * Props:
 * @param children - Content to animate
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 */

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '' 
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}