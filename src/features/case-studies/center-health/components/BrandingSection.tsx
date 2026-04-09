/*
 * BrandingSection.tsx — Center Health (012)
 * Corrected from Figma node 1237:11424.
 *
 * Layout: index-left / content-right ROW (gap-24).
 * Content column (gap-64): heading + image.
 *
 * Server Component.
 */

import Image from 'next/image'
import type { CenterHealthBrandingSection } from '../content'
import styles from './BrandingSection.module.css'

interface BrandingSectionProps {
  section: CenterHealthBrandingSection
}

export default function BrandingSection({ section }: BrandingSectionProps) {
  return (
    <div className={styles.root}>

      {/* Row: index (left) + content (right) */}
      <div className={styles.row}>

        <p className={styles.index}>{section.index}</p>

        <div className={styles.contentCol}>
          <h2 className={styles.heading}>{section.heading}</h2>
        </div>

      </div>

      {/* Image — outside row for full section width */}
      <div
        className={styles.imageWrap}
        style={{ aspectRatio: section.image.aspect }}
      >
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>

    </div>
  )
}
