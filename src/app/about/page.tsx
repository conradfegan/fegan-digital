import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'
import LinkedInLink from '@/components/LinkedInLink'
import Button from '@/components/Button'
import DocSection from '@/components/DocSection'
import Reveal from '@/components/Reveal'
import { siteConfig } from '@/lib/config'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  socialTitle: 'About Us | Fegan Digital | AI Automation & Digital Systems | Newry',
  description:
    'Fegan Digital is founder-led by Conrad Arthurs-Fegan, based in Newry. AI automation and digital systems built for businesses and organisations across Ireland and the UK, from first call to final delivery.',
  path: '/about',
})

const inBrief = [
  ['Based in', 'Newry, Northern Ireland'],
  ['Service area', 'Ireland and the UK'],
  ['Discovery visits', 'In person across Ireland; remote or hybrid for the UK'],
  ['Communication', 'Remote-friendly throughout'],
  ['Founder', siteConfig.founderName],
  ['Contact', siteConfig.email],
] as const

const values = [
  {
    title: 'Plain English, always',
    description:
      'We explain what we recommend and why in terms that make sense for your business, not technical jargon designed to make you feel dependent.',
  },
  {
    title: 'Written before any build',
    description:
      'You get a written recommendations document with specific opportunities, time and revenue estimates, and fixed prices. Nothing is committed until you say yes.',
  },
  {
    title: 'Fixed-price delivery',
    description:
      "Quotes are fixed. If a project takes longer than expected, that's our problem, not yours. No surprise invoices.",
  },
  {
    title: 'Founder-led throughout',
    description:
      'When you work with Fegan Digital, you work directly with Conrad from first call to final delivery. No handoffs to junior staff or offshore teams.',
  },
  {
    title: 'GDPR-conscious by default',
    description:
      "Data privacy is built into every project from the start. We don't treat it as an afterthought or a compliance box to tick.",
  },
  {
    title: 'Solving real problems',
    description:
      "We're not here to sell technology for the sake of it. If automation won't meaningfully help your business, we'll say so clearly.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Founder-led from start to finish."
        intro="Fegan Digital was built to give businesses and organisations access to the kind of practical digital systems that used to be reserved for companies with large IT departments."
      />

      {/* ── Founder: a letter beside a framed print, on a light section ── */}
      <section className="tone-light bg-paper text-ink py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-14 lg:gap-20 md:items-start">
            <Reveal as="div" className="md:sticky md:top-8">
            <figure className="max-w-[17rem] sm:max-w-sm">
              <div className="rounded-xl bg-sheet p-2.5 shadow-[0_24px_50px_-28px_rgba(102,51,255,0.55)] ring-1 ring-rule">
                <Image
                  src="/images/conrad-photo-black.jpeg"
                  alt="Conrad Arthurs-Fegan, founder of Fegan Digital"
                  width={640}
                  height={730}
                  sizes="(min-width: 768px) 384px, 272px"
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">Conrad Arthurs-Fegan, Founder</figcaption>
            </figure>
            </Reveal>

            <Reveal delay={100} className="max-w-[40rem]">
              <h2 className="text-sm font-semibold text-accent pt-3 border-t-2 border-accent">
                Conrad Arthurs-Fegan, Founder
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                <p className="text-[1.375rem] sm:text-[1.625rem] font-medium leading-[1.35] tracking-[-0.015em] text-ink">
                  I founded Fegan Digital because I kept seeing the same pattern: businesses losing significant time and money to manual admin, with no straightforward path to fixing it.
                </p>
                <p>
                  The tools to solve these problems exist. But implementing them properly, in a way that actually fits how a real business works, requires time and expertise that most businesses and organisations don&apos;t have in-house. That&apos;s the gap Fegan Digital fills, with a clear written process and no unnecessary consultancy jargon.
                </p>
                <p>
                  Our approach starts on site. Before any recommendations are made, we spend time with your team, watching how the business actually runs, not how it&apos;s supposed to run on paper. That&apos;s how we find the real problems worth solving.
                </p>
                <p>
                  Every project ends with the same things: something that works, documentation you can follow, and the confidence to know what was built and why.
                </p>
              </div>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button href="/contact">
                  {siteConfig.ctaText}
                </Button>
                <Button href="/services" variant="secondary">
                  See services
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── How we work: a ruled list, not cards ── */}
      <DocSection
        note="How we work"
        title="What working with Fegan Digital looks like."
        intro="These aren't aspirational values. They're how every project actually runs."
        glow
      >
        <ul className="mt-10 md:mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={(i % 3) * 80} className="group relative border-t border-white/15 pt-5 pb-8">
              <span
                aria-hidden="true"
                className="absolute left-0 -top-px h-0.5 w-10 bg-accent transition-all duration-500 group-hover:w-full"
              />
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{v.description}</p>
            </Reveal>
          ))}
        </ul>
      </DocSection>

      {/* ── Service area, with a fact sheet ── */}
      <DocSection tone="dark-raised" note="Based in Newry">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
              Serving Ireland and the UK.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-white/70">
              <p>
                We&apos;re based in Newry, which puts us within easy reach of businesses across the island of Ireland and a short journey from much of the rest of the UK.
              </p>
              <p>
                For clients across Ireland, the discovery visit is in person: half a day on site, sitting with your team. For clients further afield in the UK, that visit can be done remotely or as a hybrid, depending on the scale of the project.
              </p>
              <p>
                All other communication (calls, progress updates and delivery) works well remotely, wherever you are.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="sheet tone-light rounded-xl p-6 sm:p-8 self-start">
            <h3 className="text-base font-semibold text-ink">In brief</h3>
            <dl className="mt-4 border-t-2 border-accent">
              {inBrief.map(([term, detail]) => (
                <div key={term} className="grid gap-0.5 border-b border-rule py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="text-sm text-ink-muted">{term}</dt>
                  <dd className="text-[0.9375rem] text-ink break-words">{detail}</dd>
                </div>
              ))}
              <div className="grid gap-0.5 py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="text-sm text-ink-muted">LinkedIn</dt>
                <dd>
                  <LinkedInLink
                    label="Conrad Arthurs-Fegan"
                    className="link-soft -my-3 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-ink hover:text-accent"
                    iconClassName="w-4 h-4 text-accent"
                  />
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </DocSection>

      <CtaBand
        title="Want to find out if we can help?"
        text="Start with a free 30-minute call. No commitment required."
      />
    </>
  )
}
