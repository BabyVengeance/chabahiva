# TECHNICAL STACK & ARCHITECTURE - CHABAHIVA TRUST

## Stack Overview
- Architecture: Static HTML5, CSS3 Custom Properties, Vanilla ES6+ JavaScript
- Layout Engine: CSS Grid, Flexbox, Fluid Clamp scales
- Typography: Inter / Plus Jakarta Sans system with fluid typography scales
- Color Tokens:
  - Primary Dark: `--color-primary-dark` (#002B45)
  - Primary Base: `--color-primary` (#004369)
  - Primary Light: `--color-primary-light` (#016094)
  - Accent Red: `--color-accent` (#C71012)
  - Canvas Slate: `--color-canvas-slate` (#F1F5F9)
  - Canvas Subtle: `--color-canvas-subtle` (#F8FAFC)
  - Border Light: `--border-light` (#E2E8F0)

## Component Standards
- Executive Profile Cards:
  - Desktop layout: Dual-column split grid (`grid-template-columns: 220px 1fr` for standard cards, `320px 1fr` for featured chairperson).
  - Tablet layout (<= 992px): Single column cards with `grid-template-columns: 240px 1fr` (full-width dossier presentation).
  - Mobile layout (<= 680px): Single column stacked layout (`grid-template-columns: 1fr`) with clamped photo height (`clamp(300px, 72vw, 360px)`).
  - Photo framing: `object-fit: cover` with calibrated facial focal points (`object-position: center 10% - 18%`) to eliminate face clipping and preserve facial integrity across all device viewports.
  - Performance: `loading="lazy"` and explicit image dimension attributes on all below-the-fold portrait assets.

