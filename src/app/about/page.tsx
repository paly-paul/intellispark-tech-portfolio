'use client'

import { Buildings, Code, Sun, Link, ArrowUpRight } from '@phosphor-icons/react'
import BookACallLink from '@/components/analytics/BookACallLink'

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
    title: '10+ active engagements across US, UK and ANZ.',
    desc: 'Growing team, same principles. Still based in Kochi. Still taking fewer engagements than we could.',
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
                <div className="text-[24px] md:text-[26px] font-800 tracking-tight leading-none mb-1.5">10<span className="text-teal">+</span></div>
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

      {/* We Are Section */}
      <section className="bg-white" id="we-are">
        <div className="max-w-7xl mx-auto px-12 md:px-14 pt-24 pb-14 border-b border-gray-100">
          <div className="flex items-center gap-2 text-[11px] font-700 uppercase tracking-[1px] text-blue mb-3.5 before:block before:w-5 before:h-[2px] before:bg-blue before:rounded-full">
            How we operate
          </div>
          <h2 className="text-[32px] md:text-[52px] font-800 text-navy tracking-tight">We are&hellip;</h2>
        </div>

        {/* Value 1: Honest */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] border-b border-gray-100 aos">
          <div className="relative overflow-hidden bg-[#0D1428]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop"
                alt="Two professionals in a direct conversation"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-luminosity opacity-[0.55]"
              />
              <div className="absolute bottom-7 left-8 text-[11px] font-800 tracking-[2px] text-white/25 uppercase">01</div>
            </div>
          </div>
          <div className="p-16 flex flex-col justify-center bg-white">
            <h3 className="text-[36px] md:text-[60px] font-800 text-navy tracking-tight leading-none mb-6">
              Honest<span className="text-blue">.</span>
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed max-w-[480px]">
              We lead with honesty — even when it costs us the engagement. If we don't think we're the right fit for what you need, we'll say so before you've committed anything. We'd rather lose a deal than let a client go into the wrong arrangement with their eyes closed. In an industry that runs on pitch decks, we think honesty is a genuine differentiator — and a moral requirement.
            </p>
          </div>
        </div>

        {/* Value 2: Accountable */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] border-b border-gray-100 aos">
          <div className="p-16 flex flex-col justify-center bg-gray-50 order-2 md:order-1">
            <h3 className="text-[36px] md:text-[60px] font-800 text-navy tracking-tight leading-none mb-6">
              Accountable<span className="text-teal">.</span>
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed max-w-[480px]">
              Every engagement has a named person from our founding team who owns the outcome personally. Not an account manager who relays your concerns. Not a delivery layer who wasn't in the room when the brief was agreed. The person you speak to at the start is the person responsible at the end. This is the only model that makes accountability real.
            </p>
          </div>
          <div className="relative overflow-hidden bg-[#0D1428] order-1 md:order-2">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                alt="Team working together in an open office"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-luminosity opacity-[0.55]"
              />
              <div className="absolute bottom-7 left-8 text-[11px] font-800 tracking-[2px] text-white/25 uppercase">02</div>
            </div>
          </div>
        </div>

        {/* Value 3: Local */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] border-b border-gray-100 aos">
          <div className="relative overflow-hidden bg-[#0D1428]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80&auto=format&fit=crop"
                alt="Kochi waterfront at dusk"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-luminosity opacity-[0.55]"
              />
              <div className="absolute bottom-7 left-8 text-[11px] font-800 tracking-[2px] text-white/25 uppercase">03</div>
            </div>
          </div>
          <div className="p-16 flex flex-col justify-center bg-white">
            <h3 className="text-[36px] md:text-[60px] font-800 text-navy tracking-tight leading-none mb-6">
              Local<span className="text-[#D97706]">.</span>
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed max-w-[480px]">
              We are based in Kochi. Not remotely advising on Kochi from a city somewhere else — physically present, with relationships in the market, first-hand knowledge of how the talent landscape has shifted over the past decade, and a network built from years of being here. Local knowledge in this business is not something you can replicate from a distance, and we don't pretend otherwise.
            </p>
          </div>
        </div>

        {/* Value 4: Deliberate */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] border-b border-gray-100 aos">
          <div className="p-16 flex flex-col justify-center bg-gray-50 order-2 md:order-1">
            <h3 className="text-[36px] md:text-[60px] font-800 text-navy tracking-tight leading-none mb-6">
              Deliberate<span className="text-[#7C3AED]">.</span>
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed max-w-[480px]">
              We take on fewer engagements than we could. This is a choice. Quality of work matters more to us than scale of revenue, and the two are in tension at a certain size. We don't spread ourselves across 40 clients and hope the model holds. Every client gets the attention their decision deserves — because choosing an India partner is a significant, long-term commitment, and we treat it that way.
            </p>
          </div>
          <div className="relative overflow-hidden bg-[#0D1428] order-1 md:order-2">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop"
                alt="Professional reviewing documents carefully"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-luminosity opacity-[0.55]"
              />
              <div className="absolute bottom-7 left-8 text-[11px] font-800 tracking-[2px] text-white/25 uppercase">04</div>
            </div>
          </div>
        </div>

        {/* Value 5: Invested */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px] aos">
          <div className="relative overflow-hidden bg-[#0D1428]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop"
                alt="Long-term partnership meeting"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-luminosity opacity-[0.55]"
              />
              <div className="absolute bottom-7 left-8 text-[11px] font-800 tracking-[2px] text-white/25 uppercase">05</div>
            </div>
          </div>
          <div className="p-16 flex flex-col justify-center bg-white">
            <h3 className="text-[36px] md:text-[60px] font-800 text-navy tracking-tight leading-none mb-6">
              Invested<span className="text-[#059669]">.</span>
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed max-w-[480px]">
              Our measure of success is your team's performance at 12 months — not the contract signature. Most of the problems in offshore engagements happen post-placement, when the vendor has already moved on to the next deal. We stay involved: check-ins at 30, 60 and 90 days, and available whenever you need us. Our reputation depends on your outcome, and we operate accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* The Group Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-navy text-white" id="group">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 aos">
            <span className="text-[11px] font-700 text-teal uppercase tracking-widest">The Group</span>
            <h2 className="text-[28px] md:text-[36px] font-900 text-white mt-4 tracking-tight font-bold">Part of a broader ecosystem — built in Kochi.</h2>
            <p className="text-[16px] text-white/70 leading-relaxed max-w-3xl mx-auto mt-6">
              Intellispark operates alongside three sister organisations whose work directly strengthens what we offer our clients. Together, we bring capabilities that no standalone GCC advisory firm can match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Hyarch Projects */}
            <div className="flex flex-col bg-[#1A1F2D] rounded-xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors aos">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D97706]"></div>
              <div className="w-12 h-12 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-2xl mb-6">
                <Buildings weight="bold" />
              </div>
              <h3 className="text-[20px] font-800 text-white mb-1">Hyarch Projects LLP</h3>
              <div className="text-[11px] font-700 uppercase tracking-wider text-[#D97706] mb-4">Construction &amp; Architecture</div>
              <p className="text-[14px] text-white/70 leading-relaxed mb-6">
                Established since the 1970s, Hyarch is a full-service construction and architecture firm with a track record spanning commercial offices, institutional buildings and interior fitouts across Kerala. Their expertise covers design, civil and structural engineering, MEP systems, and interior delivery.
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed mb-8">
                <strong className="text-white/55 font-600">GCC alignment:</strong> When a client needs to establish physical office infrastructure in Kochi — fit-out, new build, or space planning — Hyarch brings decades of local execution capability. No third-party contractor dependency for our clients&apos; physical setup.
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-[12px] text-white/50">
                  <Link weight="bold" />
                  <span>GCC office infrastructure</span>
                </div>
                <a href="https://www.hyarchprojects.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] font-600 text-[#D97706] hover:opacity-80 transition-opacity">
                  Visit site <ArrowUpRight weight="bold" />
                </a>
              </div>
            </div>

            {/* Mecnize */}
            <div className="flex flex-col bg-[#1A1F2D] rounded-xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors aos aos-delay-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue"></div>
              <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] text-blue flex items-center justify-center text-2xl mb-6">
                <Code weight="bold" />
              </div>
              <h3 className="text-[20px] font-800 text-white mb-1">Mecnize Software Solutions</h3>
              <div className="text-[11px] font-700 uppercase tracking-wider text-blue mb-4">Software Development &amp; HR Tech</div>
              <p className="text-[14px] text-white/70 leading-relaxed mb-6">
                Based in Kochi, Mecnize is a software development firm specialising in web applications, e-commerce, custom enterprise software, and — critically for Intellispark clients — HR office automation and payroll systems built specifically for recruitment and staffing operations.
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed mb-8">
                <strong className="text-white/55 font-600">GCC alignment:</strong> Mecnize&apos;s HR automation products directly support the back-office processes of GCCs we build — candidate management, payroll, document workflows. They also extend our tech talent sourcing pipeline for engineering placements.
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-[12px] text-white/50">
                  <Link weight="bold" />
                  <span>HR automation &amp; tech talent</span>
                </div>
                <a href="https://mecnize.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] font-600 text-blue hover:opacity-80 transition-opacity">
                  Visit site <ArrowUpRight weight="bold" />
                </a>
              </div>
            </div>

            {/* Crore Concepts */}
            <div className="flex flex-col bg-[#1A1F2D] rounded-xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors aos aos-delay-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#059669]"></div>
              <div className="w-12 h-12 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center text-2xl mb-6">
                <Sun weight="bold" />
              </div>
              <h3 className="text-[20px] font-800 text-white mb-1">Crore Concepts</h3>
              <div className="text-[11px] font-700 uppercase tracking-wider text-[#059669] mb-4">Solar Engineering &amp; Clean Energy</div>
              <p className="text-[14px] text-white/70 leading-relaxed mb-6">
                Based in Kochi, Crore Concepts designs and manufactures solar module mounting structures for residential, commercial and utility-scale applications. Their work spans rooftop installations to large-scale solar farms, with a focus on engineering precision and sustainable design.
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed mb-8">
                <strong className="text-white/55 font-600">GCC alignment:</strong> Increasingly, global companies evaluate India operations through an ESG lens. Crore Concepts enables Intellispark clients to build GCCs with solar-powered or sustainability-credentialed facilities — a differentiator that matters to boards and sustainability teams.
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-[12px] text-white/50">
                  <Link weight="bold" />
                  <span>Sustainable GCC facilities</span>
                </div>
                <a href="https://croreconcepts.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] font-600 text-[#059669] hover:opacity-80 transition-opacity">
                  Visit site <ArrowUpRight weight="bold" />
                </a>
              </div>
            </div>
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
          <BookACallLink
            location="about_cta"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors"
          >
            Book a Call →
          </BookACallLink>
        </div>
      </section>
    </div>
  )
}
