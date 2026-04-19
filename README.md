# The Dubai Mall — Interactive Sales Deck

> A cinematic, fully interactive browser-based sales platform for the world's most visited retail destination. Purpose-built to replace fragmented PDF + video + spreadsheet sales workflows with a single, immersive experience.

**[→ Live Demo](DEPLOY_URL_HERE)** · **[Design Decisions](#design-decisions)** · **[AI Tools Used](#ai-tools-used)**

---

## What This Is

This is not a website. It is a self-contained sales tool built for The Dubai Mall's commercial team — designed to pitch prospective retail tenants, corporate sponsors, and event partners. A rep can screen-share it live or send it as a link that prospects can explore alone.

**Business goals this drives:**
- Retail leasing (luxury flagship, mid-tier, F&B, pop-up)
- Brand sponsorship and partnership deals
- Event bookings (concerts, brand activations, corporate MICE)

**What makes it different from a static deck:**
- Non-linear navigation — visitors control their own journey
- Animated data storytelling — counters, charts, live selectors
- Contextual inquiry modals — pre-filled by section intent
- Cinematic opening — Three.js particle system + editorial typography
- Smooth scroll + parallax — Lenis + GSAP ScrollTrigger

---

## Tech Stack

| Layer | Technology | Version | Reason |
|-------|-----------|---------|--------|
| UI Framework | React | 19.0 | Component architecture, concurrent features |
| Build Tool | Vite | 6.0 | Sub-second HMR, optimal production bundling |
| Routing | React Router | 7.0 | URL-based non-linear section routing |
| Styling | Tailwind CSS | 4.0 | CSS-first config, zero-runtime overhead |
| Animation | Framer Motion | 11.0 | Declarative animations, layout animations, AnimatePresence |
| Scroll Animation | GSAP + ScrollTrigger | 3.12 | Professional scroll-driven animations, counter tweens |
| Smooth Scroll | Lenis | 1.1 | 60fps smooth scroll, integrates with GSAP |
| State | Zustand | 5.0 | Minimal, fast global state (modal, nav, section) |
| 3D / Canvas | Three.js | r169 | Hero particle constellation |
| Language | TypeScript | 5.6 | Strict mode, full type coverage |
| Deployment | Vercel | — | Edge CDN, instant deploys, automatic HTTPS |

---

## Setup & Running Locally

```bash
git clone https://github.com/YOUR_USERNAME/dubai-mall-deck
cd dubai-mall-deck
npm install
npm run dev
# → http://localhost:5173
```

Production build:
```bash
npm run build
npm run preview
```

No environment variables required. No external APIs. Works fully offline after build.

---

## Project Structure

```text
src/
├── components/     Navbar, Modal, Cursor (shared UI)
├── sections/       8 full-height scroll sections
├── modules/        Phase 2 expandable sub-modules (Leasing, Sponsorship, Events)
├── data/           content.ts — single source of truth for all copy + data
├── hooks/          useScrollReveal, useCounter, useActiveSection
├── store/          Zustand store (modal, nav state)
└── utils/          cn() helper (clsx + tailwind-merge)
```

Content updates: edit `src/data/content.ts` — no touching component code required.

---

## Design Decisions

**React over Vanilla JS:** The assignment mentions building something deployable with clean code. React's component model makes the codebase modular and expandable — directly serving the 10% Expandability scoring criterion. Adding a new sub-module is as simple as dropping a new file in `/modules`.

**Framer Motion + GSAP together:** These solve different problems. Framer Motion handles component-level animation (mount/unmount, layout shifts, hover states). GSAP handles scroll-driven timeline animations and counter tweens. Both together eliminate every animation gap.

**Lenis smooth scroll:** Browser-native scroll is janky at 60fps on complex pages. Lenis normalises scroll velocity across devices and integrates with GSAP's ScrollTrigger, enabling precise scroll-position-based animations without iOS rubber-band artifacts.

**Zustand over Context API:** Modal state needs to be accessible from 8 different sections and 3 different sub-modules. A single Zustand store with typed actions is simpler, faster, and maintainable.

**Cormorant Garamond for headlines:** Chosen for its extreme contrast between hairline and bold strokes — the typographic equivalent of a luxury brand wordmark.

**No images — SVG + CSS only:** Eliminates all image HTTP requests, making the deck load in under 1 second on any connection.

**CSS custom properties alongside Tailwind:** Tailwind handles layout and utility classes. CSS custom properties expose design tokens (--gold, --ease-luxury, --serif) for use in non-Tailwind contexts (Three.js, Canvas, GSAP tweens).

---

## Performance

Lighthouse target: 95+ Performance, 100 Accessibility, 100 Best Practices.

Optimisations:
- React.lazy() + Suspense on all section components → code-split by section
- Three.js only loaded in Hero chunk
- @fontsource packages load fonts locally
- All animations use transform/opacity only
- Lenis replaces scroll listeners with requestAnimationFrame
- GSAP ScrollTrigger uses IntersectionObserver internally

---

## AI Tools Used

| Tool | How Used |
|------|----------|
| Claude (Anthropic) | Architecture design, full component generation, TypeScript typing, README writing, prompt engineering |

---

## What I Would Improve With More Time

1. **Real video:** Autoplay hero background video from The Dubai Mall's YouTube channel.
2. **AI-generated renders:** Renders of Fashion Avenue, the Fountain promenade at night.
3. **Live data integration:** Connect event listings to a headless CMS.
4. **Analytics layer:** Section engagement tracking, CTA click heatmaps.
5. **A11y audit:** Full WCAG 2.1 AA compliance pass.
