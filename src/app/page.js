export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:
          "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: '#f5f5f7',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
          border: '1px solid rgba(148, 163, 184, 0.25)',
        }}
      >
        <header
          style={{
            marginBottom: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'baseline',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '2rem',
                margin: 0,
                color: '#0f172a',
              }}
            >
              Angelo Arboscello
            </h1>
            <p
              style={{
                margin: '0.35rem 0 0',
                color: '#64748b',
              }}
            >
              Administrative assistant · Aspiring developer · SaaS & tooling
              enthusiast
            </p>
          </div>
          <nav
            style={{
              fontSize: '0.9rem',
              display: 'flex',
              gap: '0.75rem',
              color: '#475569',
            }}
          >
            <a
              href='#about'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              About
            </a>
            <span>·</span>
            <a
              href='#projects'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Projects
            </a>
            <span>·</span>
            <a
              href='#contact'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Contact
            </a>
          </nav>
        </header>

        <section id='about' style={{ marginBottom: '1.75rem' }}>
          <h2
            style={{
              fontSize: '1.1rem',
              margin: 0,
              marginBottom: '0.5rem',
              color: '#0f172a',
            }}
          >
            About
          </h2>
          <p
            style={{
              margin: 0,
              color: '#4b5563',
              lineHeight: 1.6,
            }}
          >
            I&apos;m an administrative assistant at the Italian Embassy in
            Berlin, passionate about software, automation and modern web
            technologies. I love building tools that make everyday work smoother
            – from HR workflows to personal finance dashboards.
          </p>
        </section>

        <section id='projects' style={{ marginBottom: '1.75rem' }}>
          <h2
            style={{
              fontSize: '1.1rem',
              margin: 0,
              marginBottom: '0.75rem',
              color: '#0f172a',
            }}
          >
            Selected projects
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                padding: '1rem',
                borderRadius: '0.9rem',
                border: '1px solid rgba(148, 163, 184, 0.4)',
                backgroundColor: '#f9fafb',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  marginBottom: '0.35rem',
                  fontSize: '1rem',
                  color: '#0f172a',
                }}
              >
                myDesk
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: '#4b5563',
                  lineHeight: 1.5,
                }}
              >
                Vacation planning project created for the CS50 Web Programming
                with Python and JavaScript.
              </p>
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '0.9rem',
                border: '1px solid rgba(148, 163, 184, 0.4)',
                backgroundColor: '#f9fafb',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  marginBottom: '0.35rem',
                  fontSize: '1rem',
                  color: '#0f172a',
                }}
              >
                Gestionale m2Square
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: '#4b5563',
                  lineHeight: 1.5,
                }}
              >
                A custom Tool I created for managing the Real Estate Workflow
                from acquisition to billing.
              </p>
            </div>
          </div>
        </section>

        <section id='contact'>
          <h2
            style={{
              fontSize: '1.1rem',
              margin: 0,
              marginBottom: '0.5rem',
              color: '#0f172a',
            }}
          >
            Contact
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: '0.4rem',
              color: '#4b5563',
              lineHeight: 1.6,
            }}
          >
            You can find me online here:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              fontSize: '0.9rem',
            }}
          >
            <li>
              <a
                href='https://github.com/derblaueengel2003'
                target='_blank'
                rel='noreferrer'
                style={{ color: '#2563eb', textDecoration: 'none' }}
              >
                GitHub
              </a>
            </li>
            <li>·</li>
            <li>
              <a
                href='https://www.linkedin.com/in/angelo-arboscello'
                target='_blank'
                rel='noreferrer'
                style={{ color: '#2563eb', textDecoration: 'none' }}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
