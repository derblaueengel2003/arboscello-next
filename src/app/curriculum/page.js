import '../curriculum.css';
import CvHeader from './components/CvHeader';
import CvActions from './components/CvActions';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';

export default function Curriculum() {
  return (
    <main className='cv-page'>
      <div className='cv-card'>
        <CvHeader />
        <CvActions />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </main>
  );
}
