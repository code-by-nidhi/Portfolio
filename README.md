# Portfolio — MERN Stack Developer & Data Analyst

A Next.js 16 (App Router) portfolio with a formal serif/sans pairing, a pastel
palette, and layered 3D depth: pointer-tracked card tilt, translated-Z panel
stacks and extruded, pressable controls.

## Running it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Folder structure

```
src/
├── app/
│   ├── layout.tsx          Fonts, metadata, header/footer shell, ambient scene
│   ├── page.tsx            Section composition for the home page
│   ├── globals.css         Design tokens (@theme) + 3D primitives (@layer components)
│   └── not-found.tsx       404
├── components/
│   ├── layout/
│   │   ├── site-header.tsx Sticky nav, lifts on scroll, mobile drawer
│   │   └── site-footer.tsx
│   ├── sections/           One file per page section, in page order
│   │   ├── hero.tsx        Pointer-driven 3D panel cluster
│   │   ├── marquee-strip.tsx
│   │   ├── practice.tsx    The two disciplines, side by side
│   │   ├── work.tsx        Projects, filterable by discipline
│   │   ├── skills.tsx
│   │   ├── journey.tsx     Timeline
│   │   ├── about.tsx
│   │   └── contact.tsx
│   └── ui/                 Reusable primitives
│       ├── tilt-card.tsx   3D tilt + pointer-tracked glare
│       ├── reveal.tsx      Scroll-in animations (Reveal / RevealGroup / RevealItem)
│       ├── ambient-scene.tsx
│       ├── section-heading.tsx
│       ├── accent.ts       Accent colour → literal Tailwind class map
│       ├── icon.tsx        Named-icon registry over lucide-react
│       └── brand-icons.tsx GitHub / LinkedIn marks (not in lucide v1)
├── data/                   All copy lives here — edit these, not the components
│   ├── profile.ts          Name, links, headline, stats
│   ├── navigation.ts       Nav items + marquee technologies
│   ├── tracks.ts           The two practice tracks
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts       Timeline entries
├── lib/
│   ├── utils.ts            cn() class merger
│   └── motion.ts           Shared framer-motion variants and easing
└── types/index.ts          Shared shapes for the data files
```

`_archive/` holds the previous dark-themed portfolio for reference. It's excluded
from `tsconfig.json` and ESLint, so it never reaches a build.

## Design system

Tokens are declared once in `src/app/globals.css` under `@theme`, which is what
generates the `bg-lilac-mist` / `text-mint-deep` style utilities.

| Role | Tokens |
| --- | --- |
| Surfaces | `ivory`, `shell`, `surface` |
| Text | `ink`, `ink-soft`, `ink-muted` |
| Accents | `lilac`, `mint`, `blush`, `sky`, `sand` — each with `-deep` and `-mist` |
| Type | `font-display` (Playfair Display), `font-sans` (Inter), `font-mono` (JetBrains Mono) |

Custom classes live in `@layer components` so Tailwind utilities always win over
them — `.card-3d`, `.btn-3d`, `.scene`, `.preserve-3d`, `.grid-plane`.

Every animation is disabled under `prefers-reduced-motion`, including the tilt.

## Before publishing

- Replace the two placeholder analytics projects in `src/data/projects.ts`
  (marked `Placeholder — replace`).
- Fill in real periods and organisations in `src/data/experience.ts`.
- Drop a real `resume.pdf` into `public/` — `profile.resumeUrl` points at it.
- Add an `app/opengraph-image.tsx` (or `.png`) for link previews.
