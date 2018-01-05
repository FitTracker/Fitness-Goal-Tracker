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
    this.handleClose = this.handleClose.bind(this);
    this.logout = this.logout.bind(this);
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

  handleClose() {
    this.setState({ open: false });
  }

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
          <AppBar style={{ display: "none" }} />
        ) : (
          <div>
            <AppBar
              style={{
                backgroundColor: "#2d728f",
                fontFamily: '"Open Sans", sans-serif'
              }}
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
              className="drawer"
              containerStyle={{ backgroundColor: "#2d728f", padding: "20px" }}
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <div className="SideNavLogo">
                <img
                  src={require("../../Images/F.png")}
                  alt="logo"
                  style={{ height: "85px", width: "85px", borderRadius: "50%" }}
                />
                <div className="SideNavLogoText">ittr</div>
              </div>
              <div className="SideNavLinks">
                <Link to="/create-profile">
                  <MenuItem
                    style={{
                      color: "#f7f7ff",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: "20px"
                    }}
                    onTouchTap={this.handleClose}
                  >
                    Profile
                  </MenuItem>
                </Link>
                <Link to="/dashboard">
                  <MenuItem
                    style={{
                      color: "#f7f7ff",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: "20px"
                    }}
                    onTouchTap={this.handleClose}
                  >
                    Dashboard
                  </MenuItem>
                </Link>
                <Link to="/Timer">
                  <MenuItem
                    style={{
                      color: "#f7f7ff",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: "20px"
                    }}
                    onTouchTap={this.handleClose}
                  >
                    Timer
                  </MenuItem>
                </Link>
              </div>
            </Drawer>
          </div>
        )}
      </div>
    );
  }
}

export default SideNav;
