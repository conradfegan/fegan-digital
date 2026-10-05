import Container from '@/components/Container'
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader
        label="404"
        title="Page not found."
        intro="The page you were looking for doesn't exist or may have moved."
      />

      {/* Body */}
      <section className="border-t border-white/10 bg-pitch py-14 sm:py-16">
        <Container>
          <div className="max-w-lg lg:ml-[calc(11rem+3rem)]">
            <p className="text-white/70 leading-relaxed mb-8">
              Try heading back to the homepage, or get in touch if you think something is broken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/">
                Back to homepage
              </Button>
              <Button href="/contact" variant="outline-light">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
