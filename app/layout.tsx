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
    default: 'Fahad Bin Islam Khan | Ph.D. Student in Criminal Justice',
    template: '%s | Fahad Bin Islam Khan',
  },
  description:
    'Academic portfolio of Fahad Bin Islam Khan. Ph.D. Student in Criminal Justice at John Jay College of Criminal Justice, City University of New York (CUNY). M.Sc., University of Mississippi. Researching drug policy, institutional inequality, and comparative criminal justice.',
  keywords: [
    'Fahad Bin Islam Khan',
    'criminal justice',
    'PhD student criminal justice',
    'John Jay College of Criminal Justice',
    'CUNY',
    'drug policy',
    'sentencing reform',
    'University of Mississippi',
    'criminology researcher',
    'socio-legal research',
    'comparative criminal justice',
    'academic portfolio',
    'drug policy research',
    'criminal justice scholar',
    'institutional inequality',
  ],
  authors: [{ name: 'Fahad Bin Islam Khan' }],
  creator: 'Fahad Bin Islam Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fahadkhanresearch.com',
    siteName: 'Fahad Bin Islam Khan | Academic Portfolio',
    title: 'Fahad Bin Islam Khan | Ph.D. Student in Criminal Justice',
    description:
      'Ph.D. Student at John Jay College of Criminal Justice, CUNY. Researching drug policy, institutional inequality, and comparative criminal justice systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Bin Islam Khan | Ph.D. Student in Criminal Justice',
    description: 'Doctoral researcher at John Jay College of Criminal Justice, CUNY. Drug policy, sentencing reform, and socio-legal analysis.',
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
