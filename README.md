# Fame Business Solutions — Luxury Agency Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Folder structure
```
src/
  app/                    → pages (one folder = one URL)
    page.tsx              → Home
    services/             → /services  +  services/[slug] (14 SEO service pages)
    portfolio/ pricing/ about/ investment/ contact/
    sitemap.ts robots.ts manifest.ts   → SEO files (auto-generated)
    globals.css           → THEME COLORS & fonts (edit @theme block)
  components/
    layout/               → Header, Footer, floating WhatsApp/Call buttons
    sections/             → reusable page sections (Hero, Pricing, FAQ…)
    ui/                   → small building blocks (Button, Icon, Reveal…)
  data/                   → ALL TEXT CONTENT lives here
    site.ts               → name, phone, email, address, nav, stats
    services.ts           → services list
    projects.ts           → portfolio + featured project + partner logos
    content.ts            → testimonials, process, FAQs, pricing, investment
  lib/seo.ts              → metadata helper + Google structured data
public/images/            → logo, project screenshots, partner logos
```

## Common edits
- **Phone / email / address** → `src/data/site.ts`
- **Add a project** → put image in `public/images/projects/`, add a line in `src/data/projects.ts`
- **Add a service** → add an object in `src/data/services.ts` (page is created automatically)
- **Colors** → `src/app/globals.css` (`--color-gold`, `--color-ink` …)
- **Live domain for SEO** → set `NEXT_PUBLIC_SITE_URL` in `.env` (default: https://famebusinesssolutions.com)
- **Contact form** currently sends the enquiry to WhatsApp. To send email instead, add an API route.
