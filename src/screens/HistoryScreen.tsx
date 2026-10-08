import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { formatDuration, optionText, type Attempt, type OptionKey, type Question, type Topic } from '../lib/types'

type Props = { userId: string }

type Row = Attempt & { topics: Pick<Topic, 'title'> | null }

type ReviewAnswer = {
  selected_option: OptionKey | null
  is_correct: boolean
  questions: Question
}

export function HistoryScreen({ userId }: Props) {
  const [rows, setRows] = useState<Row[]>([])
  const [openId, setOpenId] = useState<string | null>(null)
  const [review, setReview] = useState<ReviewAnswer[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    supabase
      .from('attempts')
      .select('*, topics(title)')
      .eq('user_id', userId)
      .not('finished_at', 'is', null)
      .order('finished_at', { ascending: false })
      .then(({ data, error: loadError }) => {
        if (loadError) setError(loadError.message)
        else setRows((data ?? []) as Row[])
      })
  }, [userId])

  async function toggle(id: string) {
    if (openId === id) {
      setOpenId(null)
      return
    }
    const { data, error: loadError } = await supabase
      .from('attempt_answers')
      .select('selected_option, is_correct, questions(*)')
      .eq('attempt_id', id)
    if (loadError) {
      setError(loadError.message)
      return
    }
    setReview((data ?? []) as unknown as ReviewAnswer[])
    setOpenId(id)
  }

  return (
    <main>
      <h1>Your scores</h1>
      <p className="lead">Every finished quiz is listed here. Open one to read the explanations again.</p>
      {error && <div className="form-error">{error}</div>}
      {rows.length === 0 && <p className="muted">No finished quizzes yet.</p>}
      <div className="review">
        {rows.map((row) => (
          <article className="card" key={row.id}>
            <div className="score-row">
              <div>
                <h3>{row.topics?.title ?? 'Quiz'}</h3>
                <div className="meta">
                  <span className="pill">{row.mode === 'mock' ? 'Mock' : 'Practice'}</span>
                  <span className="pill">{row.finished_at ? new Date(row.finished_at).toLocaleString() : ''}</span>
                  <span className="pill">{formatDuration(row.duration_seconds)}</span>
                </div>
              </div>
              <div>
                <strong>{Number(row.score)}</strong>
                <div className="muted">{row.correct_count} correct · {row.wrong_count} wrong · {row.skipped_count} skipped</div>
              </div>
            </div>
            <button className="linkish" onClick={() => toggle(row.id)}>
              {openId === row.id ? 'Hide explanations' : 'Review explanations'}
            </button>
            {openId === row.id && (
              <div className="review">
                {review.map((answer, i) => (
                  <div key={`${row.id}-${i}`}>
                    <p>
                      <strong>Q{i + 1}. </strong>
                      {answer.questions.stem}
                    </p>
                    <p className={answer.selected_option == null ? 'tag-skip' : answer.is_correct ? 'tag-good' : 'tag-bad'}>
                      {answer.selected_option
                        ? `You chose ${answer.selected_option}. ${optionText(answer.questions, answer.selected_option)}`
                        : 'Skipped'}
                    </p>
                    <p>{answer.questions.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  )
}
