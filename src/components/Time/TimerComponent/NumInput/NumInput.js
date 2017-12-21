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
          <span onClick={this.pressOne}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="empty-button" />
          <span>0</span>
          <span className="delete">X</span>
        </div>
      </div>
    );
  }
}

export default NumInput;
