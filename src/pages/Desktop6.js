import { useCallback, useState } from "react";
import {
  TextField,

  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop6.css";

const Desktop6 = () => {
  const navigate = useNavigate();
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');

  const handleChangeCollege = (event) => {
    setCollege(event.target.value);
  };

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };

  const onFrameButtonClick = useCallback(() => {
    localStorage.setItem('college', college);
    navigate("/desktop-95");
  }, [navigate, college, degree]);


  const onBackTextClick = useCallback(() => {
    navigate("/desktop-93");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/desktop-95");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-185">
      <div className="hero5">
        <img
          className="ad-placeholder-icon3"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="content9">
          <div className="content-child2" />
          <div className="tell-us-about5">Tell us about yourself</div>
          <div className="add-your-educational1">
            Add your educational background. Add upto 3 degrees.
          </div>
          <TextField
            className="content-child3"
            color="primary"
            label="Enter College Name"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
            onChange={handleChangeCollege}
            value={college}
          />
         
          <FormControl
            variant="outlined"
            sx={{ m: 1, width: 405 }}
            className="content-child4"
          >
            <InputLabel id="select-degree-label">Enter Degree Name</InputLabel>
            <Select
              labelId="select-degree-label"
              id="select-degree"
              value={degree}
              onChange={handleChangeDegree}
              label="Enter Degree Name"
              sx={{ height: 57 }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="BDS ">Bachelor of Dental Surgery</MenuItem>
              <MenuItem value="BAMS">Bachelor of Ayurvedic Medicine and Surgery</MenuItem>
              <MenuItem value="BUMS">Bachelor of Unani Medicine and Surgery</MenuItem>
              <MenuItem value="BHMS">Bachelor of Homeopathy Medicine and Surgery</MenuItem>
              <MenuItem value="BYNS">Bachelor of Yoga and Naturopathy Sciences</MenuItem>
              <MenuItem value="B.V.Sc & AH">Bachelor of Veterinary Sciences and Animal Husbandry</MenuItem>
              {/* Additional degrees */}
            </Select>
          </FormControl>
          <div className="group-parent7">
            <div className="rectangle-frame">
              <div className="group-child15" />
            </div>
            <div className="group-child16" />
          </div>
          <Button
            className="content-child5"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back2" onClick={onBackTextClick}>
            Back
          </div>
          <div className="education-2-optional">Education 2 (Optional)</div>
          <div className="skip" onClick={onSkipTextClick}>
            Skip
          </div>
        </div>
      </div>
      <div className="footer6">
        <div className="cevah-parent4">
          <b className="cevah12">CEVAH</b>
          <div className="frame-child12" />
          <div className="frame-child13" />
        </div>
        <div className="lorem-ipsum-dolor8">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons18" alt="" src="/vector.svg" />
        <img className="social-icons19" alt="" src="/social-icons.svg" />
        <img className="social-icons20" alt="" src="/social-icons1.svg" />
        <div className="contact-us6">Contact Us</div>
        <div className="support6">Support</div>
        <div className="hellocevahgmailcom-parent4">
          <div className="hellocevahgmailcom6">hellocevah@gmail.com</div>
          <img className="envelope-icon6" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use6">Terms of Use</div>
        <div className="privacy-policy6">Privacy Policy</div>
        <div className="parent8">
          <div className="div12">+91 9922883377</div>
          <img className="vector-icon15" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs6">FAQs</div>
      </div>
      <div className="header5">
        <div className="content10">
          <div className="logo6" onClick={onLogoContainerClick}>
            <div className="icon6">
              <div className="icon-child10" />
              <div className="icon-child11" />
            </div>
            <b className="cevah13">CEVAH</b>
          </div>
          <div className="navigation6" />
        </div>
        <div className="login5">
          <div className="jd4">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;
