import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faGraduationCap, faMusic, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.scss'; // Assurez-vous d'importer le fichier CSS pour les styles

const HomeCard = ({ title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`homeCard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <h3>
            {title === '<Présentation />' && (
              <>
                {title}
                <div className="home-icon-container">
                  <FontAwesomeIcon icon={faAddressCard} size="2x" />
                </div>
              </>
            )}
            {title === '<Diplômes />' && (
              <>
                {title}
                <div className="home-icon-container">
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                </div>
              </>
            )}
            {title === '<Passions />' && (
              <>
                {title}
                <div className="home-icon-container">
                  <FontAwesomeIcon icon={faMusic} size="2x" />
                </div>
              </>
            )}
            {title === '<Expériences />' && (
              <>
                {title}
                <div className="home-icon-container">
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </div>
              </>
            )}
            {title !== '<Présentation />' && title !== '<Diplômes />' && title !== '<Passions />' && title !== '<Expériences />' && title}
          </h3>
        </div>
        <div className="card-back">
          {isFlipped && <p>{content}</p>}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <div className="right-section">
        <div className="card-container">
          <HomeCard title="<Présentation />" content="Je suis Théo Brasseur, un développeur web Full-Stack de 27 ans basé à Lille, en France. Mon expertise technique s'accompagne d'un excellent niveau d'anglais, me permettant de travailler efficacement à l'international." />
          <HomeCard title="<Diplômes />" content="Je détiens un diplôme Bac+2 en développement web obtenu auprès d'Openclassrooms. Mon parcours académique inclut également un Baccalauréat Littéraire avec une spécialisation en Anglais Européen, attestant d'un niveau d'anglais A2." />
          <HomeCard title="<Passions />" content="Passionné par la musique, les nouvelles technologies et le sport individuel, ces domaines enrichissent ma vie quotidienne et alimentent ma curiosité." />
          <HomeCard title="<Expériences />" content="Dessinateur projeteur à mes débuts, j'ai ensuite évolué en tant que chargé de projet dans le domaine de la méthanisation. Par la suite, j'ai dirigé ma propre entreprise pendant deux ans, de 2022 à 2024, avant de me lancer dans une reconversion professionnelle." />
        </div>
      </div>
    </div>
  );
};

export default Home;
