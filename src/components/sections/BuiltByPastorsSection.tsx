import { images } from '@/lib/theme'

import { SiteContainer } from '@/components/layout/SiteContainer'

import { MaterialIcon } from '@/components/ui/MaterialIcon'



const checklistItems = [

  'Auto-tagging based on mood and color',

  'Direct integration with Unsplash & Pexels',

]



export function BuiltByPastorsSection() {

  return (

    <section className="built-by-pastors-section section-gap reveal">

      <SiteContainer>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-stretch">

          <div className="space-y-6 lg:space-y-8">

            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
              Built By <span className="text-primary">Pastors</span> for <span className="text-primary">Pastors</span>
            </h2>

            <p className="text-on-surface-variant text-lg">

              Every feature is tuned for technical precision and cinematic flair.

            </p>

            <p className="text-on-surface-variant text-lg leading-relaxed">

              Intelligent categorization and global search for your entire media library. Find the

              perfect background in seconds, not minutes.

            </p>

            <div className="space-y-4 pt-2">

              {checklistItems.map((item) => (

                <div key={item} className="flex items-start gap-3">

                  <MaterialIcon name="check_circle" filled className="text-primary shrink-0 mt-0.5" />

                  <span className="font-medium">{item}</span>

                </div>

              ))}

            </div>

            <button type="button" className="built-by-pastors-btn mt-4">

              Join our mailing list

            </button>

          </div>



          <div className="built-by-pastors-section__media">
            <img
              alt="Pastor speaking at a podium"
              className="built-by-pastors-section__image"
              src={images.pastor}
            />
          </div>

        </div>

      </SiteContainer>

    </section>

  )

}


