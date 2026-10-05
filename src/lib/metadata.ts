import type { Metadata } from 'next'
import { siteConfig } from './config'

export const defaultTitle = 'Fegan Digital | AI Automation & Digital Systems | Newry'
export const ogImageAlt = 'Fegan Digital: AI Automation and Digital Systems'
const ogImageUrl = `${siteConfig.url}/opengraph-image`

interface PageMetadataOptions {
  /** Value for the <title> tag. Pass `{ absolute }` to bypass the layout template. */
  title: Metadata['title']
  /** Full title used for Open Graph and Twitter cards. */
  socialTitle: string
  description: string
  /** Path from the site root, e.g. '/services'. */
  path: string
}

/** Builds consistent title, description, canonical, Open Graph and Twitter tags for a page. */
export function pageMetadata({ title, socialTitle, description, path }: PageMetadataOptions): Metadata {
  const url = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [{ url: ogImageUrl, alt: ogImageAlt }],
    },
  }
}
