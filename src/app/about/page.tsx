'use client'

export default function About() {
  return (
    <div className="pt-[72px] bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-800 leading-tight mb-6">
            We believe India teams should feel like your team.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Intellispark started because we got tired of watching global companies struggle with India offshore. We built a different way.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-700 text-navy mb-2">Our principles</h2>
            <p className="text-gray-600">Everything we do comes back to these.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="aos">
              <div className="w-12 h-12 rounded-lg bg-blue-pale flex items-center justify-center mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-700 text-navy mb-3">Ownership, not outsourcing</h3>
              <p className="text-gray-600 leading-relaxed">
                You own your GCC. Your people, your decisions, your strategy. We help you build it, then get out of the way. We&apos;re not here to run your team — we&apos;re here to help you run it better.
              </p>
            </div>

            <div className="aos">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-700 text-navy mb-3">Transparency, not spin</h3>
              <p className="text-gray-600 leading-relaxed">
                We tell you what works and what doesn&apos;t. We don&apos;t hide headcount attrition behind happy stories. If we see a risk, we flag it. If we see an opportunity, we highlight it.
              </p>
            </div>

            <div className="aos">
              <div className="w-12 h-12 rounded-lg bg-blue-pale flex items-center justify-center mb-4 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-700 text-navy mb-3">Outcomes, not activity</h3>
              <p className="text-gray-600 leading-relaxed">
                We measure success by whether your team is productive, retained, and aligned with your business. Not by how many meetings we have or how busy we look.
              </p>
            </div>

            <div className="aos">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-700 text-navy mb-3">Speed with substance</h3>
              <p className="text-gray-600 leading-relaxed">
                We move fast because we&apos;re experienced, not because we cut corners. A GCC in 90 days means we&apos;ve done this before. Not that we&apos;re taking shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-700 text-navy mb-2">Meet the team</h2>
            <p className="text-gray-600">The people behind Intellispark.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'XX', role: 'Co-Founder & CEO', bio: 'XX years building teams across India, US, and UK.' },
              { name: 'XX', role: 'Co-Founder & COO', bio: 'XX years in GCC operations and entity formation.' },
              { name: 'XX', role: 'Head of Talent', bio: 'XX years recruiting and building high-performance teams.' },
            ].map((member, idx) => (
              <div key={idx} className="aos bg-white rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-700 text-navy">{member.name}</h3>
                <p className="text-sm text-blue font-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-700 mb-6">Let&apos;s build your India team together.</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            No jargon, no fluff — just a honest conversation about what you want to build and how we can help.
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
