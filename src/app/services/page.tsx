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

const approach = [
  {
    title: 'Bespoke, not off the shelf.',
    text: 'Built around how your business actually operates. No software licences to sell.',
  },
  {
    title: 'Discovery first.',
    text: 'We sit with your team, then give you written recommendations with time and revenue estimates and fixed prices. Nothing is built until you say yes.',
  },
  {
    title: 'Built to last.',
    text: 'Established, maintainable tools, not experimental technology.',
  },
]

// All nine automation ideas, grouped so the list scans quickly.
const automationGroups = [
  {
    title: 'Reminders and follow-ups',
    items: [
      'Renewal and expiry reminders',
      'Compliance deadline monitoring',
      'Email triage and reply drafting',
    ],
  },
  {
    title: 'Documents and reports',
    items: [
      'Quotes and proposals',
      'Documents and certificates',
      'Reporting dashboards',
    ],
  },
  {
    title: 'Connected systems',
    items: [
      'CRM and booking integrations',
      'Data migration between systems',
      'An end to copy-paste admin',
    ],
  },
]

const whatYouGet = [
  { title: 'A working system', text: 'built, tested and live' },
  { title: 'Written documentation', text: 'what was built and why' },
  { title: 'A clean handover', text: 'no guessing how it works' },
  { title: 'Ongoing support', text: 'optional, to maintain and improve it' },
]

const outcomes = [
  'Less staff time on admin that could run itself',
  'Fewer missed renewals and follow-ups',
  'Fewer manual data entry errors',
  'Reliable follow-up without anyone remembering',
  'Clearer visibility through automated reports',
  'More time for work that needs a person',
]

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 text-accent mt-0.5"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <polyline points="5,8 7,9.5 11,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const listHeading = 'text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4'

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

            {/* Left: what it is and how we work */}
            <Reveal className="lg:col-span-2">
              <SectionHeading
                label="Primary service"
                title="AI Automation & Workflow Systems"
                subtitle="Automations that connect your existing systems and remove repetitive admin."
                className="md:mb-8"
              />
              <p className="mb-8 border-l-2 border-accent pl-4 text-ink font-medium leading-relaxed">
                We start with the tools you already have, and only recommend something new when it earns its place.
              </p>
              <ul className="space-y-4">
                {approach.map((point) => (
                  <li key={point.title} className="flex items-start gap-3 leading-relaxed">
                    <CheckIcon />
                    <p className="text-ink-muted">
                      <span className="font-semibold text-ink">{point.title}</span> {point.text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact?service=automation" size="md" className="w-full sm:w-auto">
                  Discuss an automation project
                </Button>
              </div>
            </Reveal>

            {/* Right: what can be automated, what you get, what to expect */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <Reveal>
                  <h3 className={listHeading}>What can be automated</h3>
                </Reveal>
                <ul className="grid md:grid-cols-3 gap-4">
                  {automationGroups.map((group, i) => (
                    <Reveal
                      as="li"
                      key={group.title}
                      delay={i * 70}
                      className="card-motion card-motion-light rounded-xl border border-border bg-white p-5"
                    >
                      <h4 className="font-semibold text-ink text-sm mb-3">{group.title}</h4>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-ink-muted leading-snug">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <Reveal className="grid sm:grid-cols-2 gap-10 border-t border-border pt-10">
                <div>
                  <h3 className={listHeading}>What you get</h3>
                  <ul className="space-y-2.5">
                    {whatYouGet.map((item) => (
                      <li key={item.title} className="flex items-start gap-2.5 text-sm leading-snug">
                        <CheckIcon />
                        <span className="text-ink-muted">
                          <span className="font-semibold text-ink">{item.title}</span>, {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className={listHeading}>What you can expect</h3>
                  <ul className="space-y-2.5">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-ink-muted leading-snug">
                        <CheckIcon />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
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
