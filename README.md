# CHABAHIVA Trust Web Platform & Operational Hub

Modernized web platform and operations architecture for the CHABAHIVA Trust (Church and Business against HIV & AIDS).

## Overview
- **Entity:** CHABAHIVA Trust
- **High Court Registration:** IT 3101 / 2009
- **SARS PBO Exemption:** #930045684 (Section 18A Tax-Deductible Receipts)
- **Technical Architecture:** Production-Grade Vanilla HTML5, CSS3 Custom Properties, Responsive JavaScript, Inline SVG Cartography
- **Foundational Anchor Donor:** Otto per Mille of the Waldensian Church

## Repository Structure
```
├── demo-chabahiva/          # Production deployable site build
│   ├── index.html           # Home page & interactive giraffe ethos visualizer
│   ├── about.html           # History, leadership & trustee governance gallery
│   ├── innovations.html     # 4 Strategic Innovations & interactive SROI calculator
│   ├── partners.html        # Investor & NPO benefits, 5-province operational reach
│   ├── opportunities.html   # Open grants, mandatory document clusters & intake triage
│   ├── privacy-policy.html  # POPIA & Data Protection statutory compliance
│   ├── terms-of-service.html# Funding terms, conditions & legal obligations
│   ├── paia-manual.html     # Promotion of Access to Information Act (PAIA) s51 Manual
│   ├── css/
│   │   └── style.css        # Sovereign UI architecture & responsive design tokens
│   ├── js/
│   │   └── main.js         # Interactive SVG giraffe, grant simulator, intake triage
│   └── assets/              # WebP/PNG logos, donor marks, and leadership photography
├── context/                 # Centralized project knowledge hub & persistent memory
│   ├── business_intel.md    # Distilled organizational model, leadership, and NAP
│   ├── tech_stack.md        # Technical architecture, design tokens, and route map
│   └── active_session.md    # Session status and engineering log
└── AGENTS.md                # Agent knowledge hub anchor and invariant governance
```

## Local Development & Testing
To preview the platform locally:
```bash
python -m http.server 8092 --directory "demo-chabahiva"
```
Then navigate to `http://127.0.0.1:8092/`.

## Quality Standards
- **Zero Emojis:** Strictly zero emojis in code, markup, documentation, and UI. All iconography is rendered via inline vector SVGs.
- **Zero-Orphan Grids:** Every card grid maintains 100% cell occupancy at desktop widths.
- **Accessibility:** WCAG 2.2 AA compliant.
- **Mobile Hardening:** 48px touch targets and responsive layouts down to 320px viewport width.
