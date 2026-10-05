import type { Metadata } from 'next'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import { siteConfig } from '@/lib/config'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  socialTitle: 'Privacy Policy | Fegan Digital | AI Automation & Digital Systems | Newry',
  description:
    'How Fegan Digital handles personal information collected from website enquiries and client work. A plain-English summary of what we collect, why, and your rights.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Privacy"
        title="How we handle your information."
        intro="A short, plain-English summary of what we collect, why, and what you can ask us to do with it."
      />

      {/* ── Body ── */}
      <section className="tone-light bg-paper text-ink py-16 sm:py-20">
        <Container>
          <div className="max-w-[42rem] space-y-10 text-lg text-ink-muted leading-relaxed lg:ml-[calc(11rem+3rem)]">

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-3 pt-6 border-t border-rule">Who we are</h2>
              <p>
                {siteConfig.name} is a digital consultancy founded by {siteConfig.founderName}, based in {siteConfig.location}, Northern Ireland. You can reach us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="link-mark text-ink hover:text-accent">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-3 pt-6 border-t border-rule">What we collect</h2>
              <p className="mb-3">
                When you submit the contact form or email us directly, we receive the details you provide: typically your name, email address, business name, and a description of what you&apos;re looking for help with.
              </p>
              <p>
                During paid client work, we may also handle business information you share with us as part of discovery and delivery (for example, details of your existing systems, processes, and data).
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-3 pt-6 border-t border-rule">Why we use it</h2>
              <p>
                We use this information for one purpose: to respond to your enquiry and, if you become a client, to deliver the work you&apos;ve asked us to do. We do not use it for marketing lists, profiling, or any other secondary purpose without your explicit agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-3 pt-6 border-t border-rule">Who we share it with</h2>
              <p>
                We do not sell your information. We do not share it with third parties except where strictly necessary to deliver a service you&apos;ve agreed to (for example, a hosting provider or email tool that we use to run our business), and only ever the minimum required.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-3 pt-6 border-t border-rule">Your rights</h2>
              <p>
                You can ask us at any time to:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li>Tell you what information we hold about you.</li>
                <li>Correct anything that is wrong.</li>
                <li>Delete your information, where we are not legally required to keep it.</li>
              </ul>
              <p className="mt-3">
                To make a request, email{' '}
                <a href={`mailto:${siteConfig.email}`} className="link-mark text-ink hover:text-accent">
                  {siteConfig.email}
                </a>
                . We&apos;ll respond within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-3 pt-6 border-t border-rule">Updates to this page</h2>
              <p>
                This is a simple, plain-English summary. As Fegan Digital grows, we may publish a more formal privacy policy. If we make material changes, we will update this page.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}
