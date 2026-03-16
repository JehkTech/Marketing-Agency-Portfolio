// components/ui/Button.tsx

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * Button Component
 * 
 * Reusable CTA button with hover animations
 * Supports primary and secondary variants
 * 
 * Props:
 * @param children - Button text/content
 * @param variant - 'primary' (gold) or 'secondary' (outline)
 * @param onClick - Click handler
 * @param href - Optional link destination
 * @param className - Additional CSS classes
 * @param size - 'sm', 'md', 'lg'
 * 
 * Design Decisions:
 * - Primary button uses gold gradient for premium feel
 * - Secondary button uses glass morphism for modern look
 * - Hover animations add tactile feedback
 * - Large click target (min 44px) for accessibility
 */

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}

const sizeClasses = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  href,
  className = '',
  size = 'md',
  type = 'button'
}: ButtonProps) {
  const baseClasses = `
    ${sizeClasses[size]}
    font-semibold rounded-full 
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-kinertic-gold focus:ring-offset-2 focus:ring-offset-kinertic-black
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-flex items-center justify-center
  `

  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-gold text-kinertic-black hover:shadow-lg hover:shadow-kinertic-gold/50 hover:scale-105'
    : 'glass-card text-kinertic-white hover:bg-white/10 hover:border-white/20'

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}