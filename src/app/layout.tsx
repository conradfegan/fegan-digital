import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const baseUrl = 'https://fegandigital.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Fegan Digital | AI Automation & Digital Systems | Newry',
    template: '%s | Fegan Digital | AI Automation & Digital Systems | Newry',
  },
  description:
    'Practical AI automation and digital systems for small businesses. Cut admin, recover revenue, and run more efficiently. Based in Newry, serving Ireland and the UK.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Fegan Digital',
    title: 'Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'Practical AI automation and digital systems for small businesses. Based in Newry, serving Ireland and the UK.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'Practical AI automation and digital systems for small businesses. Based in Newry, serving Ireland and the UK.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${geistSans.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-surface text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
