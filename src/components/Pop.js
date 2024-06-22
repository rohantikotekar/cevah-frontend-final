import PropTypes from "prop-types";
import "./Pop.css";

const Pop = ({ className = "", onClose }) => {
  return (
    <div className={`f-pop2 ${className}`}>
      <div className="f-pop2-child" />
      <div className="f-message-sent">Message Sent!</div>
      <div className="f-thank-you-for">
        Thank you for reaching out to us. We have received your enquiry and will
        reach out to you shortly.
      </div>
      <div className="f-button-primary2" onClick={onClose}>
        <div className="f-button2">Done</div>
      </div>
      <img
        className="f-active-support-amico-1"
        alt=""
        src="/active-supportamico-1@2x.png"
      />
    </div>
  );
};

Pop.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Pop;
