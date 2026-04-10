/*
 * CaseStudyClientFeedbackSection/index.tsx
 * Client Feedback — full-width dark card with teal quote cards.
 * Confirmed from Figma node 1005:6253
 *
 * Layout:
 *
 *   ┌──────────────────────────────────────── dark card ──┐
 *   │  CLIENT FEEDBACK                   (H1 white 120px) │
 *   │                                                      │
 *   │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │
 *   │  │  "Quote 1" │  │  "Quote 2" │  │  "Quote 3" │    │
 *   │  │  teal card │  │  teal card │  │  teal card │    │
 *   │  └────────────┘  └────────────┘  └────────────┘    │
 *   │                                                      │
 *   │                              Daniel First, CEO  →    │
 *   └──────────────────────────────────────────────────────┘
 *
 * Brand colour #2fe3ff is an Axion-specific content value,
 * NOT a design token — used only in this case study.
 *
 * Server Component — no client-side interaction.
 */

import type { CaseStudyClientFeedbackSection as FeedbackType } from '@/types'
import styles from './CaseStudyClientFeedbackSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudyClientFeedbackSectionProps {
  section: FeedbackType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyClientFeedbackSection({
  section,
}: CaseStudyClientFeedbackSectionProps) {
  return (
    <div className={styles.section}>

      {/* ── Heading ──────────────────────────────────────── */}
      {/*
        120px Integral CF, white, tracking -1.8px, leading-[120px]
        Confirmed: Figma node 1005:6255
      */}
      <div className={styles.headingBlock}>
        <h1 className={styles.heading}>{section.heading}</h1>
      </div>

      {/* ── Quote cards ──────────────────────────────────── */}
      {/*
        3 cards flex row, each: #2fe3ff bg, flex-1, h-232px
        px-20px, py-16px, rounded-8px, Integral CF 20px black
        Confirmed: Figma node 1005:6256–6262
      */}
      <div className={styles.cards}>
        {section.quotes.map((quote, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>{quote}</p>
          </div>
        ))}
      </div>

      {/* ── Attribution ──────────────────────────────────── */}
      {/*
        Right-aligned, Integral CF 20px white
        Confirmed: Figma node 1014:6742
      */}
      <div className={styles.attribution}>
        <p className={styles.attributionText}>{section.attribution}</p>
      </div>

    </div>
  )
}
