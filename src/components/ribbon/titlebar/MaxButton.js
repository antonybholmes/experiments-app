import React from "react";
import TitleButton from "./TitleButton";
import "./titlebar.scss";
import MaterialIcon1x from "../../MaterialIcon1x";

const MaxButton = (props) => {
  return (
    <TitleButton cmd="maximize" type="title-button" onClick={props.onClick} >
      <MaterialIcon1x name="maximize"/>
    </TitleButton>
    );
};

export default MaxButton;
