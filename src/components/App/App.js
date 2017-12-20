import React, { Component } from "react";
import router from "../../router";
import SideNav from "../SideNav/SideNav";

import "../../styles/css/styles.css";
class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        {router}
      </div>
    );
  }
}

export default App;
