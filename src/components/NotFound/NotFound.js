import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound-title">
        <p className="notFound-row1"> 404 </p>
        <p className="notFound-row2">Not Found</p>
        <img src="http://www.magic-emoji.com/emoji/images/1317_emoji_iphone_thinking_face.png" />
        <p className="notFound-row3">
          The page you are looking for doesn't exist.
          <Link className="notFound-link" to="/dashboard">
            &nbsp;Return to Dashboard
          </Link>.
        </p>
      </div>
    );
  }
}

export default NotFound;
