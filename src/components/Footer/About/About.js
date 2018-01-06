import React from "react";

const About = () => (
  <div>
    <div className="about-top-row">
      <div className="about-left-col">
        <h1> About Us </h1>
        <div>
          <p>P1</p>
        </div>
        <div>
          <p>P2</p>
        </div>
        <div>
          <p>Follow Us</p>
        </div>
      </div>
      <div className="about-right-col">
        <h1> Video </h1>
      </div>
    </div>
    <div className="about-second-row">
      <div>
        <h1> Contact Fittr </h1>
      </div>
      <div>
        <h1> Headquarters Map</h1>
      </div>
    </div>
    <div className="about-third-row">
      <div>
        <h1> The Fittr Team </h1>
        <div className="team-row">
          <div>
            <a href="https://github.com/Ajaalexandra" target="_blank">
              <img
                src="https://avatars0.githubusercontent.com/u/29485146?s=400&v=4"
                alt="Aja Cederberg"
                height="250px"
                width="250px"
              />
            </a>
            <h2> Aja Cederberg</h2>
          </div>
          <div>
            <a href="https://github.com/MightyJoeW" target="_blank">
              <img
                src="https://avatars2.githubusercontent.com/u/24509848?s=460&v=4"
                alt="Joe Warren"
                height="250px"
                width="250px"
              />
            </a>
            <h2> Joe Warren</h2>
          </div>
          <div>
            <a href="https://github.com/mariohoyos92" target="_blank">
              <img
                src="https://avatars0.githubusercontent.com/u/29843005?s=460&v=4"
                alt="Mario Hoyos"
                height="250px"
                width="250px"
              />
            </a>
            <h2> Mario Hoyos</h2>
          </div>
          <div>
            <a href="https://github.com/sedate13" target="_blank">
              <img
                src="https://avatars1.githubusercontent.com/u/29126810?s=460&v=4"
                alt="Valentina Abramova"
                height="250px"
                width="250px"
              />
            </a>
            <h2> Valentina Abramova</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
