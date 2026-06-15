# Portfolio — Nasroallah Elidrissi

Personal portfolio of [Nasroallah Elidrissi](https://nasroallah.tech), a Software Engineer specialized in backend architecture, data engineering, and full-stack development.

Built with [Next.js](https://nextjs.org) (App Router), React 19, TypeScript, GSAP animations, and a contact form powered by [Resend](https://resend.com).

## Features

- **App Router architecture** with server components and route handlers
- **Animated, single-page experience** — hero, experience, education, services, selected work, process, FAQs, and contact sections (GSAP-driven)
- **Working contact form** — `app/api/contact/route.ts` sends email via Resend
- **SEO & discoverability** — dynamic `sitemap`, `robots`, `manifest`, Open Graph / Twitter images, JSON-LD structured data, and an `llms.txt` route
- **Single source of truth for content** — all copy lives in `data/portfolio.ts` and `data/site.ts`

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file with the credentials required by the contact form:

```bash
RESEND_API_KEY=your_resend_api_key
```

## Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Create a production build     |
| `npm run start` | Run the production build      |
| `npm run lint`  | Lint the codebase with ESLint |

## Project Structure

```
app/                 # App Router pages, layout, and route handlers
  api/contact/       # Contact form endpoint (Resend)
  llms.txt/          # llms.txt route handler
  sitemap.ts         # Dynamic sitemap
  robots.ts          # robots.txt
  manifest.ts        # Web app manifest
components/          # Section and UI components
data/
  portfolio.ts       # Experience, work, services, FAQs, etc.
  site.ts            # SEO metadata & site configuration
types/               # Shared TypeScript types
public/              # Static assets
```

## Editing Content

Update the data files rather than the components:

- `data/site.ts` — name, title, SEO metadata, social links, location
- `data/portfolio.ts` — experience, education, services, selected work, process, FAQs, navigation

## Deployment

Deployed on [Vercel](https://vercel.com). Push to the default branch to trigger a production deployment. Vercel Analytics and Speed Insights are enabled.
