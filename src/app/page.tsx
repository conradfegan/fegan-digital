import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: {
    absolute: 'Fegan Digital | AI Automation & Digital Systems | Newry',
  },
  description:
    'Practical AI automation and digital systems for small businesses that want to stop wasting time on admin. Based in Newry, serving Ireland and the UK.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fegan Digital',
    title: 'Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'Practical AI automation and digital systems for small businesses that want to stop wasting time on admin. Based in Newry, serving Ireland and the UK.',
    url: 'https://fegandigital.com',
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
    title: 'Fegan Digital | AI Automation & Digital Systems | Newry',
    description:
      'Practical AI automation and digital systems for small businesses that want to stop wasting time on admin. Based in Newry, serving Ireland and the UK.',
    images: ['https://fegandigital.com/opengraph-image'],
  },
}

const trustSignals = [
  'Based in Newry, Northern Ireland',
  'Serving Ireland and the UK',
  'Founder-led',
  'Fixed prices after discovery',
  'Written recommendations before any build',
  'GDPR-conscious approach',
]

const problems = [
  {
    title: "Chasing renewals and follow-ups by hand",
    description:
      "Staff manually track expiry dates and send reminders one at a time. Some fall through. Revenue slips away quietly.",
  },
  {
    title: "Data scattered across systems that don't talk",
    description:
      "Information lives in three different places and someone has to copy it across by hand. Errors creep in. Time gets wasted.",
  },
  {
    title: "Reports that take hours to pull together",
    description:
      "The same spreadsheet gets updated each week by the same person, by hand. Time-consuming, error-prone, and fragile.",
  },
  {
    title: "Missed enquiries and slow response times",
    description:
      "Leads arrive through different channels and things get lost. Slow responses mean lost business.",
  },
  {
    title: "Documents generated manually every time",
    description:
      "Quotes, certificates, reports — populated from scratch each time by a person, when the data is already there.",
  },
  {
    title: "Admin that shouldn't need a human at all",
    description:
      "Generating standard documents, moving data between systems, formatting reports — all done manually, every day.",
  },
]

const automationExamples = [
  'Customer renewal tracking and reminders',
  'Automated quote generation',
  'Intelligent email triage and routing',
  'Document and certificate generation',
  'CRM and booking system integrations',
  'Expiry and compliance monitoring',
  'Automated reporting dashboards',
  'Data migration between systems',
  'Copy-paste admin elimination',
]

const outcomes = [
  { stat: 'A working system', description: 'Built, tested, and live in your business.' },
  { stat: 'Written documentation', description: 'So you understand what was built and why.' },
  { stat: 'A clean handover', description: 'You are not left guessing how the system works.' },
  { stat: 'Ongoing support', description: 'Optional support if you want help maintaining and improving it.' },
]

const supportingServices = [
  {
    title: 'Web Development',
    description:
      'Modern, fast, professional websites for businesses that need a proper online presence. Clean design, good performance, built to generate enquiries.',
    href: '/services#web',
  },
  {
    title: 'Web & Mobile App Development',
    description:
      'Practical web apps, client portals, dashboards, booking systems, and ordering tools. Built to be used, not just demonstrated.',
    href: '/services#apps',
  },
  {
    title: 'Custom Software & Integrations',
    description:
      'Bespoke internal tools, CRM extensions, API integrations, and spreadsheet replacement systems. Purpose-built for how your business works.',
    href: '/services#software',
  },
]

const process = [
  {
    step: '01',
    title: 'Free 30-minute discovery call',
    description:
      "A free 30-minute call — by video or phone — to understand your business and decide together if we're the right fit.",
  },
  {
    step: '02',
    title: 'Half-day on-site visit',
    description:
      "If we both think there's something worth exploring, we'll spend half a day on site — sitting with the people doing the work, watching how things actually run. Remote or hybrid for clients further afield.",
  },
  {
    step: '03',
    title: 'Written findings within 7 days',
    description:
      "A week later, you'll get a written findings document with specific recommendations, time and revenue estimates, and fixed prices. Nothing is locked in until you say yes.",
  },
  {
    step: '04',
    title: 'Fixed-price build and ongoing support',
    description:
      'We build what was agreed, at the price quoted. Ongoing support and retainer arrangements available for maintenance and further work.',
  },
]

const heroItems = [
  'Renewal reminders',
  'Quote follow-ups',
  'Customer enquiries',
  'Document generation',
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-pitch text-white pt-8 pb-20 md:pt-10 md:pb-28">
        <Container>
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 xl:gap-16 items-center">

            {/* Copy — left column */}
            <div>
              <Reveal delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-3.5 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-white/55 tracking-wide">Modern systems for growing businesses</span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                  {siteConfig.location} — {siteConfig.serviceArea}
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                  Practical AI automation and digital systems for businesses that want to cut admin and run more efficiently.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                  Most growing businesses lose hours every week to admin that does not need a person doing it. We find where that is happening, recommend what to fix, and only build once you have signed off the plan.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" size="lg">
                    {siteConfig.ctaText}
                  </Button>
                  <Button href="/services" size="lg" variant="outline-light">
                    See our process
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Hero visual — desktop only, hidden on mobile/tablet */}
            <Reveal delay={260} className="hidden lg:flex justify-end">
              <div
                className="w-full max-w-[390px] rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                aria-hidden="true"
              >
                {/* Card header */}
                <div className="px-6 py-5 border-b border-white/10">
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                    Common admin bottlenecks
                  </span>
                </div>

                {/* Item rows — staggered reveal inside the card */}
                <ul>
                  {heroItems.map((label, i) => (
                    <Reveal
                      as="li"
                      key={label}
                      delay={420 + i * 90}
                      className={`flex items-center gap-3.5 px-6 py-4${
                        i < heroItems.length - 1 ? ' border-b border-white/[0.07]' : ''
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-accent flex-shrink-0"
                      >
                        <circle
                          cx="8" cy="8" r="7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeOpacity="0.5"
                        />
                        <polyline
                          points="5,8 7,9.5 11,6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-white/75">{label}</span>
                    </Reveal>
                  ))}
                </ul>

                {/* Card footer */}
                <div className="px-6 py-5 border-t border-white/10 bg-black/20">
                  <p className="text-[11px] text-white/35 leading-relaxed">
                    Mapped during discovery. Built only where there is a clear business case.
                  </p>
                </div>

              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* ── Trust strip ── */}
      <Reveal as="section" variant="fade" className="bg-surface-alt border-b border-border py-5">
        <Container>
          <ul
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label="Trust signals"
          >
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="flex items-center gap-1.5 text-[13px] text-ink-muted"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                  aria-hidden="true"
                />
                {signal}
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>

      {/* ── Problem section ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <SectionHeading
                label="The problem"
                title="Admin is costing your business more than you realise."
                subtitle="If your team spends hours each week copying data between systems, chasing renewals by hand, or formatting the same reports over and over — that time has a cost. And it compounds."
              />
              <p className="text-ink-muted leading-relaxed">
                Most small businesses have the same problems: admin that eats into the working day, follow-ups that slip through the cracks, and systems that don&apos;t talk to each other. The technology to fix this exists. It just hasn&apos;t been set up properly yet.
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 70}
                  className="card-motion card-motion-light rounded-lg border border-border bg-white p-5"
                >
                  <h3 className="font-semibold text-ink text-sm mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {p.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── AI Automation section ── */}
      <section className="bg-pitch text-white py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <SectionHeading
                label="Primary service"
                title="Automate the admin that's slowing you down."
                subtitle="Custom automations that connect the systems your business already uses, so work happens automatically instead of manually."
                light
              />
              <p className="text-white/60 leading-relaxed mb-8">
                We don&apos;t sell software licences. We build bespoke automations tailored to how your business actually operates — connecting your existing tools, removing manual steps, and making sure things happen reliably without anyone having to remember to do them.
              </p>
              <Button href="/contact" size="md">
                {siteConfig.ctaText}
              </Button>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={120}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                  What can be automated
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {automationExamples.map((example, i) => (
                    <Reveal
                      as="li"
                      key={example}
                      delay={180 + i * 45}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <polyline points="5,8 7,10 11,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {example}
                    </Reveal>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                  What you get
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {outcomes.map((o, i) => (
                    <Reveal
                      as="li"
                      key={o.stat}
                      delay={240 + i * 70}
                      className="card-motion card-motion-dark rounded-md bg-white/5 border border-white/10 p-4"
                    >
                      <p className="font-semibold text-white text-sm">{o.stat}</p>
                      <p className="text-xs text-white/50 mt-1 leading-snug">{o.description}</p>
                    </Reveal>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Supporting services ── */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              label="Supporting services"
              title="Everything else a business might need."
              subtitle="Alongside automation, we build websites, apps, and custom software — all delivered with the same clear process and fixed pricing."
            />
          </Reveal>
          <ul className="grid md:grid-cols-3 gap-6">
            {supportingServices.map((service, i) => (
              <Reveal as="li" key={service.title} delay={i * 90}>
                <Link
                  href={service.href}
                  className="card-motion card-motion-light group block rounded-lg border border-border bg-white p-7 h-full"
                >
                  <h3 className="font-semibold text-ink mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    Learn more
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="service-arrow"
                    >
                      <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── How I work ── */}
      <section className="bg-surface-alt py-20 md:py-28 border-y border-border">
        <Container>
          <Reveal>
            <SectionHeading
              label="Process"
              title="How we work."
              subtitle="Straightforward from first call to final delivery. Nothing is committed until you're happy with the plan."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {process.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 100}
                className="process-step card-motion card-motion-light relative rounded-lg bg-white border border-border p-7"
              >
                <span
                  className="step-number text-5xl font-display font-bold text-border select-none"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <h3 className="font-semibold text-ink mt-2 mb-3">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <blockquote className="mt-10 text-center text-ink-muted italic max-w-2xl mx-auto text-sm leading-relaxed border-l-0">
              &ldquo;Nothing is built until you have seen the plan, the price, and the timeline in writing — and said yes to all three.&rdquo;
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* ── About / founder preview ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal className="rounded-lg overflow-hidden bg-surface-alt border border-border w-4/5 mx-auto md:mx-0">
              <Image
                src="/images/conrad-photo-black.jpeg"
                alt="Conrad Fegan, founder of Fegan Digital"
                width={480}
                height={400}
                className="w-full object-cover"
              />
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading
                label="About"
                title="Founder-led, from start to finish."
              />
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  Fegan Digital is founded and run by Conrad Fegan, based in Newry — bringing proper modern tooling to small businesses that have been underserved by the tech industry.
                </p>
                <p>
                  When you work with Fegan Digital, you work directly with Conrad — from first call to final delivery. No handoffs, no junior staff, no offshore teams.
                </p>
                <p>
                  Our approach is practical and plain-English. We&apos;re not here to sell technology for the sake of it. We&apos;re here to solve real problems.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/about" variant="secondary">
                  More about us
                </Button>
                <Button href="/contact">
                  {siteConfig.ctaText}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-accent py-20 md:py-28">
        <Container>
          <Reveal className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              Ready to stop losing time to manual admin?
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Start with a free 30-minute call. No commitment, no sales pitch — just a conversation about your business and whether we can help.
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg" variant="outline-light">
                {siteConfig.ctaText}
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/40">
              Based in {siteConfig.location} — serving {siteConfig.serviceArea}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
