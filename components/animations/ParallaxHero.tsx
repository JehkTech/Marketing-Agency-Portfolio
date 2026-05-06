'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * ParallaxHero Component
 * 
 * Creates parallax scrolling effect for hero section
 * Elements move at different speeds for depth
 * 
 * Props:
 * @param children - Content to apply parallax effect
 * @param speed - Parallax speed multiplier (default: 0.5)
 * @param className - Additional CSS classes
 * 
 * Usage:
 * <ParallaxHero speed={0.5}>
 *   <div>Content that moves with parallax</div>
 * </ParallaxHero>
 */

interface ParallaxHeroProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxHero({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}