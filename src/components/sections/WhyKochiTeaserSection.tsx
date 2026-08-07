const pillars = [
  {
    num: '01',
    icon: '🎓',
    title: 'Deep, Diverse Talent',
    desc: "Kerala produces some of India's highest concentrations of engineering and science graduates per capita. Kochi's tech corridor draws from this pipeline — and retains it.",
    points: [
      'Strong presence of Tier-1 engineering colleges within commuting distance',
      'High English fluency and international exposure across the workforce',
      'Growing cluster of fintech, SaaS and product engineering talent',
    ],
  },
  {
    num: '02',
    icon: '📈',
    title: 'Real Cost Advantage',
    desc: 'Compared to Bangalore or Hyderabad, Kochi offers meaningfully lower salary bands, real estate costs and operational overhead — without compromising on talent quality.',
    points: [
      'XX–XX% lower total employment cost vs. comparable Bangalore roles',
      'Office space at a fraction of metro city rates',
      'Lower cost of living means your compensation goes further',
    ],
  },
  {
    num: '03',
    icon: '🌿',
    title: 'Stability That Compounds',
    desc: "Kochi consistently ranks as one of India's most liveable cities. For your GCC, this translates directly into lower attrition, stronger team culture, and compounding institutional knowledge.",
    points: [
      "Ranked among India's top cities for quality of life and infrastructure",
      'Lower job-hopping culture compared to larger metros',
      'Employees who stay longer build the institutional knowledge your GCC depends on',
    ],
  },
]

const compareRows = [
  { label: 'Talent availability', kochi: '✓ Strong', bangalore: '✓ Very strong', hyderabad: '✓ Strong', mumbai: 'Moderate' },
  { label: 'Employment cost', kochi: '✓ Low', bangalore: 'High', hyderabad: 'Medium', mumbai: 'Very high' },
  { label: 'Attrition rate', kochi: '✓ Low', bangalore: 'Very high', hyderabad: 'High', mumbai: 'High' },
  { label: 'Quality of life', kochi: '✓ Excellent', bangalore: 'Moderate', hyderabad: '✓ Good', mumbai: 'Challenging' },
  { label: 'Infrastructure', kochi: '✓ Modern', bangalore: '✓ Strong', hyderabad: '✓ Strong', mumbai: 'Strained' },
  { label: 'GCC ecosystem maturity', kochi: '✓ Growing fast', bangalore: '✓ Mature', hyderabad: '✓ Mature', mumbai: 'Limited' },
]

export default function WhyKochiTeaserSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50" aria-labelledby="kochi-title">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16 aos">
          <div>
            <span className="text-sm font-600 text-teal uppercase tracking-wider">Why Kochi</span>
            <h2 id="kochi-title" className="text-3xl md:text-4xl font-700 text-navy mt-3 leading-tight">
              India&apos;s most liveable tech city is also its <em className="not-italic text-teal">best-kept secret.</em>
            </h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              While Bangalore and Hyderabad get the headlines, Kochi offers something quietly different — a deep talent pool, significantly lower costs, and a quality of life that keeps your team happy and stable for the long haul.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-700 text-navy">XX<span className="text-sm">%</span></div>
                <p className="text-xs text-gray-600 mt-1">Lower cost than Bangalore</p>
              </div>
              <div>
                <div className="text-2xl font-700 text-navy">XX<span className="text-sm">k+</span></div>
                <p className="text-xs text-gray-600 mt-1">Tech graduates annually</p>
              </div>
              <div>
                <div className="text-2xl font-700 text-navy">XX<span className="text-sm">%</span></div>
                <p className="text-xs text-gray-600 mt-1">Lower attrition vs. metro avg.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, idx) => (
            <div key={idx} className="aos bg-white rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="text-xs font-600 text-gray-400 mb-2">{p.num}</div>
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="text-lg font-700 text-navy mb-3">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-2">
                {p.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="aos bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 md:px-8 py-6 border-b border-gray-200">
            <h3 className="text-lg font-700 text-navy">How Kochi compares</h3>
            <p className="text-sm text-gray-600 mt-1">A straightforward look at what matters when choosing your India location.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="City comparison table">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="px-6 py-3 font-600">Factor</th>
                  <th className="px-4 py-3 font-700 text-teal">Kochi</th>
                  <th className="px-4 py-3 font-600 hidden sm:table-cell">Bangalore</th>
                  <th className="px-4 py-3 font-600 hidden sm:table-cell">Hyderabad</th>
                  <th className="px-4 py-3 font-600">Mumbai</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-gray-900 font-500">{row.label}</td>
                    <td className="px-4 py-3 font-600 text-teal">{row.kochi}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.bangalore}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.hyderabad}</td>
                    <td className="px-4 py-3 text-gray-600">{row.mumbai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
