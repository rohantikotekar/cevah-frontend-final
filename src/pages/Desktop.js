import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/desktop-83");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/desktop-83");
  }, [navigate]);

  return (
    <div className="desktop-82">
      <img className="group-icon" alt="" src="/group.svg" />
      <img className="group-icon1" alt="" src="/group1.svg" />
      <img className="group-icon2" alt="" src="/group2.svg" />
      <nav className="header-button" id="headerid">
        <div className="content">
          <div className="logo">
            <div className="icon">
              <div className="icon-child" />
              <div className="icon-item" />
            </div>
            <b className="cevah">CEVAAAHH</b>
          </div>
          <div className="navigation" />
        </div>
        <button
          className="login-button"
          id="signinid"
          onClick={onLoginButtonClick}
        >
          <div className="sign-in">Sign In</div>
        </button>
      </nav>
      <div className="footer-parent">
        <div className="footer">
          <div className="cevah-parent">
            <b className="cevah1">CEVAH</b>
            <div className="frame-child" />
            <div className="frame-item" />
          </div>
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
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
          <div className="hellocevahgmailcom-parent">
            <div className="hellocevahgmailcom">hellocevah@gmail.com</div>
            <img className="envelope-icon" alt="" src="/envelope.svg" />
          </div>
          <div className="terms-of-use">Terms of Use</div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="parent">
            <div className="div">+91 9922883377</div>
            <img className="vector-icon5" alt="" src="/vector5.svg" />
          </div>
          <div className="faqs">FAQs</div>
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
          <img className="group-icon3" alt="" src="/group3.svg" />
        </div>
        <div className="group-parent">
          <div className="what-our-do-our-clients-say-parent">
            <div className="what-our-do">What our do our clients say?</div>
            <div className="group-child" />
          </div>
          <div className="group-container">
            <div className="rectangle-group">
              <div className="group-item" />
              <div className="group-inner" />
              <div className="rectangle-div" />
              <div className="group-child1" />
              <div className="group-child2" />
              <div className="group-child3" />
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-lo-parent">
              <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</div>
              <div className="dr-xyz-abcd">Dr. XYZ ABCD</div>
            </div>
          </div>
        </div>
        <div className="why-choose-cevah-parent">
          <div className="why-choose-cevah">Why choose Cevah?</div>
          <div className="group-child4" />
          <b className="medical-masterplanning-at">
            Medical Masterplanning at your fingertips - Fast, Accessible and
            Personalized Solutions
          </b>
          <div className="group-div">
            <div className="group-wrapper">
              <div className="group-parent1">
                <div className="group">
                  <div className="div1">02</div>
                  <div className="our-online-tools">
                    {" "}
                    Our online tools provide tailored solutions to meet your
                    specific needs and vision, all at your fingertips.
                  </div>
                  <b className="tailored-solutions">Tailored Solutions</b>
                </div>
                <div className="container">
                  <div className="div1">03</div>
                  <div className="with-our-innovative">
                    With our innovative online masterplanning tools, unlock the
                    full potential of your healthcare practice from anywhere and
                    at anytime.
                  </div>
                  <b className="innovative-approach">Innovative Approach</b>
                </div>
                <div className="parent1">
                  <div className="div1">01</div>
                  <div className="receive-personalized-guidance">
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
        <div className="frame-child1" />
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
                Through our innovative online platform, clients can access
                expert assistance and customized solutions to create exceptional
                medical facilities.
              </div>
            </div>
          </div>
          <b className="medical-masterplanning-at1">
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
          <div className="rectangle-container">
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
          </div>
          <img
            className="docbusiness2-1-icon"
            alt=""
            src="/docbusiness2-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};



export default Desktop;
