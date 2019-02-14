import React from "react";

import "./button.scss";
import SemanticButton from "./SemanticButton";

const DangerButton = (props) => {
  return (
    <SemanticButton type="danger-button" onClick={props.onClick}>{props.children}</SemanticButton>
  );
};

export default DangerButton;
