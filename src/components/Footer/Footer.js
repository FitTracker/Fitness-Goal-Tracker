import React from "react";

const Footer = () => (
  <div>
    <hr />
    <div>
      <div className="footer-container">
        <div>
          <h1 className="footer-title"> Fittr </h1>
          <p>© 2018 Fittr</p>
        </div>

        <div>
          <p className="footer-title"> About </p>
          <div className="about-container">
            <div>About</div>
            <div>Features</div>
            <div>Mobile</div>
            <div>Premium</div>
            <div>Terms and Conditions</div>
            <div>About Our Maps</div>
          </div>
        </div>
        <div>
          <p className="footer-title"> Follow </p>
          <div className="follow-container">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
            <div>Premium</div>
          </div>
        </div>
        <div>
          <p className="footer-title"> Help </p>
          <div className="help-container">
            <div>Fittr Support</div>
          </div>
        </div>
        <div>
          <p className="footer-title"> More </p>
          <div className="help-container">
            <div>Local</div>
            <div>Careers</div>
            <div>Developers</div>
            <div>Premium</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
