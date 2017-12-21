import React, { Component } from "react";
import { connect } from "react-redux";

import { handleUpvote } from "../../ducks/reducer";

import { Card, CardHeader, CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";

class FriendCard extends Component {
  render() {
    const { title, count, avatar, handleUpvote, id } = this.props;
    return (
      <div className="card-container">
        <Card>
          <CardHeader title={title} avatar={avatar} />
          <CardActions>
            <IconButton
              iconClassName="fa fa-hand-o-up"
              onClick={() => this.props.handleUpvote(id)}
            />
            <span> {`${count} upvotes`} </span>
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { handleUpvote })(FriendCard);
