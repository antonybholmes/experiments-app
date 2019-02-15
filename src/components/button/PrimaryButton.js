import React from "react";

import "./button.scss";
import Button from "./Button";
import SemanticButton from "./SemanticButton";

const PrimaryButton = (props) => {
  return (
    <SemanticButton cmd={props.cmd} onClick={props.onClick} type="primary-button">{props.children}</SemanticButton>
  );
};

export default PrimaryButton;
