import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import '@/styles/global.css'

/*
 * Inter — body font
 * Only weight 400 confirmed from Figma.
 * Add weights here if needed in the future (e.g. 500 for medium body text).
 */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter-loaded',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
