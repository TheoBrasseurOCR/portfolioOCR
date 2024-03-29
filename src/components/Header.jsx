import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const Header = () => {
  useEffect(() => {
    // Configuration de l'animation Typed.js
    const options = {
      strings: ['Développeur Web Full-Stack'],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: false,
      onComplete: (self) => {
        // Une fois l'animation de Typed.js terminée, afficher les liens
        const links = document.querySelectorAll('.header nav a');
        links.forEach((link, index) => {
          setTimeout(() => {
            link.classList.add('show-link');
          }, index * 200); // Ajoute un délai progressif à chaque lien
        });
      },
    };

    // Initialiser Typed.js sur l'élément h2
    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []); // Utiliser un tableau vide pour s'assurer que cela ne se déclenche qu'une fois

  return (
    <header className="header">
      <div className="container">
        <h1>Théo Brasseur</h1>
        <h2>
          <span className="typed-text"></span>
        </h2>
        <nav>
          <Link to="/" className="hide-link">Accueil</Link>
          <Link to="/projects" className="hide-link">Projets</Link>
          <Link to="/skills" className="hide-link">Compétences</Link>
          <Link to="/a-propos" className="hide-link">À propos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;