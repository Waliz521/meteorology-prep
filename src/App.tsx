import { useEffect, useState } from 'react'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import { AuthScreen } from './screens/AuthScreen'
import { HomeScreen } from './screens/HomeScreen'
import { QuizScreen } from './screens/QuizScreen'
import { HistoryScreen } from './screens/HistoryScreen'
import { AdminScreen } from './screens/AdminScreen'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [ready, setReady] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setReady(true)
    })
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next)
    })
    return () => data.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!session) {
      setIsAdmin(false)
      setName('')
      return
    }
    supabase
      .from('profiles')
      .select('display_name, is_admin')
      .eq('id', session.user.id)
      .single()
      .then(({ data }) => {
        setName(data?.display_name ?? session.user.email ?? '')
        setIsAdmin(Boolean(data?.is_admin))
      })
  }, [session])

  if (!ready) return <div className="boot">Loading…</div>
  if (!session) return <AuthScreen />

  return (
    <div className="page">
      <header className="topbar">
        <Link to="/" className="brand">
          <strong>Meteorology Prep</strong>
          <span>One shared question bank. Your scores stay on your account.</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Topics
          </NavLink>
          <NavLink to="/history">History</NavLink>
          {isAdmin && <NavLink to="/admin">Analysis</NavLink>}
          <span className="muted">{name}</span>
          <button className="ghost danger" onClick={() => supabase.auth.signOut()}>
            Sign out
          </button>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen userId={session.user.id} />} />
        <Route path="/quiz/:slug" element={<QuizScreen userId={session.user.id} />} />
        <Route path="/history" element={<HistoryScreen userId={session.user.id} />} />
        <Route path="/admin" element={isAdmin ? <AdminScreen /> : <Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
