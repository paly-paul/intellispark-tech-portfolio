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
    featured: true,
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
    quote: '"We needed elite backend talent fast. Intellispark dropped three senior engineers into our sprints within two weeks, and they immediately started clearing our backlog."',
    quoteAttr: 'Director of Engineering, US SaaS',
  },
  {
    id: 3,
    featured: true,
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
    quote: '"We were bleeding talent and didn\'t know why. Intellispark came in, diagnosed the cultural disconnect, rebuilt our framework, and stabilized the entire operation."',
    quoteAttr: 'COO, Australia Financial Services',
  },
  {
    id: 4,
    featured: true,
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
    quote: '"We didn\'t just need hands on keyboards, we needed product thinkers who could own entire feature verticals. The Intellispark squad integrated instantly and tripled our velocity."',
    quoteAttr: 'VP Engineering, UK Healthtech',
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
      <section
        className="py-10 md:py-12 px-6 md:px-8 bg-navy relative border-b border-white/10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[700px] aos relative z-10">
            <div className="flex items-center gap-2 mb-5 text-[11px] md:text-xs font-700 text-teal uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H176V32a24,24,0,0,0-48,0H88A16,16,0,0,0,72,48V64a8,8,0,0,0,16,0V48h40v8a16,16,0,0,0,32,0V48h40V208H88V192a8,8,0,0,0-16,0v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM144,32a8,8,0,0,1,16,0v8H144ZM128,112a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H136A8,8,0,0,1,128,112Zm8,48a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM42.34,165.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L58.69,184Z"></path></svg>
              WORK · CASE STUDIES
            </div>
            <h1 className="text-4xl md:text-[56px] font-900 text-white leading-[1.05] tracking-tight mb-6 font-bold max-w-[650px]">
              How we&apos;ve helped companies build their India teams.
            </h1>
            <p className="text-white/60 text-lg md:text-[18px] max-w-[580px] leading-relaxed">
              Real engagements, real outcomes. All companies are anonymised unless they&apos;ve given explicit permission to be named.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Cases */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex gap-8 mb-12 border-b border-gray-200 overflow-x-auto no-scrollbar aos">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`pb-4 text-[15px] font-600 whitespace-nowrap transition-colors relative ${filter === cat.id
                    ? 'text-blue'
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {cat.label}
                {filter === cat.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue" />
                )}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 grid-flow-dense aos">
            {filtered.map((study) => (
              <div
                key={study.id}
                className={`group relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all bg-white flex flex-col ${
                  study.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`h-[3px] w-full shrink-0 ${study.accent}`} />
                <div className={`p-6 md:p-7 flex flex-col h-full ${study.featured ? 'lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-8' : ''}`}>
                  <div className="flex flex-col h-full">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className={`text-[10px] px-2.5 py-1 rounded-full font-700 uppercase tracking-widest ${tag.bg} ${tag.text}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <div className="text-[10px] font-700 text-gray-400 uppercase tracking-widest mb-2">The challenge</div>
                    <h3 className={`font-800 text-navy group-hover:text-blue transition-colors mb-3 leading-tight ${study.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                      {study.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">{study.desc}</p>

                    <div className="pt-5 border-t border-gray-100 mt-auto">
                      <span className={`text-2xl md:text-3xl font-800 ${study.metricColor}`}>{study.metricVal}</span>
                      <p className="text-[12px] text-gray-500 mt-1 font-500">{study.metricLabel}</p>
                    </div>
                  </div>

                  {study.featured && study.quote && (
                    <div className="bg-navy text-white rounded-xl p-6 md:p-7 flex flex-col justify-center mt-6 md:mt-0">
                      <p className="text-[13px] md:text-[14px] leading-relaxed mb-4 italic text-white/90">&quot;{study.quote.replace(/^"|"$/g, '')}&quot;</p>
                      <div className="text-[10px] text-white/50 font-600 uppercase tracking-widest">{study.quoteAttr}</div>
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
      <section className="py-20 md:py-32 px-6 md:px-8 bg-white text-navy border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center aos">
          <h2 className="text-3xl md:text-[40px] leading-tight font-900 tracking-tight mb-6 font-bold">Seen enough? Let&apos;s talk about your situation.</h2>
          <p className="text-gray-500 text-[17px] md:text-[19px] max-w-2xl mx-auto mb-8 leading-relaxed">
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
