'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

/**
 * Custom hook for Lenis smooth scrolling
 * Handles initialization and cleanup
 * 
 * @param options - Lenis configuration options
 * @returns Lenis instance
 */

interface UseLenisOptions {
  duration?: number
  easing?: (t: number) => number
  smoothWheel?: boolean
  smoothTouch?: boolean
}

export function useLenis(options: UseLenisOptions = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: options.duration || 1.2,
      easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: options.smoothWheel !== undefined ? options.smoothWheel : true,
      smoothTouch: options.smoothTouch !== undefined ? options.smoothTouch : false,
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
  }, [options.duration, options.easing, options.smoothWheel, options.smoothTouch])
}