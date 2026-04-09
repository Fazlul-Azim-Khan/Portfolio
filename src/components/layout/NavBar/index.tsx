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

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { navBrand, navLanguages, navCTAs } from '@/content/nav'
import styles from './NavBar.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev)
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  return (
    <header className={styles.navbar} role="banner">

      {/* ── Contents row ────────────────────────────────────── */}
      <div className={styles.contents}>

        {/* ── Left group: Logo + Language switcher ───────── */}
        <div className={styles.leftGroup}>

          {/* Logo */}
          <Link
            href={navBrand.href}
            className={styles.logo}
            aria-label="Fazlul Azim Khan — home"
          >
            {navBrand.label}
          </Link>

          {/* Language switcher */}
          <nav
            className={styles.langSwitcher}
            aria-label="Language selection"
          >
            {navLanguages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={[
                  styles.langItem,
                  lang.active ? styles.langActive : styles.langInactive,
                ].join(' ')}
                aria-current={lang.active ? 'true' : undefined}
                aria-label={`Switch to ${lang.label}`}
              >
                {lang.label}
              </button>
            ))}
          </nav>

        </div>

        {/* CTA buttons — visible on desktop, hidden on mobile */}
        <div className={styles.ctaGroup} aria-label="Actions">
          {navCTAs.map((cta) => (
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

        {/* Hamburger button — visible on mobile only */}
        <button
          type="button"
          className={styles.hamburger}
          onClick={toggleDrawer}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={[styles.hamburgerLine, drawerOpen ? styles.hamburgerOpen : ''].join(' ')} />
          <span className={[styles.hamburgerLine, drawerOpen ? styles.hamburgerOpen : ''].join(' ')} />
          <span className={[styles.hamburgerLine, drawerOpen ? styles.hamburgerOpen : ''].join(' ')} />
        </button>

      </div>
      {/* ── End contents row ────────────────────────────────── */}

      {/* Bottom divider */}
      <div className={styles.border} role="presentation" aria-hidden="true" />

      {/* ── Mobile drawer ──────────────────────────────────── */}
      <nav
        id="mobile-nav-drawer"
        className={[styles.drawer, drawerOpen ? styles.drawerOpen : ''].join(' ')}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerContent}>
          {navCTAs.map((cta) => (
            <Button
              key={cta.label}
              label={cta.label}
              variant={cta.variant}
              href={cta.href}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              download={cta.download}
              className={styles.drawerButton}
              onClick={closeDrawer}
            />
          ))}
        </div>
      </nav>

    </header>
  )
}
