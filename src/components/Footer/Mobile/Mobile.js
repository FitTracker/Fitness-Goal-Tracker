import React from "react";

const Mobile = () => (
  <div>
    <div className="mobile-container">
      <div className="mobile-header">
        <img
          src={require("../../../Images/F.png")}
          alt="logo"
          style={{ height: "85px", width: "85px", borderRadius: "50%" }}
        />
      </div>
      <div className="mobile-title">
        <h1> Fittr Fit Tracker App </h1>
      </div>
      <div className="mobile-info">
        <h2>
          Fittr lets you track your Fitbit data, set goals, and follow friends.
        </h2>
      </div>
      <div className="mobile-downloads">
        <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/marketing/btn-app-store-8284cd459f7fae5456044b0401d3efbf.png" />
        <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/marketing/btn-google-play-e830b4b22189d76d2fc3d698efe1b58b.svg" />
      </div>
      <div className="mobile-gallery">
        <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/mobile/img-mobile-phones-7405e777e3dcda5f8b5a22f9cad12bff.jpg" />
      </div>
    </div>
    <div className="mobile-reviews">
      <div>
        <h3> Mighty Ent. </h3>
        <p>"I use this everyday!"</p>
      </div>
      <div>
        <h3> Dr. Mario's Office </h3>
        <p>"Great App. Better Team."</p>
      </div>
      <div>
        <h3> Aja's Gym </h3>
        <p>"Works great for our classes."</p>
      </div>
      <div>
        <h3> Val Magazine </h3>
        <p>"This makes keeping track of steps so easy."</p>
      </div>
      <div>
        <h3> Andy & Co. </h3>
        <p>"The beta wasn't enough... but this is great!"</p>
      </div>
    </div>
  </div>
);

export default Mobile;
