/*
 * CaseStudyDecisionsSection/index.tsx
 * Key Design Decisions — (003)
 * Confirmed from Figma node 1005:6337
 *
 * Layout (inside SectionWrapper, light bg):
 *
 *   H3 "Key Design Decisions"
 *
 *   For each decision:
 *   ┌────────────────────────────────────────────────────┐
 *   │  Decision Title (H4)  ─────────────────────────── │  h-[111px]
 *   ├────────────────────────────────────────────────────┤
 *   │  CHOSE          │  WHY            │  TRADEOFF      │  flex-1
 *   │  ─────────      │  ─────────      │  ─────────     │
 *   │  (H5 20px)      │  (H5 20px)      │  (H5 20px)     │
 *   │  body text      │  body text      │  body text     │
 *   └────────────────────────────────────────────────────┘  h-[400px] total
 *
 * Server Component — no client-side interaction.
 */

import type { CaseStudyDecisionsSection as DecisionsType } from '@/types'
import styles from './CaseStudyDecisionsSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudyDecisionsSectionProps {
  section: DecisionsType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyDecisionsSection({ section }: CaseStudyDecisionsSectionProps) {
  return (
    <div className={styles['decisions-content']}>

      {/* ── Section heading ──────────────────────────────── */}
      <h1 className={styles['decisions-heading']}>{section.heading}</h1>

      {/* ── Decision rows ─────────────────────────────────── */}
      {section.decisions.map((decision, i) => (
        <div key={i} className={`${styles['decisions-block']} ${styles['decisions-block-panel']}`}>

          {/* Decision title */}
          <h3 className={styles['decisions-title']}>{decision.title}</h3>

          {/* CHOSE / WHY / TRADEOFF — 3 equal columns */}
          <div className={styles['decisions-tri-col']} data-first={i === 0 ? 'true' : undefined}>

            <div className={styles['decisions-tri-item']}>
              <p className={styles['decisions-tri-label']}>Chose</p>
              <p className={styles['decisions-tri-body']}>{decision.chose}</p>
            </div>

            <div className={styles['decisions-tri-item']}>
              <p className={styles['decisions-tri-label']}>Why</p>
              <p className={styles['decisions-tri-body']}>{decision.why}</p>
            </div>

            <div className={styles['decisions-tri-item']}>
              <p className={styles['decisions-tri-label']}>Tradeoff</p>
              <p className={styles['decisions-tri-body']}>{decision.tradeoff}</p>
            </div>

          </div>

        </div>
      ))}

    </div>
  )
}
