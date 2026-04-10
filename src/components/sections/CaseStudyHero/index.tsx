/*
 * CaseStudyHero/index.tsx
 * Confirmed from Figma node 977:5889 (Case Hero row) + 966:7719 (image)
 *
 * Layout:
 *
 *   ┌──────────────────────────────────────────┬──────────────┐
 *   │                                          │  Role        │
 *   │  AI-POWERED MANUFACTURING                │  Stage       │
 *   │  FORECASTING PLATFORM                    │  Year        │
 *   │                                          │  Sector      │
 *   │  (H1 — Integral CF, 120px, -1.8px)      │  Note        │
 *   │                                          │              │
 *   │                                          │  [chips]     │
 *   └──────────────────────────────────────────┴──────────────┘
 *   ┌────────────────────────────────────────────────────────┐
 *   │  [Full-width hero image  aspect 1408/776]              │
 *   └────────────────────────────────────────────────────────┘
 *
 * Aspect of the hero row: 1408/700 — Figma node 977:5889
 * Aspect of the image:    1408/776 — Figma node 966:7719
 *
 * Server Component — no client-side interaction required.
 */

import Image   from 'next/image'
import Link    from 'next/link'
import Chip    from '@/components/ui/Chip'
import type { CaseStudyHeroData } from '@/types'
import styles  from './CaseStudyHero.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudyHeroProps {
  hero: CaseStudyHeroData
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyHero({ hero }: CaseStudyHeroProps) {
  const { title, heroImage, imageAspect, aiWatermark, meta } = hero

  return (
    <div className={styles['case-hero-root']}>

      {/* ── Back link — above hero row ────────────────────── */}
      <Link href="/#works" className={styles['case-hero-back']} aria-label="Back to selected works">
        ← Work
      </Link>

      {/* ── AI watermark — absolutely positioned over hero ── */}
      {/*
        Decorative only — omit for projects without watermark (e.g. Center Health).
        Figma node 1036:7745 (Axion Ray) — pointer-events disabled.
      */}
      {aiWatermark && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={aiWatermark}
          alt=""
          aria-hidden="true"
          className={styles['case-hero-watermark']}
        />
      )}

      {/* ── Hero row — title + meta sidebar ──────────────── */}
      {/*
        aspect-[1408/700] — Figma: node 977:5889
        flex row: title takes flex-1, meta sidebar is fixed-width
      */}
      <div className={styles['case-hero-row']}>

        {/* H1 title — left, flex-1 */}
        <div className={styles['case-hero-title-wrap']}>
          <h1 className={styles['case-hero-title']}>{title}</h1>
        </div>

        {/* Meta sidebar — right, fixed width */}
        {/*
          Container: flex-col, gap-24px, h-[480px], w-[300px]
          Confirmed: Figma node 999:5836
        */}
        <div className={styles['case-hero-meta']}>

          {/* Key-value rows — Role, Stage, Year, Sector, Note */}
          {([
            { label: 'Role',   value: meta.role },
            { label: 'Stage',  value: meta.stage },
            { label: 'Year',   value: meta.year },
            { label: 'Sector', value: meta.sector },
            ...(meta.note ? [{ label: 'Note', value: meta.note }] : []),
          ] as { label: string; value: string }[]).map((row) => (
            <div key={row.label} className={styles['case-hero-meta-row']}>
              <p className={styles['case-hero-meta-label']}>{row.label}</p>
              <p className={styles['case-hero-meta-value']}>{row.value}</p>
            </div>
          ))}

          {/* Chips row */}
          {meta.chips.length > 0 && (
            <div className={styles['case-hero-chips']}>
              {meta.chips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>
          )}

        </div>

      </div>

      {/* ── Full-width hero image ─────────────────────────── */}
      {/*
        aspect-[1408/776] — Figma: node 966:7719
        ⚠️  Image must be placed at path defined in content file.
             Shows dark placeholder until image is provided.
      */}
      {heroImage && (
        <div
          className={styles['case-hero-image-wrap']}
          style={imageAspect ? { aspectRatio: imageAspect } : undefined}
        >
          <Image
            src={heroImage}
            alt={`${title} — hero image`}
            fill
            sizes="100vw"
            className={styles['case-hero-image']}
            priority
          />
        </div>
      )}

    </div>
  )
}
