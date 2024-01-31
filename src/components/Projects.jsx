import React from 'react';
import { Link } from 'react-router-dom';

// Composant pour une carte (Card)
const CustomCard = ({ title, imageSrc, link }) => {
  return (
    <div className="proj-card">
      <Link to={link}>
      <img src={imageSrc} alt={title} className='img-proj'/>
      <h5>en savoir plus</h5>
      </Link>
    </div>
  );
};

const Projects = () => {
  // Liste de vos projets avec les titres et chemins d'image
  const projectsList = [
    {
      title: 'Kasa',
      imageSrc: 'images/kasalogo.png', // Remplacez par le chemin de votre image
      link: './Kasa',
    },
    {
      title: 'Mon Vieux Grimoire',
      imageSrc: 'images/mvglogo.png',
      link: './mon-vieux-grimoire',
    },
    {
      title: 'Nina Carducci',
      imageSrc: 'images/nclogo.png',
      link: './nina-carducci',
    },
    {
      title: 'Sophie Bluel',
      imageSrc: 'images/sblogo.png',
      link: './sophie-bluel',
    },
    // Ajoutez autant de projets que nécessaire
  ];

  return (
    <div className="home-container">
      <div className="right-section">
        {/* Section des cartes */}
        <div className="cards-container">
          {projectsList.map((project, index) => (
            <CustomCard key={index} title={project.title} imageSrc={project.imageSrc} link={project.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
