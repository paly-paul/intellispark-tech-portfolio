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
    <section className="relative overflow-hidden bg-navy text-white px-6 py-20 md:px-8 md:py-[120px]" aria-labelledby="kochi-title">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593693397690-362cb9666c6c?auto=format&fit=crop&w=1920&q=80')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,30,0.96)_0%,rgba(10,15,30,0.88)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,184,169,0.15),transparent_55%)] opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] aos">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.8px] text-teal">
              <span className="h-0.5 w-5 rounded-full bg-teal" />
              Why Kochi
            </div>
            <h2 id="kochi-title" className="text-3xl font-900 font-bold leading-[1.15] text-white md:text-[clamp(30px,3.2vw,44px)]">
              India&apos;s most liveable<br />
              tech city is also its<br />
              <em className="not-italic bg-gradient-to-r from-teal to-blue-light bg-clip-text text-transparent">best-kept secret.</em>
            </h2>
          </div>

          <div className="pb-1">
            <p className="mb-6 max-w-xl text-base leading-relaxed text-white/70">
              While Bangalore and Hyderabad get the headlines, Kochi offers something quietly different — a deep talent pool, significantly lower costs, and a quality of life that keeps your team happy and stable for the long haul.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-700 text-white">XX<span className="text-sm text-teal">%</span></div>
                <p className="mt-1 text-xs text-white/50">Lower cost than Bangalore</p>
              </div>
              <div>
                <div className="text-2xl font-700 text-white">XX<span className="text-sm text-teal">k+</span></div>
                <p className="mt-1 text-xs text-white/50">Tech graduates annually</p>
              </div>
              <div>
                <div className="text-2xl font-700 text-white">XX<span className="text-sm text-teal">%</span></div>
                <p className="mt-1 text-xs text-white/50">Lower attrition vs. metro avg.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, idx) => (
            <div key={idx} className="aos rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <div className="mb-2 text-xs font-600 uppercase tracking-[0.7px] text-white/40">{p.num}</div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-teal/15 text-teal text-2xl">
                {p.icon}
              </div>
              <h3 className="mb-3 text-lg font-700 leading-snug text-white">{p.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-white/70">{p.desc}</p>
              <div className="space-y-3 border-t border-white/10 pt-4">
                {p.points.map((point, i) => (
                  <div key={i} className="flex gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="aos overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
          <div className="border-b border-white/10 px-6 py-6 md:px-8">
            <h3 className="text-lg font-700 text-white">How Kochi compares</h3>
            <p className="mt-1 text-sm text-white/60">A straightforward look at what matters when choosing your India location.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="City comparison table">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/50">
                  <th className="px-6 py-3 font-600">Factor</th>
                  <th className="px-4 py-3 font-700 text-teal">Kochi</th>
                  <th className="hidden px-4 py-3 font-600 sm:table-cell">Bangalore</th>
                  <th className="hidden px-4 py-3 font-600 sm:table-cell">Hyderabad</th>
                  <th className="px-4 py-3 font-600">Mumbai</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/10 last:border-0">
                    <td className="px-6 py-3 font-500 text-white">{row.label}</td>
                    <td className="px-4 py-3 font-600 text-teal">{row.kochi}</td>
                    <td className="hidden px-4 py-3 text-white/60 sm:table-cell">{row.bangalore}</td>
                    <td className="hidden px-4 py-3 text-white/60 sm:table-cell">{row.hyderabad}</td>
                    <td className="px-4 py-3 text-white/60">{row.mumbai}</td>
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
