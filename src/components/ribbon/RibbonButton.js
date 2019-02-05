import React, { Component } from "react";
import "../../css/button.css";
import "./ribbon.css";


class RibbonButton extends Component {
  render() {
    return (
      <div className="ribbon-button">
        <p className="button-content">{this.props.name}</p>
      </div>
    );
  }
}

export default RibbonButton;
