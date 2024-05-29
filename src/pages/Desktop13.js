import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop13.css";
import ImageSlider from "./ImageSlider";

const Desktop13 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const intervalTime = 5000 / 100;
    const interval = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage < 100 ? prevPercentage + 1 : prevPercentage
      );
    }, intervalTime);

    setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
      navigate("/desktop-109");  // Navigate to Desktop14
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 758);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedResponse = localStorage.getItem('apiResponse');
    if (storedResponse) {
      setApiResponse(JSON.parse(storedResponse));
    }
  }, []);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-114");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-115">
      <div className="hero12">
        <img className="ad-place-holder2" alt="" src="DesktopAwaer.png" />
        <div className="content21">
          <div className="content-child15" />
          <div className="analysing-data">Analysing Data</div>
          <div className="formulating-your-custom">
            Formulating your custom layout plan. Hang on...
          </div>
        </div>
        {loading ? (
          <div className="rectangle-parent5">
            <div className="frame-child26" />
            <div className="loading-animation"></div>
            <div className="div19">{percentage}%</div>
          </div>
        ) : null}

        <div className="image-slider-container">
          {isMobile && loading && <ImageSlider />}
        </div>
      </div>

      <div className="footer13">
        <div className="cevah-parent11">
          <b className="cevah26">CEVAH</b>
          <div className="frame-child27" />
          <div className="frame-child28" />
        </div>
        <div className="lorem-ipsum-dolor17">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
        </div>
        <img className="social-icons39" alt="" src="/vector.svg" />
        <img className="social-icons40" alt="" src="/social-icons.svg" />
        <img className="social-icons41" alt="" src="/social-icons1.svg" />
        <div className="contact-us13">Contact Us</div>
        <div className="support13">Support</div>
        <div className="hellocevahgmailcom-parent11">
          <div className="hellocevahgmailcom13">hellocevah@gmail.com</div>
          <img className="envelope-icon13" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use13">Terms of Use</div>
        <div className="privacy-policy13">Privacy Policy</div>
        <div className="parent15">
          <div className="div20">+91 9922883377</div>
          <img className="vector-icon22" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs13">FAQs</div>
      </div>
      <div className="back7" onClick={onBackTextClick}>
        Back
      </div>
      <div className="header12">
        <div className="content22">
          <div className="logo13" onClick={onLogoContainerClick}>
            <div className="icon15">
              <div className="icon-child24" />
              <div className="icon-child25" />
            </div>
            <b className="cevah27">CEVAH</b>
          </div>
          <div className="navigation13" />
        </div>
        <div className="login12">
          <div className="jd10"></div>
        </div>
        <img className="user-icon4" alt="" src="/user.svg" />
      </div>
    </div>
  );
};

export default Desktop13;
