import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import Testimonial from '@/components/Testimonial'
import StatusBadge from '@/components/StatusBadge'
import CtaBand from '@/components/CtaBand'
import LinkedInLink from '@/components/LinkedInLink'
import { siteConfig } from '@/lib/config'
import { defaultTitle, pageMetadata } from '@/lib/metadata'
import { healthMattersQuotes } from '@/lib/work'

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
    step: '01',
    title: 'Free 30-minute discovery call.',
    description:
      'A call by video or phone to understand your business and see whether we are a fit.',
  },
  {
    step: '02',
    title: 'Half-day visit.',
    description:
      'We sit with the people doing the work and see how things run. Remote or hybrid for clients further afield.',
  },
  {
    step: '03',
    title: 'Written findings within 7 days.',
    description:
      'Specific recommendations with fixed prices. Nothing is locked in until you say yes.',
  },
  {
    step: '04',
    title: 'Fixed-price build and support.',
    description:
      'We build what was agreed at the price quoted, with optional ongoing support.',
  },
]

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`flex-shrink-0 ${className}`}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <polyline
        points="5,8 7,9.5 11,6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
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
  )
}

/* Work card link: stretched over the whole card so the card is one target. */
const workCardLink =
  "group mt-auto inline-flex min-h-11 items-center gap-1.5 pt-6 text-sm font-semibold text-accent after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none"
const workCard =
  'card-motion card-motion-light relative flex h-full flex-col rounded-xl border border-border bg-white p-6 sm:p-8 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent'

export default function HomePage() {
  const elaine = healthMattersQuotes.elaine

  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-pitch text-white pt-12 pb-20 sm:pt-16 md:pt-20 md:pb-28 lg:pb-32">
        <Container>
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 xl:gap-20 items-center">
            <div>
              <Reveal delay={0}>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 mb-8 text-xs font-medium text-white/75 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  Based in Newry, serving Ireland and the UK
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold tracking-[-0.03em] leading-[1.02] text-white text-balance">
                  We modernise how your business runs.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed">
                  Fegan Digital replaces paper, email and copy-paste admin with systems that do the work for you: automations, internal tools, websites and apps. Fixed price, agreed in writing before anything is built.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button href="/contact" size="lg">
                    {siteConfig.ctaText}
                  </Button>
                  <Button href="/work" size="lg" variant="outline-light">
                    See our work
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Side card: desktop only. The same four areas appear in "The problem" below. */}
            <Reveal delay={260} className="hidden lg:flex justify-end">
              <aside
                aria-labelledby="hero-card-heading"
                className="w-full max-w-[390px] rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <div className="px-6 py-5 border-b border-white/10">
                  <h2
                    id="hero-card-heading"
                    className="text-xs font-semibold text-white/60 uppercase tracking-widest"
                  >
                    Admin we take off your plate
                  </h2>
                </div>
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
                      <CheckIcon className="text-accent-on-dark" />
                      <span className="text-sm text-white/80">{label}</span>
                    </Reveal>
                  ))}
                </ul>
                <div className="px-6 py-5 border-t border-white/10 bg-black/20">
                  <p className="text-xs text-white/60 leading-relaxed">
                    Mapped during discovery. Built only where there is a clear business case.
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 2. Trust strip ── */}
      <Reveal as="section" variant="fade" className="bg-surface-alt border-b border-border py-5">
        <Container>
          <ul
            className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10"
            aria-label="Why work with us"
          >
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckIcon className="text-accent" />
                {signal}
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>

      {/* ── 3. Work ── */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading label="Work" title="Real systems, in daily use." />
          </Reveal>
          <ul className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <Reveal as="li" className="h-full">
              <article className={workCard}>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  Case study
                </p>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                  Health Matters (Occupational Health) Ltd
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">Booking and invoicing system</p>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  A booking and invoicing system built in Excel, the tool the team already used every day. Now in daily use by the admin team.
                </p>
                <Testimonial
                  className="mt-6"
                  quote={elaine.quote}
                  name={elaine.name}
                  role={elaine.role}
                />
                <Link href="/work#health-matters" className={workCardLink}>
                  Read the case study
                  <ArrowIcon />
                </Link>
              </article>
            </Reveal>

            <Reveal as="li" delay={100} className="h-full">
              <article className={workCard}>
                <div>
                  <StatusBadge>Currently building</StatusBadge>
                </div>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                  East Border Region Ltd
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  Leave, time in lieu and mileage system
                </p>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  Replacing paper and email admin with one system for requests and approvals, for a cross-border partnership serving six local authorities.
                </p>
                <Link href="/work#east-border-region" className={workCardLink}>
                  See the project
                  <ArrowIcon />
                </Link>
              </article>
            </Reveal>
          </ul>
        </Container>
      </section>

      {/* ── 4. The problem ── */}
      <section className="bg-surface-alt border-y border-border py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <SectionHeading
                label="The problem"
                title="Admin is costing you more than you realise."
                subtitle="Most organisations lose hours every week to work that does not need a person doing it. These are the four places we see it most."
                className="!mb-0"
              />
            </Reveal>
            <ul className="grid sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 70}
                  className="card-motion card-motion-light rounded-xl border border-border bg-white p-6"
                >
                  <h3 className="font-semibold text-ink leading-snug mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.description}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── 5. What we do ── */}
      <section className="bg-pitch text-white py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <SectionHeading
                label="What we do"
                title="Take on more work without taking on more admin."
                subtitle="We build automations and internal tools around how your organisation works. We also build websites and apps, with the same clear process and fixed pricing."
                light
              />
              <div className="hidden lg:block">
                <Button href="/services" variant="outline-light">
                  See all services
                </Button>
              </div>
            </Reveal>
            <div>
              <ul className="border-t border-white/10">
                {services.map((service, i) => (
                  <Reveal as="li" key={service.href} delay={i * 70} className="border-b border-white/10">
                    <Link
                      href={service.href}
                      className="group flex min-h-16 items-center justify-between gap-4 py-4 text-lg font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-offset-0"
                    >
                      <span>{service.title}</span>
                      <span className="text-accent-on-dark">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
              <div className="mt-8 lg:hidden">
                <Button href="/services" variant="outline-light" className="w-full sm:w-auto">
                  See all services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Process ── */}
      <section className="bg-surface-alt border-b border-border py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading label="Process" title="How we work." />
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {process.map((step, i) => (
              <Reveal
                as="li"
                key={step.step}
                delay={i * 90}
                className="process-step card-motion card-motion-light rounded-xl bg-white border border-border p-6"
              >
                <span
                  className="step-number block text-4xl font-display font-bold text-border select-none"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <h3 className="font-semibold text-ink mt-3 mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <blockquote className="mt-12 max-w-2xl mx-auto text-center font-display text-xl md:text-2xl font-medium leading-snug tracking-tight text-ink text-balance">
              &ldquo;Nothing is built until you have seen the plan, the price and the timeline in writing, and said yes to all three.&rdquo;
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* ── 7. About ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <figure className="w-4/5 max-w-sm mx-auto md:mx-0 md:max-w-md">
                <div className="rounded-xl overflow-hidden bg-surface-alt border border-border">
                  <Image
                    src="/images/conrad-photo-black.jpeg"
                    alt="Conrad Arthurs-Fegan, founder of Fegan Digital"
                    width={640}
                    height={730}
                    sizes="(min-width: 768px) 448px, 80vw"
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink-muted">
                  Conrad Arthurs-Fegan, Founder
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading label="About" title="Founder-led, from start to finish." className="md:mb-6" />
              <p className="text-lg text-ink-muted leading-relaxed max-w-xl">
                Fegan Digital is founded and run by Conrad Arthurs-Fegan, based in Newry. When you work with us, you work directly with Conrad from first call to final delivery.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/about" variant="secondary">
                  More about us
                </Button>
                <LinkedInLink
                  label="LinkedIn"
                  className="link-soft inline-flex min-h-12 items-center gap-2 font-medium text-ink hover:text-accent"
                  iconClassName="w-5 h-5 text-accent"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 8. Closing call to action ── */}
      <CtaBand
        title="Ready to stop losing time to manual admin?"
        text="Start with a free 30-minute call. No commitment and no sales pitch."
      />
    </>
  )
}
