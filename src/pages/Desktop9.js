import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop9.css";

const Desktop9 = () => {
  const college = localStorage.getItem("college");
  const degree = localStorage.getItem("degree");
  const college1 = localStorage.getItem("college1");
  const college3 = localStorage.getItem("college3");
  const navigate = useNavigate();

  const onFrameInputClick = useCallback(() => {
    // Please sync "Desktop - 97" to the project
  }, []);

  const onFrameInput2Click = useCallback(() => {
    // Please sync "Desktop - 190" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-107");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-95");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-92">
      <div className="hero8">
        <img
          className="screenshot-2024-03-19-at-12281"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="ad-placeholder1">
          <img
            className="placeholder-graphics-big1"
            alt=""
            src="/placeholder-graphics-big.svg"
          />
          <div className="place-holder-text1">
            <b className="advertisement1">{`ADVERTISEMENT `}</b>
            <div className="lorem-ipsum-dolor11">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          </div>
          <img
            className="placeholder-graphics-small1"
            alt=""
            src="/placeholder-graphics-small.svg"
          />
        </div>
      </div>
      <div className="footer9">
        <div className="cevah-parent7">
          <b className="cevah18">CEVAH</b>
          <div className="frame-child18" />
          <div className="frame-child19" />
        </div>
        <div className="lorem-ipsum-dolor12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons27" alt="" src="/vector.svg" />
        <img className="social-icons28" alt="" src="/social-icons.svg" />
        <img className="social-icons29" alt="" src="/social-icons1.svg" />
        <div className="contact-us9">Contact Us</div>
        <div className="support9">Support</div>
        <div className="hellocevahgmailcom-parent7">
          <div className="hellocevahgmailcom9">hellocevah@gmail.com</div>
          <img className="envelope-icon9" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use9">Terms of Use</div>
        <div className="privacy-policy9">Privacy Policy</div>
        <div className="parent11">
          <div className="div15">+91 9922883377</div>
          <img className="vector-icon18" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs9">FAQs</div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child20" />
        <div className="tell-us-about7">Tell us about yourself</div>
        <div className="add-your-educational3">
          Add your educational background. Add upto 3 degrees.
        </div>
        <TextField
          className="group-child21"
          color="primary"
          label=""
          variant="outlined"
          value={college || ""}
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
        />
        <TextField
          className="group-child22"
          color="primary"
          label=""
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          value={college3 || ""}
        />
        <TextField
          className="group-child23"
          color="primary"
          label=""
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          value={college1 || ""}
        />
        <div className="group-parent9">
          <div className="rectangle-wrapper2">
            <div className="group-child24" />
          </div>
          <div className="group-child25" />
        </div>
        <Button
          className="group-child26"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={onFrameButtonClick}
        >
          Continue
        </Button>
        <div className="back4" onClick={onBackTextClick}>
          Back
        </div>
        <div className="education-11">Education 1*</div>
        <div className="education-21">Education 2</div>
        <div className="education-31">Education 3</div>
      </div>
      <div className="header8">
        <div className="content15">
          <div className="logo9" onClick={onLogoContainerClick}>
            <div className="icon9">
              <div className="icon-child16" />
              <div className="icon-child17" />
            </div>
            <b className="cevah19">CEVAH</b>
          </div>
          <div className="navigation9" />
        </div>
        <div className="login8">
          <div className="jd6"></div>
        </div>
        <img className="user-icon6" alt="" src="/user.svg" />

      </div>
    </div>
  );
};

export default Desktop9;
