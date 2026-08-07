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
    <div className="pt-[72px] bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="flex items-center gap-2 aos">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-sm font-500 text-gray-600">GCC & Talent Solutions · Kochi, India</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-800 leading-tight text-navy aos aos-delay-1">
                A thoughtful way<br />
                to build your team<br />
                <em className="text-teal not-italic">in India.</em>
              </h1>

              <p className="text-lg text-gray-600 max-w-md leading-relaxed aos aos-delay-2">
                Whether you&apos;re exploring a GCC for the first time or scaling an existing India presence, we take the time to understand your goals — and help you get there without unnecessary risk or guesswork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 aos aos-delay-3">
                <a
                  href="/book-a-call"
                  className="px-8 py-3 bg-blue text-white font-600 rounded-lg hover:bg-blue-light transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book a Call
                  <span>→</span>
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-3 border border-gray-300 text-gray-900 font-600 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  See how it works
                  <span>→</span>
                </a>
              </div>

              {/* Trust Stats */}
              <div className="pt-8 space-y-4 aos aos-delay-3">
                <p className="text-sm font-500 text-gray-600">Trusted by companies across the US, UK & ANZ</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-700 text-navy">
                      XX<span className="text-sm font-500 ml-1">days</span>
                    </div>
                    <p className="text-sm text-gray-600">Avg. GCC launch time</p>
                  </div>
                  <div>
                    <div className="text-2xl font-700 text-navy">
                      XX<span className="text-sm font-500 ml-1">+</span>
                    </div>
                    <p className="text-sm text-gray-600">Professionals placed</p>
                  </div>
                  <div>
                    <div className="text-2xl font-700 text-navy">
                      XX<span className="text-sm font-500 ml-1">%</span>
                    </div>
                    <p className="text-sm text-gray-600">Cost vs. onshore teams</p>
                  </div>
                  <div>
                    <div className="text-2xl font-700 text-navy">
                      XX<span className="text-sm font-500 ml-1">+</span>
                    </div>
                    <p className="text-sm text-gray-600">Global clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Placeholder */}
            <div className="hidden md:block h-96 bg-gradient-to-br from-blue-pale to-teal-light rounded-2xl aos aos-delay-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Audience Section */}
      <AudienceSection />

      {/* Why Kochi Teaser Section */}
      <WhyKochiTeaserSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
