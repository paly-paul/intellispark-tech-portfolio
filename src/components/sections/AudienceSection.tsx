'use client'

import Link from 'next/link'
import { Plant, Buildings, Lightning, Wrench, CheckCircle } from '@phosphor-icons/react'
import ArrowRight from '@/components/icons/ArrowRight'

const segments = [
  {
    href: '/for/mid-market',
    theme: {
      icon: '#2D5BFF',
      iconBg: '#EEF2FF',
      accent: 'text-blue',
      topBar: 'bg-gradient-to-r from-blue to-blue-light',
    },
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
    theme: {
      icon: '#00B8A9',
      iconBg: '#E6FBF9',
      accent: 'text-teal',
      topBar: 'bg-gradient-to-r from-teal to-cyan-400',
    },
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
    theme: {
      icon: '#6366F1',
      iconBg: '#EEEDFF',
      accent: 'text-indigo-500',
      topBar: 'bg-gradient-to-r from-indigo-500 to-violet-500',
    },
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
    theme: {
      icon: '#D97706',
      iconBg: '#FFFBEB',
      accent: 'text-amber-600',
      topBar: 'bg-gradient-to-r from-amber-500 to-yellow-400',
    },
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
    <section className="bg-gray-50 px-6 py-20 md:px-8 md:py-[100px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-8 md:grid-cols-2 aos">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.8px] text-teal">
              <span className="h-0.5 w-5 rounded-full bg-teal" />
              Who we work with
            </div>
            <h2 className="text-3xl font-700 leading-tight text-navy md:text-4xl">
              Every company&apos;s<br />
              India journey looks different.
            </h2>
          </div>
          <p className="max-w-[420px] text-base leading-relaxed text-gray-600">
            We&apos;ve worked with first-timers who had no idea where to start, and seasoned teams looking to do things better. Tell us where you are, and we&apos;ll meet you there.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg) => {
            const Icon = seg.icon
            return (
              <Link
                key={seg.href}
                href={seg.href}
                className="aos group relative flex flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-gray-50 p-6 transition-all duration-200 hover:-translate-y-2 hover:border-transparent hover:bg-white hover:shadow-[0_24px_56px_rgba(0,0,0,0.10)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${seg.theme.topBar}`} />
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: seg.theme.iconBg, color: seg.theme.icon }}
                >
                  <Icon weight="duotone" size={24} />
                </div>
                <div className={`mb-2 text-xs font-700 uppercase tracking-[0.7px] ${seg.theme.accent}`}>{seg.who}</div>
                <h3 className="mb-3 text-lg font-700 leading-snug text-navy">{seg.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{seg.desc}</p>
                <ul className="mb-6 space-y-1.5">
                  {seg.concerns.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-gray-700">
                      <CheckCircle weight="fill" size={15} className={`mt-0.5 flex-shrink-0 ${seg.theme.accent}`} />
                      {c}
                    </li>
                  ))}
                </ul>
                <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-600 ${seg.theme.accent} transition-all group-hover:gap-2.5`}>
                  See how we help <ArrowRight size={13} />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-2 text-center aos">
          <span className="text-gray-600">Not sure which fits you?</span>
          <Link href="/book-a-call" className="inline-flex items-center gap-1.5 font-600 text-blue transition-colors hover:text-blue-light">
            Book a Call and we&apos;ll figure it out together <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
