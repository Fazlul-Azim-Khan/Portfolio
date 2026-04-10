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
    <div className={styles.content}>

      {/* ── Section heading ──────────────────────────────── */}
      <h1 className={styles.heading}>{section.heading}</h1>

      {/* ── Decision rows ─────────────────────────────────── */}
      {section.decisions.map((decision, i) => (
        <div key={i}>

          {/* Divider above each decision */}
          <div className={styles.divider} aria-hidden="true" />

          {/* Decision block — h-[400px] */}
          <div className={styles.decisionBlock}>

            {/* Title row with inline line — h-[111px] */}
            {/*
              Alternates: title left + line right / line left + title right
              Confirmed: Figma nodes 1005:6341, 1005:6357, 1005:6373
            */}
            <div className={styles.titleRow} data-align={i % 2 === 0 ? 'left' : 'right'}>
              {i % 2 !== 0 && <div className={styles.titleLine} aria-hidden="true" />}
              <h3 className={styles.decisionTitle}>{decision.title}</h3>
              {i % 2 === 0 && <div className={styles.titleLine} aria-hidden="true" />}
            </div>

            {/* CHOSE / WHY / TRADEOFF — 3 equal columns */}
            {/*
              gap-[12px] — Figma nodes 1005:6346/6362/6378
              Decision 01 uses items-center (Figma 1005:6346), others items-start
            */}
            <div className={styles.triCol} data-first={i === 0 ? 'true' : undefined}>

              <div className={styles.triColItem}>
                <div className={styles.triDivider} aria-hidden="true" />
                <p className={styles.triLabel}>Chose</p>
                <p className={styles.triBody}>{decision.chose}</p>
              </div>

              <div className={styles.triColItem}>
                <div className={styles.triDivider} aria-hidden="true" />
                <p className={styles.triLabel}>Why</p>
                <p className={styles.triBody}>{decision.why}</p>
              </div>

              <div className={styles.triColItem}>
                <div className={styles.triDivider} aria-hidden="true" />
                <p className={styles.triLabel}>Tradeoff</p>
                <p className={styles.triBody}>{decision.tradeoff}</p>
              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  )
}
