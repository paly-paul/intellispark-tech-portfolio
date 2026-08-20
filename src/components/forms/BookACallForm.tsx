'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import StatusPopup from '@/components/ui/StatusPopup'
import { isValidEmail } from '@/lib/validators'

type FieldName = 'name' | 'company' | 'email' | 'message'

const REQUIRED_MESSAGES: Record<FieldName, string> = {
  name: 'Please enter your name.',
  company: 'Please enter your company.',
  email: 'Please enter your email.',
  message: 'Please tell us about your goals.',
}

function validateField(name: FieldName, value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return REQUIRED_MESSAGES[name]
  if (name === 'email' && !isValidEmail(trimmed)) return 'Please enter a valid email address.'
  return null
}

export default function BookACallForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    companySize: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name in REQUIRED_MESSAGES) {
      const field = name as FieldName
      if (fieldErrors[field] && !validateField(field, value)) {
        setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }
  }

  const handleFieldBlur = (field: FieldName) => {
    setFieldErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) ?? undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    const nextErrors: Partial<Record<FieldName, string>> = {}
    ;(Object.keys(REQUIRED_MESSAGES) as FieldName[]).forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) nextErrors[field] = error
    })

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors)
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      trackEvent('book_a_call', { location: 'form_submit' })
      setFormData({ name: '', company: '', email: '', companySize: '', message: '' })
      setFieldErrors({})
      setShowSuccess(true)
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = (field: FieldName) =>
    `w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none ${
      fieldErrors[field] ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-600 text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleFieldBlur('name')}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            className={fieldClass('name')}
            placeholder="Your name"
          />
          {fieldErrors.name && (
            <p id="name-error" role="alert" className="absolute left-0 top-full mt-1 text-xs text-red-600">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="company" className="block text-sm font-600 text-gray-900 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={() => handleFieldBlur('company')}
            aria-invalid={!!fieldErrors.company}
            aria-describedby={fieldErrors.company ? 'company-error' : undefined}
            className={fieldClass('company')}
            placeholder="Your company"
          />
          {fieldErrors.company && (
            <p id="company-error" role="alert" className="absolute left-0 top-full mt-1 text-xs text-red-600">
              {fieldErrors.company}
            </p>
          )}
        </div>
      </div>

      <div className="relative">
        <label htmlFor="email" className="block text-sm font-600 text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleFieldBlur('email')}
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          className={fieldClass('email')}
          placeholder="your@company.com"
        />
        {fieldErrors.email && (
          <p id="email-error" role="alert" className="absolute left-0 top-full mt-1 text-xs text-red-600">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="companySize" className="block text-sm font-600 text-gray-900 mb-2">
          Company Size
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue transition-colors bg-white"
        >
          <option value="">Select an option</option>
          <option value="1-50">1–50 people</option>
          <option value="51-200">51–200 people</option>
          <option value="201-1000">201–1000 people</option>
          <option value="1000+">1000+ people</option>
        </select>
      </div>

      <div className="relative mt-2 mb-6">
        <label htmlFor="message" className="block text-sm font-600 text-gray-900 mb-2">
          Tell us about your goals *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleFieldBlur('message')}
          rows={5}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          className={`${fieldClass('message')} resize-none`}
          placeholder="What are you hoping to build? What&apos;s your timeline?"
        />
        {fieldErrors.message && (
          <p id="message-error" role="alert" className="absolute left-0 top-full mt-1 text-xs text-red-600">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Send message'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        We&apos;ll be in touch within 24 hours. Or reach out directly at{' '}
        <a href="mailto:hello@intellispark.tech" className="text-blue hover:text-blue-light">
          hello@intellispark.tech
        </a>
      </p>

      {/* Dev-only popup preview triggers — uncomment to test StatusPopup without submitting for real.
      {process.env.NODE_ENV === 'development' && (
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowSuccess(true)}
            className="text-xs text-gray-400 hover:text-blue underline"
          >
            Preview success popup (dev only)
          </button>
          <button
            type="button"
            onClick={() => setErrorMessage('Something went wrong sending your message. Please try again or email us directly.')}
            className="text-xs text-gray-400 hover:text-red-600 underline"
          >
            Preview error popup (dev only)
          </button>
        </div>
      )}
      */}

      <StatusPopup
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        status="success"
        title="Message received"
        message="Thanks for reaching out — we'll be in touch within 24 hours. Keep an eye on your inbox."
      />
      <StatusPopup
        open={!!errorMessage}
        onClose={() => setErrorMessage(null)}
        status="error"
        title="Message failed to send"
        message={errorMessage ?? ''}
        autoCloseMs={8000}
      />
    </form>
  )
}
