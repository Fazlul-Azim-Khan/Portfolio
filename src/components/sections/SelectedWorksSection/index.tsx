/*
 * SelectedWorksSection/index.tsx
 * Confirmed from Figma node 966:7565
 *
 * Section layout (top to bottom):
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  Section header row                                      │
 *   │    [(002)]   [Selected Works]   [3 Case Studies →]       │
 *   │    left       center (H3)        right (Inter 12px)      │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  WorkCard 01                                             │
 *   │                                                          │
 *   │  WorkCard 02                                             │
 *   │                                                          │
 *   │  WorkCard 03                                             │
 *   └──────────────────────────────────────────────────────────┘
 *
 * - Section vertical padding:    --padding-64 top + bottom
 * - Gap between cards:           --space-works-gap (256px)
 * - Section header divider:      <Divider variant="light" /> above header
 *
 * All content sourced from src/content/works.ts.
 * Server Component — no client-side interaction required.
 */

import WorkCard   from '@/components/ui/WorkCard'
import Divider    from '@/components/ui/Divider'
import { selectedWorks, selectedWorksMeta } from '@/content/works'
import styles     from './SelectedWorksSection.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function SelectedWorksSection() {
  return (
    <section className={styles.section} aria-label="Selected Works">

      {/* ── Section header ─────────────────────────────────── */}
      {/*
        Three-zone header row:
          Left  — section index "(002)" — Inter 12px uppercase
          Centre — "Selected Works" — Integral CF 56px H3
          Right  — "3 Case Studies" — Inter 12px uppercase
        Confirmed: Figma nodes 966:7566–7570
      */}
      <div className={styles.header}>
        <p className={styles.headerIndex}>{selectedWorksMeta.index}</p>
        <h1 className={styles.headerHeading}>{selectedWorksMeta.heading}</h1>
        <p className={styles.headerCount}>{selectedWorksMeta.count}</p>
      </div>

      {/* Divider below header — separates header from cards list */}
      <Divider variant="light" />

      {/* ── Cards list ─────────────────────────────────────── */}
      {/*
        Single column, gap-256px between cards — --space-works-gap
        Confirmed: Figma node 966:7565
        First card gets priority={true} so its image loads as LCP candidate.
      */}
      <div className={styles.cardsList}>
        {selectedWorks.map((work, i) => (
          <WorkCard
            key={work.id}
            work={work}
            priority={i === 0}
          />
        ))}
      </div>

    </section>
  )
}
