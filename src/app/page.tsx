import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import DocSection from '@/components/DocSection'
import Reveal from '@/components/Reveal'
import ClientLogo from '@/components/ClientLogo'
import Testimonial from '@/components/Testimonial'
import StatusBadge from '@/components/StatusBadge'
import SystemFlow from '@/components/SystemFlow'
import ApprovalMark from '@/components/ApprovalMark'
import CtaBand from '@/components/CtaBand'
import LinkedInLink from '@/components/LinkedInLink'
import { siteConfig } from '@/lib/config'
import { defaultTitle, pageMetadata } from '@/lib/metadata'
import { eastBorderFlow, healthMattersFlow, healthMattersQuotes } from '@/lib/work'

export const metadata: Metadata = pageMetadata({
  title: { absolute: defaultTitle },
  socialTitle: defaultTitle,
  description:
    'Practical AI automation and digital systems for businesses and organisations that want to stop wasting time on admin. Based in Newry, serving Ireland and the UK.',
  path: '/',
})

const heroItems = [
  'Bookings and invoicing',
  'Staff leave and expenses',
  'Customer enquiries and follow-ups',
  'Reports and documents',
]

const trustSignals = [
  'Founder-led',
  'Fixed prices',
  'Written plan before any build',
  'Fully insured',
]

const problems = [
  {
    title: 'Bookings and invoicing.',
    description:
      'Details typed in by hand for every job, and prices looked up or remembered. Slow, and easy to get wrong.',
  },
  {
    title: 'Staff leave and expenses.',
    description:
      'Requests on paper or buried in email, approvals chased in person, and totals worked out by hand at month end.',
  },
  {
    title: 'Customer enquiries and follow-ups.',
    description:
      'Enquiries arrive through different channels and some go unanswered. Follow-ups depend on someone remembering.',
  },
  {
    title: 'Reports and documents.',
    description:
      'The same report or document built from scratch each time, when the information already exists.',
  },
]

const services = [
  { title: 'AI Automation and Workflow', href: '/services#automation' },
  { title: 'Web Development', href: '/services#web' },
  { title: 'Web and Mobile Apps', href: '/services#apps' },
  { title: 'Custom Software and Integrations', href: '/services#software' },
]

const process = [
  {
    title: 'Free 30-minute discovery call.',
    description:
      'A call by video or phone to understand your business and see whether we are a fit.',
  },
  {
    title: 'Half-day visit.',
    description:
      'We sit with the people doing the work and see how things run. Remote or hybrid for clients further afield.',
  },
  {
    title: 'Written findings within 7 days.',
    description:
      'Specific recommendations with fixed prices. Nothing is locked in until you say yes.',
  },
  {
    title: 'Fixed-price build and support.',
    description:
      'We build what was agreed at the price quoted, with optional ongoing support.',
  },
]

const docLink =
  'group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold'

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="link-arrow w-4 h-4">
      <path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomePage() {
  const elaine = healthMattersQuotes.elaine

  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="glow glow-drift relative overflow-hidden bg-pitch text-white">
        <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
        <Container className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24 lg:items-center">
            <div>
              <Reveal delay={0}>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/80">
                  <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
                    <span className="badge-pulse absolute inset-0 rounded-full bg-accent" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  Based in Newry, serving Ireland and the UK
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-7 text-[2.875rem] sm:text-[4rem] lg:text-[4.75rem] xl:text-[5.5rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
                  We modernise how your business runs.
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-[36rem] text-lg sm:text-xl leading-relaxed text-white/70">
                  Fegan Digital replaces paper, email and copy-paste admin with systems that do the work for you: automations, internal tools, websites and apps. Fixed price, agreed in writing before anything is built.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Button href="/contact" size="lg">
                    {siteConfig.ctaText}
                  </Button>
                  <Button href="/work" size="lg" variant="outline-light">
                    See our work
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* The plan sheet: desktop only. Its four items tick themselves off once on load.
                The same four areas are set out in full under "The problem". */}
            <Reveal delay={240} className="hidden lg:block">
              <aside aria-labelledby="plan-heading" className="panel relative overflow-hidden rounded-xl px-8 pt-8 pb-7">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent-on-dark to-transparent" />
                <h2 id="plan-heading" className="text-lg font-semibold text-white">
                  Admin we take off your plate
                </h2>
                <ul className="mt-5 border-t border-white/15">
                  {heroItems.map((label, i) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-white/10 py-4 text-[0.9375rem] text-white/85"
                    >
                      {label}
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 flex-shrink-0 overflow-visible">
                        <circle
                          className="plan-tick-circle"
                          style={{ ['--i' as string]: i }}
                          cx="10" cy="10" r="10"
                          fill="var(--brand-accent)"
                        />
                        <path
                          className="plan-tick-path"
                          style={{ ['--i' as string]: i }}
                          d="M6 10.4l2.6 2.5L14 7.4"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  Mapped during discovery. Built only where there is a clear business case.
                </p>
              </aside>
            </Reveal>
          </div>

          {/* ── 2. Trust strip: one ruled line ── */}
          <Reveal variant="fade" delay={320}>
            <ul
              aria-label="Why work with us"
              className="mt-14 md:mt-20 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-white/10 py-5 sm:flex sm:flex-wrap sm:justify-between sm:gap-x-8"
            >
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
                  <ApprovalMark outline className="w-[18px] h-[18px] text-accent-on-dark" />
                  {signal}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ── 3. Work ── */}
      <DocSection note="Work" title="Real systems, in daily use.">
        {/* Health Matters: the signed-off case study, on a light sheet. */}
        <Reveal>
          <article className="sheet card-motion mt-10 md:mt-12 rounded-2xl overflow-hidden">
            <div className="grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div className="p-6 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <StatusBadge status="live">In daily use</StatusBadge>
                  <ClientLogo name="health-matters" height={72} />
                </div>
                <h3 className="mt-6 text-2xl sm:text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
                  Health Matters (Occupational Health) Ltd
                </h3>
                <p className="mt-1.5 font-semibold text-accent">Booking and invoicing system</p>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  A booking and invoicing system built in Excel, the tool the team already used every day. Now in daily use by the admin team.
                </p>
                <Link href="/work#health-matters" className={`${docLink} link-mark mt-5 text-ink`}>
                  Read the case study
                  <Arrow />
                </Link>
              </div>
              <div className="border-t border-rule bg-paper p-6 sm:p-10 xl:border-t-0 xl:border-l">
                <Testimonial size="lg" quote={elaine.quote} name={elaine.name} role={elaine.role} />
              </div>
            </div>
            <div className="hidden md:block border-t border-rule px-6 py-6 sm:px-10 sm:py-8">
              <SystemFlow
                steps={healthMattersFlow}
                state="live"
                tone="light"
                compact
                caption="Schematic: how a booking moves through the system."
              />
            </div>
          </article>
        </Reveal>

        {/* East Border Region: still being built, so drawn as a dark draft. */}
        <Reveal delay={80}>
          <article className="panel-draft card-motion card-motion-dark mt-6 rounded-2xl grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <StatusBadge status="building">Currently building</StatusBadge>
                <ClientLogo name="east-border-region" height={92} plate />
              </div>
              <h3 className="mt-6 text-2xl sm:text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-white">
                East Border Region Ltd
              </h3>
              <p className="mt-1.5 font-semibold text-accent-on-dark">Leave, time in lieu and mileage system</p>
              <p className="mt-4 leading-relaxed text-white/70">
                Replacing paper and email admin with one system for requests and approvals, for a cross-border partnership serving six local authorities.
              </p>
              <Link href="/work#east-border-region" className={`${docLink} link-mark mt-5 text-white`}>
                See the project
                <Arrow />
              </Link>
            </div>
            <div className="hidden md:block border-t border-dashed border-accent-on-dark/30 p-6 sm:p-10 xl:border-t-0 xl:border-l">
              <SystemFlow
                steps={eastBorderFlow}
                state="planned"
                compact
                caption="Schematic: how a request will move through the system."
              />
            </div>
          </article>
        </Reveal>
      </DocSection>

      {/* ── 4. The problem: a light, readable section ── */}
      <DocSection
        tone="light"
        note="The problem"
        title="Admin is costing you more than you realise."
        intro="Most organisations lose hours every week to work that does not need a person doing it. These are the four places we see it most."
      >
        <dl className="mt-10 md:mt-12 grid sm:grid-cols-2 sm:gap-x-12 border-t-2 border-accent">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="border-b border-rule py-6">
              <dt className="text-lg font-semibold text-ink">{p.title}</dt>
              <dd className="mt-1.5 leading-relaxed text-ink-muted">{p.description}</dd>
            </Reveal>
          ))}
        </dl>
      </DocSection>

      {/* ── 5. What we do: a contents page for the services ── */}
      <DocSection
        glow
        note="What we do"
        title="Take on more work without taking on more admin."
        intro="We build automations and internal tools around how your organisation works. We also build websites and apps, with the same clear process and fixed pricing."
      >
        <ul className="mt-10 md:mt-12 border-t border-white/20">
          {services.map((service, i) => (
            <Reveal as="li" key={service.href} delay={i * 60} className="border-b border-white/10">
              <Link
                href={service.href}
                className="index-row group flex min-h-16 items-center justify-between gap-6 py-4 text-xl sm:text-2xl font-medium tracking-[-0.015em] text-white focus-visible:outline-offset-0"
              >
                <span className="index-row-label group-hover:text-accent-on-dark">{service.title}</span>
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="w-4 h-4 flex-shrink-0 text-accent-on-dark transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/services" variant="outline-light" className="w-full sm:w-auto">
            See all services
          </Button>
        </div>
      </DocSection>

      {/* ── 6. Process: a genuine sequence, so it is numbered ── */}
      <DocSection tone="dark-raised" note="Process" title="How we work.">
        <ol className="mt-10 md:mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="group relative border-t border-white/15 pt-5 pb-8">
              <span
                aria-hidden="true"
                className="absolute left-0 -top-px h-0.5 w-10 bg-accent transition-all duration-500 group-hover:w-full"
              />
              <span aria-hidden="true" className="text-sm font-semibold text-accent-on-dark">
                Step {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        {/* The agreement clause. */}
        <Reveal>
          <div className="panel mt-4 flex items-start gap-5 rounded-xl p-6 sm:p-8">
            <ApprovalMark className="w-7 h-7 sm:w-8 sm:h-8 mt-1" />
            <blockquote className="text-xl sm:text-2xl md:text-[1.75rem] font-medium leading-snug tracking-[-0.015em] text-white">
              &ldquo;Nothing is built until you have seen the plan, the price and the timeline in writing, and said yes to all three.&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </DocSection>

      {/* ── 7. About ── */}
      <DocSection tone="light" note="About">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-14 md:items-center">
          <Reveal>
            <figure className="max-w-[17rem] sm:max-w-sm">
              <div className="rounded-xl bg-sheet p-2.5 shadow-[0_24px_50px_-28px_rgba(102,51,255,0.55)] ring-1 ring-rule">
                <Image
                  src="/images/conrad-photo-black.jpeg"
                  alt="Conrad Arthurs-Fegan, founder of Fegan Digital"
                  width={640}
                  height={730}
                  sizes="(min-width: 768px) 384px, 272px"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">Conrad Arthurs-Fegan, Founder</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
              Founder-led, from start to finish.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Fegan Digital is founded and run by Conrad Arthurs-Fegan, based in Newry. When you work with us, you work directly with Conrad from first call to final delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="/about" variant="secondary">
                More about us
              </Button>
              <LinkedInLink
                label="LinkedIn"
                className="link-soft inline-flex min-h-12 items-center gap-2 font-semibold text-ink hover:text-accent"
                iconClassName="w-5 h-5 text-accent"
              />
            </div>
          </Reveal>
        </div>
      </DocSection>

      {/* ── 8. Closing call to action ── */}
      <CtaBand
        title="Ready to stop losing time to manual admin?"
        text="Start with a free 30-minute call. No commitment and no sales pitch."
      />
    </>
  )
}
