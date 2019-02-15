import React from "react";

import "./button.scss";
import IconButton from "./IconButton";

const HideButton = (props) => {
  return (
    <IconButton cmd={props.cmd} type={"hide-button fa-angle-right"} onClick={props.onClick}>{props.children}></IconButton>
  );
};

export default HideButton;
