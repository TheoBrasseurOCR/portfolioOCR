import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importe l'icône de croix
import skillsData from '../skillsData.json';

// Composant pour une carte (Card)
const Cards = ({ title, images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

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
              onClick={() => handleOpenModal(image)}
            />
          ))}
        </div>
      </div>

      {/* Modale */}
<Modal
  isOpen={modalIsOpen}
  onRequestClose={handleCloseModal}
  contentLabel="Image Modal"
  className="custom-modal"
>
  {selectedImage && (
    <div>
      {/* Icône de croix pour fermer la modale */}
      <button className="close-button" onClick={handleCloseModal}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <h3>{selectedImage.text}</h3>
    </div>
  )}
</Modal>
    </div>
  );
};

// ... (autres imports et composants)

const Skills = () => {
  const frontendImages = skillsData.frontend;
  const backendImages = skillsData.backend;
  const softSkillsImages = skillsData.softSkills;

  return (
    <div className="home-container">
      <div className="right-section">
        {/* Section des cartes */}
        <div className="cards-container">
          {/* Les trois cartes sont toujours ouvertes */}
          <Cards title="<Frontend />" images={frontendImages} />
          <Cards title="<Backend />" images={backendImages} />
          <Cards title="<Soft Skills />" images={softSkillsImages} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
