import React, { useState, useEffect } from 'react';
import '../12-contact/contact.css';
import Contact2 from './Contact2';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    website: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Load contacts from localStorage
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new contact to the contacts array
    const newContact = { ...formData, id: Date.now() };
    setContacts([...contacts, newContact]);

    // Save the contacts to localStorage
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));

    // Reset the form data
    setFormData({
      name: '',
      email: '',
      subject: '',
      website: '',
      message: '',
    });

    // Show the success message
    setShowSuccessMessage(true);
    console.log('Contact message saved!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    // Remove the contact from the contacts array
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);

    // Update the contacts in localStorage
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container py-lg-5 py-4">
        <div className="contact-head text-center mb-sm-5 mb-4">
          <h5 className="short">Get In Touch</h5>
          <h3 className="style">Contact Me</h3>
        </div>
        <div className="row contact-block">
          <div className="col-md-6 contact-left pe-lg-5">
            <h3 className="mb-sm-4 mb-3">Contact Info</h3>
            <p className="cont-para mb-sm-5 mb-4">
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </p>
            <div className="cont-details">
              <p>
                <i className="fas fa-map-marker-alt"></i>Jp Nagar , Bengaluru
              </p>
              <p>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+1(21) 234 4567">+91 8618******</a>
              </p>
              <p>
                <i className="fas fa-envelope-open-text"></i>
                <a
                  href="/cdn-cgi/l/email-protection#d2b7aab3bfa2beb792bfb3bbbefcb1bdbf"
                  className="mail"
                >
                  <span
                    className="__cf_email__"
                    data-cfemail="d2b7aab3bfa2beb792bfb3bbbefcb1bdbf"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </p>
            </div>
            <h4 className="mb-3 mt-5">Follow Me</h4>
            <ul className="social-icons-contact">
              <li>
                <a href="https://twitter.com/?lang=en #twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mohammed-faisal-khan-911a01245/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/mdfaiskhan">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 contact-right mt-md-0 mt-5 ps-lg-0">
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="input-grids">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="contact-input"
                  required=""
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email*"
                  className="contact-input"
                  required=""
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject*"
                  className="contact-input"
                  required=""
                />
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website URL*"
                  className="contact-input"
                  required=""
                />
              </div>
              <div className="form-input">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here*"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-style">Send Message</button>
            </form>
          </div>
        </div>
        {showSuccessMessage && (
          <div className="success-message">
            <p>Contact message saved!</p>
          </div>
        )}
        <Contact2 contacts={contacts} handleDelete={handleDelete} />
      </div>
    </section>
  );
};

export default Contact;