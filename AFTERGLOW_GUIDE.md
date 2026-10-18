# AFTERGLOW — Sunset visual experiment

This branch contains a cinematic sunset visual prototype. Professional experience and project case studies remain placeholders.

## Theme palette

| Token | Color | Use |
| --- | --- | --- |
| `--sunset-midnight` | `#0b0d16` | Deep background |
| `--sunset-twilight` | `#30203e` | Purple dusk |
| `--sunset-coral` | `#ef6b4b` | Warm accent |
| `--sunset-amber` | `#ffad71` | Golden hour |
| `--sunset-gold` | `#ffd3a4` | Light and highlights |
| `--sunset-violet` | `#7a4a79` | Cooler counterpart |

The variables and visual overrides live in `app/sunset.css`. Darker orange CTA colors in `app/ux.css` preserve text contrast.

## Components

- `SunsetAtmosphere.tsx`: persistent CSS backgrounds transitioning across scroll phases.
- `SunsetHeroArt.tsx`: the original inline SVG sun, orbit rings, and perspective grid.
- `AmbientEmbers.tsx`: ~30fps Canvas 2D ember particles over the hero; it pauses when out of view, backgrounded, motion-reduced, or on small/data-saving devices.
- `EngineeringGlyph.tsx`: four original technical SVG diagrams animated on accordion expansion.
- `CelestialMark.tsx`: the decorative About-section orbit.
- `ExperienceSection.tsx`: in-view highlighting for the experience timeline.
- `app/icon.svg` and `app/opengraph-image.tsx`: matching social/brand artwork.

## Scroll phases

- `home` → golden hour
- `works`, `experience`, `services` → afterglow
- `tech`, `about`, `contact` → twilight

These phases come from the existing active-section hook inside `PortfolioShell.tsx`. The older video and orb source files are kept as references but are **not rendered**.

## Change the intensity

- **More or less sunlight:** edit sun gradients in `SunsetHeroArt.tsx` and `.sunset-hero-art` opacity in `sunset.css`.
- **Fewer particles:** lower `Math.min(28, ...)` in `AmbientEmbers.tsx`.
- **Quieter backgrounds:** reduce radial-gradient alpha values in `.atmosphere-golden`, `.atmosphere-afterglow`, and `.atmosphere-twilight`.
- **Less diagram movement:** adjust `sunset-data-flow` in `sunset.css`.
- **Static experience:** enable `prefers-reduced-motion: reduce`; illustrations stay visible and decorative animation stops.

Avoid adding Three.js, a second full-screen canvas, or another background video unless the performance cost is justified.

## Local verification

```sh
git fetch origin
git switch chore/portfolio-content-refresh-audit-fixes
git pull --ff-only
npm ci
npm run check:assets
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Review at 320px, 390px, 768px, 1024px, and 1440px, including reduced-motion, keyboard controls, and screenshot comparisons. The detailed manual checklist is in `UX_TEST_CHECKLIST.md`.

Do not merge into main before replacing fictional experience and project content with verified facts.
