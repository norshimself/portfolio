# Portfolio UX review — local testing

This branch still contains **draft** project and experience content. UX changes must be tested before merging into `main`.

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

### AFTERGLOW visual and motion review

- [ ] Hero sunset SVG, sun stripes, orbit rings, and horizon grid appear behind the headline without obstructing it.
- [ ] Tiny amber particles drift over the hero on desktop/tablet widths above 768px and are absent on small screens.
- [ ] Scrolling past the hero stops particle work; returning restarts it.
- [ ] Background changes from golden hour through afterglow to twilight as you scroll.
- [ ] Engineering Expertise SVG diagrams are readable on mobile and desktop.
- [ ] Experience milestone dots illuminate as entries come into view.
- [ ] The contact section shows a subtle star field and success confirmation briefly emits a light ring.
- [ ] All text and controls remain legible, including the open hamburger drawer.
- [ ] Setting `prefers-reduced-motion: reduce` disables particle, orbit, and diagram animations without removing the imagery.
- [ ] SVG favicon and Open Graph social preview render correctly.
- [ ] Check at 320px, 390px, 768px, 1024px and 1440px before merging.

### Unified color palette

- [ ] All active navigation, buttons, chips, work cards, and form states use coral/amber/plum rather than neon blue or green.
- [ ] White text on filled CTA buttons stays legible, including hover and disabled states.
- [ ] Subtitle/body/metadata text remains readable on hero, project cards, and twilight contact surfaces.
- [ ] Focus rings remain visible against both dark mauve cards and the navigation drawer.
- [ ] Technology logos remain recognizable on their pale neutral tiles; proficiency indicators use amber, rose, and lavender.
- [ ] The three temporary project cover SVGs and browser favicon match the palette.
- [ ] Error feedback remains distinguishable from success without relying on color alone.

### Left profile card

- [ ] Portrait is sharp and framed by subtle sunset orbital lines on desktop.
- [ ] Name, role, specialties, and existing full-time availability statement remain readable.
- [ ] At 1280×680 the left sidebar can scroll independently to its actions/social links.
- [ ] Main CTA scrolls to Contact, secondary CTA scrolls to Featured Work, and social links match the existing data.
- [ ] At 320, 390, 768, and 1024px the sidebar reduces to one sticky header row.
- [ ] At 320px the menu and contact buttons remain visible and keyboard-accessible.
- [ ] Hamburger dialog still opens above the sidebar, traps focus, and restores focus when closed.
- [ ] Reduced-motion mode disables sidebar orbit/glow movement but preserves artwork.
