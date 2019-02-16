import React from "react";
import TitleButton from "./TitleButton";
import "./titlebar.scss";
import MaterialIcon from "../../MaterialIcon";

const MaxButton = (props) => {
  return (
    <TitleButton cmd="maximize" type="title-button" onClick={props.onClick} >
      <MaterialIcon name="maximize"/>
    </TitleButton>
    );
};

export default MaxButton;
