import React, { useState, useCallback } from 'react';
import Pop from './Pop';
import PortalPopup from './PortalPopup';
import PropTypes from 'prop-types';
import './Content.css';

const Content = ({ className = "", onClose }) => {
  const [isPop2PopupOpen, setPop2PopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const openPop2Popup = useCallback(() => {
    setPop2PopupOpen(true);
  }, []);

  const closePop2Popup = useCallback(() => {
    setPop2PopupOpen(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    const payload = {
      name,
      email,
      description: message,
    };

    try {
      const response = await fetch('https://clownfish-app-kymio.ondigitalocean.app/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer d1c1edd7-fb31-11ee-87c7-6c9466f8da35',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Failed to send message:', responseData);
        setError(`Error: ${responseData.message || 'Failed to send message'}`);
        return;
      }

      setIsSubmitted(true);
      setError(null);
      openPop2Popup(); // Open the popup after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        closePop2Popup();
      }, 99000); // Close popup after 2 seconds
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred while sending the message.");
    }
  };

  return (
    <>
      <div className={`pop-content ${className}`}>
        <div className="pop-content-child" />
        <div className="pop-get-in-touch">Get in Touch...</div>
        <div className="pop-please-enter-your">
          Please enter your message and contact information. Our team will reach
          out to you at the earliest.
        </div>
        {error && <div className="pop-error-message">{error}</div>}
        <div className="pop-name-parent">
          <div className="pop-name">Name</div>
          <input
            className="pop-group-child"
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="pop-email-id-parent">
          <div className="pop-email-id">Email ID</div>
          <input
            className="pop-group-child"
            placeholder="Enter your Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pop-message-parent">
          <div className="pop-message">Message</div>
          <input
            className="pop-group-inner"
            placeholder="How can we help?"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="pop-button-primary" onClick={handleSubmit}>
          <div className="pop-button">Send Message</div>
        </button>
        <button className="pop-button-primary1" onClick={onClose}>
          <div className="pop-button1">Cancel</div>
        </button>
        {isSubmitted && <div className="popup-confirmation">Message sent</div>}
      </div>
      {isPop2PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePop2Popup}
        >
          <Pop onClose={closePop2Popup} />
        </PortalPopup>
      )}
    </>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Content;
