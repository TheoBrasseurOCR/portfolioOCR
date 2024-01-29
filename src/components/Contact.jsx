import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire (par exemple, envoi à un serveur)
    console.log('Formulaire soumis:', formData);
  };

  return (
    <section className="contact">
        <div className="contact-container">
        {/* Ajoutez le formulaire ici */}
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Envoyer</button>
        </form>
        </div>
    </section>
  );
};

export default Contact;
