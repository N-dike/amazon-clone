import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <a onClick={handleClick}>
        <div className="footer-backToTop">
          <ExpandLessIcon className="footer-BackToTop-Text" />
        </div>
      </a>

      <div className="footer-verticalRow">
        <div className="footer-verticalCol">
          <div className="footer-verticalCol-Head">Get to Know Us</div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Amazon Cares</li>
            <li>Gift a smile</li>
          </ul>
        </div>
        <div className="footer-verticalCol">
          <div className="footer-verticalCol-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        </div>
        <div className="footer-verticalRow">
        <div className="footer-verticalCol">
          <div className="footer-verticalCol-Head">Make Money with Us</div>
          <ul>
            <li>Sell on fake Amazon</li>
            <li>Sell under fake Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
        <div className="footer-verticalCol">
          <div className="footer-verticalCol-Head">Connect with us</div>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
        </div>
     

      <hr />

      <div className="footer-line">
        <img
          className="footer-lineLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="Footer-lineMessage">
          fake amazon clone developed by &copy; Nnadike
        </span>
      </div>
    </div>
  );
}

export default Footer;
