import Container from '@/components/Container'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <>
      {/* Dark header section — matches other page headers */}
      <section className="bg-pitch text-white pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              404
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-5">
              Page not found.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              The page you were looking for doesn&apos;t exist or may have moved.
            </p>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-lg">
            <p className="text-ink-muted leading-relaxed mb-8">
              Try heading back to the homepage, or get in touch if you think something is broken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/">
                Back to homepage
              </Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
