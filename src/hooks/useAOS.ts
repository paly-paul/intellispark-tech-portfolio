'use client'

import { useEffect } from 'react'

export function useAOS() {
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

    const aosElements = document.querySelectorAll('.aos')
    aosElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
