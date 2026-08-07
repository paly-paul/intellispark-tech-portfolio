'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ConsolePageProps, NavSection } from '@/lib/types'

export default function ConsolePage({
  eyebrow,
  icon,
  h1,
  intro,
  accent,
  badges,
  navSections,
  related,
  children,
}: ConsolePageProps) {
  const [activeSection, setActiveSection] = useState<string>(navSections[0]?.id || '')
  const pathname = usePathname()
  const contentRef = useRef<HTMLDivElement>(null)

  // Set up scroll spy for active section
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1,
    })

    // Observe all sections
    const sections = contentRef.current?.querySelectorAll('[data-section]')
    sections?.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-navy text-white py-16 md:py-20 px-6 md:px-8 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10"
          style={{
            background: `radial-gradient(ellipse at 80% 40%, ${accent}, transparent 65%)`,
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-700 text-white/60 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {icon}
                {eyebrow}
              </div>
              <h1 className="text-3xl md:text-4xl font-800 leading-tight mb-4">{h1}</h1>
              <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">{intro}</p>
            </div>

            <div className="flex flex-col gap-3">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-500 text-white w-fit"
                  style={{
                    borderColor: `${accent}40`,
                    color: accent,
                  }}
                >
                  <span>📍</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Console Layout */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto md:px-12">
        {/* Sticky Left Rail */}
        <aside className="w-full md:w-64 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] px-6 md:px-0 md:pr-8 py-12 md:py-16 bg-white md:border-r border-gray-200 flex-shrink-0">
          <div className="md:sticky md:top-24">
            {/* Sections */}
            <div className="mb-8">
              <h3 className="text-xs font-700 text-gray-600 uppercase tracking-wider mb-4">On this page</h3>
              <nav className="space-y-1">
                {navSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                      activeSection === section.id
                        ? 'font-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={{
                      backgroundColor: activeSection === section.id ? accent : 'transparent',
                    }}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTAs */}
            <div className="space-y-2 mb-8 pb-8 border-b border-gray-200">
              <Link
                href="/book-a-call"
                className="block w-full px-4 py-2.5 text-white text-center text-sm font-600 rounded-lg transition-colors"
                style={{
                  backgroundColor: accent,
                  boxShadow: `0 2px 12px ${accent}44`,
                }}
              >
                Book a Call →
              </Link>
              <Link
                href="/case-studies"
                className="block w-full px-4 py-2.5 text-center text-sm font-600 rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
              >
                See our work
              </Link>
            </div>

            {/* Related Pages */}
            <div>
              <h3 className="text-xs font-700 text-gray-600 uppercase tracking-wider mb-4">Related</h3>
              <div className="space-y-2">
                {related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 px-6 md:pl-12 md:pr-0 py-12 md:py-16 max-w-4xl"
          ref={contentRef}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
