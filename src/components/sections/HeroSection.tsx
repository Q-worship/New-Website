import { heroCopy, tabItems } from '@/lib/theme'
import { SiteContainer } from '@/components/layout/SiteContainer'
import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { ShowcaseCard } from '@/components/sections/ShowcaseCard'

export function HeroSection() {
  return (
    <section className="pt-28 md:pt-40 lg:pt-44 pb-20 relative overflow-x-hidden reveal active isolate">
      <div
        className="pointer-events-none absolute -top-20 inset-x-0 bottom-0 hero-gradient-bg -z-10"
        aria-hidden
      />
      <SiteContainer className="relative z-10">
        <div className="hero-inner mx-auto w-full max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full hero-badge mb-10">
              <span className="hero-badge__label text-[10px] font-bold uppercase tracking-[0.2em]">
                {heroCopy.badge.label}
              </span>
              <span className="text-xs hero-badge__version">{heroCopy.badge.version}</span>
            </div>
          </div>

          <h1 className="hero-heading font-body font-bold mb-6 w-full text-center">
            <span className="text-white">{heroCopy.heading.line1} </span>
            <span className="hero-heading-accent">{heroCopy.heading.line2}</span>
          </h1>

          <p className="hero-body text-lg md:text-xl mx-auto mb-10 leading-relaxed max-w-2xl text-center">
            {heroCopy.body}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button
              type="button"
              className="hero-download-btn px-10 py-3.5 rounded-xl text-base font-bold"
            >
              Download
            </button>
            <button
              type="button"
              className="hero-demo-btn px-10 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5"
            >
              <MaterialIcon name="play_circle" filled className="text-xl" />
              Book Demo
            </button>
          </div>

          <ShowcaseCard tabs={tabItems} idPrefix="hero" className="showcase-card--5-tabs mt-14" />
        </div>
      </SiteContainer>
    </section>
  )
}
