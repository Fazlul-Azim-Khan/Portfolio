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
 *   │  ... 4 rows × 3 columns = 12 items total                 │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Modal:
 *   Opens on card click.
 *   Supports multiple images per item — prev/next navigation.
 *   Nav CTAs use IconButton component (44 × 44px, light variant).
 *   Close uses IconButton (X icon, light variant).
 *   Keyboard: Escape → close, Arrow keys → prev/next.
 *
 * Content: src/features/landing/content.ts
 * Client Component — modal + navigation state requires client-side JS.
 */

import { useState, useEffect, useCallback } from 'react'
import Image                                from 'next/image'
import { gallery }                          from '../content'
import type { GalleryItem }                 from '../content'
import IconButton                           from '@/components/ui/IconButton'
import { ArrowLeft, ArrowRight, X }         from '@/components/icons'
import styles                               from './MoreWork.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function MoreWork() {

  // ── Modal state ───────────────────────────────────────────
  const [activeItem,       setActiveItem]       = useState<GalleryItem | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  // ── Derived helpers ───────────────────────────────────────
  const imageCount  = activeItem?.images.length ?? 0
  const hasMultiple = imageCount > 1
  const isFirst     = activeImageIndex === 0
  const isLast      = activeImageIndex === imageCount - 1

  // ── Open modal ────────────────────────────────────────────
  const openModal = useCallback((item: GalleryItem) => {
    setActiveItem(item)
    setActiveImageIndex(0)
  }, [])

  // ── Close modal ───────────────────────────────────────────
  const closeModal = useCallback(() => {
    setActiveItem(null)
    setActiveImageIndex(0)
  }, [])

  // ── Image navigation ──────────────────────────────────────
  const goToPrev = useCallback(() => {
    setActiveImageIndex((i) => Math.max(0, i - 1))
  }, [])

  const goToNext = useCallback(() => {
    setActiveImageIndex((i) => Math.min(imageCount - 1, i + 1))
  }, [imageCount])

  // ── Body scroll lock ──────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = activeItem ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeItem])

  // ── Keyboard handler ──────────────────────────────────────
  useEffect(() => {
    if (!activeItem) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      closeModal()
      if (e.key === 'ArrowLeft')   goToPrev()
      if (e.key === 'ArrowRight')  goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeItem, closeModal, goToPrev, goToNext])


  // ── Render ────────────────────────────────────────────────
  return (
    <div className={styles['more-work-root']} aria-label="More Works">

      {/* ── Section header row ───────────────────────────── */}
      <div className={styles['more-work-header']}>
        <p className={styles['more-work-header-index']}>
          {gallery.meta.index}
        </p>
        <div className={styles['more-work-header-content']}>
          <h1 className={styles['more-work-header-heading']}>
            {gallery.meta.heading}
          </h1>
          <p className={styles['more-work-header-subheading']}>
            {gallery.meta.subheading}
          </p>
        </div>
      </div>

      {/* ── Divider below header ─────────────────────────── */}
      <hr className={styles['more-work-divider']} aria-hidden="true" />

      {/* ── Gallery grid ─────────────────────────────────── */}
      <div className={styles['more-work-grid']} role="list">
        {gallery.items.map((item) => (
          <button
            key={item.id}
            className={[
              styles['more-work-card'],
              item.radiusVariant === 'large' ? styles['more-work-card-large'] : '',
            ].join(' ').trim()}
            style={item.backgroundColor ? { backgroundColor: item.backgroundColor } : undefined}
            onClick={() => openModal(item)}
            aria-label={`View preview: ${item.title}`}
            role="listitem"
            type="button"
          >
            {/* Image container — aspect ratio clipped — shows first image */}
            <div className={styles['more-work-card-image-wrap']}>
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className={styles['more-work-card-image']}
              />
              {/* Multi-image badge */}
              {item.images.length > 1 && (
                <span className={styles['more-work-card-badge']} aria-hidden="true">
                  {item.images.length}
                </span>
              )}
            </div>

            {/* Card title */}
            <p className={styles['more-work-card-title']}>{item.title}</p>
          </button>
        ))}
      </div>

      {/* ── Modal ────────────────────────────────────────── */}
      {activeItem && (
        <div
          className={styles['more-work-modal-overlay']}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${activeItem.title}`}
          onClick={closeModal}
        >
          <div
            className={styles['more-work-modal-panel']}
            onClick={(e) => e.stopPropagation()}
          >

            {/* ── Modal top bar: caption + close ─────────── */}
            <div className={styles['more-work-modal-top-bar']}>
              <p className={styles['more-work-modal-caption']}>
                {activeItem.title}
              </p>
              <IconButton
                icon={<X size={20} />}
                variant="light"
                onClick={closeModal}
                aria-label="Close preview"
              />
            </div>

            {/* ── Image ──────────────────────────────────── */}
            <div className={styles['more-work-modal-image-wrap']}>
              <Image
                key={activeImageIndex}         /* force re-render on index change */
                src={activeItem.images[activeImageIndex]}
                alt={`${activeItem.title} — image ${activeImageIndex + 1} of ${imageCount}`}
                fill
                sizes="100vw"
                className={styles['more-work-modal-image']}
                priority
              />
            </div>

            {/* ── Modal bottom bar: prev · counter · next ── */}
            {hasMultiple && (
              <div className={styles['more-work-modal-nav']}>
                <IconButton
                  icon={<ArrowLeft size={20} />}
                  variant="light"
                  onClick={goToPrev}
                  disabled={isFirst}
                  aria-label="Previous image"
                />

                <p className={styles['more-work-modal-counter']} aria-live="polite">
                  {activeImageIndex + 1} / {imageCount}
                </p>

                <IconButton
                  icon={<ArrowRight size={20} />}
                  variant="light"
                  onClick={goToNext}
                  disabled={isLast}
                  aria-label="Next image"
                />
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  )
}
