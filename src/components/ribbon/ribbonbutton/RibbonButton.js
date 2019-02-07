import React, { Component } from "react";
import ButtonText from "../../button/ButtonText"

import "../../../app.scss";
import "../../button/button.scss";
import "./ribbon-button.scss";

class RibbonButton extends Component {
  render() {
    return (
      <div className="row row-center row-vert-center button ribbon-button">
        <ButtonText text={this.props.name} />
      </div>
    );
  }
}

export default RibbonButton;
