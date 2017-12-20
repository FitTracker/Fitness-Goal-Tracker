import React, { Component } from "react";

//MATERIAL UI

import TextField from "material-ui/TextField";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
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
      state: "",
      email: "",
      avatarURL: ""
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEmail = this.handleFirstName.bind(this);
    this.handleAvatarURL = this.handleAvatarURL.bind(this);
  }

  handleFirstName(name) {
    this.setState({ firstName: name });

    console.log(this.state.firstName);
  }

  handleLastName(name) {
    this.setState({ lastName: name });
  }
  handleCity(city) {
    this.setState({ city: city });
  }
  handleState(state) {
    this.setState({ state: state });
  }

  handleEmail(email) {
    this.setState({ email: email });
  }
  handleAvatarURL(url) {
    this.setState({ avatarURL: url });
  }

  render() {
    return (
      <div className="profile-view">
        <Card className="profile-wrapper">
          <div className="profile-top">
            <img
              className="profile-pic"
              src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy.png?v=1485573423"
            />
          </div>
          <div className="profile-mid">
            <TextField
              onChange={e => this.handleFirstName(e.target.value)}
              className="profile-input profile-name"
              hintText="First Name"
            />
            <TextField
              onChange={e => this.handleLastName(e.target.value)}
              className="profile-input profile-lastName"
              hintText="Last Name"
            />

            <TextField
              onChange={e => this.handleCity(e.target.value)}
              className="profile-input profile-city"
              hintText="City"
            />
            <TextField
              onChange={e => this.handleState(e.target.value)}
              className="profile-input profile-state"
              hintText="State"
            />
            <TextField
              onChange={e => this.handleEmail(e.target.value)}
              className="profile-input profile-email"
              hintText="Email"
            />

            <TextField
              onChange={e => this.handleAvatarURL(e.target.value)}
              className="profile-input profile-avatar"
              hintText="Avatar URL"
            />
          </div>

          <div className="profile-buttons">
            <RaisedButton label="EDIT" primary={true} style={style} />
            <RaisedButton label="SAVE" primary={true} style={style} />
          </div>
        </Card>
      </div>
    );
  }
}

export default AddProfile;
