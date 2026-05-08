import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import Reveal from './Reveal'
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
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-pitch text-white/80">
      <Container>
        <Reveal as="div" className="py-14 grid md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label="Fegan Digital — home"
              className="inline-flex transition-opacity duration-200 hover:opacity-85"
            >
              {/* Plain white wordmark — subdued and clean on the dark footer */}
              <Image
                src="/brand/fegan-digital-wordmark-white.png"
                alt="Fegan Digital"
                width={1576}
                height={408}
                className="h-7 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Modern systems for growing businesses
            </p>
            <p className="mt-4 text-sm text-white/50">
              Based in {siteConfig.location}.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-soft mt-1 inline-block text-sm text-white/60 hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Nav columns */}
          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-soft text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Serving {siteConfig.serviceArea}</p>
        </div>
      </Container>
    </footer>
  )
}
