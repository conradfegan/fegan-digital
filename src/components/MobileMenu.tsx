'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/config'

const DRAWER_DURATION = 360

type Mode = 'closed' | 'opening' | 'open' | 'closing'

export default function MobileMenu() {
  // Single state machine: closed → opening → open → closing → closed.
  // The intermediate "opening" frame lets CSS pick up the transition before
  // we flip to "open" — guarantees the slide animation plays both directions.
  const [mode, setMode] = useState<Mode>('closed')

  const isMounted = mode !== 'closed'
  const isOpen = mode === 'opening' || mode === 'open'
  const animState: 'open' | 'closed' = mode === 'open' ? 'open' : 'closed'

  const open = () => setMode('opening')
  const close = () => {
    setMode((m) => (m === 'opening' || m === 'open' ? 'closing' : m))
  }
  const toggle = () => (isOpen ? close() : open())

  // Drive mode transitions. setMode here always lives inside a callback
  // (rAF or setTimeout), never directly in the effect body.
  useEffect(() => {
    if (mode === 'opening') {
      let raf2 = 0
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setMode('open'))
      })
      return () => {
        cancelAnimationFrame(raf1)
        if (raf2) cancelAnimationFrame(raf2)
      }
    }
    if (mode === 'closing') {
      const t = setTimeout(() => setMode('closed'), DRAWER_DURATION)
      return () => clearTimeout(t)
    }
    return undefined
  }, [mode])

  // Lock body scroll only while the drawer is mounted.
  useEffect(() => {
    if (!isMounted) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isMounted])

  // Close on Escape.
  useEffect(() => {
    if (!isMounted) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isMounted])

  return (
    <div className="md:hidden">
      {/* Hamburger — three lines that morph into an X when open */}
      <button
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={toggle}
        data-state={isOpen ? 'open' : 'closed'}
        className="hamburger relative inline-flex flex-col justify-center items-center w-11 h-11 rounded-md text-white/75 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <span className="hamburger-line" />
        <span className="hamburger-line my-1.5" />
        <span className="hamburger-line" />
      </button>

      {isMounted && (
        <>
          {/* Backdrop */}
          <div
            className="mobile-backdrop fixed inset-0 bg-black/45 z-30"
            data-state={animState}
            aria-hidden="true"
            onClick={close}
          />

          {/* Drawer */}
          <nav
            id="mobile-nav"
            data-state={animState}
            className="mobile-drawer fixed top-0 right-0 bottom-0 w-72 bg-pitch z-40 shadow-2xl flex flex-col p-8 pt-20"
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={close}
              className="absolute top-5 right-5 p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            </button>

            {/* Logo in drawer */}
            <div
              className="mobile-drawer-link mb-8"
              style={{ ['--drawer-link-delay' as string]: '60ms' }}
            >
              <Link href="/" onClick={close} aria-label="Fegan Digital — home">
                <Image
                  src="/brand/fegan-digital-wordmark-white-purple.png"
                  alt="Fegan Digital"
                  width={1576}
                  height={408}
                  className="h-7 w-auto"
                />
              </Link>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((link, i) => (
                <li
                  key={link.href}
                  className="mobile-drawer-link"
                  style={{ ['--drawer-link-delay' as string]: `${120 + i * 60}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block py-3 px-2 text-base font-medium text-white/80 hover:text-white transition-colors border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="mobile-drawer-link mt-8"
              style={{
                ['--drawer-link-delay' as string]: `${120 + siteConfig.nav.length * 60 + 40}ms`,
              }}
            >
              <Link
                href="/contact"
                onClick={close}
                className="btn-motion btn-motion-primary block w-full text-center bg-accent text-white font-medium py-3 px-6 rounded-md hover:bg-accent-hover"
              >
                {siteConfig.ctaText}
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}
