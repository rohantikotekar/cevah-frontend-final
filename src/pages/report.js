import React, { useState, useCallback } from 'react';
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

  // State variables to store input values
  const [numberOfFloors, setNumberOfFloors] = useState('');
  const [floorDetails, setFloorDetails] = useState([]);

  // Handler for input changes
  const handleNumberOfFloorsChange = (e) => {
    const numFloors = parseInt(e.target.value) || '';
    setNumberOfFloors(numFloors);

    // Update the floor details array based on the number of floors with sequential floor numbers
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

  // Handlers for floor details changes
  const handleFloorDetailChange = (index, field, value) => {
    const updatedDetails = floorDetails.map((detail, i) =>
      i === index ? { ...detail, [field]: value } : detail
    );
    setFloorDetails(updatedDetails);
  };

  return (
    <div className="new-desktop-216">
      <div className="new-desktop-216-inner">
        <div className="new-thank-you-for-entrusting-cevah-parent">
          <div className="new-thank-you-for-container">
            <p className="new-thank-you-for">
              Thank you for entrusting CEVAH with your facility planning needs.
              Together, we'll shape a future where patient care is elevated,
              compassion is paramount, and medical facilities are designed to
              inspire healing and innovation.
            </p>
            <p className="new-thank-you-for">&nbsp;</p>
            <p className="new-thank-you-for">
              We are committed to supporting you every step of the way, from
              concept to completion, to ensure that your facility exceeds
              expectations and delivers exceptional patient care.
            </p>
            <p className="new-thank-you-for">&nbsp;</p>
            <p className="new-thank-you-for">
              <b>CEVAH Masterplanning Team</b>
            </p>
          </div>
          <GroupComponent />
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
            <div className="new-rectangle-parent">
              <div className="new-group-child" />
              <div className="new-site-information-parent">
                <b className="new-site-information">Site Information</b>
                <div className="new-sq-ft-parent">
                  <div className="new-sq-ft">35000 sq. ft.</div>
                  <div className="new-number-of-floors">Number of Floors :</div>
                  <div>
                    <input
                      type="text"
                      id="numberOfFloors"
                      value={numberOfFloors}
                      onChange={handleNumberOfFloorsChange}
                      className="input-box"
                    />
                  </div>
                  <div className="new-carpet-area">Carpet Area :</div>
                  <div className="new-height-restriction">Height Restriction:</div>
                  <div className="new-total-built-up">Total Built Up Area :</div>
                  <div className="new-div">3.5</div>
                  <div className="new-fsi-floor-space">
                    FSI (Floor Space Index) :
                  </div>
                  <div className="new-xx-meters">XX meters</div>
                  <div className="new-sq-ft1">28.700 sq. ft.</div>
                  <div className="new-div1">8</div>
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
            <div className="new-rectangle-group">
              <div className="new-group-item" />
              <div className="new-group-parent">
                <div className="new-floor-parent">
                  <b className="new-floor">Floor</b>
                  <div className="new-g-wrapper">
                    <b className="new-site-information">G</b>
                  </div>
                </div>
                <div className="new-opd-area-parent">
                  <div className="new-opd-area">OPD Area:</div>
                  <div className="new-sq-ft2">8968.75 sq. ft.</div>
                  <div className="new-diagnostic-area">Diagnostic Area:</div>
                  <div className="new-circulation-area">Circulation Area:</div>
                  <div className="new-sq-ft3">7175.0 sq. ft.</div>
                  <div className="new-pharmacy-area">Pharmacy Area:</div>
                  <div className="new-reception-area">Reception Area:</div>
                  <div className="new-total-ground-floor">
                    Total Ground Floor Area:
                  </div>
                  <div className="new-casualty-area">Casualty Area:</div>
                  <div className="new-sq-ft4">35875 sq. ft.</div>
                  <div className="new-sq-ft5">3587.5 sq. ft.</div>
                  <div className="new-sq-ft6">3587.5 sq. ft.</div>
                  <div className="new-sq-ft7">8968.75 sq. ft.</div>
                  <div className="new-sq-ft8">3587.5 sq. ft.</div>
                </div>
              </div>
            </div>
          </div>

          {floorDetails.map((floor, index) => (
            <div key={index} className="floor-details-container">
              <div className="floor-details">
                <div className="floor-details-header">
                  <b>Floor {floor.floorNumber}</b>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`floorArea-${index}`}>Floor Area (sq ft):</label>
                    <input
                      type="text"
                      id={`floorArea-${index}`}
                      value={floor.floorArea}
                      onChange={(e) => handleFloorDetailChange(index, 'floorArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`floorRestriction-${index}`}>Floor Restriction:</label>
                    <input
                      type="text"
                      id={`floorRestriction-${index}`}
                      value={floor.floorRestriction}
                      onChange={(e) => handleFloorDetailChange(index, 'floorRestriction', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`totalFloorArea-${index}`}>Total Floor Area (sq ft):</label>
                    <input
                      type="text"
                      id={`totalFloorArea-${index}`}
                      value={floor.totalFloorArea}
                      onChange={(e) => handleFloorDetailChange(index, 'totalFloorArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`totalAreaPrivateRooms-${index}`}>Total Area for Private Rooms (sq ft):</label>
                    <input
                      type="text"
                      id={`totalAreaPrivateRooms-${index}`}
                      value={floor.totalAreaPrivateRooms}
                      onChange={(e) => handleFloorDetailChange(index, 'totalAreaPrivateRooms', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`numBedsPrivate-${index}`}>Number of Beds (Private Rooms):</label>
                    <input
                      type="text"
                      id={`numBedsPrivate-${index}`}
                      value={floor.numBedsPrivate}
                      onChange={(e) => handleFloorDetailChange(index, 'numBedsPrivate', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`totalAreaSemiPrivateRooms-${index}`}>Total Area for Semi-Private Rooms (sq ft):</label>
                    <input
                      type="text"
                      id={`totalAreaSemiPrivateRooms-${index}`}
                      value={floor.totalAreaSemiPrivateRooms}
                      onChange={(e) => handleFloorDetailChange(index, 'totalAreaSemiPrivateRooms', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`numBedsSemiPrivate-${index}`}>Number of Beds (Semi-Private Rooms):</label>
                    <input
                      type="text"
                      id={`numBedsSemiPrivate-${index}`}
                      value={floor.numBedsSemiPrivate}
                      onChange={(e) => handleFloorDetailChange(index, 'numBedsSemiPrivate', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
                <div className="floor-detail-item">
                  <div className="label-input-container">
                    <label htmlFor={`circulationArea-${index}`}>Circulation Area (sq ft):</label>
                    <input
                      type="text"
                      id={`circulationArea-${index}`}
                      value={floor.circulationArea}
                      onChange={(e) => handleFloorDetailChange(index, 'circulationArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
          <div className="div11">+91 9922883377</div>
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
        <div className="login4">
          <div className="jd3">JD</div>
        </div>
        <img className="user-icon2" alt="" src="/user.svg" />
      </div>
    </div>
  );
};

export default Report;
