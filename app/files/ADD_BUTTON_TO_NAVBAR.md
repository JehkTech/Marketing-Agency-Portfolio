# 🌙 How to Add the Dark Mode Button to Your Navbar

## Quick Answer: Where to Put It

The button goes in your **Navbar component**, **right before** the "Get a Quote" button (top right area).

---

## Step 1: Create the ThemeToggle Component

Create a new file: `src/components/ThemeToggle.tsx`

Copy the content from `ThemeToggle-Dark.tsx` provided.

---

## Step 2: Import in Your Navbar

Find your Navbar component (likely `src/components/Navbar.tsx` or `components/navbar/Navbar.tsx`)

Add this import at the top:
```typescript
import ThemeToggle from '@/components/ThemeToggle'
```

---

## Step 3: Add to Navbar JSX

In your navbar's JSX, add the button before your "Get a Quote" button.

**Example Navbar Structure:**
```tsx
'use client'

import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="text-white font-bold">Kinertic Media</div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Right Side: Theme Toggle + CTA */}
      <div className="flex items-center gap-4">
        <ThemeToggle />  {/* ← ADD HERE */}
        <a href="tel:+260975219796">+260 975 219 796</a>
        <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-bold">
          Get a Quote
        </button>
      </div>
    </nav>
  )
}
```

---

## What You Should See

### In Dark Mode (Current)
- **Button appears**: Top right, next to phone number
- **Icon**: ☀️ (sun) in yellow
- **Hover effect**: Slight glow/border change
- **Click it**: Site switches to light mode

### In Light Mode (After clicking)
- **Icon changes**: 🌙 (moon) in blue
- **Colors invert**: White background, dark text
- **Click again**: Back to dark mode

---

## Visual Position

```
┌─────────────────────────────────────────────────────┐
│ [K] Kinertic  About  Services  Work  Team  Contact │
│                                    [☀] +260... [Get Quote] │
│                                      ↑              ↑
│                           ThemeToggle        CTA Button
└─────────────────────────────────────────────────────┘
```

---

## Code Example: If Your Navbar Looks Like This

**Current structure:**
```tsx
export default function Navbar() {
  return (
    <nav>
      <Logo />
      <NavLinks />
      <Phone />
      <CTAButton />
    </nav>
  )
}
```

**Update to:**
```tsx
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <NavLinks />
      <Phone />
      <ThemeToggle />  {/* ADD THIS */}
      <CTAButton />
    </nav>
  )
}
```

---

## Styling Notes

The button is styled to match your dark theme:
- White border (light)
- Hover effect: subtle glow
- Yellow sun icon (bright)
- Blue moon icon (for light mode)
- Smooth transitions

If you need to adjust colors, edit these in `ThemeToggle-Dark.tsx`:
```tsx
// Change border color
className="border-white/20"  // ← Change this value

// Change icon colors
className="text-yellow-300"  // Sun icon
className="text-blue-600"    // Moon icon

// Change hover effects
className="hover:border-white/40"
className="hover:bg-white/5"
```

---

## Testing After Adding

1. **Component added** ✅
2. **Button appears in top-right** ✅
3. **Click button** → Site should switch to light mode
4. **Colors change** → Dark background becomes light (#FAFAFA)
5. **Refresh page** → Theme should persist (light mode stays)
6. **Click again** → Back to dark mode
7. **Refresh** → Dark mode persists

---

## Troubleshooting

**Button doesn't appear:**
- Check import path: `@/components/ThemeToggle`
- Make sure file is in correct location
- Check for TypeScript errors

**Click doesn't do anything:**
- Check browser console for errors
- Make sure `globals.css` has dark mode variables
- Clear browser cache: Ctrl+Shift+Delete

**Styling looks off:**
- Check Tailwind CSS is loaded
- Verify `globals.css` is imported in `layout.tsx`
- Make sure no other CSS is overriding the button

---

## File Locations

```
Your Project:
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          ← Import ThemeToggle here
│   │   ├── ThemeToggle.tsx     ← Create this file
│   │   └── ...
│   ├── lib/
│   │   └── ...
│   └── app/
│       ├── globals.css         ← Should have dark mode variables
│       └── layout.tsx
└── ...
```

---

## Done! 🎉

Once you add `<ThemeToggle />` to your Navbar, the button will appear and work immediately.

The button will:
- ✅ Toggle between dark/light mode
- ✅ Show sun/moon icons
- ✅ Persist theme to localStorage
- ✅ Animate smoothly
- ✅ Respect system preferences on first load

**Questions?** Check `ThemeToggle-Dark.tsx` for detailed comments in the code.
