import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/About-Yourself");
  }, [navigate]);

  const onLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="desktop-119">
      <section className="footer3">
        <div className="cevah-parent1">
          <h2 className="cevah6">CEVAH</h2>
          <div className="frame-child6" />
          <div className="frame-child7" />
        </div>
        <div className="lorem-ipsum-dolor5">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons9" alt="" src="/vector.svg" />
        <a
          className="social-icons10"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <img className="vector-icon8" alt="" src="/vector1.svg" />
          <img className="vector-icon9" alt="" src="/vector2.svg" />
          <img className="vector-icon10" alt="" src="/vector3.svg" />
        </a>
        <a
          className="social-icons11"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img className="vector-icon11" alt="" src="/vector4.svg" />
        </a>
        <div className="contact-us3">Contact Us</div>
        <div className="support3">Support</div>
        <div className="hellocevahgmailcom-parent1">
          <div className="hellocevahgmailcom3">hellocevah@gmail.com</div>
          <img className="envelope-icon3" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use3">Terms of Use</div>
        <div className="privacy-policy3">Privacy Policy</div>
        <div className="parent3">
          <div className="div7">+919922883377</div>
          <img className="vector-icon12" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs3">FAQs</div>
      </section>
      <header className="header2">
        <div className="content4">
          <div className="logo3" onClick={onLogoContainerClick}>
            <div className="icon3">
              <div className="icon-child4" />
              <div className="icon-child5" />
            </div>
            <h3 className="cevah7">CEVAH</h3>
          </div>
          <div className="navigation3" />
        </div>
        
      </header>
      <section className="hero2">
        <img
          className="ad-placeholder-icon"
          alt=""
          src="Design2.png"
        />
      </section>
      <div className="content5">
        <div className="content-item" />
        <Button
          className="button-primary"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 346, height: 56 }}
          onClick={onButtonPrimaryClick}
        >
          Continue
        </Button>
        <h1 className="get-started-on">
          Get started on Cevah with two easy steps
        </h1>
        <div className="content-inner">
          <div className="parent4">
            <div className="div8">1</div>
            <h2 className="tell-us-about1">Tell us about yourself</h2>
            <div className="share-you-name">
              Share you name, email and educational background
            </div>
          </div>
        </div>
        <div className="content-inner1">
          <div className="parent5">
            <div className="div8">2</div>
            <h2 className="tell-us-about1">Tell us about your place</h2>
            <div className="share-you-name">
              Share basic info like where it is located, services provided
            </div>
          </div>
        </div>
        <div className="line-div" />
      </div>
      <img
        className="hospital-building-amico-1"
        alt=""
        src="/hospital-buildingamico-1@2x.png"
      />
       <img
        className="doctor-amico-icon"
        alt=""
        src="/doctoramico@2x.png"
      />
      
<button className="signout" onClick={onLogout}>
          <div className="sign-in2">Sign Out</div>
        </button>      
         </div>
  );
};

export default Desktop3;
