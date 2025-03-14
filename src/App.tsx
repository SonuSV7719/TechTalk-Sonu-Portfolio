import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import CertificatesSection from './components/CertificatesSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <Footer />
    </div>
  );
}

export default App;