import { useCallback , useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  MenuItem, // Import MenuItem
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop7.css";

const Desktop7 = () => {
  const navigate = useNavigate();
  const [degree, setDegree] = useState(""); // State to hold the selected degree
  const [college, setCollege] = useState("")

  const [degree1, setDegree1] = useState(""); // State to hold the selected degree
  const [college1, setCollege1] = useState("")// 
  const onLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const onFrameButtonClick = useCallback(() => {
    localStorage.setItem('college1', college1);
    localStorage.setItem('degree1', degree1);
    navigate("/Education-Details");
  }, [navigate, college1, degree1]);
 
  const onFrameInput1Click = useCallback(() => {
    // Please sync "Desktop - 97" to the project
  }, []);
  const onBackTextClick = useCallback(() => {
    navigate("/Education2");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/Education-Details");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-95">
      <div className="hero6">
        <img
          className="ad-placeholder-icon4"
          alt=""
          src="Design4.png"
        />
        <div className="content11">
          <div className="content-child6" />
          <div className="tell-us-about6">Tell us about yourself</div>
          <div className="add-your-educational2">
            Add your educational background. Add upto 3 degrees.
          </div>
          <TextField
            className="content-child7"
            color="primary"
            label="Enter College Name"
            variant="outlined"
            value={college1}
            onChange={(e) => setCollege1(e.target.value)}
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
          />
        
          <Select
            className="content-child8"
            value={degree1}
            onChange={(e) => setDegree1(e.target.value)}
            color="primary"
            displayEmpty
            label="Select Degree"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "405px" }}
            onClick={onFrameInput1Click}
          >
            <MenuItem value="" disabled>
              Select Degree
            </MenuItem>
            <MenuItem value="BDS ">Bachelor of Dental Surgery</MenuItem>
              <MenuItem value="BAMS">Bachelor of Ayurvedic Medicine and Surgery</MenuItem>
              <MenuItem value="BUMS">Bachelor of Unani Medicine and Surgery</MenuItem>
              <MenuItem value="BHMS">Bachelor of Homeopathy Medicine and Surgery</MenuItem>
              <MenuItem value="BYNS">Bachelor of Yoga and Naturopathy Sciences</MenuItem>
              <MenuItem value="B.V.Sc & AH">Bachelor of Veterinary Sciences and Animal Husbandry</MenuItem>
            {/* Add other degrees as MenuItem */}
          </Select>
          <div className="group-parent8">
            <div className="rectangle-wrapper1">
              <div className="group-child17" />
            </div>
            <div className="group-child18" />
          </div>
          <Button
            className="content-child9"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
            onClick={onFrameButtonClick}
          >
            Continue
          </Button>
          <div className="back3" onClick={onBackTextClick}>
            Back
          </div>
          <div className="education-3-optional">Education 3 (Optional)</div>
          <div className="skip1" onClick={onSkipTextClick}>
            Skip
          </div>
        </div>
      </div>
      <div className="footer7">
        <div className="cevah-parent5">
          <b className="cevah14">CEVAH</b>
          <div className="frame-child14" />
          <div className="frame-child15" />
        </div>
        <div className="lorem-ipsum-dolor9">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons21" alt="" src="/vector.svg" />
        <img className="social-icons22" alt="" src="/social-icons.svg" />
        <img className="social-icons23" alt="" src="/social-icons1.svg" />
        <div className="contact-us7">Contact Us</div>
        <div className="support7">Support</div>
        <div className="hellocevahgmailcom-parent5">
          <div className="hellocevahgmailcom7">hellocevah@gmail.com</div>
          <img className="envelope-icon7" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use7">Terms of Use</div>
        <div className="privacy-policy7">Privacy Policy</div>
        <div className="parent9">
          <div className="div13">+919922883377</div>
          <img className="vector-icon16" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs7">FAQs</div>
      </div>
      <div className="header6">
        <div className="content12">
          <div className="logo7" onClick={onLogoContainerClick}>
            <div className="icon7">
              <div className="icon-child12" />
              <div className="icon-child13" />
            </div>
            <b className="cevah15">CEVAH</b>
          </div>
          <div className="navigation7" />
        </div>
        <button className="login7" onClick={onLogout}>
          <div className="sign-in2">Sign Out</div>
        </button> 

      </div>
    </div>
  );
};

export default Desktop7;
