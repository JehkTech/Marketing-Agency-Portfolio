## Kinertic Media Arts — guidelines

Use this as the project’s “house rules” for contributors and for AI-assisted edits.

### Non-negotiables

- Keep the site **fast** (avoid heavy dependencies and large client bundles).
- Keep the UI **conversion-focused** (clear CTAs, readable hierarchy, no gimmicks).
- Preserve the current **section-based homepage flow** unless explicitly changing IA.

### Code conventions

- **Components**: prefer small, single-purpose components in `src/components/`.
- **UI primitives**: use/extend `src/components/ui/*` instead of creating new one-off primitives.
- **Naming**: `PascalCase` React components, `camelCase` variables/functions.
- **Imports**: use relative imports inside `src/` unless there’s an existing alias.
- **Avoid**: duplicated styling logic across sections; extract shared patterns.

### Styling conventions

- Use utility classes consistently (Tailwind-style).
- Use responsive layout primitives first (`flex`, `grid`, spacing) and only reach for absolute positioning when required for a specific visual effect.
- Keep animations subtle; prioritize readability and accessibility.

### Content and assets

- Prefer putting new images/logos in `public/images` and `public/logos`.
- Reference assets with absolute paths (e.g. `/images/hero.jpg`) so builds behave the same locally and in production.
- Don’t add unlicensed assets. Track any third-party assets in `src/Attributions.md`.

### Accessibility

- Ensure interactive elements have clear focus states and meaningful labels.
- Don’t rely on color alone to communicate state.

### Environment variables

- This is a Vite project: client-exposed vars must be `VITE_*`.
- Don’t add real secrets to client-side env. Keep keys server-side.
