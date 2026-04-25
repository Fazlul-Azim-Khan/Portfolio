/*
 * NavBar/index.tsx
 * Confirmed from Figma node 966:7519
 *
 * Structure — Desktop (left → right):
 *   Logo  |  Language switcher  |  (spacer)  |  CTA buttons
 *
 * Structure — Mobile:
 *   Logo  |  Language switcher  |  Hamburger icon
 *   Drawer slides open with: Download CV, LinkedIn, Contact me
 *
 * Bottom 1px divider separates nav from page content.
 *
 * Content source: src/content/nav.ts — do not hardcode strings here.
 * Button primitive: src/components/ui/Button — do not duplicate button styles.
 *
 * 'use client' is required for hamburger toggle state (useState).
 */

'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/shared/theme/ThemeToggle'
import { navBrand, navCTAs } from '@/content/nav'
import styles from './NavBar.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  // Derive locale and locale-swap hrefs from the current pathname
  const { isDE, enHref, deHref } = useMemo(() => {
    const de = pathname.startsWith('/de')
    // Strip /de prefix to get the English equivalent path
    const stripped = de ? (pathname.replace(/^\/de/, '') || '/') : pathname
    return {
      isDE:   de,
      enHref: stripped,
      deHref: de ? pathname : `/de${pathname === '/' ? '' : pathname}`,
    }
  }, [pathname])

  // Split CTAs by variant for layout grouping:
  //   secondary  = outlined buttons (CV, LinkedIn) — sub-grouped on desktop, drawer on mobile
  //   primary    = primary-brand button (Contact me) — visible in top bar on every size
  const secondaryCTAs = navCTAs.filter((cta) => cta.variant === 'outlined')
  const primaryCTA    = navCTAs.find((cta) => cta.variant === 'primary-brand')

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev)
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  return (
    <header className={styles['nav-bar']} role="banner">

      {/* ── Contents row ────────────────────────────────────── */}
      <div className={styles['nav-contents']}>

        {/* ── Left group: Logo ─────────────────────────────── */}
        <div className={styles['nav-left-group']}>
          {/* Logo — locale-aware: stays on /de when in German */}
          <Link
            href={isDE ? '/de' : '/'}
            className={styles['nav-logo']}
            aria-label="Fazlul Azim Khan — home"
          >
            {navBrand.label}
          </Link>
        </div>

        {/* ── Right group: [Lang + Theme] | [CV + LinkedIn] | Contact me ─ */}
        <div className={styles['nav-right-group']} aria-label="Actions">

          {/* Lang + Theme sub-group */}
          <div className={styles['nav-lang-theme-group']}>

            {/* Language switcher — visible on all sizes */}
            <nav
              className={styles['nav-lang-switcher']}
              aria-label="Language selection"
            >
              <Link
                href={enHref}
                className={[
                  styles['nav-lang-item'],
                  !isDE ? styles['nav-lang-active'] : styles['nav-lang-inactive'],
                ].join(' ')}
                aria-current={!isDE ? 'true' : undefined}
                aria-label="Switch to English"
              >
                EN
              </Link>
              <Link
                href={deHref}
                className={[
                  styles['nav-lang-item'],
                  isDE ? styles['nav-lang-active'] : styles['nav-lang-inactive'],
                ].join(' ')}
                aria-current={isDE ? 'true' : undefined}
                aria-label="Zu Deutsch wechseln"
              >
                DE
              </Link>
            </nav>

            {/* Theme toggle — desktop only (in drawer on mobile) */}
            <div className={styles['nav-theme-desktop']}>
              <ThemeToggle />
            </div>

          </div>

          {/* Secondary CTAs (CV + LinkedIn) — desktop only */}
          {secondaryCTAs.length > 0 && (
            <div className={styles['nav-secondary-ctas']}>
              {secondaryCTAs.map((cta) => (
                <Button
                  key={cta.label}
                  label={cta.label}
                  variant={cta.variant}
                  href={cta.href}
                  target={cta.href.startsWith('http') ? '_blank' : undefined}
                  download={cta.download}
                />
              ))}
            </div>
          )}

          {/* Primary CTA (Contact me) — visible on all sizes */}
          {primaryCTA && (
            <Button
              label={primaryCTA.label}
              variant={primaryCTA.variant}
              href={primaryCTA.href}
              target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
              download={primaryCTA.download}
            />
          )}

        </div>

        {/* Hamburger button — visible on mobile only */}
        <button
          type="button"
          className={styles['nav-hamburger']}
          onClick={toggleDrawer}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={[styles['nav-hamburger-line'], drawerOpen ? styles['nav-hamburger-open'] : ''].join(' ')} />
          <span className={[styles['nav-hamburger-line'], drawerOpen ? styles['nav-hamburger-open'] : ''].join(' ')} />
          <span className={[styles['nav-hamburger-line'], drawerOpen ? styles['nav-hamburger-open'] : ''].join(' ')} />
        </button>

      </div>
      {/* ── End contents row ────────────────────────────────── */}

      {/* Bottom divider */}
      <div className={styles['nav-border']} role="presentation" aria-hidden="true" />

      {/* ── Mobile drawer ──────────────────────────────────── */}
      {/* Holds the items hidden from the mobile top bar:
          theme toggle + secondary CTAs (CV + LinkedIn).
          Lang switcher and Contact me stay visible in the top bar. */}
      <nav
        id="mobile-nav-drawer"
        className={[styles['nav-drawer'], drawerOpen ? styles['nav-drawer-open'] : ''].join(' ')}
        aria-label="Mobile navigation"
      >
        <div className={styles['nav-drawer-content']}>
          <div className={styles['nav-drawer-toggle-row']}>
            <ThemeToggle />
          </div>
          {secondaryCTAs.map((cta) => (
            <Button
              key={cta.label}
              label={cta.label}
              variant={cta.variant}
              href={cta.href}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              download={cta.download}
              className={styles['nav-drawer-button']}
              onClick={closeDrawer}
            />
          ))}
        </div>
      </nav>

    </header>
  )
}
