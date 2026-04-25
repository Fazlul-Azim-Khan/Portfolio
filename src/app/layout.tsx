import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Providers from './Providers'
import '@/styles/global.css'

/*
 * Outfit — primary typeface for all text
 * Single weight system: 400 (Regular) for everything
 */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fazlul Azim Khan — Product Designer & UX Strategist',
  description:
    'I design AI-powered enterprise products for expert-user domains — manufacturing reliability, clinical decision support, metabolic health intelligence.',
  openGraph: {
    title: 'Fazlul Azim Khan — Product Designer & UX Strategist',
    description:
      'I design AI-powered enterprise products for expert-user domains — manufacturing reliability, clinical decision support, metabolic health intelligence.',
    url: 'https://fazux.design',
    siteName: 'Fazlul Azim Khan Portfolio',
    locale: 'en_US',
    type: 'website',
    // images: [{ url: '/images/shared/og-image.png' }],  ← Uncomment when OG image is ready
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fazlul Azim Khan — Product Designer & UX Strategist',
    description:
      'I design AI-powered enterprise products for expert-user domains.',
  },
  icons: {
    // icon: '/images/shared/favicon.svg',  ← Uncomment when favicon is ready
  },
}

/*
 * Pre-hydration theme script.
 * Runs before React mounts so the html element receives data-theme
 * synchronously — prevents the brief light-mode flash on first paint
 * when the user has chosen dark, or vice versa. Only sets data-theme
 * when an explicit choice exists in localStorage; otherwise the CSS
 * @media (prefers-color-scheme: dark) rule handles the system default.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
