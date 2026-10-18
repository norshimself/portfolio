# Portfolio content refresh

This branch contains draft/fictional experience and project content. Do not merge without replacing placeholders.

## Edit content
- `data/portfolio.ts` → `experiences`: company, role, dates, results.
- `data/portfolio.ts` → `works`: project title, dates, outcome, screenshot, stack, optional href.
- `components/EducationSection.tsx`: replace About text.
- `components/HeroSection.tsx`: refine positioning and specializations.

## Test locally
```sh
git fetch origin
git switch chore/portfolio-content-refresh-audit-fixes
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Open http://localhost:3000 and test 320px, 390px, 768px, 1024px and desktop widths. Test nav anchors, keyboard controls, forms, reduced-motion settings and outbound links.

The contact form requires RESEND_API_KEY and preferably a verified RESEND_FROM_EMAIL. The in-process rate limit is best-effort; configure a shared limiter/WAF for production.
