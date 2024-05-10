import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-119");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-87">
      <div className="hero1">
        <div className="hero-text">
          <div className="top">
            <b className="caption">Caption</b>
            <div className="main-headline">Hospital Planning?</div>
            <div className="secondary-headline">Headline Two</div>
          </div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="buttons-group">
            <div className="button">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container">
                <b className="get-started1">Get Started</b>
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className="button-2">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className="text-container1">
                <div className="button-text">Button Text</div>
              </div>
              <img
                className="icon-jam-icons-outline-l3"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
          </div>
        </div>
        <div className="hero-child" />
        <div className="content2">
          <div className="content-child" />
          <div className="frame-parent">
            <Button
              className="group-child11"
              disableElevation={true}
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 398, height: 60 }}
              onClick={onFrameButtonClick}
            >
              Continue
            </Button>
            <div className="enter-ph-no">
              <div className="otp-field">
                <div className="otp-field-child" />
                <div className="otp-field-item" />
                <div className="otp-field-inner" />
                <div className="otp-field-child1" />
                <div className="otp-field-child2" />
                <div className="otp-field-child3" />
                <input className="input" type="text" />
                <input className="input1" type="text" />
                <div className="div5">3</div>
              </div>
              <div className="enter-otp">Enter OTP</div>
              <div className="error-message">
                <span>{`Resend OTP in `}</span>
                <span className="span">00:03</span>
              </div>
            </div>
            <div className="login-or-sign">Login or Sign Up</div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="cevah-container">
          <b className="cevah4">CEVAH</b>
          <div className="frame-child4" />
          <div className="frame-child5" />
        </div>
        <div className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons6" alt="" src="/vector.svg" />
        <img className="social-icons7" alt="" src="/social-icons.svg" />
        <img className="social-icons8" alt="" src="/social-icons1.svg" />
        <div className="contact-us2">Contact Us</div>
        <div className="support2">Support</div>
        <div className="hellocevahgmailcom-container">
          <div className="hellocevahgmailcom2">hellocevah@gmail.com</div>
          <img className="envelope-icon2" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use2">Terms of Use</div>
        <div className="privacy-policy2">Privacy Policy</div>
        <div className="parent2">
          <div className="div6">+91 9922883377</div>
          <img className="vector-icon7" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs2">FAQs</div>
      </div>
      <div className="header1">
        <div className="content3">
          <div className="logo2" onClick={onLogoContainerClick}>
            <div className="icon2">
              <div className="icon-child2" />
              <div className="icon-child3" />
            </div>
            <b className="cevah5">CEVAH</b>
          </div>
          <div className="navigation2" />
        </div>
        <div className="login1">
          <div className="sign-in1">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
