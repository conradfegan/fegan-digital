import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline-light' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

/* primary: purple, for the main action anywhere.
   secondary: ink outline, for light surfaces.
   outline-light: white outline, for dark surfaces.
   light: white fill, for the purple band. */
const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent-on-dark btn-motion btn-motion-primary',
  secondary:
    'bg-transparent text-ink border border-ink/70 hover:border-accent hover:text-accent focus-visible:ring-accent btn-motion',
  'outline-light':
    'bg-white/[0.03] text-white border border-white/30 hover:bg-white/10 hover:border-accent-on-dark focus-visible:ring-white btn-motion btn-motion-light',
  light:
    'bg-white text-accent hover:bg-accent-light focus-visible:ring-white btn-motion btn-motion-light',
}

const sizeClasses: Record<Size, string> = {
  sm: 'min-h-11 px-4 py-2 text-sm',
  md: 'min-h-12 px-6 py-3 text-base',
  lg: 'min-h-14 px-7 py-4 text-base sm:px-8 sm:text-[1.0625rem]',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-md font-sans font-semibold text-center',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    'disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
