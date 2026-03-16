'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

/**
 * Custom hook for Lenis smooth scrolling
 * Handles initialization and cleanup
 */

interface UseLenisOptions {
  duration?: number
  easing?: (t: number) => number
  smoothWheel?: boolean
}

export function useLenis(options: UseLenisOptions = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: options.duration || 1.2,
      easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: options.smoothWheel !== undefined ? options.smoothWheel : true,
      wheelMultiplier: 1,
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
  }, [options.duration, options.easing, options.smoothWheel])
}