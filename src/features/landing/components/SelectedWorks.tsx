/*
 * features/landing/components/SelectedWorks.tsx
 *
 * Selected Works section — confirmed from Figma node 966:7565.
 *
 * Layout (top to bottom):
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  (002)   SELECTED WORKS              3 CASE STUDIES →    │
 *   │  index   heading H3                  count               │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  ─────────────────── divider ───────────────────────     │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  WorkCard 01 — AI-powered manufacturing platform         │
 *   │                                                          │
 *   │  WorkCard 02 — AI-powered diabetes management platform   │
 *   │                                                          │
 *   │  WorkCard 03 — Frictionless cross-border onboarding      │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Card gap: --space-works-gap (256px)
 * Section padding-y: --padding-64
 *
 * Content: src/features/landing/content.ts
 * Server Component — no client-side interaction required.
 * The <section> wrapper and scroll ref are owned by LandingPage.
 */

import WorkCard                   from './WorkCard'
import { selectedWorks }          from '../content'
import styles                     from './SelectedWorks.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function SelectedWorks() {
  return (
    <div className={styles['lp-works-root']} aria-label="Selected Works">

      {/* ── Section header row ───────────────────────────── */}
      <div className={styles['lp-works-header']}>
        <p className={styles['lp-works-header-index']}>
          {selectedWorks.meta.index}
        </p>
        <h1 className={styles['lp-works-header-heading']}>
          {selectedWorks.meta.heading}
        </h1>
        <p className={styles['lp-works-header-count']}>
          {selectedWorks.meta.count}
        </p>
      </div>

      {/* ── Divider below header ─────────────────────────── */}
      <hr className={styles['lp-works-divider']} aria-hidden="true" />

      {/* ── Cards list ───────────────────────────────────── */}
      <div className={styles['lp-works-cards-list']}>
        {selectedWorks.items.map((work, i) => (
          <WorkCard
            key={work.id}
            work={work}
            priority={i === 0}
          />
        ))}
      </div>

    </div>
  )
}
