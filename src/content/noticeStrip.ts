/*
 * content/noticeStrip.ts
 * Notice strip below navigation — confirmed from Figma node 1021:6892
 *
 * The strip displays a single line of text in Integral CF, 20px.
 * Background: --color-notice-bg (#050505)
 *
 * ⚠️  Behavior TBD: static display or scrolling marquee?
 *     Currently modelled as a static string.
 *     If marquee is confirmed, split into an array of items instead.
 *
 * Note: "Availibility" matches the Figma source spelling exactly.
 * Correct to "Availability" here once confirmed with Faz.
 */

export const noticeStrip = {
  // Verbatim from Figma node 1021:6894 — do not alter spacing or punctuation
  text: 'BERLIN  ·  CHANCENKARTE  ·  No Sponsorship Needed  ·  Full time Work Availibility',
} as const
