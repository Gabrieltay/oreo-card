# Oreo the Sweet Bun 🐰

A single-page digital name card for Oreo, built with Next.js (App Router) and Tailwind CSS. Meant to live behind an Instagram bio link.

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript
- Tailwind CSS v4
- lucide-react for icons
- No backend — all content is hardcoded in [`src/content/oreo.ts`](./src/content/oreo.ts)

## Getting started

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything you'd want to change — name, tagline, quick facts, gallery photos, reels, story, and social links — lives in `src/content/oreo.ts`. Drop real photos into `public/photos/` and point the config entries at them.

To add a reel, add an entry to the `reels` array with the Instagram reel URL and a caption. Instagram blocks thumbnail scraping, so drop a screenshot into `public/photos/` and point `thumbnail` at it — leave it as `""` to show a placeholder until you do. Cards always link out to the real reel on Instagram.

## Structure

- `src/components/Hero.tsx` — photo, name, tagline
- `src/components/QuickFacts.tsx` — breed/birthday/weight/etc. grid
- `src/components/Gallery.tsx` — photo grid with a click-to-open lightbox
- `src/components/Reels.tsx` — reel carousel that links out to Instagram
- `src/components/About.tsx` — story paragraph and achievements
- `src/components/FollowLinks.tsx` — social link buttons

## Deploying

Deploys to [Vercel](https://vercel.com/new) with zero config. Set `NEXT_PUBLIC_SITE_URL` to the production URL so Open Graph/Twitter card images resolve correctly.
