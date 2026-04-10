/*
 * ScopeSection.tsx — Center Health (002)
 * Confirmed from Figma node 1161:5830 (updated layout).
 *
 * Self-contained blue card showing the scope of work.
 * Does NOT use CaseStudySectionWrapper — owns its own index + heading.
 *
 * Layout (updated — index-left / content-right row):
 *
 *   ┌── blue card (#1ab1fe, px-16, py-64, radius-16) ─────────────────────────┐
 *   │                                                                          │
 *   │  (002)  ┌── content col (flex-1, gap-64) ────────────────────────────┐  │
 *   │         │                                                             │  │
 *   │         │  WHAT I HAVE DESIGNED                                       │  │
 *   │         │                                                             │  │
 *   │         │  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │  │
 *   │         │  │ ──────── │  │ ──────── │  │ ──────── │                 │  │
 *   │         │  │ *        │  │ *        │  │ *        │                 │  │
 *   │         │  │ ITEM     │  │ ITEM     │  │ ITEM     │                 │  │
 *   │         │  └──────────┘  └──────────┘  └──────────┘                 │  │
 *   │         │  ... (repeating rows, last row may be partial)              │  │
 *   │         └─────────────────────────────────────────────────────────────┘  │
 *   └──────────────────────────────────────────────────────────────────────────┘
 *
 * Typography:
 *   Index   — Inter, 14px, uppercase, white
 *   Heading — Integral CF, 56px H3, tracking -0.84px, white uppercase
 *   Star    — Integral CF, 64px H2, tracking -0.4px, white (decorative bullet)
 *   Title   — Integral CF, 32px H4, tracking 0, white uppercase
 *
 * Grid: 3 columns, 10px gap
 * Each item: 1px white top divider + * + title
 *
 * Server Component — no client-side interaction.
 */

import type { CenterHealthScopeSection } from '../content'
import styles from './ScopeSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ScopeSectionProps {
  section: CenterHealthScopeSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function ScopeSection({ section }: ScopeSectionProps) {
  return (
    <div className={styles['scope-card']}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles['scope-row']}>

        {/* Index — left column */}
        <p className={styles['scope-index']}>{section.index}</p>

        {/* Content column — heading + grid */}
        <div className={styles['scope-content-col']}>

          {/* Heading */}
          <h1 className={styles['scope-heading']}>{section.heading}</h1>

          {/* Grid — 3-col scope items */}
          <div className={styles['scope-grid']}>
            {section.items.map((item, i) => (
              <div key={i} className={styles['scope-item']}>
                {/* 1px white top divider */}
                <div className={styles['scope-divider']} aria-hidden="true" />

                {/* Scope item title — Integral CF 32px uppercase */}
                <p className={styles['scope-item-title']}>{item}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  )
}
