# Portfolio content & asset refresh

This branch is a **draft**. Experience and Featured Work contain Lorem Ipsum examples. Replace every placeholder before production.

## Content to edit

- `data/portfolio.ts` — `experiences`: replace company names, roles, dates, descriptions and verified achievements.
- `data/portfolio.ts` — `works`: replace project titles, summaries, roles, dates, stacks and image paths. Add an `href` only when there is a real destination.
- `data/portfolio.ts` — `services` and `techStack`: keep relevant, defensible skills.
- `components/EducationSection.tsx` — personalize the About paragraph.
- `components/HeroSection.tsx` — adjust your positioning and calls to action.

## Fonts and assets

- **Body/UI:** Geist via `next/font/google`.
- **Display headings:** Rajdhani via `next/font/google`.
- Typography is controlled in `app/globals.css`; do not add another `@import` for these fonts.
- `public/assets/images/about/profile.webp` is your existing portrait. Replace it with a professionally cropped WebP if needed and preserve the same path.
- `public/assets/images/works/placeholder-01.svg` through `placeholder-03.svg` are neutral **draft artwork**, not screenshots. Replace their `works[].image` references with real screenshots later; the previous WebP project screenshots are still in the repository.
- Tech logos are now bundled in `public/assets/icons/tech`, based on Devicon (MIT; see `public/assets/icons/tech/DEVICON-LICENSE.txt`). Nine tools without a dependable vector logo show a styled letter badge.
- The decorative `hero-bg.mp4` plays only on desktop after load; it is skipped on reduced-motion and data-saving connections.
- `app/favicon.ico` remains your favicon, and `app/opengraph-image.tsx` generates the social preview.

## Local validation

```sh
git fetch origin
git switch chore/portfolio-content-refresh-audit-fixes
npm ci
npm run check:assets
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and check typography, icons, avatar, project covers and video on desktop and mobile. Test widths 320px, 390px, 768px, 1024px and 1440px. Open Chrome DevTools > Network to confirm tech icons load from `/assets/icons/tech/` rather than external icon hosts.

The contact form needs `RESEND_API_KEY` and preferably a verified `RESEND_FROM_EMAIL` in `.env.local`. The in-memory limiter is only best-effort; configure a shared limiter or WAF for production.


## UX changes

- The navigation drawer now supports focus trapping, Escape to close, focus restoration, and a visible hamburger on mobile and tablet.
- The bottom navigation and drawer share the active-section state.
- Featured Work displays readable details below every preview, plus an explicit outbound CTA for real links.
- Engineering Expertise uses native button accordions; Backend and Data Engineering appear first.
- Contact validation, form status, direct email, and error feedback are more accessible.
- See `UX_TEST_CHECKLIST.md` for keyboard, responsive, and contact testing.
