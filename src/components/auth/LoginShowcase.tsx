import { useEffect, useState } from 'react'
import { loginShowcaseSlides } from '@/lib/theme'

const AUTO_ADVANCE_MS = 5000

export function LoginShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  const activeSlide = loginShowcaseSlides[activeIndex]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % loginShowcaseSlides.length)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(intervalId)
  }, [activeIndex, reduceMotion])

  return (
    <div className="login-showcase">
      <div className="login-showcase__visual">
        <div className="login-showcase__stage">
          {loginShowcaseSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className={`login-showcase__slide${
                index === activeIndex
                  ? ' login-showcase__slide--active'
                  : ' login-showcase__slide--inactive'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="login-showcase__caption" aria-live="polite">
        <p className="login-showcase__caption-title">{activeSlide.title}</p>
        <p className="login-showcase__caption-body">{activeSlide.body}</p>
      </div>

      <div
        className="login-showcase__dots"
        role="tablist"
        aria-label="Login feature showcase"
      >
        {loginShowcaseSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={slide.title}
            className={`login-showcase__dot${
              index === activeIndex ? ' login-showcase__dot--active' : ''
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
