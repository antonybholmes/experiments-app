import React from "react";

import "./pages.scss";
import CenterButton from "../button/CenterButton";
import MaterialIcon1x from "../MaterialIcon1x";

const NextButton = (props) => {
  return (
    <CenterButton cmd={props.cmd} type="text-button page-nav-button" onClick={props.onClick}>
      <MaterialIcon1x name="add_circle_outline"/>
    </CenterButton>
  );
};

export default NextButton;
