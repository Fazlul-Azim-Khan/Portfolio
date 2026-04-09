'use client'

/*
 * features/landing/components/MoreWork.tsx
 *
 * More Works gallery section — confirmed from Figma node 1021:6995.
 *
 * Layout (top to bottom):
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  (003)   MORE GLIMPSE OF WORKS                           │
 *   │  index   heading H3                                      │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  ─────────────────── divider ───────────────────────     │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
 *   │  │  Card 01 │  │  Card 02 │  │  Card 03 │              │
 *   │  └──────────┘  └──────────┘  └──────────┘              │
 *   │  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
 *   │  │  Card 04 │  │  Card 05 │  │  Card 06 │              │
 *   │  └──────────┘  └──────────┘  └──────────┘              │
 *   │  ... 4 rows × 3 columns = 12 items total                 │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Grid: 3 columns
 *   column-gap: --space-gallery-gap-x (40px)
 *   row-gap:    --space-gallery-gap-y (80px)
 *
 * Section:
 *   padding-top:    --space-more-pt (200px)
 *   padding-bottom: --padding-64
 *
 * Card:
 *   aspect-ratio: --aspect-gallery-card (410.667 / 326)
 *   radius default: --radius-sm (8px)
 *   radius large:   --radius-sm (8px)   ← project-wide single radius
 *
 * Interaction:
 *   Clicking a card opens a full-screen modal.
 *   Modal closes on: Escape key · overlay click · ✕ button.
 *   Body scroll is locked while modal is open.
 *
 * Content: src/features/landing/content.ts
 * Client Component — modal state requires client-side JS.
 * The <section> wrapper and scroll ref are owned by LandingPage.
 */

import { useState, useEffect, useCallback } from 'react'
import Image                                from 'next/image'
import { gallery }                          from '../content'
import type { GalleryItem }                 from '../content'
import styles                               from './MoreWork.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function MoreWork() {

  // ── Modal state ───────────────────────────────────────────
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  // ── Body scroll lock ──────────────────────────────────────
  // Lock scroll when a modal is open; restore on close/unmount
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeItem])

  // ── Escape key handler ────────────────────────────────────
  const closeModal = useCallback(() => setActiveItem(null), [])

  useEffect(() => {
    if (!activeItem) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeItem, closeModal])


  // ── Render ────────────────────────────────────────────────
  return (
    <div className={styles.root} aria-label="More Works">

      {/* ── Section header row ───────────────────────────── */}
      {/*
        Two-zone flex row (no count on right — confirmed Figma node 1021:6995):
          Left   — index "(003)"              Inter 12px uppercase, --color-tertiary
          Centre — "More glimpse of works"    Integral CF 56px H3, --color-primary
      */}
      <div className={styles.header}>
        <p className={styles.headerIndex}>
          {gallery.meta.index}
        </p>
        <div className={styles.headerContent}>
          <h2 className={styles.headerHeading}>
            {gallery.meta.heading}
          </h2>
          <p className={styles.headerSubheading}>
            {gallery.meta.subheading}
          </p>
        </div>
      </div>

      {/* ── Divider below header ─────────────────────────── */}
      <hr className={styles.divider} aria-hidden="true" />

      {/* ── Gallery grid ─────────────────────────────────── */}
      {/*
        3 columns × 4 rows = 12 items
        column-gap: --space-gallery-gap-x (40px)
        row-gap:    --space-gallery-gap-y (80px)
        Each card is a <button> — opens modal on click.
      */}
      <div className={styles.grid} role="list">
        {gallery.items.map((item) => (
          <button
            key={item.id}
            className={[
              styles.card,
              item.radiusVariant === 'large' ? styles.cardLarge : '',
            ].join(' ').trim()}
            style={item.backgroundColor ? { backgroundColor: item.backgroundColor } : undefined}
            onClick={() => setActiveItem(item)}
            aria-label={`View preview: ${item.title}`}
            role="listitem"
            type="button"
          >
            {/* Image container — aspect ratio clipped */}
            <div className={styles.cardImageWrap}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className={styles.cardImage}
              />
            </div>

            {/* Card title — Integral CF 20px H5 */}
            <p className={styles.cardTitle}>{item.title}</p>
          </button>
        ))}
      </div>

      {/* ── Modal ────────────────────────────────────────── */}
      {/*
        Overlay: full-viewport, z-index: --z-modal (200)
        Clicking overlay or pressing Escape closes the modal.
        Clicking the inner content panel stops propagation.
        No scroll inside the modal.
      */}
      {activeItem && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${activeItem.title}`}
          onClick={closeModal}
        >
          <div
            className={styles.modalPanel}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close preview"
              type="button"
            >
              ✕
            </button>

            {/* Full image — object-fit: contain shows full image without crop */}
            <div className={styles.modalImageWrap}>
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className={styles.modalImage}
              />
            </div>

            {/* Caption */}
            <p className={styles.modalCaption}>
              {activeItem.title}
            </p>

          </div>
        </div>
      )}

    </div>
  )
}
