import type { Metadata } from 'next'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import { LinkedInIcon } from '@/components/LinkedInLink'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import { siteConfig } from '@/lib/config'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  socialTitle: 'Contact | Fegan Digital | AI Automation & Digital Systems | Newry',
  description:
    'Book a free 30-minute discovery call with Fegan Digital. No commitment and no sales pitch, just a conversation about your business and whether we can help. Based in Newry.',
  path: '/contact',
})

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const contactDetails = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: siteConfig.founderName,
    href: siteConfig.linkedinUrl,
    external: true,
  },
  {
    label: 'Based in',
    value: `${siteConfig.location}, Northern Ireland`,
    href: null,
    external: false,
  },
  {
    label: 'Service area',
    value: siteConfig.serviceArea,
    href: null,
    external: false,
  },
]

const whatHappensNext = [
  "We'll be back to you within one working day to confirm receipt and suggest some times for a call.",
  "We have a free 30-minute video or phone call. You tell us about your business, we ask questions, and we decide together if there's a good fit, and if an in person visit is needed.",
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
      <PageHeader
        label="Contact"
        title="Book a free discovery call."
        intro="Start with a free 30-minute call by video or phone. No sales pitch and no commitment, just a conversation about your business and whether we can help."
      />

      {/* ── Main contact section ── */}
      <section className="glow border-t border-white/10 bg-pitch py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">

            {/* Left: the form, on a white sheet */}
            <Reveal className="sheet tone-light rounded-2xl p-6 sm:p-10 self-start">
              <h2 className="text-[1.75rem] sm:text-[2rem] font-semibold leading-tight tracking-[-0.025em] text-ink">
                Send a message.
              </h2>
              <p className="mt-2 mb-8 text-lg leading-relaxed text-ink-muted">
                Fill in the form below and we&apos;ll be back to you within one working day.
              </p>
              <ContactForm initialService={typeof service === 'string' ? service : undefined} />
            </Reveal>

            {/* Right: details + process */}
            <Reveal as="aside" delay={120} className="space-y-12">

              {/* Contact details */}
              <div>
                <h2 className="text-base font-semibold text-white">Contact details</h2>
                <dl className="mt-3 border-t-2 border-accent">
                  {contactDetails.map(({ label, value, href, external }) => (
                    <div key={label} className="border-b border-white/10 py-3">
                      <dt className="text-sm text-white/55">{label}</dt>
                      <dd className="text-[0.9375rem] font-medium text-white break-words">
                        {href && external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-soft -my-3 inline-flex min-h-11 items-center gap-2 hover:text-accent-on-dark"
                          >
                            <LinkedInIcon className="w-4 h-4 text-accent-on-dark" />
                            {value}
                            <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                          </a>
                        ) : href ? (
                          <a
                            href={href}
                            className="link-soft -my-3 inline-flex min-h-11 items-center hover:text-accent-on-dark"
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
              </div>

              {/*
               * BOOKING WIDGET: hidden until a real Calendly link exists.
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

              {/* What happens next: a real sequence, so numbered */}
              <div>
                <h2 className="text-base font-semibold text-white">What happens after you enquire</h2>
                <ol className="mt-3 border-t-2 border-accent">
                  {whatHappensNext.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 border-b border-white/10 py-4 leading-relaxed text-white/70"
                    >
                      <span
                        className="flex-shrink-0 w-6 text-sm font-semibold text-accent-on-dark pt-0.5"
                        aria-hidden="true"
                      >
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
