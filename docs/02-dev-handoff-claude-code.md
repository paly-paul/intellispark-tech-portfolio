# Intellispark Technologies — Next.js Dev Handoff

**For:** Claude Code  
**Project:** intellispark.tech  
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS (or CSS Modules — see Section 4)  
**Source:** 15 completed static HTML files (Phase 3)  
**Goal:** Migrate static HTML to a production-ready Next.js application, component-first

---

## 1. Project Context

Intellispark Technologies is a GCC and talent solutions firm based in Kochi, India. The website targets US, UK, and ANZ markets. The static HTML build (Phase 3) is the design source of truth — do not redesign; migrate faithfully.

**Design decisions are final. This handoff is about engineering, not redesign.**

Key brand constraints:
- Font: **Inter** (Google Fonts) — weights 400, 500, 600, 700, 800
- Icons: **Phosphor Icons v2.1.1** — three variants used: `ph-bold`, `ph-fill`, `ph-duotone`
- CTA label: **"Book a Call"** — never varies, never "Contact Us" or "Get Started"
- No emoji anywhere
- Target: US / UK / ANZ — copy is written for these markets

---

## 2. Source Files

All 15 HTML files are self-contained. Every file includes:
- Full `:root` CSS variable tokens
- Nav HTML (identical across all pages)
- Footer HTML (identical across all pages)
- Page-specific CSS in `<style>` block
- Page-specific HTML in `<body>`
- Single JS IIFE at bottom of `<body>`

```
index.html                   Homepage
gcc-setup.html               /gcc-setup
bot-copo.html                /bot-copo
staff-augmentation.html      /staff-augmentation
product-engineering.html     /product-engineering
aipods.html                  /aipods
service-delivery.html        /service-delivery
for-mid-market.html          /for/mid-market
for-enterprise.html          /for/enterprise
for-startups.html            /for/startups
for-gcc-optimise.html        /for/gcc-optimise
kochi-advantage.html         /kochi-advantage
case-studies.html            /case-studies
about.html                   /about
book-a-call.html             /book-a-call
```

---

## 3. Next.js App Router Structure

```
src/
├── app/
│   ├── layout.tsx                   Root layout — Nav + Footer + fonts
│   ├── page.tsx                     Homepage /
│   ├── gcc-setup/
│   │   └── page.tsx
│   ├── bot-copo/
│   │   └── page.tsx
│   ├── staff-augmentation/
│   │   └── page.tsx
│   ├── product-engineering/
│   │   └── page.tsx
│   ├── aipods/
│   │   └── page.tsx
│   ├── service-delivery/
│   │   └── page.tsx
│   ├── for/
│   │   ├── mid-market/
│   │   │   └── page.tsx
│   │   ├── enterprise/
│   │   │   └── page.tsx
│   │   ├── startups/
│   │   │   └── page.tsx
│   │   └── gcc-optimise/
│   │       └── page.tsx
│   ├── kochi-advantage/
│   │   └── page.tsx
│   ├── case-studies/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── book-a-call/
│       └── page.tsx
│
├── components/
│   ├── nav/
│   │   ├── Nav.tsx                  Global nav with dropdown + mobile
│   │   └── Nav.module.css
│   ├── footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── ui/                          Shared primitives
│   │   ├── Button.tsx               CTA button variants
│   │   ├── PhosphorIcon.tsx         Icon wrapper (see Section 6)
│   │   └── SectionEyebrow.tsx       Reusable eyebrow label
│   ├── templates/
│   │   ├── ConsolePage.tsx          Service/For pages layout (10 pages share this)
│   │   ├── EditorialPage.tsx        Kochi Advantage
│   │   ├── PortfolioPage.tsx        Case Studies
│   │   ├── ManifestoPage.tsx        About
│   │   └── FormPage.tsx             Book a Call
│   └── sections/                    Homepage-specific section components
│       ├── HeroSection.tsx
│       ├── SegmentsSection.tsx
│       ├── ServicesSection.tsx
│       ├── KochiSection.tsx
│       ├── CaseStudiesSection.tsx
│       ├── CtaStripSection.tsx
│       └── FaqSection.tsx
│
├── styles/
│   ├── globals.css                  :root tokens + resets
│   └── aos.css                      Animate-on-scroll utility classes
│
├── lib/
│   ├── types.ts                     Shared TypeScript interfaces
│   └── content/                     All page content as data (see Section 8)
│       ├── services.ts
│       ├── forPages.ts
│       └── caseStudies.ts
│
└── public/
    └── fonts/                       Optional: self-host Inter here (see Section 5)
```

---

## 4. Styling Approach

**Recommendation: CSS Modules**, not Tailwind.

The static HTML uses a bespoke CSS variable system with significant custom properties. The design is already written — converting to Tailwind utility classes would require re-mapping every value and risks visual drift. CSS Modules preserves the existing CSS with minimal transformation.

**Approach:**
- Extract the existing `<style>` block from each HTML file directly into a `.module.css` file
- Use `globals.css` for `:root` tokens, resets, and the `aos` animation utility
- Components import their own module

**`:root` token system** — extract verbatim from any HTML file's `<style>` block. Key tokens:

```css
/* Paste the full :root block from any source HTML file here */
/* Key tokens for reference: */
--teal:        #00B8A9;
--blue:        #2D5BFF;
--navy:        #0A0F1E;
--gray-50:     #F8F9FA;
--white:       #FFFFFF;
--white-70:    rgba(255,255,255,0.70);
--white-55:    rgba(255,255,255,0.55);
--white-40:    rgba(255,255,255,0.40);
--white-30:    rgba(255,255,255,0.30);
--white-15:    rgba(255,255,255,0.15);
--white-10:    rgba(255,255,255,0.10);
--white-08:    rgba(255,255,255,0.08);
--white-06:    rgba(255,255,255,0.06);
--blue-pale:   rgba(45,91,255,0.08);
--teal-light:  rgba(0,184,169,0.12);
--nav-height:  68px;
--font:        'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
/* Full token list: extract from source HTML :root block */
```

---

## 5. Fonts

**Inter via `next/font/google`** — do not use a `<link>` tag in the App Router.

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

Then in `globals.css`:
```css
--font: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## 6. Phosphor Icons

**Install the React package, not the CDN.**

```bash
npm install @phosphor-icons/react
```

Usage in components:
```tsx
import { Buildings, ArrowsClockwise, UsersThree } from '@phosphor-icons/react'

// The HTML source uses class-based variants: ph-bold, ph-fill, ph-duotone
// In the React package these map to weight props:
<Buildings weight="bold" size={20} />
<Buildings weight="fill" size={20} />
<Buildings weight="duotone" size={20} />
```

**Icon mapping from HTML source:**
The HTML uses class names like `ph-bold ph-buildings`. In the React package, split on the class: the second class after `ph-bold/ph-fill/ph-duotone` is the icon name in kebab-case → convert to PascalCase for the import.

Examples:
- `ph-bold ph-buildings` → `<Buildings weight="bold" />`
- `ph-fill ph-check-circle` → `<CheckCircle weight="fill" />`
- `ph-bold ph-rocket-launch` → `<RocketLaunch weight="bold" />`
- `ph-duotone ph-user` → `<User weight="duotone" />`

Create a shared wrapper if needed:
```tsx
// components/ui/PhosphorIcon.tsx
import type { Icon, IconWeight } from '@phosphor-icons/react'

interface Props {
  icon: Icon
  weight?: IconWeight
  size?: number
  style?: React.CSSProperties
  className?: string
}

export function PhIcon({ icon: IconComponent, weight = 'bold', size = 20, ...rest }: Props) {
  return <IconComponent weight={weight} size={size} {...rest} />
}
```

---

## 7. Component Architecture

### 7a. Nav Component

The nav is identical across all 15 pages. Extract from any source HTML's `<nav>` block (lines ~3602–3698 in index.html).

**Behaviours to implement:**
- `scrolled` class added to `<nav>` when `window.scrollY > 10` — triggers glassmorphism background (`backdrop-filter: blur(14px)`)
- Services dropdown: `opacity + translateY` transition, toggled on click/hover, closed on `Escape` or overlay click
- Mobile hamburger: toggles `open` class on mobile menu panel
- Active link highlighting — use `usePathname()` from `next/navigation`

```tsx
'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close on route change
  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
  }, [pathname])

  // ...render from source HTML structure
}
```

**Logo:** Currently a CSS-drawn logo-mark (gradient square + lightning bolt SVG). When real SVG brand assets are provided, replace the entire `nav__logo` block. Placeholder is in the source HTML — copy it verbatim.

### 7b. Footer Component

Identical across all pages. Extract from source HTML footer block (lines ~5070–5226 in index.html).

**Behaviours:**
- Newsletter subscribe: client-side validation (requires `@` in input), then shows confirmation state. No backend wired yet — leave as a controlled component that calls a future API route.
- All footer links use Next.js `<Link>` — not `<a>` tags.

### 7c. ConsolePage Template

Used by all 6 service pages and all 4 for/ audience pages (10 pages total).

```tsx
// components/templates/ConsolePage.tsx
interface NavSection {
  id: string
  label: string
}

interface RelatedLink {
  label: string
  href: string
}

interface ConsolePageProps {
  eyebrow: string
  icon: React.ReactNode          // Phosphor icon component
  h1: string
  intro: string
  accent: string                 // CSS colour value e.g. 'var(--blue)'
  badgeText: string
  navSections: NavSection[]
  related: RelatedLink[]
  children: React.ReactNode      // Feat sections
}
```

**Sticky left rail scroll-spy:** Use `IntersectionObserver` (not `useEffect` with scroll listener) to track active section. The observer fires when sections enter/leave the viewport; update active state accordingly.

```tsx
useEffect(() => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.snav__link')
  const sections = Array.from(links).map(l =>
    document.querySelector(l.getAttribute('href') ?? '')
  )

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'))
          const link = document.querySelector(`.snav__link[href="#${entry.target.id}"]`)
          link?.classList.add('active')
        }
      })
    },
    { rootMargin: '-20% 0px -70% 0px' }
  )

  sections.forEach(s => s && observer.observe(s))
  return () => observer.disconnect()
}, [])
```

### 7d. Case Studies Filter

The case studies page has a client-side JS filter (no routing). Implement as a `'use client'` component with a `selectedFilter` state. Categories: `all`, `gcc`, `augmentation`, `engineering`, `optimise`.

```tsx
'use client'
const [filter, setFilter] = useState<string>('all')

// Filter cards:
const visible = filter === 'all' ? cards : cards.filter(c => c.category === filter)
```

### 7e. AOS (Animate on Scroll)

The HTML uses a custom IntersectionObserver that adds `is-visible` class to elements with `.aos` class. Implement as a single client component or a custom hook:

```tsx
// hooks/useAOS.ts
'use client'
import { useEffect } from 'react'

export function useAOS() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 }
    )
    document.querySelectorAll('.aos').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
```

Call `useAOS()` in the root layout or in a `<AOSProvider>` client wrapper. Delay variants (`.aos-delay-1`, `.aos-delay-2`, etc.) are controlled by CSS `transition-delay`.

---

## 8. Content Strategy

**Extract all page content into TypeScript data files** — do not hardcode strings in JSX. This makes future CMS migration straightforward.

```ts
// lib/content/services.ts

export interface FeatSection {
  id: string
  eyebrow: string
  title: string
  body: string          // HTML string or MDX — decide based on CMS plan
  subsections?: any[]   // checklist, stepList, capGrid, statRow, etc.
}

export interface ServicePage {
  slug: string
  title: string
  meta: string
  eyebrow: string
  icon: string          // Phosphor icon name e.g. 'Buildings'
  iconWeight: string
  h1: string
  intro: string
  accent: string
  badgeText: string
  navSections: { id: string; label: string }[]
  related: { label: string; href: string }[]
  sections: FeatSection[]
}

export const servicePages: ServicePage[] = [
  {
    slug: 'gcc-setup',
    title: 'GCC Setup — Intellispark Technologies',
    // ... populate from gcc-setup.html content
  },
  // ... remaining 5 service pages
]
```

**Stat placeholders:** All `XX` values in the HTML are intentional placeholders awaiting real data from the client. Do not replace them — preserve as strings. When the client provides real values, they should be updated in the content files, not in component code.

---

## 9. Metadata (SEO)

Use Next.js App Router metadata API — not `<Head>` from `next/head`.

```tsx
// app/gcc-setup/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GCC Setup — Intellispark Technologies',
  description: 'End-to-end Global Capability Centre establishment in Kochi, India...',
  openGraph: {
    title: 'GCC Setup — Intellispark Technologies',
    description: '...',
    url: 'https://intellispark.tech/gcc-setup',
    siteName: 'Intellispark Technologies',
    type: 'website',
  },
}
```

For pages generated from data, use `generateMetadata()`:
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const page = servicePages.find(p => p.slug === params.slug)
  return {
    title: page?.title,
    description: page?.meta,
  }
}
```

---

## 10. Book a Call — Form

The current HTML form is purely presentational (no backend). Wire it up as follows:

**Option A (recommended for launch):** Route to a Calendly embed or similar booking tool. Replace the form with an `<iframe>` or Calendly widget embed.

**Option B:** Next.js API Route + email notification.

```ts
// app/api/book-a-call/route.ts
export async function POST(req: Request) {
  const body = await req.json()
  // Send to email (Resend, Nodemailer, etc.) or CRM
  return Response.json({ success: true })
}
```

The form fields from the HTML:
- `name` (text, required)
- `company` (text, required)
- `email` (email, required)
- `companySize` (select: 1–50 / 51–200 / 201–1000 / 1000+)
- `message` (textarea, required)

---

## 11. Behaviours to Implement

| Behaviour | Source location | Implementation |
|---|---|---|
| Nav scroll shadow | All pages, JS IIFE | `useEffect` + scroll listener → `scrolled` state |
| Services dropdown | Nav | Controlled open/close state, `Escape` closes |
| Mobile hamburger | Nav | Toggle `mobileOpen` state |
| Left-rail scroll spy | Service/For pages | `IntersectionObserver` on section elements |
| AOS fade-up | All pages | Custom `useAOS` hook or client wrapper |
| Case study filter | `/case-studies` | Client state `selectedFilter` |
| Newsletter subscribe | Footer | Controlled form, future API route |
| Contact form submit | `/book-a-call` | Controlled form → API route or Calendly |
| Comparison table | `/kochi-advantage` | Static HTML table — no JS needed |

---

## 12. Images

**Current state:** The homepage uses Unsplash URLs (via `https://images.unsplash.com`) for:
- Hero background photo
- Services section featured card (office photo)
- Kochi section parallax background
- Case study card cover images
- One avatar image

**For production:**
- Replace Unsplash URLs with licensed images placed in `/public/images/`
- Use `next/image` (`<Image>`) for all images — not `<img>` tags
- The hero background is set as `background-image` in CSS. For Next.js, either keep as CSS background (acceptable for decorative images) or convert to an `<Image>` with `fill` and `priority`

```tsx
// For the hero background specifically:
import Image from 'next/image'

<div className={styles.hero}>
  <Image
    src="/images/hero-bg.jpg"
    alt=""
    fill
    priority
    style={{ objectFit: 'cover', mixBlendMode: 'luminosity' }}
  />
  {/* hero content */}
</div>
```

---

## 13. Performance Notes

- **Font:** Use `next/font/google` with `display: 'swap'` — eliminates render-blocking font requests
- **Icons:** `@phosphor-icons/react` supports tree-shaking — only import icons you use, never `import * from`
- **AOS threshold:** Set to `0.06` (matches source HTML) — lower values trigger animation earlier and feel more responsive on mobile
- **Nav height CSS variable:** `--nav-height: 68px` — used throughout for `padding-top` offsets on page heroes. If the nav height ever changes, this single token controls all dependent spacing
- **Parallax (`background-attachment: fixed`):** Used on the Kochi section of the homepage. This CSS property is known to cause performance issues on iOS (it's ignored). This is pre-existing in the design — document it but don't fix it unless specifically asked

---

## 14. What Is NOT in Scope for This Handoff

The following are intentional gaps — do not build them unless explicitly asked:

| Item | Status |
|---|---|
| CMS integration | Not scoped — content is in TypeScript data files as a bridge |
| Individual case study detail pages | URL structure reserved (`/case-studies/[slug]`), no content yet |
| Blog / Insights section | Not scoped |
| Analytics (GA, Plausible, etc.) | Not scoped |
| i18n / localisation | Not scoped |
| Authentication | Not applicable |
| Real case study data | Client to provide — all metrics are `XX` placeholders |
| Real team photos and bios | Client to provide — About page has placeholders |
| Real client logos (trust bar) | Client to provide |
| AiPODS acronym definition | Unknown — client to confirm |

---

## 15. Open Client Deliverables

These items are needed from the client before the site can go live:

- [ ] Real statistics for all `XX` stat placeholders (across all pages and index)
- [ ] Phone number for footer
- [ ] Founder and team names, roles, bios, headshots (for `/about`)
- [ ] Real (anonymised or named) case study details (for `/case-studies`)
- [ ] Real client logos for homepage trust bar
- [ ] AiPODS acronym definition
- [ ] Real SVG logo asset (currently using CSS-drawn placeholder)
- [ ] Final decision on booking flow: Calendly embed vs custom form with backend
- [ ] Privacy Policy and Terms of Service content (linked from footer)

---

## 16. Quick Start

```bash
npx create-next-app@latest intellispark --typescript --app --no-tailwind --eslint
cd intellispark
npm install @phosphor-icons/react
# Copy source HTML files into /reference/ for migration reference
# Begin with: layout.tsx (Nav + Footer) → globals.css (:root tokens) → index page
```

**Recommended migration order:**
1. `globals.css` — `:root` tokens, resets, AOS utility
2. `Nav.tsx` + `Footer.tsx` — unblocks all other pages
3. `ConsolePage.tsx` template — unblocks 10 pages at once
4. Homepage `/` — most complex, most sections
5. `kochi-advantage`, `case-studies`, `about` — one-off templates
6. `book-a-call` — wire form last

---

*This document covers Phase 3 deliverables. All design decisions are final. Engineering questions about specific CSS values, component structure, or behaviour details should reference the source HTML files as the primary source of truth.*
