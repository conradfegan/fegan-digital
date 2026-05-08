import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Fegan Digital is founder-led by Conrad Fegan, based in Newry. Practical AI automation and digital systems for businesses in Ireland and the UK.',
}

const values = [
  {
    title: 'Plain English, always',
    description:
      'We explain what we recommend and why in terms that make sense for your business — not technical jargon designed to make you feel dependent.',
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
      'When you work with Fegan Digital, you work directly with Conrad — from first call to final delivery. No handoffs to junior staff or offshore teams.',
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
      {/* ── Page header ── */}
      <section className="bg-pitch text-white pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                About
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
                Founder-led from start to finish.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Fegan Digital was built to give small businesses access to the kind of practical digital systems that used to be reserved for companies with large IT departments.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Founder section ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Photo */}
            <Reveal className="rounded-lg overflow-hidden bg-surface-alt border border-border w-4/5 mx-auto md:mx-0">
              <Image
                src="/images/conrad-fegan.jpg"
                alt="Conrad Fegan, founder of Fegan Digital"
                width={480}
                height={600}
                className="w-full object-cover"
                priority
              />
            </Reveal>

            {/* Bio */}
            <Reveal delay={120}>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-4">
                Conrad Fegan — Founder
              </p>
              <div className="space-y-5 text-ink-muted leading-relaxed">
                <p className="text-ink font-medium text-lg leading-relaxed">
                  I founded Fegan Digital because I kept seeing the same pattern: businesses losing significant time and money to manual admin, with no straightforward path to fixing it.
                </p>
                <p>
                  The tools to solve these problems exist. But implementing them properly — in a way that actually fits how a real business works — requires time and expertise that most SMEs don&apos;t have in-house. That&apos;s the gap Fegan Digital fills.
                </p>
                <p>
                  I&apos;m based in Newry and work with businesses across Ireland and the UK. I started Fegan Digital to bring modern automation tooling — the kind larger companies have used for years — to small and growing businesses, with a clear written process and no unnecessary consultancy jargon.
                </p>
                <p>
                  Our approach starts on site. Before any recommendations are made, we spend time with your team — watching how the business actually runs, not how it&apos;s supposed to run on paper. That&apos;s how we find the real problems worth solving.
                </p>
                <p>
                  Every project ends with the same things: something that works, documentation you can follow, and the confidence to know what was built and why.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

      {/* ── Values / How we work ── */}
      <section className="bg-surface-alt py-20 md:py-28 border-y border-border">
        <Container>
          <Reveal>
            <SectionHeading
              label="How we work"
              title="What working with Fegan Digital looks like."
              subtitle="These aren't aspirational values. They're how every project actually runs."
            />
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 70}
                className="card-motion card-motion-light rounded-lg bg-white border border-border p-6"
              >
                <h3 className="font-semibold text-ink mb-2 text-sm">{v.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{v.description}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Service area ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeading
                label="Based in Newry"
                title="Serving Ireland and the UK."
              />
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  We&apos;re based in Newry, which puts us within easy reach of businesses across the island of Ireland and a short journey from much of the rest of the UK.
                </p>
                <p>
                  For clients across Ireland, the discovery visit is in person — half a day on site, sitting with your team. For clients further afield in the UK, that visit can be done remotely or as a hybrid, depending on the scale of the project.
                </p>
                <p>
                  All other communication — calls, progress updates, delivery — works well remotely regardless of where you are.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140} className="rounded-lg border border-border bg-surface-alt p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-5">
                In brief
              </h3>
              <dl className="space-y-4">
                {[
                  ['Based in', 'Newry, Northern Ireland'],
                  ['Service area', 'Ireland and the UK'],
                  ['Discovery visits', 'In person across Ireland; remote or hybrid for the UK'],
                  ['Communication', 'Remote-friendly throughout'],
                  ['Founder', 'Conrad Fegan'],
                  ['Contact', siteConfig.email],
                ].map(([term, detail]) => (
                  <div key={term} className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 text-sm gap-0.5">
                    <dt className="text-ink-subtle font-medium">{term}</dt>
                    <dd className="text-ink">{detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent py-16 md:py-20">
        <Container>
          <Reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
                Want to find out if we can help?
              </h2>
              <p className="mt-2 text-white/60">
                Start with a free 30-minute call. No commitment required.
              </p>
            </div>
            <Button href="/contact" size="lg" variant="outline-light" className="flex-shrink-0">
              {siteConfig.ctaText}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
