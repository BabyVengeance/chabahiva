# Agent Knowledge Hub Anchor

All incoming AI agents, developers, and autonomous subagents must inspect and maintain `context/` before proposing changes or writing code.

## Context Structure
- `context/business_intel.md` — Distilled business reality (mission, leadership, programs, beneficiaries, partners, NAP).
- `context/tech_stack.md` — Architecture, stack choices, design tokens, route map, API contracts.
- `context/active_session.md` — Running session state (completed tasks, current focus, blockers, immediate next steps).
- `context/raw/` — Raw scraped dumps, PDFs, assets, and media manifests (gitignored).
- `context/docs/` — Architectural specs, research dossiers, and audit reports.

Do not delete or bypass the persistent memory stored in `context/`.
