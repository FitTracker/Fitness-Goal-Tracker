import React, { Component } from "react";
import { Link } from "react-router-dom";

//MATERIAL UI
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import injectTapEventPlugin from "react-tap-event-plugin";
import FlatButton from "material-ui/FlatButton";

injectTapEventPlugin();

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.Login = this.Login.bind(this);
  }

  Login() {
    window.location.href = "http://localhost:3001/api/fitbit/login";
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="Hello, User."
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() =>
            this.setState({ open: !this.state.open })
          }
          iconElementRight={<FlatButton label="Login" onClick={this.Login} />}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <div className="SideNavlogo">Fittr</div>
          <Link to="/dashboard">
            <MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem>
          </Link>
          <Link to="/friends">
            <MenuItem onTouchTap={this.handleClose}>Friends</MenuItem>
          </Link>
          <Link to="/goals">
            <MenuItem onTouchTap={this.handleClose}>Goals</MenuItem>
          </Link>
          <Link to="/badges">
            <MenuItem onTouchTap={this.handleClose}>Badges</MenuItem>
          </Link>
          <Link to="/Timer">
            <MenuItem onTouchTap={this.handleClose}>Timer</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}
export default SideNav;
