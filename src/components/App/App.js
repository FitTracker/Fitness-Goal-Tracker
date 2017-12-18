import React, { Component } from "react";
import Navbar from "../NavBar/Navbar";

import "../../styles/css/styles.css";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <header>
          <h1 className="App-header">Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
