import React from "react";

import "./quick-access.scss";
import Button from "../../button/Button";

const QuickAccessButton = (props) => {
  return (
    <Button onClick={props.onClick} type="row-center quick-access-button">{props.children}</Button>
  );
};

export default QuickAccessButton;
