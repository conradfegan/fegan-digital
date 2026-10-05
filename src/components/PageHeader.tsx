import Container from './Container'
import Reveal from './Reveal'

interface PageHeaderProps {
  label: string
  title: string
  intro?: string
}

/** Dark header band used at the top of every inner page. Holds the page's only h1. */
export default function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <section className="bg-pitch text-white pt-12 pb-20 md:pt-16 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal delay={0}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
              {label}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white text-balance">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}
