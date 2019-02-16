import React from "react";
import TitleButton from "./TitleButton";

import "./titlebar.scss";
import MaterialIcon from "../../MaterialIcon";

const MinButton = (props) => {
  return (
    <TitleButton cmd="minimize" type="title-button" onClick={props.onClick} >
      <MaterialIcon name="minimize"/>
    </TitleButton>
  );
};

export default MinButton;
