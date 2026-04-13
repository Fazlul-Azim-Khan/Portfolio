/*
 * app/de/page.tsx — German landing page entry point
 *
 * Thin route wrapper — mirrors app/page.tsx.
 * Renders the same LandingPage component; German content will
 * be wired once Faz provides translations (content.de.ts files).
 *
 * NavBar locale detection handles the EN ↔ DE link state
 * via usePathname() — no changes needed here.
 */

export { default } from '@/features/landing/LandingPage'
