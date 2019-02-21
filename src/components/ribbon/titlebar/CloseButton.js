import React from "react";

import "./titlebar.scss";
import TitleButton from "./TitleButton";
import MaterialIcon1x from "../../MaterialIcon1x";

const CloseButton = (props) => {
    return (
      <TitleButton cmd="close" type={"close-button " + props.type} onClick={props.onClick} >
        <MaterialIcon1x name="clear"/>
      </TitleButton>
    );
};

export default CloseButton;
