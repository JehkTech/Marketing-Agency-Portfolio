# 🎨 Kinertic Media Arts - Color Customization & Scroll Progress Bar

## 📦 Package Contents

This package includes:
1. ✅ **change-colors.sh** - Automated color scheme changer
2. ✅ **ScrollProgressBar.tsx** - Animated progress bar component
3. ✅ **Installation instructions** - Complete setup guide

---

## 🎨 Part 1: Color Customization

### Quick Color Change (Automated)

**Step 1: Download the script**
Save `change-colors.sh` to your project root directory.

**Step 2: Make it executable**
```bash
chmod +x change-colors.sh
```

**Step 3: Run the script**
```bash
bash change-colors.sh
```

**Step 4: Choose your color scheme**
```
1. Original (Black & Gold)
2. Royal Blue & Gold
3. Purple & Coral
4. Dark Green & Lime
5. Charcoal & Electric Blue
6. Navy & Orange
7. Deep Red & Gold
8. Custom (Enter your own colors)
```

**Step 5: Restart dev server**
```bash
npm run dev
```

---

### Available Color Schemes

#### 1. Original (Black & Gold) - Current
```css
Background: #0A0A0A (Deep Black)
Text: #FAFAFA (Off White)
Primary: #D4AF37 (Gold)
Accent: #3B82F6 (Blue)
```
**Vibe:** Premium, luxurious, professional

---

#### 2. Royal Blue & Gold
```css
Background: #0F1729 (Navy Blue)
Text: #F8FAFC (Ice White)
Primary: #FFD700 (Bright Gold)
Accent: #1E40AF (Royal Blue)
```
**Vibe:** Corporate, trustworthy, sophisticated

---

#### 3. Purple & Coral
```css
Background: #1A0B2E (Deep Purple)
Text: #F5F3FF (Lavender White)
Primary: #FF6B9D (Coral Pink)
Accent: #7C3AED (Purple)
```
**Vibe:** Creative, youthful, modern

---

#### 4. Dark Green & Lime
```css
Background: #0D1F0D (Forest Green)
Text: #F0FDF4 (Mint White)
Primary: #84CC16 (Lime)
Accent: #15803D (Dark Green)
```
**Vibe:** Eco-friendly, sustainable, fresh

---

#### 5. Charcoal & Electric Blue
```css
Background: #18181B (Charcoal)
Text: #FAFAFA (White)
Primary: #06B6D4 (Cyan)
Accent: #0284C7 (Electric Blue)
```
**Vibe:** Tech-forward, innovative, sleek

---

#### 6. Navy & Orange
```css
Background: #0C1844 (Deep Navy)
Text: #F1F5F9 (Pale Blue)
Primary: #FF6B35 (Bright Orange)
Accent: #1E3A8A (Navy)
```
**Vibe:** Energetic, bold, confident

---

#### 7. Deep Red & Gold
```css
Background: #1A0505 (Dark Red)
Text: #FEF2F2 (Rose White)
Primary: #DC2626 (Red)
Accent: #FFD700 (Gold)
```
**Vibe:** Powerful, passionate, luxury

---

### Manual Color Customization

If you prefer to customize colors manually:

**1. Edit `tailwind.config.ts`:**

```typescript
colors: {
  kinertic: {
    black: '#YOUR_BG_COLOR',      // Main background
    white: '#YOUR_TEXT_COLOR',    // Main text
    gold: '#YOUR_PRIMARY_COLOR',  // Primary accent
    'gold-light': '#YOUR_LIGHT',  // Light variant
    blue: '#YOUR_SECONDARY',      // Secondary accent
    purple: '#YOUR_TERTIARY',     // Tertiary accent
  },
}
```

**2. Update `app/globals.css`:**

```css
:root {
  --glass-bg: rgba(YOUR_RGB, 0.05);
  --glass-border: rgba(YOUR_RGB, 0.1);
}

body {
  background: #YOUR_BG_COLOR;
  color: #YOUR_TEXT_COLOR;
}

::selection {
  background: #YOUR_PRIMARY_COLOR;
  color: #YOUR_BG_COLOR;
}

::-webkit-scrollbar-thumb {
  background: #YOUR_PRIMARY_COLOR;
}
```

**3. Restart dev server:**
```bash
rm -rf .next
npm run dev
```

---

## 📊 Part 2: Scroll Progress Bar Installation

### Step 1: Copy Component File

Copy `ScrollProgressBar.tsx` to:
```
components/ui/ScrollProgressBar.tsx
```

### Step 2: Add to Layout

**Option A: Basic Installation (Recommended)**

Edit `app/layout.tsx`:

```typescript
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* Add scroll progress bar */}
        <ScrollProgressBar />
        
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html>
  )
}
```

### Step 3: Choose Your Style

**Style 1: Default (Thin, Gradient, Auto-hide)**
```tsx
<ScrollProgressBar />
```

**Style 2: With Percentage Indicator**
```tsx
<ScrollProgressBar showPercentage={true} />
```

**Style 3: Always Visible**
```tsx
<ScrollProgressBar hideOnTop={false} />
```

**Style 4: Thick Bar**
```tsx
<ScrollProgressBar height={5} />
```

**Style 5: Solid Color (No Gradient)**
```tsx
<ScrollProgressBar gradient={false} />
```

**Style 6: Full Custom**
```tsx
<ScrollProgressBar 
  height={4}
  gradient={true}
  showPercentage={true}
  hideOnTop={false}
/>
```

---

### Alternative Variants (Pre-configured)

The component includes 3 pre-made variants:

**1. Thick Progress Bar**
```tsx
import { ThickProgressBar } from '@/components/ui/ScrollProgressBar'

<ThickProgressBar />
// Height: 5px, Gradient: Yes, Percentage: Yes, Always visible
```

**2. Minimal Progress Bar**
```tsx
import { MinimalProgressBar } from '@/components/ui/ScrollProgressBar'

<MinimalProgressBar />
// Height: 2px, Gradient: No, Percentage: No, Auto-hide
```

**3. Glow Progress Bar**
```tsx
import { GlowProgressBar } from '@/components/ui/ScrollProgressBar'

<GlowProgressBar />
// Height: 4px, Gradient: Yes, Percentage: No, Always visible
```

---

## 🎨 Customizing Progress Bar Colors

### Method 1: Use Current Theme Colors

The progress bar automatically uses your theme colors:
- Gold gradient (default)
- Matches your Tailwind config

### Method 2: Custom Gradient

Edit `ScrollProgressBar.tsx` line 75:

```tsx
// Change from:
className="bg-gradient-to-r from-kinertic-gold via-kinertic-gold-light to-kinertic-purple"

// To custom colors:
className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
```

### Method 3: Solid Color

Pass `gradient={false}`:

```tsx
<ScrollProgressBar gradient={false} />
```

Then customize in component:

```tsx
// Line 80
className="bg-kinertic-gold"  // Change to any color
```

---

## 🚀 Advanced Customizations

### Custom Progress Bar Style

Create your own variant in `ScrollProgressBar.tsx`:

```tsx
// Add at the bottom of the file
export function MyCustomProgressBar() {
  return (
    <ScrollProgressBar 
      height={6}
      gradient={true}
      showPercentage={true}
      hideOnTop={false}
    />
  )
}
```

Then use it:

```tsx
import { MyCustomProgressBar } from '@/components/ui/ScrollProgressBar'

<MyCustomProgressBar />
```

---

### Multi-Segment Progress Bar

For a segmented look, edit the component:

```tsx
// In ScrollProgressBar.tsx, replace the gradient with:
className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500"
```

---

### Animated Dots Progress

Add pulsing dots effect:

```tsx
{/* Add after the glow effect div */}
<motion.div
  className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-kinertic-gold shadow-lg"
  style={{ x: scaleX }}
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 1, repeat: Infinity }}
/>
```

---

## 🎯 Complete Installation Example

Here's a complete `app/layout.tsx` with progress bar:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LenisScroll from '@/components/animations/LenisScroll'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kinertic Media Arts | Premium Digital Marketing',
  description: 'Strategic digital marketing and media solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* Scroll Progress Bar */}
        <ScrollProgressBar 
          height={3}
          gradient={true}
          showPercentage={false}
          hideOnTop={true}
        />
        
        {/* Smooth Scrolling */}
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html>
  )
}
```

---

## 📋 Testing Checklist

After installation, verify:

- [ ] Progress bar appears at top of page
- [ ] Bar fills as you scroll down
- [ ] Smooth spring animation works
- [ ] Colors match your theme
- [ ] Percentage shows (if enabled)
- [ ] Bar hides at top (if hideOnTop=true)
- [ ] Works on mobile devices
- [ ] No performance issues

---

## 🐛 Troubleshooting

### Progress bar not showing

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

### Progress bar not smooth

**Solution:**
Check that Framer Motion is installed:
```bash
npm install framer-motion
```

### Colors not matching theme

**Solution:**
Ensure progress bar uses Tailwind classes:
```tsx
className="bg-kinertic-gold"  // Not bg-[#D4AF37]
```

### Progress bar jumps/glitches

**Solution:**
Increase spring damping:
```tsx
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 40,  // Increase from 30
  restDelta: 0.001
})
```

### Percentage not updating

**Solution:**
Verify `showPercentage={true}` is set:
```tsx
<ScrollProgressBar showPercentage={true} />
```

---

## 🎨 Color Scheme Recommendations

### By Industry

**Creative Agency:** Purple & Coral (#3)
**Tech Startup:** Charcoal & Electric Blue (#5)
**Financial Services:** Royal Blue & Gold (#2)
**Eco/Sustainability:** Dark Green & Lime (#4)
**Luxury Brand:** Original Black & Gold (#1)
**Sports/Energy:** Navy & Orange (#6)
**Entertainment:** Deep Red & Gold (#7)

---

## 🔄 Switching Between Color Schemes

You can easily test different schemes:

```bash
# Try scheme 2
bash change-colors.sh
# Enter: 2

# Don't like it? Restore backup
mv tailwind.config.ts.backup tailwind.config.ts
mv app/globals.css.backup app/globals.css

# Try scheme 5
bash change-colors.sh
# Enter: 5
```

---

## 📊 Performance Impact

**Scroll Progress Bar:**
- Bundle size: ~2KB
- Performance: Negligible (uses CSS transforms)
- FPS: 60fps smooth scrolling maintained
- Mobile: Fully optimized

**Color Changes:**
- No performance impact (compile-time)
- No runtime overhead
- Same bundle size

---

## 🎉 Quick Start Summary

**To change colors:**
```bash
bash change-colors.sh
```

**To add progress bar:**
1. Copy `ScrollProgressBar.tsx` to `components/ui/`
2. Add to `app/layout.tsx`:
   ```tsx
   import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
   <ScrollProgressBar />
   ```
3. Restart: `npm run dev`

---

## 📞 Support

**Questions?**
- Email: kinerticmedia97@gmail.com
- Phone: +260 975 219 796

---

**Created for Kinertic Media Arts** ✨  
**Version:** 1.0.0  
**Last Updated:** March 2024
