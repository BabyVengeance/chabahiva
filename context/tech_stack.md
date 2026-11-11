# Technical Stack & Design Architecture — CHABAHIVA Trust

## 1. Architectural Philosophy
Transition from the legacy, bloated, slow WordPress installation (heavy plugins, unoptimized LiteSpeed cache, monolithic layout) to a bespoke, ultra-fast, static multi-page architecture engineered with Sovereign Minimalism, zero-dependency vanilla JS, and sub-second loading speeds (< 1.0s LCP).

---

## 2. Design Tokens & Palette System
Derived directly from the official logo mark, emblem vector, and CT Giraffe brand identity:

```css
:root {
  /* Brand Primary & Accents */
  --color-primary: #004369;         /* Official Deep Ocean Navy */
  --color-primary-dark: #002D47;    /* Deep Midnight Navy */
  --color-primary-light: #0A5C8C;   /* Radiant Aegean */
  
  --color-accent: #C71012;          /* Official Healthcare Crimson / Red Ribbon */
  --color-accent-hover: #A50D0E;    /* Deep Crimson Active */
  --color-accent-subtle: rgba(199, 16, 18, 0.08); /* Crimson Veil */
  
  --color-giraffe-gold: #F59E0B;    /* Warm Amber (CT Giraffe Motif) */
  --color-giraffe-gold-subtle: rgba(245, 158, 11, 0.12);
  
  /* Canvas & Neutral Hierarchy */
  --color-canvas-light: #FFFFFF;
  --color-canvas-subtle: #F8FAFC;   /* Clinical Linen */
  --color-canvas-slate: #F1F5F9;    /* Card Surface */
  --color-canvas-dark: #08101A;     /* Deep Obsidian Footer/Hero Accent */
  --color-canvas-dark-surface: #0E1B2B;
  
  /* Typography Tokens */
  --color-text-main: #0F172A;       /* Slate 900 for razor-sharp reading */
  --color-text-muted: #475569;      /* Slate 600 */
  --color-text-light: #94A3B8;      /* Slate 400 for subtext */
  --color-text-white: #FFFFFF;
  
  /* Borders & Dividers */
  --border-light: rgba(15, 23, 42, 0.08);
  --border-dark: rgba(255, 255, 255, 0.1);
  --border-focus: rgba(0, 67, 105, 0.25);
  
  /* Concentric Radius Scale */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Elevation & Shadows */
  --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-card: 0 4px 20px -2px rgba(0, 67, 105, 0.06);
  --shadow-hover: 0 12px 32px -4px rgba(0, 67, 105, 0.12);
}
```

---

## 3. Typography Stack
- **Primary Display & Headings:** `Plus Jakarta Sans`, system-ui, -apple-system, sans-serif
  - Geometric clarity, authoritative corporate presence, high legibility.
- **Body & Numerical Data:** `Plus Jakarta Sans` / `Inter`, sans-serif
  - Crisp readability, tabular numbers for funding amounts, clean 1.6 line height.

---

## 4. Multi-Page Route Structure
The demo architecture is partitioned into 5 core operational pages + 3 statutory legal pages:

1. **`index.html` (Flagship Home):**
   - Authoritative hero without generic badges.
   - Real-time UNAIDS 95-95-95 progress metric visualization.
   - The Giraffe Metaphor interactive explorer.
   - Four Core Innovations preview.
   - Real video embed: "Think Positive Rizz" Peer Education celebration (`VYncm47GPKM`).
   - Dual-pathway CTA: For Social Investors vs. For Grassroots NPOs.

2. **`innovations.html` (How We Bridge The Gap):**
   - In-depth architectural breakdown of the 4 innovations:
     - Develop Interventions (Structured Peer Educator Systems).
     - Collaborative Network (Multi-sector synergy).
     - Income Generation Advisory (Financial sustainability).
     - Fund Management (Fiduciary risk mitigation).
   - Interactive SROI & Grant Allocation Simulator.

3. **`about.html` (Governance & Ethos):**
   - High Court registration (IT 3101/2009) & SARS PBO #930045684 credentials.
   - The Giraffe Ethos deep-dive.
   - Complete Board of Trustees with official photographic portraits:
     - Mr Sello Bravo Mphelane (Chairperson)
     - Mr Lungile Magqibelo (Trustee, Admin & Social Policy)
     - Mr Ashmeer Joseph (Trustee, Finance)
     - Mme Nosisa Mokoka (Trustee, Clinical Governance)
     - Rev. Dr Albrecht Philipps (Trustee, International)
   - Evolution from 2004 German Evangelical Church initiative to 2009 independent Trust.

4. **`partners.html` (Investment & Implementing Ecosystem):**
   - **For Investors:** ESG quantifiable reporting, Section 18A tax deduction, risk mitigation, decreased operational burden.
   - **For Implementing NPOs:** Capacity development, institutional legitimacy, long-term resilience.
   - Provincial geographic footprint map (Gauteng, Western Cape, Mpumalanga, North West, Eastern Cape).

5. **`opportunities.html` (Grants & Contact Triage):**
   - Open Call for HIV/AIDS Programmes (Grant up to R250,000 for 6 months).
   - Eligibility checklist (SDG 3 alignment, 2-5 year registered NPO, youth-led priority).
   - Interactive Eligibility & Readiness Checker.
   - 3-step confidential triage contact form.
   - Real Google Maps embed for Randburg HQ.

6. **Statutory Legal Suite:**
   - `privacy-policy.html` (Comprehensive POPIA Act 4 of 2013 and GDPR compliance).
   - `terms-of-service.html` (NPO grantmaking and social investment engagement terms).
   - `paia-manual.html` (PAIA Section 51 statutory compliance manual).

---

## 5. Quality Floor & Performance Targets
- Lighthouse Performance: 98+
- First Contentful Paint (FCP): < 0.6s
- Largest Contentful Paint (LCP): < 1.0s
- Cumulative Layout Shift (CLS): 0.000
- Touch Targets: strictly >= 48px x 48px
- Mobile Navigation: Touch-optimized slide drawer with keyboard trap and ESC dismiss
- Accessibility: WCAG 2.2 AA compliant contrast and semantic landmarks.
