import type { Metadata } from 'next'
import { Inter, Playfair_Display, Source_Serif_4, Space_Mono } from 'next/font/google'
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

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source-serif',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fahadkhanresearch.com'),
  title: {
    default: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
    template: '%s | Fahad Bin Islam Khan',
  },
  description:
    'Fahad Bin Islam Khan is a criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. His research examines U.S. drug policy, criminal justice systems, marijuana legalization, sentencing disparities, and comparative criminology.',
  keywords: [
    'Fahad Bin Islam Khan',
    'drug policy researcher',
    'criminal justice researcher',
    'U.S. drug policy',
    'criminal justice blog',
    'drug policy blog',
    'policing research',
    'sentencing disparities',
    'drug enforcement policy',
    'institutional theory policing',
    'criminal justice reform',
    'drug law enforcement',
    'John Jay College of Criminal Justice',
    'CUNY criminal justice',
    'PhD student criminal justice',
    'comparative criminology',
    'marijuana legalization policy',
    'environmental criminology',
    'race and crime',
    'criminal justice systems',
  ],
  authors: [{ name: 'Fahad Bin Islam Khan', url: 'https://fahadkhanresearch.com' }],
  creator: 'Fahad Bin Islam Khan',
  publisher: 'Fahad Bin Islam Khan',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
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
    title: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
    description:
      'Fahad Bin Islam Khan is a criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. His research examines U.S. drug policy, criminal justice systems, marijuana legalization, sentencing disparities, and comparative criminology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fahad Bin Islam Khan, Criminal Justice Researcher and Ph.D. Student, John Jay College of Criminal Justice, CUNY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
    description:
      'Criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. Research focuses on U.S. drug policy, criminal justice systems, and comparative criminology.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'nTCztEGTnHKxQr6MT22F8bvENOlYsGeFN0ca5hxgcKM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://fahadkhanresearch.com',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fahad Bin Islam Khan',
  givenName: 'Fahad Bin Islam',
  familyName: 'Khan',
  jobTitle: 'Criminal Justice Researcher',
  description:
    'Criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, City University of New York (CUNY), specializing in U.S. drug policy, criminal justice systems, and comparative criminology.',
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

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fahad Bin Islam Khan | Criminal Justice Research',
  url: 'https://fahadkhanresearch.com',
  description:
    'Academic research and commentary on U.S. drug policy, criminal justice reform, policing, and sentencing disparities.',
  author: {
    '@type': 'Person',
    name: 'Fahad Bin Islam Khan',
    url: 'https://fahadkhanresearch.com',
  },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
