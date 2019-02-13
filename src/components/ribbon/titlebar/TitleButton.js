import React from "react";

import "./titlebar.scss";
import Button from "../../button/Button";

const TITLE_BUTTON_CLASSES = "base-title-button ";

const TitleButton = (props) => {
  return (
      <Button type={TITLE_BUTTON_CLASSES + props.type}>{props.children}</Button>
    );
};

export default TitleButton;
