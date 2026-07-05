# Portfolio Redesign — Reference: irash.live

This document records the full analysis, comparison, and implementation plan for the redesign of
`lakshitha.dev` to match the design system of the reference portfolio **https://irash.live/**
(Irash Perera). Only the design system and UX were replicated — no copyrighted assets
(images, logos, written content) were copied.

---

## 1. Comparison: old portfolio vs reference

| Dimension | Old portfolio (v2) | Reference (irash.live) | New portfolio (v3, this redesign) |
|---|---|---|---|
| Framework | Vite + React 19 + Tailwind v4 | Next.js (App Router) | Kept Vite + React 19 + Tailwind v4 (design is framework-agnostic) |
| Theme | Light editorial/Swiss, orange accent `#FF4D2E`, dark inverted sections `#0E0E0E` | Light **glassmorphism**: white page, translucent glass surfaces, black text, no accent color | Matches reference |
| Fonts | Inter only | DM Sans (body/name), Poppins (card titles), Playfair Display + Kaushan Script (slogan) | Matches reference |
| Background | Flat white / `#FAFAFA` | Fixed animated grid canvas behind the whole page | `GridCanvas.tsx` (custom canvas, grid + drifting dots) |
| Nav | Sticky full-width bar, blur on scroll, black pill CTA | **Floating glass pill** (90% width, `border-radius:5rem`, `blur(20px) saturate(180%)`), hamburger → animated X | Matches reference |
| Hero | Editorial split: availability pill, big two-line headline, stats counters, Unsplash image | Centered flex: circular 400×400 photo, **animated gray-gradient name**, **typewriter role + blinking cursor**, meta lines, frosted CTA pills, circular social buttons | Matches reference |
| Buttons | Black/outlined pills | **Frosted-glass pills**, `border-radius:100px`, white ring shadow, `translateY(-3px) scale(1.02)` hover | `.btn` / `.btn-dark` / `.btn-sm` in `index.css` |
| Cards | Hairline-bordered grid cells (`gap-px` trick) | Glass cards: `hsla(0,0%,100%,.1)` fill, `blur(10px)`, `1px` translucent border, `0 8px 32px rgba(31,38,135,.15)` shadow, `border-radius:20px`, lift on hover | `.glass`, `.glass-card` |
| Section headers | Left-aligned eyebrow (mono, uppercase, orange) + big heading | **Centered** small eyebrow ("Explore My" pattern, 1.2rem `#555`) over centered 2.5rem title | `.section-eyebrow` + `.section-title` |
| Animations | motion/react mask reveals, counters | Custom IntersectionObserver `data-reveal` system: fade/left/right/scale/blur, 0.7s `cubic-bezier(.22,1,.36,1)`, staggered delays; bouncy `cubic-bezier(.34,1.56,.64,1)` hovers | `Reveal.tsx` reimplements all 5 variants with motion/react |
| Loading | (unused legacy preloader) | Dark full-screen loading overlay with spinner | `Preloader.tsx` |
| Skills | Static 16-icon grid | **Category filter pills** → icon tile grid, hover reveals experience level overlay | Matches (5 categories, simple-icons + lucide fallbacks) |
| Projects | Dark split carousel | Light glass **carousel** with circular glass arrows, image tilt hover (`scale(1.05) rotate(-2deg)`), tech-chip row over a hairline, GitHub/Live buttons | Matches reference |
| Timeline | (unused legacy) | Milestones vertical timeline with glass markers | `Milestones.tsx` |
| Scroll-to-top | none | Floating circular glass button | `ScrollToTop.tsx` |

### Section order mapping

| Reference section | New portfolio equivalent | Content source |
|---|---|---|
| Loading screen | Preloader ("Just a moment…") | — |
| Hero `#profile` | Hero: photo, gradient name, typewriter roles, CV + Contact buttons, socials | SITE/HERO data |
| About (2 glass cards: Academic Standing / Experience) | Same two-card layout | NSBM degree + BISTEC/Upwork experience |
| "imagine. believe. achieve." slogan | **"dream. build. ship."** (own words, same Playfair + rotated Kaushan treatment) | — |
| Tech Skills (filter pills + tiles) | Same | 5 categories from old SKILLS data |
| Professional Experience | Glass card grid | 4 roles (BISTEC ×2, Upwork, Medium) |
| Research Publications (slider) | **Articles & Writing** slider (Medium feed) — Lakshitha has no publications | Medium RSS (existing hook) |
| Final Year Project feature + Key Achievements grid | **Featured Project**: Agentic AI Travel Planner + 6 achievement cards | Derived from project description |
| Project Highlights carousel | Same carousel | 5 projects (3 with own screenshots from `src/assets`) |
| Achievements (competition photos) | **Certifications** grid — no award data available (see gaps) | 5 certifications |
| Milestones timeline | Same timeline | 6 milestones derived from education/career dates |
| Contact (glass card over feathered bg) | Same, CSS gradient glow instead of bg image | Email/LinkedIn/GitHub/Medium + Upwork CTA |
| Footer + scroll-to-top | Same | — |

### Dropped from old design (not present in reference)
Services, Process ("How I work"), Testimonials, hero stats counters, Upwork-green availability
pill, dark inverted sections. The data was preserved in git history if ever needed.

---

## 2. Design tokens implemented (from reference CSS)

- **Colors**: white page; text `#000` / `#222` / `#555` / `#707070` / `#969696`; hairline `#a3a3a3`;
  glass fills `hsla(0,0%,100%,.05–.35)`; glass borders `hsla(0,0%,100%,.3–.6)`;
  shadows `0 8px 32px rgba(0,0,0,.12)` and `rgba(31,38,135,.15)`; active pill `#333`.
- **Name gradient**: `linear-gradient(270deg,#222,#444 40%,#8e8c8c 80%,#222)`, 400% size,
  10s `ash-gradient-move` shimmer, clipped to text.
- **Type scale**: name 5.8rem→4.4rem (longer name), section title 2.5rem/600, eyebrow 1.2rem `#555`,
  card titles 18px/600/uppercase/2px tracking, buttons 0.95rem/500/.3px.
- **Radii**: buttons/pills 100px, nav 5rem, cards 20px, chips 12–20px, images 1rem/2rem.
- **Easings**: `cubic-bezier(.4,0,.2,1)` (standard), `cubic-bezier(.34,1.56,.64,1)` (overshoot),
  `cubic-bezier(.22,1,.36,1)` (reveals).
- **Reveal variants**: fade (+28px), left (−40px), right (+40px), scale (.9), blur (10px + 16px), 0.7s.
- **Breakpoints**: mobile switch at 768px (hamburger, stacked hero, 85vw circular photo), 600px small tier.

---

## 3. Missing information — needed from Lakshitha

**Blocking (placeholders in place):**
1. **Resume/CV PDF** → put at `public/resume.pdf` (hero "Download CV" links to `/resume.pdf`).
2. **Repo/live URLs** for "Agentic AI Travel Planner" (currently `#`).

**Content gaps (sections omitted or approximated):**
3. **Awards/achievements** (competitions, hackathons, dean's lists) — reference has a photo-rich
   Achievements section; omitted for lack of data. Provide titles + dates + photos to add it.
4. **Final Year Project details** — the Featured Project slot currently showcases the Travel
   Planner; if the actual FYP should be featured, provide name, abstract, and achievements.
5. **Degree progress** — expected graduation / current GPA for Academic Standing card (optional).
6. **Testimonials** — dropped (not in reference); confirm that's acceptable.

**Nice to have:**
7. Confirmation of preferred profile photo (currently `src/assets/myself.jpg` in hero,
   `Lakshitha.jpg` in About).
8. Real screenshots for the two AI projects (currently Unsplash placeholders).

---

## 4. Required images & assets

| Purpose | File | Dimensions | Aspect | Format | Notes |
|---|---|---|---|---|---|
| Hero profile photo | `src/assets/myself.jpg` ✅ (replaceable) | ≥800×800 | 1:1 | JPG/WebP, q80 | Displayed as circle; face centered; no transparency needed |
| About portrait | `src/assets/Lakshitha.jpg` ✅ | ≥760×950 | 4:5 | JPG/WebP | Rounded 2rem corners |
| Project screenshots ×5 | 3 present (Auction/Finance/Waste), 2 placeholders | ≥1000×620 | ~16:10 | PNG/WebP, q80 | AI Agent Platform + Travel Planner need real shots |
| Resume/CV | `public/resume.pdf` ❌ | — | — | PDF <2MB | Hero download button |
| OG share image | `public/og-image.png` ✅ (restyle suggested) | 1200×630 | 1.91:1 | PNG | Update to new glass aesthetic |
| Favicon | `public/vite.svg` (replace) | 512×512 | 1:1 | SVG/PNG | Personal mark suggested |
| Achievement photos (optional) | — | ≥800×600 | 4:3 | JPG/WebP | Only if Achievements section is added |
| Tech icons | — | — | — | — | ✅ Not needed — rendered from `simple-icons` + `lucide-react` packages |
| Backgrounds | — | — | — | — | ✅ Not needed — reference's bg images replaced with CSS gradient glows (`.section-glow`) |

---

## 5. Implementation roadmap (as executed)

1. **Design tokens** — rewrote `src/index.css`: fonts (DM Sans/Poppins/Playfair/Kaushan),
   glass utilities (`.glass`, `.glass-card`, `.glass-strong`), frosted `.btn` system,
   `.category-btn` pills, `.card-title`, name gradient + keyframes, timeline CSS,
   `.section-glow` feathered gradients, reduced-motion reset.
2. **Primitives** — `Reveal.tsx` (5 reveal variants), `GridCanvas.tsx`, `Preloader.tsx`,
   extended `TechIcon.tsx` (+8 icons).
3. **Content model** — restructured `src/data/index.ts`: HERO (typewriter roles, meta lines),
   ABOUT (two cards), SLOGAN, SKILL_CATEGORIES (5 groups + levels), EXPERIENCE_META,
   FEATURED (+6 achievements), PROJECTS (local screenshots), CERTIFICATIONS_META,
   MILESTONES (6 events), CONTACT_META. All personal content preserved.
4. **Sections** — rebuilt Navbar, Hero, About, Slogan, Skills, Experience, Writing (slider),
   FeaturedProject, Projects (carousel), Certifications, Milestones, Contact, Footer, ScrollToTop.
5. **Cleanup** — deleted Services/Process/Testimonials/GitHubStats/CustomCursor/Counter and
   `useGitHubStats`; recomposed `App.tsx` in the reference's section order.
6. **Verification** — `npm run build` (tsc + vite) passes; dev server smoke-tested.

**Follow-ups:** drop in `public/resume.pdf`; review at 360/768/1280 widths; replace the two
Unsplash project images; decide on Achievements section; regenerate `og-image.png`.
