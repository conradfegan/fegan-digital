type Status = 'live' | 'building'

interface StatusBadgeProps {
  status: Status
  children: React.ReactNode
}

/**
 * Project status mark. "live" is a solid purple stamp with a tick (work that
 * is signed off and in use); "building" is a dashed purple outline with a
 * slow pulse, for use on dark surfaces.
 */
export default function StatusBadge({ status, children }: StatusBadgeProps) {
  if (status === 'live') {
    return (
      <span className="inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent pl-1.5 pr-3 py-1 text-xs font-semibold text-white shadow-[0_6px_18px_-8px_rgba(102,51,255,0.9)]">
        <svg viewBox="0 0 16 16" aria-hidden="true" className="w-3.5 h-3.5">
          <path d="M4 8.4l2.4 2.3L12 5.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {children}
      </span>
    )
  }

  return (
    <span className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-dashed border-accent-on-dark/70 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-on-dark">
      <span className="relative flex w-2 h-2" aria-hidden="true">
        <span className="badge-pulse absolute inset-0 rounded-full bg-accent-on-dark" />
        <span className="relative w-2 h-2 rounded-full bg-accent-on-dark" />
      </span>
      {children}
    </span>
  )
}
