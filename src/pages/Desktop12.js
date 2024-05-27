import { useCallback, useEffect } from "react";
import React, { useState } from 'react';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop12.css";

const Desktop12 = () => {
  const navigate = useNavigate();

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

  const handleChildClick = (setter, selected) => {
    setter(!selected);
  };

  useEffect(() => {
    const selectedCount = [
      selected1, selected2, selected3, selected4, selected5, selected6, selected7, selected8, selected9, selected10,
      selected11, selected12, selected13, selected14, selected15, selected16, selected17, selected18, selected19, selected20,
      selected21, selected22, selected23, selected24
    ].filter(Boolean).length;

    if (selectedCount === 2) {
      const payload = {
        first_name: "RV",
        last_name: "Tikotekar",
        phone_number: "918847752307",
        education: "VIT",
        speciality: "it",
        location: "Punee"
      };

      fetch('https://clownfish-app-kymio.ondigitalocean.app/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer d1c1edd7-fb31-11ee-87c7-6c9466f8da35'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    }
  }, [selected1, selected2, selected3, selected4, selected5, selected6, selected7, selected8, selected9, selected10,
      selected11, selected12, selected13, selected14, selected15, selected16, selected17, selected18, selected19, selected20,
      selected21, selected22, selected23, selected24]);

  const onContinueButtonClick = useCallback(() => {
    navigate("/desktop-108");
  }, [navigate]);

  const onBackButtonTextClick = useCallback(() => {
    navigate("/desktop-107");
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
                <div className={selected1 ? "opthal-child selected1" : "opthal-child"} onClick={() => handleChildClick(setSelected1, selected1)}></div>
                <div className={selected1 ? "ophthalmology selected1" : "ophthalmology"} onClick={() => handleChildClick(setSelected1, selected1)}>Ophthalmology</div>
                <img className="eyeglasses-icon" alt="" src="/eyeglasses.svg" onClick={() => handleChildClick(setSelected1, selected1)} />
              </div>
              <div className="opthal">
                <div className={selected2 ? "opthal-child selected2" : "opthal-child"} onClick={() => handleChildClick(setSelected2, selected2)}></div>
                <div className={selected2 ? "dermatology1 selected2" : "dermatology1"} onClick={() => handleChildClick(setSelected2, selected2)}>Dermatology</div>
                <img className="skin-icon" alt="" src="/skin.svg" onClick={() => handleChildClick(setSelected2, selected2)} />
              </div>
              <div className="opthal">
                <div className={selected3 ? "opthal-child selected3" : "opthal-child"} onClick={() => handleChildClick(setSelected3, selected3)}></div>
                <div className={selected3 ? "gastroenterology1 selected3" : "gastroenterology1"} onClick={() => handleChildClick(setSelected3, selected3)}>Gastroenterology</div>
                <img className="eyeglasses-icon" alt="" src="/stomach.svg" onClick={() => handleChildClick(setSelected3, selected3)} />
              </div>
              <div className="opthal">
                <div className={selected4 ? "opthal-child selected4" : "opthal-child"} onClick={() => handleChildClick(setSelected4, selected4)}></div>
                <div className={selected4 ? "neurology-parent selected4" : "neurology-parent"}>
                  <div className={selected4 ? "infectious-diseases selected4" : "infectious-diseases"}>Neurology</div>
                  <img className="headcircuit-icon" alt="" src="/headcircuit.svg" onClick={() => handleChildClick(setSelected4, selected4)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected5 ? "opthal-child selected5" : "opthal-child"} onClick={() => handleChildClick(setSelected5, selected5)}></div>
                <div className={selected5 ? "cardiology-parent selected5" : "cardiology-parent"}>
                  <div className={selected5 ? "infectious-diseases selected5" : "infectious-diseases"} onClick={() => handleChildClick(setSelected5, selected5)}>Cardiology</div>
                  <img className="heartbeat-icon" alt="" src="/heartbeat.svg" onClick={() => handleChildClick(setSelected5, selected5)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected6 ? "opthal-child selected6" : "opthal-child"} onClick={() => handleChildClick(setSelected6, selected6)}></div>
                <div className={selected6 ? "oncology1 selected6" : "oncology1"}>Oncology</div>
                <img className="cancer-ribbon-icon" alt="" src="/cancer-ribbon.svg" onClick={() => handleChildClick(setSelected6, selected6)} />
              </div>
              <div className="opthal">
                <div className={selected7 ? "opthal-child selected7" : "opthal-child"} onClick={() => handleChildClick(setSelected7, selected7)}></div>
                <div className={selected7 ? "ophthalmology selected7" : "ophthalmology"}>Family Medicine</div>
                <img className="eyeglasses-icon" alt="" src="/stethoscope.svg" onClick={() => handleChildClick(setSelected7, selected7)} />
              </div>
              <div className="opthal">
                <div className={selected8 ? "opthal-child selected8" : "opthal-child"} onClick={() => handleChildClick(setSelected8, selected8)}></div>
                <div className={selected8 ? "anestesiology1 selected8" : "anestesiology1"}>
                  <div className={selected8 ? "anestesiology2 selected8" : "anestesiology2"} onClick={() => handleChildClick(setSelected8, selected8)}>Anestesiology</div>
                  <img className="eyeglasses-icon" alt="" src="/surgeon.svg" onClick={() => handleChildClick(setSelected8, selected8)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected9 ? "opthal-child selected9" : "opthal-child"} onClick={() => handleChildClick(setSelected9, selected9)}></div>
                <div className={selected9 ? "ophthalmology selected9" : "ophthalmology"}>Infectious Diseases</div>
                <img className="infectious-icon" alt="" src="/infectious.svg" onClick={() => handleChildClick(setSelected9, selected9)} />
              </div>
              <div className="opthal">
                <div className={selected10 ? "opthal-child selected10" : "opthal-child"} onClick={() => handleChildClick(setSelected10, selected10)}></div>
                <div className={selected10 ? "endocrinology-parent selected10" : "endocrinology-parent"}>
                  <div className={selected10 ? "infectious-diseases selected10" : "infectious-diseases"} onClick={() => handleChildClick(setSelected10, selected10)}>Endocrinology</div>
                  <img className="thyroid-icon" alt="" src="/thyroid.svg" onClick={() => handleChildClick(setSelected10, selected10)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected11 ? "opthal-child selected11" : "opthal-child"} onClick={() => handleChildClick(setSelected11, selected11)}></div>
                <div className={selected11 ? "ophthalmology selected11" : "ophthalmology"}>Pediatrics</div>
                <img className="baby-icon" alt="" src="/baby.svg" onClick={() => handleChildClick(setSelected11, selected11)} />
              </div>
              <div className="opthal">
                <div className={selected12 ? "opthal-child selected12" : "opthal-child"} onClick={() => handleChildClick(setSelected12, selected12)}></div>
                <div className={selected12 ? "nephrology1 selected12" : "nephrology1"}>
                  <div className={selected12 ? "infectious-diseases selected12" : "infectious-diseases"} onClick={() => handleChildClick(setSelected12, selected12)}>Nephrology</div>
                  <img className="kidneys-icon" alt="" src="/kidneys.svg" onClick={() => handleChildClick(setSelected12, selected12)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected13 ? "opthal-child selected13" : "opthal-child"} onClick={() => handleChildClick(setSelected13, selected13)}></div>
                <div className={selected13 ? "pulmonology1 selected13" : "pulmonology1"}>Pulmonology</div>
                <img className="lungs-icon" alt="" src="/lungs.svg" onClick={() => handleChildClick(setSelected13, selected13)} />
              </div>
              <div className="opthal">
                <div className={selected14 ? "opthal-child selected14" : "opthal-child"} onClick={() => handleChildClick(setSelected14, selected14)}></div>
                <div className={selected14 ? "rheumatology-parent selected14" : "rheumatology-parent"}>
                  <div className={selected14 ? "infectious-diseases selected14" : "infectious-diseases"} onClick={() => handleChildClick(setSelected14, selected14)}>Rheumatology</div>
                  <img className="bone-icon" alt="" src="/bone.svg" onClick={() => handleChildClick(setSelected14, selected14)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected15 ? "opthal-child selected15" : "opthal-child"} onClick={() => handleChildClick(setSelected15, selected15)}></div>
                <div className={selected15 ? "orthopedic1 selected15" : "orthopedic1"}>Orthopedic</div>
                <img className="bone-fracture-icon" alt="" src="/bone-fracture.svg" onClick={() => handleChildClick(setSelected15, selected15)} />
              </div>
              <div className="opthal">
                <div className={selected16 ? "opthal-child selected16" : "opthal-child"} onClick={() => handleChildClick(setSelected16, selected16)}></div>
                <div className={selected16 ? "urology1 selected16" : "urology1"}>Urology</div>
                <img className="bladder-icon" alt="" src="/bladder.svg" onClick={() => handleChildClick(setSelected16, selected16)} />
              </div>
              <div className="opthal">
                <div className={selected17 ? "opthal-child selected17" : "opthal-child"} onClick={() => handleChildClick(setSelected17, selected17)}></div>
                <div className={selected17 ? "general-surgery1 selected17" : "general-surgery1"}>
                  <div className={selected17 ? "infectious-diseases selected17" : "infectious-diseases"} onClick={() => handleChildClick(setSelected17, selected17)}>General Surgery</div>
                  <img className="surgical-knife-icon" alt="" src="/surgical-knife.svg" onClick={() => handleChildClick(setSelected17, selected17)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected18 ? "opthal-child selected18" : "opthal-child"} onClick={() => handleChildClick(setSelected18, selected18)}></div>
                <div className={selected18 ? "gynecology1 selected18" : "gynecology1"}>
                  <div className={selected18 ? "infectious-diseases selected18" : "infectious-diseases"} onClick={() => handleChildClick(setSelected18, selected18)}>Gynecology</div>
                  <img className="uterus-icon" alt="" src="/uterus.svg" onClick={() => handleChildClick(setSelected18, selected18)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected19 ? "opthal-child selected19" : "opthal-child"} onClick={() => handleChildClick(setSelected19, selected19)}></div>
                <div className={selected19 ? "neurology-parent selected19" : "neurology-parent"}>
                  <div className={selected19 ? "infectious-diseases selected19" : "infectious-diseases"} onClick={() => handleChildClick(setSelected19, selected19)}>Neurology</div>
                  <img className="headcircuit-icon" alt="" src="/headcircuit.svg" onClick={() => handleChildClick(setSelected19, selected19)} />
                </div>
              </div>
              <div className="opthal">
                <div className={selected20 ? "opthal-child selected20" : "opthal-child"} onClick={() => handleChildClick(setSelected20, selected20)}></div>
                <div className={selected20 ? "gastroenterology1 selected20" : "gastroenterology1"}>Gastroenterology</div>
                <img className="eyeglasses-icon" alt="" src="/stomach.svg" onClick={() => handleChildClick(setSelected20, selected20)} />
              </div>
              <div className="opthal">
                <div className={selected21 ? "opthal-child selected21" : "opthal-child"} onClick={() => handleChildClick(setSelected21, selected21)}></div>
                <div className={selected21 ? "urology1 selected21" : "urology1"}>Urology</div>
                <img className="bladder-icon" alt="" src="/bladder.svg" onClick={() => handleChildClick(setSelected21, selected21)} />
              </div>
              <div className="opthal">
                <div className={selected22 ? "opthal-child selected22" : "opthal-child"} onClick={() => handleChildClick(setSelected22, selected22)}></div>
                <div className={selected22 ? "dermatology1 selected22" : "dermatology1"}>Dermatology</div>
                <img className="skin-icon" alt="" src="/skin.svg" onClick={() => handleChildClick(setSelected22, selected22)} />
              </div>
              <div className="opthal">
                <div className={selected23 ? "opthal-child selected23" : "opthal-child"} onClick={() => handleChildClick(setSelected23, selected23)}></div>
                <div className={selected23 ? "oncology1 selected23" : "oncology1"}>Oncology</div>
                <img className="cancer-ribbon-icon" alt="" src="/cancer-ribbon.svg" onClick={() => handleChildClick(setSelected23, selected23)} />
              </div>
              <div className="opthal">
                <div className={selected24 ? "opthal-child selected24" : "opthal-child"} onClick={() => handleChildClick(setSelected24, selected24)}></div>
                <div className={selected24 ? "infectious-diseases selected24" : "infectious-diseases"}>Infectious Diseases</div>
                <img className="infectious-icon" alt="" src="/infectious.svg" onClick={() => handleChildClick(setSelected24, selected24)} />
              </div>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="continue-button-parent">
              <Button
                className="continue-button"
                sx={{ width: 297 }}
                variant="contained"
                color="primary"
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
      </div>
      <div className="logo1" onClick={onLogoContainerClick}>
        <img className="group-icon4" alt="" src="/group-54.svg" />
      </div>
    </div>
  );
};

export default Desktop12;
