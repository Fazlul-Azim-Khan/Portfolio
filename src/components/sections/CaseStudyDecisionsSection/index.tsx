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
        <div key={i}>

          {/* Divider above each decision */}
          <div className={styles['decisions-divider']} aria-hidden="true" />

          {/* Decision block — 80vh panel (all three decisions per :003 scope) */}
          <div className={`${styles['decisions-block']} ${styles['decisions-block-panel']}`}>

            {/* Title row with inline line — h-[111px] */}
            {/*
              Alternates: title left + line right / line left + title right
              Confirmed: Figma nodes 1005:6341, 1005:6357, 1005:6373
            */}
            <div className={styles['decisions-title-row']} data-align={i % 2 === 0 ? 'left' : 'right'}>
              {i % 2 !== 0 && <div className={styles['decisions-title-line']} aria-hidden="true" />}
              <h3 className={styles['decisions-title']}>{decision.title}</h3>
              {i % 2 === 0 && <div className={styles['decisions-title-line']} aria-hidden="true" />}
            </div>

            {/* CHOSE / WHY / TRADEOFF — 3 equal columns */}
            {/*
              gap-[12px] — Figma nodes 1005:6346/6362/6378
              Decision 01 uses items-center (Figma 1005:6346), others items-start
            */}
            <div className={styles['decisions-tri-col']} data-first={i === 0 ? 'true' : undefined}>

              <div className={styles['decisions-tri-item']}>
                <div className={styles['decisions-tri-divider']} aria-hidden="true" />
                <p className={styles['decisions-tri-label']}>Chose</p>
                <p className={styles['decisions-tri-body']}>{decision.chose}</p>
              </div>

              <div className={styles['decisions-tri-item']}>
                <div className={styles['decisions-tri-divider']} aria-hidden="true" />
                <p className={styles['decisions-tri-label']}>Why</p>
                <p className={styles['decisions-tri-body']}>{decision.why}</p>
              </div>

              <div className={styles['decisions-tri-item']}>
                <div className={styles['decisions-tri-divider']} aria-hidden="true" />
                <p className={styles['decisions-tri-label']}>Tradeoff</p>
                <p className={styles['decisions-tri-body']}>{decision.tradeoff}</p>
              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  )
}
