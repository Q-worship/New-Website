import { prePastorsHandsFreeSpotlight } from '@/lib/theme'
import { FeatureSpotlightChecklistSection } from '@/components/sections/FeatureSpotlightSection'

export function PrePastorsHandsFreeSection() {
  return (
    <FeatureSpotlightChecklistSection
      content={prePastorsHandsFreeSpotlight}
      showListeningOverlay
    />
  )
}
