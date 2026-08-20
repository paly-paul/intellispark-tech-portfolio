'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightning, Envelope, Phone, MapPin } from '@phosphor-icons/react'
import ArrowRight from '@/components/icons/ArrowRight'
import BookACallLink from '@/components/analytics/BookACallLink'
import StatusPopup from '@/components/ui/StatusPopup'
import { isValidEmail } from '@/lib/validators'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)
  const [showSubscribed, setShowSubscribed] = useState(false)
  const [showAlreadySubscribed, setShowAlreadySubscribed] = useState(false)
  const [subscribeErrorMessage, setSubscribeErrorMessage] = useState<string | null>(null)
  const [emailFieldError, setEmailFieldError] = useState<string | null>(null)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (emailFieldError && (value === '' || isValidEmail(value))) {
      setEmailFieldError(null)
    }
  }

  const validateEmailField = (value: string): string | null => {
    if (!value.trim()) return 'Please enter your email.'
    if (!isValidEmail(value)) return 'Please enter a valid email address.'
    return null
  }

  const handleEmailBlur = () => {
    setEmailFieldError(validateEmailField(email))
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (subscribing) return

    const error = validateEmailField(email)
    if (error) {
      setEmailFieldError(error)
      return
    }

    setSubscribing(true)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      const data = await res.json().catch(() => null)
      setEmail('')
      if (data?.alreadySubscribed) {
        setShowAlreadySubscribed(true)
      } else {
        setShowSubscribed(true)
      }
    } catch (err) {
      setSubscribeErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubscribing(false)
    }
  }



  return (
    <footer className="bg-[#0A0B0A] text-white" role="contentinfo">
      {/* Newsletter Section */}
      <div className="border-b border-white/15 py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-700 mb-3">Stay informed on GCC trends in India.</h3>
            <p className="text-white/70">Occasional insights on talent, operations and what&apos;s changing in the market. No spam.</p>
          </div>
          <div>
            <form onSubmit={handleSubscribe} noValidate className="flex">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="your@company.com"
                  aria-invalid={!!emailFieldError}
                  aria-describedby={emailFieldError ? 'newsletter-email-error' : undefined}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-l-lg text-white placeholder:text-white/50 focus:outline-none transition-colors ${
                    emailFieldError ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-teal'
                  }`}
                  required
                />
                {emailFieldError && (
                  <p id="newsletter-email-error" role="alert" className="absolute left-0 top-full mt-1 text-xs text-red-400">
                    {emailFieldError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={subscribing}
                className="px-6 py-3 bg-blue text-white font-600 rounded-r-lg hover:bg-blue-light transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {subscribing ? 'Subscribing…' : 'Subscribe'}
                {!subscribing && <ArrowRight size={14} />}
              </button>
            </form>
            {/* Dev-only popup preview triggers — uncomment to test StatusPopup without submitting for real.
            {process.env.NODE_ENV === 'development' && (
              <div className="flex items-center gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setShowSubscribed(true)}
                  className="text-xs text-white/40 hover:text-teal underline"
                >
                  Preview success popup (dev only)
                </button>
                <button
                  type="button"
                  onClick={() => setSubscribeErrorMessage('Something went wrong. Please try again.')}
                  className="text-xs text-white/40 hover:text-red-400 underline"
                >
                  Preview error popup (dev only)
                </button>
              </div>
            )}
            */}
          </div>

          <StatusPopup
            open={showSubscribed}
            onClose={() => setShowSubscribed(false)}
            status="success"
            title="You're subscribed"
            message="You'll get occasional GCC and talent insights — no spam, unsubscribe anytime."
          />
          <StatusPopup
            open={showAlreadySubscribed}
            onClose={() => setShowAlreadySubscribed(false)}
            status="success"
            title="Already subscribed"
            message="This email is already on our list — no need to sign up again."
          />
          <StatusPopup
            open={!!subscribeErrorMessage}
            onClose={() => setSubscribeErrorMessage(null)}
            status="error"
            title="Subscription failed"
            message={subscribeErrorMessage ?? ''}
            autoCloseMs={8000}
          />
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 mb-4" aria-label="Intellispark home">
              <img src="/logo-black.png" alt="Intellispark Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Helping global companies build thoughtful, high-performing teams in Kochi, India.
            </p>

          </div>

          {/* Services Column */}
          <nav aria-label="Services">
            <h4 className="text-sm font-700 text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/gcc-setup" className="text-white/70 hover:text-white transition-colors text-sm">GCC Setup</Link></li>
              <li><Link href="/bot-copo" className="text-white/70 hover:text-white transition-colors text-sm">BOT / COPO</Link></li>
              <li><Link href="/staff-augmentation" className="text-white/70 hover:text-white transition-colors text-sm">Staff Augmentation</Link></li>
              <li><Link href="/product-engineering" className="text-white/70 hover:text-white transition-colors text-sm">Product Engineering</Link></li>
              <li><Link href="/aipods" className="text-white/70 hover:text-white transition-colors text-sm">AiPODS</Link></li>
              <li><Link href="/service-delivery" className="text-white/70 hover:text-white transition-colors text-sm">Service Delivery Centres</Link></li>
            </ul>
          </nav>

          {/* Company Column */}
          <nav aria-label="Company">
            <h4 className="text-sm font-700 text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/kochi-advantage" className="text-white/70 hover:text-white transition-colors text-sm">Why Kochi</Link></li>
              <li><Link href="/case-studies" className="text-white/70 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Insights</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">GCC Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </nav>

          {/* Get in Touch & CTA Column */}
          <div className="flex flex-col">
            <h4 className="text-sm font-700 text-white mb-4">Get in touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <Envelope className="text-[#00bfa5]" size={18} weight="fill" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-600 mb-0.5">Email</div>
                  <a href="mailto:hello@intellispark.tech" className="text-white/80 hover:text-white transition-colors text-sm">
                    talkto@intellispark.tech

                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <Phone className="text-[#00bfa5]" size={18} weight="fill" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-600 mb-0.5">Phone</div>
                  <a href="tel:+919846517517" className="text-white/80 hover:text-white transition-colors text-sm">
                    +91-9846-517-517
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <MapPin className="text-[#00bfa5]" size={18} weight="fill" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-600 mb-0.5">Office</div>
                  <p className="text-white/80 text-sm">Kochi, Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-2">
              <BookACallLink
                location="footer"
                className="px-6 py-2.5 bg-blue text-white text-sm font-600 rounded-lg hover:bg-blue-light transition-colors inline-flex items-center gap-2 justify-center w-full md:w-auto"
              >
                Book a Call <ArrowRight size={14} />
              </BookACallLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 py-6 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <div>
            © 2025 Intellispark Technologies. Made with <span aria-label="care">♥</span> in Kochi, India.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
