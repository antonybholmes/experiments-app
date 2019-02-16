import React, { Component } from "react";
import ButtonText from "../../button/ButtonText"

import "./titlebar.scss";
import TitleButton from "./TitleButton";
import Icon from "../../Icon";
import MaterialIcon from "../../MaterialIcon";

const CloseButton = (props) => {
    return (
      <TitleButton cmd="close" type="base-title-button close-button" onClick={props.onClick} >
        <MaterialIcon name="clear"/>
      </TitleButton>
    );
};

export default CloseButton;
