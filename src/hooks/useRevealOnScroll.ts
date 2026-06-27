import { useEffect } from 'react'
import { useLocation } from 'wouter'

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewHeight - 150 && rect.bottom > 0
}

function activate(el: Element) {
  el.classList.add('active')
}

export function useRevealOnScroll(selector = '.reveal') {
  const [location] = useLocation()

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const setup = () => {
      observer?.disconnect()

      const elements = document.querySelectorAll(selector)

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activate(entry.target)
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -150px 0px' },
      )

      elements.forEach((el) => {
        if (el.classList.contains('active')) return

        if (isInViewport(el)) {
          activate(el)
          return
        }

        observer?.observe(el)
      })
    }

    setup()
    const frame = requestAnimationFrame(setup)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [selector, location])
}
