import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//MATERIAL UI
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import FlatButton from "material-ui/FlatButton";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: ""
    };
    this.Login = this.Login.bind(this);
  }

  componentDidMount() {
    axios.get("/api/userInfo").then(response => {
      this.setState({
        name:
          "Welcome, " +
          response.data[0].first_name +
          " " +
          response.data[0].last_name
      });
    });
  }

  Login() {
    window.location.href = "http://localhost:3001/api/fitbit/login";
  }

  logout() {
    axios.get("/api/logout").then(response => response.data);
    window.location.href = "/";
  }

  handleClose = () => this.setState({ open: false });

  render() {
    const styles = {
      backgroundColor: "transparent",
      color: "white"
    };
    const rightButtons = (
      <div>
        {this.state.name === "" ? (
          <FlatButton
          // label="Login"
          // onClick={() => {
          //   this.Login();
          // }}
          // style={styles}
          //the button is hidden unless user is logged in, then logout button is shown on the navbar
          />
        ) : (
          <div>
            <FlatButton label="Log Out" onClick={this.logout} style={styles} />
          </div>
        )}
      </div>
    );
    return (
      <div>
        {this.state.name === "" ? (
          <AppBar />
        ) : (
          <div>
            <AppBar
              title={this.state.name}
              onLeftIconButtonClick={() =>
                this.setState(
                  // iconClassNameRight="muidocs-icon-navigation-expand-more"
                  { open: !this.state.open }
                )
              }
              iconElementRight={rightButtons}
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <div className="SideNavlogo">Fittr</div>

              <Link to="/create-profile">
                <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
              </Link>
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
        )}
      </div>
    );
  }
}

export default SideNav;
