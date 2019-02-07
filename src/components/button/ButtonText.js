import React, { Component } from "react";
import "../../app.scss";
import "./button.scss";

class ButtonText extends Component {
  render() {
    return (
      <div className="button-text">{this.props.text}</div>
    );
  }
}

export default ButtonText;
