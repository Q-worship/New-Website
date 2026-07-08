import { useEffect, useState } from 'react'
import type { GuideCard } from '@/types/content'
import { guideProductInfo } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'
import type { GuideProductId } from '@/components/sections/GuideProductNav'

interface GuideStepsSectionProps {
  guide: GuideCard
  activeProduct: GuideProductId
}

export function GuideStepsSection({ guide, activeProduct }: GuideStepsSectionProps) {
  const activeContent = activeProduct === 'cloud' ? guide.cloudSteps : guide.steps
  const sections = activeContent?.sections ?? []

  const [activeSectionId, setActiveSectionId] = useState<string | undefined>(sections[0]?.id)
  const [activeStepId, setActiveStepId] = useState<string | undefined>(sections[0]?.steps[0]?.id)

  useEffect(() => {
    setActiveSectionId(sections[0]?.id)
    setActiveStepId(sections[0]?.steps[0]?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct, guide.id])

  if (!guide.steps || sections.length === 0) {
    return null
  }

  const activeSection = sections.find((section) => section.id === activeSectionId) ?? sections[0]
  const activeSectionIndex = sections.findIndex((section) => section.id === activeSection.id)
  const nextSection = sections[activeSectionIndex + 1]

  const goToSection = (sectionId: string) => {
    const section = sections.find((item) => item.id === sectionId)
    if (!section) return
    setActiveSectionId(section.id)
    setActiveStepId(section.steps[0]?.id)
  }

  const toggleStep = (stepId: string) => {
    setActiveStepId((current) => (current === stepId ? undefined : stepId))
  }

  return (
    <section className="guide-steps-section reveal">
      <SiteContainer>
        <div className="guide-steps-grid">
          <aside className="guide-steps-sidebar">
            <div className="guide-steps-sidebar-card">
              <h2 className="guide-steps-sidebar-title font-headline">
                {guideProductInfo[activeProduct].title}
              </h2>
              <p className="guide-steps-sidebar-summary">{guideProductInfo[activeProduct].description}</p>
              <button type="button" className="guide-steps-download-btn">
                Download
                <MaterialIcon name="download" className="guide-steps-download-icon" aria-hidden />
              </button>
            </div>

            <p className="guide-steps-nav-label">Sections</p>
            <nav className="guide-steps-nav" aria-label="Guide sections">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`guide-steps-nav-item${
                    section.id === activeSection.id ? ' guide-steps-nav-item--active' : ''
                  }`}
                  onClick={() => goToSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="guide-steps-content">
            <h3 className="guide-steps-content-heading font-headline">{activeSection.label}</h3>
            <p className="guide-steps-content-description">{activeSection.description}</p>

            <div className="guide-steps-accordion">
              {activeSection.steps.map((step, index) => {
                const isOpen = step.id === activeStepId

                return (
                  <div
                    key={step.id}
                    className={`guide-steps-item${isOpen ? ' guide-steps-item--open' : ''}`}
                  >
                    <button
                      type="button"
                      className="guide-steps-item-header"
                      aria-expanded={isOpen}
                      onClick={() => toggleStep(step.id)}
                    >
                      <span
                        className={`guide-steps-item-number${
                          isOpen ? ' guide-steps-item-number--active' : ''
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="guide-steps-item-title">{step.title}</span>
                      <MaterialIcon
                        name="expand_more"
                        className="guide-steps-item-chevron"
                        aria-hidden
                      />
                    </button>

                    {isOpen && (
                      <div className="guide-steps-item-body">
                        <p>{step.body}</p>
                        {step.checklist && step.checklist.length > 0 && (
                          <ul className="guide-steps-checklist">
                            {step.checklist.map((item) => (
                              <li key={item} className="guide-steps-checklist-item">
                                <span className="guide-steps-checklist-icon">
                                  <MaterialIcon name="check" filled className="text-[12px]" />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {nextSection && (
              <button
                type="button"
                className="guide-steps-next-btn"
                onClick={() => goToSection(nextSection.id)}
              >
                Next: {nextSection.label}
                <MaterialIcon name="arrow_forward" aria-hidden />
              </button>
            )}
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}
