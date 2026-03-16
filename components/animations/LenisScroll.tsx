// components/animations/LenisScroll.tsx

'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

/**
 * LenisScroll Component
 * 
 * Implements smooth scrolling across the entire application
 * Uses Lenis library for butter-smooth scroll experience
 * 
 * Features:
 * - Smooth scroll interpolation
 * - Touch device optimization
 * - Reduced motion support
 * 
 * @param children - React children to wrap
 */

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      return // Don't initialize smooth scroll if user prefers reduced motion
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}