interface TestimonialProps {
  quote: string
  name: string
  role: string
  /** "lg" for a featured pull quote, "md" for quotes set side by side. */
  size?: 'md' | 'lg'
  /** The surface the quote sits on. */
  tone?: 'light' | 'dark'
  className?: string
}

/** A client quote set as a signed statement: the words, a purple signature rule, then who said it. */
export default function Testimonial({ quote, name, role, size = 'md', tone = 'light', className = '' }: TestimonialProps) {
  const light = tone === 'light'
  const quoteSize =
    size === 'lg'
      ? 'text-[1.3125rem] sm:text-2xl leading-[1.45]'
      : 'text-lg sm:text-[1.1875rem] leading-[1.55]'

  return (
    <figure className={className}>
      <svg viewBox="0 0 32 24" aria-hidden="true" className={`w-8 h-6 mb-4 ${light ? 'text-accent' : 'text-accent-on-dark'}`}>
        <path
          fill="currentColor"
          d="M0 24V14.4C0 10.3 1 7 3 4.6 5 2.2 7.9.7 11.6 0l1.3 3.1C10.7 3.7 9.1 4.8 8.1 6.4c-1 1.5-1.5 3.3-1.5 5.2h5.8V24H0Zm18.9 0V14.4c0-4.1 1-7.4 3-9.8C23.9 2.2 26.8.7 30.5 0l1.3 3.1c-2.2.6-3.8 1.7-4.8 3.3-1 1.5-1.5 3.3-1.5 5.2h5.8V24H18.9Z"
        />
      </svg>
      <blockquote className={`font-medium tracking-[-0.01em] ${light ? 'text-ink' : 'text-white'} ${quoteSize}`}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 flex items-start gap-4">
        <span aria-hidden="true" className="mt-3 h-0.5 w-10 flex-shrink-0 rounded-full bg-accent" />
        <span className="text-sm leading-snug">
          <span className={`block font-semibold ${light ? 'text-ink' : 'text-white'}`}>{name}</span>
          <span className={`block ${light ? 'text-ink-muted' : 'text-white/65'}`}>{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
