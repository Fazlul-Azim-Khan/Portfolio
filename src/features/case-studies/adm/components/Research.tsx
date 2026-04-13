/*
 * Research.tsx — (002)
 * ADM-specific section: User Research
 *
 * Dark-card section following the Axion Ray visual pattern.
 * Self-contained — bypasses CaseStudySectionWrapper (has its own index column).
 *
 * Layout:
 *
 *   ┌─────────────────────────────────────────────────────────────────────┐
 *   │  (002)  │  USER RESEARCH              │  Intro paragraph            │
 *   │         │                             │                             │
 *   │         │  STAKEHOLDER GROUPS         │                             │
 *   │         │  [chip] [chip] [chip]...                                  │
 *   │         │                             │                             │
 *   │         │  Col 1       │  Col 2       │  Col 3  (conclusions)       │
 *   │         │──────────────────────────────────────────────────────────│
 *   │         │  PAIN POINTS DISCOVERED     │                             │
 *   │         │  [chip] [chip] [chip]...                                  │
 *   │         │──────────────────────────────────────────────────────────│
 *   │         │  WORKFLOW OBSERVATIONS:                                   │
 *   │         │  [chip] [chip] [chip]                                     │
 *   │         │                                                           │
 *   │         │  DESIGN IMPLICATIONS:                                     │
 *   │         │  [chip] [chip] [chip]                                     │
 *   └─────────────────────────────────────────────────────────────────────┘
 *
 * Server Component — no client-side interaction.
 */

import type { ADMResearchSection } from '../content'
import styles from './Research.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ResearchProps {
  section: ADMResearchSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Research({ section }: ResearchProps) {
  return (
    <div className={styles['research-root']}>

      {/* ── Index column — "(002)" ──────────────────────────── */}
      <div className={styles['research-index-col']}>
        <span className={styles['research-index']}>{section.index}</span>
      </div>


      {/* ── Main content column ─────────────────────────────── */}
      <div className={styles['research-content']}>


        {/* ── 1. Intro row — heading + paragraph ──────────────── */}
        <div className={styles['research-intro-row']}>
          <h1 className={styles['research-heading']}>{section.heading}</h1>
          <p  className={styles['research-intro']}>{section.intro}</p>
        </div>


        {/* ── 2. Stakeholder Groups — 80vh panel ──────────────── */}
        <div className={`${styles['research-block']} ${styles['research-panel']}`}>

          <div className={styles['research-block-head']}>
            <p className={styles['research-block-heading']}>Stakeholder Groups</p>
          </div>

          <div className={styles['research-chip-grid']}>
            {section.stakeholderGroups.map((group) => (
              <span key={group} className={styles['research-chip']}>{group}</span>
            ))}
          </div>

        </div>


        {/* ── 3. Three-column conclusions ──────────────────────── */}
        <div className={styles['research-conclusions']}>
          {section.conclusions.map((col, i) => (
            <p key={i} className={styles['research-conclusion-col']}>{col}</p>
          ))}
        </div>


        {/* Divider */}
        <hr className={styles['research-divider']} aria-hidden="true" />


        {/* ── 4. Pain Points Discovered — 80vh panel ──────────── */}
        <div className={`${styles['research-bordered-block']} ${styles['research-panel']}`}>

          <div className={styles['research-block-head']}>
            <p className={styles['research-block-heading']}>Pain Points Discovered</p>
          </div>

          <div className={styles['research-chip-grid-large']}>
            {section.painPoints.map((item) => (
              <span key={item} className={styles['research-chip']}>{item}</span>
            ))}
          </div>

        </div>


        {/* Divider */}
        <hr className={styles['research-divider']} aria-hidden="true" />


        {/* ── 5 & 6. Workflow Observations + Design Implications ── */}
        <div className={styles['research-panel']}>

          {/* Workflow Observations */}
          <div className={styles['research-bordered-block']}>
            <p className={styles['research-block-heading']}>Workflow Observations:</p>
            <div className={styles['research-chip-grid-large']}>
              {section.workflowObservations.map((item) => (
                <span key={item} className={styles['research-chip']}>{item}</span>
              ))}
            </div>
          </div>

          {/* Design Implications */}
          <div className={styles['research-bordered-block']}>
            <p className={styles['research-block-heading']}>Design Implications:</p>
            <div className={styles['research-chip-grid-large']}>
              {section.designImplications.map((item) => (
                <span key={item} className={styles['research-chip']}>{item}</span>
              ))}
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}
