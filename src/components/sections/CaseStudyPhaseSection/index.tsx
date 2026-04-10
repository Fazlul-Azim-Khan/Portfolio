/*
 * CaseStudyPhaseSection/index.tsx
 * Phase section — (005) Phase 01 · (006) Phase 02 · (008) Phase 03
 * Confirmed from Figma node 978:7314 (Phase 01) · 980:7443 (Phase 02) · 966:8035 (Phase 03)
 *
 * Layout variations:
 *
 *   Phase 01 — gap-40, body right-aligned (w-540px), keyWork tiles, outcome card, single image
 *   Phase 02 — gap-64, featureCards (3-col), single image  [no body, no keyWork, no outcome]
 *   Phase 03 — gap-64, heading+body side-by-side row, keyWorkItems 4-col, outcome card,
 *               dark image card (3-up row + 1 full-width), single image below
 *
 * Gap rule: Phase 01 → gap-40 (data-layout="default")
 *           Phase 02 + 03 → gap-64 (data-layout="wide") — Figma nodes 980:7447, 966:8039
 *
 * Phase 03 heading+body layout: flex row justify-between, heading w-730px + body w-400px
 *   Confirmed: Figma node 1005:6244
 *
 * Phase 03 image card (Figma 1014:6751):
 *   Row 1 (1014:6752): 3 images flex-1, gap-24, h-390px each
 *   Row 2 (1014:6756): 1 full-width image (geo map)
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import Chip  from '@/components/ui/Chip'
import type { CaseStudyPhaseSection as PhaseType } from '@/types'
import styles from './CaseStudyPhaseSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudyPhaseSectionProps {
  section: PhaseType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyPhaseSection({ section }: CaseStudyPhaseSectionProps) {
  /*
    Phase 01 → gap-40 (default)
    Phase 02 + 03 → gap-64 (wide) based on featureCards or keyWorkItems presence
    Confirmed: Figma 980:7447 (Phase 02) + 966:8039 (Phase 03) both use gap-64
  */
  const isWideLayout = !!(section.featureCards?.length || section.keyWorkItems?.length)

  /*
    Phase 03 uses a heading+body side-by-side row (Figma 1005:6244):
      heading (w-730px) | body (w-400px), justify-between
    Phase 01 uses stacked layout: heading above, body right-aligned below.
    Phase 02 has no body.
  */
  const hasHeadingRow = !!(section.keyWorkItems?.length && section.body)

  return (
    <div
      className={styles.content}
      data-layout={isWideLayout ? 'wide' : undefined}
    >

      {/* ── Phase chip ───────────────────────────────────── */}
      {/*
        Figma node 1005:6223: chip has size-full — fills the content column width.
        .phaseChip overrides the default inline-flex to flex + w-100%.
        The Chip base styles (border, padding, radius, font) are unchanged.
      */}
      <Chip label={section.chip} className={styles.phaseChip} />

      {/* ── Phase 03: heading + body side-by-side row ────── */}
      {/*
        Figma node 1005:6244: flex row, justify-between, items-start
        heading: Integral CF H3, w-730px, uppercase, tracking-h3
        body:    Inter 14px, w-400px
        Confirmed: Phase 03 only (keyWorkItems is the Phase 03 marker)
      */}
      {hasHeadingRow ? (
        <div className={styles.headingRow}>
          <h1 className={styles.heading}>{section.heading}</h1>
          <p className={styles.headingRowBody}>{section.body}</p>
        </div>
      ) : (
        <>
          {/* ── Phase 01/02: heading alone ──────────────── */}
          <h1 className={styles.heading}>{section.heading}</h1>

          {/* ── Phase 01: body right-aligned 540px block ── */}
          {/*
            items-end on container, w-[540px] on text
            Confirmed: Figma node 978:7374 (Phase 01 only)
          */}
          {section.body && (
            <div className={styles.bodyWrap}>
              <p className={styles.body}>{section.body}</p>
            </div>
          )}
        </>
      )}

      {/* ── Feature cards (Phase 02) ─────────────────────── */}
      {/*
        Three dark cards side-by-side.
        Each: title (32px Integral CF) + bullet list + description.
        Confirmed: Figma node 980:7480 (container) + 980:7481/7540/7578 (cards)
        Card: bg black, border-radius 20px, padding 16px/20px, gap 12px
      */}
      {section.featureCards && section.featureCards.length > 0 && (
        <div className={styles.featureCards}>
          {section.featureCards.map((card) => (
            <div key={card.title} className={styles.featureCard}>

              {/* Card title — 32px Integral CF UPPER */}
              <p className={styles.featureCardTitle}>{card.title}</p>

              {/* Bullet list — 12px Inter, white dot */}
              <ul className={styles.featureCardBullets}>
                {card.bullets.map((b) => (
                  <li key={b} className={styles.featureCardBullet}>{b}</li>
                ))}
              </ul>

              {/* Closing description — 14px Inter */}
              <p className={styles.featureCardDesc}>{card.description}</p>

            </div>
          ))}
        </div>
      )}

      {/* ── Key work tiles (Phase 01) ─────────────────────── */}
      {/*
        H3 "Key Work" + flex-wrap dark tiles
        Confirmed: Figma node 979:7382
      */}
      {section.keyWork && section.keyWork.length > 0 && (
        <div className={styles.keyWorkBlock}>
          <h3 className={styles.keyWorkHeading}>Key Work</h3>
          <div className={styles.keyWorkGrid}>
            {section.keyWork.map((item) => (
              <div key={item} className={styles.keyWorkTile}>
                <p className={styles.keyWorkLabel}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Key work columns (Phase 03) ───────────────────── */}
      {/*
        4-col horizontal row: title + description per column
        with a light divider line at the top of each column.
        Confirmed: Figma node 966:8051
      */}
      {section.keyWorkItems && section.keyWorkItems.length > 0 && (
        <div className={styles.keyWorkColumns}>
          {section.keyWorkItems.map((item) => (
            <div key={item.title} className={styles.keyWorkColumn}>
              <div className={styles.keyWorkColDivider} aria-hidden="true" />
              <p className={styles.keyWorkColTitle}>{item.title}</p>
              <p className={styles.keyWorkColDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── Outcome dark card ────────────────────────────── */}
      {/*
        bg-[var(--primary)], p-64px, rounded-8px
        Confirmed: Figma node 1005:5971 (Phase 01) · 999:5833 (Phase 03)
      */}
      {section.outcome && (
        <div className={styles.outcomeCard}>
          <p className={styles.outcomeLabel}>{section.outcome.label}</p>
          <h3 className={styles.outcomeHeadline}>{section.outcome.headline}</h3>
          <div className={styles.outcomeDivider} aria-hidden="true" />
          <p className={styles.outcomeSubline}>{section.outcome.subline}</p>
        </div>
      )}

      {/* ── Phase 03 image card — dark card with 3-up row + full-width below ── */}
      {/*
        Figma node 1014:6751: bg-primary, flex-col, gap-10, p-8, radius-8
          Row 1 (1014:6752): flex-row, gap-24, 3 images each flex-1, h-388-390px
          Row 2 (1014:6756): 1 image full-width
        Confirmed: phase-03-panel1/2/3.png + phase-03-geo.png (see content.ts for paths)
      */}
      {/* ── Composite image — single export of panels+geo dark card ── */}
      {section.imagesComposite && (
        <div className={styles.imagesCard}>
          <div
            className={styles.imagesBottom}
            style={section.imagesCompositeAspect
              ? { aspectRatio: section.imagesCompositeAspect }
              : undefined
            }
          >
            <Image
              src={section.imagesComposite}
              alt={`${section.heading} — dashboard panels`}
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
        </div>
      )}

      {/* ── Separate panels + geo (legacy — kept for future use) ── */}
      {!section.imagesComposite && (section.imagesRow?.length || section.imagesBottom) && (
        <div className={styles.imagesCard}>

          {/* Row 1 — 3 images side-by-side */}
          {section.imagesRow && section.imagesRow.length > 0 && (
            <div className={styles.imagesRow}>
              {section.imagesRow.map((src, idx) => (
                <div key={src} className={styles.imagesRowItem}>
                  <Image
                    src={src}
                    alt={`${section.heading} — panel ${idx + 1}`}
                    fill
                    sizes="33vw"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Row 2 — geo map, full width */}
          {section.imagesBottom && (
            <div
              className={styles.imagesBottom}
              style={section.imagesBottomAspect
                ? { aspectRatio: section.imagesBottomAspect }
                : undefined
              }
            >
              <Image
                src={section.imagesBottom}
                alt={`${section.heading} — map`}
                fill
                sizes="100vw"
                className={styles.image}
              />
            </div>
          )}

        </div>
      )}

      {/* ── Phase image — single full-width (Phase 01, Phase 03) ── */}
      {/*
        Phase 01: hero mockup below the section.
        Phase 03: "Designing for Axion" image below the dark card (Figma node 1021:6854).
        ⚠️  Image file must be placed at path defined in content file
      */}
      {section.image && (
        <div
          className={styles.imageWrap}
          style={section.imageAspect
            ? { aspectRatio: section.imageAspect }
            : { aspectRatio: '16 / 9' }
          }
        >
          <Image
            src={section.image}
            alt={`${section.heading} — phase image`}
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>
      )}

    </div>
  )
}
