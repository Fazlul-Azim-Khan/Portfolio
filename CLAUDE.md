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
- Fonts: **Outfit only** (display + body, 400 Regular + 500 Medium, loaded via `next/font/google`)

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
3. `MoreWork` — image grid gallery, click opens modal. Gallery items support **multiple images** (`images: string[]`). When `images.length > 1`, the modal renders prev/next navigation via `IconButton` plus a counter. Single-image items render the modal without nav controls.
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

## Icon System

Icons are **inline SVG components**, not an installed library.

- Location: `src/components/icons/index.tsx`
- Design language matches Lucide: `viewBox="0 0 24 24"`, `fill: none`, `stroke: currentColor`, `strokeWidth: 1.5`, `strokeLinecap: round`, `strokeLinejoin: round`
- Each icon accepts `size` (default 20), `className`, `aria-hidden`
- Current exports: `ArrowLeft`, `ArrowRight`, `X`, `ChevronLeft`, `ChevronRight`
- Add new icons in the same file, same style. No exceptions — do not mix icon sources.

**Do not install `lucide-react`** or any icon package. The sandbox npm registry is blocked, and the inline approach is intentional (zero runtime dependency, zero bundle cost, full control over stroke weight).

### IconButton component

- Location: `src/components/ui/IconButton/`
- The **only** way to render a square icon button in the project.
- Size: `44×44px` (`var(--button-height)` × `var(--button-height)`), `border-radius: var(--radius-sm)`
- Variants:
  - `primary` — black background, white icon
  - `outlined` — black border, dark icon (default)
  - `ghost` — no background or border
  - `light` — white border + white icon + white focus ring, for use on dark overlays (MoreWork modal, dark sections)
- `aria-label` is **required** on every usage.
- Disabled state: `opacity: 0.36; cursor: not-allowed;` — already built in.

---

## Design System Rules

All visual values must use tokens from `src/styles/tokens.css`.
Never introduce arbitrary one-off values.

Token categories:
- `--color-*` — colors
- `--text-*` — font sizes
- `--weight-*` — font weights
- `--lh-*` — line heights
- `--tracking-*` — letter spacing
- `--font-*` — font families
- `--spacing-*` / `--gap-*` / `--padding-*` — spacing
- `--radius-*` — border radius
- `--layout-*` — layout widths and padding

---

## Typography Rules (Critical)

This section is the authoritative reference for every typographic decision in the project.
Violating any of these rules counts as a regression.

### Single font family

- **Outfit is the only font used in this project.** Display and body, everywhere.
- Never reference Inter, Integral CF, or any other font family in CSS, `fonts.css`, or component files.
- If you find a stale Inter/Integral CF reference, it must be removed (only in the files where you are already making an approved change — do not do a blanket sweep without explicit instruction).
- Two weights only: `--weight-regular` (400) and `--weight-medium` (500).

### Section headings = H1

- Every section main heading across landing + case studies uses the `<h1>` element.
- A page intentionally has multiple `<h1>`s — each section is its own screen in the step-scroll system.
- H1 visual specs (all required together):
  - `font-size: var(--text-h1)` — fluid 48px → 120px via `clamp(3rem, 1.853rem + 4.706vw, 7.5rem)`
  - `font-weight: var(--weight-medium)`
  - `line-height: var(--lh-h1)` — `1`
  - `letter-spacing: var(--tracking-h1)` — `-1.5px`
- **No section heading may use `--text-h2` or `--text-h3`.** Those tokens still exist for sub-headings and card titles, not section headings.
- `--weight-regular` is not valid for section headings. Always `--weight-medium`.

### Header row pattern

Every section header is a two-part flex row:

```
[headerIndex]   [<h1> heading ]
  (00X)
```

- Container: `display: flex; flex-direction: row; gap: var(--gap-16); align-items: flex-start;`
- `headerIndex`: **Outfit** 12px, `text-transform: uppercase`, `--weight-regular`, `padding-top: 4px` for optical baseline alignment with the large H1
- `<h1>`: receives `flex: 1` so it can wrap properly next to the index
- Indexes are defined in `content.ts` under `meta.index` as strings like `'(001)'`, `'(002)'`, `'(003)'`
- Current landing indexes: Hero none, SelectedWorks `(001)`, MoreWork `(002)`, Experience `(004)`, Languages `(005)`, Contact `(006)`

### Hero bio = H5

- `Hero .bio` is H5, not a lead paragraph.
- Specs: `font-size: var(--text-h5)`, `font-weight: var(--weight-medium)`, `line-height: var(--lh-heading)`, `letter-spacing: var(--tracking-h5)`
- **No `text-transform: uppercase`** on the bio.

### Card + case study title weight

- `WorkCard .title` and `CaseStudyHero .title` both use `--weight-medium` (matches the section H1 style family).
- Never `--weight-regular` on these.

### Outfit is case-sensitive — Title Case content is required

- Unlike Integral CF, **Outfit does not auto-uppercase anything.** The browser renders exactly the case stored in `content.ts`.
- All content strings must be authored in the exact case they should render:
  - Headings, subtitles, decision titles, phase headings, reflection insight titles, project titles, section captions → **Title Case**
  - Body paragraphs → sentence case
- **Never rely on CSS `text-transform` to "fix" lowercase content.** Fix the source string in `content.ts`.

### Uppercase is reserved

`text-transform: uppercase` is only allowed on these small-label elements:

- `headerIndex` — the `(00X)` labels
- `period`, `copyright` — Experience and Contact labels
- `company`, `role` — Experience meta strip
- `language` — Languages label
- modal `counter` — MoreWork modal image counter

**Never** on headings, bios, subtitles, card titles, body text, or any display element.

---

## Color Rules (Critical)

Text color must match the background context. These rules are not negotiable.

### White / light backgrounds

All text must use `--color-primary`. This includes:

- `headerIndex`
- result tags
- proficiency labels
- subheadings
- back links
- footer meta text

**Never** use `--color-text-muted` or `--color-tertiary` on white backgrounds.

### Dark backgrounds

- Primary text: `--color-secondary` (white)
- Muted / supporting text: `--color-tertiary` (#cccccc) — only valid on dark sections
- Current dark sections: Experience, Contact, FundingMilestone

### Decorative exceptions

The following decorative elements keep their designed colors and are not affected by the text color rule:

- Hero decorative arrow
- Hero ampersand
- Feature star
- Any intentional accent mark documented in the component

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
- Any file inside `src/components/` (legacy — do not touch) **except**:
  - `src/components/icons/index.tsx` — design-system primitive, only add new icons in-style
  - `src/components/ui/IconButton/` — design-system primitive, only extend variants with approval
- Font files
- Image assets in `public/`
