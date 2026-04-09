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
 * Typography:
 *   index  — Inter 12px uppercase, --color-tertiary
 *   client — Inter 12px uppercase, --color-tertiary
 *   title  — Integral CF 32px H4, --color-primary
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
      className={styles.card}
      aria-label={`View case study: ${work.title}`}
    >

      {/* ── Mockup image ─────────────────────────────────── */}
      {/*
        Aspect ratio: 1328 / 710 — confirmed Figma node 942:5673
        Next.js fill + object-fit: cover handles responsive sizing.
        overflow: hidden + border-radius on wrapper clips the image.
      */}
      <div className={styles.imageWrap}>
        <Image
          src={work.mockup}
          alt={work.title}
          fill
          sizes="100vw"
          className={styles.image}
          priority={priority}
        />
      </div>

      {/* ── Project header ───────────────────────────────── */}
      {/*
        Two-column row:
          Left  — index number  (Inter 12px, --color-tertiary)
          Right — client + title block
        Gap: --gap-64 between columns — confirmed Figma node 942:5673
      */}
      <div className={styles.header}>

        <p className={styles.index} aria-label={`Project ${work.index}`}>
          {work.index}
        </p>

        <div className={styles.titleBlock}>
          <p className={styles.client}>{work.client}</p>
          <h3 className={styles.title}>{work.title}</h3>
        </div>

      </div>

    </Link>
  )
}
