/*
 * SmoothScroller.ts
 *
 * Lenis-style smooth scroll engine.
 *
 * Key differences from a naive lerp approach:
 *   - Uses duration-based exponential decay (like Lenis)
 *     rather than a fixed lerp factor.
 *   - Properly normalizes wheel deltaMode (pixel/line/page).
 *   - Uses performance.now() for frame-rate-independent timing.
 *   - Provides velocity and progress for downstream consumers.
 *   - Touch devices get native scroll (no interception).
 *
 * The algorithm:
 *   Each frame, advance toward targetY using:
 *     lerp = 1 - Math.exp(-speed * dt / duration)
 *   where dt is the delta time in seconds.
 *   This produces natural deceleration that feels identical
 *   to Lenis with matching duration/speed values.
 */


/* ============================================================
   TYPES
   ============================================================ */

export interface SmoothScrollerOptions {
  /** Scroll duration in seconds. Higher = smoother/slower. Default 1.2 (Lenis default). */
  duration?: number
  /** Wheel delta multiplier. Default 1. */
  wheelMultiplier?: number
  /** Enable smooth scrolling for wheel events. Default true. */
  smoothWheel?: boolean
}

export type ScrollCallback = (data: {
  scroll: number
  targetScroll: number
  velocity: number
  progress: number
  limit: number
  direction: 1 | -1 | 0
}) => void


/* ============================================================
   CONSTANTS
   ============================================================ */

/** Normalize line-mode wheel delta (Firefox) to ~pixels. */
const LINE_HEIGHT = 40
/** Normalize page-mode wheel delta to ~pixels. */
const PAGE_HEIGHT_FRACTION = 0.8


/* ============================================================
   CLASS
   ============================================================ */

export default class SmoothScroller {

  /* ── Config ──────────────────────────────────────── */
  private duration: number
  private wheelMultiplier: number
  private smoothWheel: boolean

  /* ── State ───────────────────────────────────────── */
  private targetY      = 0
  private currentY     = 0
  private velocity     = 0
  private direction: 1 | -1 | 0 = 0
  private animating    = false
  private destroyed    = false
  private lastTime     = 0

  /* ── Listeners ───────────────────────────────────── */
  private callbacks: ScrollCallback[] = []

  /* ── Touch detection ─────────────────────────────── */
  private isTouchDevice = false


  constructor(options: SmoothScrollerOptions = {}) {
    this.duration         = options.duration ?? 1.2
    this.wheelMultiplier  = options.wheelMultiplier ?? 1
    this.smoothWheel      = options.smoothWheel ?? true

    this.isTouchDevice = this.detectTouch()

    // Initialize from current scroll position
    this.targetY  = window.scrollY
    this.currentY = window.scrollY
    this.lastTime = performance.now()

    this.bindEvents()
    this.startLoop()
  }


  /* ── Public API ──────────────────────────────────── */

  on(callback: ScrollCallback): () => void {
    this.callbacks.push(callback)
    return () => {
      this.callbacks = this.callbacks.filter(cb => cb !== callback)
    }
  }

  scrollTo(target: number, immediate = false) {
    this.targetY = this.clamp(target)
    if (immediate) {
      this.currentY = this.targetY
      window.scrollTo(0, this.currentY)
    }
  }

  get scroll() { return this.currentY }
  get target() { return this.targetY }

  get limit() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  }

  destroy() {
    this.destroyed = true
    this.animating = false
    this.unbindEvents()
    this.callbacks = []
  }


  /* ── Wheel handling ──────────────────────────────── */

  private onWheel = (e: WheelEvent) => {
    if (this.isTouchDevice) return
    if (!this.smoothWheel) return

    e.preventDefault()

    // Normalize delta across browsers and deltaMode
    let delta = e.deltaY

    switch (e.deltaMode) {
      case 1: // DOM_DELTA_LINE (Firefox default)
        delta *= LINE_HEIGHT
        break
      case 2: // DOM_DELTA_PAGE
        delta *= window.innerHeight * PAGE_HEIGHT_FRACTION
        break
      // case 0: DOM_DELTA_PIXEL — no conversion needed
    }

    delta *= this.wheelMultiplier

    this.targetY = this.clamp(this.targetY + delta)
    this.direction = delta > 0 ? 1 : delta < 0 ? -1 : 0
  }


  /* ── Keyboard handling ───────────────────────────── */

  private onKeyDown = (e: KeyboardEvent) => {
    if (this.isTouchDevice) return

    const tag = (e.target as HTMLElement)?.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

    let delta = 0

    switch (e.key) {
      case 'ArrowDown':  delta = 120; break
      case 'ArrowUp':    delta = -120; break
      case 'PageDown':   delta = window.innerHeight * 0.8; break
      case 'PageUp':     delta = -window.innerHeight * 0.8; break
      case 'Home':       this.targetY = 0; return
      case 'End':        this.targetY = this.limit; return
      case ' ':
        delta = e.shiftKey
          ? -window.innerHeight * 0.8
          :  window.innerHeight * 0.8
        e.preventDefault()
        break
      default: return
    }

    this.targetY = this.clamp(this.targetY + delta)
    this.direction = delta > 0 ? 1 : -1
  }


  /* ── Native scroll sync (touch devices) ──────────── */

  private onNativeScroll = () => {
    if (!this.isTouchDevice) return
    const y = window.scrollY
    this.direction = y > this.currentY ? 1 : y < this.currentY ? -1 : 0
    this.targetY  = y
    this.currentY = y
    this.emit()
  }


  /* ── Resize — recalculate limit ──────────────────── */

  private onResize = () => {
    this.targetY = this.clamp(this.targetY)
  }


  /* ── Event binding ───────────────────────────────── */

  private bindEvents() {
    window.addEventListener('wheel', this.onWheel, { passive: false })
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('scroll', this.onNativeScroll, { passive: true })
    window.addEventListener('resize', this.onResize, { passive: true })
  }

  private unbindEvents() {
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('scroll', this.onNativeScroll)
    window.removeEventListener('resize', this.onResize)
  }


  /* ── Animation loop ──────────────────────────────── */

  private startLoop() {
    if (this.animating) return
    this.animating = true
    this.lastTime = performance.now()
    requestAnimationFrame(this.tick)
  }

  private tick = (now: number) => {
    if (this.destroyed) return

    const dt = Math.min((now - this.lastTime) / 1000, 0.1) // cap at 100ms (10fps floor)
    this.lastTime = now

    const prevY = this.currentY

    /*
     * Exponential decay — the Lenis formula.
     * speed=4 with duration=1.2 gives a feel very close to Lenis defaults.
     * The key insight: lerp is frame-rate-independent because
     * it's computed from dt (delta time).
     */
    const speed = 4
    const lerp  = 1 - Math.exp(-speed * dt / this.duration)

    this.currentY += (this.targetY - this.currentY) * lerp

    // Snap when close enough
    if (Math.abs(this.targetY - this.currentY) < 0.5) {
      this.currentY = this.targetY
    }

    this.velocity = (this.currentY - prevY) / dt

    // Only scrollTo when there's meaningful movement
    if (Math.round(this.currentY) !== Math.round(prevY)) {
      window.scrollTo(0, this.currentY)
    }

    this.emit()

    requestAnimationFrame(this.tick)
  }


  /* ── Helpers ─────────────────────────────────────── */

  private clamp(value: number): number {
    return Math.max(0, Math.min(value, this.limit))
  }

  private detectTouch(): boolean {
    if (typeof window === 'undefined') return false
    return (
      'ontouchstart' in window &&
      navigator.maxTouchPoints > 0 &&
      !/Windows/.test(navigator.userAgent) // Windows touch laptops should still get smooth scroll
    )
  }

  private emit() {
    const limit = this.limit
    const data = {
      scroll:       this.currentY,
      targetScroll: this.targetY,
      velocity:     this.velocity,
      progress:     limit > 0 ? this.currentY / limit : 0,
      limit,
      direction:    this.direction,
    }
    for (const cb of this.callbacks) {
      cb(data)
    }
  }
}
