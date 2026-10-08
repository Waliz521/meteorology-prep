import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { applyAppBrand, applyTopicBrand } from '../lib/brand'
import { supabase } from '../lib/supabase'
import {
  OPTION_KEYS,
  fpscScore,
  formatDuration,
  optionText,
  type OptionKey,
  type Question,
  type QuizStyle,
  type Topic,
} from '../lib/types'

type Props = { userId: string }

type SavedAnswer = {
  question: Question
  selected: OptionKey | null
  correct: boolean
}

export function QuizScreen({ userId }: Props) {
  const { slug } = useParams()
  const [params] = useSearchParams()
  const style: QuizStyle = params.get('mode') === 'mock' ? 'mock' : 'practice'
  const [topic, setTopic] = useState<Topic | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [attemptId, setAttemptId] = useState<string | null>(null)
  const [startedAt, setStartedAt] = useState<number>(Date.now())
  const attemptLock = useRef<PromiseLike<string> | null>(null)
  const finishing = useRef(false)
  const [choice, setChoice] = useState<OptionKey | null>(null)
  const [answers, setAnswers] = useState<SavedAnswer[]>([])
  const [finished, setFinished] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [duration, setDuration] = useState<number | null>(null)

  useEffect(() => {
    if (!slug) return
    document.body.dataset.topic = slug
    applyTopicBrand(slug, topic?.title)
    return () => {
      delete document.body.dataset.topic
      applyAppBrand()
    }
  }, [slug, topic?.title])

  useEffect(() => {
    let cancelled = false
    async function load() {
      const topicRes = await supabase.from('topics').select('*').eq('slug', slug).single()
      if (cancelled) return
      if (topicRes.error || !topicRes.data) {
        setError(topicRes.error?.message ?? 'Topic not found')
        return
      }
      const topicRow = topicRes.data as Topic
      const questionRes = await supabase
        .from('questions')
        .select('*')
        .eq('topic_id', topicRow.id)
        .order('sort_order')
      if (questionRes.error) {
        setError(questionRes.error.message)
        return
      }
      setTopic(topicRow)
      setQuestions(questionRes.data as Question[])
    }
    load()
    return () => {
      cancelled = true
    }
  }, [slug, style, userId])

  async function ensureAttempt() {
    if (attemptId) return attemptId
    if (!topic) throw new Error('Topic is still loading')
    if (!attemptLock.current) {
      attemptLock.current = supabase
        .from('attempts')
        .insert({
          user_id: userId,
          topic_id: topic.id,
          mode: style === 'mock' ? 'mock' : 'topic',
        })
        .select('id')
        .single()
        .then(({ data, error: insertError }) => {
          if (insertError || !data) throw new Error(insertError?.message ?? 'Could not start the quiz')
          setAttemptId(data.id)
          setStartedAt(Date.now())
          return data.id as string
        })
    }
    return attemptLock.current
  }

  const question = questions[index]
  const saved = question ? answers.find((answer) => answer.question.id === question.id) ?? null : null
  const totals = useMemo(() => summarize(answers), [answers])

  async function commit(selected: OptionKey | null) {
    if (!question || busy || saved) return
    setBusy(true)
    setError('')
    try {
      const id = await ensureAttempt()
      const correct = selected != null && selected === question.correct_option
      const { error: saveError } = await supabase.from('attempt_answers').insert({
        attempt_id: id,
        question_id: question.id,
        selected_option: selected,
        is_correct: correct,
      })
      if (saveError) throw new Error(saveError.message)
      setAnswers((prev) => [...prev, { question, selected, correct }])
      setChoice(null)
    } catch (err) {
      attemptLock.current = null
      setError(err instanceof Error ? err.message : 'Could not save the answer')
    } finally {
      setBusy(false)
    }
  }

  function goBack() {
    if (index === 0 || busy) return
    setChoice(null)
    setIndex((n) => n - 1)
  }

  async function goNext() {
    if (!saved) return
    if (index + 1 >= questions.length) {
      if (finishing.current) return
      finishing.current = true
      await finish(answers)
      return
    }
    setChoice(null)
    setIndex((n) => n + 1)
  }

  async function finish(nextAnswers: SavedAnswer[]) {
    if (!attemptId) return
    const summary = summarize(nextAnswers)
    const seconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000))
    const { error: updateError } = await supabase
      .from('attempts')
      .update({
        finished_at: new Date().toISOString(),
        correct_count: summary.correct,
        wrong_count: summary.wrong,
        skipped_count: summary.skipped,
        score: summary.score,
        duration_seconds: seconds,
      })
      .eq('id', attemptId)
    if (updateError) {
      finishing.current = false
      setError(updateError.message)
      return
    }
    setDuration(seconds)
    setFinished(true)
  }

  if (!topic) {
    if (error) return <div className="form-error">{error}</div>
    return <div className="boot">Loading quiz…</div>
  }
  if (questions.length === 0) return <p className="lead">This topic has no questions yet.</p>

  if (finished) {
    return (
      <main>
        <h1>{topic?.title} complete</h1>
        <p className="lead">
          {style === 'mock' ? 'Mock' : 'Practice'} score uses the FPSC penalty: +1 for a correct answer and −0.25 for a wrong one. Skipped questions score 0.
        </p>
        <div className="stats">
          <div className="stat"><b>{totals.score}</b><span>Score out of {answers.length}</span></div>
          <div className="stat"><b>{totals.correct}</b><span>Correct</span></div>
          <div className="stat"><b>{totals.wrong}</b><span>Wrong</span></div>
          <div className="stat"><b>{totals.skipped}</b><span>Skipped</span></div>
          <div className="stat"><b>{formatDuration(duration)}</b><span>Time</span></div>
        </div>
        <div className="actions">
          <Link className="primary" to="/">Back to topics</Link>
          <Link className="ghost" to="/history">Score history</Link>
        </div>
        <div className="review">
          {answers.map((answer, i) => (
            <article className="card" key={answer.question.id}>
              <div className="meta">
                <span className="pill">Q{i + 1}</span>
                {answer.selected == null && <span className="tag-skip">Skipped</span>}
                {answer.selected != null && answer.correct && <span className="tag-good">Correct</span>}
                {answer.selected != null && !answer.correct && <span className="tag-bad">Wrong</span>}
              </div>
              <h3>{answer.question.stem}</h3>
              <p>
                Your answer: {answer.selected ? `${answer.selected}. ${optionText(answer.question, answer.selected)}` : 'Skipped'}
              </p>
              <p>
                Correct: {answer.question.correct_option}. {optionText(answer.question, answer.question.correct_option)}
              </p>
              <div className="explain">
                <strong>Explanation</strong>
                {answer.question.explanation}
              </div>
            </article>
          ))}
        </div>
      </main>
    )
  }

  if (!question) return <div className="boot">Loading quiz…</div>

  const progress = ((index + (saved ? 1 : 0)) / questions.length) * 100
  const showExplain = saved != null

  return (
    <main>
      <div className="quiz-head">
        <div>
          <div className="muted">{style === 'mock' ? 'Mock' : 'Practice'} · {topic.title}</div>
          <h1>
            Question {index + 1} of {questions.length}
          </h1>
        </div>
        <div className="muted">Running score {totals.score}</div>
      </div>
      <div className="progress" aria-hidden>
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="stem">{question.stem}</p>
      <div className="options">
        {OPTION_KEYS.map((key) => {
          const isCorrect = key === question.correct_option
          const isChosen = saved ? key === saved.selected : key === choice
          const className = [
            'option',
            saved && isCorrect ? 'correct' : '',
            saved && isChosen && saved.selected != null && !saved.correct ? 'wrong' : '',
            !saved && isChosen ? 'picked' : '',
          ].filter(Boolean).join(' ')
          return (
            <button
              key={key}
              className={className}
              disabled={saved != null || busy}
              onClick={() => setChoice(key)}
            >
              <span className="key">{key}</span>
              <span>{optionText(question, key)}</span>
            </button>
          )
        })}
      </div>
      {!saved && <p className="hint">Select an answer, then confirm.</p>}
      {showExplain && (
        <div className="explain">
          <strong>{saved.selected == null ? 'Skipped' : saved.correct ? 'Correct' : 'Not quite'}</strong>
          {question.explanation}
        </div>
      )}
      {error && <div className="form-error">{error}</div>}
      <div className="quiz-nav">
        {index > 0 && (
          <button className="ghost" disabled={busy} onClick={goBack}>
            Back
          </button>
        )}
        {!saved && (
          <button className="ghost" disabled={busy} onClick={() => commit(null)}>
            Skip
          </button>
        )}
        {!saved && (
          <button className="primary" disabled={choice == null || busy} onClick={() => commit(choice)}>
            {busy ? 'Saving…' : 'Confirm'}
          </button>
        )}
        {saved && (
          <button className="primary" disabled={busy} onClick={() => goNext()}>
            {index + 1 === questions.length ? 'Finish and save score' : 'Next'}
          </button>
        )}
      </div>
    </main>
  )
}

function summarize(answers: SavedAnswer[]) {
  let correct = 0
  let wrong = 0
  let skipped = 0
  for (const answer of answers) {
    if (answer.selected == null) skipped += 1
    else if (answer.correct) correct += 1
    else wrong += 1
  }
  return { correct, wrong, skipped, score: fpscScore(correct, wrong) }
}
