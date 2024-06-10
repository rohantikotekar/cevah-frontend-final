import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop8.css";

const Desktop8 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/Getting-started");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const sendResendRequest = async () => {
    try {
      const url = "https://clownfish-app-kymio.ondigitalocean.app/resend";
      const payload = { phone_number: phoneNumber };
      const bearerToken = "d1c1edd7-fb31-11ee-87c7-6c9466f8da35";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("OTP sent successfully:", data);
    } catch (error) {
      console.error("Error sending OTP request:", error);
    }
  };

  const verifyOTP = async () => {
    const url = "https://clownfish-app-kymio.ondigitalocean.app/verify";
    let modifiedPhoneNumber = phoneNumber;

    if (!phoneNumber.startsWith("91")) {
      modifiedPhoneNumber = "91" + phoneNumber;
    }

    const payload = { phone_number: modifiedPhoneNumber, otp: otp.join("") };
    const bearerToken = "d1c1edd7-fb31-11ee-87c7-6c9466f8da35";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("OTP verified successfully:", data);
      if (data.isOTPVerified) {
        onFrameButtonClick();
      } else {
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < otp.length - 1 && value) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="desktop-89">
      <div className="hero7">
        <img className="ad-placeholder-icon89" alt="" src="DesktopAwaer.png" />
        <div className="hero-text1"></div>
        <div className="hero-child5" />
        <div className="content13">
          <div className="content-child10" />
          <div className="frame-group">
            <Button
              className="group-child19"
              disableElevation
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 398, height: 60 }}
              onClick={verifyOTP}
            >
              Continue
            </Button>

            <div className="otp">
              <div className="otp-field1">
                <div className="otp-field-child5" />
                <div className="otp-field-child6" />
                <div className="otp-field-child7" />
                <div className="otp-field-child8" />
                {Array.from({ length: 4 }).map((_, index) => (
                  <input
                    key={index}
                    className={`input${6 + index}`}
                    maxLength="1"
                    type="text"
                    value={otp[index] || ""}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </div>
            </div>

            <div className="enter-ph-no1">
              <div className="enter-otp1">Enter OTP</div>
              <div className="error-message1">
                <button className="custom-button" onClick={sendResendRequest}>
                  <span className="resend-otp-in">Resend OTP</span>
                </button>
              </div>
            </div>
            <div className="login-or-sign1">Login or Sign Up</div>
          </div>
        </div>
      </div>
      <div className="footer8">
        <div className="cevah-parent6">
          <b className="cevah16">CEVAH</b>
          <div className="frame-child16" />
          <div className="frame-child17" />
        </div>
        <div className="lorem-ipsum-dolor10">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons24" alt="" src="/vector.svg" />
        <img className="social-icons25" alt="" src="/social-icons.svg" />
        <img className="social-icons26" alt="" src="/social-icons1.svg" />
        <div className="contact-us8">Contact Us</div>
        <div className="support8">Support</div>
        <div className="hellocevahgmailcom-parent6">
          <div className="hellocevahgmailcom8">hellocevah@gmail.com</div>
          <img className="envelope-icon8" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use8">Terms of Use</div>
        <div className="privacy-policy8">Privacy Policy</div>
        <div className="parent10">
          <div className="div14">+91 9922883377</div>
          <img className="vector-icon17" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs8">FAQs</div>
      </div>
      <div className="header7">
        <div className="content14">
          <button className="logo8" onClick={onLogoClick}>
            <div className="icon8">
              <div className="icon-child14" />
              <div className="icon-child15" />
            </div>
            <b className="cevah17">CEVAH</b>
          </button>
          <div className="navigation8" />
        </div>
        <button className="login7">
          <div className="sign-in2">Sign In</div>
        </button>
      </div>
    </div>
  );
};

export default Desktop8;




/*
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop8.css";

const Desktop8 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Retrieve phone number from local storage
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/Getting-started");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Function to send OTP request
  const sendResendRequest = async () => {
    try {
      const url = "https://clownfish-app-kymio.ondigitalocean.app/resend";
      const payload = { phone_number: phoneNumber };
      const bearerToken = "d1c1edd7-fb31-11ee-87c7-6c9466f8da35";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("OTP sent successfully:", data);
    } catch (error) {
      console.error("Error sending OTP request:", error);
    }
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    const url = "https://clownfish-app-kymio.ondigitalocean.app/verify";
    let modifiedPhoneNumber = phoneNumber;  // Change const to let
  
    if (!phoneNumber.startsWith('91')) {
      modifiedPhoneNumber = '91' + phoneNumber;
    }
  
    const payload = { phone_number: modifiedPhoneNumber, otp };
    let modifiedPhoneNumber = phoneNumber;  // Change const to let
  
    if (!phoneNumber.startsWith('91')) {
      modifiedPhoneNumber = '91' + phoneNumber;
    }
  
    const payload = { phone_number: modifiedPhoneNumber, otp };
    const bearerToken = "d1c1edd7-fb31-11ee-87c7-6c9466f8da35";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(payload),
    };
  
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("OTP verified successfully:", data);
      if (data.isOTPVerified) {
        onFrameButtonClick();
      } else {
        console.error("OTP verification failed");
      }
      if (data.isOTPVerified) {
        onFrameButtonClick();
      } else {
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
  
  
    

  // Handler for OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    setOtp((prevOtp) => {
      const newOtp = prevOtp.split("");
      newOtp[index] = value;
      return newOtp.join("");
    });
  };

  return (
    <div className="desktop-89">
      <div className="hero7">
        <img className="ad-placeholder-icon89" alt="" src="DesktopAwaer.png" />
        <div className="hero-text1"></div>
        <div className="hero-child5" />
        <div className="content13">
          <div className="content-child10" />
          <div className="frame-group">
            <Button
              className="group-child19"
              disableElevation
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 398, height: 60 }}
              onClick={verifyOTP}
            >
              Continue
            </Button>

            <div className="otp">
              <div className="otp-field1">
                <div className="otp-field-child5" />
                <div className="otp-field-child6" />
                <div className="otp-field-child7" />
                <div className="otp-field-child8" />
                {Array.from({ length: 4 }).map((_, index) => (
                  <input
                    key={index}
                    className={`input${6 + index}`}
                    maxLength="1"
                    type="text"
                    value={otp[index] || ""}
                    onChange={(e) => handleOtpChange(e, index)}
                  />
                ))}
              </div>
            </div>

            <div className="enter-ph-no1">
              <div className="enter-otp1">Enter OTP</div>
              <div className="error-message1">
                <button className="custom-button" onClick={sendResendRequest}>
                  <span className="resend-otp-in">Resend OTP</span>
                </button>
              </div>
            </div>
            <div className="login-or-sign1">Login or Sign Up</div>
          </div>
        </div>
      </div>
      <div className="footer8">
        <div className="cevah-parent6">
          <b className="cevah16">CEVAH</b>
          <div className="frame-child16" />
          <div className="frame-child17" />
        </div>
        <div className="lorem-ipsum-dolor10">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons24" alt="" src="/vector.svg" />
        <img className="social-icons25" alt="" src="/social-icons.svg" />
        <img className="social-icons26" alt="" src="/social-icons1.svg" />
        <div className="contact-us8">Contact Us</div>
        <div className="support8">Support</div>
        <div className="hellocevahgmailcom-parent6">
          <div className="hellocevahgmailcom8">hellocevah@gmail.com</div>
          <img className="envelope-icon8" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use8">Terms of Use</div>
        <div className="privacy-policy8">Privacy Policy</div>
        <div className="parent10">
          <div className="div14">+91 9922883377</div>
          <img className="vector-icon17" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs8">FAQs</div>
      </div>
      <div className="header7">
        <div className="content14">
          <button className="logo8" onClick={onLogoClick}>
            <div className="icon8">
              <div className="icon-child14" />
              <div className="icon-child15" />
            </div>
            <b className="cevah17">CEVAH</b>
          </button>
          <div className="navigation8" />
        </div>
        <button className="login7">
          <div className="sign-in2">Sign In</div>
        </button>
      </div>
    </div>
  );
};

export default Desktop8;


*/