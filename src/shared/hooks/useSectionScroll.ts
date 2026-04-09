'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

// ─── Constants ───────────────────────────────────────────────────────────────

/** ms to block further input while smooth-scroll animation is in flight */
const DEBOUNCE_MS = 800

/** px — tolerance when checking if scroll position is at a section boundary */
const BOUNDARY_THRESHOLD = 4

// ─── Pure DOM helpers (no state deps — defined outside component) ─────────────

/**
 * True if the section's natural height exceeds the viewport.
 * These sections allow free-scroll within; only the top/bottom
 * boundaries trigger navigation to the adjacent section.
 */
function isTall(el: HTMLElement): boolean {
  return el.offsetHeight > window.innerHeight + BOUNDARY_THRESHOLD
}

/**
 * True when the section's bottom edge is at or within the viewport.
 * Signals that the next downward scroll should move to the next section.
 */
function isAtSectionBottom(el: HTMLElement): boolean {
  const { bottom } = el.getBoundingClientRect()
  return bottom <= window.innerHeight + BOUNDARY_THRESHOLD
}

/**
 * True when the section's top edge is at or above the viewport top.
 * Signals that the next upward scroll should move to the previous section.
 */
function isAtSectionTop(el: HTMLElement): boolean {
  const { top } = el.getBoundingClientRect()
  return top >= -BOUNDARY_THRESHOLD
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SectionScrollOptions {
  /**
   * Ordered refs to each section element, matching the visual order on the page.
   * Memoize this array in the caller (useMemo / stable reference) to prevent
   * unnecessary effect re-runs.
   */
  sections: React.RefObject<HTMLElement>[]

  /**
   * Index of the terminal section (e.g. NextCaseStudy).
   * Enables the two-scroll behavior:
   *   1st scroll-down → reveal animation
   *   2nd scroll-down → navigate to next case study
   */
  terminalSectionIndex?: number

  /** Called on the 1st scroll-down reaching the terminal section */
  onTerminalReveal?: () => void

  /** Called on the 2nd scroll-down while terminal section is active */
  onTerminalNavigate?: () => void
}

export interface SectionScrollResult {
  /** Zero-based index of the currently active section */
  activeSectionIndex: number

  /**
   * Whether the terminal section has been revealed (first scroll reached it).
   * Pass this to the NextCaseStudy component to trigger its CSS reveal transition.
   */
  terminalRevealed: boolean
}

// ─── Hook ────────────────────────────────────────────────────────────────────

/**
 * useSectionScroll
 *
 * Lightweight, dependency-free step-based scroll manager.
 *
 * Short sections (fit within viewport):
 *   One scroll event → immediate snap to next/previous section.
 *
 * Tall sections (taller than viewport):
 *   Scroll freely within the section.
 *   At the top boundary + scroll-up  → snap to previous section.
 *   At the bottom boundary + scroll-down → snap to next section.
 *
 * Terminal section (NextCaseStudy):
 *   1st scroll-down → fires onTerminalReveal (reveal animation).
 *   2nd scroll-down → fires onTerminalNavigate (router.push to next case study).
 *   Scroll-up       → returns to previous section, resets reveal state.
 *
 * Input sources handled: wheel, keyboard (↑↓ Space PageUp PageDown), touch.
 */
export function useSectionScroll({
  sections,
  terminalSectionIndex,
  onTerminalReveal,
  onTerminalNavigate,
}: SectionScrollOptions): SectionScrollResult {

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [terminalRevealed,   setTerminalRevealed]   = useState(false)

  // Refs mirror state so event handlers always read the latest value
  // without being recreated on every render.
  const isAnimating         = useRef(false)
  const activeIdxRef        = useRef(0)
  const terminalRevealedRef = useRef(false)
  const touchStartY         = useRef(0)

  // Sync refs with state
  useEffect(() => { activeIdxRef.current       = activeSectionIndex }, [activeSectionIndex])
  useEffect(() => { terminalRevealedRef.current = terminalRevealed  }, [terminalRevealed])

  // ── Navigation primitives ──────────────────────────────────────────────────

  const scrollToSection = useCallback((index: number) => {
    const el = sections[index]?.current
    if (!el || isAnimating.current) return

    isAnimating.current  = true
    activeIdxRef.current = index
    setActiveSectionIndex(index)

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Unblock input after animation completes
    setTimeout(() => { isAnimating.current = false }, DEBOUNCE_MS)
  }, [sections])

  const goToNext = useCallback(() => {
    const next = activeIdxRef.current + 1
    if (next < sections.length) scrollToSection(next)
  }, [sections.length, scrollToSection])

  const goToPrev = useCallback(() => {
    const prev = activeIdxRef.current - 1
    if (prev >= 0) scrollToSection(prev)
  }, [scrollToSection])

  // ── Core direction handler ─────────────────────────────────────────────────

  const handleDirection = useCallback((dir: 'down' | 'up') => {
    if (isAnimating.current) return

    const idx = activeIdxRef.current
    const el  = sections[idx]?.current
    if (!el) return

    // ── Terminal section (e.g. NextCaseStudy) ─────────────────────────────
    if (terminalSectionIndex !== undefined && idx === terminalSectionIndex) {
      if (dir === 'down') {
        if (!terminalRevealedRef.current) {
          // First scroll: reveal
          terminalRevealedRef.current = true
          setTerminalRevealed(true)
          onTerminalReveal?.()
        } else {
          // Second scroll: navigate
          onTerminalNavigate?.()
        }
        return
      }
      if (dir === 'up') {
        // Scroll up from terminal: go back and reset reveal state
        terminalRevealedRef.current = false
        setTerminalRevealed(false)
        goToPrev()
        return
      }
    }

    // ── Tall section ──────────────────────────────────────────────────────
    if (isTall(el)) {
      // Only intercept at boundaries; mid-section scrolls freely
      if (dir === 'down' && isAtSectionBottom(el)) goToNext()
      else if (dir === 'up' && isAtSectionTop(el)) goToPrev()
      // else: natural browser scroll — do nothing
      return
    }

    // ── Short section ─────────────────────────────────────────────────────
    if (dir === 'down') goToNext()
    else                goToPrev()

  }, [sections, terminalSectionIndex, onTerminalReveal, onTerminalNavigate, goToNext, goToPrev])

  // ── Event listeners ───────────────────────────────────────────────────────

  useEffect(() => {

    // ── Wheel ──────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      const idx = activeIdxRef.current
      const el  = sections[idx]?.current
      if (!el) return

      const dir = e.deltaY > 0 ? 'down' : 'up'

      if (!isTall(el)) {
        // Short section: always intercept and snap
        e.preventDefault()
        handleDirection(dir)
        return
      }

      // Tall section: only intercept at boundaries
      const atBoundary =
        (dir === 'down' && isAtSectionBottom(el)) ||
        (dir === 'up'   && isAtSectionTop(el))

      if (atBoundary) {
        e.preventDefault()
        handleDirection(dir)
      }
      // else: browser handles natural in-section scroll
    }

    // ── Keyboard ───────────────────────────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      // Never intercept when focus is inside a form element
      const tag = (e.target as HTMLElement).tagName
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return

      const isDown = ['ArrowDown', 'PageDown', ' '].includes(e.key)
      const isUp   = ['ArrowUp',   'PageUp'        ].includes(e.key)
      if (!isDown && !isUp) return

      const idx = activeIdxRef.current
      const el  = sections[idx]?.current
      if (!el) return

      // For tall sections: only intercept at boundaries
      if (isTall(el)) {
        if (isDown && !isAtSectionBottom(el)) return
        if (isUp   && !isAtSectionTop(el))   return
      }

      e.preventDefault()
      handleDirection(isDown ? 'down' : 'up')
    }

    // ── Touch ──────────────────────────────────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(dy) < 10) return  // ignore taps

      const dir = dy > 0 ? 'down' : 'up'
      const idx = activeIdxRef.current
      const el  = sections[idx]?.current
      if (!el) return

      if (isTall(el)) {
        const atBoundary =
          (dir === 'down' && isAtSectionBottom(el)) ||
          (dir === 'up'   && isAtSectionTop(el))
        if (atBoundary) handleDirection(dir)
      } else {
        handleDirection(dir)
      }
    }

    // passive: false required so we can call preventDefault() in onWheel
    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('keydown',    onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend',   onTouchEnd,   { passive: true })

    return () => {
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('keydown',    onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend',   onTouchEnd)
    }
  }, [sections, handleDirection])

  return { activeSectionIndex, terminalRevealed }
}
