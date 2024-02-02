import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faGraduationCap, faMusic, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Composant pour une carte (Skills)
const Scards = ({ title, images }) => {
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
    <div className='modal-content'>
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

// Composant pour une carte (Home)
const Hcards = ({ title, content }) => {
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

// Composant pour une carte (Projets)
const Pcards = ({ title, imageSrc, link }) => {
  return (
    <div className="proj-card">
      <Link to={link}>
      <img src={imageSrc} alt={title} className='img-proj'/>
      <h5>en savoir plus</h5>
      </Link>
    </div>
  );
};

export { Scards, Hcards, Pcards };




