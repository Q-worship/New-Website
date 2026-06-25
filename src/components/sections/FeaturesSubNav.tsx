import { useEffect, useState } from 'react'

import { featuresSubNavItems } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

const SCROLL_OFFSET = 120

export function FeaturesSubNav() {
  const [activeId, setActiveId] = useState(featuresSubNavItems[0].id)

  useEffect(() => {
    const sectionIds = featuresSubNavItems.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveId(id)
  }

  return (
    <nav className="features-subnav" aria-label="Features sections">
      <SiteContainer>
        <div className="features-subnav-inner">
          <div className="features-subnav-brand">
            <img src="/Photos/logo.png" alt="" className="features-subnav-logo" aria-hidden />
            <span className="features-subnav-title">Q-worship Features</span>
          </div>

          <div className="features-subnav-links hide-scrollbar" role="tablist">
            {featuresSubNavItems.map((item) => {
              const isActive = activeId === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`features-subnav-link${isActive ? ' features-subnav-link--active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <MaterialIcon
            name="chevron_right"
            className="features-subnav-chevron shrink-0 lg:hidden"
            aria-hidden
          />
        </div>
      </SiteContainer>
    </nav>
  )
}
