/*
 * NextCaseStudyHero/index.tsx
 *
 * Next Case Study preview — renders as a normal section at the end
 * of a case study page, showing the next project's hero.
 *
 * Navigation behavior:
 *   - Normal layout (no fixed positioning, no runway spacer).
 *   - When the user has scrolled to the bottom of the page AND
 *     continues scrolling downward after a brief pause (~300ms),
 *     navigation to the next case study is triggered.
 *   - This creates the "same page scrolling with a small interval"
 *     feel — the second scroll at the bottom continues to the next page.
 *
 * Client Component.
 */

'use client'

import { useRef, useEffect, useCallback } from 'react'
import { useRouter }      from 'next/navigation'
import Link               from 'next/link'
import CaseStudyHero      from '@/components/sections/CaseStudyHero'
import type { CaseStudyHeroData } from '@/types'
import styles             from './NextCaseStudyHero.module.css'


/* ============================================================
   CONSTANTS
   ============================================================ */

/** How close to page bottom (px) to consider "at bottom". */
const AT_BOTTOM_PX = 4

/** Time with no wheel events to consider a scroll gesture "ended". */
const GESTURE_IDLE_MS = 180

/** Initial cooldown on mount — prevents immediate trigger on new pages. */
const MOUNT_COOLDOWN_MS = 1500

/** Touch swipe distance to trigger on mobile. */
const TOUCH_THRESHOLD = 60


/* ============================================================
   PROPS
   ============================================================ */

interface NextCaseStudyHeroProps {
  hero: CaseStudyHeroData
  href: string
  label?: string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function NextCaseStudyHero({
  hero,
  href,
  label = 'Next case study',
}: NextCaseStudyHeroProps) {
  const router = useRouter()

  const navigatingRef  = useRef(false)
  const readyRef       = useRef(false)
  const touchStartYRef = useRef(0)


  /* ── Helpers ─────────────────────────────────────── */
  const isAtBottom = useCallback(() => {
    const scrollTop    = window.scrollY || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    return scrollHeight - scrollTop - clientHeight < AT_BOTTOM_PX
  }, [])


  /* ── Navigate ────────────────────────────────────── */
  const navigate = useCallback(() => {
    if (navigatingRef.current) return
    if (!readyRef.current) return
    navigatingRef.current = true
    window.scrollTo(0, 0)
    router.push(href)
  }, [router, href])


  /* ── Mount cooldown — block triggers on fresh mount ── */
  useEffect(() => {
    readyRef.current = false
    const timer = setTimeout(() => {
      readyRef.current = true
    }, MOUNT_COOLDOWN_MS)
    return () => clearTimeout(timer)
  }, [])


  /* ── Wheel-based trigger ─────────────────────────────
   *
   * Gesture-based detection:
   *   1. User scrolls down and hits the bottom   → "armed"
   *   2. User's wheel events go idle for 180ms   → gesture ended
   *   3. User scrolls down again at bottom       → navigate
   *
   * This gives the "same page with a small interval" feel —
   * the second distinct scroll gesture continues to the next page.
   * ──────────────────────────────────────────────── */
  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout> | null = null
    let armed       = false   // reached bottom within this gesture
    let gestureEnded = false  // wheel has been idle since arming

    const onWheel = (e: WheelEvent) => {
      if (navigatingRef.current) return
      if (!readyRef.current) return

      // Upward or not at bottom → reset everything
      if (e.deltaY <= 0 || !isAtBottom()) {
        armed = false
        gestureEnded = false
        if (idleTimer) { clearTimeout(idleTimer); idleTimer = null }
        return
      }

      // At bottom + scrolling down
      if (!armed) {
        // First gesture that reaches the bottom
        armed = true
        gestureEnded = false
      } else if (gestureEnded) {
        // A fresh, distinct gesture after an idle pause → go
        navigate()
        return
      }

      // Any ongoing wheel input keeps the gesture "alive"
      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        gestureEnded = true
      }, GESTURE_IDLE_MS)
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      if (idleTimer) clearTimeout(idleTimer)
    }
  }, [isAtBottom, navigate])


  /* ── Keyboard trigger ───────────────────────────── */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (navigatingRef.current) return
      if (!readyRef.current) return
      if (!isAtBottom()) return

      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (['ArrowDown', ' ', 'PageDown'].includes(e.key)) {
        navigate()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isAtBottom, navigate])


  /* ── Touch trigger ───────────────────────────────── */
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (navigatingRef.current) return
      if (!readyRef.current) return
      if (!isAtBottom()) return
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY
      if (deltaY > TOUCH_THRESHOLD) navigate()
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend',   onTouchEnd,   { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend',   onTouchEnd)
    }
  }, [isAtBottom, navigate])


  /* ── Reset on back-navigation ───────────────────── */
  useEffect(() => {
    const onPopState = () => {
      navigatingRef.current = false
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])


  /* ── Render ───────────────────────────────────────
   *
   * Normal section — not fixed, not runway.
   * Just the next project's hero as a clickable preview.
   * Sits at the end of the page like any other section.
   * ──────────────────────────────────────────────── */
  return (
    <section className={styles['next-section']}>
      <p className={styles['next-label']}>{label}</p>

      <Link href={href} className={styles['next-hero-link']}>
        <CaseStudyHero hero={hero} />
      </Link>
    </section>
  )
}
