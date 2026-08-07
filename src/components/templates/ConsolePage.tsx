'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ConsolePageProps, NavSection } from '@/lib/types'

export default function ConsolePage({
  eyebrow,
  icon,
  h1,
  h1ClassName,
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
              <h1 className={h1ClassName ?? 'text-3xl md:text-4xl font-800 leading-tight mb-4'}>{h1}</h1>
              <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">{intro}</p>
            </div>

            <div className="flex flex-row md:flex-col flex-wrap gap-3 items-start md:items-end">
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
        <aside className="w-full md:w-64 px-6 md:px-0 md:pr-8 py-12 md:py-16 bg-white md:border-r border-gray-200 flex-shrink-0 relative">
          <div className="md:sticky md:top-[100px] md:max-h-[calc(100vh-120px)] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            {/* Sections */}
            <div className="mb-7">
              <h3 className="text-[10px] font-700 text-gray-400 uppercase tracking-wider mb-4">On this page</h3>
              <nav className="flex flex-col gap-0.5">
                {navSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-3 py-2 rounded-[7px] text-[13.5px] transition-all border-l-2 ${activeSection === section.id
                        ? 'font-600 text-navy bg-gray-50 border-navy'
                        : 'font-500 text-gray-500 hover:text-gray-900 hover:bg-gray-50 border-transparent'
                      }`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
              <Link
                href="/book-a-call"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2 text-white text-center text-[13.5px] font-600 rounded-[9px] transition-transform hover:-translate-y-[1px]"
                style={{
                  backgroundColor: accent,
                  boxShadow: `0 2px 12px ${accent}44`,
                }}
              >
                Book a Call →
              </Link>
              <Link
                href="/case-studies"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2 text-center text-[13.5px] font-600 rounded-[9px] bg-gray-100 text-gray-700 hover:bg-gray-200 transition-transform hover:-translate-y-[1px]"
              >
                See our work
              </Link>
            </div>

            {/* Related Pages */}
            <div>
              <h3 className="text-[10px] font-700 text-gray-400 uppercase tracking-wider mb-2.5">Related</h3>
              <div className="flex flex-col gap-1">
                {related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-[12.5px] py-1 text-gray-500 hover:text-blue-600 transition-colors"
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
