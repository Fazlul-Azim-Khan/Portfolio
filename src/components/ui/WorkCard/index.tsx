/*
 * WorkCard/index.tsx
 * Confirmed from Figma node 942:5673 (first card — manufacturing platform)
 *
 * Structure (top to bottom):
 *   ┌─────────────────────────────────────┐
 *   │  Mockup image (aspect 1328/710)     │
 *   │  border-radius 8px                  │
 *   ├─────────────────────────────────────┤
 *   │  Project header row                 │
 *   │    [index]  [client · title block]  │
 *   │    gap-64px between index and block │
 *   └─────────────────────────────────────┘
 *
 * - Index:  Inter 12px uppercase             (--text-lead / --font-body)
 * - Client: Inter 12px uppercase             (--text-lead / --font-body)
 * - Title:  Integral CF 32px H4             (--text-h4 / --font-display)
 * - Card wraps as a link to /work/[slug]
 *
 * Server Component — no client-side interaction required.
 * Image rendered via Next.js <Image /> with priority on first card.
 */

import Image    from 'next/image'
import Link     from 'next/link'
import type { WorkItem } from '@/types'
import styles   from './WorkCard.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface WorkCardProps {
  work:     WorkItem
  priority?: boolean   /* true for first card — avoids LCP penalty */
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function WorkCard({ work, priority = false }: WorkCardProps) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className={styles['ui-card-root']}
      aria-label={`View case study: ${work.title}`}
    >

      {/* ── Mockup image ───────────────────────────────────── */}
      {/*
        Aspect ratio: 1328 / 710 — confirmed from Figma node 942:5673
        Image fills the wrapper via object-fit: cover.
        fill prop used so Next.js handles responsive sizing.
      */}
      <div className={styles['ui-card-image-wrap']}>
        <Image
          src={work.mockup}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className={styles['ui-card-image']}
          priority={priority}
        />
      </div>

      {/* ── Project header ─────────────────────────────────── */}
      {/*
        Two-column row:
          Left  — index number (Inter 12px uppercase)
          Right — client name above project title (Integral CF 32px)
        Gap: --gap-64 between columns — confirmed from Figma
      */}
      <div className={styles['ui-card-header']}>

        {/* Index — "01" / "02" / "03" */}
        <p className={styles['ui-card-index']} aria-label={`Project ${work.index}`}>
          {work.index}
        </p>

        {/* Client + title block */}
        <div className={styles['ui-card-title-block']}>
          <p className={styles['ui-card-client']}>{work.client}</p>
          <h3 className={styles['ui-card-title']}>{work.title}</h3>
        </div>

      </div>

    </Link>
  )
}
