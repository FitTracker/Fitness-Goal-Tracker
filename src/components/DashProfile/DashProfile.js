import React, { Component } from "react";
import axios from "axios";

// MATERIAL UI
import { Card, CardHeader } from "material-ui/Card";

class DashProfile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      avatarURL:
        "https://static0.fitbit.com/images/profile/defaultProfile_100_male.png"
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
  }

  render() {
    return (
      <div className="profile-dash-container">
        <Card>
          <div className="profile-dash-info">
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
              <div id="following">Following</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default DashProfile;
