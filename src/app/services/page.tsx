import type { Metadata } from 'next'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  socialTitle: 'Services | Fegan Digital | AI Automation & Digital Systems | Newry',
  description:
    'AI automation, web development, web and mobile apps, and custom software for businesses and organisations in Ireland and the UK. Fixed prices and a clear written process throughout.',
  path: '/services',
})

const automationExamples = [
  {
    title: 'Renewal tracking and expiry reminders',
    description:
      'Automatically monitor expiry dates for contracts, certifications, subscriptions or policies, and send reminders at the right time, every time.',
  },
  {
    title: 'Automated quote and proposal generation',
    description:
      'Generate professional, accurate quotes from your existing data without manual formatting or copy-paste errors.',
  },
  {
    title: 'Intelligent email triage and response drafting',
    description:
      'Route, label and draft responses to incoming emails based on content, so nothing gets missed and the right person sees the right message.',
  },
  {
    title: 'Document and certificate generation',
    description:
      'Produce completed documents automatically from structured data. No more manual template filling.',
  },
  {
    title: 'CRM and booking system integrations',
    description:
      'Connect your CRM, booking system or scheduling tool to the rest of your business so data flows without manual intervention.',
  },
  {
    title: 'Expiry and compliance monitoring',
    description:
      'Stay on top of compliance deadlines, certification renewals and regulatory requirements automatically.',
  },
  {
    title: 'Automated reporting dashboards',
    description:
      'Pull data from across your systems into clean, accurate reports, ready when you need them, without anyone building them manually.',
  },
  {
    title: 'Data migration between systems',
    description:
      'Move and transform data between platforms reliably, without the copy-paste errors that come with manual migration.',
  },
  {
    title: 'Copy-paste admin elimination',
    description:
      'Remove the repetitive copying of information between spreadsheets, emails and systems.',
  },
]

const whatYouGet = [
  { title: 'A working system', description: 'Built, tested, and live in your business.' },
  { title: 'Written documentation', description: 'So you understand what was built and why.' },
  { title: 'A clean handover', description: 'You are not left guessing how the system works.' },
  { title: 'Ongoing support', description: 'Optional support if you want help maintaining and improving it.' },
]

const outcomes = [
  'Stop staff spending hours on admin that could run automatically',
  'Recover revenue lost to missed renewals and follow-ups',
  'Reduce errors that come from manual data entry',
  'Get consistent, reliable follow-up without anyone having to remember',
  'Better visibility into your business with automated reports',
  'Free your team to focus on work that actually needs a human',
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Practical systems that make your business run better."
        intro="AI automation is the work we do most of. Web development, apps and custom software are available alongside it, with the same discovery process and the same fixed pricing."
      />

      {/* ── AI Automation ── */}
      <section id="automation" className="py-20 md:py-28 scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: explanation + CTA */}
            <Reveal className="lg:col-span-2">
              <SectionHeading
                label="Primary service"
                title="AI Automation & Workflow Systems"
                subtitle="Custom automations that connect your existing systems and remove repetitive admin, so work happens automatically instead of manually."
              />
              <p className="mb-6 border-l-2 border-accent pl-4 text-ink font-medium leading-relaxed">
                We start with the tools you already have, and only recommend something new when it earns its place.
              </p>
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  We don&apos;t sell off-the-shelf software licences. We build bespoke automations tailored to how your business actually operates.
                </p>
                <p>
                  Every engagement starts with a proper discovery: sitting with your team, watching how the business runs, and identifying where time and money are being lost. The result is a written recommendations document with specific fixes, time and revenue estimates, and fixed prices. Nothing is built until you say yes.
                </p>
                <p>
                  Automations are built to be robust and maintainable. We use established tools and platforms, not experimental technology that might break in six months.
                </p>
              </div>

              {/* What you get */}
              <div className="mt-10">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  What you get
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {whatYouGet.map((item) => (
                    <li key={item.title} className="rounded-xl border border-border bg-white p-4">
                      <p className="font-semibold text-ink text-sm">{item.title}</p>
                      <p className="text-sm text-ink-muted mt-1 leading-snug">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: examples + outcomes */}
            <div className="lg:col-span-3">
              <Reveal>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
                  What can be automated
                </h3>
              </Reveal>
              <ul className="grid sm:grid-cols-2 gap-4">
                {automationExamples.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={i * 60}
                    className="card-motion card-motion-light rounded-xl border border-border bg-white p-5 sm:last:odd:col-span-2"
                  >
                    <h4 className="font-semibold text-ink text-sm mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </Reveal>
                ))}
              </ul>

              {/* Outcomes: connected directly below the examples */}
              <Reveal className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  What you can expect
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {outcomes.map((o, i) => (
                    <Reveal
                      as="li"
                      key={o}
                      delay={i * 60}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 text-accent mt-0.5"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <polyline points="5,8 7,10 11,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {o}
                    </Reveal>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-6 flex justify-center md:justify-start">
                <Button href="/contact?service=automation" size="md">
                  Discuss an automation project
                </Button>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-border" />

      {/* ── Web Development ── */}
      <section id="web" className="py-20 md:py-28 scroll-mt-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-start">
            <Reveal>
              <SectionHeading
                label="Supporting service"
                title="Web Development"
                subtitle="Modern, fast, professional websites for businesses that need a proper online presence."
              />
            </Reveal>
            <div>
              <Reveal delay={120} className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  A poorly built website reflects poorly on a business. If your current site is slow, hard to update, or doesn&apos;t generate enquiries, that&apos;s a fixable problem.
                </p>
                <p>
                  We build websites that are fast, accessible and built on solid technology, designed to look professional, perform well on all devices, and give you something you&apos;re proud to send prospects to.
                </p>
                <p>
                  Web development projects follow the same discovery process as automation work: a written brief, a fixed price, and a clear delivery timeline.
                </p>
              </Reveal>
              <Reveal className="mt-6 flex justify-center md:justify-start">
                <Button href="/contact?service=website" variant="secondary">
                  Discuss a website project
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-border" />

      {/* ── Web & Mobile Apps ── */}
      <section id="apps" className="py-20 md:py-28 scroll-mt-20 bg-surface-alt">
        <Container>
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-start">
            <Reveal>
              <SectionHeading
                label="Supporting service"
                title="Web & Mobile App Development"
                subtitle="Practical apps, portals and dashboards, built for the people who use them every day."
              />
            </Reveal>
            <div>
              <Reveal delay={120} className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  Sometimes a website isn&apos;t enough. If your business needs a client portal, a booking system, a management dashboard, or an ordering tool, we can build that.
                </p>
                <p>
                  We focus on progressive web apps and mobile-friendly web applications rather than native iOS and Android development. For most businesses and organisations, this delivers a far better return on investment: it works on every device, is easier to maintain and is significantly cheaper to build.
                </p>
                <p>
                  If a native mobile app is genuinely the right solution, we&apos;ll say so clearly rather than taking on work that isn&apos;t the right fit.
                </p>
              </Reveal>
              <Reveal className="mt-6 flex justify-center md:justify-start">
                <Button href="/contact?service=app" variant="secondary">
                  Discuss an app or portal project
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-border" />

      {/* ── Custom Software ── */}
      <section id="software" className="py-20 md:py-28 scroll-mt-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-start">
            <Reveal>
              <SectionHeading
                label="Supporting service"
                title="Custom Software & Integrations"
                subtitle="Bespoke tools built around exactly how your business works."
              />
            </Reveal>
            <div>
              <Reveal delay={120} className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  If your business has outgrown its spreadsheets but isn&apos;t ready to implement an enterprise system, there&apos;s usually a better option in between: purpose-built software that does exactly what you need and nothing else.
                </p>
                <p>
                  We build internal dashboards, CRM extensions, API integrations, and lightweight internal tools for businesses that need something specific. The scope is always agreed in writing before any development starts.
                </p>
                <p>
                  Every custom build includes documentation and a handover, so you&apos;re not left dependent on us to keep things running.
                </p>
              </Reveal>
              <Reveal className="mt-6 flex justify-center md:justify-start">
                <Button href="/contact?service=software" variant="secondary">
                  Discuss a software integration
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        text="Start with a free discovery call and we'll work it out together."
      />
    </>
  )
}
