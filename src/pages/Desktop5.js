import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop5.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-93");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-120");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-90">
      <div className="hero4">
        <img
          className="ad-placeholder-icon2"
          alt=""
          src="/ad-placeholder.svg"
        />
        <div className="hero-item" />
        <div className="tell-us-about4">Tell us about yourself</div>
        <div className="add-name-phone">
          Add Name, Phone number and Email ID
        </div>
        <TextField
          className="hero-inner"
          color="primary"
          label="Phone Number"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
        />
        <TextField
          className="hero-child1"
          color="primary"
          label="Name"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
        />
        <TextField
          className="hero-child2"
          color="primary"
          label="Email ID"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
        />
        <div className="group-parent6">
          <div className="rectangle-parent2">
            <div className="group-child12" />
            <div className="group-child13" />
          </div>
          <div className="group-child14" />
        </div>
        <Button
          className="hero-child3"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={(onFrameButtonClick)}


        >
          Continueee
        </Button>

        <div className="back1" onClick={onBackTextClick}>
          Back
        </div>
        
      </div>
      <div className="desktop-90-child" />
      <div className="footer5">
        <div className="cevah-parent3">
          <b className="cevah10">CEVAH</b>
          <div className="frame-child10" />
          <div className="frame-child11" />
        </div>
        <div className="lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons15" alt="" src="/vector.svg" />
        <img className="social-icons16" alt="" src="/social-icons.svg" />
        <img className="social-icons17" alt="" src="/social-icons1.svg" />
        <div className="contact-us5">Contact Us</div>
        <div className="support5">Support</div>
        <div className="hellocevahgmailcom-parent3">
          <div className="hellocevahgmailcom5">hellocevah@gmail.com</div>
          <img className="envelope-icon5" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use5">Terms of Use</div>
        <div className="privacy-policy5">Privacy Policy</div>
        <div className="parent7">
          <div className="div11">+91 9922883377</div>
          <img className="vector-icon14" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs5">FAQs</div>
      </div>
      <div className="header4">
        <div className="content8">
          <div className="logo5" onClick={onLogoContainerClick}>
            <div className="icon5">
              <div className="icon-child8" />
              <div className="icon-child9" />
            </div>
            <b className="cevah11">CEVAH</b>
          </div>
          <div className="navigation5" />
        </div>
        <div className="login4">
          <div className="jd3">JD</div>
        </div>
        <img className="user-icon2" alt="" src="/user.svg" />
      </div>
    </div>
  );
};




export default Desktop5;
