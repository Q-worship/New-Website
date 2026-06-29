import { teamCards } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'

import { useHorizontalCarousel } from '@/hooks/useHorizontalCarousel'

import { MaterialIcon } from '@/components/ui/MaterialIcon'

export function TeamCarouselSection() {
  const { carouselRef, scrollNext } = useHorizontalCarousel(520)

  return (
    <section className="team-carousel-section section-gap reveal">
      <SiteContainer>
        <div className="team-carousel-header">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            Built for all parts of the team
          </h2>

          <div className="team-carousel-nav">
            <button
              type="button"
              onClick={scrollNext}
              className="team-carousel-nav-btn"
              aria-label="Next cards"
            >
              <MaterialIcon name="arrow_forward" className="team-carousel-arrow" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x hide-scrollbar"
        >
          {teamCards.map((card) => (
            <div
              key={card.title}
              tabIndex={0}
              className="team-carousel-card w-[85vw] sm:w-[70vw] lg:w-[44vw] xl:w-[32vw] max-w-[560px] snap-center flex-shrink-0 group cursor-default focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:outline-none"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={card.image}
                />
                <div className="team-carousel-overlay">
                  <div className="team-carousel-overlay-content">
                    {card.icon && (
                      <MaterialIcon
                        name={card.icon}
                        className="team-carousel-overlay-icon text-primary"
                      />
                    )}
                    <h3 className="team-carousel-overlay-title font-headline text-xl sm:text-2xl font-bold">
                      {card.title}
                    </h3>
                    {card.description && (
                      <p className="team-carousel-overlay-desc">{card.description}</p>
                    )}
                    {card.showButton && (
                      <button type="button" className="team-carousel-card-btn">
                        {card.buttonText ?? 'Start for free today'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  )
}
