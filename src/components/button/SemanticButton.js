import React from "react";

import "./button.scss";
import Button from "./Button";

const SemanticButton = (props) => {
  return (
    <Button type={"semantic-button " + props.type} onClick={props.onClick}>{props.children}</Button>
  );
};

export default SemanticButton;
