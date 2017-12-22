import React, { Component } from "react";
import axios from "axios";

//MATERIAL UI

import TextField from "material-ui/TextField";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: 12
};

class AddProfile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      us_state: "",
      email: "",
      avatarURL:
        "https://static0.fitbit.com/images/profile/defaultProfile_100_male.png",
      editDisabled: true
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAvatarURL = this.handleAvatarURL.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/userInfo")
      .then(response => {
        this.setState({
          firstName: response.data[0].first_name,
          lastName: response.data[0].last_name,
          avatarURL: response.data[0].avatar
        });
      })
      .catch(console.log);
  }

  // METHODS

  handleFirstName(name) {
    this.setState({ firstName: name });
  }

  handleLastName(name) {
    this.setState({ lastName: name });
  }
  handleCity(city) {
    this.setState({ city });
  }
  handleState(us_state) {
    this.setState({ us_state });
  }

  handleEmail(email) {
    this.setState({ email });
  }
  handleAvatarURL(url) {
    this.setState({ avatarURL: url });
  }

  handleEditToggle() {
    this.setState({ editDisabled: false });
  }

  handleSaveButton(e) {
    e.preventDefault();

    const {
      firstName,
      lastName,
      city,
      us_state,
      email,
      avatarURL
    } = this.state;
    axios
      .put("/api/profileInfo", {
        firstName,
        lastName,
        city,
        us_state,
        email,
        avatarURL
      })
      .then(response => {
        this.setState({ editDisabled: true });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="profile-view">
        <Card className="profile-wrapper">
          <div className="profile-top">
            <img
              className="profile-pic"
              alt="avatar"
              src={this.state.avatarURL}
            />
          </div>
          <form onSubmit={this.handleSaveButton}>
            <div className="profile-mid">
              <TextField
                onChange={e => this.handleFirstName(e.target.value)}
                className="profile-input profile-name"
                value={this.state.firstName}
                floatingLabelText="First Name"
                hintText="First Name"
                disabled={this.state.editDisabled}
              />
              <TextField
                onChange={e => this.handleLastName(e.target.value)}
                className="profile-input profile-lastName"
                value={this.state.lastName}
                floatingLabelText="Last Name"
                hintText="Last Name"
                disabled={this.state.editDisabled}
              />

              <TextField
                onChange={e => this.handleCity(e.target.value)}
                className="profile-input profile-city"
                value={this.state.city}
                floatingLabelText="City"
                hintText="City"
                disabled={this.state.editDisabled}
              />
              <TextField
                onChange={e => this.handleState(e.target.value)}
                className="profile-input profile-state"
                value={this.state.us_state}
                floatingLabelText="State"
                hintText="State"
                disabled={this.state.editDisabled}
              />
              <TextField
                onChange={e => this.handleEmail(e.target.value)}
                className="profile-input profile-email"
                value={this.state.email}
                floatingLabelText="Email"
                hintText="Email"
                disabled={this.state.editDisabled}
              />

              <TextField
                onChange={e => this.handleAvatarURL(e.target.value)}
                className="profile-input profile-avatar"
                value={this.state.avatarURL}
                floatingLabelText="Avatar URL"
                hintText="Avatar URL"
                disabled={this.state.editDisabled}
              />
            </div>

            <div className="profile-buttons">
              <RaisedButton
                onClick={() => this.handleEditToggle()}
                label="EDIT"
                primary={true}
                style={style}
                disabled={!this.state.editDisabled}
              />
              <RaisedButton
                label="SAVE"
                primary={true}
                style={style}
                type="submit"
                disabled={this.state.editDisabled}
              />
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default AddProfile;
