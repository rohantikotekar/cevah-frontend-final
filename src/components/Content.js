import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "", onClose }) => {
  return (
    <div className={`pop-content ${className}`}>
      <div className="pop-content-child" />
      <div className="pop-get-in-touch">Get in Touch...</div>
      <div className="pop-please-enter-your">
        Please enter your message and contact information. Our team will reach
        out to you at the earliest.
      </div>
      <div className="pop-name-parent">
        <div className="pop-name">Name</div>
        <input
          className="pop-group-child"
          placeholder="Enter your name"
          type="text"
        />
      </div>
      <div className="pop-email-id-parent">
        <div className="pop-email-id">Email ID</div>
        <input
          className="pop-group-child"
          placeholder="Enter your Email"
          type="text"
        />
      </div>
      <div className="pop-message-parent">
        <div className="message">Message</div>
        <input
          className="pop-group-inner"
          placeholder="How can we help?"
          type="text"
        />
      </div>
      <button className="pop-button-primary">
        <div className="pop-button">Send Message</div>
      </button>
      <button className="pop-button-primary1">
        <div className="pop-button1">Cancel</div>
      </button>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Content;
