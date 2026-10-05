import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import Testimonial from '@/components/Testimonial'
import StatusBadge from '@/components/StatusBadge'
import SystemFlow from '@/components/SystemFlow'
import ApprovalMark from '@/components/ApprovalMark'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import ClientLogo from '@/components/ClientLogo'
import { pageMetadata } from '@/lib/metadata'
import { eastBorderFlow, healthMattersFlow, healthMattersQuotes } from '@/lib/work'

export const metadata: Metadata = pageMetadata({
  title: { absolute: 'Our Work | Fegan Digital' },
  socialTitle: 'Our Work | Fegan Digital',
  description:
    'Systems Fegan Digital has built for businesses and organisations, including a booking and invoicing system for Health Matters and a leave and mileage system for East Border Region.',
  path: '/work',
})

const howWeBuiltIt = [
  'No macros, so there are no security warnings and nothing fragile to maintain.',
  'We never took their historical bookings, because they held private medical information.',
  'The data is structured throughout, so the system is ready to connect to future automation.',
]

const caseStudySections = [
  { id: 'health-matters-problem', label: 'The problem' },
  { id: 'health-matters-built', label: 'What we built' },
  { id: 'health-matters-how', label: 'How we built it' },
  { id: 'health-matters-result', label: 'The result' },
]

const projects = [
  {
    href: '#health-matters',
    client: 'Health Matters (Occupational Health) Ltd',
    project: 'Booking and invoicing system',
    status: 'live' as const,
    statusLabel: 'In daily use',
    logo: 'health-matters' as const,
    logoHeight: 34,
  },
  {
    href: '#east-border-region',
    client: 'East Border Region Ltd',
    project: 'Leave, time in lieu and mileage system',
    status: 'building' as const,
    statusLabel: 'Currently building',
    logo: 'east-border-region' as const,
    logoHeight: 52,
  },
]

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-8 flex items-center gap-3 text-xl font-semibold text-ink">
      <span aria-hidden="true" className="h-5 w-1 rounded-full bg-accent" />
      {children}
    </h3>
  )
}

export default function WorkPage() {
  const { elaine, shaun } = healthMattersQuotes

  return (
    <>
      <PageHeader
        label="Work"
        title="Systems we have built."
        intro="Every project starts with a written plan and a fixed price. Here is what that looks like in practice."
      >
        {/* Contents: jump to each project. */}
        <nav aria-label="Projects on this page" className="mt-10 max-w-3xl">
          <ul className="border-t border-white/20">
            {projects.map((p) => (
              <li key={p.href} className="border-b border-white/10">
                <Link
                  href={p.href}
                  className="index-row group flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 focus-visible:outline-offset-0"
                >
                  <span className="index-row-label flex items-center gap-4">
                    <span className="flex h-16 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-white/10">
                      <ClientLogo name={p.logo} height={p.logoHeight} />
                    </span>
                    <span>
                      <span className="block text-lg font-semibold text-white transition-colors group-hover:text-accent-on-dark">
                        {p.client}
                      </span>
                      <span className="block text-[0.9375rem] text-white/60">{p.project}</span>
                    </span>
                  </span>
                  <span className="flex-shrink-0">
                    <StatusBadge status={p.status}>{p.statusLabel}</StatusBadge>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {/* ── Case study: Health Matters (a light report sheet on the dark page) ── */}
      <section
        id="health-matters"
        aria-labelledby="health-matters-heading"
        className="scroll-mt-4 border-t border-white/10 bg-pitch py-14 sm:py-16 lg:py-20"
      >
        <Container>
          <Reveal>
            <article className="sheet rounded-2xl">
              {/* Report header */}
              <header className="grid gap-8 border-b border-rule p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start lg:px-14 lg:py-12">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <StatusBadge status="live">In daily use</StatusBadge>
                    <span className="text-sm font-medium text-ink-muted">Case study</span>
                  </div>
                  <h2
                    id="health-matters-heading"
                    className="mt-6 text-[2rem] sm:text-[2.75rem] lg:text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink max-w-3xl"
                  >
                    Health Matters (Occupational Health) Ltd
                  </h2>
                  <p className="mt-3 text-lg sm:text-xl font-semibold text-accent">Booking and invoicing system</p>
                </div>
                <div>
                  <span className="block md:hidden"><ClientLogo name="health-matters" height={64} /></span>
                  <span className="hidden md:block md:mt-1"><ClientLogo name="health-matters" height={96} /></span>
                </div>
              </header>

              {/* How the system works */}
              <div className="border-b border-rule p-6 sm:p-10 lg:px-14">
                <SystemFlow
                  steps={healthMattersFlow}
                  state="live"
                  tone="light"
                  caption="Schematic: how a booking moves through the system."
                />
              </div>

              {/* Findings */}
              <div className="tone-light grid gap-10 p-6 sm:p-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12 lg:px-14 lg:py-14">
                <nav aria-label="Case study sections" className="hidden lg:block">
                  <ul className="sticky top-8 border-t-2 border-accent pt-3 space-y-1">
                    {caseStudySections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="link-soft inline-flex min-h-9 items-center text-sm text-ink-muted hover:text-accent"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="max-w-[42rem] space-y-12">
                  <div>
                    <SectionHeading id="health-matters-problem">The problem</SectionHeading>
                    <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                      Every service Health Matters delivered was logged in one Excel sheet that sat between the admin team and accounts. Company names, invoice emails and credit terms were typed in by hand each time, and the agreed price for each client had to be remembered or looked up. In the words of owner Shaun Doran, the sheet was &ldquo;busting at the seams&rdquo;, and the admin team was carrying the strain.
                    </p>
                  </div>

                  <div>
                    <SectionHeading id="health-matters-built">What we built</SectionHeading>
                    <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                      A booking and invoicing system built in Excel, the tool the team already used every day. Staff pick the company and the service, and the system fills in the invoicing details and price automatically, flagging anything missing before it reaches accounts.
                    </p>
                  </div>

                  <div>
                    <SectionHeading id="health-matters-how">How we built it</SectionHeading>
                    <ul className="mt-4 border-t border-rule">
                      {howWeBuiltIt.map((point) => (
                        <li key={point} className="flex items-start gap-3.5 border-b border-rule py-4 text-lg leading-relaxed text-ink-muted">
                          <ApprovalMark outline className="w-5 h-5 mt-1 text-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <SectionHeading id="health-matters-result">The result</SectionHeading>
                    <p className="mt-4 flex items-start gap-4 rounded-xl bg-accent-light px-5 py-5 text-xl sm:text-2xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                      <ApprovalMark className="w-7 h-7 mt-0.5" />
                      The system is in daily use by the admin team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signed statements */}
              <div className="grid rounded-b-2xl border-t border-rule bg-paper md:grid-cols-2">
                <Testimonial
                  className="p-6 sm:p-10 lg:p-14"
                  quote={elaine.quote}
                  name={elaine.name}
                  role={`${elaine.role}, Health Matters`}
                />
                <Testimonial
                  className="border-t border-rule p-6 sm:p-10 lg:p-14 md:border-t-0 md:border-l"
                  quote={shaun.quote}
                  name={shaun.name}
                  role={`${shaun.role}, Health Matters`}
                />
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* ── Current project: East Border Region (a dark draft, so no results) ── */}
      <section
        id="east-border-region"
        aria-labelledby="east-border-region-heading"
        className="glow scroll-mt-4 bg-pitch pb-16 sm:pb-20 lg:pb-24"
      >
        <Container>
          <Reveal>
            <article className="panel-draft rounded-2xl">
              <header className="grid gap-8 border-b border-dashed border-accent-on-dark/30 p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start lg:px-14 lg:py-12">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <StatusBadge status="building">Currently building</StatusBadge>
                    <span className="text-sm font-medium text-white/60">Current project</span>
                  </div>
                  <h2
                    id="east-border-region-heading"
                    className="mt-6 text-[2rem] sm:text-[2.75rem] lg:text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-white"
                  >
                    East Border Region Ltd
                  </h2>
                  <p className="mt-3 text-lg sm:text-xl font-semibold text-accent-on-dark">
                    Leave, time in lieu and mileage system
                  </p>
                </div>
                <div className="justify-self-start">
                  <span className="block md:hidden"><ClientLogo name="east-border-region" height={96} plate /></span>
                  <span className="hidden md:block md:mt-1"><ClientLogo name="east-border-region" height={128} plate /></span>
                </div>
              </header>

              <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:px-14 lg:py-14">
                <p className="text-lg leading-relaxed text-white/75 max-w-[42rem]">
                  East Border Region is a cross-border partnership serving six local authorities. Its team managed annual leave, time in lieu and mileage claims on paper and by email. We are replacing that with one system for requests and approvals, with mileage coded to the right EU-funded project. It runs on the Microsoft 365 the organisation already has and will be handed over with full documentation.
                </p>
                <SystemFlow
                  steps={eastBorderFlow}
                  state="planned"
                  caption="Schematic: how a request will move through the system once it is built."
                />
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Have something similar in mind?"
        text="Start with a free 30-minute call. No commitment and no sales pitch."
      />
    </>
  )
}
