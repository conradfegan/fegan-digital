interface TestimonialProps {
  quote: string
  name: string
  role: string
  className?: string
}

/** Client quote with a purple quotation mark and clear attribution. */
export default function Testimonial({ quote, name, role, className = '' }: TestimonialProps) {
  return (
    <figure
      className={`relative rounded-r-lg border-l-2 border-accent bg-surface-alt pl-6 pr-5 py-5 sm:pl-7 sm:pr-6 sm:py-6 ${className}`}
    >
      <svg
        width="28"
        height="22"
        viewBox="0 0 28 22"
        fill="currentColor"
        aria-hidden="true"
        className="text-accent mb-3"
      >
        <path d="M0 22V13.2C0 9.47 .87 6.47 2.6 4.2 4.37 1.93 6.97.53 10.4 0l1.2 2.8C9.6 3.4 8.13 4.43 7.2 5.9c-.93 1.43-1.4 3.03-1.4 4.8H11V22H0Zm16.4 0V13.2c0-3.73.87-6.73 2.6-9 1.77-2.27 4.37-3.67 7.8-4.2L28 2.8c-2 .6-3.47 1.63-4.4 3.1-.93 1.43-1.4 3.03-1.4 4.8H27.4V22H16.4Z" />
      </svg>
      <blockquote className="text-ink text-base leading-relaxed">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="block font-semibold text-ink">{name}</span>
        <span className="block text-ink-muted">{role}</span>
      </figcaption>
    </figure>
  )
}
