import Container from './Container'
import Button from './Button'
import Reveal from './Reveal'
import { siteConfig } from '@/lib/config'

interface CtaBandProps {
  title: string
  text: string
  buttonText?: string
  href?: string
}

/** The purple closing band, as on the original site, in the new two-column layout. */
export default function CtaBand({
  title,
  text,
  buttonText = siteConfig.ctaText,
  href = '/contact',
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-accent text-white">
      {/* Soft light and shade inside the band. Decorative. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 80% at 85% 0%, rgba(255,255,255,0.18), transparent 70%), radial-gradient(40% 70% at 0% 100%, rgba(13,13,12,0.28), transparent 70%)',
        }}
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:items-end">
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-white">
            {title}
          </h2>
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">{text}</p>
            <div className="mt-7">
              <Button href={href} size="lg" variant="light" className="w-full sm:w-auto">
                {buttonText}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
