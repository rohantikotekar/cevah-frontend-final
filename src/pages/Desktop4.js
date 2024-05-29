import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop4.css";

const Desktop4 = () => {
  const navigate = useNavigate();
  const onLogout = useCallback(() => {
    navigate("/desktop-83");
  }, [navigate]);

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/desktop-90");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-120">
      <div className="hero3">
        <img
          className="ad-placeholder-icon1"
          alt=""
          src="Desktopmedirailpanels2.png"
        />
        <div className="content6">
          <div className="content-child1" />
          <div className="group-parent5">
            <div className="tell-us-about-yourself-parent">
              <div className="tell-us-about-yourself-parent">
                <div className="tell-us-about3">Tell us about yourself</div>
                <div className="share-you-name1">
                  Share you name, email and educational background
                </div>
              </div>
            </div>
            <Button
              className="button-primary1"
              disableElevation={true}
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 346, height: 56 }}
              onClick={onButtonPrimaryClick}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="footer4">
        <div className="cevah-parent2">
          <b className="cevah8">CEVAH</b>
          <div className="frame-child8" />
          <div className="frame-child9" />
        </div>
        <div className="lorem-ipsum-dolor6">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons12" alt="" src="/vector.svg" />
        <img className="social-icons13" alt="" src="/social-icons.svg" />
        <img className="social-icons14" alt="" src="/social-icons1.svg" />
        <div className="contact-us4">Contact Us</div>
        <div className="support4">Support</div>
        <div className="hellocevahgmailcom-parent2">
          <div className="hellocevahgmailcom4">hellocevah@gmail.com</div>
          <img className="envelope-icon4" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use4">Terms of Use</div>
        <div className="privacy-policy4">Privacy Policy</div>
        <div className="parent6">
          <div className="div10">+91 9922883377</div>
          <img className="vector-icon13" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs4">FAQs</div>
      </div>
      <div className="header3">
        <div className="content7">
          <div className="logo4" onClick={onLogoContainerClick}>
            <div className="icon4">
              <div className="icon-child6" />
              <div className="icon-child7" />
            </div>
            <b className="cevah9">CEVAH</b>
          </div>
          <div className="navigation4" />
        </div>
        <button className="login7" onClick={onLogout}>
          <div className="sign-in2">Sign Out</div>
        </button> 
      </div>
      <img className="doctor-amico-icon1" alt="" src="/doctoramico@2x.png" />
    </div>
  );
};

export default Desktop4;
