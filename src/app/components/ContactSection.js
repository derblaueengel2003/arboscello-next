export default function ContactSection() {
  return (
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
  );
}
