import type { Metadata } from 'next'
import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free 30-minute discovery call with Fegan Digital. No commitment, no sales pitch — just a conversation about your business and whether we can help. Based in Newry.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fegan Digital',
    title: 'Contact | Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'Book a free 30-minute discovery call with Fegan Digital. No commitment, no sales pitch — just a conversation about your business and whether we can help. Based in Newry.',
    url: 'https://fegandigital.com/contact',
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
    title: 'Contact | Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'Book a free 30-minute discovery call with Fegan Digital. No commitment, no sales pitch — just a conversation about your business and whether we can help. Based in Newry.',
    images: ['https://fegandigital.com/opengraph-image'],
  },
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const contactDetails = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: 'Based in',
    value: `${siteConfig.location}, Northern Ireland`,
    href: null,
  },
  {
    label: 'Service area',
    value: siteConfig.serviceArea,
    href: null,
  },
]

const whatHappensNext = [
  "We'll be back to you within one working day to confirm receipt and suggest some times for a call.",
  "We have a free 30-minute video or phone call — you tell us about your business, we ask questions, and we decide together if there's a good fit, and if an in person visit is needed.",
  "If there is, we'll arrange a half-day discovery visit (in person across Ireland; remote or hybrid further afield).",
  "Within 7 days of that visit, you'll receive a written findings document with specific recommendations and fixed prices.",
  "Nothing is committed until you say yes to the written proposal.",
]

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { service } = await searchParams
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-pitch text-white pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                Contact
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
                Book a free discovery call.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Start with a free 30-minute call — by video or phone. No sales pitch, no commitment. Just a conversation about your business and whether we can help.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Main contact section ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: form */}
            <Reveal className="lg:col-span-3">
              <SectionHeading
                label="Get in touch"
                title="Send a message."
                subtitle="Fill in the form below and we'll be back to you within one working day."
              />
              <ContactForm initialService={typeof service === 'string' ? service : undefined} />
            </Reveal>

            {/* Right: details + process */}
            <aside className="lg:col-span-2 space-y-10">

              {/* Contact details */}
              <Reveal delay={140} className="rounded-lg border border-border bg-white p-7">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-5">
                  Contact details
                </h2>
                <dl className="space-y-4">
                  {contactDetails.map(({ label, value, href }) => (
                    <div key={label}>
                      <dt className="text-xs text-ink-subtle mb-0.5">{label}</dt>
                      <dd className="text-sm font-medium text-ink">
                        {href ? (
                          <a
                            href={href}
                            className="link-soft hover:text-accent"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              {/*
               * BOOKING WIDGET — hidden until a real Calendly link exists.
               *
               * When ready to enable inline booking on this page:
               * 1. Create a Calendly account at calendly.com
               * 2. Set up a "30-minute discovery call" event type
               * 3. Add the Calendly script tag to layout.tsx
               * 4. Render the block below in place of this comment, replacing
               *    YOUR_USERNAME with the real Calendly handle:
               *
               *    <div className="rounded-lg border border-border bg-surface-alt p-7">
               *      <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-4">
               *        Book directly
               *      </h2>
               *      <p className="text-sm text-ink-muted leading-relaxed mb-4">
               *        Prefer to pick a time straight away? Use the calendar below to book a free 30-minute discovery call.
               *      </p>
               *      <div
               *        className="calendly-inline-widget"
               *        data-url="https://calendly.com/YOUR_USERNAME/discovery"
               *        style={{ minWidth: '280px', height: '450px' }}
               *      />
               *    </div>
               *
               * Until then, the contact form and email above are the booking surface.
               */}

              {/* What happens next */}
              <Reveal delay={220}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-5">
                  What happens after you enquire
                </h2>
                <ol className="space-y-4">
                  {whatHappensNext.map((step, i) => (
                    <Reveal
                      as="li"
                      key={i}
                      delay={260 + i * 70}
                      className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed"
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-light text-accent text-xs font-semibold flex items-center justify-center mt-0.5"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      {step}
                    </Reveal>
                  ))}
                </ol>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
