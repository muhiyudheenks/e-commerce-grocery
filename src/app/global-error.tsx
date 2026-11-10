'use client';

/**
 * Replaces the root layout when it fails, so it cannot rely on globals.css.
 * Styles are inline on purpose.
 */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          color: '#0F172A',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <div>
          <h1 style={{ color: '#0B3D91' }}>Groziq is temporarily unavailable</h1>
          <p style={{ color: '#64748B', lineHeight: 1.6 }}>
            Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: '16px',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              color: '#FFFFFF',
              background: '#0B3D91',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
