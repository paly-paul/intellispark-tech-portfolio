'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useAOS() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 }
    )

    // Re-scan on every route change — client-side navigation swaps page
    // content without remounting this provider, so new .aos elements
    // need to be picked up explicitly.
    const aosElements = document.querySelectorAll('.aos:not(.is-visible)')
    aosElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])
}
