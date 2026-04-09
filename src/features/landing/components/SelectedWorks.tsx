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
    <div className={styles.root} aria-label="Selected Works">

      {/* ── Section header row ───────────────────────────── */}
      {/*
        Three-zone flex row:
          Left   — index "(002)"       Inter 12px uppercase, --color-tertiary
          Centre — "Selected Works"    Integral CF 56px H3, --color-primary
          Right  — "3 Case Studies"    Inter 12px uppercase, --color-primary
        Confirmed: Figma nodes 966:7566–7570
      */}
      <div className={styles.header}>
        <p className={styles.headerIndex}>
          {selectedWorks.meta.index}
        </p>
        <h2 className={styles.headerHeading}>
          {selectedWorks.meta.heading}
        </h2>
        <p className={styles.headerCount}>
          {selectedWorks.meta.count}
        </p>
      </div>

      {/* ── Divider below header ─────────────────────────── */}
      <hr className={styles.divider} aria-hidden="true" />

      {/* ── Cards list ───────────────────────────────────── */}
      {/*
        Single column, gap: --space-works-gap (256px)
        First card gets priority to avoid LCP penalty.
      */}
      <div className={styles.cardsList}>
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
