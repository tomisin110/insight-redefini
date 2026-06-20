# Insight Redefini

Internal staff training platform UI scaffold — built with Next.js 14 (App Router) + Tailwind CSS.

This is a **front-end scaffold with mock data**, meant to validate the UX/visual direction before
wiring up real auth, database, and video infrastructure. See the production architecture notes below.

## Pages included

- `/` — Sign-in (company-account only)
- `/dashboard` — Learner home: assigned courses, required training, progress
- `/courses/[slug]` — Course detail with lesson player and outline
- `/instructor` — Instructor desk: courses you present, average completion
- `/instructor/new` — New course / video upload form
- `/admin` — Compliance records table (completion by staff member)

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

This repo includes a `netlify.toml` configured with `@netlify/plugin-nextjs`.
Connect the repo in Netlify → it will auto-detect the build command and deploy.

## Production architecture (next steps beyond this scaffold)

| Layer | Tool |
|---|---|
| Auth | Clerk (company-domain restricted, role-based) |
| Database | Neon (serverless Postgres) |
| ORM | Drizzle |
| Video | Cloudflare Stream (signed, expiring playback URLs) |
| File storage | Cloudflare R2 |
| Hosting | Vercel (recommended for production; this scaffold targets Netlify for quick preview) |
| Monitoring | Sentry (errors), UptimeRobot (uptime), Vercel Analytics (performance) |

Mock data lives in `lib/mock-data.ts` — replace with Drizzle queries against Neon once the
database layer is wired up.

## Design system

- **Colors:** Ink `#1B2430`, Paper `#F1F0EC`, Brass `#9C7A3C`, Slate `#5B6472`, Ledger `#3F6B52`, Hairline `#D8D4C8`
- **Type:** Fraunces (display), Inter (body), IBM Plex Mono (data/labels)
- **Motif:** courses presented as dossier/folder-tab records rather than marketplace cards — reflects the internal, confidential nature of the content
