import React from "react";

import "./pages.scss";
import CenterButton  from "../button/CenterButton";
import MaterialIcon1x from "../MaterialIcon1x";

const PrevButton = (props) => {
  return (
    <CenterButton cmd={props.cmd} type="text-button page-nav-button" onClick={props.onClick}>
      <MaterialIcon1x name="remove_circle_outline"/>
    </CenterButton>
  );
};

export default PrevButton;
