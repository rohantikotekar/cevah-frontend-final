import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './report.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GroupComponent from '../components/GroupComponent';

const Report = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogout = useCallback(() => {
    navigate("/desktop-83");
  }, [navigate]);

  const [numberOfFloors, setNumberOfFloors] = useState('');
  const [floorDetails, setFloorDetails] = useState([]);
  const [siteInfo, setSiteInfo] = useState({
    sqFt: '',
    carpetArea: '',
    heightRestriction: '',
    totalBuiltUpArea: '',
    fsi: '',
    fsiHeight: ''
  });

  const [gFloorInfo, setGFloorInfo] = useState({
    opdArea: '',
    diagnosticArea: '',
    circulationArea: '',
    pharmacyArea: '',
    receptionArea: '',
    totalGroundFloorArea: '',
    casualtyArea: ''
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    icu: { totalArea: '', totalBeds: '' },
    isolation: { totalArea: '', totalBeds: '' },
    nursingStation: '',
    circulation: '',
    miscellaneous: '',
    semiIcu: { totalArea: '', totalBeds: '' }
  });

  useEffect(() => {
    const storedResponse = localStorage.getItem('apiResponse');
    if (storedResponse) {
      const data = JSON.parse(storedResponse);

      setSiteInfo({
        sqFt: data.total_built_up_area,
        carpetArea: data.carpet_area,
        heightRestriction: '',
        totalBuiltUpArea: data.total_built_up_area,
        fsi: data.FSI,
        fsiHeight: ''
      });

      setGFloorInfo({
        opdArea: data.ground_floor_area[0].opd[0],
        diagnosticArea: data.ground_floor_area[0].diagnostic,
        circulationArea: data.ground_floor_area[0].circulation,
        pharmacyArea: data.ground_floor_area[0].pharmacy,
        receptionArea: data.ground_floor_area[0].reception,
        totalGroundFloorArea: data.ground_floor_area[0].total_area,
        casualtyArea: data.ground_floor_area[0].casualty[0]
      });

      const numFloors = data.no_of_floors;
      setNumberOfFloors(numFloors);

      const updatedDetails = data.floors_area.map((floor, index) => ({
        floorNumber: index + 1,
        floorArea: floor.total_area,
        floorRestriction: '',
        totalFloorArea: floor.total_area,
        totalAreaPrivateRooms: floor.private[0],
        numBedsPrivate: floor.private[1],
        totalAreaSemiPrivateRooms: floor.semi_private[0],
        numBedsSemiPrivate: floor.semi_private[1],
        circulationArea: floor.circulation
      }));
      setFloorDetails(updatedDetails);

      setAdditionalInfo({
        icu: {
          totalArea: data.ICU.total_area,
          totalBeds: data.ICU.total_beds
        },
        isolation: {
          totalArea: data.isolation.total_area,
          totalBeds: data.isolation.total_beds
        },
        nursingStation: data.nursing_station,
        circulation: data.circulation,
        miscellaneous: data.miscelleneous,
        semiIcu: {
          totalArea: data.semi_icu.total_area,
          totalBeds: data.semi_icu.total_beds
        }
      });
    }
  }, []);

  const handleNumberOfFloorsChange = (e) => {
    const numFloors = parseInt(e.target.value) || '';
    setNumberOfFloors(numFloors);

    const updatedDetails = Array.from({ length: numFloors }, (_, index) => ({
      floorNumber: index + 1,
      floorArea: '',
      floorRestriction: '',
      totalFloorArea: '',
      totalAreaPrivateRooms: '',
      numBedsPrivate: '',
      totalAreaSemiPrivateRooms: '',
      numBedsSemiPrivate: '',
      circulationArea: ''
    }));
    setFloorDetails(updatedDetails);
  };

  return (
    <div className="new-desktop-216">
      <Header />
      <div className="new-desktop-216-inner">
        <div className="new-thank-you-for-entrusting-cevah-parent">
        <div className="new-cevah-masterplanning-report-parent">
            <b className="new-cevah-masterplanning-report">
              Cevah Masterplanning Report
            </b>
            <div className="new-welcome-to-your-container">
              <p className="new-welcome-to-your">
                Welcome to your custom CEVAH Masterplanning Report!
              </p>
              <p className="new-welcome-to-your">&nbsp;</p>
              <p className="new-welcome-to-your">&nbsp;</p>
              <p className="new-blank-line4">&nbsp;</p>
            </div>
            <div className="new-we-are-delighted">
              We are delighted to present you with a comprehensive analysis of
              your healthcare facility requirements. This report serves as a
              roadmap to guide you in optimizing the design and layout of your
              facility, ensuring that it meets your unique needs and vision.
            </div>
          </div>
          <div className="new-hospital-building-amico-2-1-parent">
            <img
              className="new-hospital-building-amico-2-1"
              alt=""
              src="/hospital-buildingamico-2-1@2x.png"
            />

          <div className="new-frame-parent">
            <div className="new-feasibility-study-details-parent">
              <div className="new-feasibility-study">
              <b>Site Information</b>
              </div>
              <div className="inner-p">
                <div className="new-report-section">
                  <div className="new-label">Total site area (sq ft) :</div>
                  <div className="new-value">{siteInfo.sqFt}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Total carpet area (sq ft) :</div>
                  <div className="new-value">{siteInfo.carpetArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Height restriction (ft) :</div>
                  <div className="new-value">{siteInfo.heightRestriction}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Total built up area (sq ft) :</div>
                  <div className="new-value">{siteInfo.totalBuiltUpArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">FSI (Floor Space Index) :</div>
                  <div className="new-value">{siteInfo.fsi}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">FSI Height (ft) :</div>
                  <div className="new-value">{siteInfo.fsiHeight}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Number of floors :</div>
                  <label className="new-value" onChange={handleNumberOfFloorsChange}>{numberOfFloors}</label>
                </div>
                </div>
              </div>
            </div>
            <div className="new-researching-amico-4-parent">
            <img
              className="new-researching-amico-4-icon"
              alt=""
              src="/researchingamico-4@2x.png"
            />
            <div className="new-ground-floor-details-parent">
              <div className="new-ground-floor">
               <b>G Floor</b> 
              </div>
              <div className="inner-p">
                <div className="new-report-section">
                  <div className="new-label">OPD area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.opdArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Diagnostic area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.diagnosticArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Circulation area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.circulationArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Pharmacy area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.pharmacyArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Reception area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.receptionArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Total ground floor area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.totalGroundFloorArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Casualty area (sq ft) :</div>
                  <div className="new-value">{gFloorInfo.casualtyArea}</div>
                </div>
                </div>
              </div>
            </div>
            
              <img
              className="new-hospital-room-amico-icon"
              alt=""
              src="/hospital-roomamico@2x.png"
            />
              
            <div className="new-other-floors-details-parent">
             
            
              {floorDetails.map((floor, index) => (
                <div key={index} className="new-floor-detail">
                  <div className="new-floor-title">
                  <b>Floor {floor.floorNumber}</b>
                  </div>
                  <div className="inner-p">
                    <div className="new-report-section">
                      <div className="new-label">Total floor area (sq ft) : </div>
                      <div className="new-value">{floor.floorArea}</div>
                    </div>
                    <div className="new-report-section">
                      <div className="new-label">Total area of private rooms (sq ft) : </div>
                      <div className="new-value">{floor.totalAreaPrivateRooms}</div>
                    </div>
                    <div className="new-report-section">
                      <div className="new-label">Number of beds in private rooms : </div>
                      <div className="new-value">{floor.numBedsPrivate}</div>
                    </div>
                    <div className="new-report-section">
                      <div className="new-label">Total area of semi-private rooms (sq ft) : </div>
                      <div className="new-value">{floor.totalAreaSemiPrivateRooms}</div>
                    </div>
                    <div className="new-report-section">
                      <div className="new-label">Number of beds in semi-private rooms : </div>
                      <div className="new-value">{floor.numBedsSemiPrivate}</div>
                    </div>
                    <div className="new-report-section">
                      <div className="new-label">Circulation area (sq ft) : </div>
                      <div className="new-value">{floor.circulationArea}</div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className="new-additional-info-parent">
              <div className="new-additional-info">
                <b>Last Floor</b>
              </div>
              <div className="inner-p">
                <div className="new-report-section">
                  <div className="new-label">ICU total area (sq ft) : </div>
                  <div className="new-value">{additionalInfo.icu.totalArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">ICU total beds : </div>
                  <div className="new-value">{additionalInfo.icu.totalBeds}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Isolation total area (sq ft) : </div>
                  <div className="new-value">{additionalInfo.isolation.totalArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Isolation total beds : </div>
                  <div className="new-value">{additionalInfo.isolation.totalBeds}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Nursing station area (sq ft) : </div>
                  <div className="new-value">{additionalInfo.nursingStation}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Circulation area (sq ft) :</div>
                  <div className="new-value">{additionalInfo.circulation}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Miscellaneous area (sq ft) :</div>
                  <div className="new-value">{additionalInfo.miscellaneous}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Semi-ICU total area (sq ft) :</div>
                  <div className="new-value">{additionalInfo.semiIcu.totalArea}</div>
                </div>
                <div className="new-report-section">
                  <div className="new-label">Semi-ICU total beds :</div>
                  <div className="new-value">{additionalInfo.semiIcu.totalBeds}</div>
                </div>
                <div className="new-thank-you-for-container">
                  <p className="new-thank-you-for">
                    Thank you for entrusting CEVAH with your facility planning needs.
                    Together, we'll shape a future where patient care is elevated,
                    compassion is paramount,
                  </p>
                  <p className="new-thank-you-for">
                    and healthcare standards are redefined. Your dedication to improving healthcare inspires us,
                    and we are honored to be your partner in this important journey.
                  </p>
                  <p className="new-thank-you-for">
                    With warmest regards, <br />
                    The CEVAH Team
                  </p>
                </div>
                <GroupComponent/>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="footer5">
        <div className="cevah-parent3">
          <b className="cevah10">CEVAH</b>
          <div className="frame-child10" />
          <div className="frame-child11" />
        </div>
        <div className="lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        <img className="social-icons15" alt="" src="/vector.svg" />
        <img className="social-icons16" alt="" src="/social-icons.svg" />
        <img className="social-icons17" alt="" src="/social-icons1.svg" />
        <div className="contact-us5">Contact Us</div>
        <div className="support5">Support</div>
        <div className="hellocevahgmailcom-parent3">
          <div className="hellocevahgmailcom5">hellocevah@gmail.com</div>
          <img className="envelope-icon5" alt="" src="/envelope.svg" />
        </div>
        <div className="terms-of-use5">Terms of Use</div>
        <div className="privacy-policy5">Privacy Policy</div>
        <div className="parent7">
          <div className="div11">+919922883377</div>
          <img className="vector-icon14" alt="" src="/vector5.svg" />
        </div>
        <div className="faqs5">FAQs</div>
      </div>
      <div className="header4">
        <div className="content8">
          <div className="logo5" onClick={onLogoContainerClick}>
            <div className="icon5">
              <div className="icon-child8" />
              <div className="icon-child9" />
            </div>
            <b className="cevah11">CEVAH</b>
          </div>
          <div className="navigation5" />
        </div>
        
        <button className="login7" onClick={onLogout}>
          <div className="sign-in2">Sign Out</div>
        </button>      
        </div>
    </div >
  );
};

export default Report;
