import { useCallback,useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop16.css";

const Desktop16 = () => {
  const navigate = useNavigate();

  const [college3, setCollege3] = useState('');
  const [degree, setDegree] = useState('');


  const handleChangeCollege = (event) => {
    setCollege3(event.target.value);
  };

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };

  const onFrameButtonClick = useCallback(() => {
    localStorage.setItem('college3', college3);
    navigate("/desktop-94");
  }, [navigate, college3]);


  const onBackTextClick = useCallback(() => {
    navigate("/desktop-90");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-93">
      <div className="hero15">
        <img
          className="ad-placeholder-icon6"
          alt=""
          src="/screenshot-20240319-at-1228-2@2x.png"
        />
        <div className="content26">
          <div className="content-child17" />
          <div className="tell-us-about12">Tell us about yourself</div>
          <div className="add-your-educational4">
            Add your educational background. Add upto 3 degrees.
          </div>
          <TextField
            className="content-child18"
            color="primary"
            label="Enter College Name"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
            value={college3}
            onChange={handleChangeCollege}
          />
         
          <FormControl
            variant="outlined"
            sx={{ m: 1, width: 405 }}
            className="content-child19"
          >
            <InputLabel id="select-degree-label">Enter Degree Name</InputLabel>
            <Select
              labelId="select-degree-label"
              id="select-degree"
              
              onChange={handleChangeDegree}
              label="Enter Degree Name"
              sx={{ height: 57 }}
              value={degree}

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
          <div className="group-parent11">
            <div className="rectangle-wrapper3">
              <div className="group-child35" />
            </div>
            <div className="group-child36" />
          </div>
          <Button
            className="content-child20"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back10" onClick={onBackTextClick}>
            Back
          </div>
          <div className="education-12">Education 1*</div>
        </div>
      </div>
      <div className="footer16">
        <div className="cevah-parent14">
          <b className="cevah32">CEVAH</b>
          <div className="frame-child33" />
          <div className="frame-child34" />
        </div>
        <div className="lorem-ipsum-dolor20">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons48" alt="" src="/vector.svg" />
        <img className="social-icons49" alt="" src="/social-icons.svg" />
        <img className="social-icons50" alt="" src="/social-icons1.svg" />
        <div className="contact-us16">Contact Us</div>
        <div className="support16">Support</div>
        <div className="hellocevahgmailcom-parent14">
          <div className="hellocevahgmailcom16">hellocevah@gmail.com</div>
          <img className="envelope-icon16" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use16">Terms of Use</div>
        <div className="privacy-policy16">Privacy Policy</div>
        <div className="parent18">
          <div className="div23">+91 9922883377</div>
          <img className="vector-icon25" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs16">FAQs</div>
      </div>
      <div className="header15">
        <div className="content27">
          <div className="logo16" onClick={onLogoContainerClick}>
            <div className="icon18">
              <div className="icon-child30" />
              <div className="icon-child31" />
            </div>
            <b className="cevah33">CEVAH</b>
          </div>
          <div className="navigation16" />
        </div>
        <div className="login15">
          <div className="jd13">JD</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop16;
