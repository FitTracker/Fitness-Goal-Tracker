import React from "react";

const About = () => (
  <div>
    <div className="about-container">
      <div className="about-top-row">
        <div className="about-left-col">
          <h1> About Us </h1>
          <div className="about-description">
            <p>
              Fittr.us is your destination for tracking your fitness goals and
              connecting with friends. Have fun getting in shape with Fittr!
            </p>
          </div>
          <div className="about-description">
            <p>
              Fittr.us imports your Fitbit data, displaying graphs to make it
              easier for you to visualize your progress. Also, enjoy a social
              experience with the friends system which allows you to follow and
              upvote the progress of friends. Lastly, Fittr.us has a built in
              timer and stopwatch for keeping track of times during workouts.
            </p>
          </div>
          <div>
            <p>Follow Us</p>
          </div>
        </div>
        <div className="about-right-col">
          <iframe
            width="750"
            height="380"
            src="https://www.youtube.com/embed/uLY1PNutVWI?rel=0&amp;controls=0&amp;showinfo=0"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
      <div className="about-second-row">
        <div className="contact-container">
          <div className="contact-col">
            <h1> Contact Fittr </h1>
          </div>
          <div className="headquarters-col">
            <p>
              Questions:
              <a href="mailto:fittrackerapp1@gmail.com">
                &nbsp; fittrackerapp1@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p>
              Issues:
              <a href="https://github.com/FitTracker/Fitness-Goal-Tracker/issues">
                &nbsp; Submit Issue on GitHub
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="about-map">
            <a
              href="https://www.google.com/maps/place/DevMountain+%7C+Dallas/@32.777546,-96.7979697,17z/data=!3m1!4b1!4m5!3m4!1s0x864e992200285d3b:0xd33e5192aa05ee73!8m2!3d32.777546!4d-96.795781?hl=en"
              target="_blank"
            >
              <img src="https://lh3.googleusercontent.com/HAmJZvUDjBNsb-JZSNpXF74Vr2xUNE4xbufk3SfAS_33IUe2gLVmwk_AO9rEZ4FhRL-3Ko89REJXr7lkPFM7P-4QpEN2-XYNBf2QThwKaCMMXeiH8GyYinqdF8I5v38QwYuFhGCY9I3bYJSY3uLCfqA17V7LIl0s9-AHe84OHTdl_sLE3pAV7j7PUFNFYQD8YnJrxscshC5884RWs8UsDEhinJynYkK8CJWxK4Mzw5nC7GTLEmKmQhiGBTbuvPda8EIDWB7WsTcLTSWMeuYr0GLV8Zbw6h-wTw5i6JysEALwW-5c7h2j3zA7MSnYOQGQtIXS5xFX9oAz3SLLb8OHzSA71OPg14CKGNLv6--Gc7bXmM3JCGsKPgO_9W0PrYXjCTftWayjJCFwUtl0cYduEis2soooDb00evICz2PeqNw734VlU-b8u2A-r6PcNkBru2XXc2OOXwswYFpXm3SeSBGPIhO1Hlmk4ZFGzH_8Eyua4x4giyiEhHid2gRGdJzOP018Gjks0zQ-mHjRsnAPIBTV8IBFTQvmwE95iwk-zDJ0hGKw8xJAVDRUVQ4yzUM8o8CiGBAYtvrcVm4Jvn0kTHxicV0iZ8_9kmMao7L6=w500-h300-no" />
            </a>
          </div>
          <p className="map-title">Fittr Headquarters</p>
          <p>500 S Ervay St #101, Dallas, TX 75201</p>
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
  </div>
);

export default About;
