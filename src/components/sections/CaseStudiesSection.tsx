'use client'

import Link from 'next/link'

const caseStudies = [
  {
    title: 'Tech Startup Scales from XX to XX Engineers',
    description: 'How a seed-stage startup built a high-velocity India team in 60 days.',
    category: 'augmentation',
    company: 'TechStart Inc',
  },
  {
    title: 'Enterprise GCC Hits XX Headcount in Year 1',
    description: 'A Fortune 500 company establishes its India hub with zero compliance issues.',
    category: 'gcc',
    company: 'Global Corp',
  },
  {
    title: 'Product Engineering Team Launches XX Features',
    description: 'A product-first team delivers custom software on time, every time.',
    category: 'engineering',
    company: 'Innovation Labs',
  },
  {
    title: 'Underperforming GCC Transformed in XX Months',
    description: 'A struggling India operation becomes a competitive advantage.',
    category: 'optimise',
    company: 'Transform Co',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 aos">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-600 text-blue uppercase tracking-wider">Social Proof</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-700 text-navy">How companies like yours transformed their India operations.</h2>
          </div>
          <Link
            href="/case-studies"
            className="text-blue font-600 hover:text-blue-light transition-colors whitespace-nowrap ml-8"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="aos p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all bg-white group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs px-3 py-1 bg-blue-pale text-blue rounded-full font-600">
                  {study.category}
                </div>
              </div>
              <h3 className="text-lg font-600 text-navy group-hover:text-blue transition-colors mb-3">
                {study.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{study.description}</p>
              <p className="text-xs text-gray-500">{study.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
