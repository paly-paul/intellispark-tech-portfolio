'use client'

export default function KochiAdvantage() {
  return (
    <div className="pt-[72px] bg-white">
      {/* Hero */}
      <section className="bg-teal text-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-800 leading-tight mb-6">
            Why India&apos;s most underrated tech hub is your strategic advantage.
          </h1>
          <p className="text-white/80 text-lg">Kochi isn&apos;t an alternative to Bangalore. It&apos;s a better choice.</p>
        </div>
      </section>

      {/* Stat Band */}
      <section className="py-12 px-6 md:px-8 bg-teal-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-800 text-teal mb-2">XX%</div>
            <p className="text-sm text-gray-700">Average attrition in Year 1</p>
          </div>
          <div>
            <div className="text-3xl font-800 text-teal mb-2">XX days</div>
            <p className="text-sm text-gray-700">Average time to hire</p>
          </div>
          <div>
            <div className="text-3xl font-800 text-teal mb-2">XX%</div>
            <p className="text-sm text-gray-700">Cost savings vs. onshore</p>
          </div>
          <div>
            <div className="text-3xl font-800 text-teal mb-2">XX+</div>
            <p className="text-sm text-gray-700">Active GCCs we operate</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center aos">
            <div>
              <h2 className="text-2xl md:text-3xl font-700 text-navy mb-6">Lower attrition. Higher retention.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bangalore and Pune are saturated job markets where your team gets poached constantly. Kochi&apos;s talent market is competitive but stable — engineers stay for years, not months.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our data: XX% attrition in Year 1 for Kochi-based teams, vs. XX% for Bangalore-based competitors. That&apos;s not a small difference when you&apos;re scaling.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-teal-light to-blue-pale rounded-2xl" />
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center aos">
            <div className="h-64 bg-gradient-to-br from-blue-pale to-teal-light rounded-2xl" />
            <div>
              <h2 className="text-2xl md:text-3xl font-700 text-navy mb-6">Emerging talent pool with mature infrastructure.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kochi isn&apos;t starved for talent. The city has XX+ engineering colleges and is home to a growing community of product-minded developers who chose Kochi for its lifestyle and quality of life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                More importantly, the city has mature business infrastructure, reliable power, high-speed internet, and regulatory clarity that took Bangalore XX years to develop.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center aos">
            <div>
              <h2 className="text-2xl md:text-3xl font-700 text-navy mb-6">Significantly lower cost base.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For the same caliber of engineer, you pay XX% less in Kochi. And because retention is higher, your true cost per year of tenure is even lower.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cost of living is lower, housing is more affordable, and competitive pressure from other tech companies means salaries remain reasonable — not inflated by startup bidding wars.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-teal-light to-blue-pale rounded-2xl" />
          </div>

          {/* Section 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center aos">
            <div className="h-64 bg-gradient-to-br from-blue-pale to-teal-light rounded-2xl" />
            <div>
              <h2 className="text-2xl md:text-3xl font-700 text-navy mb-6">Growing ecosystem of product-first companies.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kochi is home to XX+ product companies that have chosen the city specifically for its advantages. This creates a community of like-minded founders and leaders who share knowledge, hire from one another, and raise the bar for hiring and retention.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It also means your team won&apos;t feel isolated. There are local meetups, conferences, and networking opportunities — things that feel like Bangalore or San Francisco, but with more breathing room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-700 mb-6">Ready to explore Kochi as your next GCC location?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            We can walk you through the data, introductions, and first steps to establish your operation.
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
