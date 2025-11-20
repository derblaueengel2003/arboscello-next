export default function Project({ title, description, link }) {
  return (
    <div className='project-card'>
      <h3 className='project-title'>{title}</h3>
      <p className='project-text'>{description}</p>
      <div className='project-link-row'>
        <a className='project-link' href={link} target='_blank' rel='noreferrer'>
          View project
        </a>
      </div>
    </div>
  );
}
