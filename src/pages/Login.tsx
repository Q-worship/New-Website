import { Link } from 'wouter'
import { LoginForm } from '@/components/auth/LoginForm'
import { LoginShowcase } from '@/components/auth/LoginShowcase'
import { images } from '@/lib/theme'

export function Login() {
  return (
    <div className="login-page">
      <header className="login-page__header">
        <Link href="/" className="login-page__logo" aria-label="Q-Worship home">
          <img src={images.logo} alt="" className="login-page__logo-image" />
          <span className="login-page__logo-text">Q-Worship</span>
        </Link>
      </header>

      <main className="login-page__main">
        <div className="login-page__grid">
          <LoginForm />
          <LoginShowcase />
        </div>
      </main>
    </div>
  )
}
