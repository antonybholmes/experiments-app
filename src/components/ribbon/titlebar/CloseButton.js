import React, { Component } from "react";
import ButtonText from "../../button/ButtonText"

import "./titlebar.scss";
import TitleButton from "./TitleButton";
import Icon from "../../Icon";

const CloseButton = (props) => {
    return (
      <TitleButton type="base-title-button close-button" onClick={props.onClick} >
      <Icon name="fa-times"/>
      </TitleButton>
    );
};

export default CloseButton;
