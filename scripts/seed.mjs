import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, '..', 'data')

const adminSql = `
alter table public.profiles
  add column if not exists is_admin boolean not null default false;

alter table public.attempts
  add column if not exists duration_seconds int;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select coalesce((select p.is_admin from public.profiles p where p.id = auth.uid()), false);
$$;

grant execute on function public.is_admin() to authenticated;

drop policy if exists "admins read profiles" on public.profiles;
create policy "admins read profiles"
  on public.profiles for select to authenticated
  using (public.is_admin());

drop policy if exists "admins read all attempts" on public.attempts;
create policy "admins read all attempts"
  on public.attempts for select to authenticated
  using (public.is_admin());

drop policy if exists "admins read all answers" on public.attempt_answers;
create policy "admins read all answers"
  on public.attempt_answers for select to authenticated
  using (public.is_admin());
`

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

await client.connect()
await client.query(adminSql)
await client.query(`
  insert into public.topics (slug, title, audience, sort_order)
  values ('oscar', 'Oscars', 'both', 0)
  on conflict (slug) do update
  set title = excluded.title, audience = excluded.audience, sort_order = excluded.sort_order
`)

const files = fs.readdirSync(dataDir).filter((name) => name.endsWith('.json'))
for (const file of files) {
  const slug = path.basename(file, '.json')
  const questions = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'))
  const topic = await client.query('select id from public.topics where slug = $1', [slug])
  if (topic.rowCount !== 1) {
    console.error(`No topic for ${slug}`)
    continue
  }
  const topicId = topic.rows[0].id
  await client.query(
    `delete from public.questions q
     where q.topic_id = $1
       and not exists (
         select 1 from public.attempt_answers a where a.question_id = q.id
       )`,
    [topicId],
  )
  const params = [topicId]
  const rows = questions.map((q, i) => {
    const base = params.length
    params.push(q.stem, q.a, q.b, q.c, q.d, q.correct, q.explanation, i + 1)
    return `($1,$${base + 1},$${base + 2},$${base + 3},$${base + 4},$${base + 5},$${base + 6},$${base + 7},$${base + 8})`
  })
  await client.query(
    `insert into public.questions
      (topic_id, stem, option_a, option_b, option_c, option_d, correct_option, explanation, sort_order)
     values ${rows.join(',')}
     on conflict (topic_id, sort_order) do update set
       stem = excluded.stem,
       option_a = excluded.option_a,
       option_b = excluded.option_b,
       option_c = excluded.option_c,
       option_d = excluded.option_d,
       correct_option = excluded.correct_option,
       explanation = excluded.explanation`,
    params,
  )
  console.log(`${slug}: ${questions.length} questions`)
}

await client.end()
