import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { audienceLabel, type Attempt, type Topic } from '../lib/types'

type Props = { userId: string }

export function HomeScreen({ userId }: Props) {
  const [topics, setTopics] = useState<Topic[]>([])
  const [counts, setCounts] = useState<Record<string, number>>({})
  const [best, setBest] = useState<Record<string, number>>({})
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      const [topicRes, questionRes, attemptRes] = await Promise.all([
        supabase.from('topics').select('id, slug, title, audience, sort_order').order('sort_order'),
        supabase.from('questions').select('topic_id'),
        supabase
          .from('attempts')
          .select('topic_id, score, finished_at')
          .eq('user_id', userId)
          .not('finished_at', 'is', null),
      ])
      if (cancelled) return
      if (topicRes.error || questionRes.error || attemptRes.error) {
        setError(topicRes.error?.message || questionRes.error?.message || attemptRes.error?.message || 'Could not load topics')
        return
      }
      setTopics(topicRes.data as Topic[])
      const nextCounts: Record<string, number> = {}
      for (const row of questionRes.data ?? []) {
        nextCounts[row.topic_id] = (nextCounts[row.topic_id] ?? 0) + 1
      }
      const nextBest: Record<string, number> = {}
      for (const row of (attemptRes.data ?? []) as Pick<Attempt, 'topic_id' | 'score'>[]) {
        if (!row.topic_id) continue
        nextBest[row.topic_id] = Math.max(nextBest[row.topic_id] ?? Number.NEGATIVE_INFINITY, Number(row.score))
      }
      setCounts(nextCounts)
      setBest(nextBest)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [userId])

  const groups = [
    { title: 'Both posts', items: topics.filter((t) => t.audience === 'both') },
    { title: 'Meteorologist only (BS-17)', items: topics.filter((t) => t.audience === 'bs17') },
    { title: 'Assistant Meteorologist only (BS-16)', items: topics.filter((t) => t.audience === 'bs16') },
  ]

  return (
    <main>
      <h1>Topics</h1>
      <p className="lead">
        Practice shows the explanation as soon as you answer. Mock hides it until the end and scores the paper the FPSC way: +1 correct, −0.25 wrong.
      </p>
      {error && <div className="form-error">{error}</div>}
      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="section">{group.title}</h2>
          <div className="grid">
            {group.items.map((topic) => {
              const count = counts[topic.id] ?? 0
              const top = best[topic.id]
              return (
                <article className="card" data-topic={topic.slug} key={topic.id}>
                  <h3>{topic.title}</h3>
                  <div className="meta">
                    <span className="pill">{audienceLabel(topic.audience)}</span>
                    <span className="pill">{count} questions</span>
                    {top != null && <span className="pill">Best {top}</span>}
                  </div>
                  <div className="actions">
                    {count > 0 ? (
                      <>
                        <Link className="primary" to={`/quiz/${topic.slug}?mode=practice`}>
                          Practice
                        </Link>
                        <Link className="ghost" to={`/quiz/${topic.slug}?mode=mock`}>
                          Mock
                        </Link>
                      </>
                    ) : (
                      <span className="muted">Questions for this topic are not loaded yet.</span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}
