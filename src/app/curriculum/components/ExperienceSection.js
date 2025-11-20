import { experience } from '../../utils/cvData';

export default function ExperienceSection() {
  return (
    <section className='cv-section'>
      <h2 className='cv-section-title'>Professional experience</h2>
      <ul className='cv-list'>
        {experience.map((item) => (
          <li key={item.role + item.dates} className='cv-item'>
            <div className='cv-item-header'>
              <div>
                <p className='cv-role'>{item.role}</p>
                <p className='cv-place'>{item.place}</p>
              </div>
              <p className='cv-dates'>{item.dates}</p>
            </div>

            {item.descriptions?.map((text, idx) => (
              <p key={idx} className='cv-description'>
                {text}
              </p>
            ))}

            {item.bullets && item.bullets.length > 0 && (
              <ul className='cv-bullets'>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
