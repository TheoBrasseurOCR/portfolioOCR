import skillsData from '../skillsData.json';
import { Scards } from '../components/Cards.jsx';

const Skills = () => {
  const frontendImages = skillsData.frontend;
  const backendImages = skillsData.backend;
  const softSkillsImages = skillsData.softSkills;

  return (
    <div className="home-container">
      <div className="right-section">
        {/* Section des cartes */}
        <div className="cards-container">
          {/* Les trois cartes sont toujours ouvertes */}
          <Scards title="<Frontend />" images={frontendImages} />
          <Scards title="<Backend />" images={backendImages} />
          <Scards title="<Soft Skills />" images={softSkillsImages} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
