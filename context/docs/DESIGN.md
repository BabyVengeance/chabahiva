# CHABAHIVA Trust — Design System Specification

## 1. Brand Tokens & Color Palette
- `--color-primary`: `#004369` (Deep Ocean Navy — fiduciary trust, institutional governance)
- `--color-primary-dark`: `#002D47` (Midnight Navy — card borders, dark header states)
- `--color-primary-light`: `#0A5C8C` (Radiant Aegean — secondary interactive highlights)
- `--color-accent`: `#C71012` (Healthcare Crimson / Red Ribbon — decisive CTAs, urgency, conversion)
- `--color-accent-hover`: `#A50D0E` (Deep Crimson Active)
- `--color-accent-subtle`: `rgba(199, 16, 18, 0.08)` (Crimson Tint for badges)
- `--color-giraffe-gold`: `#F59E0B` (Amber Gold — CT Giraffe mascot accents and impact milestones)
- `--color-canvas-light`: `#FFFFFF` (Pristine White)
- `--color-canvas-subtle`: `#F8FAFC` (Clinical Linen)
- `--color-canvas-slate`: `#F1F5F9` (Card Backdrop)
- `--color-canvas-dark`: `#08101A` (Obsidian — high-contrast footer and hero bands)
- `--color-canvas-dark-surface`: `#0E1B2B` (Obsidian Card Surface)
- `--color-text-main`: `#0F172A` (Slate 900 for high readability)
- `--color-text-muted`: `#475569` (Slate 600 for body copy)
- `--color-text-light`: `#94A3B8` (Slate 400 for subtext)
- `--color-text-white`: `#FFFFFF`

## 2. Typographic Rules
- **Font Stack:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Headings:**
  - `h1`: `clamp(2.4rem, 5vw, 3.8rem)` with line-height `1.15`, balanced wrapping (`text-wrap: balance`), `-0.025em` tracking.
  - `h2`: `clamp(1.75rem, 3.5vw, 2.5rem)` with line-height `1.2`, balanced wrapping.
  - `h3`: `clamp(1.2rem, 2vw, 1.5rem)` with line-height `1.3`.
- **Body:** `1rem` (16px base) with `1.6` line-height, pretty wrapping (`text-wrap: pretty; max-width: 68ch`).
- **Zero AI Formula:** Strictly zero tracked all-caps eyebrows, zero em dashes (`—`), zero pill badges floating above `<h1>`.

## 3. Navbar Standards (3-Zone Unified Layout)
- **Zone 1 (Left):** Official client logo lockup `assets/logos/logo_header.png` (height strictly 46px to 52px).
- **Zone 2 (Center):** 5 clean navigation links (`Home`, `Innovations`, `Governance`, `Partners`, `Opportunities & Grants`).
- **Zone 3 (Right):** Dual CTA cluster (Direct phone link + Primary Crimson action button).
- **Mobile Drawer:** Accessible slide-out navigation with >=48px touch targets, backdrop blur, and escape key listener.

## 4. Footer Coherence (Dark Obsidian Protocol)
- **Background:** Deep Obsidian `#08101A`.
- **Logo:** `assets/logos/logo_footer.png` (white typography + crimson ribbon mark) rendering at 42px height with zero bounding-box seams.
- **Grid:** Explicit 4-column desktop layout (`grid-template-columns: 1.5fr 1fr 1.1fr 1.3fr`).
- **Social Media SVGs:** Vector circular buttons (YouTube, Facebook, Instagram, X/Twitter, LinkedIn).
- **Statutory Legal Links:** Live links to `privacy-policy.html`, `terms-of-service.html`, and `paia-manual.html`.
- **Favicons:** Linked on every page (`<link rel="icon" type="image/png" href="assets/logos/favicon.png" />`).
