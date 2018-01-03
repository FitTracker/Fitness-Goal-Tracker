import React, { Component } from "react";
import { connect } from "react-redux";
import { handleFollow, handleUnfollow } from "../../ducks/reducer";

import { Card, CardHeader } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import Dialog from "material-ui/Dialog/Dialog";
import TextField from "material-ui/TextField";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ profileOpen: !this.state.profileOpen });
  }

  render() {
    const {
      title,
      avatar,
      firstName,
      lastName,
      city,
      state,
      userID,
      following
    } = this.props;
    const actions = [
      <FlatButton
        id="close-prof"
        label="close"
        primary={false}
        keyboardFocused={false}
        onClick={this.handleToggle}
        style={{ marginRight: "1%" }}
      />,
      <FlatButton
        id="follow-button"
        label={following ? "Unfollow" : "Follow"}
        primary={true}
        keyboardFocused={true}
        onClick={() => {
          following
            ? this.props.handleUnfollow(userID)
            : this.props.handleFollow(userID);
        }}
      />
    ];

    return (
      <div className="card-container">
        <Card>
          <div className="friend-card-header" onClick={this.handleToggle}>
            <CardHeader
              title={title}
              avatar={avatar}
              style={{ paddingBottom: 0 }}
            />
          </div>
        </Card>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.profileOpen}
          onRequestClose={this.handleToggle}
          actionsContainerStyle={{ textAlign: "center" }}
        >
          <div>
            <Card className="friend-profile">
              <div className="profile-top">
                <img className="profile-pic" src={avatar} alt="avatar" />
              </div>
              <form>
                <div className="profile-mid">
                  <TextField
                    className="profile-input profile-name"
                    value={firstName}
                    floatingLabelText="First Name"
                    floatingLabelFixed={true}
                    disabled={false}
                    style={{ color: "black" }}
                  />
                  <TextField
                    className="profile-input profile-lastName"
                    value={lastName}
                    floatingLabelText="Last Name"
                    floatingLabelFixed={true}
                    disabled={false}
                  />
                  <TextField
                    className="profile-input profile-city"
                    value={city}
                    floatingLabelText="City"
                    floatingLabelFixed={true}
                    disabled={false}
                  />
                  <TextField
                    className="profile-input profile-state"
                    value={state}
                    floatingLabelText="State"
                    floatingLabelFixed={true}
                    disabled={false}
                  />
                </div>
              </form>
            </Card>
          </div>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { handleFollow, handleUnfollow })(
  FriendCard
);
