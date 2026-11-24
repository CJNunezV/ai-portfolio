# Christopher Nuñez — Portfolio

Personal site of Christopher Nuñez, Civil Engineer & Research Analyst working on Scan-to-BIM, point clouds and AI, BIM automation (Revit / Navisworks APIs), and digital twins.

Built with **Next.js 16**, **React 19**, and **TypeScript**, using:

- [`motion`](https://motion.dev) — scroll reveals, filter transitions, and the animated nav indicator (respects the OS "reduce motion" setting)
- [`next-themes`](https://github.com/pacocoursey/next-themes) — light/dark mode that follows the OS and doesn't flash on load
- [`yet-another-react-lightbox`](https://yet-another-react-lightbox.com) — zoomable full-screen image viewer for project and talk photos
- [`lucide-react`](https://lucide.dev) — icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Updating content

All text, projects, publications, talks, and recommendations live in **`app/data/portfolio.ts`**. Components in `app/components/` only handle layout and interaction, so most updates never touch them.

| To… | Edit in `portfolio.ts` |
| --- | --- |
| Add a project | append to `projects` (images go in `public/projects/<id>/`) |
| Add a paper | append to `publications`; leave `doi: null` until it's assigned |
| Add a talk | append to `talks` (photos in `public/talks/<id>/`, flag code from `public/flags/4x3/`) |
| Add a CV button | put the PDF in `public/` and set `profile.cv = "/cv.pdf"` |
| Add project links | add `links: [{ label: "Demo video", href: "https://…" }]` to a project |

Flags: only the ones in use are kept in `public/flags/4x3/`. For a new country, download its SVG from [flag-icons](https://github.com/lipis/flag-icons/tree/main/flags/4x3).

## Deploy

Deploys as a static page on Vercel. Set `NEXT_PUBLIC_SITE_URL` to your custom domain so social-preview links use it.
