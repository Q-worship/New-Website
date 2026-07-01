const trialFeatures = [
  'Online Voice Bible Search (6+ Bibles)',
  'On-screen Bible - 5+ Bibles',
  'Rich Slide Canvas - text, elements, images, QR codes, layers',
  'Lower Third Builder & Pre-built templates',
  'Advanced media tagging & collections',
  'Multi - Branch Discount - Up to 5 branches',
  'Power Point Export & Back-up',
  'Priority Email Support',
] as const

interface TrialWelcomeModalProps {
  onStartTrial: () => void
}

export function TrialWelcomeModal({ onStartTrial }: TrialWelcomeModalProps) {
  return (
    <div className="trial-welcome">
      <header className="trial-welcome__header">
        <h1 className="trial-welcome__title">
          Welcome to Your{' '}
          <span className="trial-welcome__title-accent">
            Q-worship Cloud Pro 30 days Free Trial
          </span>
        </h1>
        <p className="trial-welcome__subtitle">
          Your free trial begins now and runs for a period of 30 days. Enjoy all
          the perks of Pro on us
        </p>
        <p className="trial-welcome__section-label">
          What&apos;s included in your free trial
        </p>
      </header>

      <div className="trial-welcome__grid">
        <section className="trial-welcome__card trial-welcome__card--features">
          <div className="trial-welcome__card-head">
            <span className="trial-welcome__icon trial-welcome__icon--purple" aria-hidden="true" />
            <h2 className="trial-welcome__card-title trial-welcome__card-title--purple">
              Features
            </h2>
          </div>
          <ul className="trial-welcome__list">
            {trialFeatures.map((feature) => (
              <li key={feature} className="trial-welcome__list-item">
                <span className="trial-welcome__check" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="trial-welcome__footnote">
            ... And Everything in Pro, plus more
          </p>
        </section>

        <div className="trial-welcome__stack">
          <section className="trial-welcome__card">
            <div className="trial-welcome__card-head">
              <span className="trial-welcome__icon trial-welcome__icon--teal" aria-hidden="true" />
              <h2 className="trial-welcome__card-title trial-welcome__card-title--teal">
                Trial Duration
              </h2>
            </div>
            <p className="trial-welcome__card-body">
              Your trial starts today and runs for 30 full days. You&apos;ll receive
              email reminders as your trial approaches its end.
            </p>
          </section>

          <section className="trial-welcome__card">
            <div className="trial-welcome__card-head">
              <span className="trial-welcome__icon trial-welcome__icon--teal" aria-hidden="true" />
              <h2 className="trial-welcome__card-title trial-welcome__card-title--teal">
                What happens after my free trial
              </h2>
            </div>
            <p className="trial-welcome__card-body">
              Near the end of your trial, you&apos;ll be prompted to choose a paid
              plan to continue using Q-worship. If no plan is selected, your
              account will be safely locked with all data preserved for 90 days.
            </p>
          </section>
        </div>

        <section className="trial-welcome__card">
          <div className="trial-welcome__card-head">
            <span className="trial-welcome__icon trial-welcome__icon--yellow" aria-hidden="true" />
            <h2 className="trial-welcome__card-title trial-welcome__card-title--yellow">
              Important
            </h2>
          </div>
          <p className="trial-welcome__card-body">
            No payment information is required during your trial. You can explore
            all features risk-free and decide if Q-worship is right for your
            ministry.
          </p>
        </section>
      </div>

      <footer className="trial-welcome__footer">
        <button type="button" className="trial-welcome__cta" onClick={onStartTrial}>
          Start free Trial
        </button>
        <p className="trial-welcome__demo">
          Need a demo?{' '}
          <a href="/about" className="trial-welcome__demo-link">
            Book here
          </a>
        </p>
      </footer>
    </div>
  )
}
