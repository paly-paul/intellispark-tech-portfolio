'use client'

import Link from 'next/link'

const audiences = [
  {
    href: '/for/mid-market',
    title: 'Mid-Market',
    desc: 'Growing teams that need India talent without the setup overhead.',
    stats: ['Quick onboarding', 'Compliance-ready', 'Cost effective'],
  },
  {
    href: '/for/enterprise',
    title: 'Enterprise',
    desc: 'Scale existing operations or launch new India divisions with confidence.',
    stats: ['Dedicated support', 'Governance-first', 'Multi-team setup'],
  },
  {
    href: '/for/startups',
    title: 'Startups',
    desc: 'Bootstrap your team with vetted engineers at a fraction of Bay Area costs.',
    stats: ['Lean operations', 'Flexible contracts', 'Growth-focused'],
  },
  {
    href: '/for/gcc-optimise',
    title: 'GCC Optimisation',
    desc: 'Transform underperforming India teams into high-velocity units.',
    stats: ['Process audit', 'Team rehiring', 'Governance upgrade'],
  },
]

export default function AudienceSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 aos">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-600 text-teal uppercase tracking-wider">Built For</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-700 text-navy">A solution for every stage of your journey.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, idx) => (
            <Link
              key={audience.href}
              href={audience.href}
              className="aos p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl font-700 text-navy group-hover:text-teal transition-colors mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{audience.desc}</p>
              <div className="flex flex-wrap gap-2">
                {audience.stats.map((stat) => (
                  <span key={stat} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {stat}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
