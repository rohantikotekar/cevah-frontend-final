import React, { useState, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop8.css";

const Desktop8 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-119");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Function to send OTP request
  const sendResendRequest = async () => {
    try {
      // Define the URL and payload for fetching the phone number
      const phoneNumberUrl = 'https://clownfish-app-kymio.ondigitalocean.app/auth';
      function createPhoneNumberPayload(phoneNumber) {
        return {
            "phone_number": phoneNumber
        };
    }  
      const phoneNumberOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(phoneNumberPayload),
      };
  
      // Fetch phone number
      const phoneNumberResponse = await fetch(phoneNumberUrl, phoneNumberOptions);
      if (!phoneNumberResponse.ok) {
        throw new Error(`Failed to fetch phone number with status: ${phoneNumberResponse.status}`);
      }
      const phoneNumberData = await phoneNumberResponse.json();
      const phoneNumber = phoneNumberData.phone_number;
  
      // Prepare payload and options for OTP request
      const otpUrl = "https://clownfish-app-kymio.ondigitalocean.app/resend";
      const otpPayload = { phone_number: phoneNumber };
      const bearerToken = "d1c1edd7-fb31-11ee-87c7-6c9466f8da35";
      const otpOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(otpPayload),
      };
  
      // Send OTP request
      const otpResponse = await fetch(otpUrl, otpOptions);
      if (!otpResponse.ok) {
        throw new Error(`API request failed with status: ${otpResponse.status}`);
      }
      const otpData = await otpResponse.json();
      console.log("OTP sent successfully:", otpData);
      console.log(otpData.body);
    } catch (error) {
      console.error("Error sending OTP request:", error);
    }
  };
  
  
  // Function to verify OTP
  const verifyOTP = async () => {
    const phoneNumber = "917888044612";
    const url = "https://clownfish-app-kymio.ondigitalocean.app/verify";
    const payload = { phone_number: phoneNumber, otp };

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
      // Navigate or perform any action after successful verification
      onFrameButtonClick();
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
        <div className="hero-text1">
          <div className="top1">
            <b className="caption1">Caption</b>
            <div className="main-headline1">Hospital Planning?</div>
            <div className="secondary-headline1">Headline Two</div>
          </div>
          <div className="paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="buttons-group1">
            <div className="button2">
              <img
                className="icon-jam-icons-outline-l4"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container2">
                <b className="get-started2">Get Started</b>
              </div>
              <img
                className="icon-jam-icons-outline-l4"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className="button-21">
              <img
                className="icon-jam-icons-outline-l4"
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className="text-container3">
                <div className="button-text1">Button Text</div>
              </div>
              <img
                className="icon-jam-icons-outline-l7"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
          </div>
        </div>
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
                <button onClick={sendResendRequest}>
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
