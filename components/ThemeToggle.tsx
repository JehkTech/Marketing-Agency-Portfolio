'use client'

import { useEffect, useState } from 'react'

/**
 * ThemeToggle Component
 * Provides a button to switch between light and dark modes
 * Persists user preference to localStorage
 */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true) // Start with dark since that's current theme

  useEffect(() => {
    setMounted(true)
    
    // Check localStorage or default to dark
    const saved = localStorage.getItem('theme')
    
    if (saved) {
      const isSavedDark = saved === 'dark'
      setIsDark(isSavedDark)
      applyTheme(isSavedDark)
    } else {
      // Default to dark theme (your current theme)
      applyTheme(true)
    }
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.setAttribute('data-theme', 'dark')
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      html.setAttribute('data-theme', 'light')
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <span className="text-xl opacity-50">◐</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-black"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        // Sun icon for light mode (shown in dark mode)
        <svg
          className="w-5 h-5 text-yellow-300 transition-transform duration-300"
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
        // Moon icon for dark mode (shown in light mode)
        <svg
          className="w-5 h-5 text-blue-600 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}
