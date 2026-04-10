/*
 * HomeDashboardSection.tsx — Center Health (006)
 * Confirmed from Figma node 1161:6208 (updated layout).
 *
 * Self-contained — does NOT use CaseStudySectionWrapper.
 * White background, bottom border divider.
 *
 * Layout (updated — index-left / content-right row):
 *
 *   ┌── section (py-96px, border-b, items-end) ───────────────────────────────┐
 *   │                                                                          │
 *   │  (006)  ┌── content col (flex-1, gap-64) ────────────────────────────┐  │
 *   │         │                                                             │  │
 *   │         │  HEADING                                                    │  │
 *   │         │                                    body paragraph (500px)   │  │
 *   │         │                                                             │  │
 *   │         │  WHAT I DESIGNED ─────────────────────────────              │  │
 *   │         │  ┌──────┐  ┌──────┐  ┌──────┐  (3×2 grid + stars)        │  │
 *   │         │  │  *   │  │  *   │  │  *   │                              │  │
 *   │         │  │ Item │  │ Item │  │ Item │                              │  │
 *   │         │  ├──────┤  ├──────┤  ├──────┤                              │  │
 *   │         │  │  *   │  │  *   │  │  *   │                              │  │
 *   │         │  │ Item │  │ Item │  │ Item │                              │  │
 *   │         │  └──────┘  └──────┘  └──────┘                              │  │
 *   │         │                                                             │  │
 *   │         │  [full-width image]                                         │  │
 *   │         │                                                             │  │
 *   │         │  Results   HEADING TEXT… (H4 32px)                          │  │
 *   │         └─────────────────────────────────────────────────────────────┘  │
 *   └──────────────────────────────────────────────────────────────────────────┘
 *
 * Typography:
 *   Index    — Inter 12px lead, --color-text-muted, uppercase
 *   Heading  — Integral CF 56px H3, tracking -0.84px, uppercase
 *   Body     — Inter 14px, black, line-height 20px
 *   Label    — Integral CF 32px H4, black, uppercase
 *   Grid *   — Integral CF 64px H2, --color-tertiary (gray)
 *   Grid txt — Integral CF 20px H5, black
 *   Results  — Integral CF 32px H4, black, uppercase  ← smaller than sections 004–005
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthHomeDashboardSection } from '../content'
import styles from './HomeDashboardSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface HomeDashboardSectionProps {
  section: CenterHealthHomeDashboardSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function HomeDashboardSection({ section }: HomeDashboardSectionProps) {
  return (
    <div className={styles['home-root']}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles['home-row']}>

        {/* Index — left column */}
        <p className={styles['home-index']}>{section.index}</p>

        {/* Content column — heading + body + what + image + results */}
        <div className={styles['home-content-col']}>

          {/* ── 1. Heading ─────────────────────────────────── */}
          <h1 className={styles['home-heading']}>{section.heading}</h1>


          {/* ── 2. Body paragraph — right-aligned ──────────── */}
          {/*
            Figma: flex row, items-center, justify-end, w-full
            Paragraph: w-500px
            Confirmed: Figma node 1242:11660
          */}
          <div className={styles['home-body-row']}>
            <p className={styles['home-body']}>{section.body}</p>
          </div>


          {/* ── 3. What I Designed — H4 label + grid ───────── */}
          {/*
            Figma: flex-col
            Label row: h-111px — "what i designed" H4 (flex-1) + black line (flex-1)
            Grid: 3×2 with divider + star + title per cell
            Confirmed: Figma node 1242:11663
          */}
          <div className={styles['home-what-block']}>

            <div className={styles['home-what-label-row']}>
              <h3 className={styles['home-what-label']}>What I designed</h3>
            </div>

            <div className={styles['home-feature-grid']}>
              {section.whatIDesigned.map((item, i) => (
                <div key={i} className={styles['home-feature-item']}>
                  <div className={styles['home-feature-divider']} aria-hidden="true" />
                  <p className={styles['home-feature-title']}>{item}</p>
                </div>
              ))}
            </div>

          </div>


        </div>

      </div>

      {/* ── 4. Image — outside row for full section width ──── */}
      {/*
        Figma: aspect-[1504/1128], rounded-sm (8px)
        Confirmed: Figma node 1242:11699
      */}
      <div
        className={styles['home-image-wrap']}
        style={{ aspectRatio: section.image.aspect }}
      >
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles['home-image']}
        />
      </div>

      {/* ── 5. Results — full section width ──────────────── */}
      {/*
        Results text: H4 32px (NOT H3 56px as in sections 004–005).
        Figma: flex row, gap 24px
        Confirmed: Figma node 1242:11700
      */}
      <div className={styles['home-results']}>
        <p className={styles['home-results-label']}>Results</p>
        <h3 className={styles['home-results-heading']}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
