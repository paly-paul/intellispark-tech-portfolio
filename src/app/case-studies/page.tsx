'use client'

import { useState } from 'react'

const caseStudies = [
  {
    id: 1,
    featured: true,
    category: 'gcc',
    tags: [
      { label: 'GCC Setup', bg: 'bg-blue-pale', text: 'text-blue' },
      { label: 'Fintech', bg: 'bg-gray-100', text: 'text-gray-600' },
      { label: 'UK', bg: 'bg-gray-100', text: 'text-gray-600' },
    ],
    accent: 'bg-blue',
    metricColor: 'text-blue',
    title: 'A 200-person UK fintech needed an engineering GCC — without pulling leadership bandwidth into the build.',
    desc: "First India entity. No existing local relationships. Leadership couldn't afford to be distracted from a product launch happening in parallel. They needed someone to own the build completely.",
    metricVal: '14',
    metricLabel: 'weeks from signed agreement to first hire on the ground',
    quote: '"Intellispark handled everything we didn\'t know we needed to handle. We were focused on product. They were focused on building our team. Three years later, we have 40 engineers in Kochi."',
    quoteAttr: 'CTO, UK Fintech (Series C)',
  },
  {
    id: 2,
    category: 'augmentation',
    tags: [
      { label: 'Staff Aug', bg: 'bg-amber-100', text: 'text-amber-600' },
      { label: 'SaaS', bg: 'bg-gray-100', text: 'text-gray-600' },
      { label: 'Series B', bg: 'bg-gray-100', text: 'text-gray-600' },
    ],
    accent: 'bg-amber-600',
    metricColor: 'text-amber-600',
    title: 'A US SaaS company needed to accelerate backend delivery — in weeks, not months.',
    desc: 'One anchor hire in India, a stalled roadmap, and a board expecting delivery acceleration. They needed three strong engineers placed around their existing hire without disrupting velocity.',
    metricVal: 'XX%',
    metricLabel: 'sprint velocity increase within the first quarter post-placement',
  },
  {
    id: 3,
    category: 'optimise',
    tags: [
      { label: 'Optimisation', bg: 'bg-teal-light', text: 'text-teal' },
      { label: 'Financial Services', bg: 'bg-gray-100', text: 'text-gray-600' },
      { label: 'ANZ', bg: 'bg-gray-100', text: 'text-gray-600' },
    ],
    accent: 'bg-teal',
    metricColor: 'text-teal',
    title: 'A 40-person Australia GCC delivering below expectations after 3 years of operation.',
    desc: "High attrition, compensation drift, and weak parent org integration were compounding. Leadership knew something was wrong but couldn't pinpoint the root cause. They needed an honest diagnosis.",
    metricVal: 'XX%',
    metricLabel: 'attrition reduction at 12 months post-remediation',
  },
  {
    id: 4,
    category: 'engineering',
    tags: [
      { label: 'Product Eng', bg: 'bg-purple-100', text: 'text-purple-600' },
      { label: 'Healthtech', bg: 'bg-gray-100', text: 'text-gray-600' },
      { label: 'UK', bg: 'bg-gray-100', text: 'text-gray-600' },
    ],
    accent: 'bg-purple-600',
    metricColor: 'text-purple-600',
    title: 'A UK healthtech scaling from MVP to enterprise — needing a full product squad, not just engineers.',
    desc: "They'd outgrown their founding team's capacity but weren't ready to build a GCC. An embedded product engineering squad gave them full-stack delivery capability without the overhead.",
    metricVal: '3×',
    metricLabel: 'release cadence improvement within 6 months of squad onboarding',
  },
  {
    id: 5,
    category: 'gcc',
    tags: [
      { label: 'BOT / COPO', bg: 'bg-teal-light', text: 'text-teal' },
      { label: 'Professional Services', bg: 'bg-gray-100', text: 'text-gray-600' },
      { label: 'US', bg: 'bg-gray-100', text: 'text-gray-600' },
    ],
    accent: 'bg-teal',
    metricColor: 'text-teal',
    title: 'A US professional services firm wanted to test India before committing to a full GCC.',
    desc: 'Significant internal scepticism about offshore models after a previous poor experience. Leadership needed to prove the model worked before investing at scale. BOT gave them the proof point without the permanent commitment.',
    metricVal: 'XX',
    metricLabel: 'months from BOT pilot to full transfer of entity ownership',
  },
  {
    id: 6,
    category: 'engineering',
    tags: [
      { label: 'AiPODS', bg: 'bg-emerald-100', text: 'text-emerald-600' },
      { label: 'Proptech', bg: 'bg-gray-100', text: 'text-gray-600' },
      { label: 'ANZ', bg: 'bg-gray-100', text: 'text-gray-600' },
    ],
    accent: 'bg-emerald-600',
    metricColor: 'text-emerald-600',
    title: 'An Australian proptech at Series A needed to triple engineering output — without tripling headcount.',
    desc: 'Tight runway, aggressive roadmap, and a board expecting feature parity with a better-funded competitor. An AiPOD squad delivered the output of six engineers with a team of three.',
    metricVal: '2×',
    metricLabel: 'features shipped per sprint vs prior quarter',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'gcc', label: 'GCC Setup' },
  { id: 'augmentation', label: 'Staff Augmentation' },
  { id: 'engineering', label: 'Product Engineering' },
  { id: 'optimise', label: 'GCC Optimisation' },
]

export default function CaseStudies() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? caseStudies : caseStudies.filter((cs) => cs.category === filter)

  return (
    <div className="pt-[72px] bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center aos">
          <span className="text-sm font-600 text-blue uppercase tracking-wider">Work · Case Studies</span>
          <h1 className="text-3xl md:text-4xl font-800 text-navy mt-4 mb-4">How we&apos;ve helped companies build their India teams.</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real engagements, real outcomes. All companies are anonymised unless they&apos;ve given explicit permission to be named.
          </p>
        </div>
      </section>

      {/* Filter & Cases */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center aos">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-600 transition-all ${
                  filter === cat.id
                    ? 'bg-blue text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((study) => (
              <div
                key={study.id}
                className={`aos group relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all bg-white ${
                  study.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`h-1 w-full ${study.accent}`} />
                <div className={`p-8 ${study.featured ? 'grid md:grid-cols-[1.4fr_1fr] gap-8' : ''}`}>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full font-600 ${tag.bg} ${tag.text}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs font-600 text-gray-400 uppercase tracking-wider mb-2">The challenge</div>
                    <h3 className={`font-700 text-navy group-hover:text-blue transition-colors mb-3 ${study.featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">{study.desc}</p>

                    <div className="pt-4 border-t border-gray-100">
                      <span className={`text-2xl md:text-3xl font-700 ${study.metricColor}`}>{study.metricVal}</span>
                      <p className="text-sm text-gray-600 mt-1">{study.metricLabel}</p>
                    </div>
                  </div>

                  {study.featured && study.quote && (
                    <div className="bg-navy text-white rounded-xl p-6 flex flex-col justify-center">
                      <p className="text-sm leading-relaxed mb-4">{study.quote}</p>
                      <div className="text-xs text-white/60">{study.quoteAttr}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center aos">
          <h2 className="text-3xl md:text-4xl font-700 mb-6">Seen enough? Let&apos;s talk about your situation.</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Every engagement starts with a free discovery call. No pitch deck, no obligation.
          </p>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors"
          >
            Book a Call →
          </a>
        </div>
      </section>
    </div>
  )
}
