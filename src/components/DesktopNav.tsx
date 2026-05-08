'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/config'

export default function DesktopNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
      {siteConfig.nav.map((link) => {
        const active = isActive(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={`nav-link text-sm font-medium ${
              active ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
      <Link
        href="/contact"
        className="btn-motion btn-motion-primary inline-flex items-center justify-center bg-accent text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-pitch"
      >
        {siteConfig.ctaText}
      </Link>
    </nav>
  )
}
