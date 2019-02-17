import React from "react";

import "./button.scss";
import SemanticButton from "./SemanticButton";

const DialogButton = (props) => {
  return (
    <SemanticButton cmd={props.cmd} onClick={props.onClick} type="dialog-button">{props.children}</SemanticButton>
  );
};

export default DialogButton;

