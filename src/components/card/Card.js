import React, { Component } from "react";
import "../../app.scss";
import "./card.scss";

class Card extends Component {
  render() {
    return (
      <div className="column base-card card">
        {this.props.children}
      </div>
    );
  }
}

export default Card;
