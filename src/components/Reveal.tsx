'use client'

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

type RevealTag = 'div' | 'section' | 'article' | 'li' | 'ul' | 'span' | 'header' | 'footer' | 'aside'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms before this element animates in. */
  delay?: number
  /** Element to render. Defaults to <div>. */
  as?: RevealTag
  className?: string
  style?: CSSProperties
  /** Drop the upward translate and only fade. Useful for large hero blocks. */
  variant?: 'rise' | 'fade'
  /** IntersectionObserver threshold. Default 0.15. */
  threshold?: number
  /** IntersectionObserver rootMargin. Default brings reveals in slightly before edge. */
  rootMargin?: string
}

export default function Reveal({
  children,
  delay = 0,
  as,
  className = '',
  style,
  variant = 'rise',
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
}: RevealProps) {
  // Polymorphic `as` over a union of intrinsic tags makes the JSX prop type
  // an intersection of every tag's props, which TS cannot represent. The
  // runtime contract is fine — render through `any`-typed Tag.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: ElementType = (as ?? 'div') as any
  const ref = useRef<HTMLElement | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const noObserver = typeof IntersectionObserver === 'undefined'

    if (reduce || noObserver) {
      // Fall back: reveal immediately on the next frame so the initial paint
      // still shows the static content. Using rAF (a callback) keeps this
      // out of the effect body itself.
      const id = requestAnimationFrame(() => setRevealed(true))
      return () => cancelAnimationFrame(id)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold, rootMargin },
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-reveal-variant={variant}
      data-revealed={revealed ? 'true' : undefined}
      className={className}
      style={
        delay
          ? ({ ['--reveal-delay' as string]: `${delay}ms`, ...style } as CSSProperties)
          : style
      }
    >
      {children}
    </Tag>
  )
}
