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

  // State variables to store input values
  const [numberOfFloors, setNumberOfFloors] = useState('');
  const [floorDetails, setFloorDetails] = useState([]);

  const [siteInfo, setSiteInfo] = useState({
    sqFt: '35000',
    carpetArea: '',
    heightRestriction: '',
    totalBuiltUpArea: '28700',
    fsi: '3.5',
    fsiHeight: 'XX'
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

  // Fetch data from the API and update the state variables
  useEffect(() => {
    fetch('https://clownfish-app-kymio.ondigitalocean.app/calculate')
      .then(response => response.json())
      .then(data => {
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
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
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

  const handleSiteInfoChange = (field, value) => {
    setSiteInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleGFloorInfoChange = (field, value) => {
    setGFloorInfo(prev => ({ ...prev, [field]: value }));
  };

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
                  <div className="label-input-container">
                    <label htmlFor="sqFt">Area (sq. ft):</label>
                    <input
                      type="text"
                      id="sqFt"
                      value={siteInfo.sqFt}
                      onChange={(e) => handleSiteInfoChange('sqFt', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="numberOfFloors">Number of Floors:</label>
                    <input
                      type="text"
                      id="numberOfFloors"
                      value={numberOfFloors}
                      onChange={handleNumberOfFloorsChange}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="carpetArea">Carpet Area:</label>
                    <input
                      type="text"
                      id="carpetArea"
                      value={siteInfo.carpetArea}
                      onChange={(e) => handleSiteInfoChange('carpetArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="heightRestriction">Height Restriction:</label>
                    <input
                      type="text"
                      id="heightRestriction"
                      value={siteInfo.heightRestriction}
                      onChange={(e) => handleSiteInfoChange('heightRestriction', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="totalBuiltUpArea">Total Built Up Area:</label>
                    <input
                      type="text"
                      id="totalBuiltUpArea"
                      value={siteInfo.totalBuiltUpArea}
                      onChange={(e) => handleSiteInfoChange('totalBuiltUpArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="fsi">FSI (Floor Space Index):</label>
                    <input
                      type="text"
                      id="fsi"
                      value={siteInfo.fsi}
                      onChange={(e) => handleSiteInfoChange('fsi', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="fsiHeight">FSI Height:</label>
                    <input
                      type="text"
                      id="fsiHeight"
                      value={siteInfo.fsiHeight}
                      onChange={(e) => handleSiteInfoChange('fsiHeight', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="new-rectangle-group">
              <div className="new-group-item" />
              <div className="new-ground-floor-information-parent">
                <b className="new-ground-floor-information">
                  Ground Floor Information
                </b>
                <div className="new-opd-area-parent">
                  <div className="label-input-container">
                    <label htmlFor="opdArea">OPD Area:</label>
                    <input
                      type="text"
                      id="opdArea"
                      value={gFloorInfo.opdArea}
                      onChange={(e) => handleGFloorInfoChange('opdArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="diagnosticArea">Diagnostic Area:</label>
                    <input
                      type="text"
                      id="diagnosticArea"
                      value={gFloorInfo.diagnosticArea}
                      onChange={(e) => handleGFloorInfoChange('diagnosticArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="circulationArea">Circulation Area:</label>
                    <input
                      type="text"
                      id="circulationArea"
                      value={gFloorInfo.circulationArea}
                      onChange={(e) => handleGFloorInfoChange('circulationArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="pharmacyArea">Pharmacy Area:</label>
                    <input
                      type="text"
                      id="pharmacyArea"
                      value={gFloorInfo.pharmacyArea}
                      onChange={(e) => handleGFloorInfoChange('pharmacyArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="receptionArea">Reception Area:</label>
                    <input
                      type="text"
                      id="receptionArea"
                      value={gFloorInfo.receptionArea}
                      onChange={(e) => handleGFloorInfoChange('receptionArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="totalGroundFloorArea">Total Ground Floor Area:</label>
                    <input
                      type="text"
                      id="totalGroundFloorArea"
                      value={gFloorInfo.totalGroundFloorArea}
                      onChange={(e) => handleGFloorInfoChange('totalGroundFloorArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                  <div className="label-input-container">
                    <label htmlFor="casualtyArea">Casualty Area:</label>
                    <input
                      type="text"
                      id="casualtyArea"
                      value={gFloorInfo.casualtyArea}
                      onChange={(e) => handleGFloorInfoChange('casualtyArea', e.target.value)}
                      className="input-box"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="new-rectangle-container">
              <div className="new-group-inner" />
              <div className="new-floor-information-parent">
                <b className="new-floor-information">Floor Information</b>
                {floorDetails.map((floor, index) => (
                  <div key={index} className="new-opd-area-parent">
                    <div className="label-input-container">
                      <label htmlFor={`floorArea${index + 1}`}>Floor {floor.floorNumber} Area:</label>
                      <input
                        type="text"
                        id={`floorArea${index + 1}`}
                        value={floor.floorArea}
                        onChange={(e) => handleFloorDetailChange(index, 'floorArea', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`floorRestriction${index + 1}`}>Floor Restriction:</label>
                      <input
                        type="text"
                        id={`floorRestriction${index + 1}`}
                        value={floor.floorRestriction}
                        onChange={(e) => handleFloorDetailChange(index, 'floorRestriction', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`totalFloorArea${index + 1}`}>Total Floor Area:</label>
                      <input
                        type="text"
                        id={`totalFloorArea${index + 1}`}
                        value={floor.totalFloorArea}
                        onChange={(e) => handleFloorDetailChange(index, 'totalFloorArea', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`totalAreaPrivateRooms${index + 1}`}>Total Area of Private Rooms:</label>
                      <input
                        type="text"
                        id={`totalAreaPrivateRooms${index + 1}`}
                        value={floor.totalAreaPrivateRooms}
                        onChange={(e) => handleFloorDetailChange(index, 'totalAreaPrivateRooms', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`numBedsPrivate${index + 1}`}>Number of Beds in Private Rooms:</label>
                      <input
                        type="text"
                        id={`numBedsPrivate${index + 1}`}
                        value={floor.numBedsPrivate}
                        onChange={(e) => handleFloorDetailChange(index, 'numBedsPrivate', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`totalAreaSemiPrivateRooms${index + 1}`}>Total Area of Semi-Private Rooms:</label>
                      <input
                        type="text"
                        id={`totalAreaSemiPrivateRooms${index + 1}`}
                        value={floor.totalAreaSemiPrivateRooms}
                        onChange={(e) => handleFloorDetailChange(index, 'totalAreaSemiPrivateRooms', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`numBedsSemiPrivate${index + 1}`}>Number of Beds in Semi-Private Rooms:</label>
                      <input
                        type="text"
                        id={`numBedsSemiPrivate${index + 1}`}
                        value={floor.numBedsSemiPrivate}
                        onChange={(e) => handleFloorDetailChange(index, 'numBedsSemiPrivate', e.target.value)}
                        className="input-box"
                      />
                    </div>
                    <div className="label-input-container">
                      <label htmlFor={`circulationArea${index + 1}`}>Circulation Area:</label>
                      <input
                        type="text"
                        id={`circulationArea${index + 1}`}
                        value={floor.circulationArea}
                        onChange={(e) => handleFloorDetailChange(index, 'circulationArea', e.target.value)}
                        className="input-box"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Header />
    </div>
  );
};

export default Report;
