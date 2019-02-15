import React from "react";

import "./button.scss";
import Button from "./Button";

const IconButton = (props) => {
  return (
    <Button cmd={props.cmd} type={"icon icon-button fas fa-lg " + props.type} onClick={props.onClick} />
  );
};

export default IconButton;
