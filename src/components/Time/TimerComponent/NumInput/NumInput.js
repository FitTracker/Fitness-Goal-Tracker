import React, { Component } from "react";

class NumInput extends Component {
  pressOne = () => {
    console.log(`Pressed One`);
  };
  render() {
    return (
      <div className="NumInput">
        <div className="top" />
        <div className="keys">
          <button onClick={this.pressOne}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="empty-button" />
          <button>0</button>
          <button className="delete">X</button>
        </div>
      </div>
    );
  }
}

export default NumInput;
