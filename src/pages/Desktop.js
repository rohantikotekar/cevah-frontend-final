
import React, { useEffect } from 'react';

import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageSlider1 from './ImageSlider1';
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 758px)');
    
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        document.body.style.zoom = '27%';
      } else {
        document.body.style.zoom = '';
      }
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add listener
    mediaQuery.addListener(handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => {
      document.body.style.zoom = ''; // Reset zoom

      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="landing-page-full-scroll">
      <div className="footer-final">
        <div className="cevah-parent">
          <b className="cevah">CEVAH</b>
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
        <div className="at-cevah-our">
          At CEVAH, our mission is to empower medical professionals to create
          exceptional medical facilities that elevate patient care solutions.
        </div>
        <a
          className="social-icons"
          id="linkdinid"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <img className="vector-icon" alt="" src="/vector.svg" />
        </a>
        <a
          className="social-icons1"
          id="instagramid"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <img className="vector-icon" alt="" src="/vector1.svg" />
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </a>
        <a
          className="social-icons2"
          id="facebookid"
          href=" https://www.facebook.com/"
          target="_blank"
        >
          <img className="vector-icon4" alt="" src="/vector4.svg" />
        </a>
        <div className="contact-us">Contact Us</div>
        <div className="support">Support</div>
        <div className="terms-of-use">Terms of Use</div>
        <div className="privacy-policy">Privacy Policy</div>
        <div className="cevah9gmailcom-parent">
          <div className="cevah9gmailcom">cevah9@gmail.com</div>
          <img className="vector-icon5" alt="" src="/vector5.svg" />
        </div>
        <div className="parent">
          <div className="cevah9gmailcom">+919595833718</div>
          <img className="vector-icon6" alt="" src="/vector6.svg" />
        </div>
        {/* <div className="illustrations-from-storyset">
          *Illustrations from Storyset - https://storyset.com
        </div> */}
      </div>
      <div className="rectangle-parent">
        <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
        <img className="frame-inner" alt="" src="/group-36814.svg" />
        <div className="affordable-air-purifier-container">
          <p className="affordable-air-purifier">
            Affordable air purifier solutions
          </p>
          <p className="affordable-air-purifier">
            <span>{`Learn more at `}</span>
            <span className="awaercom">awaer.com</span>
          </p>
        </div>
        <b className="discover-simple-and">{`Discover simple and clean living `}</b>
        <img className="group-icon" alt="" src="/group.svg" />
      </div>
      <div className="group-parent">
        <div className="what-our-do-our-clients-say-parent">
          <div className="what-our-do-final">What our do our clients say?</div>
          <div className="group-child" />
        </div>

        <ImageSlider1 />

       
       
       
       
       
        {/* <div className="group-container">
          <div className="rectangle-group">
            <div className="group-item" />
            <div className="group-inner" />
            <div className="rectangle-div-final" />
            <div className="group-child1" />
            <div className="group-child2" />
            <div className="group-child3" />
          </div>
          
        </div> */}
     
      </div>
      <div className="why-choose-cevah-parent">
        <div className="why-choose-cevah">Why choose Cevah?</div>
        <div className="group-child4" />
        <b className="break-through-barriers">
          Break through barriers and create state of the art medical facilities
          tailored to your vision
        </b>
        <div className="group-div">
          <div className="group-wrapper">
            <div className="group-parent1">
              <div className="group">
                <div className="div2-final">02</div>
                <div className="our-online-tools">
                  {" "}
                  Our online tools provide tailored solutions to meet your
                  specific needs and vision, all at your fingertips.
                </div>
                <b className="tailored-solutions">Tailored Solutions</b>
              </div>
              <div className="landing-container">
                <div className="div3-final">03</div>
                <div className="with-our-innovative">
                  With our innovative online masterplanning tools, unlock the
                  full potential of your healthcare practice from anywhere and
                  at anytime.
                </div>
                <b className="innovative-approach-final">Innovative Approach</b>
              </div>
              <div className="parent1">
                <div className="div1-final">01</div>
                <div className="receive-personalized-guidance-final">
                  Receive personalized guidance through our intuitive online
                  platform, ensuring your facility exceeds expectations.
                </div>
                <b className="personalized-assistance">
                  Personalized Assistance
                </b>
              </div>
            </div>
          </div>
          <img className="docphone-icon" alt="" src="/docphone@2x.png" />
        </div>
      </div>
      <div className="landing-page-full-scroll-child" />
      <div className="group-parent2">
        <div className="what-does-cevah-do-parent">
          <div className="what-does-cevah">What does Cevah do?</div>
          <div className="group-child5" />
        </div>
        <div className="group-parent3">
          <div className="floor-plan-3-parent">
            <img
              className="floor-plan-3-icon"
              alt=""
              src="/floorplan3@2x.png"
            />
            <div className="empowering-medical-professiona">
              {" "}
              Empowering medical professionals to realize their healthcare
              vision by providing support and guidance to navigate the complex
              process of facility planning.
            </div>
          </div>
          <div className="empowering-3-1-parent">
            <img
              className="empowering-3-1-icon"
              alt=""
              src="/empowering3-1@2x.png"
            />
            <div className="we-offer-a">
              We offer a comprehensive masterplanning service tailored to
              optimize the design and layout of medical facilities.
            </div>
          </div>
          <div className="light-bulb-3-1-parent">
            <img
              className="empowering-3-1-icon"
              alt=""
              src="/lightbulb3-1@2x.png"
            />
            <div className="we-offer-a">
              Through our innovative online platform, clients can access expert
              assistance and customized solutions to create exceptional medical
              facilities.
            </div>
          </div>
        </div>
        <b className="medical-masterplanning-at">
          Medical Masterplanning at your fingertips - Fast, Accessible and
          Personalized Solutions
        </b>
        <div className="our-platform-provides-personal-wrapper">
          <div className="our-platform-provides">
            Our platform provides personalized guidance and tailored
            recommendations to meet the specific needs of each client.
          </div>
        </div>
      </div>
      <div className="blueprint-to-breakthrough-parent">
        <b className="blueprint-to-breakthrough">Blueprint to Breakthrough</b>
        <div className="turn-your-healthcare">
          Turn your healthcare vision into reality with Cevah’s masterplanning
          services—your blueprint for exceptional medical facilities.
        </div>
        <button className="rectangle-container" onClick={onGroupButtonClick}>
          <Button
            className="rectangle-button"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 188, height: 56 }}
            onClick={onRectangleButtonClick}
          />
          <div className="group-frame">
            <div className="get-started-parent">
              <b className="get-started">Get Started</b>
              <img
                className="arrowdownright-icon"
                alt=""
                src="/arrowdownright.svg"
              />
            </div>
          </div>
        </button>
        <img
          className="docbusiness2-1-icon"
          alt=""
          src="/docbusiness2-1@2x.png"
        />
      </div>
      <img className="userfocus-icon" alt="" src="/userfocus.svg" />
    </div>
    
  );
};



export default Desktop;
 