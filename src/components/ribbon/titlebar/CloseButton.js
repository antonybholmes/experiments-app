import React, { Component } from "react";
import ButtonText from "../../button/ButtonText"

import "./titlebar.scss";

const CloseButton = (props) => {
    return (
      <div onClick={props.onClick} className="row no-flex row-center row-vert-center button base-title-button close-button">
        <div className="icon title-icon fas fa-times"/>
      </div>
    );
};

export default CloseButton;
