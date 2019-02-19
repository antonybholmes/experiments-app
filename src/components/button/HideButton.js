import React from "react";

import "./button.scss";
import Button from "./Button";
import MaterialIcon1x from "../MaterialIcon1x";

const HideButton = (props) => {
  return (
    <Button cmd={props.cmd} type="text-button hide-button" onClick={props.onClick}>
      <MaterialIcon1x name="arrow_forward_ios"/>
    </Button>
  );
};

export default HideButton;
