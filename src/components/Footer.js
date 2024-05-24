import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
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
        <img className="vector-icon" alt="" src="/vector-4.svg" />
      </a>
      <a
        className="social-icons1"
        id="instagramid"
        href="https://www.instagram.com/"
        target="_blank"
      >
        <img className="vector-icon" alt="" src="/vector-1.svg" />
        <img className="vector-icon2" alt="" src="/vector-2.svg" />
        <img className="vector-icon3" alt="" src="/vector-3.svg" />
      </a>
      <a
        className="social-icons2"
        id="facebookid"
        href=" https://www.facebook.com/"
        target="_blank"
      >
        <img className="vector-icon4" alt="" src="/vector.svg" />
      </a>
      <div className="contact-us1">Contact Us</div>
      <div className="support">Support</div>
      <div className="terms-of-use">Terms of Use</div>
      <div className="privacy-policy">Privacy Policy</div>
      <div className="cevah9gmailcom-parent">
        <div className="cevah9gmailcom">cevah9@gmail.com</div>
        <img className="vector-icon5" alt="" src="/vector-6.svg" />
      </div>
      <div className="container">
        <div className="cevah9gmailcom">+91 9595833718</div>
        <img className="vector-icon6" alt="" src="/vector-5.svg" />
      </div>
      <div className="illustrations-from-storyset">
        *Illustrations from Storyset - https://storyset.com
      </div>
    </div>
  );
};

export default Footer;
