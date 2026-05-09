import type { Metadata } from 'next'
import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Fegan Digital handles personal information collected from website enquiries and client work. A plain-English summary of what we collect, why, and your rights.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fegan Digital',
    title: 'Privacy Policy | Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'How Fegan Digital handles personal information collected from website enquiries and client work. A plain-English summary of what we collect, why, and your rights.',
    url: 'https://fegandigital.com/privacy',
    images: [
      {
        url: 'https://fegandigital.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Fegan Digital — AI Automation & Digital Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'How Fegan Digital handles personal information collected from website enquiries and client work. A plain-English summary of what we collect, why, and your rights.',
    images: ['https://fegandigital.com/opengraph-image'],
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-pitch text-white py-12 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                Privacy
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
                How we handle your information.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                A short, plain-English summary of what we collect, why, and what you can ask us to do with it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Body ── */}
      <section className="py-12 md:py-28">
        <Container>
          <div className="max-w-3xl space-y-10 text-ink-muted leading-relaxed">

            <Reveal>
              <h2 className="text-xl font-semibold text-ink mb-3">Who we are</h2>
              <p>
                {siteConfig.name} is a digital consultancy founded by {siteConfig.founderName}, based in {siteConfig.location}, Northern Ireland. You can reach us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="link-soft text-accent">
                  {siteConfig.email}
                </a>
                .
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink mb-3">What we collect</h2>
              <p className="mb-3">
                When you submit the contact form or email us directly, we receive the details you provide — typically your name, email address, business name, and a description of what you&apos;re looking for help with.
              </p>
              <p>
                During paid client work, we may also handle business information you share with us as part of discovery and delivery (for example, details of your existing systems, processes, and data).
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink mb-3">Why we use it</h2>
              <p>
                We use this information for one purpose: to respond to your enquiry and, if you become a client, to deliver the work you&apos;ve asked us to do. We do not use it for marketing lists, profiling, or any other secondary purpose without your explicit agreement.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink mb-3">Who we share it with</h2>
              <p>
                We do not sell your information. We do not share it with third parties except where strictly necessary to deliver a service you&apos;ve agreed to (for example, a hosting provider or email tool that we use to run our business), and only ever the minimum required.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink mb-3">Your rights</h2>
              <p>
                You can ask us at any time to:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Tell you what information we hold about you.</li>
                <li>Correct anything that is wrong.</li>
                <li>Delete your information, where we are not legally required to keep it.</li>
              </ul>
              <p className="mt-3">
                To make a request, email{' '}
                <a href={`mailto:${siteConfig.email}`} className="link-soft text-accent">
                  {siteConfig.email}
                </a>
                . We&apos;ll respond within a reasonable timeframe.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-xl font-semibold text-ink mb-3">Updates to this page</h2>
              <p>
                This is a simple, plain-English summary. As Fegan Digital grows, we may publish a more formal privacy policy. If we make material changes, we will update this page.
              </p>
            </Reveal>

          </div>
        </Container>
      </section>
    </>
  )
}
