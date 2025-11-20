import Project from './Project';
import { projects } from '../utils/projects';

export default function ProjectsSection() {
  return (
    <section id='projects' className='home-section'>
      <h2 className='section-title projects-title'>Selected projects</h2>

      <div className='projects-grid'>
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
