# Work Log

## 2026-05-27

- Applied the live theme bootstrap in `app/layout.tsx` so saved theme preference is set before hydration.
- Updated `app/globals.css` so dark-mode fallback only applies before `data-theme` is set, preventing saved light mode from being overridden by OS dark mode.
- Reworked `components/sections/TeamSection.tsx` to replace invalid `text-var(...)` and `bg-var(...)` class names with valid CSS-variable-aware Tailwind utilities and cleaner card styling.
- Removed obsolete migration artifacts from `app/files/` and deleted backup files that are no longer needed in the live source tree.
- Left the older `components/sections/Team.tsx` file in place as a non-live fallback since it is not imported by the app.
- Added the official Kinertic logo as SVG assets in `public/branding/logo.svg`, `public/favicon.svg`, and `public/apple-touch-icon.svg`, and updated app metadata to use them.
- Added `public/manifest.json` so the browser can load the site icon metadata without 404s.
- Switched the app to the canonical Next metadata icons in `app/icon.svg` and `app/apple-icon.svg` so browser and Apple icon routes are generated from the official mark.
- Removed the now-unused `public/favicon.svg` and `public/apple-touch-icon.svg` aliases to keep the icon source of truth in the app metadata routes.