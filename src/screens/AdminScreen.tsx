import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { type Profile, type Topic } from '../lib/types'

type AttemptRow = {
  id: string
  user_id: string
  topic_id: string | null
  score: number
  finished_at: string | null
  correct_count: number
  wrong_count: number
}

type AnswerRow = {
  question_id: string
  is_correct: boolean
  questions: { stem: string; topic_id: string } | null
}

export function AdminScreen() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [attempts, setAttempts] = useState<AttemptRow[]>([])
  const [answers, setAnswers] = useState<AnswerRow[]>([])
  const [topics, setTopics] = useState<Topic[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([
      supabase.from('profiles').select('id, display_name, created_at, is_admin').order('created_at'),
      supabase.from('attempts').select('id, user_id, topic_id, score, finished_at, correct_count, wrong_count'),
      supabase.from('attempt_answers').select('question_id, is_correct, questions(stem, topic_id)'),
      supabase.from('topics').select('id, slug, title, audience, sort_order'),
    ]).then(([people, tries, picks, topicRes]) => {
      const message = people.error?.message || tries.error?.message || picks.error?.message || topicRes.error?.message
      if (message) {
        setError(message)
        return
      }
      setProfiles((people.data ?? []) as Profile[])
      setAttempts((tries.data ?? []) as AttemptRow[])
      setAnswers((picks.data ?? []) as unknown as AnswerRow[])
      setTopics((topicRes.data ?? []) as Topic[])
    })
  }, [])

  const finished = attempts.filter((row) => row.finished_at)
  const average = finished.length
    ? Math.round((finished.reduce((sum, row) => sum + Number(row.score), 0) / finished.length) * 100) / 100
    : 0

  const byUser = profiles.map((person) => {
    const mine = finished.filter((row) => row.user_id === person.id)
    const avg = mine.length
      ? Math.round((mine.reduce((sum, row) => sum + Number(row.score), 0) / mine.length) * 100) / 100
      : null
    const last = mine.map((row) => row.finished_at).filter(Boolean).sort().at(-1)
    return { person, count: mine.length, avg, last }
  })

  const byTopic = topics.map((topic) => {
    const mine = finished.filter((row) => row.topic_id === topic.id)
    const avg = mine.length
      ? Math.round((mine.reduce((sum, row) => sum + Number(row.score), 0) / mine.length) * 100) / 100
      : null
    return { topic, count: mine.length, avg }
  })

  const difficulty = new Map<string, { stem: string; correct: number; total: number }>()
  for (const answer of answers) {
    const current = difficulty.get(answer.question_id) ?? {
      stem: answer.questions?.stem ?? 'Question',
      correct: 0,
      total: 0,
    }
    current.total += 1
    if (answer.is_correct) current.correct += 1
    difficulty.set(answer.question_id, current)
  }
  const hardest = [...difficulty.values()]
    .filter((row) => row.total > 0)
    .sort((a, b) => a.correct / a.total - b.correct / b.total)
    .slice(0, 8)

  return (
    <main>
      <h1>User base</h1>
      <p className="lead">
        This page is only on your admin account. It reads everyone’s finished quizzes so you can see who is studying and which questions are causing trouble.
      </p>
      {error && <div className="form-error">{error}</div>}
      <div className="stats">
        <div className="stat"><b>{profiles.length}</b><span>Accounts</span></div>
        <div className="stat"><b>{finished.length}</b><span>Finished quizzes</span></div>
        <div className="stat"><b>{average}</b><span>Average score</span></div>
        <div className="stat"><b>{profiles.filter((p) => finished.some((a) => a.user_id === p.id)).length}</b><span>People who finished a quiz</span></div>
      </div>

      <h2 className="section">People</h2>
      <div className="panel table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Joined</th>
              <th>Finished quizzes</th>
              <th>Average score</th>
              <th>Last finish</th>
            </tr>
          </thead>
          <tbody>
            {byUser.map(({ person, count, avg, last }) => (
              <tr key={person.id}>
                <td>{person.display_name ?? 'Unnamed'}{person.is_admin ? ' · admin' : ''}</td>
                <td>{new Date(person.created_at).toLocaleDateString()}</td>
                <td>{count}</td>
                <td>{avg ?? '—'}</td>
                <td>{last ? new Date(last).toLocaleString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section">Topics</h2>
      <div className="panel table-wrap">
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Finished quizzes</th>
              <th>Average score</th>
            </tr>
          </thead>
          <tbody>
            {byTopic.map(({ topic, count, avg }) => (
              <tr key={topic.id}>
                <td>{topic.title}</td>
                <td>{count}</td>
                <td>{avg ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section">Questions most people miss</h2>
      {hardest.length === 0 && <p className="muted">No answers recorded yet.</p>}
      <div className="review">
        {hardest.map((row) => (
          <article className="card" key={row.stem}>
            <h3>{row.stem}</h3>
            <p className="muted">
              {row.correct} correct out of {row.total} ({Math.round((row.correct / row.total) * 100)}%)
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
