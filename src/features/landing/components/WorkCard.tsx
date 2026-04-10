/*
 * features/landing/components/WorkCard.tsx
 *
 * Individual case study card used inside SelectedWorks.
 * Confirmed from Figma node 942:5673 (first card — manufacturing platform).
 *
 * Structure (top to bottom):
 *
 *   ┌──────────────────────────────────────┐
 *   │  Mockup image                        │
 *   │  aspect-ratio 1328 / 710             │
 *   │  border-radius: --radius-sm (8px)    │
 *   ├──────────────────────────────────────┤
 *   │  [01]   [UNDER NDA          ]        │
 *   │         [AI-POWERED MANUFAC…]        │
 *   │  index  client · title block         │
 *   │  gap: --gap-64 between columns       │
 *   └──────────────────────────────────────┘
 *
 * The whole card is a link to /work/[slug].
 * Server Component — no client interaction needed.
 */

import Image  from 'next/image'
import Link   from 'next/link'
import styles from './WorkCard.module.css'


/* ============================================================
   TYPES
   ============================================================ */

export interface WorkCardItem {
  id:     string
  index:  string
  client: string
  title:  string
  slug:   string
  mockup: string
}

interface WorkCardProps {
  work:      WorkCardItem
  /** true for the first card — marks image as LCP candidate */
  priority?: boolean
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function WorkCard({ work, priority = false }: WorkCardProps) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className={styles['wc-card']}
      aria-label={`View case study: ${work.title}`}
    >

      {/* ── Mockup image ─────────────────────────────────── */}
      <div className={styles['wc-image-wrap']}>
        <Image
          src={work.mockup}
          alt={work.title}
          fill
          sizes="100vw"
          className={styles['wc-image']}
          priority={priority}
        />
      </div>

      {/* ── Project header ───────────────────────────────── */}
      <div className={styles['wc-header']}>

        <p className={styles['wc-index']} aria-label={`Project ${work.index}`}>
          {work.index}
        </p>

        <div className={styles['wc-title-block']}>
          <p className={styles['wc-client']}>{work.client}</p>
          <h3 className={styles['wc-title']}>{work.title}</h3>
        </div>

      </div>

    </Link>
  )
}
