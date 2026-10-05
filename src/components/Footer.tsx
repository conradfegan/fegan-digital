import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import Reveal from './Reveal'
import LinkedInLink from './LinkedInLink'
import { siteConfig } from '@/lib/config'

const footerNav = [
  {
    heading: 'Services',
    links: [
      { label: 'AI Automation & Workflow', href: '/services#automation' },
      { label: 'Web Development', href: '/services#web' },
      { label: 'Web & Mobile Apps', href: '/services#apps' },
      { label: 'Custom Software', href: '/services#software' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-pitch text-white/75 border-t border-white/10">
      {/* A thin purple rule across the top of the footer. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
      <Container>
        <Reveal as="div" className="py-14 md:py-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2">
            <Link
              href="/"
              aria-label="Fegan Digital home"
              className="inline-flex transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/brand/fegan-digital-wordmark-white-purple.png"
                alt="Fegan Digital"
                width={1576}
                height={408}
                className="h-8 w-auto mb-5"
              />
            </Link>
            <p className="text-base text-white/80 leading-snug max-w-xs">
              Modern systems for growing businesses
            </p>
            <p className="mt-4 text-sm text-white/65">Based in {siteConfig.location}.</p>
            <div className="mt-1 flex items-center gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-soft inline-flex min-h-11 items-center text-sm text-white/75 hover:text-white"
              >
                {siteConfig.email}
              </a>
              <LinkedInLink className="inline-flex w-11 h-11 items-center justify-center rounded-md text-white/75 transition-colors hover:text-accent-on-dark hover:bg-white/10" />
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((group) => (
            <div key={group.heading}>
              <h2 className="text-sm font-semibold text-accent-on-dark mb-2">{group.heading}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-soft inline-flex min-h-11 items-center text-sm text-white/70 hover:text-white md:min-h-9"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Serving {siteConfig.serviceArea}</p>
        </div>
      </Container>
    </footer>
  )
}
