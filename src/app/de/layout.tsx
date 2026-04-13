/*
 * app/de/layout.tsx
 *
 * Shared wrapper for all German-language routes (/de/*).
 * Minimal pass-through — global styles, fonts, and <html lang> are
 * set in the root layout (src/app/layout.tsx).
 *
 * Note: To set lang="de" per-route in a static export, a full
 * [locale] route-segment restructure is required. This layout
 * handles routing and locale detection; lang="de" can be added
 * when the [locale] migration is done.
 */

export default function DeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
