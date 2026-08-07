'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightning, Envelope, Phone, MapPin } from '@phosphor-icons/react'
import ArrowRight from '@/components/icons/ArrowRight'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/intellispark',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/intellispark',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@intellispark',
      path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
  ]

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      {/* Newsletter Section */}
      <div className="border-b border-white/15 py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-700 mb-3">Stay informed on GCC trends in India.</h3>
            <p className="text-white/70">Occasional insights on talent, operations and what&apos;s changing in the market. No spam.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@company.com"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder:text-white/50 focus:outline-none focus:border-teal"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue text-white font-600 rounded-r-lg hover:bg-blue-light transition-colors flex items-center gap-2"
            >
              {subscribed ? '✓ Subscribed' : 'Subscribe'}
              {!subscribed && <ArrowRight size={14} />}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Intellispark home">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-teal to-blue rounded">
                <Lightning weight="bold" size={18} className="text-white" />
              </div>
              <span className="text-lg font-700 text-white">Intellispark</span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Helping global companies build thoughtful, high-performing teams in Kochi, India.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue transition-colors"
                  aria-label={link.name}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
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
                    hello@intellispark.tech
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <Phone className="text-[#00bfa5]" size={18} weight="fill" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-600 mb-0.5">Phone</div>
                  <a href="tel:+91XXXXXXXXXX" className="text-white/80 hover:text-white transition-colors text-sm">
                    +91 XX XXXX XXXX
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
              <Link
                href="/book-a-call"
                className="px-6 py-2.5 bg-blue text-white text-sm font-600 rounded-lg hover:bg-blue-light transition-colors inline-flex items-center gap-2 justify-center w-full md:w-auto"
              >
                Book a Call <ArrowRight size={14} />
              </Link>
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
