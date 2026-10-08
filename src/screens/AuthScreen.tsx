import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function AuthScreen() {
  const [mode, setMode] = useState<'in' | 'up'>('in')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setNotice('')
    if (mode === 'in') {
      const { error: signError } = await supabase.auth.signInWithPassword({ email, password })
      setBusy(false)
      if (signError) setError(signError.message)
      return
    }
    const { data, error: signError } = await supabase.auth.signUp({ email, password })
    setBusy(false)
    if (signError) {
      setError(signError.message)
      return
    }
    if (!data.session) {
      setNotice('Account created. Confirm the email, then sign in. If confirmation is off, sign in now.')
    }
  }

  return (
    <div className="auth-wrap">
      <form className="auth card" onSubmit={submit}>
        <h1>Meteorology Prep</h1>
        <p className="lead">
          Practice for the FPSC Meteorologist and Assistant Meteorologist papers. Everyone sits the same questions. Each account keeps its own scores.
        </p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" autoComplete={mode === 'in' ? 'current-password' : 'new-password'} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
        {error && <div className="form-error">{error}</div>}
        {notice && <div className="banner ok">{notice}</div>}
        <button className="primary" disabled={busy} type="submit">
          {busy ? 'Please wait…' : mode === 'in' ? 'Sign in' : 'Create account'}
        </button>
        <p>
          <button
            type="button"
            className="linkish"
            onClick={() => {
              setMode(mode === 'in' ? 'up' : 'in')
              setError('')
              setNotice('')
            }}
          >
            {mode === 'in' ? 'Need an account? Create one' : 'Already have an account? Sign in'}
          </button>
        </p>
      </form>
    </div>
  )
}
