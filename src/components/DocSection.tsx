import { ReactNode } from 'react'
import Container from './Container'
import Reveal from './Reveal'

interface DocSectionProps {
  /** Margin note naming the section, like a side heading in a report. */
  note?: string
  title?: string
  intro?: string
  children?: ReactNode
  id?: string
  /** Dark is the default; light is for sections that are mostly reading. */
  tone?: 'dark' | 'light' | 'dark-raised'
  /** Add the purple glow behind a dark section. */
  glow?: boolean
  className?: string
  bodyClassName?: string
}

const toneClasses = {
  dark: 'bg-pitch text-white',
  'dark-raised': 'bg-pitch-2 text-white',
  light: 'tone-light bg-paper text-ink',
}

/**
 * A report-style section: a short margin note on the left, the content on
 * the right. On small screens the note sits above the heading.
 */
export default function DocSection({
  note,
  title,
  intro,
  children,
  id,
  tone = 'dark',
  glow = false,
  className = '',
  bodyClassName = '',
}: DocSectionProps) {
  const light = tone === 'light'

  return (
    <section id={id} className={`${toneClasses[tone]} ${glow ? 'glow' : ''} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        <div className="grid gap-4 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <div>
            {note && (
              <Reveal variant="fade">
                <p
                  className={`text-sm font-semibold lg:pt-3 lg:border-t-2 lg:border-accent ${
                    light ? 'text-accent' : 'text-accent-on-dark'
                  }`}
                >
                  {note}
                </p>
              </Reveal>
            )}
          </div>
          <div className={bodyClassName}>
            {(title || intro) && (
              <Reveal>
                {title && (
                  <h2
                    className={`text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.03em] max-w-3xl ${
                      light ? 'text-ink' : 'text-white'
                    }`}
                  >
                    {title}
                  </h2>
                )}
                {intro && (
                  <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? 'text-ink-muted' : 'text-white/70'}`}>
                    {intro}
                  </p>
                )}
              </Reveal>
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  )
}
