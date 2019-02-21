import React from "react";
import TitleButton from "./TitleButton";

import "./titlebar.scss";
import MaterialIcon1x from "../../MaterialIcon1x";

const MinButton = (props) => {
  return (
    <TitleButton cmd="minimize" type={"title-button " + props.type} onClick={props.onClick} >
      <MaterialIcon1x name="minimize"/>
    </TitleButton>
  );
};

export default MinButton;
