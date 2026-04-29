# dancewithlions.com

The public site of Dancing with Lions — a travel tech company building the cultural intelligence layer of the internet.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS 3.4
- Nexus Supabase (legal pages, newsletter)
- Mapbox (only used on `/data/al-andalus`)

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Thesis + portfolio at a glance |
| `/portfolio` | The properties |
| `/products` | Three product lines (hospitality systems, editorial infrastructure, cultural data infrastructure) |
| `/about` | Company + founder |
| `/privacy`, `/terms`, `/disclaimer`, `/intellectual-property` | Legal — pulled from Nexus Supabase if configured, otherwise served from the local fallback |
| `/data/maghreb-compared`, `/data/al-andalus` | Cultural data modules (linked from `/products`) |
| `/api/knowledge` | Knowledge API manifest |
| `/api/newsletter` | Newsletter subscribe endpoint |

## Local development

```bash
cp .env.local.example .env.local
# fill in Nexus Supabase + Mapbox values
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
| `NEXUS_SUPABASE_URL` | Nexus Supabase project URL |
| `NEXUS_SUPABASE_ANON_KEY` | Nexus Supabase anon key |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox token (only `/data/al-andalus` reads this) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL — defaults to `https://dancewithlions.com` |

When Nexus credentials are absent, legal pages fall back to bundled content and the newsletter endpoint accepts submissions but does not persist them.

## Deploy (Vercel)

1. Import the repo into Vercel.
2. Set the environment variables listed above in Project Settings → Environment Variables.
3. Vercel auto-detects Next.js. Default build command (`next build`) is correct.
4. Add the production domain `dancewithlions.com`.

## Design system

- Display: Instrument Serif (Google Fonts)
- Body / UI: IBM Plex Mono (next/font)
- Palette: pure white background, near-black text, neutral greys. No warm tones — that is Slow Morocco's territory.
- No card borders, no shadows, no rounded corners on containers.
- Animation is restricted to IntersectionObserver fade-and-rise on first paint.

## Conventions

- Don't introduce the words "publisher" or "magazine" anywhere on the public site.
- Founder credit appears only in `/about`, single paragraph, no biographical detail.
- Data modules are deep links from `/products`, not in the primary nav.
