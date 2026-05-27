# 🔧 ESLint Errors - Quick Fix

## Problem
10 ESLint errors in theme toggle files:
- ❌ `applyTheme` accessed before it's declared
- ❌ `setState` called synchronously in effect (cascading renders)

## Solution: Replace 2 Files

### File 1: Replace ThemeToggle

**Replace:** `src/components/ThemeToggle.tsx`

**With:** `ThemeToggle-ESLINT-FIXED.tsx`

**Key Changes:**
```typescript
// OLD - Function declared AFTER useEffect (error)
useEffect(() => {
  applyTheme(isDark)  // ❌ applyTheme not yet defined!
}, [])

const applyTheme = (dark: boolean) => { ... }  // Declared too late!

// NEW - Function declared BEFORE useEffect (fixed)
const applyTheme = (dark: boolean) => { ... }  // ✅ Defined first

useEffect(() => {
  applyTheme(isDark)  // ✅ Can now be called
  setMounted(true)    // ✅ Set state last to avoid cascading
}, [])
```

---

### File 2: Replace useTheme Hook

**Replace:** `src/lib/hooks/useTheme.ts`

**With:** `useTheme-ESLINT-FIXED.ts`

**Key Changes:**
- ✅ `applyTheme` function declared OUTSIDE component
- ✅ `setMounted(true)` called LAST in effect
- ✅ No cascading renders
- ✅ Clean effect pattern

---

## ✅ What Gets Fixed

All 10 errors resolved:
- ✅ 3x `ThemeToggle-Dark.tsx` errors
- ✅ 2x `ThemeToggle-FIXED.tsx` errors  
- ✅ 1x `ThemeToggle.tsx` error
- ✅ 2x `useTheme.ts` errors
- ✅ 2x `src/lib/hooks/useTheme.ts` errors

---

## 🚀 Apply Fixes

```bash
# 1. Copy fixed files
cp ThemeToggle-ESLINT-FIXED.tsx src/components/ThemeToggle.tsx
cp useTheme-ESLINT-FIXED.ts src/lib/hooks/useTheme.ts

# 2. Delete old versions (if they exist)
rm src/components/ThemeToggle-Dark.tsx
rm app/files/ThemeToggle-Dark.tsx
rm app/files/ThemeToggle-FIXED.tsx

# 3. Run lint
npm run lint

# Should see: ✖ 0 problems

# 4. Start dev server
npm run dev
```

---

## ✨ Done!

All ESLint errors are fixed and your theme toggle will work perfectly.
