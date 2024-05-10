import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop11.css";

const Desktop11 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-114");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-107");
  }, [navigate]);

  const onGroupInputClick = useCallback(() => {
    // Please sync "Desktop - 110" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Desktop - 166" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Desktop - 78" to the project
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-108">
      <div className="hero10">
        <img className="ad-place-holder" alt="" src="/ad-place-holder@2x.png" />
        <div className="content17">
          <div className="content-child11" />
          <div className="tell-us-about9">Tell us about the Project</div>
          <div className="enter-project-dimensions">
            Enter Project Dimensions
          </div>
          <div className="status-bar1">
            <div className="status-bar-inner1">
              <div className="group-child30" />
            </div>
            <div className="status-bar-child1" />
            <div className="status-bar-child2" />
          </div>
          <Button
            className="content-child12"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back6" onClick={onBackTextClick}>
            Back
          </div>
        </div>
        <TextField
          className="hero-child6"
          color="primary"
          label="Area"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          onClick={onGroupInputClick}
        />
        <div className="hero-inner1" onClick={onGroupContainerClick}>
          <div className="height-restriction-parent">
            <div className="height-restriction">Height Restriction</div>
            <div className="meters">Meters</div>
          </div>
        </div>
        <div className="hero-inner2" onClick={onGroupContainer1Click}>
          <div className="fsi-wrapper">
            <div className="height-restriction">FSI</div>
          </div>
        </div>
      </div>
      <div className="footer11">
        <div className="cevah-parent9">
          <b className="cevah22">CEVAH</b>
          <div className="frame-child22" />
          <div className="frame-child23" />
        </div>
        <div className="lorem-ipsum-dolor15">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons33" alt="" src="/vector.svg" />
        <img className="social-icons34" alt="" src="/social-icons.svg" />
        <img className="social-icons35" alt="" src="/social-icons1.svg" />
        <div className="contact-us11">Contact Us</div>
        <div className="support11">Support</div>
        <div className="hellocevahgmailcom-parent9">
          <div className="hellocevahgmailcom11">hellocevah@gmail.com</div>
          <img className="envelope-icon11" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use11">Terms of Use</div>
        <div className="privacy-policy11">Privacy Policy</div>
        <div className="parent13">
          <div className="div17">+91 9922883377</div>
          <img className="vector-icon20" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs11">FAQs</div>
      </div>
      <div className="header10">
        <div className="content18">
          <div className="logo11" onClick={onLogoContainerClick}>
            <div className="icon11">
              <div className="icon-child20" />
              <div className="icon-child21" />
            </div>
            <b className="cevah23">CEVAH</b>
          </div>
          <div className="navigation11" />
        </div>
        <div className="login10">
          <div className="jd8">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop11;
