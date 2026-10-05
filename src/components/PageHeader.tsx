import { ReactNode } from 'react'
import Container from './Container'
import Reveal from './Reveal'

interface PageHeaderProps {
  label: string
  title: string
  intro?: string
  children?: ReactNode
}

/** The dark cover of each inner page: margin note, the page's only h1, an optional intro. */
export default function PageHeader({ label, title, intro, children }: PageHeaderProps) {
  return (
    <section className="glow glow-drift relative overflow-hidden bg-pitch text-white">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <Container className="pt-12 pb-16 sm:pt-16 md:pt-20 md:pb-20 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <Reveal variant="fade">
              <p className="text-sm font-semibold text-accent-on-dark lg:pt-3 lg:border-t-2 lg:border-accent">
                {label}
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal delay={60}>
              <h1 className="text-[2.625rem] sm:text-6xl lg:text-[4.5rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white max-w-4xl">
                {title}
              </h1>
            </Reveal>
            {intro && (
              <Reveal delay={160}>
                <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70">{intro}</p>
              </Reveal>
            )}
            {children && <Reveal delay={240}>{children}</Reveal>}
          </div>
        </div>
      </Container>
    </section>
  )
}
