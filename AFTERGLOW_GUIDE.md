# AFTERGLOW — Sunset visual experiment

This branch contains a cinematic sunset visual prototype. Professional experience and project case studies remain placeholders.

## Theme palette

The **single source of truth** is the `:root` block at the top of `app/sunset.css`.
`app/globals.css` provides fallback values; `app/ux.css` points its UX tokens to the same sunset values.

| Token | Value | Purpose |
| --- | --- | --- |
| `--sunset-midnight` | `#0B0D16` | Page background |
| `--sunset-night` | `#131321` | Navigation drawer |
| `--sunset-surface` | `#1B182A` | Work card background |
| `--sunset-surface-raised` | `#292037` | Tooltips and elevated content |
| `--sunset-twilight` | `#30203E` | Dusk illustration and gradients |
| `--sunset-violet` | `#7A4A79` | Purple accent |
| `--sunset-coral` | `#EF6B4B` | Brand accent, glows and decorative details |
| `--sunset-amber` | `#FFAD71` | Links and interactive highlights |
| `--sunset-gold` | `#FFD3A4` | Headings, fine details and focus rings |
| `--sunset-ink` | `#F9F0EB` | Primary body text |
| `--sunset-ink-soft` | `#E3D5D2` | Descriptions and supporting text |
| `--sunset-ink-muted` | `#C8B6C1` | Labels and metadata |
| `--sunset-action` | `#BD4939` | Filled buttons with white labels |
| `--sunset-action-hover` | `#99372F` | Button hover |
| `--sunset-error` | `#FFB1A9` | Validation and form errors |

**Contrast:** White on `#BD4939` is approximately **5:1** (WCAG AA for normal-sized text). 
The lighter coral `#EF6B4B` is for decoration and text on dark surfaces, **not** a white-label button background.
Gold and warm muted text remain readable on the midnight/surface backgrounds.

The compatibility tokens `--primary`, `--bg`, `--text`, `--card`, and `--border` map existing components to the canonical palette.
Tech brand logos intentionally retain their own original trademark colors.

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

- **Change all accent/CTA colors:** edit tokens in the top `:root` block of `app/sunset.css`, particularly `--sunset-coral`, `--sunset-amber`, and `--sunset-action`. Keep the last dark enough for white labels.
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

## Left profile section — AFTERGLOW identity

The left sidebar is now a profile and navigation anchor rather than a second hero: framed portrait with custom sunset orbit linework, name and software-engineering role from `data/site.ts`, backend/data specialties, availability, and two meaningful CTAs.

- **Component:** `components/LeftSidebar.tsx` (one rendering for all breakpoints).
- **Styles:** `app/sidebar.css`, imported after `app/sunset.css`.
- **Desktop:** independent scrolling on short viewports keeps contact and social links reachable.
- **≤1024px:** avatar, name/role, contact button, and burger button become a single compact sticky header; decorative elements and lower-priority actions are hidden.
- **Motion:** orbit and glow animation turn off with reduced-motion preferences.
- **No fabricated links:** socials come from `data/portfolio.ts`, and the secondary CTA points to the real Featured Work anchor. A CV button can be added once a verified CV file exists.
