import React, { useState } from 'react';

const Apropos = () => {

  return (
    <section className="apropos">
      <div className="img-container">
        {/* Ajoutez ici la balise img pour votre photo */}
        <div className="profile-photo-container">
          <img className="profile-photo" src="/images/myself.jpg" alt="Votre photo" />
        </div>
        {/* Ajoutez les liens ici */}
        <div className="apropos-links">
          <a href="/mentions-legales">Mentions Légales</a>
          <a href="/cgu">Conditions Générales d'Utilisation</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
