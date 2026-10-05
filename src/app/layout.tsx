import type { Metadata } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'
import { defaultTitle, ogImageAlt } from '@/lib/metadata'

/* One grotesk family for headings, interface and body copy. */
const grotesk = Schibsted_Grotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

const defaultDescription =
  'Practical AI automation and digital systems for businesses and organisations that want to stop wasting time on admin. Based in Newry, serving Ireland and the UK.'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description: defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: `${siteConfig.url}/opengraph-image`, alt: ogImageAlt }],
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
      className={grotesk.variable}
    >
      <body className="flex flex-col min-h-screen bg-pitch text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
