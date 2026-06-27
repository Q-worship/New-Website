import type { CSSProperties } from 'react'
import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { images } from '@/lib/theme'

const WAVEFORM_BARS = [3, 6, 9, 5, 11, 7, 10, 4, 8, 6, 9, 5]
const VERSIONS = ['KJV', 'NKJV', 'NIV', 'GN'] as const

const MATTHEW_8_20 =
  'And Jesus saith unto him, The foxes have holes, and the birds of the air have nests; but the Son of man hath not where to lay his head.'

export function LoginShowcase() {
  return (
    <div className="login-showcase">
      <div className="login-showcase__visual">
        <div className="login-showcase__stage">
          <img
            src={images.handsFreeStage}
            alt="Pastor singing on stage"
            className="login-showcase__stage-image"
          />

          <div className="login-showcase__listening">
            <div className="login-showcase__listening-header">
              <MaterialIcon name="graphic_eq" className="login-showcase__listening-icon" />
              <span className="login-showcase__listening-label">Listening</span>
            </div>
            <div className="login-showcase__listening-waveform" aria-hidden>
              {WAVEFORM_BARS.map((height, index) => (
                <span
                  key={index}
                  className="login-showcase__waveform-bar"
                  style={{ '--bar-height': `${height}px` } as CSSProperties}
                />
              ))}
            </div>
            <p className="login-showcase__listening-text">
              Show me Matthew Chapter 8 verse 20 (KJV)
            </p>
          </div>

          <div className="login-showcase__scripture">
            <p className="login-showcase__scripture-text">{MATTHEW_8_20}</p>
            <div className="login-showcase__versions">
              {VERSIONS.map((version) => (
                <button
                  key={version}
                  type="button"
                  className={`login-showcase__version-tab${
                    version === 'KJV' ? ' login-showcase__version-tab--active' : ''
                  }`}
                >
                  {version === 'KJV' && (
                    <span className="login-showcase__version-dot" aria-hidden />
                  )}
                  {version}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="login-showcase__caption">
        <p className="login-showcase__caption-title">Q-worship Hands free Bible</p>
        <p className="login-showcase__caption-body">Your church service, Powered by voice.</p>
      </div>

      <div className="login-showcase__dots" aria-hidden>
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`login-showcase__dot${index === 0 ? ' login-showcase__dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
