import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ title, images }) => {
return (
      <div className="cards">
        <h3>{title}</h3>
        <div className="cards-content">
          <div className="image-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
        </div>
  );
};

export default Cards;
