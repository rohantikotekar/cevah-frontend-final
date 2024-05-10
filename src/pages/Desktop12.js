import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop12.css";

const Desktop12 = () => {
  const navigate = useNavigate();

  const onContinueButtonClick = useCallback(() => {
    navigate("/desktop-115");
  }, [navigate]);

  const onBackButtonTextClick = useCallback(() => {
    navigate("/desktop-108");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-114">
      <div className="hero11">
        <img
          className="ad-place-holder1"
          alt=""
          src="/ad-place-holder@2x.png"
        />
        <div className="content19">
          <div className="content-child13" />
          <div className="content-child14" />
          <div className="top2">
            <div className="tell-us-about10">Tell us about the Project</div>
            <div className="select-specialties-offered">
              Select Specialties Offered
            </div>
          </div>
          <div className="content-inner2">
            <div className="opthal-parent">
              <div className="opthal">
                <div className="opthal-child" />
                <div className="ophthalmology">Ophthalmology</div>
                <img className="eyeglasses-icon" alt="" src="/eyeglasses.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="dermatology1">Dermatology</div>
                <img className="skin-icon" alt="" src="/skin.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="gastroenterology1">Gastroenterology</div>
                <img className="eyeglasses-icon" alt="" src="/stomach.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="neurology-parent">
                  <div className="infectious-diseases">Neurology</div>
                  <img
                    className="headcircuit-icon"
                    alt=""
                    src="/headcircuit.svg"
                  />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="cardiology-parent">
                  <div className="infectious-diseases">Cardiology</div>
                  <img className="heartbeat-icon" alt="" src="/heartbeat.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="oncology1">Oncology</div>
                <img
                  className="cancer-ribbon-icon"
                  alt=""
                  src="/cancer-ribbon.svg"
                />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="ophthalmology">Family Medicine</div>
                <img
                  className="eyeglasses-icon"
                  alt=""
                  src="/stethoscope.svg"
                />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="anestesiology1">
                  <div className="anestesiology2">Anestesiology</div>
                  <img className="syringe-icon" alt="" src="/syringe.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="gastroenterology1">Immunology</div>
                <img className="eyeglasses-icon" alt="" src="/icon.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="nephrology-wrapper">
                  <div className="nephrology1">Nephrology</div>
                </div>
                <img className="kidneys-icon" alt="" src="/kidneys.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="gynecology1">Gynecology</div>
                <img className="uterus-icon-2" alt="" src="/uterusicon-2.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="pediatrics-parent">
                  <div className="infectious-diseases">Pediatrics</div>
                  <img className="baby-icon" alt="" src="/baby.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="ophthalmology">Psychiatry</div>
                <img className="brain-icon" alt="" src="/brain.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="emergency-medicine-parent">
                  <div className="emergency-medicine">Emergency Medicine</div>
                  <img className="ambulance-icon" alt="" src="/ambulance.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="gastroenterology1">Geriatrics</div>
                <img className="old-man-icon" alt="" src="/old-man.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="radiology-parent">
                  <div className="radiology1">Radiology</div>
                  <img className="layer-1-icon" alt="" src="/layer-1.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="endocrinology-parent">
                  <div className="infectious-diseases">Endocrinology</div>
                  <img
                    className="heartbeat-icon1"
                    alt=""
                    src="/heartbeat.svg"
                  />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="geneticist-parent">
                  <div className="infectious-diseases">Geneticist</div>
                  <img className="testtube-icon" alt="" src="/testtube.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <img className="eyeglasses-icon" alt="" src="/hospital.svg" />
                <div className="ophthalmology">{`Hospice & Palliative`}</div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="dermatology1">Internal Medicine</div>
                <img className="plant-icon" alt="" src="/plant.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="gastroenterology1">Hematology</div>
                <img className="old-man-icon" alt="" src="/blooddrop.svg" />
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="infectious-diseases-parent">
                  <div className="infectious-diseases">Infectious Diseases</div>
                  <img className="virus-icon" alt="" src="/virus.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="osteology-parent">
                  <div className="infectious-diseases">Osteology</div>
                  <img className="headcircuit-icon" alt="" src="/bone.svg" />
                </div>
              </div>
              <div className="opthal">
                <div className="opthal-child" />
                <div className="oncology1">Otolaryngologists</div>
                <img className="frame-icon" alt="" src="/frame.svg" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-child" />
            <div className="status-bar2">
              <div className="status-bar-inner2">
                <div className="group-child31" />
              </div>
              <div className="status-bar-child3" />
            </div>
            <Button
              className="continue-button"
              disableElevation={true}
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 51 }}
              onClick={onContinueButtonClick}
            >
              Continue
            </Button>
            <div className="back-button" onClick={onBackButtonTextClick}>
              Back
            </div>
          </div>
        </div>
      </div>
      <div className="footer12">
        <div className="cevah-parent10">
          <b className="cevah24">CEVAH</b>
          <div className="frame-child24" />
          <div className="frame-child25" />
        </div>
        <div className="lorem-ipsum-dolor16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons36" alt="" src="/vector.svg" />
        <img className="social-icons37" alt="" src="/social-icons.svg" />
        <img className="social-icons38" alt="" src="/social-icons1.svg" />
        <div className="contact-us12">Contact Us</div>
        <div className="support12">Support</div>
        <div className="hellocevahgmailcom-parent10">
          <div className="hellocevahgmailcom12">hellocevah@gmail.com</div>
          <img className="envelope-icon12" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use12">Terms of Use</div>
        <div className="privacy-policy12">Privacy Policy</div>
        <div className="parent14">
          <div className="div18">+91 9922883377</div>
          <img className="vector-icon21" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs12">FAQs</div>
      </div>
      <div className="header11">
        <div className="content20">
          <div className="logo12" onClick={onLogoContainerClick}>
            <div className="icon13">
              <div className="icon-child22" />
              <div className="icon-child23" />
            </div>
            <b className="cevah25">CEVAH</b>
          </div>
          <div className="navigation12" />
        </div>
        <button className="login11">
          <div className="jd9">JD</div>
        </button>
      </div>
    </div>
  );
};

export default Desktop12;
