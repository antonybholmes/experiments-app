import React from "react";
import "./titlebar.scss";
import ButtonBar from "./ButtonBar";

const remote = window.require('electron').remote;



const TitleBar = (props) => {
  return (
    <div className="row row-center row-vert-center titlebar">
      
      <div className="row row-center row-vert-center window-title">{remote.getCurrentWindow().getTitle()}</div>
      <ButtonBar/>
    </div>
  );
}

export default TitleBar;
