import { useState, useCallback } from "react";
import Content from "./Content"; // Make sure the path to Content is correct
import PortalPopup from "./PortalPopup";
import "./GroupComponent.css";
import "./Group.css";

const GroupComponent = () => {
  const [isContentPopupOpen, setContentPopupOpen] = useState(false);

  const openContentPopup = useCallback(() => {
    setContentPopupOpen(true);
  }, []);

  const closeContentPopup = useCallback(() => {
    setContentPopupOpen(false);
  }, []);

  return (
    <>
      <div className="pop-rectangle-parent1">
        
        <b className="pop-ready-to-take">Ready to take the next step?</b>
        <div className="pop-cevah-stands-ready-container">
          <p className="pop-cevah-stands-ready">
            {`CEVAH stands ready to guide you in realizing your healthcare vision with expertise and support. Reach out to us to get more details or solve your queries. `}
          </p>
        </div>
        <div className="pop-rectangle-parent2" onClick={openContentPopup}>
          <div className="pop-group-child12" />
          <b className="pop-contact-us">Contact Us</b>
        </div>
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

export default GroupComponent;
