import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop15.css";

const Desktop15 = () => {
  const navigate = useNavigate();

  const onFrameInputClick = useCallback(() => {
    navigate("/desktop-91");
  }, [navigate]);

  const onFrameInput1Click = useCallback(() => {
    navigate("/desktop-91");
  }, [navigate]);

  const onFrameInput2Click = useCallback(() => {
    navigate("/desktop-91");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/desktop-93");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-90");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-91">
      <div className="hero14">
        <img
          className="ad-placeholder-icon5"
          alt=""
          src="/ad-placeholder.svg"
        />
        <div className="hero-child8" />
        <TextField
          className="hero-child9"
          color="primary"
          label="Phone Number"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
          onClick={onFrameInputClick}
        />
        <TextField
          className="hero-child10"
          color="primary"
          label="Name"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
          onClick={onFrameInput1Click}
        />
        <TextField
          className="hero-child11"
          color="primary"
          label="Email ID"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
          onClick={onFrameInput2Click}
        />
        <div className="name1">Name</div>
        <div className="phone-number1">Phone Number</div>
        <div className="email-id1">Email ID</div>
        <div className="hero-child12" />
        <div className="tell-us-about11">Tell us about yourself</div>
        <div className="add-name-phone1">
          Add Name, Phone number and Email ID
        </div>
        <div className="group-parent10">
          <div className="rectangle-parent6">
            <div className="group-child32" />
            <div className="group-child33" />
          </div>
          <div className="group-child34" />
        </div>
        <div className="continue-wrapper" onClick={onFrameContainerClick}>
          <div className="continue">Continue</div>
        </div>
        <div className="back9" onClick={onBackTextClick}>
          Back
        </div>
      </div>
      <div className="footer15">
        <div className="cevah-parent13">
          <b className="cevah30">CEVAH</b>
          <div className="frame-child31" />
          <div className="frame-child32" />
        </div>
        <div className="lorem-ipsum-dolor19">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons45" alt="" src="/vector.svg" />
        <img className="social-icons46" alt="" src="/social-icons.svg" />
        <img className="social-icons47" alt="" src="/social-icons1.svg" />
        <div className="contact-us15">Contact Us</div>
        <div className="support15">Support</div>
        <div className="hellocevahgmailcom-parent13">
          <div className="hellocevahgmailcom15">hellocevah@gmail.com</div>
          <img className="envelope-icon15" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use15">Terms of Use</div>
        <div className="privacy-policy15">Privacy Policy</div>
        <div className="parent17">
          <div className="div22">+91 9922883377</div>
          <img className="vector-icon24" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs15">FAQs</div>
      </div>
      <div className="header14">
        <div className="content25">
          <div className="logo15" onClick={onLogoContainerClick}>
            <div className="icon17">
              <div className="icon-child28" />
              <div className="icon-child29" />
            </div>
            <b className="cevah31">CEVAH</b>
          </div>
          <div className="navigation15" />
        </div>
        <div className="login14">
          <div className="jd12">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop15;
