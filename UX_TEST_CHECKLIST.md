# Portfolio UX review — local testing

This branch still contains **draft experience** content. The 13 repository-grounded Projects overviews are published on the feature branch; verify personal contributions and actual outcomes before merging into `main`.

## Quick start

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

Visit `http://localhost:3000`.

## What to check manually

### Navigation — desktop, tablet, mobile

- [ ] At **320, 375, 390, 768, 1024, and 1440px**, no horizontal scrolling or overlapping header/dock.
- [ ] At ≤1024px, the header shows a visible 44px **menu button**, and five thumb-friendly bottom navigation items.
- [ ] Opening the menu moves keyboard focus to **Close**; Tab and Shift+Tab remain inside the open drawer.
- [ ] **Escape**, the Close button, and clicking outside close the drawer, restoring focus to the menu button.
- [ ] Selecting a menu link closes the drawer and takes you to the **correct section** without a heading hidden under the sticky header.
- [ ] Keyboard **Skip to content** is visible on focus.
- [ ] Quick navigation updates as you scroll; anchors for Work, Experience, Expertise, Tech Stack, About, and Contact work.

### Projects, Expertise, Tech Stack

- [ ] Project previews are fully visible; descriptions, badges, and dates sit **below** the image on all widths.
- [ ] Placeholder cards have no misleading external links; real project entries get a visible **View project** link.
- [ ] Expertise expands with click, Enter, or Space; **aria-expanded** and the visible panel agree.
- [ ] Tech filter buttons switch categories, show result counts, and **View all** expands the full set without nested scrolling.
- [ ] Long text, small screens, and 200% browser zoom do not cause clipping.

### Contact

- [ ] Empty or malformed email and short message produce descriptive field errors.
- [ ] Phone is optional, and required fields are communicated to assistive tech.
- [ ] On submit, the button shows a loading state and cannot be submitted twice.
- [ ] If no `RESEND_API_KEY` is configured, the error remains visible and includes a direct **email** option.
- [ ] Success state (only with valid email configuration) shows confirmation and a clear **Write another message** action.

### Comfort and performance

- [ ] Keyboard focus is visible everywhere, including links and buttons.
- [ ] At reduced-motion system settings, scroll reveals and the background video do not animate.
- [ ] On mobile, the bottom dock and the keyboard do not hide the contact Submit button.
- [ ] In DevTools Network, tech logos load locally from `/assets/icons/tech`.

Report any failed checks with a screenshot, viewport size, browser, and console messages.

### Projects and Writing

- [ ] `/projects` and `/blog` show the shared header, sidebar, dock and footer at 320–1440px.
- [ ] In `npm run dev`, the unpublished blog starter appears with a LOCAL DRAFT label; the Projects index contains 13 published entries and no placeholder case-study card.
- [ ] In `npm run build && npm start`, unfinished draft cards are hidden and unfinished detail URLs return 404.
- [ ] Table-of-contents links scroll to correct headings and images remain within the content column.
- [ ] Code blocks scroll horizontally and their Copy buttons work.
- [ ] From the new pages, the drawer and dock navigate back to `/#experience`, `/#works` and `/#contact` correctly.
- [ ] Footer links Home, Projects, Writing, Work, and Contact function from all routes.
- [ ] Published items appear in `/sitemap.xml`; only published blog posts appear in `/rss.xml`.
- [ ] After publishing a featured case study, homepage Featured Work pulls the real entry without showing sample cards.
- [ ] After publishing a blog post, Latest Writing appears on the homepage.

### Imported project archive

- [ ] Exactly 13 project cards appear (retail-os is not duplicated).
- [ ] The Projects filters show Platforms, Websites, Commerce, Community, Mobile, and All, with correct counts.
- [ ] Searching `PostgreSQL`, `Next.js`, `Expo`, `Discord`, and an unmatched string updates the results and empty state without changing the page URL.
- [ ] Every project card links to its `/projects/[slug]` page; 13 conceptual SVG covers render on mobile/desktop without cropping important elements.
- [ ] Homepage Featured Work shows Retail OS, POS System, and Integrivo Platform, with internal case-study links.
- [ ] Private repositories do not expose inaccessible source URLs. Yuugen links to its public GitHub repository.
- [ ] Project website links are checked manually and open safely in new tabs.
- [ ] Each case study clearly distinguishes implemented features, concepts/prototypes, and still-in-progress integrations.
- [ ] Project descriptions match real contributions; do not merge without reviewing attribution and outcomes.
