import React from "react";

import "./button.scss";
import Button from "./Button";

const PrimaryButton = (props) => {
  return (
    <Button onClick={props.onClick} type="primary-button">{props.children}</Button>
  );
};

export default PrimaryButton;
