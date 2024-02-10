import React from 'react';
import { Pcards } from '../components/Cards';

const Projects = () => {
  const projectsList = [
    {
      title: 'Kasa',
      imageSrc: 'images/kasalogo.png',
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
  ];

  return (
    <div className="home-container">
      <div className="right-section">
        <div className="cards-container">
          {projectsList.map((project, index) => (
            <Pcards key={index} title={project.title} imageSrc={project.imageSrc} link={project.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
