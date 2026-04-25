# Accredian Enterprise Clone

A production-ready clone of the [Accredian Enterprise](https://enterprise.accredian.com) website, built with Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui.

---

## 🚀 Live Features

- **Sticky Navbar** with smooth-scroll, active-section highlighting (IntersectionObserver), and mobile drawer
- **Hero Section** with gradient background, animated badge, and live stats row
- **Stats Band** — full-width gradient section with 4 enterprise metrics
- **Features Section** — 4×2 feature card grid with hover-lift effects
- **How It Works** — 4-step horizontal timeline (vertical on mobile)
- **Programs Section** — 6 cards with horizontal scroll on mobile, 3-col grid on desktop
- **Testimonials** — 3 quote cards with gradient author avatars
- **Partners** — 8 institution badge grid
- **Lead Capture Modal** — full-page modal with multi-field form, client-side validation, loading state, success/error states
- **CTA Banner** — pre-footer conversion section
- **Back to Top** button (appears after 400px scroll)
- **API Route** `/api/leads` — POST endpoint with validation, in-memory store, and console logging

---

## 🛠 Setup Instructions

```bash
# 1. Clone / navigate to project
cd accredian-enterprise-clone

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## 🌐 Environment Variables

None required — all data is served from `data/mockData.ts` (mock data only).

For production, you would add:
```env
# Example future variables
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
NEXT_PUBLIC_SITE_URL=https://enterprise.accredian.com
```

---

## 🏗 Project Structure

```
accredian-enterprise-clone/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, OG tags
│   ├── page.tsx                # Main page — imports all sections
│   ├── globals.css             # Global styles, brand tokens, animations
│   └── api/
│       └── leads/
│           └── route.ts        # POST /api/leads — lead capture endpoint
├── components/
│   ├── Navbar.tsx              # Sticky navbar with mobile drawer
│   ├── HeroSection.tsx         # Hero with gradient, stats, CTAs
│   ├── StatsSection.tsx        # Metrics band
│   ├── FeaturesSection.tsx     # 4×2 feature card grid
│   ├── HowItWorksSection.tsx   # 4-step timeline
│   ├── ProgramsSection.tsx     # Program cards with tags
│   ├── TestimonialsSection.tsx # Quote cards
│   ├── PartnersSection.tsx     # Institution badge grid
│   ├── LeadCaptureForm.tsx     # Modal form with API integration
│   └── Footer.tsx              # Dark footer with columns
├── data/
│   └── mockData.ts             # All mock data (programs, stats, testimonials, etc.)
├── lib/
│   ├── leads.ts                # In-memory lead store
│   └── utils.ts                # shadcn/ui utility (cn helper)
└── components/ui/
    └── button.tsx              # shadcn/ui base button
```

---

## 🧠 Approach Taken

1. **Data-driven architecture** — All content lives in `data/mockData.ts`. Components only receive and render data; zero hardcoded strings in component files.

2. **Mobile-first responsive** — Designed at 375px, tested at 768px and 1280px. Tailwind breakpoints `sm/md/lg/xl` used throughout.

3. **Performance** — Modal is lazy-loaded via `dynamic()` with `ssr: false` to avoid hydration issues. Images use `next/image`. Fonts loaded via `next/font/google`.

4. **UX polish** — `IntersectionObserver` drives active nav link highlighting. ESC key + click-outside closes modal. Scroll-margin-top prevents navbar overlap on anchor jumps. Back-to-top button fades in after 400px.

5. **API design** — REST POST endpoint validates all required fields, checks email format, stores in-memory (easily swappable for Prisma/Postgres), and timestamps each lead to console.

---

## 🤖 AI Usage

Claude Sonnet was used to scaffold all components, data structures, API route, and type interfaces. Manual improvements included:
- Responsive tuning across all breakpoints
- Color palette and gradient refinement for brand consistency
- Form UX polish (field-level errors, loading spinner, success animation)
- Section ordering and CTA placement strategy
- Performance optimizations (lazy modal load, passive scroll listeners)

---

## 🔮 Improvements with More Time

| Improvement | Technology |
|---|---|
| Real database for leads | PostgreSQL via Prisma |
| Email notification on capture | Resend API |
| Auth for L&D dashboard | NextAuth.js or Clerk |
| CMS for program content | Sanity or Contentful |
| Smooth page animations | Framer Motion |
| Analytics & heatmaps | PostHog or Mixpanel |
| E2E testing | Playwright |
| CI/CD pipeline | GitHub Actions → Vercel |

---

## 📄 License

MIT — free to use and modify.
