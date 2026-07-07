import type { GuideCard } from '@/types/content'
import { featuresHeroCopy, guidesHeroCopy } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'

interface GuideDetailHeroSectionProps {
  guide: GuideCard
}

export function GuideDetailHeroSection({ guide }: GuideDetailHeroSectionProps) {
  return (
    <section className="guide-detail-hero-section pt-32 md:pt-36 pb-16 md:pb-20 reveal active">
      <SiteContainer>
        <div className="features-hero-grid">
          <div className="features-hero-copy">
            <div className="features-hero-badge">{guidesHeroCopy.badge}</div>

            <h1 className="guide-detail-hero-heading font-headline font-bold">{guide.title}</h1>

            <p className="features-hero-body">{featuresHeroCopy.body}</p>

            <div className="features-hero-actions cta-pair-mobile-inline">
              <button type="button" className="features-hero-download-btn">
                {guidesHeroCopy.primaryCta}
              </button>
              <button type="button" className="features-hero-secondary-btn">
                {guidesHeroCopy.secondaryCta}
              </button>
            </div>
          </div>

          <div className="features-hero-media">
            <img
              src={guide.image}
              alt={guide.imageAlt}
              className="guide-detail-hero-image"
              loading="eager"
            />
          </div>
        </div>
      </SiteContainer>
    </section>
  )
}
