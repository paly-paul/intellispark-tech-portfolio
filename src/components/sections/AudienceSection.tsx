'use client'

import Link from 'next/link'
import { Plant, Buildings, Lightning, Wrench, CheckCircle } from '@phosphor-icons/react'

const segments = [
  {
    href: '/for/mid-market',
    theme: { icon: '#2D5BFF', iconBg: '#EEF2FF', accent: 'text-blue', dot: 'bg-blue' },
    icon: Plant,
    who: 'Mid-market · First-timer',
    title: 'Exploring India for the first time',
    desc: "You're considering a GCC or offshore team but aren't sure where to begin — or whether the risk is worth it.",
    concerns: [
      'How do I structure this without losing control?',
      'What does it actually cost to get started?',
      'How long before we see results?',
    ],
  },
  {
    href: '/for/enterprise',
    theme: { icon: '#00B8A9', iconBg: '#E6FBF9', accent: 'text-teal', dot: 'bg-teal' },
    icon: Buildings,
    who: 'Enterprise · Scaling',
    title: 'Scaling an existing India presence',
    desc: 'You already have operations in India but need a smarter, faster way to grow — without the complexity of going it alone.',
    concerns: [
      'We need senior talent, not just headcount.',
      "Our current vendor isn't delivering quality.",
      'We want more control over the team culture.',
    ],
  },
  {
    href: '/for/startups',
    theme: { icon: '#6366F1', iconBg: '#EEEDFF', accent: 'text-indigo-500', dot: 'bg-indigo-500' },
    icon: Lightning,
    who: 'Startup · Moving Fast',
    title: 'Building a remote team quickly',
    desc: "You're growing fast and need strong engineers or specialists embedded in your team — without months of recruiting.",
    concerns: [
      'We need people who work like part of the team.',
      "Speed matters — we can't wait 6 months.",
      'Quality and communication are non-negotiable.',
    ],
  },
  {
    href: '/for/gcc-optimise',
    theme: { icon: '#D97706', iconBg: '#FFFBEB', accent: 'text-amber-600', dot: 'bg-amber-600' },
    icon: Wrench,
    who: 'GCC Owner · Optimising',
    title: 'Getting more from your GCC',
    desc: 'Your GCC is running but not firing on all cylinders. You need a partner to help you improve delivery, governance, or team performance.',
    concerns: [
      "Output quality isn't meeting expectations.",
      "We're struggling with retention and morale.",
      'We need better processes, not just more people.',
    ],
  },
]

export default function AudienceSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14 aos">
          <div>
            <span className="text-sm font-600 text-teal uppercase tracking-wider">Who we work with</span>
            <h2 className="text-3xl md:text-4xl font-700 text-navy mt-3">Every company&apos;s India journey looks different.</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We&apos;ve worked with first-timers who had no idea where to start, and seasoned teams looking to do things better. Tell us where you are, and we&apos;ll meet you there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((seg, idx) => {
            const Icon = seg.icon
            return (
              <Link
                key={seg.href}
                href={seg.href}
                className="aos group relative flex flex-col p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: seg.theme.iconBg, color: seg.theme.icon }}
                >
                  <Icon weight="duotone" size={24} />
                </div>
                <div className={`text-xs font-700 uppercase tracking-wider mb-2 ${seg.theme.accent}`}>{seg.who}</div>
                <h3 className="text-lg font-700 text-navy mb-3 leading-snug">{seg.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{seg.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {seg.concerns.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                      <CheckCircle weight="fill" size={15} className={`flex-shrink-0 mt-0.5 ${seg.theme.accent}`} />
                      {c}
                    </li>
                  ))}
                </ul>
                <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-600 ${seg.theme.accent} group-hover:gap-2.5 transition-all`}>
                  See how we help →
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 aos flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="text-gray-600">Not sure which fits you?</span>
          <Link href="/book-a-call" className="text-blue font-600 hover:text-blue-light transition-colors">
            Book a Call and we&apos;ll figure it out together →
          </Link>
        </div>
      </div>
    </section>
  )
}
