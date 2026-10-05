import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'
import Button from '@/components/Button'
import ApprovalMark from '@/components/ApprovalMark'
import Reveal from '@/components/Reveal'
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
    title: 'Discovery first.',
    text: 'We sit with your team, understand the work, then give written recommendations and fixed prices.',
  },
  {
    title: 'Built around your process.',
    text: 'No off-the-shelf software licences to push.',
  },
  {
    title: 'Clean handover.',
    text: 'Built, tested, documented and explained before it goes live.',
  },
]

// Common automation projects, grouped so the list scans quickly.
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

const contents = [
  { href: '#automation', title: 'AI Automation & Workflow Systems', note: 'Primary service' },
  { href: '#web', title: 'Web Development', note: 'Supporting service' },
  { href: '#apps', title: 'Web & Mobile App Development', note: 'Supporting service' },
  { href: '#software', title: 'Custom Software & Integrations', note: 'Supporting service' },
]

const supportingServices = [
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Modern, fast, professional websites for businesses that need a proper online presence.',
    paragraphs: [
      "A poorly built website reflects poorly on a business. If your current site is slow, hard to update, or doesn't generate enquiries, that's a fixable problem.",
      "We build websites that are fast, accessible and built on solid technology, designed to look professional, perform well on all devices, and give you something you're proud to send prospects to.",
      'Web development projects follow the same discovery process as automation work: a written brief, a fixed price, and a clear delivery timeline.',
    ],
    cta: { label: 'Discuss a website project', href: '/contact?service=website' },
  },
  {
    id: 'apps',
    title: 'Web & Mobile App Development',
    subtitle: 'Practical apps, portals and dashboards, built for the people who use them every day.',
    paragraphs: [
      "Sometimes a website isn't enough. If your business needs a client portal, a booking system, a management dashboard, or an ordering tool, we can build that.",
      'We focus on progressive web apps and mobile-friendly web applications rather than native iOS and Android development. For most businesses and organisations, this delivers a far better return on investment: it works on every device, is easier to maintain and is significantly cheaper to build.',
      "If a native mobile app is genuinely the right solution, we'll say so clearly rather than taking on work that isn't the right fit.",
    ],
    cta: { label: 'Discuss an app or portal project', href: '/contact?service=app' },
  },
  {
    id: 'software',
    title: 'Custom Software & Integrations',
    subtitle: 'Bespoke tools built around exactly how your business works.',
    paragraphs: [
      "If your business has outgrown its spreadsheets but isn't ready to implement an enterprise system, there's usually a better option in between: purpose-built software that does exactly what you need and nothing else.",
      'We build internal dashboards, CRM extensions, API integrations, and lightweight internal tools for businesses that need something specific. The scope is always agreed in writing before any development starts.',
      "Every custom build includes documentation and a handover, so you're not left dependent on us to keep things running.",
    ],
    cta: { label: 'Discuss a software integration', href: '/contact?service=software' },
  },
]

const automationCta = (
  <Button href="/contact?service=automation" size="md" className="w-full sm:w-auto">
    Discuss an automation project
  </Button>
)

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Practical systems that make your business run better."
        intro="AI automation is the work we do most of. Web development, apps and custom software are available alongside it, with the same discovery process and the same fixed pricing."
      >
        <nav aria-label="Services on this page" className="mt-10 max-w-3xl">
          <ul className="border-t border-white/20">
            {contents.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className="index-row group flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3 focus-visible:outline-offset-0"
                >
                  <span className="index-row-label text-lg font-semibold text-white group-hover:text-accent-on-dark">
                    {item.title}
                  </span>
                  <span className={`text-sm ${i === 0 ? 'font-semibold text-accent-on-dark' : 'text-white/60'}`}>
                    {item.note}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {/* ── AI Automation: the primary service, on a glass panel with a purple edge ── */}
      <section
        id="automation"
        aria-labelledby="automation-heading"
        className="glow scroll-mt-4 border-t border-white/10 bg-pitch py-14 sm:py-16 lg:py-20"
      >
        <Container>
          <Reveal>
            <div className="panel relative overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-14">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent-on-dark to-transparent" />
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
                {/* Left: what it is and how we work */}
                <div>
                  <p className="text-sm font-semibold text-accent-on-dark">Primary service</p>
                  <h2
                    id="automation-heading"
                    className="mt-3 text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white"
                  >
                    AI Automation & Workflow Systems
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/70">
                    Automations that connect your existing systems and remove repetitive admin.
                  </p>
                  <p className="mt-8 rounded-r-lg border-l-2 border-accent bg-accent/10 py-4 pl-5 pr-4 text-lg sm:text-xl font-medium leading-snug text-white">
                    We start with the tools you already have, and only recommend something new when it earns its place.
                  </p>

                </div>

                {/* Right: common automation projects, as ruled groups */}
                <div>
                  <h3 className="text-base font-semibold text-white">Common automation projects</h3>
                  <div className="mt-3 grid gap-x-8 sm:grid-cols-3 lg:grid-cols-1">
                    {automationGroups.map((group, i) => (
                      <Reveal
                        key={group.title}
                        delay={i * 80}
                        className="border-t border-white/15 pt-4 pb-6 lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-6 lg:py-5"
                      >
                        <h4 className="text-[0.9375rem] font-semibold text-accent-on-dark">{group.title}</h4>
                        <ul className="mt-3 space-y-2.5 lg:mt-0">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-white/75">
                              <span className="mt-[0.55rem] h-[2px] w-2.5 flex-shrink-0 rounded-full bg-accent-on-dark" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>

              {/* How we approach it: a full-width row of three, then the call to action. */}
              <div className="mt-10 lg:mt-12">
                <h3 className="text-base font-semibold text-white">How we approach it</h3>
                <ul className="mt-3 grid gap-x-8 md:grid-cols-3">
                  {approach.map((point, i) => (
                    <Reveal
                      as="li"
                      key={point.title}
                      delay={i * 80}
                      className="flex items-start gap-3.5 border-t border-white/15 py-4 leading-relaxed md:pb-0"
                    >
                      <ApprovalMark outline className="w-5 h-5 mt-0.5 text-accent-on-dark" />
                      <p className="text-white/70">
                        <span className="font-semibold text-white">{point.title}</span> {point.text}
                      </p>
                    </Reveal>
                  ))}
                </ul>
                <div className="mt-8 md:mt-10">{automationCta}</div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Supporting services: ruled report rows on a light section ── */}
      <section aria-label="Supporting services" className="tone-light bg-paper text-ink py-6 sm:py-8 lg:py-10">
        <Container>
          {supportingServices.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-heading`}
              className={`scroll-mt-4 grid gap-6 py-10 md:py-14 lg:grid-cols-[11rem_minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12 ${
                i > 0 ? 'border-t border-rule' : ''
              }`}
            >
              <Reveal variant="fade">
                <p className="text-sm font-semibold text-accent lg:pt-3 lg:border-t-2 lg:border-accent">Supporting service</p>
              </Reveal>
              <Reveal>
                <h2
                  id={`${service.id}-heading`}
                  className="text-[1.75rem] sm:text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink"
                >
                  {service.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">{service.subtitle}</p>
              </Reveal>
              <Reveal delay={80}>
                <div className="space-y-4 leading-relaxed text-ink-muted">
                  {service.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href={service.cta.href} variant="secondary" className="w-full sm:w-auto">
                    {service.cta.label}
                  </Button>
                </div>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        text="Start with a free discovery call and we'll work it out together."
      />
    </>
  )
}
