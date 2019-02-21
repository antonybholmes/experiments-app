import React, { Component } from "react";


import "./ribbon-menu.scss";
import Button from "../../button/Button";

const RibbonMenuItem = (props) => {
  return (
    <Button cmd={props.cmd} onClick={props.onClick} type="justify-start ribbon-menu-item">{props.children}</Button>
  );
};

export default RibbonMenuItem;
