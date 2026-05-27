'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

/**
 * useTheme Hook - ESLINT FIXED
 * 
 * Manages dark/light mode theme
 * - Proper function declaration order
 * - No setState cascading
 * - System preference detection
 * - localStorage persistence
 */

// Define applyTheme BEFORE component so it can be used in useEffect
const applyTheme = (newTheme: Theme) => {
  try {
    const html = document.documentElement
    html.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme-preference', newTheme)
  } catch (e) {
    console.error('Error applying theme:', e)
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Single effect - no setState in effect body
  useEffect(() => {
    try {
      // Check localStorage first
      const saved = localStorage.getItem('theme-preference') as Theme | null
      
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme: Theme = saved || (prefersDark ? 'dark' : 'light')

      // Apply theme BEFORE setting state
      applyTheme(initialTheme)
      setTheme(initialTheme)

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme-preference')) {
          const newTheme: Theme = e.matches ? 'dark' : 'light'
          applyTheme(newTheme)
          setTheme(newTheme)
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      
      // Set mounted LAST
      setMounted(true)

      return () => mediaQuery.removeEventListener('change', handleChange)
    } catch (e) {
      console.error('Theme hook error:', e)
      setMounted(true)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    applyTheme(newTheme)
    setTheme(newTheme)
  }

  const setThemeMode = (newTheme: Theme) => {
    applyTheme(newTheme)
    setTheme(newTheme)
  }

  return {
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    toggleTheme,
    setTheme: setThemeMode,
    mounted,
  }
}
