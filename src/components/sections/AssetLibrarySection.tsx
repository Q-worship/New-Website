import { assetLibraryImages } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'
import { GlassButton } from '@/components/ui/GlassButton'

export function AssetLibrarySection() {
  return (
    <>
      <SiteContainer className="text-center mb-10 lg:mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-primary">
          Extensive Asset Library
        </h2>
        <p className="text-on-surface-variant text-lg max-w-3xl mx-auto mb-12">
          Every background, motion graphic, and worship visual your church needs — all in one searchable
          library. Find the perfect backdrop in seconds, not minutes.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            type="button"
            className="bg-white text-background px-10 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
          >
            Start for free today
          </button>
          <GlassButton icon="play_circle" iconFilled className="px-10 py-4 rounded-xl">
            Book Demo
          </GlassButton>
        </div>
      </SiteContainer>
      <div className="asset-library-lower-cards">
        {assetLibraryImages.map((src) => (
          <div className="asset-library-lower-card" key={src}>
            <img
              src={src}
              alt=""
              className="asset-library-lower-card-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </>
  )
}
