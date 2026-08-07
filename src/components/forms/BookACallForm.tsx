'use client'

import { useState } from 'react'

export default function BookACallForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    companySize: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show success message
    // In production, this would submit to an API endpoint
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', company: '', email: '', companySize: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-600 text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-600 text-gray-900 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue transition-colors"
            placeholder="Your company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-600 text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue transition-colors"
          placeholder="your@company.com"
        />
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

      <div>
        <label htmlFor="message" className="block text-sm font-600 text-gray-900 mb-2">
          Tell us about your goals *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue transition-colors resize-none"
          placeholder="What are you hoping to build? What&apos;s your timeline?"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors"
      >
        {submitted ? '✓ Message received' : 'Send message'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        We&apos;ll be in touch within 24 hours. Or reach out directly at{' '}
        <a href="mailto:hello@intellispark.tech" className="text-blue hover:text-blue-light">
          hello@intellispark.tech
        </a>
      </p>
    </form>
  )
}
