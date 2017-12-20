import React, { Component } from "react";
import router from "../../router";
import SideNav from "../SideNav/SideNav";

import AddGoal from "../AddGoal/AddGoal";

import "../../styles/css/styles.css";
class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <AddGoal />
        {router}
      </div>
    );
  }
}

export default App;
