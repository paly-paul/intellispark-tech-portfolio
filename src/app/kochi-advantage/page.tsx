'use client'

import { MapPin } from '@phosphor-icons/react'

const heroStats = [
  { val: 'XX', suffix: '%', label: 'Lower cost vs comparable Bengaluru team' },
  { val: 'XX', suffix: '%', label: 'Lower attrition than national GCC benchmark' },
  { val: 'XX', suffix: 'K+', label: 'Tech graduates produced annually in Kerala' },
  { val: 'XX', suffix: '+', label: 'Global companies already operating from Kochi' },
]

const compareRows = [
  { label: 'Salary cost (relative)', kochi: 'Lower by XX%', bengaluru: 'Benchmark', hyderabad: '5–10% below Bengaluru' },
  { label: 'Annual attrition rate', kochi: 'XX% (lower)', bengaluru: '25–35%', hyderabad: '20–28%' },
  { label: 'Office cost per seat', kochi: 'Significantly lower', bengaluru: 'High', hyderabad: 'Moderate' },
  { label: 'English proficiency', kochi: 'Very high', bengaluru: 'High', hyderabad: 'High' },
  { label: 'Talent pool depth', kochi: 'Strong (growing)', bengaluru: 'Very deep', hyderabad: 'Deep' },
  { label: 'Cost of living', kochi: 'Low', bengaluru: 'High (rising fast)', hyderabad: 'Moderate' },
  { label: 'Commute times', kochi: 'Short (improving)', bengaluru: 'Very long', hyderabad: 'Moderate' },
  { label: 'GCC maturity', kochi: 'Emerging — early advantage', bengaluru: 'Mature, crowded', hyderabad: 'Mature' },
]

export default function KochiAdvantage() {
  return (
    <div className="pt-[72px] bg-white">
      {/* Hero */}
      <section className="bg-navy text-white pt-20 pb-12 md:pt-32 md:pb-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto aos">
          <div className="flex items-center gap-2 mb-6 text-xs font-700 text-teal uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-teal inline-block" />
            LOCATION · KOCHI, INDIA
          </div>
          <h1 className="text-4xl md:text-[60px] font-900 leading-[1.05] tracking-tight mb-8 font-bold max-w-4xl">
            The city that gets talent, cost and life <span className="text-teal">right.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-[20px] max-w-2xl leading-relaxed">
            Bengaluru gets the headlines. Hyderabad gets the enterprise parks. Kochi gets the retention rates — because the engineers who come here choose to stay.
          </p>
        </div>
      </section>

      {/* Stat band */}
      <section className="py-10 md:py-16 px-6 md:px-8 bg-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {heroStats.map((s, idx) => (
            <div
              key={idx}
              className={`aos text-left md:px-8 ${idx !== 0 ? 'md:border-l border-white/10' : 'md:pl-0'
                }`}
            >
              <div className="text-4xl md:text-[52px] font-900 text-white mb-3 font-bold tracking-tight">
                {s.val}<span className="text-teal">{s.suffix}</span>
              </div>
              <p className="text-[15px] text-white/50 leading-relaxed pr-4">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Talent case */}
      <section className="py-20 md:py-32 px-6 md:px-8" id="talent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12">
          <div className="aos">
            <span className="text-sm font-600 text-blue uppercase tracking-wider">The talent case</span>
            <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3 mb-6 leading-tight font-bold">
              Kerala produces some of India&apos;s best engineers — and Kochi is where they stay.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>Kerala has one of India&apos;s highest literacy rates, a strong English-language proficiency record across all levels, and a growing concentration of senior technical talent choosing Kochi over Bengaluru for lifestyle reasons.</p>
              <p>The talent pool isn&apos;t as deep as Bengaluru in raw numbers. But the quality-to-availability ratio — especially for mid-senior and senior engineers — is consistently strong, and the pipeline from Kerala&apos;s engineering colleges into Kochi&apos;s tech sector has been growing for a decade.</p>
              <p>We&apos;re based here. We&apos;ve watched this market develop first-hand, and we have direct relationships with talent at every level that most agencies don&apos;t.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="text-3xl md:text-[36px] font-900 text-navy font-bold flex-shrink-0 tracking-tight">
                  XX<span className="text-teal">%</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">English proficiency rate among Kochi tech workforce</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="text-3xl md:text-[36px] font-900 text-navy font-bold flex-shrink-0 tracking-tight">
                  XX<span className="text-teal">K</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">Active tech professionals in Greater Kochi</p>
              </div>
            </div>
          </div>
          <div className="aos aos-delay-1 bg-navy text-white rounded-2xl p-8 h-fit">
            <p className="text-lg leading-relaxed mb-6">
              &ldquo;The engineers I spoke to in Kochi were, across the board, stronger communicators and more collaborative than I expected. The cultural fit with our UK team was immediate.&rdquo;
            </p>
            <div className="text-sm text-white/60">VP Engineering, UK SaaS company</div>
          </div>
        </div>
      </section>

      {/* Cost case */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12">
          <div className="aos aos-delay-1 bg-navy text-white rounded-2xl p-8 h-fit order-2 md:order-1">
            <p className="text-lg leading-relaxed mb-6">
              &ldquo;We modelled Bengaluru, Hyderabad and Kochi side by side. Kochi came out 28% cheaper on total cost when you factor in retention and rehiring. That&apos;s not a small number.&rdquo;
            </p>
            <div className="text-sm text-white/60">CFO, Australian financial services company</div>
          </div>
          <div className="aos order-1 md:order-2">
            <span className="text-sm font-600 text-teal uppercase tracking-wider">The cost case</span>
            <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3 mb-6 leading-tight font-bold">
              Meaningfully cheaper than Bengaluru — without the quality trade-off.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>Salary benchmarks in Kochi are consistently lower than Bengaluru or Hyderabad for equivalent roles and experience levels. The gap varies by function and seniority, but across a typical GCC team, the total cost saving is material.</p>
              <p>When you add in lower office costs, lower attrition-driven rehiring costs, and reduced management overhead, the difference compounds significantly over a 3-year horizon.</p>
              <p>We model this for every prospective client as part of the initial discovery — using real market data, not estimates. If the economics don&apos;t work for your situation, we&apos;ll tell you before you&apos;ve committed anything.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="text-3xl md:text-[36px] font-900 text-navy font-bold flex-shrink-0 tracking-tight">
                  XX<span className="text-teal">%</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">Average salary cost saving vs Bengaluru for equivalent roles</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="text-3xl md:text-[36px] font-900 text-navy font-bold flex-shrink-0 tracking-tight">
                  XX<span className="text-teal">%</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">Lower office cost per seat vs Bengaluru Grade A space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality of life / retention case */}
      <section className="py-20 md:py-32 px-6 md:px-8" id="quality-of-life">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12">
          <div className="aos">
            <span className="text-sm font-600 text-blue uppercase tracking-wider">The retention case</span>
            <h2 className="text-2xl md:text-3xl font-700 text-navy mt-3 mb-6 leading-tight font-bold">
              Quality of life is not a soft metric. It drives attrition.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Attrition is the hidden cost that makes most offshore models underperform their business case. Every departure costs you 6–12 months of productivity, institutional knowledge, and rehiring overhead. The cities with the lowest attrition rates are typically the ones where people choose to live — not where they move for lack of better options.</p>
              <p>Kochi consistently outperforms Bengaluru and Hyderabad on attrition benchmarks. The reasons are tangible: lower cost of living, shorter commutes, cleaner air, a coastal climate, and strong social infrastructure. These aren&apos;t lifestyle marketing claims — they&apos;re the factors your future employees weight when they decide whether to stay or leave.</p>
            </div>
          </div>
          <div className="aos aos-delay-1 bg-navy text-white rounded-2xl p-8 h-fit">
            <p className="text-lg leading-relaxed mb-6">
              &ldquo;We&apos;ve had our Kochi team for three years. We&apos;ve lost two people. In Bengaluru we were turning over 30% per year. The difference is Kochi — not us.&rdquo;
            </p>
            <div className="text-sm text-white/60">COO, US technology company</div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-navy" id="comparison">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 aos text-center">
            <span className="text-sm font-600 text-teal uppercase tracking-wider">City comparison</span>
            <h2 className="text-3xl md:text-[44px] font-900 text-white mt-3 font-bold tracking-tight">Kochi vs Bengaluru vs Hyderabad</h2>
          </div>
          <div className="aos bg-[#111726] rounded-2xl border border-white/5 overflow-hidden overflow-x-auto">
            <table className="w-full text-[15px]" aria-label="City comparison table">
              <thead>
                <tr className="border-b border-white/5 text-left text-gray-400">
                  <th className="px-6 py-5 font-600">Factor</th>
                  <th className="px-6 py-5 font-700 text-teal bg-teal-900/10 border-l-2 border-teal relative">
                    <div className="flex items-center gap-2">
                      <MapPin weight="fill" size={16} /> Kochi
                    </div>
                  </th>
                  <th className="px-6 py-5 font-600">Bengaluru</th>
                  <th className="px-6 py-5 font-600">Hyderabad</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0">
                    <td className="px-6 py-5 text-gray-300 font-500">{row.label}</td>
                    <td className="px-6 py-5 font-700 text-teal bg-teal-900/10 border-l-2 border-teal">{row.kochi}</td>
                    <td className="px-6 py-5 text-gray-400">{row.bengaluru}</td>
                    <td className="px-6 py-5 text-gray-400">{row.hyderabad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-white text-navy border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center aos">
          <h2 className="text-3xl md:text-[40px] font-900 mb-6 tracking-tight font-bold">See the numbers for your role mix.</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 font-500">
            We model the cost comparison and talent landscape for your specific function and seniority profile — using real market data, not estimates. No commitment required.
          </p>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors"
          >
            Book a discovery call →
          </a>
        </div>
      </section>
    </div>
  )
}
