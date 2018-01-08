import React, { Component } from "react";
import router from "../../router";
import SideNav from "../SideNav/SideNav";
import Footer from "../Footer/Footer";

import "../../styles/css/styles.css";
class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
