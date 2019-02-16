import React from "react";

import "./button.scss";
import Button from "./Button";
import MaterialIcon from "../MaterialIcon";

const HideButton = (props) => {
  return (
    <Button cmd={props.cmd} onClick={props.onClick}>
      <MaterialIcon name="arrow_forward_ios"/>
    </Button>
  );
};

export default HideButton;
