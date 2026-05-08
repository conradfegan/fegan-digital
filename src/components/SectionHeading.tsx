interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
            light ? 'text-white/50' : 'text-ink-muted'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-semibold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-ink-muted'
          } ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
