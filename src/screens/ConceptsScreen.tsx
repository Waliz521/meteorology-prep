import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CONCEPTS } from '../content/concepts'

export function ConceptsScreen() {
  const { slug = '' } = useParams()
  const topic = CONCEPTS[slug]

  useEffect(() => {
    if (!slug || !topic) return
    document.body.dataset.topic = slug
    document.title = `${topic.title} concepts · Prep`
    return () => {
      delete document.body.dataset.topic
      document.title = 'Meteorology Prep'
    }
  }, [slug, topic])

  if (!topic) {
    return (
      <main>
        <h1>Concepts</h1>
        <p className="lead">This topic has no concept notes yet.</p>
        <Link className="primary" to="/">Back to topics</Link>
      </main>
    )
  }

  return (
    <main>
      <p className="muted">Concepts</p>
      <h1>{topic.title}</h1>
      <p className="lead">{topic.intro}</p>
      {topic.items.map((item) => (
        <article className="concept" key={item.title}>
          <h2>{item.title}</h2>
          {item.figure && (
            <figure>
              <img src={item.figure.src} alt={item.figure.alt} />
              <figcaption>{item.figure.caption}</figcaption>
              <p className="credit">
                <a href={item.figure.href} target="_blank" rel="noreferrer">{item.figure.credit}</a>
              </p>
            </figure>
          )}
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      ))}
      {topic.calculations && topic.calculations.length > 0 && (
        <section>
          <h2 className="section">Worked calculations</h2>
          <p className="lead">Each of these is one step, the sort of sum an interview asks out loud. Read the given numbers, do that one step, then check the answer.</p>
          {topic.calculations.map((sum) => (
            <article className="worked" key={sum.title}>
              <h3>{sum.title}</h3>
              <p><strong>Given. </strong>{sum.given}</p>
              <p><strong>Working. </strong>{sum.working}</p>
              <p className="answer"><strong>Answer. </strong>{sum.answer}</p>
            </article>
          ))}
        </section>
      )}
      <div className="actions">
        <Link className="primary" to={`/quiz/${slug}?mode=practice`}>Practice this topic</Link>
        <Link className="ghost" to="/">All topics</Link>
      </div>
    </main>
  )
}
