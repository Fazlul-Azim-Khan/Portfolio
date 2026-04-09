/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Static export for Firebase Hosting ────────────────────────────
  // `output: 'export'` makes `next build` generate a static `out/` folder
  // of pre-rendered HTML/CSS/JS. Required for Firebase Hosting (classic),
  // which serves static files only — no server runtime.
  //
  // Requirements this enables elsewhere in the app:
  //   - Dynamic routes (e.g. src/app/work/[slug]) must export
  //     `generateStaticParams()` so every URL is known at build time.
  //     Already present in src/app/work/[slug]/page.tsx ✓
  //   - No API routes (src/app/api/*) — none exist ✓
  //   - No server-only features at request time (cookies, headers,
  //     dynamic data fetching) — none used ✓
  output: 'export',

  // ── Image optimization off ─────────────────────────────────────────
  // Next.js's built-in image optimizer runs as a server endpoint that
  // doesn't exist in static mode. Turning it off makes <Image> components
  // serve raw files from /public as-is. Portfolio assets are already
  // sized reasonably in Figma, so visual impact is negligible.
  images: {
    unoptimized: true,
  },

  // This file is the safe place to add image domains,
  // redirects, headers, or env variables later.
}

export default nextConfig
