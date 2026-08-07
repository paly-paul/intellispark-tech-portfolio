'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Lightning, CaretDown, Buildings, ArrowsClockwise, UsersThree, Code, Robot, MapPin } from '@phosphor-icons/react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (
        servicesOpen &&
        servicesDropdownRef.current &&
        servicesButtonRef.current &&
        !servicesDropdownRef.current.contains(target) &&
        !servicesButtonRef.current.contains(target)
      ) {
        setServicesOpen(false)
      }

      if (mobileOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [servicesOpen, mobileOpen])

  const handleOverlayClick = () => {
    setServicesOpen(false)
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const services = [
    {
      href: '/gcc-setup',
      title: 'GCC Setup',
      desc: 'End-to-end Global Capability Centre establishment',
      icon: Buildings,
      bgColor: '#EEF2FF',
      textColor: '#2D5BFF',
    },
    {
      href: '/bot-copo',
      title: 'BOT / COPO',
      desc: 'Build-Operate-Transfer with flexible exit options',
      icon: ArrowsClockwise,
      bgColor: '#E6FBF9',
      textColor: '#00B8A9',
    },
    {
      href: '/staff-augmentation',
      title: 'Staff Augmentation',
      desc: 'Vetted talent, embedded in your team',
      icon: UsersThree,
      bgColor: '#FFFBEB',
      textColor: '#D97706',
    },
    {
      href: '/product-engineering',
      title: 'Product Engineering',
      desc: 'Custom software built for scale',
      icon: Code,
      bgColor: '#F3EEFF',
      textColor: '#7C3AED',
    },
    {
      href: '/aipods',
      title: 'AiPODS',
      desc: 'AI-powered offshore delivery squads',
      icon: Robot,
      bgColor: '#ECFDF5',
      textColor: '#059669',
    },
    {
      href: '/service-delivery',
      title: 'Service Delivery Centres',
      desc: 'Dedicated centres for ongoing operations',
      icon: MapPin,
      bgColor: '#EEF2FF',
      textColor: '#2D5BFF',
    },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-[72px] z-[1000] transition-colors transition-shadow duration-250 ${
          scrolled
<<<<<<< HEAD
            ? 'border-b border-gray-200 shadow-lg bg-white'
            : 'border-b border-transparent bg-white'
=======
            ? 'border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-[14px]'
            : 'border-b border-transparent backdrop-blur-[14px]'
>>>>>>> origin/main
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        }}
      >
        <div className="h-full flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Intellispark home">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-teal to-blue rounded">
              <Lightning weight="bold" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Intellispark</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            <li>
              <Link href="/gcc-setup" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
                GCC Solutions
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative" id="servicesMenu">
              <button
                ref={servicesButtonRef}
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-2 text-sm font-500 text-gray-900 hover:text-blue transition-colors"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                id="servicesBtn"
              >
                Services
                <CaretDown size={14} weight="bold" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-[52px] left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-x-8 gap-y-4 animate-in fade-in slide-in-from-top-2"
                  ref={servicesDropdownRef}
                  role="menu"
                  aria-labelledby="servicesBtn"
                >
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
<<<<<<< HEAD
                        className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
=======
                        role="menuitem"
                        className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
>>>>>>> origin/main
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: service.bgColor, color: service.textColor }}
                        >
                          <Icon weight="fill" size={20} />
                        </div>
                        <div className="text-left flex-1">
                          <div className="text-[14.5px] font-600 text-gray-900 group-hover:text-blue mb-1">{service.title}</div>
                          <div className="text-[13px] text-gray-500 leading-snug">{service.desc}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </li>

            <li>
              <Link href="/kochi-advantage" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
                Kochi Advantage
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-500 text-gray-900 hover:text-blue transition-colors">
                About
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/book-a-call"
              className="px-6 py-2 bg-blue text-white text-sm font-600 rounded-lg hover:bg-blue-light transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/book-a-call"
              className="px-4 py-2 bg-blue text-white text-xs font-600 rounded-lg hover:bg-blue-light transition-colors"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-6 h-6 flex flex-col justify-center gap-1.5 hover:opacity-70"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobileMenu"
            >
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[72px] bg-white z-[999] md:hidden overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation"
          ref={mobileMenuRef}
          id="mobileMenu"
        >
          <div className="p-6 space-y-6">
            <a href="/gcc-setup" className="block text-sm font-500 text-gray-900 hover:text-blue">
              GCC Solutions
            </a>

            <div className="text-xs font-600 text-gray-600 uppercase tracking-wider">Services</div>
            <div className="space-y-2 pl-0">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 py-2 text-sm text-gray-900 hover:text-blue"
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: service.bgColor, color: service.textColor }}
                    >
                      <Icon weight="fill" size={14} />
                    </div>
                    {service.title}
                  </Link>
                )
              })}
            </div>

            <a href="/kochi-advantage" className="block text-sm font-500 text-gray-900 hover:text-blue">
              Kochi Advantage
            </a>
            <a href="/case-studies" className="block text-sm font-500 text-gray-900 hover:text-blue">
              Case Studies
            </a>
            <a href="/about" className="block text-sm font-500 text-gray-900 hover:text-blue">
              About
            </a>
          </div>
        </div>
      )}

      {/* Overlay */}
      {(servicesOpen || mobileOpen) && (
        <div
          className="fixed inset-0 z-[998] bg-black/20"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}
    </>
  )
}
