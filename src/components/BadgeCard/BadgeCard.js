import React, { Component } from "react";

import { Card, CardHeader } from "material-ui/Card";

const styles = {
  backgroundColor: "grey"
};
class BadgeCard extends Component {
  render() {
    const { title, subtitle, avatar } = this.props;
    return (
      <div className="card-container">
        <Card>
          <CardHeader
            style={styles}
            title={title}
            subtitle={subtitle}
            avatar={avatar}
          />
        </Card>
      </div>
    );
  }
}

export default BadgeCard;
