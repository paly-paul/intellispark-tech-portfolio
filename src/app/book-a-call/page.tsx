import type { Metadata } from 'next'
import BookACallForm from '@/components/forms/BookACallForm'

export const metadata: Metadata = {
  title: 'Book a Call — Intellispark Technologies',
  description: 'Schedule a call with our team to discuss your India team building goals.',
  openGraph: {
    title: 'Book a Call — Intellispark Technologies',
    description: 'Schedule a call with our team to discuss your India team building goals.',
    url: 'https://intellispark.tech/book-a-call',
    type: 'website',
  },
}

export default function BookACall() {
  return (
    <div className="pt-[72px] min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 aos">
            <h1 className="text-3xl md:text-4xl font-800 text-navy mb-4">Let&apos;s talk about your goals.</h1>
            <p className="text-lg text-gray-600">
              Share a bit about what you&apos;re building, and we&apos;ll find the right time to connect.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 aos">
            <BookACallForm />
          </div>
        </div>
      </div>
    </div>
  )
}
