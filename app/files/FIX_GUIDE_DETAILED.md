# 🔧 Fix: Clean Up Conflicting CSS Styles

## Problem

Your `app/globals.css` has **conflicting styles**:

```css
/* Dark theme (lines 1-50) */
body {
  background: #0A0A0A;      ← Dark background
  color: #FAFAFA;           ← Light text
}

/* Light theme (lines 120+) */
body {
  background-color: #FAFAFA;  ← Light background (OVERWRITES above!)
  color: #000000;             ← Dark text (OVERWRITES above!)
}
```

When CSS has duplicate selectors, **the last one wins**. So the light theme is what displays, but the dark theme code is still cluttering the file.

---

## Solution: Replace globals.css

### Step 1: Delete Current File

```bash
# Back up your current file first (optional)
cp app/globals.css app/globals.css.backup

# Delete it
rm app/globals.css
```

### Step 2: Create New globals.css

Copy the content of `globals-CLEAN.css` into a new `app/globals.css`:

```bash
cp globals-CLEAN.css app/globals.css
```

**OR manually paste** the entire content from `globals-CLEAN.css` into `app/globals.css`

### Step 3: Update fonts.css (Optional)

If you have `src/assets/branding/fonts.css`, you can either:

**Option A: Delete it** (fonts are now imported in globals.css)
```bash
rm src/assets/branding/fonts.css
```

**Option B: Clear it** (leave it empty as placeholder)
```bash
echo "/* Font imports are in globals.css */" > src/assets/branding/fonts.css
```

### Step 4: Restart Dev Server

```bash
# Clear Next.js cache
rm -rf .next

# Restart
npm run dev
```

---

## What Changed

### ❌ OLD (Conflicting)
- Dark theme colors (0A0A0A, D4AF37 gold)
- Light theme colors (#FAFAFA, #2E7D32 green)
- **Both active at same time** → conflict!
- Duplicate CSS rules
- Unorganized variables

### ✅ NEW (Clean)
- **Single consistent light theme** with brand colors
- Forest Green (#1B5E20) as primary
- Lime Green (#9CCC65) as accent
- Organized CSS variables
- No duplicate rules
- Font import at top (single source)
- All Lenis/smooth scroll code preserved
- All animations preserved

---

## Color Reference

Your brand colors are now properly set:

```css
:root {
  --color-primary-900: #1B5E20;      /* Forest Green - main */
  --color-primary-800: #2E7D32;      /* Kelly Green - hover */
  --color-accent: #9CCC65;            /* Lime - badges */
  --color-accent-bright: #7FD842;    /* Neon - animations */
  --color-black: #000000;             /* Text */
  --color-off-white: #FAFAFA;        /* Background */
}
```

Use them in CSS:
```css
.button {
  background-color: var(--color-primary-800);
}

.button:hover {
  background-color: var(--color-primary-900);
}
```

Use them in Tailwind:
```jsx
<button className="bg-primary-800 hover:bg-primary-900 text-white">
  Click me
</button>
```

---

## Verify It Worked

After restarting:

✅ Page loads at `http://localhost:3000`  
✅ Background is light (#FAFAFA)  
✅ Text is dark/black (#000000)  
✅ Buttons use green colors  
✅ No console errors  
✅ Font is Inter  
✅ Hover effects work (color changes)  

---

## Files You Need

1. **`app/globals.css`** ← Use `globals-CLEAN.css`
2. **`src/assets/branding/fonts.css`** ← Can be deleted or left empty

That's it! Everything else stays the same.

---

## If Something Still Looks Wrong

**Check these:**

1. **Is `@tailwind` being imported?**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   ✅ Yes, it's in the clean version

2. **Do you have conflicting imports?**
   - Search `globals.css` for `@import url`
   - Should only be ONE line for fonts
   - Delete any others

3. **Check `layout.tsx`**
   - Make sure it imports `globals.css`:
   ```typescript
   import './globals.css'
   ```

4. **Check `tailwind.config.ts`**
   - Make sure colors are configured:
   ```typescript
   colors: {
     primary: { ... },
     accent: { ... },
   }
   ```

---

## Quick Checklist

- [ ] Backed up old globals.css (optional)
- [ ] Replaced with `globals-CLEAN.css`
- [ ] Deleted/cleared `fonts.css` if needed
- [ ] Ran `rm -rf .next`
- [ ] Restarted `npm run dev`
- [ ] Verified page loads
- [ ] Checked colors are correct
- [ ] Tested button hover
- [ ] No console errors

---

**Status:** Ready to deploy  
**Next Step:** Copy `globals-CLEAN.css` → `app/globals.css` and restart

🚀 You're good to go!
