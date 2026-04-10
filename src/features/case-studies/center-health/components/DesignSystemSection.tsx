/*
 * DesignSystemSection.tsx — Center Health (003)
 * Confirmed from Figma node 1161:5872 (updated layout).
 *
 * Self-contained section — owns its own header row (index + heading + sidebar text).
 * Does NOT use CaseStudySectionWrapper.
 *
 * Layout (updated — index-left / content-right row):
 *
 *   ┌── section (py-96px) ──────────────────────────────────────────────────────┐
 *   │                                                                            │
 *   │  (003)  ┌── content col (w-1328px, gap-64) ──────────────────────────┐   │
 *   │         │                                                             │   │
 *   │         │  HEADING                               Three platforms…     │   │
 *   │         │                                                             │   │
 *   │         │  ┌──────┐  ┌──────┐  ┌──────┐  (3×2 feature grid)        │   │
 *   │         │  │ * F1 │  │ * F2 │  │ * F3 │                             │   │
 *   │         │  ├──────┤  ├──────┤  ├──────┤                             │   │
 *   │         │  │ * F4 │  │ * F5 │  │ * F6 │                             │   │
 *   │         │  └──────┘  └──────┘  └──────┘                             │   │
 *   │         │                                                             │   │
 *   │         │  ┌── demo card (#fafafa) ──────────────────────────────┐   │   │
 *   │         │  │  [image 1]  [image 2]  [image 3]  [image 4]        │   │   │
 *   │         │  └─────────────────────────────────────────────────────┘   │   │
 *   │         │                                                             │   │
 *   │         │  Results   40% FASTER SHIP CYCLES…                         │   │
 *   │         └─────────────────────────────────────────────────────────────┘   │
 *   └────────────────────────────────────────────────────────────────────────────┘
 *
 * Typography:
 *   Index    — Inter 12px lead, #424242 (--color-text-muted), uppercase
 *   Heading  — Integral CF 56px H3, tracking -0.84px, black, uppercase
 *   Sidebar  — Inter 12px lead, black
 *   Star     — Integral CF 64px H2, tracking -0.4px, --color-tertiary (gray)
 *   Feature  — Integral CF 20px H5, black, uppercase
 *   Results  — Integral CF 56px H3, tracking -0.84px, black, uppercase
 *   Label    — Integral CF 20px H5, black, nowrap
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthDesignSystemSection } from '../content'
import styles from './DesignSystemSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface DesignSystemSectionProps {
  section: CenterHealthDesignSystemSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function DesignSystemSection({ section }: DesignSystemSectionProps) {
  return (
    <div className={styles['ds-root']}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles['ds-row']}>

        {/* Index — left column */}
        <p className={styles['ds-index']}>{section.index}</p>

        {/* Content column — heading row + features + demo + results */}
        <div className={styles['ds-content-col']}>

          {/* ── Contents block (heading + features) — min-h 80vh on desktop/tablet ── */}
          <div className={styles['ds-contents-block']}>

            {/* ── 1. Heading row — heading + sidebar ─────────── */}
            <div className={styles['ds-heading-row']}>
              <h1 className={styles['ds-heading']}>{section.heading}</h1>
              <p className={styles['ds-side-text']}>{section.sideText}</p>
            </div>

            {/* ── 2. Features — 3-col × 2-row grid ──────────── */}
            <div className={styles['ds-feature-grid']}>
              {section.features.map((feature, i) => (
                <div key={i} className={styles['ds-feature-item']}>
                  <div className={styles['ds-feature-divider']} aria-hidden="true" />
                  <p className={styles['ds-feature-title']}>{feature}</p>
                </div>
              ))}
            </div>

          </div>

          {/* ── 3. Demo card — stacked design system images ── */}
          <div className={styles['ds-demo-card']}>
            {section.demoImages.map((img, i) => (
              <div
                key={i}
                className={styles['ds-demo-image-wrap']}
                style={img.aspect ? { aspectRatio: img.aspect } : undefined}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 100vw"
                  className={styles['ds-demo-image']}
                />
              </div>
            ))}
          </div>

          {/* ── 4. Results — label + large heading ─────────── */}
          <div className={styles['ds-results']}>
            <p className={styles['ds-results-label']}>Results</p>
            <h3 className={styles['ds-results-heading']}>{section.resultsText}</h3>
          </div>

        </div>

      </div>

    </div>
  )
}
