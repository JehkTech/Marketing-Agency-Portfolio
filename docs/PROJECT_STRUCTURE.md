## Project structure

### Runtime entry

- `index.html` mounts the app on `#root` and loads `src/main.tsx`
- `src/main.tsx` renders `App`

### Page composition

The homepage is composed in `src/App.tsx` in this order:

`Hero → AboutUs → Services → Process → CaseStudy → Testimonials → VisionMissionValues → Team → Clientele → Contact → Footer`

Supporting UI and UX elements:

- `Header` (nav + theme toggle)
- `ScrollProgress`
- `ScrollToTop`
- `FloatingCTA`

### Where to edit content

Most page copy and structure is currently **hard-coded in components** (not CMS-driven).

- Section components: `src/components/*.tsx`
- Shared UI primitives: `src/components/ui/*.tsx`

### Assets

- Images/logos are in `public/` so they can be referenced by URL at runtime.
- Common paths:
  - `public/images/*`
  - `public/logos/*`

### Styling

Primary global styles are loaded from `src/index.css`.

### Build and dev server

Vite settings are in `vite.config.ts`:

- Dev server port: `3000`
- Build output: `build/`
