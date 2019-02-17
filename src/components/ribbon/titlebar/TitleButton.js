import React from "react";

import "./titlebar.scss";
import Button from "../../button/Button";

const TITLE_BUTTON_CLASSES = "row-center base-title-button ";

const TitleButton = (props) => {
  return (
      <Button cmd={props.cmd} type={TITLE_BUTTON_CLASSES + props.type} onClick={props.onClick}>{props.children}</Button>
    );
};

export default TitleButton;
