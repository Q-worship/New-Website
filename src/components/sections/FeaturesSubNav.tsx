import { useEffect, useRef, useState } from 'react'

import { featuresSubNavItems } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

const SCROLL_OFFSET = 120
const TOP_SCROLL_THRESHOLD = 200

const SECTION_TO_NAV_ID: Record<string, string> = {
  overview: 'hands-free-bible',
}

function getHrefTargetId(href: string): string {
  return href.replace('#', '')
}

function getUniqueSectionIds(): string[] {
  return [
    ...new Set(featuresSubNavItems.map((item) => getHrefTargetId(item.href))),
  ]
}

function getNavIdForSection(sectionId: string): string {
  return SECTION_TO_NAV_ID[sectionId] ?? sectionId
}

export function FeaturesSubNav() {
  const [activeId, setActiveId] = useState(featuresSubNavItems[0].id)
  const overviewVisibleRef = useRef(false)

  useEffect(() => {
    const sectionIds = getUniqueSectionIds()
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'overview') {
            overviewVisibleRef.current = entry.isIntersecting
          }
        })

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(getNavIdForSection(visible[0].target.id))
          return
        }

        if (window.scrollY < TOP_SCROLL_THRESHOLD && !overviewVisibleRef.current) {
          setActiveId('overview')
        }
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.55],
      },
    )

    const handleScroll = () => {
      if (window.scrollY < TOP_SCROLL_THRESHOLD && !overviewVisibleRef.current) {
        setActiveId('overview')
      }
    }

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (item: (typeof featuresSubNavItems)[number]) => {
    const targetId = getHrefTargetId(item.href)
    const target = document.getElementById(targetId)
    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveId(item.id)
  }

  return (
    <nav className="features-subnav" aria-label="Features sections">
      <SiteContainer>
        <div className="features-subnav-inner">
          <img
            src="/Photos/features/Group%202085663381.png"
            alt="Q-worship Features"
            className="features-subnav-brand-image"
          />

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
                  onClick={() => handleNavClick(item)}
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
