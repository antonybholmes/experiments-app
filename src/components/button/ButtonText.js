import React, { Component } from "react";
import "../../app.scss";
import "./button.scss";

class ButtonText extends Component {
  render() {
    return (
      <div className="row row-vert-center button-text">{this.props.children}</div>
    );
  }
}

export default ButtonText;
