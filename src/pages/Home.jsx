import React from 'react';
import { Hcards } from '../components/Cards'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="right-section">
        <div className="card-container">
          <Hcards title="<Présentation />" content={
              <>
                Je suis Théo Brasseur, <strong>un développeur web Full-Stack</strong> de 27 ans basé à Lille, en France. Mon expertise technique s'accompagne d'un <strong>excellent niveau d'anglais</strong>, me permettant de travailler efficacement à l'international.
              </>
            }
          />
          <Hcards title="<Diplômes />" content={
              <>
                Je détiens un <strong>diplôme Bac+2 en développement web obtenu auprès d'Openclassrooms.</strong> Mon parcours académique inclut également un <strong>Baccalauréat Littéraire avec une spécialisation en Anglais Européen, attestant d'un niveau d'anglais A2.</strong> 
              </>
          }
        />
          <Hcards title="<Passions />" content={
              <>
                <strong>Passionné par la musique, les nouvelles technologies et le sport individuel</strong>, ces domaines enrichissent ma vie quotidienne et alimentent ma curiosité.
              </>
          }
        />
          <Hcards title="<Expériences />" content={
              <>
                <strong>Dessinateur projeteur</strong> à mes débuts, j'ai ensuite évolué en tant que <strong>chargé de projet</strong> dans le domaine de la méthanisation. Par la suite, <strong>j'ai dirigé ma propre entreprise pendant deux ans</strong>, de 2022 à 2024, avant de me lancer dans une <strong>reconversion professionnelle.</strong>
              </>
          }
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
