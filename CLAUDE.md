# Portfolio — Claude Instruction Guide

This file is the primary source of truth for every Claude session working on this project.
Re-read this file at the start of every session before touching any file.

---

## Project Goal

Build a modular, maintainable portfolio website that behaves like a structured product system.
The codebase must mirror the structured design thinking used in Figma:
reusable components, spacing system, typography system, design tokens, consistent layout rhythm.

---

## Stack

- Next.js 14 App Router
- TypeScript
- CSS Modules
- Design tokens via `src/styles/tokens.css`
- Fonts: Integral CF (display), Inter (body)

---

## Architecture: Feature-Based

Everything is grouped by feature/domain. There are NO global section folders.

```
src/
  features/
    landing/
      components/       ← landing-specific sections
      content.ts        ← all landing text/data
      LandingPage.tsx   ← composes all sections
    case-studies/
      axion-ray/
        components/     ← case study sections
        content.ts      ← all case study text/data
        CaseStudyPage.tsx
  shared/
    ui/                 ← reusable UI only (Button, Chip, Container)
    hooks/              ← shared logic hooks
  styles/               ← tokens.css, global.css, reset.css, fonts.css
  types/                ← shared TypeScript interfaces
  app/                  ← Next.js App Router pages only (thin wrappers)
```

**DO NOT** use `src/components/sections/` for new work.
The existing `src/components/` tree is legacy and must not be modified unless explicitly requested.

---

## Landing Page Sections (in order)

1. `Hero` — who I am, what I do
2. `SelectedWorks` — 3 case studies (one is NDA → use safe generic label)
3. `MoreWork` — image grid gallery, click opens modal, modal has close button
4. `Experience` — companies / projects worked on
5. `Languages` — English, German
6. `Contact` — email, merged with Footer

Each section lives at: `src/features/landing/components/{SectionName}.tsx`

---

## Case Study Sections (Axion Ray — semantic names required)

```
Hero
Problem
UserResearch
DesignDecisions
SolutionStructure
PhaseOne
PhaseTwo
FundingMilestone
PhaseThree
Outcome
Reflections
ClientFeedback
NextCaseStudy
```

Each section lives at: `src/features/case-studies/axion-ray/components/{SectionName}.tsx`

### UserResearch sub-structure

UserResearch contains four clearly structured sub-sections:
- PersonalityTraits
- ChallengesAndPain
- ExistingSystem
- DesiredState

---

## Naming Rules (Critical)

- Use semantic names based on meaning
- Never use `Section1`, `Section2`, or numeric suffixes
- CSS Modules co-located with each component file

---

## Content Rule

All text, arrays, and data live in `content.ts` per feature.
Components receive props and render structure only.
No inline text strings in JSX (except aria-label, alt text).

---

## Scroll Behavior

This project uses a **step-based scroll snapping system**.

Rules:
- One scroll event = move to the next section
- Each section behaves like a screen
- No animation-driven scroll timelines
- No progressive scroll storytelling

### Section Height Logic

- Short sections (fit in viewport): `min-height: 100vh`, snap fills screen
- Tall sections (overflow viewport): natural height, `scroll-snap-align: start`
  - User snaps to top of tall section
  - User free-scrolls through the content
  - At bottom boundary + next scroll-down → snaps to next section

### Scroll System Implementation

Lives at: `src/shared/hooks/useSectionScroll.ts`

- Lightweight custom hook, no external library
- Tracks `activeSectionIndex`
- Each section registers a ref
- Handles `wheel`, `touchmove`, `ArrowDown`/`ArrowUp`/`Space`/`PageDown`/`PageUp`
- Uses `scrollIntoView({ behavior: 'smooth', block: 'start' })`
- Debounce guard prevents double-fires during animation
- Tall section detection: checks `scrollTop`, `scrollHeight`, `clientHeight`

---

## NextCaseStudy Transition

The `NextCaseStudy` section is the terminal section of every case study.

Behavior:
1. First scroll-down reaching `NextCaseStudy`: section transitions in
   (`opacity: 0; transform: translateY(60px)` → `opacity: 1; transform: translateY(0)`)
2. Second scroll-down while `NextCaseStudy` is active: `router.push()` to next case study
3. Next page loads and starts from its `Hero` section

---

## Navigation Rules

- **No back button** anywhere inside case studies
- **Logo (FAZ)** in nav always routes to `/` (landing page)
- Logo is the only navigation affordance for returning to landing

---

## Shared UI (`src/shared/ui/`)

Only reusable UI primitives:
- `Button`
- `Chip`
- `Container`

Do not put page-specific or feature-specific components here.

---

## Design System Rules

All visual values must use tokens from `src/styles/tokens.css`.
Never introduce arbitrary one-off values.

Token categories:
- `--color-*` — colors
- `--text-*` — font sizes
- `--weight-*` — font weights
- `--lh-*` — line heights
- `--font-*` — font families
- `--spacing-*` / `--gap-*` / `--padding-*` — spacing
- `--radius-*` — border radius
- `--layout-*` — layout widths and padding

---

## Animation Rules

- Minimal motion only
- Hover transitions: allowed
- Soft reveal on scroll entry: allowed
- Light stagger: allowed
- No heavy animation systems
- No scroll-driven timelines
- No gimmicks

---

## Fail-Safe Rules (Critical)

- Only change what is explicitly requested
- Do NOT modify unrelated files, sections, tokens, or layout logic
- Do NOT refactor unless requested
- Do NOT rename files unless requested
- Do NOT reorganize folders unless requested
- Prefer the smallest safe change
- If a change may affect other areas, warn first
- Do not silently improve things outside scope
- Do not introduce random values when tokens exist

---

## Anti-Hallucination Rules

- Do not assume files exist unless confirmed
- Do not assume structure unless defined
- Do not assume design intent unless described
- Do not fabricate missing project details
- If information is missing: ask

---

## Session Start Checklist

At the start of every session:
1. Re-read this file
2. Restate: project goal, architecture, design system rules, fail-safe rules
3. Before making changes: state what you will touch, what you will not touch

---

## Change Workflow

Before implementing any change, state:
1. What you understood
2. What you will change
3. What you will not change
4. Which files may be affected
5. Minimal change plan

After implementing, state:
1. What changed
2. What did not change
3. Any risks
4. Suggested next prompt

---

## What Must NOT Be Changed Without Explicit Request

- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/styles/reset.css`
- `src/styles/fonts.css`
- `src/types/index.ts`
- Any file inside `src/components/` (legacy — do not touch)
- Font files
- Image assets in `public/`
