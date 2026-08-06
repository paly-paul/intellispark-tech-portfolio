'use client'

import { useState } from 'react'

const caseStudies = [
  {
    id: 1,
    title: 'Tech Startup Scales from XX to XX Engineers',
    description: 'How a seed-stage startup built a high-velocity India team in 60 days.',
    category: 'augmentation',
    company: 'TechStart Inc',
    metrics: ['XX engineers hired', 'XX% retention', 'XX days to first deployment'],
  },
  {
    id: 2,
    title: 'Enterprise GCC Hits XX Headcount in Year 1',
    description: 'A Fortune 500 company establishes its India hub with zero compliance issues.',
    category: 'gcc',
    company: 'Global Corp',
    metrics: ['XX-person GCC', 'XX% goal achievement', 'XX% cost savings'],
  },
  {
    id: 3,
    title: 'Product Engineering Team Launches XX Features',
    description: 'A product-first team delivers custom software on time, every time.',
    category: 'engineering',
    company: 'Innovation Labs',
    metrics: ['XX features shipped', 'XX% on-time delivery', 'XX avg. bug fix time'],
  },
  {
    id: 4,
    title: 'Underperforming GCC Transformed in XX Months',
    description: 'A struggling India operation becomes a competitive advantage.',
    category: 'optimise',
    company: 'Transform Co',
    metrics: ['XX% productivity increase', 'XX% attrition improvement', 'XX% cost reduction'],
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'gcc', label: 'GCC Setup' },
  { id: 'augmentation', label: 'Augmentation' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'optimise', label: 'Optimisation' },
]

export default function CaseStudies() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? caseStudies : caseStudies.filter((cs) => cs.category === filter)

  return (
    <div className="pt-[72px] bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-800 text-navy mb-4">How companies like yours transformed their India operations.</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Real results from real teams. These are the stories behind the metrics.</p>
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
            {filtered.map((study, idx) => (
              <div
                key={study.id}
                className="aos group p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all bg-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs px-3 py-1 bg-blue-pale text-blue rounded-full font-600">
                    {categories.find((c) => c.id === study.category)?.label}
                  </div>
                </div>
                <h3 className="text-lg font-700 text-navy group-hover:text-blue transition-colors mb-3">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{study.description}</p>

                {/* Metrics */}
                <div className="space-y-2 mb-6 pb-6 border-b border-gray-100">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-blue font-600">✓</span> {metric}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 font-600">{study.company}</p>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-700 mb-6">Ready to write your story?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Let&apos;s talk about how we can help you build or scale your India team.
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
