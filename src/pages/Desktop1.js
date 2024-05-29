import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onFrameInputClick = useCallback(() => {
    // Please sync "Desktop - 97" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Desktop - 104" to the project
  }, []);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-95");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-197">
      <div className="hero">
        <img
          className="screenshot-2024-03-19-at-1228"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="ad-placeholder">
          <img
            className="placeholder-graphics-big"
            alt=""
            src="/placeholder-graphics-big.svg"
          />
          <div className="place-holder-text">
            <b className="advertisement">{`ADVERTISEMENT `}</b>
            <div className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          </div>
          <img
            className="placeholder-graphics-small"
            alt=""
            src="/placeholder-graphics-small.svg"
          />
        </div>
      </div>
      <div className="footer1">
        <div className="cevah-group">
          <b className="cevah2">CEVAH</b>
          <div className="frame-child2" />
          <div className="frame-child3" />
        </div>
        <div className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons3" alt="" src="/vector.svg" />
        <img className="social-icons4" alt="" src="/social-icons.svg" />
        <img className="social-icons5" alt="" src="/social-icons1.svg" />
        <div className="contact-us1">Contact Us</div>
        <div className="support1">Support</div>
        <div className="hellocevahgmailcom-group">
          <div className="hellocevahgmailcom1">hellocevah@gmail.com</div>
          <img className="envelope-icon1" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use1">Terms of Use</div>
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="frame-div">
          <div className="div4">+91 9922883377</div>
          <img className="vector-icon6" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs1">FAQs</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child6" />
        <div className="tell-us-about">Tell us about yourself</div>
        <div className="add-your-educational">
          Add your educational background. Add upto 3 degrees.
        </div>
        <TextField
          className="frame-textfield"
          color="primary"
          label="M.D. Cardiology, AIIMS Jodhpur"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          onClick={onFrameInputClick}
        />
        <TextField
          className="group-child7"
          color="primary"
          label="MBBS, AIIMS Delhi"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <TextField
          className="group-child8"
          color="primary"
          label="Education 3(Optional)"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <div className="group-parent4">
          <div className="rectangle-wrapper">
            <div className="group-child9" />
          </div>
          <div className="group-child10" />
        </div>
        <Button
          className="frame-button"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={onFrameButtonClick}
        >
          Continue
        </Button>
        <div className="back" onClick={onBackTextClick}>
          Back
        </div>
        <div className="education-1">Education 1*</div>
        <div className="education-2">Education 2</div>
        <div className="education-3">Education 3</div>
      </div>
      <div className="header">
        <div className="content1">
          <div className="logo1" onClick={onLogoContainerClick}>
            <div className="icon1">
              <div className="icon-inner" />
              <div className="icon-child1" />
            </div>
            <b className="cevah3">CEVAH</b>
          </div>
          <div className="navigation1" />
        </div>
        <button className="login7">
          <div className="sign-in2">Sign In</div>
        </button>
      </div>
    </div>
  );
};

export default Desktop1;
