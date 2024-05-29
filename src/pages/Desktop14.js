import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop14.css";

const Desktop14 = () => {
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState(null);
  const onLogout = useCallback(() => {
    navigate("/desktop-83");
  }, [navigate]);
  useEffect(() => {
    const storedResponse = localStorage.getItem('apiResponse');
    if (storedResponse) {
      setApiResponse(JSON.parse(storedResponse));
    }
  }, []);
  
  const onFrameContainerClick = useCallback(() => {
    localStorage.setItem('apiResponse', JSON.stringify(apiResponse));
    navigate("/new-desktop-216");
  }, [apiResponse, navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-115");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-109">
      <div className="hero13">
        <img
          className="ad-place-holder3"
          alt=""
          src="Desktopmedirailpanels2.png"
        />
        <div className="content23">
          <div className="content-child16" />
          <div className="your-report-is">Your Report is ready</div>
          <div className="click-the-button">
            Click the button below to view your custom layout plan
          </div>
        </div>
        <img className="hero-child7" alt="" src="/frame-36735.svg" />
        <div className="view-report-wrapper" onClick={onFrameContainerClick}>
          <div className="view-report">View Report</div>
        </div>
        <div className="back8" onClick={onBackTextClick}>
          Back
        </div>
      </div>
      <div className="footer14">
        <div className="cevah-parent12">
          <b className="cevah28">CEVAH</b>
          <div className="frame-child29" />
          <div className="frame-child30" />
        </div>
        <div className="lorem-ipsum-dolor18">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons42" alt="" src="/vector.svg" />
        <img className="social-icons43" alt="" src="/social-icons.svg" />
        <img className="social-icons44" alt="" src="/social-icons1.svg" />
        <div className="contact-us14">Contact Us</div>
        <div className="support14">Support</div>
        <div className="hellocevahgmailcom-parent12">
          <div className="hellocevahgmailcom14">hellocevah@gmail.com</div>
          <img className="envelope-icon14" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use14">Terms of Use</div>
        <div className="privacy-policy14">Privacy Policy</div>
        <div className="parent16">
          <div className="div21">+91 9922883377</div>
          <img className="vector-icon23" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs14">FAQs</div>
      </div>
      <div className="header13">
        <div className="content24">
          <div className="logo14" onClick={onLogoContainerClick}>
            <div className="icon16">
              <div className="icon-child26" />
              <div className="icon-child27" />
            </div>
            <b className="cevah29">CEVAH</b>
          </div>
          <div className="navigation14" />
        </div>
        <button className="login7" onClick={onLogout}>
          <div className="sign-in2">Sign Out</div>
        </button> 
      </div>
    </div>
  );
};

export default Desktop14;
