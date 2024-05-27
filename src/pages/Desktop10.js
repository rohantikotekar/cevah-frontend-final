import { useCallback, useState } from "react";
import {
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop10.css";

const Desktop10 = () => {
  const navigate = useNavigate();
  
  // State for form input values
  const [formValues, setFormValues] = useState({
    houseNumber: "",
    societyName: "",
    cityName: "",
    pinCode: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const onFrameButtonClick = useCallback(() => {
    // Save form data to local storage
    localStorage.setItem("projectAddress", JSON.stringify(formValues));
    navigate("/desktop-114");
  }, [navigate, formValues]);

  const onBackClick = useCallback(() => {
    navigate("/desktop-92");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-107">
      <div className="hero9">
        <img
          className="screenshot-2024-03-19-at-12282"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="ad-placeholder2">
          <img
            className="placeholder-graphics-big2"
            alt=""
            src="/placeholder-graphics-big.svg"
          />
          <div className="place-holder-text2">
            <b className="advertisement2">{`ADVERTISEMENT `}</b>
            <div className="lorem-ipsum-dolor13">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          </div>
          <img
            className="placeholder-graphics-small2"
            alt=""
            src="/placeholder-graphics-small.svg"
          />
        </div>
      </div>
      <div className="footer10">
        <div className="cevah-parent8">
          <b className="cevah20">CEVAH</b>
          <div className="frame-child20" />
          <div className="frame-child21" />
        </div>
        <div className="lorem-ipsum-dolor14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons30" alt="" src="/vector.svg" />
        <img className="social-icons31" alt="" src="/social-icons.svg" />
        <img className="social-icons32" alt="" src="/social-icons1.svg" />
        <div className="contact-us10">Contact Us</div>
        <div className="support10">Support</div>
        <div className="hellocevahgmailcom-parent8">
          <div className="hellocevahgmailcom10">hellocevah@gmail.com</div>
          <img className="envelope-icon10" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use10">Terms of Use</div>
        <div className="privacy-policy10">Privacy Policy</div>
        <div className="parent12">
          <div className="div16">+91 9922883377</div>
          <img className="vector-icon19" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs10">FAQs</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child27" />
        <div className="tell-us-about8">Tell us about the Project</div>
        <div className="enter-project-address">Enter Project Address</div>
        <div className="status-bar">
          <div className="status-bar-inner">
            <div className="group-child28" />
          </div>
          <div className="status-bar-child" />
          <div className="status-bar-item" />
        </div>
        <Button
          className="group-child29"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
          onClick={onFrameButtonClick}
        >
          Continue
        </Button>
        <button className="back5" onClick={onBackClick}>
          Back
        </button>
      </div>
      <TextField
        className="desktop-107-child"
        color="primary"
        label="House no, Building Name"
        required={true}
        variant="outlined"
        name="houseNumber"
        value={formValues.houseNumber}
        onChange={handleInputChange}
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
      />
      <TextField
        className="desktop-107-item"
        color="primary"
        label="Society Name, Street Name"
        required={true}
        variant="outlined"
        name="societyName"
        value={formValues.societyName}
        onChange={handleInputChange}
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
      />
      <TextField
        className="desktop-107-inner"
        color="primary"
        label="City Name"
        required={true}
        variant="outlined"
        name="cityName"
        value={formValues.cityName}
        onChange={handleInputChange}
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
      />
      <TextField
        className="group-textfield"
        color="primary"
        label="Pin Code"
        required={true}
        variant="outlined"
        name="pinCode"
        type="number"
        value={formValues.pinCode}
        onChange={handleInputChange}
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
      />
      <div className="header9">
        <div className="content16">
          <button className="logo10" onClick={onLogoClick}>
            <div className="icon10">
              <div className="icon-child18" />
              <div className="icon-child19" />
            </div>
            <b className="cevah21">CEVAH</b>
          </button>
          <div className="navigation10" />
        </div>
        <button className="login9">
          {/* <div className="jd7">JD</div> */}
        </button>
        <img className="user-icon100" alt="" src="/user.svg" />
      </div>
    </div>
  );
};

export default Desktop10;
