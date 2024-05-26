import { useCallback, useState } from "react";
import {
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop5.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onFrameButtonClick = useCallback(() => {
    // Save the values to local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phoneNumber", phoneNumber);

    navigate("/desktop-93");
  }, [navigate, firstName, lastName, phoneNumber]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-120");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="new1-desktop-90">
      <div className="new1-hero4">
        <img
          className="new1-ad-placeholder-icon2"
          alt=""
          src="https://aws-demo-s3-bucket-01.s3.amazonaws.com/img1.avif"
        />
        <div className="new1-hero-item" />
        <div className="new1-tell-us-about4">Tell us about yourself</div>
        <div className="new1-add-name-phone">
          Add Name, Phone number and Email ID
        </div>
        <TextField
          className="new1-hero-inner"
          color="primary"
          label="Last Name"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          className="new1-hero-child1"
          color="primary"
          label="First Name"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          className="new1-hero-child2"
          color="primary"
          label="Phone Number"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "64px" }, width: "405px" }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="new1-group-parent6">
          <div className="new1-rectangle-parent2">
            <div className="new1-group-child12" />
            <div className="new1-group-child13" />
          </div>
          <div className="new1-group-child14" />
        </div>
        <Button
          className="new1-hero-child3"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={onFrameButtonClick}
        >
          Continue
        </Button>

        <div className="new1-back1" onClick={onBackTextClick}>
          Back
        </div>
      </div>
      <div className="new1-desktop-90-child" />
      <div className="new1-footer5">
        <div className="new1-cevah-parent3">
          <b className="new1-cevah10">CEVAH</b>
          <div className="new1-frame-child10" />
          <div className="new1-frame-child11" />
        </div>
        <div className="new1-lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="new1-social-icons15" alt="" src="/vector.svg" />
        <img className="new1-social-icons16" alt="" src="/social-icons.svg" />
        <img className="new1-social-icons17" alt="" src="/social-icons1.svg" />
        <div className="new1-contact-us5">Contact Us</div>
        <div className="new1-support5">Support</div>
        <div className="new1-hellocevahgmailcom-parent3">
          <div className="new1-hellocevahgmailcom5">hellocevah@gmail.com</div>
          <img className="new1-envelope-icon5" alt="" src="/envelope.svg" />
        </div>
        <div className="new1-terms-of-use5">Terms of Use</div>
        <div className="new1-privacy-policy5">Privacy Policy</div>
        <div className="new1-parent7">
          <div className="new1-div11">+91 9922883377</div>
          <img className="new1-vector-icon14" alt="" src="/vector5.svg" />
        </div>
        <div className="new1-faqs5">FAQs</div>
      </div>
      <div className="new1-header4">
        <div className="new1-content8">
          <div className="new1-logo5" onClick={onLogoContainerClick}>
            <div className="new1-icon5">
              <div className="new1-icon-child8" />
              <div className="new1-icon-child9" />
            </div>
            <b className="new1-cevah11">CEVAH</b>
          </div>
          <div className="new1-navigation5" />
        </div>
        <div className="new1-login4">
          <div className="new1-jd3"></div>
        </div>
        <img className="new1-user-icon2" alt="" src="/user.svg" />
      </div>
    </div>
  );
};

export default Desktop5;
