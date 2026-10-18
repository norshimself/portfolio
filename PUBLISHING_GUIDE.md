# Projects & Engineering Notes — Publishing Guide

These pages share your portfolio's dark/orange layout and navigation. Both collections are currently unpublished drafts; no unverified claims are published as projects or articles.

## Where the content lives

| Content | Source | URL |
| --- | --- | --- |
| Project listing | `content/projects/*.md` | `/projects` |
| Project detail | One `.md` per case study | `/projects/<slug>` |
| Blog listing | `content/blog/*.md` | `/blog` |
| Article detail | One `.md` per post | `/blog/<slug>` |
| Homepage featured work | Published projects with `featured: true` | `/` |
| Homepage latest writing | Two newest published blog posts | `/` |

## Create a case study

1. Copy `content/projects/backend-integration-case-study.md` to `content/projects/my-project.md` (use a lowercase kebab-case filename).
2. Replace the title, summary, real role, dates, tags, technologies, architecture, results and complete body. Do not invent outcomes or disclose private client data.
3. Add an original image or diagram under `public/assets/` and reference it with an absolute `/assets/...` path.
4. Add real, public `repository` and `demo` URLs if applicable; both are optional.
5. Keep `published: false` while writing. Set a real date and switch to `published: true` only when ready.
6. Set `featured: true` to have the published project automatically appear under Featured Work on the homepage.

Example project frontmatter (replace every sample field before publishing):

```yaml
---
title: "Verified project title"
description: "A concise, factual description of the engineering problem."
date: "2026-10-18"
tags: ["Backend", "API Design"]
stack: ["TypeScript", "PostgreSQL"]
role: "Actual engineering role"
period: "Real dates"
cover: "/assets/images/works/my-project.webp"
repository: "https://github.com/example/public-repository"
published: false
featured: false
---
```

## Create an article

1. Copy `content/blog/reliable-api-integrations.md` to a new slug in `content/blog/`.
2. Replace the draft with original engineering explanations, verified examples, and useful references.
3. Update the title, summary, tags, and real publication date.
4. Preview locally. Change `published: true` when the article is finished.

New published posts appear on `/blog`, in `/rss.xml`, in `/sitemap.xml`, and in the homepage Latest Writing section.

## What draft mode does

- `npm run dev` shows local drafts in the two listing pages. Cards are visibly marked LOCAL DRAFT and detail pages can be opened.
- `npm run build` and deployed production builds hide draft cards and return 404 for unpublished detail URLs.
- Drafts do not appear in the homepage, sitemap, or RSS feed.
- The existing fictional Featured Work and Experience cards in `data/portfolio.ts` are unchanged until replaced.

## Supported Markdown

The built-in safe renderer currently supports H2/H3 headings, paragraphs, bold/italic, inline code, ordered/unordered lists, blockquotes, horizontal rules, clickable safe links, local images, and fenced code blocks with copy controls and simple syntax coloring.

Use e.g. `![Architecture diagram](/assets/images/works/diagram.svg)` to embed a local image.

This is a deliberately **limited Markdown subset**, not a full CommonMark/MDX engine. HTML, executable MDX/JavaScript, embedded components and complex Markdown tables are not supported yet; we can upgrade to full MDX later if needed.

## Verify locally

```sh
git fetch origin
git switch chore/portfolio-content-refresh-audit-fixes
git pull --ff-only
npm ci
npm run check:content
npm run check:assets
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Open `/projects` and `/blog` in development, then open the sample cards. Test code copying, image sizing, table-of-contents anchors, mobile navigation, menu dismissal, and return links.

The project/experience content is still in a draft branch; don't merge it into `main` until those entries are factually complete.
