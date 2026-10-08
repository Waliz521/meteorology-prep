export type Audience = 'both' | 'bs17' | 'bs16'
export type OptionKey = 'A' | 'B' | 'C' | 'D'
export type QuizStyle = 'practice' | 'mock'

export type Topic = {
  id: string
  slug: string
  title: string
  audience: Audience
  sort_order: number
}

export type Question = {
  id: string
  topic_id: string
  stem: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_option: OptionKey
  explanation: string
  sort_order: number
}

export type Attempt = {
  id: string
  user_id: string
  topic_id: string | null
  mode: 'topic' | 'mock'
  started_at: string
  finished_at: string | null
  correct_count: number
  wrong_count: number
  skipped_count: number
  score: number
  duration_seconds: number | null
}

export type Profile = {
  id: string
  display_name: string | null
  created_at: string
  is_admin: boolean
}

export const OPTION_KEYS: OptionKey[] = ['A', 'B', 'C', 'D']

export function optionText(question: Question, key: OptionKey) {
  if (key === 'A') return question.option_a
  if (key === 'B') return question.option_b
  if (key === 'C') return question.option_c
  return question.option_d
}

export function fpscScore(correct: number, wrong: number) {
  return Math.round((correct - wrong * 0.25) * 100) / 100
}

export function formatDuration(seconds: number | null) {
  if (seconds == null) return '—'
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  if (m === 0) return `${s}s`
  return `${m}m ${s}s`
}

export function audienceLabel(audience: Audience) {
  if (audience === 'bs17') return 'Meteorologist (BS-17)'
  if (audience === 'bs16') return 'Assistant Meteorologist (BS-16)'
  return 'Both posts'
}
