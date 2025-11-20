import { languages, programmingTags, itSummary } from '../../utils/cvData';

export default function SkillsSection() {
  return (
    <section className='cv-section'>
      <h2 className='cv-section-title'>Further knowledge and skills</h2>

      <div className='cv-item'>
        <p className='cv-role'>Language skills</p>
        <ul className='cv-bullets'>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>

      <div className='cv-item'>
        <p className='cv-role'>IT</p>
        <p className='cv-description'>{itSummary}</p>
        <p className='cv-sublist-title'>Programming languages</p>
        <ul className='cv-taglist'>
          {programmingTags.map((tag) => (
            <li key={tag} className='cv-tag'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
