import React, { useState, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop17.css";

const Desktop17 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    const formattedPhoneNumber = `91${phoneNumber}`; // Prefix the phone number with +91
    localStorage.setItem("phoneNumber", formattedPhoneNumber); // Store phone number in local storage
    sendOTPRequest(formattedPhoneNumber);
    navigate("/otp-verification");
  }, [phoneNumber, navigate]);

  const onPhnoClick = useCallback(() => {
    // Any specific logic to be added when phone number input is clicked
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  async function sendOTPRequest(phoneNumber) {
    const url = 'https://clownfish-app-kymio.ondigitalocean.app/auth';
    
    // Ensure the phone number starts with "91"
    if (!phoneNumber.startsWith('91')) {
      phoneNumber = '91' + phoneNumber.replace(/^91/, '');
    }
  
    const payload = { phone_number: phoneNumber };
  
    const bearerToken = 'd1c1edd7-fb31-11ee-87c7-6c9466f8da35';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(payload)
    };
  
    console.log('Sending OTP request with payload:', payload);
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log('OTP sent successfully:', data); // Handle the response data (e.g., OTP)
    } catch (error) {
      console.error('Error sending OTP request:', error);
    }
  }
    
  return (
    <div className="desktop-83">
      <div className="hero16">
      <img
          className="ad-placeholder-icon83"
          alt=""
          src="Desktopmedirailuvc2.png"
        />
        <div className="hero-text2">
        </div>
        <div className="hero-child13" />
        <div className="content28">
          <div className="content-child21" />
          <div className="frame-container">
            <Button
              className="group-child37"
              disableElevation={true}
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 398, height: 60 }}
              onClick={onFrameButtonClick}
            >
              Continue
            </Button>
            <div className="phone-number2">Phone Number</div>
            <div className="error-message2">
              We will send a login OTP to your number
            </div>
            <input
              className="phno"
              name="phoneNumber"
              id="phoneNumber"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onClick={onPhnoClick}
            />
            <div className="login-or-sign2">Login or Sign Up</div>
          </div>
        </div>
      </div>
      <div className="footer17">
        <div className="cevah-parent15">
          <b className="cevah34">CEVAH</b>
          <div className="frame-child35" />
          <div className="frame-child36" />
        </div>
        <div className="lorem-ipsum-dolor21">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <a
          className="social-icons51"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <img className="vector-icon26" alt="" src="/vector.svg" />
        </a>
        <a
          className="social-icons52"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <img className="vector-icon26" alt="" src="/vector1.svg" />
          <img className="vector-icon28" alt="" src="/vector2.svg" />
          <img className="vector-icon29" alt="" src="/vector3.svg" />
        </a>
        <a
          className="social-icons53"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <img className="vector-icon30" alt="" src="/vector4.svg" />
        </a>
        <div className="contact-us17">Contact Us</div>
        <div className="support17">Support</div>
        <div className="hellocevahgmailcom-parent15">
          <div className="hellocevahgmailcom17">hellocevah@gmail.com</div>
          <img className="envelope-icon17" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use17">Terms of Use</div>
        <div className="privacy-policy17">Privacy Policy</div>
        <div className="parent19">
          <div className="div24">+91 9922883377</div>
          <img className="vector-icon31" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs17">FAQs</div>
      </div>
      <div className="header16">
        <div className="content29">
          <div className="logo17" onClick={onLogoContainerClick}>
            <div className="icon19">
              <div className="icon-child32" />
              <div className="icon-child33" />
            </div>
            <b className="cevah35">CEVAH</b>
          </div>
          <div className="navigation17" />
        </div>
        {/* <button className="login16">
          <div className="sign-in3">Sign In</div>
        </button> */}
      </div>
    </div>
  );
};



export default Desktop17;
