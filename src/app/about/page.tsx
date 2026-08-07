'use client'

const values = [
  {
    num: '01',
    title: 'Honesty before helpfulness.',
    body: "If we don't think we can deliver what you need, we'll tell you — before you've committed anything. This costs us revenue in the short term. It's also the reason clients come back.",
  },
  {
    num: '02',
    title: 'We stay after the handshake.',
    body: 'Most of the problems in the offshore industry happen post-placement. Our support doesn&apos;t end when the contract is signed — it continues through the 30, 60 and 90-day marks, and beyond.',
  },
  {
    num: '03',
    title: 'Smaller means better.',
    body: "We're deliberately small. We take on fewer clients than we could, because quality of work matters more to us than scale of revenue. Every client gets senior attention — not account management.",
  },
  {
    num: '04',
    title: 'Local knowledge is not transferable.',
    body: "We're based in Kochi. We know the talent market, the regulatory environment, and the cultural nuances from the inside. That's not a claim a remote advisory firm can make.",
  },
]

const journey = [
  {
    year: 'Founded',
    title: 'Intellispark established in Kochi.',
    desc: 'Founded by [team] with a clear brief: GCC and talent solutions built on honesty and local expertise.',
  },
  {
    year: 'Year 1',
    title: 'First GCC clients onboarded.',
    desc: 'First end-to-end GCC builds delivered for clients in the UK and ANZ markets. Staff augmentation practice launched.',
  },
  {
    year: 'Year 2',
    title: 'AiPODS model developed.',
    desc: 'AI-powered delivery squad framework built and validated with early adopter clients. Product engineering practice expanded.',
  },
  {
    year: 'Today',
    title: 'XX+ active engagements across US, UK and ANZ.',
    desc: 'Growing team, same principles. Still based in Kochi. Still taking fewer engagements than we could.',
  },
]

const team = [
  {
    name: 'Founder · CEO',
    role: 'LEADERSHIP',
    bio: 'Background and bio to be added. Leads client relationships and strategic direction.',
  },
  {
    name: 'Co-founder · Head of Talent',
    role: 'TALENT & PLACEMENT',
    bio: 'Leads all sourcing, screening and post-placement support. Deep network across Kochi tech community.',
  },
  {
    name: 'Head of Operations',
    role: 'GCC & DELIVERY',
    bio: 'Owns the operational delivery of GCC builds — entity, infrastructure, compliance and governance.',
  },
]

export default function About() {
  return (
    <div className="pt-[72px] bg-white">
      {/* Manifesto Hero */}
      <section className="bg-navy text-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aos">
            <span className="text-sm font-600 text-teal uppercase tracking-wider">Company · About Us</span>
            <h1 className="text-3xl md:text-5xl font-800 leading-tight mt-4 mb-6 font-bold">
              Built by people who&apos;ve seen what <em className="not-italic text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)' }}>bad</em> looks like — and chose differently.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Intellispark was founded in Kochi because we saw the same problems repeat: companies making expensive decisions without local knowledge, and talent firms optimising for placement volume over performance. We thought there was a better way to do this. We still do.
            </p>
          </div>

          <div className="aos aos-delay-1 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:max-w-[380px] md:ml-auto w-full">
            <div className="text-[11px] font-700 text-white/50 uppercase tracking-widest mb-5">At a glance</div>
            <div className="space-y-5">
              <div>
                <div className="text-[24px] md:text-[26px] font-800 tracking-tight leading-none mb-1.5">Kochi<span className="text-teal">,</span> India</div>
                <p className="text-[13px] text-white/50 leading-relaxed max-w-[95%]">Headquartered in Kochi — we know this market from the inside</p>
              </div>
              <div className="pt-5 border-t border-white/10">
                <div className="text-[24px] md:text-[26px] font-800 tracking-tight leading-none mb-1.5">US · UK<span className="text-teal"> · </span>ANZ</div>
                <p className="text-[13px] text-white/50 leading-relaxed max-w-[95%]">Target markets — time zones and working styles we know well</p>
              </div>
              <div className="pt-5 border-t border-white/10">
                <div className="text-[24px] md:text-[26px] font-800 tracking-tight leading-none mb-1.5">XX<span className="text-teal">+</span></div>
                <p className="text-[13px] text-white/50 leading-relaxed max-w-[95%]">Engagements delivered across GCC, augmentation and engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="aos md:pl-8 lg:pl-16 xl:pl-24">
            <span className="text-sm font-600 text-blue uppercase tracking-wider">Our founding perspective</span>
            <h2 className="text-3xl md:text-[46px] font-800 text-navy mt-3 leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(22px, 2.5vw, 46px)', fontWeight: '800', letterSpacing: '-0.4px' }}>
              The offshore industry has a trust problem. We built Intellispark to address it.
            </h2>
          </div>
          <div className="aos aos-delay-1 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Too many companies have experienced the pitch that oversells, the placement that underdelivers, and the vendor who isn&apos;t there when things go wrong. Too many talent firms measure success by placement volume rather than by whether the person they placed is still there two years later.
            </p>
            <p>
              We built Intellispark to be a different kind of firm: one that leads with honesty, stays involved after the handshake, and measures success by your team&apos;s performance — not our revenue.
            </p>
            <p>
              That means we take on fewer engagements than we could. It means we&apos;ll tell you if we&apos;re not the right fit for what you need. And it means every engagement has a named lead from our founding team who owns the outcome personally.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-navy" id="values">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 aos text-center">
            <span className="text-[13px] font-700 text-teal uppercase tracking-widest">How we work</span>
            <h2 className="text-3xl md:text-[44px] font-800 text-white mt-4 tracking-tight">Four principles that guide every engagement.</h2>
          </div>

          <div className="grid md:grid-cols-2 rounded-[24px] border border-white/10 overflow-hidden bg-white/[0.02]">
            {values.map((v, idx) => (
              <div
                key={v.num}
                className={`aos p-8 md:p-12 hover:bg-white/[0.02] transition-colors ${idx === 0 ? 'border-b border-white/10 md:border-r' :
                  idx === 1 ? 'border-b border-white/10' :
                    idx === 2 ? 'border-b md:border-b-0 border-white/10 md:border-r' : ''
                  }`}
              >
                <div className="text-[13px] font-700 text-white/30 mb-5">{v.num}</div>
                <h3 className="text-xl md:text-[22px] font-800 text-white mb-4 tracking-tight">{v.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed max-w-[95%]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50" id="journey">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 aos">
            <span className="text-[11px] font-700 text-blue uppercase tracking-widest"><span className="mr-2">—</span>OUR JOURNEY</span>
            <h2 className="text-3xl md:text-[44px] font-800 text-navy mt-4 tracking-tight leading-none">From founding to today.</h2>
          </div>

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-[7px] left-0 right-0 h-[1px] bg-gray-200" />
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute top-0 bottom-0 left-[7px] w-[1px] bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {journey.map((item, idx) => (
                <div key={idx} className="aos relative pl-8 md:pl-0 md:pt-10 group">
                  <div
                    className={`absolute top-[2px] md:top-0 left-0 w-4 h-4 rounded-full border-2 cursor-pointer transition-all duration-300 group-hover:animate-pulse group-hover:scale-125 group-hover:bg-blue ${idx === 0
                      ? 'bg-blue border-blue z-10'
                      : 'bg-white border-blue z-10'
                      }`}
                  />
                  <div className="text-[11px] font-700 text-blue uppercase tracking-widest mb-3 mt-[2px] md:mt-0">{item.year}</div>
                  <h3 className="text-[17px] font-800 text-navy mb-3 leading-snug tracking-tight pr-4">{item.title}</h3>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed pr-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 aos">
            <span className="text-sm font-600 text-teal uppercase tracking-wider">The team</span>
            <h2 className="text-2xl md:text-3xl font-900 text-navy mt-3 mb-3 font-bold">  The people behind the work.</h2>
            <p className="text-gray-600 max-w-2xl">
              Team bios are being finalised and will be published here shortly. In the meantime, the best way to meet us is a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="aos bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-300 text-3xl">
                  👤
                </div>
                <p className="text-xs text-gray-400 mb-4">Photo coming soon</p>
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
        <div className="max-w-4xl mx-auto text-center aos">
          <h2 className="text-3xl md:text-4xl font-800 mb-6 font-bold">The best introduction is a conversation.</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 font-size: 16px;">
            Thirty minutes. No pitch deck. We&apos;ll tell you honestly whether we&apos;re the right fit for what you need.
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
