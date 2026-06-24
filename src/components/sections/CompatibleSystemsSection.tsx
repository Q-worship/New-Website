import { compatibleSystems } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'
import { PartnerLogo } from '@/components/ui/PartnerLogos'

const marqueeSystems = [...compatibleSystems, ...compatibleSystems]

export function CompatibleSystemsSection() {
  return (
    <section className="compatible-systems-section section-gap reveal bg-black">
      <SiteContainer>
        <h2 className="font-headline text-center text-2xl md:text-3xl font-medium text-white">
          Compatible with{' '}
          <span className="relative inline-block">
            all
            <span
              className="absolute -bottom-1 left-1/2 h-px w-20 -translate-x-1/2 bg-[#6B6B6B]"
              aria-hidden="true"
            />
          </span>{' '}
          your favourite systems
        </h2>
      </SiteContainer>

      <div className="compatible-systems-marquee mt-28 overflow-hidden">
        <div className="compatible-systems-track">
          {marqueeSystems.map((system, index) => (
            <div
              key={`${system.icon}-${index}`}
              className="compatible-systems-item"
            >
              <PartnerLogo
                icon={system.icon}
                className="h-16 w-16 md:h-20 md:w-20"
              />
              <span className="font-bold text-white">{system.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
