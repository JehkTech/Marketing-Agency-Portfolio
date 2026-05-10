# 🌙 Dark Mode Implementation Guide

## Overview

Dark mode is now fully supported with:
- ✅ System preference detection
- ✅ localStorage persistence
- ✅ Smooth transitions between modes
- ✅ Automatic color scheme switching
- ✅ Easy toggle component

---

## 📦 Files to Add

### 1. Update globals.css
Replace your `app/globals.css` with the updated `globals-CLEAN.css` that includes:
- CSS variables for both light and dark modes
- `@media (prefers-color-scheme: dark)` support
- `[data-theme="dark"]` attribute support
- Smooth transitions

### 2. Add ThemeToggle Component
Copy `ThemeToggle.tsx` to your components:
```
src/components/ThemeToggle.tsx
```

### 3. Add useTheme Hook
Copy `useTheme.ts` to your hooks:
```
src/lib/hooks/useTheme.ts
```

---

## 🚀 Implementation Steps

### Step 1: Update globals.css

Replace your `app/globals.css` with the new version that has dark mode support:

```bash
cp globals-CLEAN.css app/globals.css
```

### Step 2: Create ThemeToggle Component

Create `src/components/ThemeToggle.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (saved) {
      setIsDark(saved === 'dark')
      applyTheme(saved === 'dark')
    } else if (prefersDark) {
      setIsDark(true)
      applyTheme(true)
    }
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg border border-gray-300" disabled>
        ◐
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-current transition-colors hover:bg-primary-50"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        // Sun icon
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 10-1.414 1.414l2.12 2.12a1 1 0 101.414-1.414zM2.05 6.464l2.12 2.12a1 1 0 101.414-1.414L3.464 5.05a1 1 0 10-1.414 1.414zM17.95 6.464l-2.12 2.12a1 1 0 101.414 1.414l2.12-2.12a1 1 0 10-1.414-1.414zM15.657 15.657a1 1 0 10-1.414-1.414l2.12 2.12a1 1 0 001.414-1.414l-2.12-2.12zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ) : (
        // Moon icon
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}
```

### Step 3: Create useTheme Hook

Create `src/lib/hooks/useTheme.ts`:

```ts
'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const saved = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme: Theme = saved || (prefersDark ? 'dark' : 'light')

    setTheme(initialTheme)
    applyTheme(initialTheme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme: Theme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        applyTheme(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement
    html.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme)
    applyTheme(newTheme)
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
```

### Step 4: Add Toggle Button to Navbar

In your Navbar component, import and add the ThemeToggle:

```tsx
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      {/* Logo and nav items */}
      <ThemeToggle />
    </nav>
  )
}
```

---

## 🎨 How It Works

### Light Mode (Default)
```css
:root {
  --color-text: #000000;
  --color-bg: #FAFAFA;
  --color-primary-900: #1B5E20;
}
```

### Dark Mode
When `[data-theme="dark"]` is set on `<html>`:
```css
[data-theme="dark"] {
  --color-text: #FFFFFF;
  --color-bg: #0D0D0D;
  --color-primary-900: #4CAF50;  /* Lighter green for dark bg */
}
```

### Automatic System Detection
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode CSS variables */
  }
}
```

---

## 💾 Persistence

The theme preference is saved to localStorage:
```typescript
localStorage.setItem('theme', 'dark')  // User's choice
localStorage.getItem('theme')          // Retrieve on load
```

On first visit:
1. Check localStorage for saved preference
2. Fall back to system preference (`prefers-color-scheme`)
3. Default to light mode

---

## 🎯 Using the Hook in Components

```tsx
'use client'

import { useTheme } from '@/lib/hooks/useTheme'

export default function MyComponent() {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Is dark? {isDark ? 'Yes' : 'No'}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}
```

---

## 🎨 Component Colors in Dark Mode

All CSS variables automatically adjust:

```css
/* Light mode */
color: var(--color-text);              /* Black */
background-color: var(--color-bg);     /* Off-white */
background-color: var(--color-primary-800);  /* Forest Green */

/* Dark mode (automatic) */
color: var(--color-text);              /* White */
background-color: var(--color-bg);     /* Dark bg */
background-color: var(--color-primary-800);  /* Bright Green */
```

No component changes needed — colors adjust automatically!

---

## 📱 Responsive Dark Mode

Users can:
1. **Toggle manually** — Click the button
2. **Use system preference** — First visit respects OS setting
3. **Change system preference** — Automatically updates (unless they've manually toggled)

---

## ✅ Testing

1. **Toggle button:**
   - Click moon/sun icon
   - Colors should change smoothly
   - Page should update instantly

2. **Persistence:**
   - Refresh page after toggling
   - Theme should remain the same

3. **System preference:**
   - Change your OS dark mode
   - If you haven't toggled, site should update
   - If you toggled manually, site stays on your choice

4. **localStorage:**
   - Open DevTools → Application → Local Storage
   - Look for `theme: "dark"` or `theme: "light"`

---

## 🚀 Next Steps

1. Update `app/globals.css` with new dark mode variables
2. Create `ThemeToggle.tsx` component
3. Create `useTheme.ts` hook
4. Add `<ThemeToggle />` to your Navbar
5. Test switching between modes
6. Refresh page to verify persistence

---

## 📝 Color Reference

| Light Mode | Dark Mode | Variable |
|-----------|----------|----------|
| #000000 | #FFFFFF | --color-text |
| #FAFAFA | #0D0D0D | --color-bg |
| #1B5E20 | #4CAF50 | --color-primary-900 |
| #2E7D32 | #66BB6A | --color-primary-800 |
| #9CCC65 | #A5D6A7 | --color-accent |

---

**Status:** ✅ Ready to implement  
**Files:** 3 (globals.css, ThemeToggle.tsx, useTheme.ts)

Let me know if you have questions!
