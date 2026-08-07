import type { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'
import AudienceSection from '@/components/sections/AudienceSection'
import WhyKochiTeaserSection from '@/components/sections/WhyKochiTeaserSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Intellispark Technologies — Build Your India Team',
  description: 'Helping global companies build thoughtful, high-performing teams in Kochi, India. GCC Setup, BOT/COPO, Staff Augmentation, Product Engineering and AiPODS.',
  openGraph: {
    title: 'Intellispark Technologies — Build Your India Team',
    description: 'Helping global companies build thoughtful, high-performing teams in Kochi, India.',
    url: 'https://intellispark.tech',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy text-white pt-[72px]">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute rounded-full blur-[80px] opacity-[0.18] w-[600px] h-[600px] bg-blue -top-[180px] -right-[100px]" />
          <div className="absolute rounded-full blur-[80px] opacity-[0.13] w-[400px] h-[400px] bg-teal bottom-0 -left-[80px]" />
          <div className="absolute rounded-full blur-[80px] opacity-[0.08] w-[300px] h-[300px] bg-blue-light top-1/2 left-[38%]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.4) 80%, transparent)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center flex-1 relative z-10 w-full">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/[0.12] border border-white/[0.12] rounded-full pl-2 pr-3.5 py-1.5 text-xs font-600 text-teal mb-7 aos">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              GCC & Talent Solutions · Kochi, India
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-700 leading-[1.1] tracking-tight mb-6 aos aos-delay-1">
              A thoughtful way<br />
              to build your team<br />
              <em className="not-italic bg-gradient-to-br from-teal to-blue-light bg-clip-text text-transparent">
                in India.
              </em>
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md mb-10 aos aos-delay-2">
              Whether you&apos;re exploring a GCC for the first time or scaling an existing India presence, we take the time to understand your goals — and help you get there without unnecessary risk or guesswork.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14 aos aos-delay-3">
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue text-white font-600 rounded-xl hover:bg-[#1A45E8] hover:-translate-y-0.5 transition-all shadow-[0_4px_24px_rgba(45,91,255,0.45)]"
              >
                Book a Call →
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-1.5 py-3.5 text-white/70 hover:text-white font-500 transition-colors"
              >
                See how it works →
              </a>
            </div>

            {/* Trust bar */}
            <div className="pt-7 border-t border-white/[0.12] aos aos-delay-3">
              <p className="text-[11px] font-600 uppercase tracking-wider text-white/40 mb-4">
                Trusted by companies across the US, UK &amp; ANZ
              </p>
              <div className="flex flex-wrap gap-8 md:gap-10">
                {[
                  { val: 'XX', unit: 'days', label: 'Avg. GCC launch time' },
                  { val: 'XX', unit: '+', label: 'Professionals placed' },
                  { val: 'XX', unit: '%', label: 'Cost vs. onshore teams' },
                  { val: 'XX', unit: '+', label: 'Global clients' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-800 tracking-tight flex items-baseline gap-1">
                      {stat.val}
                      <span className="text-sm text-teal">{stat.unit}</span>
                    </div>
                    <p className="text-xs text-white/50 font-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden md:flex items-center justify-center relative aos aos-delay-2" aria-hidden="true">
            <div className="relative w-full max-w-[480px]">
              {/* Floating metric cards */}
              <div className="absolute -top-5 -right-4 z-10 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
                <div className="w-9 h-9 rounded-lg bg-blue-pale text-blue flex items-center justify-center text-lg">🚀</div>
                <div>
                  <div className="text-sm font-700 text-navy leading-tight">GCC Live in 90 Days</div>
                  <div className="text-xs text-gray-500">Fastest in the industry</div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-7 z-10 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-2xl animate-[float_6s_ease-in-out_infinite_-3s]">
                <div className="w-9 h-9 rounded-lg bg-teal-light text-teal flex items-center justify-center text-lg">✓</div>
                <div>
                  <div className="text-sm font-700 text-navy leading-tight">Zero attrition in Year 1</div>
                  <div className="text-xs text-gray-500">Retained talent pipeline</div>
                </div>
              </div>

              {/* Network visual */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-9 backdrop-blur-xl shadow-2xl">
                <svg viewBox="0 0 460 360" fill="none" className="w-full h-auto">
                  <g stroke="rgba(45,91,255,0.25)" strokeWidth="1.2" strokeDasharray="5,4">
                    <path d="M230 220 C180 160, 80 130, 50 90" />
                    <path d="M230 220 C260 160, 340 120, 390 80" />
                    <path d="M230 220 C290 240, 370 260, 410 290" />
                    <path d="M230 220 C270 230, 340 240, 370 250" />
                  </g>
                  <circle cx="50" cy="90" r="28" fill="rgba(45,91,255,0.08)" stroke="rgba(45,91,255,0.35)" strokeWidth="1" />
                  <circle cx="50" cy="90" r="16" fill="rgba(45,91,255,0.15)" stroke="rgba(45,91,255,0.5)" strokeWidth="1" />
                  <circle cx="50" cy="90" r="6" fill="#2D5BFF" />
                  <text x="50" y="128" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.55)">London</text>

                  <circle cx="390" cy="80" r="28" fill="rgba(45,91,255,0.08)" stroke="rgba(45,91,255,0.35)" strokeWidth="1" />
                  <circle cx="390" cy="80" r="16" fill="rgba(45,91,255,0.15)" stroke="rgba(45,91,255,0.5)" strokeWidth="1" />
                  <circle cx="390" cy="80" r="6" fill="#2D5BFF" />
                  <text x="390" y="118" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.55)">New York</text>

                  <circle cx="410" cy="290" r="24" fill="rgba(0,184,169,0.08)" stroke="rgba(0,184,169,0.35)" strokeWidth="1" />
                  <circle cx="410" cy="290" r="14" fill="rgba(0,184,169,0.15)" stroke="rgba(0,184,169,0.5)" strokeWidth="1" />
                  <circle cx="410" cy="290" r="5" fill="#00B8A9" />
                  <text x="410" y="324" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.55)">Sydney</text>

                  <circle cx="370" cy="250" r="22" fill="rgba(91,130,255,0.08)" stroke="rgba(91,130,255,0.35)" strokeWidth="1" />
                  <circle cx="370" cy="250" r="13" fill="rgba(91,130,255,0.12)" stroke="rgba(91,130,255,0.4)" strokeWidth="1" />
                  <circle cx="370" cy="250" r="5" fill="#5B82FF" />
                  <text x="370" y="283" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.55)">Singapore</text>

                  <circle cx="230" cy="220" r="52" fill="rgba(0,184,169,0.06)" stroke="rgba(0,184,169,0.15)" strokeWidth="1" />
                  <circle cx="230" cy="220" r="38" fill="rgba(0,184,169,0.10)" stroke="rgba(0,184,169,0.3)" strokeWidth="1.5" />
                  <circle cx="230" cy="220" r="24" fill="rgba(0,184,169,0.18)" stroke="rgba(0,184,169,0.55)" strokeWidth="1.5" />
                  <circle cx="230" cy="220" r="10" fill="#00B8A9" />
                  <text x="230" y="274" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.85)">Kochi, India</text>
                  <text x="230" y="290" textAnchor="middle" fontSize="10" fontWeight="500" fill="rgba(0,184,169,0.8)">Your delivery hub</text>
                </svg>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.08]">
                  <span className="text-xs text-white/40 font-500">Active client network</span>
                  <span className="text-xs text-teal font-600">● Live connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 pb-8 text-white/40 text-[11px] font-500 uppercase tracking-wider relative z-10">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          scroll
        </div>
      </section>

      {/* Who We Work With (Segments) */}
      <AudienceSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Kochi Teaser Section */}
      <WhyKochiTeaserSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Case Studies / Proof Section */}
      <CaseStudiesSection />

      {/* CTA Strip */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
