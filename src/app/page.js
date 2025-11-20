import './home.css';

export default function Home() {
  return (
    <main className='home-page'>
      <div className='home-card'>
        <header className='home-header'>
          <div>
            <h1 className='home-title'>Angelo Arboscello</h1>
            <p className='home-subtitle'>
              Administrative assistant · Aspiring developer · SaaS & tooling
              enthusiast
            </p>
          </div>
          <nav className='home-nav' hidden>
            <a className='home-nav-link' href='#about'>
              About
            </a>
            <span className='home-nav-separator'>·</span>
            <a className='home-nav-link' href='#projects'>
              Projects
            </a>
            <span className='home-nav-separator'>·</span>
            <a className='home-nav-link' href='#contact'>
              Contact
            </a>
          </nav>
        </header>

        <section id='about' className='home-section'>
          <h2 className='section-title'>About</h2>
          <p className='section-text'>
            I am an administrative professional with a solid background in
            diplomatic, real estate, and technology environments. I combine
            organizational precision with genuine curiosity for digital
            innovation and software development. Over the years, I have learned
            to simplify complex workflows, automate processes, and make data
            work for people. I value collaboration, clarity, and efficiency —
            qualities that help me adapt easily to hybrid or remote workplaces.
            My goal is to contribute to a modern, tech-driven organization where
            reliability meets innovation.
          </p>
        </section>

        <section id='projects' className='home-section'>
          <h2 className='section-title projects-title'>Selected projects</h2>

          <div className='projects-grid'>
            <div className='project-card'>
              <h3 className='project-title'>myDesk</h3>
              <a
                className='project-link'
                href='https://github.com/derblaueengel2003/capstone/'
                target='_blank'
                rel='noreferrer'
              >
                View project
              </a>
              <p className='project-text'>
                Vacation planning project created for the CS50 Web Programming
                with Python and JavaScript.
              </p>
            </div>

            <div className='project-card'>
              <h3 className='project-title'>Gestionale m2Square</h3>
              <a
                className='project-link'
                href='https://github.com/derblaueengel2003/gestionale-electron'
                target='_blank'
                rel='noreferrer'
              >
                View project
              </a>
              <p className='project-text'>
                A custom Tool I created for managing the Real Estate Workflow
                from acquisition to billing.
              </p>
            </div>
          </div>
        </section>

        <section id='contact' className='home-section'>
          <h2 className='section-title'>Contact</h2>
          <p className='contact-text'>You can find me online here:</p>
          <ul className='contact-list'>
            <li>
              <a
                className='contact-link'
                href='https://github.com/derblaueengel2003'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </li>
            <li className='home-nav-separator'>·</li>
            <li>
              <a
                className='contact-link'
                href='https://www.linkedin.com/in/angelo-arboscello'
                target='_blank'
                rel='noreferrer'
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
