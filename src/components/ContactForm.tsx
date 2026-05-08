'use client'

import { useRef, useState } from 'react'
import Button from './Button'

interface FormState {
  name: string
  email: string
  business: string
  projectType: string
  message: string
}

const initial: FormState = { name: '', email: '', business: '', projectType: 'Not sure yet', message: '' }

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgodljbb'

const PROJECT_TYPES = [
  'AI automation',
  'Website',
  'Web or mobile app',
  'Custom software / integration',
  'Not sure yet',
] as const

const SERVICE_MAP: Record<string, string> = {
  automation: 'AI automation',
  website: 'Website',
  app: 'Web or mobile app',
  software: 'Custom software / integration',
}

interface ContactFormProps {
  initialService?: string
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const initialProjectType = SERVICE_MAP[initialService ?? ''] ?? 'Not sure yet'
  const [form, setForm] = useState<FormState>({ ...initial, projectType: initialProjectType })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const honeypotRef = useRef<HTMLInputElement>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Honeypot — bots fill every field; real users never see this one
    if (honeypotRef.current?.value) return

    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          projectType: form.projectType,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initial)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="success-pop rounded-lg border border-border bg-white p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <polyline className="success-tick" points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-ink mb-2">Message received</h3>
        <p className="text-ink-muted">
          Thanks for getting in touch. We&apos;ll be back to you within one working day.
        </p>
      </div>
    )
  }

  const inputClasses =
    'input-motion block w-full rounded-md border border-border bg-white px-4 py-3 text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent'
  const labelClasses = 'block text-sm font-medium text-ink mb-1.5'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, attracts bots */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your name <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email address <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="jane@yourbusiness.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className={labelClasses}>
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          autoComplete="organization"
          value={form.business}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your Business Ltd"
        />
      </div>

      <div>
        <label htmlFor="projectType" className={labelClasses}>
          Project type
        </label>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={inputClasses + ' cursor-pointer appearance-none pr-10'}
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ink-subtle" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 6 8 10 12 6" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          How can we help? <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us a bit about your business and what struggles you're facing…"
        />
      </div>

      <div aria-live="assertive">
        {status === 'error' && (
          <p className="text-sm text-red-600" role="alert">
            Something went wrong — please try again or email us directly.
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        size="lg"
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}
