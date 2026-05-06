// components/ui/Card.tsx

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * Card Component
 * 
 * Glassmorphism card with hover effects
 * Used for service cards, team cards, etc.
 * 
 * Props:
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param hover - Enable hover animation
 * @param gradient - Add subtle gradient border on hover
 * 
 * Design Features:
 * - Glassmorphism background for depth
 * - Subtle border glow on hover
 * - Elevation lift effect
 * - Supports nested interactive elements
 */

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}: CardProps) {
  return (
    <motion.div
      className={`
        glass-card rounded-2xl p-8
        ${hover ? 'cursor-pointer' : ''}
        ${gradient ? 'hover:border-kinertic-gold/50' : ''}
        ${className}
      `}
      whileHover={hover ? { 
        y: -8,
        boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)'
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}