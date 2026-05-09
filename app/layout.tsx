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
    'Academic portfolio of Fahad Bin Islam Khan, Ph.D. student in criminal justice at John Jay College of Criminal Justice, City University of New York (CUNY). Drug policy researcher and comparative criminology scholar.',
  keywords: [
    'Fahad Bin Islam Khan',
    'criminal justice researcher',
    'drug policy researcher',
    'PhD student criminal justice',
    'John Jay College of Criminal Justice',
    'CUNY',
    'U.S. drug policy',
    'comparative criminology',
    'sentencing disparities',
    'marijuana legalization',
    'University of Mississippi',
    'criminology scholar',
    'criminal justice policy',
    'environmental criminology',
    'institutional inequality',
  ],
  authors: [{ name: 'Fahad Bin Islam Khan' }],
  creator: 'Fahad Bin Islam Khan',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico',       sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fahadkhanresearch.com',
    siteName: 'Fahad Bin Islam Khan',
    title: 'Fahad Bin Islam Khan | Ph.D. Student in Criminal Justice',
    description:
      'Ph.D. student at John Jay College of Criminal Justice, CUNY. Drug policy researcher and comparative criminology scholar. Research covers marijuana legalization, drug law enforcement, sentencing disparities, and criminal justice policy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fahad Bin Islam Khan, Ph.D. Student in Criminal Justice, John Jay College of Criminal Justice, CUNY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Bin Islam Khan | Ph.D. Student in Criminal Justice',
    description:
      'Doctoral researcher at John Jay College of Criminal Justice, CUNY. Drug policy, comparative criminology, and criminal justice systems.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fahad Bin Islam Khan',
  givenName: 'Fahad Bin Islam',
  familyName: 'Khan',
  jobTitle: 'Ph.D. Student in Criminal Justice',
  description:
    'Drug policy researcher and comparative criminology scholar at John Jay College of Criminal Justice, City University of New York (CUNY).',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'John Jay College of Criminal Justice, City University of New York (CUNY)',
    url: 'https://www.jjay.cuny.edu',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Mississippi',
      url: 'https://www.olemiss.edu',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Mawlana Bhashani Science and Technology University',
    },
  ],
  url: 'https://fahadkhanresearch.com',
  email: 'khan.fbi7@gmail.com',
  image: 'https://fahadkhanresearch.com/og-image.jpg',
  sameAs: [
    'https://www.linkedin.com/in/fahad-bin-islam-khan-b64282211/',
    'https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en',
    'https://orcid.org/my-orcid?orcid=0009-0009-0629-9473',
    'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan',
  ],
  knowsAbout: [
    'U.S. Drug Policy',
    'Criminal Justice Systems',
    'Comparative Criminology',
    'Drug Law Enforcement',
    'Sentencing Disparities',
    'Marijuana Legalization',
    'Environmental Criminology',
    'Race and Crime',
    'Policing and Prison',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
