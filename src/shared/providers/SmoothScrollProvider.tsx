/*
 * SmoothScrollProvider.tsx
 *
 * Global smooth scroll context.
 *
 * Wraps the app with a SmoothScroller instance (Lenis-equivalent)
 * and exposes it via React context.
 *
 * Resets scroll position on route changes to prevent stale
 * targetY from causing infinite navigation loops.
 */

'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'

import SmoothScroller from '@/shared/lib/SmoothScroller'


/* ============================================================
   CONTEXT
   ============================================================ */

const SmoothScrollContext = createContext<SmoothScroller | null>(null)

export function useSmoothScroll(): SmoothScroller | null {
  return useContext(SmoothScrollContext)
}


/* ============================================================
   PROVIDER
   ============================================================ */

interface SmoothScrollProviderProps {
  children: ReactNode
  /** Scroll duration in seconds. Higher = smoother. Default 1.2 (Lenis default). */
  duration?: number
}

export default function SmoothScrollProvider({
  children,
  duration = 1.2,
}: SmoothScrollProviderProps) {
  const [scroller, setScroller] = useState<SmoothScroller | null>(null)
  const scrollerRef = useRef<SmoothScroller | null>(null)
  const pathname = usePathname()

  /* ── Create scroller instance ──────────────────────── */
  useEffect(() => {
    const instance = new SmoothScroller({
      duration,
      smoothWheel: true,
      wheelMultiplier: 1,
    })
    scrollerRef.current = instance
    setScroller(instance)

    return () => {
      instance.destroy()
      scrollerRef.current = null
    }
  }, [duration])

  /* ── Reset on route change ───────────────────────────
   *
   * When Next.js navigates to a new page, the document height changes
   * but the scroller's targetY/currentY may still point to the bottom
   * of the previous page. Reset to 0 to prevent scroll-to-bottom
   * on mount which would trigger the next-case-study loop.
   */
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo(0, true)
    }
  }, [pathname])

  return (
    <SmoothScrollContext.Provider value={scroller}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
