import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    /*
     * Dark header — intentionally matches the hero section below it so the
     * top of the page reads as one unified dark zone. The white+purple
     * wordmark and soft-white nav links sit cleanly against the near-black.
     */
    <header className="relative bg-pitch z-20">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — white + purple wordmark (1576×408px intrinsic) */}
          <Link
            href="/"
            aria-label="Fegan Digital — home"
            className="inline-flex transition-opacity duration-200 hover:opacity-85"
          >
            <Image
              src="/brand/fegan-digital-wordmark-white-purple.png"
              alt="Fegan Digital"
              width={1576}
              height={408}
              className="h-8 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — client component for active-page underline */}
          <DesktopNav />

          {/* Mobile menu — client component */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
