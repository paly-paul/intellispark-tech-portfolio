import type { Metadata } from 'next'
import ArrowRight from '@/components/icons/ArrowRight'
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
      <section className="hero relative flex min-h-screen flex-col overflow-hidden bg-navy pt-[72px] text-white">
        <div
          className="hero__bg-image absolute inset-0"
          aria-hidden="true"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="hero__bg-gradient absolute inset-0" aria-hidden="true" />

        <div className="hero__orbs pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="hero__grid absolute inset-0" aria-hidden="true" />

        <div className="hero__inner relative z-10 mx-auto grid max-w-7xl w-full flex-1 grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
          <div className="hero__copy">
            <div className="hero__eyebrow aos">
              <span className="eyebrow-dot" />
              GCC & Talent Solutions · Kochi, India
            </div>

            <h1 className="hero__headline aos aos-delay-1">
              A thoughtful way
              <br />
              to build your team
              <br />
              <em>in India.</em>
            </h1>

            <p className="hero__sub aos aos-delay-2">
              Whether you&apos;re exploring a GCC for the first time or scaling an existing India presence, we take the time to understand your goals — and help you get there without unnecessary risk or guesswork.
            </p>

            <div className="hero__ctas aos aos-delay-3">
              <a
                href="/book-a-call"
                className="btn-hero-primary"
              >
                Book a Call
                <ArrowRight size={16} />
              </a>
              <a href="/case-studies" className="btn-hero-secondary">
                See how it works
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="hero__trust aos aos-delay-3">
              <p className="trust-label">Trusted by companies across the US, UK &amp; ANZ</p>
              <div className="trust-stats">
                {[
                  { val: 'XX', unit: 'days', label: 'Avg. GCC launch time' },
                  { val: 'XX', unit: '+', label: 'Professionals placed' },
                  { val: 'XX', unit: '%', label: 'Cost vs. onshore teams' },
                  { val: 'XX', unit: '+', label: 'Global clients' },
                ].map((stat, idx) => (
                  <div key={idx} className="trust-stat">
                    <div className="trust-stat__number">
                      {stat.val}
                      <span>{stat.unit}</span>
                    </div>
                    <p className="trust-stat__label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero__visual aos aos-delay-2" aria-hidden="true">
            <div className="metric-card">
              <div className="metric-icon" style={{ background: '#EEF2FF', color: '#2D5BFF' }}>
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 24C72.3 24 28 68.3 28 124C28 179.7 72.3 224 128 224C183.7 224 228 179.7 228 124C228 68.3 183.7 24 128 24ZM128 212C79.4 212 40 172.6 40 124C40 75.4 79.4 36 128 36C176.6 36 216 75.4 216 124C216 172.6 176.6 212 128 212Z" fill="currentColor" />
                  <path d="M166 98L108 140.7L90 122" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="metric-text">
                <strong>GCC Live in 90 Days</strong>
                <span>Fastest in the industry</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon" style={{ background: '#E6FBF9', color: '#00B8A9' }}>
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 24C72.3 24 28 68.3 28 124C28 179.7 72.3 224 128 224C183.7 224 228 179.7 228 124C228 68.3 183.7 24 128 24ZM128 212C79.4 212 40 172.6 40 124C40 75.4 79.4 36 128 36C176.6 36 216 75.4 216 124C216 172.6 176.6 212 128 212Z" fill="currentColor" />
                  <path d="M176 120L112 184L88 160" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="metric-text">
                <strong>Zero attrition in Year 1</strong>
                <span>Retained talent pipeline</span>
              </div>
            </div>

            <div className="visual-card">
              <div className="network-svg-wrap">
                <svg viewBox="0 0 460 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <g stroke="rgba(45,91,255,0.25)" strokeWidth="1.2" strokeDasharray="5,4">
                    <path d="M230 220 C180 160, 80 130, 50 90" />
                    <path d="M230 220 C260 160, 340 120, 390 80" />
                    <path d="M230 220 C290 240, 370 260, 410 290" />
                    <path d="M230 220 C270 230, 340 240, 370 250" />
                  </g>

                  <circle r="4" fill="#2D5BFF" opacity="0.9">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M230 220 C180 160, 80 130, 50 90" />
                    <animate attributeName="opacity" values="0;0.9;0" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#00B8A9" opacity="0.9">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M230 220 C260 160, 340 120, 390 80" />
                    <animate attributeName="opacity" values="0;0.9;0" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3.5" fill="#5B82FF" opacity="0.8">
                    <animateMotion dur="4.5s" repeatCount="indefinite" begin="1s" path="M230 220 C290 240, 370 260, 410 290" />
                    <animate attributeName="opacity" values="0;0.8;0" dur="4.5s" begin="1s" repeatCount="indefinite" />
                  </circle>

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

                  <circle cx="230" cy="220" r="52" fill="rgba(0,184,169,0.06)" stroke="rgba(0,184,169,0.15)" strokeWidth="1">
                    <animate attributeName="r" values="48;56;48" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="230" cy="220" r="38" fill="rgba(0,184,169,0.10)" stroke="rgba(0,184,169,0.3)" strokeWidth="1.5" />
                  <circle cx="230" cy="220" r="24" fill="rgba(0,184,169,0.18)" stroke="rgba(0,184,169,0.55)" strokeWidth="1.5" />
                  <circle cx="230" cy="220" r="10" fill="#00B8A9" />
                  <text x="230" y="274" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.85)">Kochi, India</text>
                  <text x="230" y="290" textAnchor="middle" fontSize="10" fontWeight="500" fill="rgba(0,184,169,0.8)">Your delivery hub</text>
                  <rect x="216" y="205" width="5" height="10" rx="1" fill="rgba(0,184,169,0.6)" />
                  <rect x="223" y="200" width="6" height="15" rx="1" fill="rgba(0,184,169,0.8)" />
                  <rect x="231" y="208" width="4" height="7" rx="1" fill="rgba(0,184,169,0.5)" />
                  <rect x="237" y="203" width="5" height="12" rx="1" fill="rgba(0,184,169,0.7)" />
                </svg>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="text-xs font-500 text-white/40">Active client network</span>
                <span className="text-xs font-600 text-teal">● Live connections</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll hidden md:flex">
          <div className="scroll-line" />
          <span>scroll</span>
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
