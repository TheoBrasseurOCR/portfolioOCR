import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
  setAcceptTerms(!acceptTerms);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      console.error('Veuillez accepter les conditions pour soumettre le formulaire.');
      return;
    }

    try {
      const response = await fetch('https://portfolio-backend-gamma-three.vercel.app', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        console.log('Formulaire soumis avec succès !');
      } else {
        setSubmitStatus('error');
        console.error('Erreur lors de la soumission du formulaire. Statut de la réponse:', response.status);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de la soumission du formulaire :', error);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {submitStatus !== 'success' && submitStatus !== 'error' && (
          <form action="/submit-form" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Adresse mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Sujet :</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

<label className='checkbox-label'>
              <input className='check'
                type="checkbox"
                checked={acceptTerms}
                onChange={handleCheckboxChange}
                required
              />
              <p>J'accepte que mes données soient utilisées par le site web.</p>
            </label>

            <button type="submit">Envoyer</button>
          </form>
        )}

        {/* Affichage du message en fonction du statut */}
        {submitStatus === 'success' && (
          <p style={{ color: '#34495e' }}>Formulaire soumis avec succès !</p>
        )}
        {submitStatus === 'error' && (
          <p style={{ color: 'red' }}>Erreur lors de la soumission du formulaire.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
