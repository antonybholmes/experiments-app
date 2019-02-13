import React from "react";
import TitleButton from "./TitleButton";
import "./titlebar.scss";

const MaxButton = (props) => {
  return (
    <TitleButton type="title-button" onClick={props.onClick} >
        <div className="icon title-icon fas fa-window-maximize"/>
    </TitleButton>
    );
};

export default MaxButton;
