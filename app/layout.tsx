import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fahadkhanresearch.com'),
  title: {
    default: 'Fahad Bin Islam Khan | Criminal Justice Scholar & Drug Policy Researcher',
    template: '%s | Fahad Bin Islam Khan',
  },
  description:
    'Academic portfolio of Fahad Bin Islam Khan — MSc in Criminal Justice, University of Mississippi. Incoming PhD student focused on U.S. drug policy, sentencing reform, and criminal justice equity.',
  keywords: [
    'Fahad Bin Islam Khan',
    'criminal justice',
    'drug policy',
    'sentencing reform',
    'University of Mississippi',
    'PhD student',
    'academic portfolio',
    'drug policy research',
    'criminal justice scholar',
  ],
  authors: [{ name: 'Fahad Bin Islam Khan' }],
  creator: 'Fahad Bin Islam Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fahadkhanresearch.com',
    siteName: 'Fahad Bin Islam Khan — Academic Portfolio',
    title: 'Fahad Bin Islam Khan | Criminal Justice Scholar & Drug Policy Researcher',
    description:
      'Incoming PhD student researching U.S. drug policy, sentencing disparities, and criminal justice reform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Bin Islam Khan | Criminal Justice Scholar',
    description: 'Researching U.S. drug policy and criminal justice reform.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
