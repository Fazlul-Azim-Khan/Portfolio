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
    <div className={styles['brand-root']}>

      {/* Row: index (left) + content (right) */}
      <div className={styles['brand-row']}>

        <p className={styles['brand-index']}>{section.index}</p>

        <div className={styles['brand-content-col']}>
          <h1 className={styles['brand-heading']}>{section.heading}</h1>
        </div>

      </div>

      {/* Image — outside row for full section width */}
      <div
        className={styles['brand-image-wrap']}
        style={{ aspectRatio: section.image.aspect }}
      >
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles['brand-image']}
        />
      </div>

    </div>
  )
}
