# Elijah Craig Barrel Proof Rye — Landing Page

Whisky Advocate sponsored microsite for **Elijah Craig Barrel Proof Rye**, named [Whisky Advocate's 2025 Whisky of the Year](https://www.prnewswire.com/news-releases/elijah-craig-barrel-proof-rye-named-whisky-advocates-2025-whisky-of-the-year-302634355.html).

Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion — following the same architecture as Casa Dragones, Vins de Loire, and Deutsch landing pages.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to [Vercel](https://vercel.com) with the included `vercel.json`. Set `NEXT_PUBLIC_SITE_URL` to your production URL for correct Open Graph metadata.

## Primary CTA

All buy buttons link to the official Elijah Craig buy-now page:

[https://elijahcraig.com/buy-now?p=barrel-proof](https://elijahcraig.com/buy-now?p=barrel-proof)

## Content

Copy and product details are centralized in `src/lib/content.ts` — sourced from client boilerplate, press releases, and the official product page.

## Assets

See [ASSETS.md](./ASSETS.md) for the full inventory of client source files and how they map to the site.

After adding or updating files in the project folder (e.g. `EC_BarrelProof_Rye_CaseTucker_2026.png`):

```bash
npm run sync-assets
```

| Asset | Location |
|-------|----------|
| Hero (Case Tucker 2026) | `EC_BarrelProof_Rye_CaseTucker_2026.png` → `public/assets/hero/` |
| Brand standards (reference) | `EC_BRANDSTANDARD_2024.pdf` |
| Press releases (reference) | `screencapture-prnewswire-*.pdf` |

## Sections

1. **Hero** — WOTY badge, dual CTAs
2. **Brand Story** — The Father of Bourbon
3. **Product** — Barrel Proof Rye tasting notes, stats, batch A925
4. **Craftsmanship** — Barrel proof process & batch system
5. **Heritage** — Since 1789
6. **Accolades** — Awards grid
7. **Press Quotes** — Heaven Hill leadership
8. **Footer** — Buy Now CTA + Whisky Advocate disclosure
