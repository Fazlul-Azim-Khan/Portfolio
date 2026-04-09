/*
 * FundingMilestone.tsx — (007)
 * Confirmed from Figma node 981:7629.
 *
 * Self-contained dark card milestone section.
 * Renders its own index column — does NOT use CaseStudySectionWrapper.
 *
 * Layout:
 *
 *   ┌── dark card (bg --color-primary, radius --radius-sm) ────────────────┐
 *   │                                                                        │
 *   │  (007)  ┌── content column (flex-col, gap-32) ────────────────────┐  │
 *   │  index  │                                                           │  │
 *   │         │  ┌─ chip ────────────────────────────────────────────┐  │  │
 *   │         │  │  *  Milestone · U.S. Air Force SBIR Contract      │  │  │
 *   │         │  └───────────────────────────────────────────────────┘  │  │
 *   │         │                                                           │  │
 *   │         │  ┌─ header row ─────────────────────────────────────┐   │  │
 *   │         │  │  H3 heading (flex-1)   body text (w-400px)       │   │  │
 *   │         │  └──────────────────────────────────────────────────┘   │  │
 *   │         │                                                           │  │
 *   │         │  ┌─ image (full-width, aspect ~1217/1005, rounded) ──┐  │  │
 *   │         │  │                                                    │  │  │
 *   │         │  └────────────────────────────────────────────────────┘  │  │
 *   │         └───────────────────────────────────────────────────────────┘  │
 *   └────────────────────────────────────────────────────────────────────────┘
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { FundingMilestoneSection } from '../content'
import styles from './FundingMilestone.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface FundingMilestoneProps {
  section: FundingMilestoneSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function FundingMilestone({ section }: FundingMilestoneProps) {
  return (
    <div className={styles.card}>

      {/* ── Index column — matches CaseStudySectionWrapper width ── */}
      <p className={styles.index}>{section.index}</p>

      {/* ── Content column ──────────────────────────────────────── */}
      <div className={styles.content}>

        {/* ── Chip ──────────────────────────────────────────────── */}
        {/*
          Dark bg, white 1px border, rounded-8px, padding-12px, gap-10px
          Confirmed: Figma node 981:7629 chip row
        */}
        <div className={styles.chip}>
          <span className={styles.chipIcon} aria-hidden="true">{section.chipIcon}</span>
          <span className={styles.chipLabel}>{section.chip}</span>
        </div>

        {/* ── Header row — heading + body side by side ─────────── */}
        {/*
          flex row, gap-24px
          Heading: flex-1, H3 56px Integral CF white, tracking -0.84px
          Body: w-400px, Inter 16px white, line-height 1.7
          Confirmed: Figma node 981:7629 header row
        */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.body}>{section.body}</p>
        </div>

        {/* ── Image — full-width, rounded ───────────────────────── */}
        {/*
          aspect ~1217/1005, rounded-8px, object-cover
          Confirmed: Figma node 981:7629 image block
          ⚠️  Image file must be present at path defined in content file
        */}
        <div className={styles.imageWrap}>
          <Image
            src={section.image}
            alt="U.S. Air Force SBIR Contract — Axion Ray milestone"
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>

      </div>

    </div>
  )
}
