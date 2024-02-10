import skillsData from '../skillsData.json';
import { Scards } from '../components/Cards.jsx';

const Skills = () => {
  const frontendImages = skillsData.frontend;
  const backendImages = skillsData.backend;
  const softSkillsImages = skillsData.softSkills;

  return (
    <div className="home-container">
      <div className="right-section">
        <div className="cards-container">
          <Scards title="<Frontend />" images={frontendImages} />
          <Scards title="<Backend />" images={backendImages} />
          <Scards title="<Soft Skills />" images={softSkillsImages} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
