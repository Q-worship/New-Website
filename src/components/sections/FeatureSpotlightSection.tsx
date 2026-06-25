import { useState, type ReactNode } from 'react'

import type { AccordionSpotlightContent, ChecklistSpotlightContent } from '@/types/content'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { HandsFreeTranscriptionOverlay } from '@/components/sections/HandsFreeTranscriptionOverlay'

interface ChecklistCardsProps {
  content: ChecklistSpotlightContent
  visualOverlay?: ReactNode
}

function ChecklistCardsSpotlight({ content, visualOverlay }: ChecklistCardsProps) {
  return (
    <section id={content.id} className="feature-spotlight-section section-gap reveal scroll-mt-28">
      <SiteContainer>
        <div className="feature-spotlight-grid">
          <div className="feature-spotlight-visual">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="feature-spotlight-image"
              loading="lazy"
            />
            {visualOverlay}
          </div>

          <div className="feature-spotlight-copy">
            <h2 className="feature-spotlight-title font-headline font-bold">
              <span className="text-white">{content.title.before} </span>
              <span className="text-primary">{content.title.accent}</span>
              {content.title.after && (
                <span className="text-white"> {content.title.after}</span>
              )}
            </h2>

            <p className="feature-spotlight-body">{content.body}</p>

            <ul className="build-tabs-feature-list feature-spotlight-checklist">
              {content.checklist.map((item) => (
                <li key={item} className="build-tabs-feature-item">
                  <span className="build-tabs-feature-icon">
                    <MaterialIcon name="check" filled className="text-[12px]" />
                  </span>
                  <span className="build-tabs-feature-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="feature-spotlight-cards">
          {content.cards.map((card) => (
            <div key={card.title} className="feature-spotlight-card">
              <h3 className="feature-spotlight-card-title">{card.title}</h3>
              <p className="feature-spotlight-card-body">{card.description}</p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  )
}

interface AccordionSpotlightProps {
  content: AccordionSpotlightContent
}

function AccordionSpotlight({ content }: AccordionSpotlightProps) {
  const [activeItemId, setActiveItemId] = useState(content.items[0].id)
  const activeItem = content.items.find((item) => item.id === activeItemId) ?? content.items[0]

  return (
    <section id={content.id} className="feature-spotlight-section section-gap reveal scroll-mt-28">
      <SiteContainer>
        <div className="feature-spotlight-header">
          <h2 className="feature-spotlight-accordion-heading font-headline font-bold">
            <span className="text-white block">{content.header.line1}</span>
            <span className="block">
              <span className="text-on-surface-variant">{content.header.line2Before}</span>
              <span className="text-primary">{content.header.accent}</span>
            </span>
          </h2>
          <p className="feature-spotlight-accordion-subtitle">{content.subtitle}</p>
        </div>

        <div className="feature-spotlight-accordion-grid">
          <div className="feature-spotlight-visual">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="feature-spotlight-image"
              loading="lazy"
            />
          </div>

          <div className="feature-spotlight-accordion-list" role="tablist" aria-label="On-screen Bible features">
            {content.items.map((item) => {
              const isActive = item.id === activeItemId

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`feature-spotlight-accordion-item${
                    isActive ? ' feature-spotlight-accordion-item--active' : ''
                  }`}
                  onClick={() => setActiveItemId(item.id)}
                >
                  <h3 className="feature-spotlight-accordion-item-title">{item.title}</h3>
                  {isActive && (
                    <p className="feature-spotlight-accordion-item-body">{activeItem.description}</p>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}

export function FeatureSpotlightChecklistSection({
  content,
  showListeningOverlay = false,
}: {
  content: ChecklistSpotlightContent
  showListeningOverlay?: boolean
}) {
  return (
    <ChecklistCardsSpotlight
      content={content}
      visualOverlay={showListeningOverlay ? <HandsFreeTranscriptionOverlay variant="features" /> : undefined}
    />
  )
}

export function FeatureSpotlightAccordionSection({
  content,
}: {
  content: AccordionSpotlightContent
}) {
  return <AccordionSpotlight content={content} />
}
