import React, { useState, useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop11.css";

const Desktop11 = () => {
  const [area, setArea] = useState("");
  const [fsi, setFsi] = useState("");
  const [height, setHeight] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    sendDetailsRequest(area, fsi, height);
  }, [area, fsi, height]);

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-114");
  }, [navigate]);

  const onGroupInputClick = useCallback(() => {}, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  async function sendDetailsRequest(land_area, fsi, height_restriction) {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (!storedPhoneNumber) {
      console.error('Phone number not found in local storage.');
      return;
    }

    const url = 'https://clownfish-app-kymio.ondigitalocean.app/calculate';
    const payload = {
      land_area,
      fsi,
      height_restriction,
      phone_number: storedPhoneNumber
    };

    const bearerToken = 'd1c1edd7-fb31-11ee-87c7-6c9466f8da35';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(payload)
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setApiResponse(data);
      console.log('Details submitted successfully:', data);
      localStorage.setItem('apiResponse', JSON.stringify(data));
      navigate("/desktop-115"); // Navigate after storing data
    } catch (error) {
      console.error('Error submitting details:', error);
    }
  }

  return (
    <div className="desktop-108">
      <div className="hero10">
        <img className="ad-place-holder" alt="" src="Desktopmedirailuvc2.png" />
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
          required={true}
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          value={area}
          onChange={(e) => setArea(e.target.value)}
          onClick={onGroupInputClick}
        />
        <TextField
          className="hero-inner2"
          color="primary"
          label="Fsi"
          variant="outlined"
          required={true}
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          value={fsi}
          onChange={(e) => setFsi(e.target.value)}
          onClick={onGroupInputClick}
        />
        <TextField
          className="hero-inner1"
          color="primary"
          label="Height"
          variant="outlined"
          required={true}
          sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          onClick={onGroupInputClick}
        />
      </div>

      {apiResponse && (
        <div className="api-response">
          <h2>API Response</h2>
          <p>Total Built-up Area: {apiResponse.total_built_up_area}</p>
          <p>FSI: {apiResponse.FSI}</p>
          <p>Carpet Area: {apiResponse.carpet_area}</p>
          <p>Number of Floors: {apiResponse.no_of_floors}</p>
          <div>
            <h3>Ground Floor Area</h3>
            {apiResponse.ground_floor_area.map((area, index) => (
              <div key={index}>
                <p>Total Area: {area.total_area}</p>
                <p>Casualty: {area.casualty[0]}, {area.casualty[1]}</p>
                <p>Reception: {area.reception}</p>
                <p>OPD: {area.opd[0]}, {area.opd[1]}</p>
                <p>Pharmacy: {area.pharmacy}</p>
                <p>Diagnostic: {area.diagnostic}</p>
                <p>Circulation: {area.circulation}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Floors Area</h3>
            {apiResponse.floors_area.map((floor, index) => (
              <div key={index}>
                <p>Total Area: {floor.total_area}</p>
                <p>Private: {floor.private[0]}, {floor.private[1]}</p>
                <p>Semi-Private: {floor.semi_private[0]}, {floor.semi_private[1]}</p>
                <p>Circulation: {floor.circulation}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>ICU</h3>
            <p>Total Area: {apiResponse.ICU.total_area}</p>
            <p>Total Beds: {apiResponse.ICU.total_beds}</p>
          </div>
          <div>
            <h3>Isolation</h3>
            <p>Total Area: {apiResponse.isolation.total_area}</p>
            <p>Total Beds: {apiResponse.isolation.total_beds}</p>
          </div>
          <p>Nursing Station: {apiResponse.nursing_station}</p>
          <p>Circulation: {apiResponse.circulation}</p>
          <p>Miscellaneous: {apiResponse.miscelleneous}</p>
          <div>
            <h3>Semi ICU</h3>
            <p>Total Area: {apiResponse.semi_icu.total_area}</p>
            <p>Total Beds: {apiResponse.semi_icu.total_beds}</p>
          </div>
        </div>
      )}

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
          {/* <div className="jd8">JD</div> */}
        </div>
        <img className="user-icon11" alt="" src="/user.svg" />
      </div>
    </div>
  );
};

export default Desktop11;
