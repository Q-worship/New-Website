import type { CSSProperties } from 'react'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

const TRANSCRIPTION_TEXT =
  "Let's read our Bible from the book of Romans chapter 5 verse 2 where God reminds us of the importance of faith"

const WAVEFORM_BARS = [3, 6, 9, 5, 11, 7, 10, 4, 8, 6, 9, 5]

export function HandsFreeTranscriptionOverlay() {
  return (
    <div className="hfb-transcription">
      <div className="hfb-transcription__header">
        <div className="hfb-transcription__status">
          <MaterialIcon name="graphic_eq" className="hfb-transcription__icon" />
          <span className="hfb-transcription__label">
            Q-worship is Listening ( Stage mic )
          </span>
        </div>

        <div className="hfb-transcription__live-row">
          <div className="hfb-transcription__waveform" aria-hidden>
            {WAVEFORM_BARS.map((height, index) => (
              <span
                key={index}
                className="hfb-transcription__waveform-bar"
                style={{ '--bar-height': `${height}px` } as CSSProperties}
              />
            ))}
          </div>
          <span className="hfb-transcription__live">
            <span className="hfb-transcription__live-dot" aria-hidden />
            LIVE
          </span>
        </div>
      </div>

      <p className="hfb-transcription__text">{TRANSCRIPTION_TEXT}</p>
    </div>
  )
}
