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

/** Purple closing call to action used at the foot of each page. */
export default function CtaBand({
  title,
  text,
  buttonText = siteConfig.ctaText,
  href = '/contact',
}: CtaBandProps) {
  return (
    <section className="bg-accent py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">{text}</p>
          <div className="mt-10">
            <Button href={href} size="lg" variant="light">
              {buttonText}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
