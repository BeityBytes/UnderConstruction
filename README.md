# Under Construction

A minimal single-page Next.js site that says "we're working on it" — nothing more.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Abril Fatface (self-hosted woff2)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/app/
  layout.tsx          root layout, font, metadata, viewport
  page.tsx            the under-construction page
  globals.css         tailwind import + theme tokens
  robots.ts           /robots.txt
  icon.svg            favicon
  AbrilFatface-Regular.woff2
```

## Customize before deploying

- `src/app/page.tsx` — the `mailto:` address (search for `TODO`)
- `src/app/layout.tsx` — title, description, `themeColor`
- Once you have a domain, re-add `src/app/sitemap.ts` (see Next.js docs) and
  point `src/app/robots.ts` at its URL.

The site has no backend, no analytics, no tracking.
