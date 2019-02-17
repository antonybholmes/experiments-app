import React from "react";

import "./button.scss";
import MaterialIcon15x from "../MaterialIcon15x"
import Button from "./Button";

const BackButton = (props) => {
  return (
    <Button cmd={props.cmd} onClick={props.onClick} type="row-center back-button">
      <MaterialIcon15x name="arrow_back"/>
    </Button>
  );
};

export default BackButton;
