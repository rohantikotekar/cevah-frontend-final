import { useState, useCallback } from "react";
import Content from "/";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./Group.css";

const Group = ({ className = "" }) => {
  const [isContentPopupOpen, setContentPopupOpen] = useState(false);

  const openContentPopup = useCallback(() => {
    setContentPopupOpen(true);
  }, []);

  const closeContentPopup = useCallback(() => {
    setContentPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`pop-rectangle-parent ${className}`}
        onClick={openContentPopup}
      >
        <div className="pop-rectangle-div" />
        <b className="pop-contact-us">Contact Us</b>
      </div>
      {isContentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContentPopup}
        >
          <Content onClose={closeContentPopup} />
        </PortalPopup>
      )}
    </>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
