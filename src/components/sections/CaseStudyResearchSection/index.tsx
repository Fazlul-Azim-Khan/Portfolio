/*
 * CaseStudyResearchSection/index.tsx
 * User Research — Section (002)
 *
 * Single dark card. Natural page scroll.
 * NO scroll-snap. NO viewport-height panels.
 *
 * Layout (Figma node 978:6038):
 *
 *   ┌─────────────────────────────────────────────────────────────────────┐
 *   │  (002)  │  USER RESEARCH              │  Intro paragraph            │
 *   │         │                             │                             │
 *   │         │  PERSONALITY TRAITS         │  What Emotions...?          │
 *   │         │  [chip] [chip] [chip]...                                  │
 *   │         │                             │                             │
 *   │         │  Col 1       │  Col 2       │  Col 3  (20px Integral CF)  │
 *   │         │──────────────────────────────────────────────────────────│
 *   │         │  CHALLENGES & PAINS         │  What Are We Trying...?     │
 *   │         │  [chip] [chip] [chip]...                                  │
 *   │         │──────────────────────────────────────────────────────────│
 *   │         │  EXISTING SYSTEMS CAUSES:                                 │
 *   │         │  [chip] [chip] [chip]                                     │
 *   │         │                                                           │
 *   │         │  HAVE TO BRING IN THESE EMOTIONS:                         │
 *   │         │  [chip] [chip] [chip]                                     │
 *   │         │──────────────────────────────────────────────────────────│
 *   └─────────────────────────────────────────────────────────────────────┘
 *
 * Confirmed from Figma: node 978:6038 (Container, 1408×2580px)
 * Server Component — no client-side interaction required.
 */

import type { CaseStudyResearchSection as ResearchType } from '@/types'
import styles from './CaseStudyResearchSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface Props {
  section: ResearchType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyResearchSection({ section }: Props) {
  return (
    <div className={styles['research-root']}>

      {/* ── Index column — "(002)" ────────────────────────────
          Figma node 978:6039 — 38.64px wide left column
          ──────────────────────────────────────────────────── */}
      <div className={styles['research-index-col']}>
        <span className={styles['research-index']}>{section.index}</span>
      </div>


      {/* ── Main content column ───────────────────────────────
          Figma node 1005:5988 (Frame 61) — flex-col, gap 32px
          ──────────────────────────────────────────────────── */}
      <div className={styles['research-content']}>


        {/* ── 1. Intro row — heading + paragraph ──────────────
            Figma 978:6042: flex-row, itemSpacing 20px
            Left:  "USER RESEARCH" heading (H1)
            Right: intro paragraph (body)
            ──────────────────────────────────────────────────── */}
        <div className={styles['research-intro-row']}>
          <h1 className={styles['research-heading']}>{section.heading}</h1>
          <p  className={styles['research-intro']}>{section.intro}</p>
        </div>


        {/* ── 2. Personality Traits ────────────────────────────
            Figma 1005:6085: flex-col, gap 32px
            Heading + chip grid, 80vh panel
            ──────────────────────────────────────────────────── */}
        <div className={`${styles['research-traits-block']} ${styles['research-panel']}`}>

          <div className={styles['research-block-head']}>
            <p className={styles['research-block-heading']}>Personality Traits</p>
          </div>

          {/* Personality Traits: gap-24px — Figma 1005:6096 */}
          <div className={styles['research-chip-grid']}>
            {section.personalityTraits.map((trait) => (
              <span key={trait} className={styles['research-chip']}>{trait}</span>
            ))}
          </div>

        </div>


        {/* ── 3. Three-column conclusions ──────────────────────
            Figma 1005:5983 "Causes": flex-row, gap 64px, padding 64px top/bottom
            ──────────────────────────────────────────────────── */}
        <div className={styles['research-conclusions']}>
          {section.conclusions.map((col, i) => (
            <p key={i} className={styles['research-conclusion-col']}>{col}</p>
          ))}
        </div>


        {/* Divider — Figma node 1014:6851 */}
        <hr className={styles['research-divider']} aria-hidden="true" />


        {/* ── 4. Challenges & Pains ────────────────────────────
            Figma 1005:6113 "HorizontalBorder": padding 40px top/bottom
            Heading + chip grid, 80vh panel
            ──────────────────────────────────────────────────── */}
        <div className={`${styles['research-bordered-block']} ${styles['research-panel']}`}>

          <div className={styles['research-block-head']}>
            <p className={styles['research-block-heading']}>Challenges &amp; Pains</p>
          </div>

          {/* Challenges & Pains: gap-32px — Figma 1005:6123 gap-[32px] */}
          <div className={styles['research-chip-grid-large']}>
            {section.challengesPains.map((item) => (
              <span key={item} className={styles['research-chip']}>{item}</span>
            ))}
          </div>

        </div>


        {/* Divider — Figma node 1014:6849 */}
        <hr className={styles['research-divider']} aria-hidden="true" />


        {/* ── 5 & 6. Existing Systems + Have to Bring ──────────
            Combined 80vh panel — two bordered blocks sharing one
            viewport-height breathing block.
            ──────────────────────────────────────────────────── */}
        <div className={styles['research-panel']}>

          {/* ── 5. Existing Systems Causes ───────────────────────
              Figma 1005:6151 "HorizontalBorder": padding 40px top/bottom
              ──────────────────────────────────────────────────── */}
          <div className={styles['research-bordered-block']}>
            <p className={styles['research-block-heading']}>Existing Systems Causes:</p>
            {/* Existing Causes: gap-32px — Figma 1005:6157 gap-[0px_32px] */}
            <div className={styles['research-chip-grid-large']}>
              {section.existingCauses.map((item) => (
                <span key={item} className={styles['research-chip']}>{item}</span>
              ))}
            </div>
          </div>


          {/* ── 6. Target Emotions ───────────────────────────────
              Figma 1005:6166: padding 40px top/bottom
              ──────────────────────────────────────────────────── */}
          <div className={styles['research-bordered-block']}>
            <p className={styles['research-block-heading']}>Have to Bring In These Emotions:</p>
            {/* Target Emotions: gap-32px — Figma 1005:6172 gap-[0px_32px] */}
            <div className={styles['research-chip-grid-large']}>
              {section.targetEmotions.map((item) => (
                <span key={item} className={styles['research-chip']}>{item}</span>
              ))}
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}
