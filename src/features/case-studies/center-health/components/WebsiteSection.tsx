/*
 * WebsiteSection.tsx — Center Health (010)
 * Corrected from Figma node 1161:6549.
 *
 * Layout: index-left / content-right ROW (gap-40).
 * Content column (gap-64): heading → features → 4 images → results.
 *
 * py-64px, border-b.
 * Server Component.
 */

import Image from 'next/image'
import type { CenterHealthWebsiteSection } from '../content'
import styles from './WebsiteSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface WebsiteSectionProps {
  section: CenterHealthWebsiteSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function WebsiteSection({ section }: WebsiteSectionProps) {
  return (
    <div className={styles['web-root']}>

      {/* ── Row: index (left) + content (right) ──────────── */}
      <div className={styles['web-row']}>

        {/* Index — left column */}
        <p className={styles['web-index']}>{section.index}</p>

        {/* Content column — right side */}
        <div className={styles['web-content-col']}>

          {/* 1. Heading */}
          <h1 className={styles['web-heading']}>{section.heading}</h1>

          {/* 2. Feature items — divider + title */}
          <div className={styles['web-feature-row']}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles['web-feature-item']}>
                <div className={styles['web-feature-divider']} aria-hidden="true" />
                <p className={styles['web-feature-title']}>{feat}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 3. Images — stacked, full section width */}
      {section.images.map((img, i) => (
        <div
          key={i}
          className={`${styles['web-image-wrap']} ${img.rounded ? styles['web-image-rounded'] : ''}`}
          style={{ aspectRatio: img.aspect }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className={styles['web-image']}
          />
        </div>
      ))}

      {/* 4. Results — full section width */}
      <div className={styles['web-results']}>
        <p className={styles['web-results-label']}>Results</p>
        <h3 className={styles['web-results-heading']}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
