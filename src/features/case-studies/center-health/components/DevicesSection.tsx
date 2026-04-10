/*
 * DevicesSection.tsx — Center Health (005)
 * Confirmed from Figma node 1172:6231.
 *
 * Blue brand card (#1ab1fe) — all text white.
 * Self-contained — does NOT use CaseStudySectionWrapper.
 *
 * Sub-areas (top to bottom, gap-8px between each):
 *   1. Index         — (005) alone at top-left
 *   2. Heading row   — 284px spacer + H3 heading (flex-1) + body paragraph (351px)
 *   3. What I Designed — H4 label + white extending line + 5 flex-wrap items
 *   4. Image ×4       — stacked, each full-width with confirmed aspect ratio
 *   5. Results         — "Results" H5 + H3 statement (column layout, all white)
 *
 * Typography (all white — var(--color-secondary)):
 *   Index    — Inter 12px lead, uppercase
 *   Heading  — Integral CF 56px H3, tracking -0.84px, uppercase
 *   Body     — Inter 14px, line-height 20px, pre-wrap
 *   Label    — Integral CF 32px H4, uppercase
 *   Item     — Integral CF 20px H5
 *   Results  — Integral CF 56px H3, tracking -0.84px, uppercase
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthDevicesSection } from '../content'
import styles from './DevicesSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface DevicesSectionProps {
  section: CenterHealthDevicesSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function DevicesSection({ section }: DevicesSectionProps) {
  return (
    <div className={styles.card}>

      {/* ── 1. Index — alone at top ─────────────────────────── */}
      {/*
        Figma: flex-col container, index label only
        Confirmed: Figma node 1172:6232
      */}
      <div className={styles.indexWrap}>
        <p className={styles.index}>{section.index}</p>
      </div>


      {/* ── 2. Heading row — spacer + heading + body ─────────── */}
      {/*
        Figma: flex row, gap 24px
        Left:   284px × 20px spacer (empty)
        Middle: H3 heading (flex-1)
        Right:  351px body paragraph, pre-wrap
        Confirmed: Figma node 1172:6235
      */}
      <div className={styles.headingRow}>
        <div className={styles.headingSpacer} aria-hidden="true" />
        <h1 className={styles.heading}>{section.heading}</h1>
        <p className={styles.bodyText}>{section.body}</p>
      </div>


      {/* ── 3. What I Designed ─────────────────────────────── */}
      {/*
        Figma: flex-col, h-300px (not hardcoded)
        Label row: H4 "what i designed" + white extending line
        Items: flex-wrap, gap 24px, 5 items (flex: 1 0 0)
        Item: divider (#e5e5e5) + title — no stars
        Confirmed: Figma node 1172:6240
      */}
      <div className={styles.whatBlock}>

        <div className={styles.whatLabelRow}>
          <h3 className={styles.whatLabel}>what i designed</h3>
          <div className={styles.whatLine} aria-hidden="true" />
        </div>

        <div className={styles.whatItems}>
          {section.whatIDesigned.map((item, i) => (
            <div key={i} className={styles.whatItem}>
              <div className={styles.whatDivider} aria-hidden="true" />
              <p className={styles.whatItemTitle}>{item}</p>
            </div>
          ))}
        </div>

      </div>


      {/* ── 4. Images — stacked, full-width ─────────────────── */}
      {/*
        4 images with confirmed aspect ratios from Figma.
        Figma nodes: 1172:6270, 1172:6272, 1172:6274, 1172:6276
      */}
      {section.images.map((img, i) => (
        <div
          key={i}
          className={styles.imageWrap}
          style={{ aspectRatio: img.aspect }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>
      ))}


      {/* ── 5. Results — stacked column, white text ─────────── */}
      {/*
        Figma: flex-col, gap 24px, h-345px, justify-center
        "Results" label ABOVE the H3 (not beside it — column layout)
        Confirmed: Figma node 1172:6265
      */}
      <div className={styles.results}>
        <p className={styles.resultsLabel}>Results</p>
        <h3 className={styles.resultsHeading}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
