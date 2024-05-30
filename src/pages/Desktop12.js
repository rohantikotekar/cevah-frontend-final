import { useCallback } from "react";
import React, { useState } from 'react';

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop12.css";

const Desktop12 = () => {
  const navigate = useNavigate();
  const onLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);


  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);
  const [selected9, setSelected9] = useState(false);
  const [selected10, setSelected10] = useState(false);
  const [selected11, setSelected11] = useState(false);
  const [selected12, setSelected12] = useState(false);
  const [selected13, setSelected13] = useState(false);
  const [selected14, setSelected14] = useState(false);
  const [selected15, setSelected15] = useState(false);
  const [selected16, setSelected16] = useState(false);
  const [selected17, setSelected17] = useState(false);
  const [selected18, setSelected18] = useState(false);
  const [selected19, setSelected19] = useState(false);
  const [selected20, setSelected20] = useState(false);
  const [selected21, setSelected21] = useState(false);
  const [selected22, setSelected22] = useState(false);
  const [selected23, setSelected23] = useState(false);
  const [selected24, setSelected24] = useState(false);

  function handleChildClick1() {
    setSelected1(!selected1); // Toggle selected state
  }

  function handleChildClick2() {
    setSelected2(!selected2); // Toggle selected state
  }

  function handleChildClick3() {
    setSelected3(!selected3);
  }

  function handleChildClick4() {
    setSelected4(!selected4);
  }

  function handleChildClick5() {
    setSelected5(!selected5);
  }

  function handleChildClick6() {
    setSelected6(!selected6);
  }

  function handleChildClick7() {
    setSelected7(!selected7);
  }

  function handleChildClick8() {
    setSelected8(!selected8);
  }

  function handleChildClick9() {
    setSelected9(!selected9);
  }

  function handleChildClick10() {
    setSelected10(!selected10);
  }

  function handleChildClick11() {
    setSelected11(!selected11);
  }

  function handleChildClick12() {
    setSelected12(!selected12);
  }

  function handleChildClick13() {
    setSelected13(!selected13);
  }

  function handleChildClick14() {
    setSelected14(!selected14);
  }

  function handleChildClick15() {
    setSelected15(!selected15);
  }

  function handleChildClick16() {
    setSelected16(!selected16);
  }

  function handleChildClick17() {
    setSelected17(!selected17);
  }

  function handleChildClick18() {
    setSelected18(!selected18);
  }

  function handleChildClick19() {
    setSelected19(!selected19);
  }

  function handleChildClick20() {
    setSelected20(!selected20);
  }

  function handleChildClick21() {
    setSelected21(!selected21);
  }

  function handleChildClick22() {
    setSelected22(!selected22);
  }

  function handleChildClick23() {
    setSelected23(!selected23);
  }

  function handleChildClick24() {
    setSelected24(!selected24);
  }


  const onContinueButtonClick = useCallback(async () => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const college = localStorage.getItem("college");
  const college1 = localStorage.getItem("college1");
  const college3 = localStorage.getItem("college3");
  const projectAddress = JSON.parse(localStorage.getItem("projectAddress"));


    const payload = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      education: (college,college1,college3),
      speciality: "CS",
      location:  projectAddress,
    };

    try {
      const response = await fetch('https://clownfish-app-kymio.ondigitalocean.app/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer d1c1edd7-fb31-11ee-87c7-6c9466f8da35',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Success:', data);
        navigate("/Calculation-Details");
      } else {
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [navigate]);

  const onBackButtonTextClick = useCallback(() => {
    navigate("/Address");
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
          src="Desktopmedirailpanels2.png"
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
                <div className={selected1 ? "opthal-child selected1" : "opthal-child"}  onClick={handleChildClick1}   ></div>
                <div className={selected1 ? "ophthalmology selected1" : "ophthalmology"} onClick={handleChildClick1}>Ophthalmology</div>
                <img className="eyeglasses-icon" alt="" src="/eyeglasses.svg"   onClick={handleChildClick1} />
            </div>

                  <div className="opthal">
          <div className={selected2 ? "opthal-child selected2" : "opthal-child"}  onClick={handleChildClick2}   ></div>
          <div className={selected2 ? "dermatology1 selected2" : "dermatology1"} onClick={handleChildClick2}>Dermatology</div>
          <img className="skin-icon" alt="" src="/skin.svg"   onClick={handleChildClick2} />
            </div>

                      <div className="opthal">
              <div className={selected3 ? "opthal-child selected3" : "opthal-child"}  onClick={handleChildClick3}></div>
              <div className={selected3 ? "gastroenterology1 selected3" : "gastroenterology1"} onClick={handleChildClick3}>Gastroenterology</div>
              <img className="eyeglasses-icon" alt="" src="/stomach.svg" onClick={handleChildClick3} />
          </div>
 
          <div className="opthal">
    <div className={selected4 ? "opthal-child selected4" : "opthal-child"}  onClick={handleChildClick4}></div>
    <div className={selected4 ? "neurology-parent selected4" : "neurology-parent"}>
        <div className={selected4 ? "infectious-diseases selected4" : "infectious-diseases"}>Neurology</div>
        <img className="headcircuit-icon" alt="" src="/headcircuit.svg" onClick={handleChildClick4} />
    </div>
</div>

          <div className="opthal">
              <div className={selected5 ? "opthal-child selected5" : "opthal-child"}  onClick={handleChildClick5}></div>
              <div className={selected5 ? "cardiology-parent selected5" : "cardiology-parent"}>
                  <div className={selected5 ? "infectious-diseases selected5" : "infectious-diseases"} onClick={handleChildClick5}>Cardiology</div>
                  <img className="heartbeat-icon" alt="" src="/heartbeat.svg" onClick={handleChildClick5} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected6 ? "opthal-child selected6" : "opthal-child"}  onClick={handleChildClick6}></div>
              <div className={selected6 ? "oncology1 selected6" : "oncology1"}>Oncology</div>
              <img className="cancer-ribbon-icon" alt="" src="/cancer-ribbon.svg" onClick={handleChildClick6} />
          </div>
          <div className="opthal">
              <div className={selected7 ? "opthal-child selected7" : "opthal-child"}  onClick={handleChildClick7}></div>
              <div className={selected7 ? "ophthalmology selected7" : "ophthalmology"}>Family Medicine</div>
              <img className="eyeglasses-icon" alt="" src="/stethoscope.svg" onClick={handleChildClick7} />
          </div>


                    <div className="opthal">
              <div className={selected8 ? "opthal-child selected8" : "opthal-child"}  onClick={handleChildClick8}></div>
              <div className={selected8 ? "anestesiology1 selected8" : "anestesiology1"}>
                  <div className={selected8 ? "anestesiology2 selected8" : "anestesiology2"}onClick={handleChildClick8}>Anestesiology</div>
                  <img className="syringe-icon" alt="" src="/syringe.svg" onClick={handleChildClick8} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected9 ? "opthal-child selected9" : "opthal-child"}  onClick={handleChildClick9}></div>
              <div className={selected9 ? "gastroenterology1 selected9" : "gastroenterology1"}>Immunology</div>
              <img className="eyeglasses-icon" alt="" src="/icon.svg" onClick={handleChildClick9} />
          </div>
          <div className="opthal">
              <div className={selected10 ? "opthal-child selected10" : "opthal-child"}  onClick={handleChildClick10}></div>
              <div className={selected10 ? "nephrology-wrapper selected10" : "nephrology-wrapper"}>
                  <div className={selected10 ? "nephrology1 selected10" : "nephrology1"}>Nephrology</div>
                  <img className="kidneys-icon" alt="" src="/kidneys.svg" onClick={handleChildClick10} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected11 ? "opthal-child selected11" : "opthal-child"}  onClick={handleChildClick11}></div>
              <div className={selected11 ? "gynecology1 selected11" : "gynecology1"}>Gynecology</div>
              <img className="uterus-icon-2" alt="" src="/uterusicon-2.svg" onClick={handleChildClick11} />
          </div>
          <div className="opthal">
              <div className={selected12 ? "opthal-child selected12" : "opthal-child"}  onClick={handleChildClick12}></div>
              <div className={selected12 ? "pediatrics-parent selected12" : "pediatrics-parent"}>
                  <div className={selected12 ? "infectious-diseases selected12" : "infectious-diseases"}>Pediatrics</div>
                  <img className="baby-icon" alt="" src="/baby.svg" onClick={handleChildClick12} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected13 ? "opthal-child selected13" : "opthal-child"}  onClick={handleChildClick13}></div>
              <div className={selected13 ? "ophthalmology selected13" : "ophthalmology"}>Psychiatry</div>
              <img className="brain-icon" alt="" src="/brain.svg" onClick={handleChildClick13} />
          </div>
          <div className="opthal">
              <div className={selected14 ? "opthal-child selected14" : "opthal-child"}  onClick={handleChildClick14}></div>
              <div className={selected14 ? "emergency-medicine-parent selected14" : "emergency-medicine-parent"}>
                  <div className={selected14 ? "emergency-medicine selected14" : "emergency-medicine"}>Emergency Medicine</div>
                  <img className="ambulance-icon" alt="" src="/ambulance.svg" onClick={handleChildClick14} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected15 ? "opthal-child selected15" : "opthal-child"}  onClick={handleChildClick15}></div>
              <div className={selected15 ? "gastroenterology1 selected15" : "gastroenterology1"}>Geriatrics</div>
              <img className="old-man-icon" alt="" src="/old-man.svg" onClick={handleChildClick15} />
          </div> 
          <div className="opthal">
              <div className={selected16 ? "opthal-child selected16" : "opthal-child"}  onClick={handleChildClick16}></div>
              <div className={selected16 ? "radiology-parent selected16" : "radiology-parent"}>
                  <div className={selected16 ? "radiology1 selected16" : "radiology1"}>Radiology</div>
                  <img className="layer-1-icon" alt="" src="/layer-1.svg" onClick={handleChildClick16} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected17 ? "opthal-child selected17" : "opthal-child"}  onClick={handleChildClick17}></div>
              <div className={selected17 ? "endocrinology-parent selected17" : "endocrinology-parent"}>
                  <div className={selected17 ? "infectious-diseases selected17" : "infectious-diseases"}>Endocrinology</div>
                  <img className="heartbeat-icon1" alt="" src="/heartbeat.svg" onClick={handleChildClick17} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected18 ? "opthal-child selected18" : "opthal-child"}  onClick={handleChildClick18}></div>
              <div className={selected18 ? "geneticist-parent selected18" : "geneticist-parent"}>
                  <div className={selected18 ? "infectious-diseases selected18" : "infectious-diseases"}>Geneticist</div>
                  <img className="testtube-icon" alt="" src="/testtube.svg" onClick={handleChildClick18} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected19 ? "opthal-child selected19" : "opthal-child"}  onClick={handleChildClick19}></div>
              <img className="eyeglasses-icon" alt="" src="/hospital.svg" onClick={handleChildClick19} />
              <div className={selected19 ? "ophthalmology selected19" : "ophthalmology"}>{`Hospice & Palliative`}</div>
          </div>
          <div className="opthal">
              <div className={selected20 ? "opthal-child selected20" : "opthal-child"}  onClick={handleChildClick20}></div>
              <div className={selected20 ? "dermatology1 selected20" : "dermatology1"}>Internal Medicine</div>
              <img className="plant-icon" alt="" src="/plant.svg" onClick={handleChildClick20} />
          </div>
          <div className="opthal">
              <div className={selected21 ? "opthal-child selected21" : "opthal-child"}  onClick={handleChildClick21}></div>
              <div className={selected21 ? "gastroenterology1 selected21" : "gastroenterology1"}>Hematology</div>
              <img className="old-man-icon" alt="" src="/blooddrop.svg" onClick={handleChildClick21} />
          </div>
          <div className="opthal">
              <div className={selected22 ? "opthal-child selected22" : "opthal-child"}  onClick={handleChildClick22}></div>
              <div className={selected22 ? "infectious-diseases-parent selected22" : "infectious-diseases-parent"}>
                  <div className={selected22 ? "infectious-diseases selected22" : "infectious-diseases"}>Infectious Diseases</div>
                  <img className="virus-icon" alt="" src="/virus.svg" onClick={handleChildClick22} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected23 ? "opthal-child selected23" : "opthal-child"}  onClick={handleChildClick23}></div>
              <div className={selected23 ? "osteology-parent selected23" : "osteology-parent"}>
                  <div className={selected23 ? "infectious-diseases selected23" : "infectious-diseases"}>Osteology</div>
                  <img className="headcircuit-icon" alt="" src="/bone.svg" onClick={handleChildClick23} />
              </div>
          </div>
          <div className="opthal">
              <div className={selected24 ? "opthal-child selected24" : "opthal-child"}  onClick={handleChildClick24}></div>
              <div className={selected24 ? "oncology1 selected24" : "oncology1"}>Otolaryngologists</div>
              <img className="frame-icon" alt="" src="/frame.svg" onClick={handleChildClick24} />
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
        <button className="login7" onClick={onLogout}>
          <div className="sign-in2">Sign Out</div>
        </button> 

      </div>
    </div>
  );
};

export default Desktop12;
