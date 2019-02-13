import React, { Component } from "react";


import "./ribbon-button.scss";
import Button from "../../button/Button";

const RibbonButton = (props) => {
  return (
    <Button type="ribbon-button">{props.children}</Button>
  );
};

export default RibbonButton;
