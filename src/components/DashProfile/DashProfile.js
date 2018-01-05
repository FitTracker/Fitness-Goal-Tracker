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
      <Card style={{ width: "100%", marginBottom: "5%" }}>
        <div className="profile-dash-info">
          <img
            className="profile-dash-pic"
            alt="avatar"
            src={this.state.avatarURL}
            style={{}}
          />
          <div className="profile-dash-name">
            <p>{`${this.state.firstName} ${this.state.lastName}`}</p>
          </div>
          <div className="profile-dash-following">
            <span className="pipe"> |</span>
            <p>{`Followers: ${this.state.followers}`} </p>
            <span className="pipe">|</span>
            <p>{`Following: ${this.state.following}`}</p>
            <span className="pipe">|</span>
          </div>
        </div>
      </Card>
    );
  }
}

export default DashProfile;
