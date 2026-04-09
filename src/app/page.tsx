/*
 * app/page.tsx — Landing page entry point
 *
 * Thin route wrapper. All composition logic lives in:
 *   src/features/landing/LandingPage.tsx
 *
 * To switch back to the legacy page during development,
 * swap the import below to the legacy composition:
 *   import LandingPage from '@/components/legacy/...'
 */

export { default } from '@/features/landing/LandingPage'
