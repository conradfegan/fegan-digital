import Image from 'next/image'

/*
 * The client logos as supplied, unaltered. Both files are SVGs with an
 * embedded image, so they are served as-is (unoptimized) to keep them exact.
 *
 * Health Matters has charcoal lettering on a transparent background, so it
 * only reads on a light surface; on dark sections it sits on a white plate.
 * Its canvas also carries generous transparent padding, which is cropped
 * visually here (the file itself is untouched) using the artwork's measured
 * bounds: x 128–1415, y 177–946 of a 1536 × 1024 canvas.
 */
const logos = {
  'health-matters': {
    src: '/client-logos/health-matters-logo.svg',
    alt: 'Health Matters Occupational Health logo',
    width: 1536,
    height: 1024,
    crop: { x: 128, y: 177, w: 1287, h: 769 },
  },
} as const

export type ClientLogoName = keyof typeof logos

interface ClientLogoProps {
  name: ClientLogoName
  /** Rendered height of the visible artwork in px; width follows the aspect ratio. */
  height: number
  /** Put the logo on a white plate (needed on dark surfaces). */
  plate?: boolean
  /** Plate padding: "sm" for small list thumbnails, "md" otherwise. */
  plateSize?: 'sm' | 'md'
  className?: string
}

export default function ClientLogo({ name, height, plate = false, plateSize = 'md', className = '' }: ClientLogoProps) {
  const logo = logos[name]
  const { crop } = logo
  const width = Math.round((height * crop.w) / crop.h)
  // Scale the full canvas so the cropped artwork fills exactly width × height.
  const scale = height / crop.h

  const artwork = (
    <span
      className="relative block overflow-hidden"
      style={{ width, height }}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        unoptimized
        className="absolute max-w-none"
        style={{
          width: logo.width * scale,
          height: logo.height * scale,
          left: -crop.x * scale,
          top: -crop.y * scale,
        }}
      />
    </span>
  )

  if (!plate) {
    return <span className={`inline-block ${className}`}>{artwork}</span>
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-white ${plateSize === 'sm' ? 'p-2' : 'p-3'} shadow-[0_10px_30px_-18px_rgba(102,51,255,0.6)] ring-1 ring-white/10 ${className}`}
    >
      {artwork}
    </span>
  )
}
