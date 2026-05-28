'use client'

import { useEffect, useState } from 'react'

/**
 * ThemeToggle Component - ESLINT FIXED
 * 
 * Features:
 * - Proper function declaration order
 * - No cascading renders
 * - Clean useEffect pattern
 * - Respects system preferences
 * - localStorage persistence
 * - No hydration mismatch
 */

// Define applyTheme BEFORE useEffect so it can be called
const applyTheme = (dark: boolean) => {
  try {
    const html = document.documentElement
    
    if (dark) {
      html.setAttribute('data-theme', 'dark')
      html.classList.add('dark')
      html.classList.remove('light')
      localStorage.setItem('theme-preference', 'dark')
    } else {
      html.setAttribute('data-theme', 'light')
      html.classList.add('light')
      html.classList.remove('dark')
      localStorage.setItem('theme-preference', 'light')
    }
  } catch (e) {
    console.error('Error applying theme:', e)
  }
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Single effect that doesn't set state during execution
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        // 1. Check localStorage first
        const saved = localStorage.getItem('theme-preference')

        if (saved) {
          const isDarkMode = saved === 'dark'
          applyTheme(isDarkMode)
          setIsDark(isDarkMode)
        } else {
          // 2. Check system preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          applyTheme(prefersDark)
          setIsDark(prefersDark)
        }
      } catch (e) {
        console.error('Theme initialization error:', e)
        setIsDark(false)
      }

      setMounted(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  // Prevent hydration mismatch - show disabled button during SSR
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-colors opacity-50"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg border border-current/20 hover:border-current/40 transition-all duration-300 hover:bg-current/5 focus:outline-none focus:ring-2 focus:ring-current/30 focus:ring-offset-2 dark:focus:ring-offset-black"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    >
      {isDark ? (
        // Sun icon - shown in dark mode
        <svg
          className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:scale-110"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 10-1.414 1.414l2.12 2.12a1 1 0 101.414-1.414zM2.05 6.464l2.12 2.12a1 1 0 101.414-1.414L3.464 5.05a1 1 0 10-1.414 1.414zM17.95 6.464l-2.12 2.12a1 1 0 101.414 1.414l2.12-2.12a1 1 0 10-1.414-1.414zM15.657 15.657a1 1 0 10-1.414-1.414l2.12 2.12a1 1 0 001.414-1.414l-2.12-2.12zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Moon icon - shown in light mode
        <svg
          className="w-5 h-5 text-blue-600 transition-transform duration-300 hover:scale-110"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}
