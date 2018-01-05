import React, { Component } from "react";
import axios from "axios";

// MATERIAL UI
import { Card, CardHeader } from "material-ui/Card";

class DashProfile extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      firstName: "",
      lastName: "",
      avatarURL:
        "https://static0.fitbit.com/images/profile/defaultProfile_100_male.png",
      followers: 0,
      following: 0
    };
  }

  componentDidMount() {
    axios.get("/api/userInfo").then(response => {
      this.setState({
        firstName: response.data[0].first_name,
        lastName: response.data[0].last_name,
        avatarURL: response.data[0].avatar
      });
    });

    axios.get("/api/followers").then(response => {
      console.log(response);
      this.setState({
        followers: response.data[0].followers,
        following: response.data[0].following_count
      });
    });
  }

  render() {
    return (
      <div className="profile-dash-container">
        <Card>
          <div className="profile-dash-info">
            <h1>Profile</h1>
            <img
              className="profile-dash-pic"
              alt="avatar"
              src={this.state.avatarURL}
              style={{}}
            />
            <div className="profile-dash-name">
              <div>{this.state.firstName}</div>
              <div>{this.state.lastName}</div>
            </div>
            <div className="profile-dash-following">
              <div id="followers">Followers</div>
              <div>{this.state.followers}</div>
              <div id="following">Following</div>
              <div>{this.state.following}</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default DashProfile;
