import { SectionHeading } from '@/components/ui/SectionHeading'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { BuiltByPastorsSection } from '@/components/sections/BuiltByPastorsSection'
import { TeamCarouselSection } from '@/components/sections/TeamCarouselSection'

export function About() {
  return (
    <>
      <section className="pt-32 pb-16">
        <SiteContainer className="reveal">
          <SectionHeading
            title={
              <>
                Built By <span className="text-primary">Pastors for Pastors</span>
              </>
            }
            subtitle="Professional-grade presentation tools for the modern technical ministry."
          />
          <p className="text-on-surface-variant text-lg mt-8 max-w-3xl mx-auto text-center leading-relaxed">
            Q-Worship was created by ministry leaders who understand the pressure of Sunday
            mornings. We built the tools we wished we had — intelligent, hands-free, and designed
            for teams of every size.
          </p>
        </SiteContainer>
      </section>
      <BuiltByPastorsSection />
      <TeamCarouselSection />
    </>
  )
}
