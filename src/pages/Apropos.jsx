import React from 'react';
import { Link } from 'react-router-dom';

const Apropos = () => {

  return (
    <section className="apropos">
      <div className="img-container">
        {/* Ajoutez ici la balise img pour votre photo */}
        <div className="profile-photo-container">
          <img className="profile-photo" src="/images/myself.jpg" alt="Profil" />
        </div>
        {/* Ajoutez les liens ici */}
        <div className="apropos-links">
        <a href="/cv.pdf" download>Télécharger mon CV</a>
          <Link to="/mentions-legales">Mentions Légales</Link>
          <Link to="/cgu">Conditions Générales d'Utilisation</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
