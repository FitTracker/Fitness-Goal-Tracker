import React, { Component } from "react";
import { connect } from "react-redux";

import { handleUpvote } from "../../ducks/reducer";

import { Card, CardHeader, CardActions } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import Dialog from "material-ui/Dialog/Dialog";
import TextField from "material-ui/TextField";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileOpen: false
    };
  }

  handleToggle = () => this.setState({ profileOpen: !this.state.profileOpen });

  render() {
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
        id="goal-submit"
        label="Unfollow"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];

    const {
      title,
      count,
      avatar,
      handleUpvote,
      id,
      firstName,
      lastName,
      city,
      state
    } = this.props;
    return <div className="card-container" onClick={this.handleToggle}>
        <Card>
          <div className="friend-card-header">
            <CardHeader title={title} avatar={avatar} style={{ paddingBottom: 0 }} />
          </div>
          <CardActions style={{ paddingTop: 0 }}>
            <IconButton iconClassName="fa fa-hand-o-up" onClick={() => this.props.handleUpvote(id)} />
            <span> {`${count} upvotes`} </span>
          </CardActions>
        </Card>
        <Dialog actions={actions} modal={false} open={this.state.profileOpen} onRequestClose={this.handleToggle} actionsContainerStyle={{textAlign: 'center'}} >
          <div>
            <Card className="friend-profile">
              <div className="profile-top">
                <img className="profile-pic" src={avatar} />
              </div>
              <form>
                <div className="profile-mid">
                  <TextField className="profile-input profile-name" value={firstName} floatingLabelText="First Name" floatingLabelFixed={true} disabled={false} style={{ color: "black" }} />
                  <TextField className="profile-input profile-lastName" value={lastName} floatingLabelText="Last Name" floatingLabelFixed={true} disabled={false} />
                  <TextField className="profile-input profile-city" value={city} floatingLabelText="City" floatingLabelFixed={true} disabled={false} />
                  <TextField className="profile-input profile-state" value={state} floatingLabelText="State" floatingLabelFixed={true} disabled={false} />
                </div>
              </form>
            </Card>
          </div>
        </Dialog>
      </div>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { handleUpvote })(FriendCard);
