import { assetLibraryVideos } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'
import { GlassButton } from '@/components/ui/GlassButton'
import { useMediaInView } from '@/hooks/useMediaInView'

export function AssetLibrarySection() {
  const { ref: videosRef, isInView } = useMediaInView<HTMLDivElement>()

  return (
    <>
      <SiteContainer className="text-center mb-10 lg:mb-12">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-primary">
          Extensive Asset Library
        </h2>
        <p className="text-on-surface-variant text-lg max-w-3xl mx-auto mb-12">
          Every background, motion graphic, and worship visual your church needs — all in one searchable
          library. Find the perfect backdrop in seconds, not minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap px-6 sm:px-0">
          <button
            type="button"
            className="w-full sm:w-auto bg-white text-background px-10 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all touch-target"
          >
            Start for free today
          </button>
          <GlassButton icon="play_circle" iconFilled className="w-full sm:w-auto px-10 py-4 rounded-xl touch-target">
            Book Demo
          </GlassButton>
        </div>
      </SiteContainer>
      <div ref={videosRef} className="asset-library-lower-cards">
        {assetLibraryVideos.map((src) => (
          <div className="asset-library-lower-card" key={src}>
            <video
              src={src}
              className="asset-library-lower-card-img"
              autoPlay
              muted
              loop
              playsInline
              preload={isInView ? 'auto' : 'metadata'}
            />
          </div>
        ))}
      </div>
    </>
  )
}
