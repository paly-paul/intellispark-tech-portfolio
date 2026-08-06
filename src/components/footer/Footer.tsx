'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightning } from '@phosphor-icons/react'

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
      icon: '📘',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/intellispark',
      icon: '𝕏',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@intellispark',
      icon: '▶️',
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
              {!subscribed && <span>→</span>}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 mb-12">
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
                  <span className="text-sm">{link.icon}</span>
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

          {/* Get in Touch Column */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4">Get in touch</h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-600 mb-1">Email</div>
                <a href="mailto:hello@intellispark.tech" className="text-white/70 hover:text-white transition-colors text-sm">
                  hello@intellispark.tech
                </a>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-600 mb-1">Phone</div>
                <a href="tel:+91XXXXXXXXXX" className="text-white/70 hover:text-white transition-colors text-sm">
                  +91 XX XXXX XXXX
                </a>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-600 mb-1">Office</div>
                <p className="text-white/70 text-sm">Kochi, Kerala, India</p>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col justify-between">
            <div />
            <Link
              href="/book-a-call"
              className="px-6 py-3 bg-blue text-white text-sm font-600 rounded-lg hover:bg-blue-light transition-colors inline-flex items-center gap-2 justify-center"
            >
              Book a Call →
            </Link>
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
