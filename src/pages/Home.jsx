import React from 'react';
import { Hcards } from '../components/Cards'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="right-section">
        <div className="card-container">
          <Hcards title="<Présentation />" content="Je suis Théo Brasseur, un développeur web Full-Stack de 27 ans basé à Lille, en France. Mon expertise technique s'accompagne d'un excellent niveau d'anglais, me permettant de travailler efficacement à l'international." />
          <Hcards title="<Diplômes />" content="Je détiens un diplôme Bac+2 en développement web obtenu auprès d'Openclassrooms. Mon parcours académique inclut également un Baccalauréat Littéraire avec une spécialisation en Anglais Européen, attestant d'un niveau d'anglais A2." />
          <Hcards title="<Passions />" content="Passionné par la musique, les nouvelles technologies et le sport individuel, ces domaines enrichissent ma vie quotidienne et alimentent ma curiosité." />
          <Hcards title="<Expériences />" content="Dessinateur projeteur à mes débuts, j'ai ensuite évolué en tant que chargé de projet dans le domaine de la méthanisation. Par la suite, j'ai dirigé ma propre entreprise pendant deux ans, de 2022 à 2024, avant de me lancer dans une reconversion professionnelle." />
        </div>
      </div>
    </div>
  );
};

export default Home;
