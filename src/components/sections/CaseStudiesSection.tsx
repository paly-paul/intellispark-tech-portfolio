'use client'

import Link from 'next/link'
import { Users, ChartPolar, Timer, Bank, Cloud, Buildings } from '@phosphor-icons/react'

const outcomes = [
  { icon: Users, val: 'XX+', label: 'Engineers placed in 18 months' },
  { icon: ChartPolar, val: 'XX%', label: 'Year-1 retention rate' },
  { icon: Timer, val: 'XXwks', label: 'From brief to first hire' },
]

const cases = [
  {
    href: '/case-studies/mid-market-fintech-gcc',
    icon: Bank,
    industry: 'Fintech',
    company: 'Mid-market · 200–500 employees · Australia',
    title: 'Setting up a first GCC in under 90 days — without a dedicated India team.',
    desc: 'A growing Australian fintech needed to scale their engineering capacity quickly but had no experience operating in India. They came to us with a tight timeline and significant concerns about compliance and quality control.',
    metrics: [
      { val: 'XX', label: 'Days to first hire' },
      { val: 'XX', label: 'Engineers onboarded in 6 months' },
      { val: 'XX%', label: 'Cost saving vs. onshore' },
    ],
  },
  {
    href: '/case-studies/saas-startup-staff-aug',
    icon: Cloud,
    industry: 'SaaS',
    company: 'Startup · 50–100 employees · United Kingdom',
    title: 'Doubling engineering velocity without doubling the UK payroll.',
    desc: 'A London-based SaaS startup was burning through their Series A runway on expensive onshore hires. They needed senior engineers fast, with no tolerance for the ramp-up time typical of offshore arrangements.',
    metrics: [
      { val: 'XX', label: 'Weeks to first deployment' },
      { val: 'XX%', label: 'Reduction in cost per engineer' },
      { val: 'XX', label: 'Features shipped in quarter 1' },
    ],
  },
  {
    href: '/case-studies/enterprise-bot-transition',
    icon: Buildings,
    industry: 'Enterprise Tech',
    company: 'Enterprise · 1,000+ employees · United States',
    title: 'Transitioning from a managed vendor to full GCC ownership — without disruption.',
    desc: 'A US enterprise had an underperforming offshore arrangement and wanted to take direct ownership of their India team. The challenge: transition cleanly without losing institutional knowledge or productivity.',
    metrics: [
      { val: 'XX', label: 'Month BOT transition period' },
      { val: 'XX%', label: 'Staff retained through transition' },
      { val: 'XX%', label: 'Productivity improvement post-transfer' },
    ],
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14 aos">
          <div>
            <span className="text-sm font-600 text-blue uppercase tracking-wider">Client stories</span>
            <h2 className="text-3xl md:text-4xl font-700 text-navy mt-3">Real teams. Real outcomes.</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We&apos;re proud of what our clients have built. Here are a few of their stories — told in their own words and numbers.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="aos bg-navy text-white rounded-3xl p-8 md:p-12 mb-8">
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            &ldquo;We&apos;d spoken to three other vendors before Intellispark. The difference was that they actually listened to what we were trying to build — not just how many seats they could fill. Eighteen months later, our Kochi team is the most stable and productive we have globally.&rdquo;
          </p>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-sm font-700">VP</div>
            <div>
              <div className="font-600 text-sm">VP of Engineering</div>
              <div className="text-xs text-white/50">Series B SaaS company · United Kingdom</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {outcomes.map((o, idx) => {
              const Icon = o.icon
              return (
                <div key={idx} className="flex items-center gap-3">
                  <Icon weight="duotone" size={28} className="text-teal flex-shrink-0" />
                  <div>
                    <div className="text-xl font-700">{o.val}</div>
                    <div className="text-xs text-white/50">{o.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cases.map((c) => {
            const Icon = c.icon
            return (
              <Link
                key={c.href}
                href={c.href}
                className="aos group rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all bg-white flex flex-col"
              >
                <div className="aspect-[3/2] bg-gradient-to-br from-blue-pale to-teal-light" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-700 text-blue uppercase tracking-wide mb-2">
                    <Icon weight="fill" size={14} /> {c.industry}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">{c.company}</div>
                  <h3 className="text-base font-700 text-navy group-hover:text-blue transition-colors mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{c.desc}</p>
                  <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-gray-100">
                    {c.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-sm font-700 text-navy">{m.val}</div>
                        <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-600 text-blue group-hover:gap-2.5 transition-all">
                    Read the story →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer strip */}
        <div className="aos flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50 rounded-2xl p-6 md:p-8">
          <p className="text-gray-700">
            <strong className="text-navy">Want to see if we&apos;ve worked with companies like yours?</strong> We&apos;re happy to share relevant experience on a call.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-900 font-600 rounded-lg hover:bg-white transition-colors whitespace-nowrap"
            >
              View all case studies →
            </Link>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors whitespace-nowrap"
            >
              Book a Call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
