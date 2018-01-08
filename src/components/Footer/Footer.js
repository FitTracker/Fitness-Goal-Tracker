import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="footer-container">
            <div>
              <h1 className="footer-logo">
                <Link to="/dashboard"> Fittr </Link>
              </h1>
              <p className="copyright">© 2018 Fittr</p>
            </div>

            <div>
              <p className="footer-title">About</p>
              <div className="about-container">
                <div>
                  <Link to="/about">About</Link>
                </div>
                <div>
                  <Link to="/mobile">Mobile</Link>
                </div>
                <div>
                  <Link to="/timer">Timer</Link>
                </div>
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
                <div>
                  <a href="mailto:fittracker1@gmail.com">Fittr Support</a>
                </div>
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
  }
}

export default Footer;
