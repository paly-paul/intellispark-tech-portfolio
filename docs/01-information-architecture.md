# Intellispark Technologies — Information Architecture & Sitemap

**Version:** Phase 3 complete  
**Domain:** intellispark.tech  
**Last updated:** August 2026

---

## 1. Site Structure

```
intellispark.tech/
│
├── /                          (index.html)        Homepage
│
├── /gcc-setup                 (gcc-setup.html)    GCC Setup service
├── /bot-copo                  (bot-copo.html)     BOT / COPO service
├── /staff-augmentation        (staff-aug.html)    Staff Augmentation service
├── /product-engineering       (prod-eng.html)     Product Engineering service
├── /aipods                    (aipods.html)       AiPODS service
├── /service-delivery          (svc-del.html)      Service Delivery Centres
│
├── /for/
│   ├── /for/mid-market        (for-mid-market)    Audience: Mid-Market
│   ├── /for/enterprise        (for-enterprise)    Audience: Enterprise
│   ├── /for/startups          (for-startups)      Audience: Startups
│   └── /for/gcc-optimise      (for-gcc-optimise)  Audience: GCC Optimisation
│
├── /kochi-advantage           (kochi-advantage)   Location page
├── /case-studies              (case-studies)      Case studies listing
├── /about                     (about)             About the company
└── /book-a-call               (book-a-call)       Contact / CTA page
```

**Total pages:** 15  
**Not yet built:** Individual case study detail pages (planned Phase 4+)

---

## 2. Navigation Structure

### Primary Nav (persistent across all pages)

```
Logo → /

Services ▾ (dropdown, 6 items)
  ├── GCC Setup           → /gcc-setup
  ├── BOT / COPO          → /bot-copo
  ├── Staff Augmentation  → /staff-augmentation
  ├── Product Engineering → /product-engineering
  ├── AiPODS              → /aipods
  └── Service Delivery    → /service-delivery

For ▾ (dropdown, 4 items)
  ├── Mid-Market          → /for/mid-market
  ├── Enterprise          → /for/enterprise
  ├── Startups            → /for/startups
  └── GCC Optimisation    → /for/gcc-optimise

Kochi Advantage           → /kochi-advantage
Case Studies              → /case-studies
About                     → /about

[Book a Call]             → /book-a-call   (primary CTA button, always visible)
```

**Nav rules:**
- No "Contact Us" link — Book a Call is the sole CTA entry point
- Dropdowns: opacity + translateY animation on hover/focus
- Nav gains glassmorphism background (`backdrop-filter: blur(14px)`) on scroll (`scrolled` class via JS)
- Mobile: hamburger collapses both dropdowns into a stacked list

### Footer Nav

```
Column 1 — Services
  GCC Setup, BOT/COPO, Staff Augmentation,
  Product Engineering, AiPODS, Service Delivery

Column 2 — Company
  About, Kochi Advantage, Case Studies, Book a Call

Column 3 — For
  Mid-Market, Enterprise, Startups, GCC Optimisation

Newsletter signup (email input + subscribe button)
Copyright · Privacy · Terms
```

---

## 3. Page-by-Page Cross-Links

Every page has a **sticky left-rail** (services/for template) or inline contextual links that reference related pages. The full cross-link map is below.

### Homepage `/`
| Link location | Destination | Purpose |
|---|---|---|
| Hero CTA | `/book-a-call` | Primary conversion |
| Hero secondary | `/gcc-setup` | Anchor to main service |
| Segments section (6 cards) | `/for/mid-market`, `/for/enterprise`, `/for/startups`, `/for/gcc-optimise` | Audience routing |
| Services section | `/gcc-setup`, `/bot-copo`, `/staff-augmentation`, `/product-engineering`, `/aipods`, `/service-delivery` | Service deep-links |
| Kochi section | `/kochi-advantage` | Location detail |
| Case Studies section | `/case-studies` | Evidence |
| CTA strip | `/book-a-call` | Conversion |

### `/gcc-setup`
| Related (left rail) | `/bot-copo`, `/kochi-advantage`, `/for/mid-market` |
| Inline | `/kochi-advantage` (Why Kochi section) |
| CTA | `/book-a-call`, `/case-studies` |

### `/bot-copo`
| Related | `/gcc-setup`, `/staff-augmentation`, `/for/mid-market` |
| CTA | `/book-a-call`, `/case-studies` |

### `/staff-augmentation`
| Related | `/gcc-setup`, `/aipods`, `/for/startups` |
| CTA | `/book-a-call`, `/case-studies` |

### `/product-engineering`
| Related | `/aipods`, `/staff-augmentation`, `/for/enterprise` |
| Inline | `/case-studies` |
| CTA | `/book-a-call`, `/case-studies` |

### `/aipods`
| Related | `/product-engineering`, `/staff-augmentation`, `/for/startups` |
| CTA | `/book-a-call`, `/case-studies` |

### `/service-delivery`
| Related | `/gcc-setup`, `/bot-copo`, `/for/enterprise` |
| CTA | `/book-a-call`, `/case-studies` |

### `/for/mid-market`
| Related | `/gcc-setup`, `/bot-copo`, `/kochi-advantage` |
| CTA | `/book-a-call`, `/case-studies` |

### `/for/enterprise`
| Related | `/gcc-setup`, `/for/gcc-optimise`, `/service-delivery` |
| CTA | `/book-a-call`, `/case-studies` |

### `/for/startups`
| Related | `/aipods`, `/staff-augmentation`, `/for/mid-market` |
| Inline | `/aipods` (AiPODS section) |
| CTA | `/book-a-call`, `/case-studies` |

### `/for/gcc-optimise`
| Related | `/for/enterprise`, `/gcc-setup`, `/kochi-advantage` |
| CTA | `/book-a-call`, `/case-studies` |

### `/kochi-advantage`
| Inline | `/book-a-call` (CTA) |
| Referenced from | Homepage, `/gcc-setup`, `/for/mid-market`, `/for/gcc-optimise` |

### `/case-studies`
| Filter bar | JS filtering (no routing — client-side only in Phase 3) |
| Card links | `#` placeholders — individual study pages not yet built |
| CTA | `/book-a-call` |
| Referenced from | All service pages (left rail + CTA strip) |

### `/about`
| CTA | `/book-a-call` |
| Referenced from | Footer (Company column) |

### `/book-a-call`
| No outbound links (terminal conversion page) |
| Fallback contact | `mailto:hello@intellispark.tech`, LinkedIn |
| Referenced from | Every page (nav CTA button + footer) |

---

## 4. User Journey Flows

### Flow A — First-time visitor, unknown intent
```
Homepage → Segments section → /for/[audience] → /gcc-setup or /bot-copo → /book-a-call
```

### Flow B — Visitor referred to a specific service
```
Direct to /[service] → Left-rail related links → /book-a-call
```

### Flow C — Evaluating location / comparing options
```
Homepage or /for/[audience] → /kochi-advantage → /gcc-setup → /book-a-call
```

### Flow D — Sceptical / needs social proof
```
Homepage → /case-studies → /[relevant-service] → /book-a-call
```

### Flow E — Already has an India team, underperforming
```
/for/gcc-optimise → /for/enterprise → /book-a-call
```

---

## 5. Page Template Map

| Template | Pages | Design pattern |
|---|---|---|
| **Homepage** | `/` | Custom — full scroll narrative |
| **Console (Service/For)** | 10 pages | Sticky left rail + scrollable content area |
| **Editorial** | `/kochi-advantage` | Stat band + alternating editorial sections + comparison table |
| **Portfolio** | `/case-studies` | Filter bar + mosaic card grid |
| **Manifesto** | `/about` | Statement hero + values grid + timeline + team |
| **Form** | `/book-a-call` | Simple contact form (to be wired to backend) |

---

## 6. Planned Future Pages (Post Phase 3)

| URL | Type | Notes |
|---|---|---|
| `/case-studies/[slug]` | Individual case study | Detail pages; currently card links go to `#` |
| `/blog` or `/insights` | Content hub | Not scoped yet |
| `/privacy` | Legal | Linked from footer |
| `/terms` | Legal | Linked from footer |

---

## 7. SEO Notes

- Every page has a unique `<title>` and `<meta description>`
- `<h1>` is unique per page, in the hero band
- No duplicate content across service pages — each has distinct copy
- `/for/` audience pages are distinct from service pages; they cross-link to services but have different intent (problem-first vs solution-first)
- `book-a-call` should be `noindex` in production if using a third-party booking embed instead

---

*Document covers Phase 3 static HTML deliverables. Next.js routing should match URL structure exactly as defined in Section 1.*
