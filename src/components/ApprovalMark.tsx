interface ApprovalMarkProps {
  className?: string
  /** Outline only, drawn in the current text colour (set text-accent or text-accent-on-dark). */
  outline?: boolean
}

/** The purple tick that stands for "agreed" across the site. Decorative. */
export default function ApprovalMark({ className = 'w-5 h-5', outline = false }: ApprovalMarkProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`flex-shrink-0 ${className}`}>
      {outline ? (
        <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <circle cx="10" cy="10" r="10" fill="var(--brand-accent)" />
      )}
      <path
        d="M6 10.4l2.6 2.5L14 7.4"
        fill="none"
        stroke={outline ? 'currentColor' : '#ffffff'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
