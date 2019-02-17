import React, { Component } from "react";
import ButtonText from "../../button/ButtonText"

import "./titlebar.scss";
import TitleButton from "./TitleButton";
import Icon from "../../Icon";
import MaterialIcon1x from "../../MaterialIcon1x";

const CloseButton = (props) => {
    return (
      <TitleButton cmd="close" type="base-title-button close-button" onClick={props.onClick} >
        <MaterialIcon1x name="clear"/>
      </TitleButton>
    );
};

export default CloseButton;
