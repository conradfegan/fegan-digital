import type { Metadata } from 'next'
import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import PageHeader from '@/components/PageHeader'
import Testimonial from '@/components/Testimonial'
import StatusBadge from '@/components/StatusBadge'
import CtaBand from '@/components/CtaBand'
import { pageMetadata } from '@/lib/metadata'
import { healthMattersQuotes } from '@/lib/work'

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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
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
      />

      {/* ── Case study: Health Matters ── */}
      <section id="health-matters" className="py-20 md:py-28 scroll-mt-4" aria-labelledby="health-matters-heading">
        <Container>
          <article className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  Case study
                </p>
                <h2
                  id="health-matters-heading"
                  className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-ink text-balance"
                >
                  Health Matters (Occupational Health) Ltd
                </h2>
                <p className="mt-3 text-lg font-semibold text-accent">Booking and invoicing system</p>
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal>
                <SubHeading>The problem</SubHeading>
                <p className="text-lg text-ink-muted leading-relaxed">
                  Every service Health Matters delivered was logged in one Excel sheet that sat between the admin team and accounts. Company names, invoice emails and credit terms were typed in by hand each time, and the agreed price for each client had to be remembered or looked up. In the words of owner Shaun Doran, the sheet was &ldquo;busting at the seams&rdquo;, and the admin team was carrying the strain.
                </p>
              </Reveal>

              <Reveal>
                <SubHeading>What we built</SubHeading>
                <p className="text-lg text-ink-muted leading-relaxed">
                  A booking and invoicing system built in Excel, the tool the team already used every day. Staff pick the company and the service, and the system fills in the invoicing details and price automatically, flagging anything missing before it reaches accounts.
                </p>
              </Reveal>

              <Reveal>
                <SubHeading>How we built it</SubHeading>
                <ul className="space-y-3">
                  {howWeBuiltIt.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-lg text-ink-muted leading-relaxed">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="flex-shrink-0 mt-1.5 text-accent"
                      >
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
                        <polyline points="5,8 7,9.5 11,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <SubHeading>The result</SubHeading>
                <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-ink">
                  The system is in daily use by the admin team.
                </p>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-6">
                <Reveal className="h-full">
                  <Testimonial
                    className="h-full"
                    quote={elaine.quote}
                    name={elaine.name}
                    role={`${elaine.role}, Health Matters`}
                  />
                </Reveal>
                <Reveal delay={100} className="h-full">
                  <Testimonial
                    className="h-full"
                    quote={shaun.quote}
                    name={shaun.name}
                    role={`${shaun.role}, Health Matters`}
                  />
                </Reveal>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* ── Current project: East Border Region ── */}
      <section
        id="east-border-region"
        className="bg-surface-alt border-y border-border py-20 md:py-28 scroll-mt-4"
        aria-labelledby="east-border-region-heading"
      >
        <Container>
          <article className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <Reveal>
              <StatusBadge>Currently building</StatusBadge>
              <h2
                id="east-border-region-heading"
                className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-ink text-balance"
              >
                East Border Region Ltd
              </h2>
              <p className="mt-3 text-lg font-semibold text-accent">
                Leave, time in lieu and mileage system
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-ink-muted leading-relaxed">
                East Border Region is a cross-border partnership serving six local authorities. Its team managed annual leave, time in lieu and mileage claims on paper and by email. We are replacing that with one system for requests and approvals, with mileage coded to the right EU-funded project. It runs on the Microsoft 365 the organisation already has and will be handed over with full documentation.
              </p>
            </Reveal>
          </article>
        </Container>
      </section>

      <CtaBand
        title="Have something similar in mind?"
        text="Start with a free 30-minute call. No commitment and no sales pitch."
      />
    </>
  )
}
