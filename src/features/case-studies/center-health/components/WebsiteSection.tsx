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
    <div className={styles.root}>

      {/* ── Row: index (left) + content (right) ──────────── */}
      <div className={styles.row}>

        {/* Index — left column */}
        <p className={styles.index}>{section.index}</p>

        {/* Content column — right side */}
        <div className={styles.contentCol}>

          {/* 1. Heading */}
          <h2 className={styles.heading}>{section.heading}</h2>

          {/* 2. Feature items — divider + title */}
          <div className={styles.featureRow}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureDivider} aria-hidden="true" />
                <p className={styles.featureTitle}>{feat}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 3. Images — stacked, full section width */}
      {section.images.map((img, i) => (
        <div
          key={i}
          className={`${styles.imageWrap} ${img.rounded ? styles.imageRounded : ''}`}
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

      {/* 4. Results — full section width */}
      <div className={styles.results}>
        <p className={styles.resultsLabel}>Results</p>
        <h3 className={styles.resultsHeading}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
