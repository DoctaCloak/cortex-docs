import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
        Cortex Documentation
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '600px', marginBottom: '2rem' }}>
        Remember everything. Recall what matters. Build your personal knowledge graph with AI-powered semantic search, Zettelkasten linking, and spaced repetition.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link
          href="/docs"
          style={{
            padding: '0.75rem 2rem',
            background: '#d97757',
            color: 'white',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Get Started
        </Link>
        <Link
          href="/docs/api-reference"
          style={{
            padding: '0.75rem 2rem',
            border: '1px solid #eba88a',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          API Reference
        </Link>
      </div>
    </div>
  )
}
