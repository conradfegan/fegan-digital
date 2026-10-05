interface StatusBadgeProps {
  children: React.ReactNode
}

/** Small brand-purple pill, e.g. "Currently building". */
export default function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
      <span className="relative flex w-2 h-2" aria-hidden="true">
        <span className="badge-pulse absolute inset-0 rounded-full bg-accent" />
        <span className="relative w-2 h-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  )
}
