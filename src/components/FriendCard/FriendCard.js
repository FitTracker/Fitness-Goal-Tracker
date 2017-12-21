import React, { Component } from "react";

import { Card, CardHeader, CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";

class FriendCard extends Component {
  render() {
    const { title, count, avatar } = this.props;
    return (
      <div className="card-container">
        <Card>
          <CardHeader title={title} avatar={avatar} />
          <CardActions>
            <IconButton iconClassName="fa fa-hand-o-up" />
            <span> {`${count} upvotes`} </span>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default FriendCard;
