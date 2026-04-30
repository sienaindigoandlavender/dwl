# dancewithlions.com

The public site of Dancing with Lions. We build calm travel infrastructure for places, hosts, and travelers.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS 3.4
- Mapbox (only used on `/data/al-andalus`)

No backend. Legal copy is bundled. There is no newsletter form and no submission endpoint.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Thesis and portfolio at a glance |
| `/portfolio` | The properties |
| `/products` | Three product lines (hospitality systems, editorial infrastructure, cultural data infrastructure) |
| `/about` | Company and founder |
| `/privacy`, `/terms`, `/disclaimer`, `/intellectual-property` | Legal copy bundled in `lib/legal.ts` |
| `/data/maghreb-compared`, `/data/al-andalus` | Cultural data modules (linked from `/products`) |
| `/api/knowledge` | Knowledge API manifest |

## Local development

```bash
cp .env.local.example .env.local
# add your Mapbox token if you want the atlas map to render
npm install
npm run dev
```

Open http://localhost:3000.

## Type-check and build

```bash
npm run typecheck
npm run build
```

`npx tsc --noEmit` must pass.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox token (only `/data/al-andalus` reads this) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL. Defaults to `https://dancewithlions.com` |

If `NEXT_PUBLIC_MAPBOX_TOKEN` is absent the atlas page renders an empty-state placeholder instead of the map.

## Deploy (Vercel)

1. Import the repo into Vercel.
2. Set the environment variables above in Project Settings, Environment Variables.
3. Vercel auto-detects Next.js. Default build command (`next build`) is correct.
4. Add the production domain `dancewithlions.com`.

## Design system

- Display: Instrument Serif (Google Fonts)
- Body and UI: IBM Plex Mono (next/font)
- Palette: pure white background, near-black text, neutral greys. No warm tones. That belongs to Slow Morocco.
- No card borders, no shadows, no rounded corners on containers.
- Animation is restricted to IntersectionObserver fade-and-rise on first paint.

## Conventions

- Don't introduce the words "publisher" or "magazine" anywhere on the public site.
- Founder credit appears only in `/about`, single paragraph, no biographical detail.
- Data modules are deep links from `/products`, not in the primary nav.
