import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    <hr />
    <div>
      <div className="footer-container">
        <div>
          <h1 className="footer-logo"> Fittr </h1>
          <p className="copyright">© 2018 Fittr</p>
        </div>

        <div>
          <p className="footer-title"> About </p>
          <div className="about-container">
            <div>About</div>
            <div>Features</div>
            <div>Mobile</div>
          </div>
        </div>
        <div>
          <p className="footer-title"> Follow </p>
          <div className="follow-container">
            <div>
              <a href="https://twitter.com/Fittr9" target="_blank">
                Twitter
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/fittr9/" target="_blank">
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCAo8xnkNl2cQOo3gwt3scAw/featured"
                target="_blank"
              >
                YouTube
              </a>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
