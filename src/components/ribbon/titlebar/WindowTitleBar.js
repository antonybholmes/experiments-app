import React from "react";
import "./titlebar.scss";
import ButtonBar from "./ButtonBar";

const { remote } = window.require('electron');



const WindowTitleBar = (props) => {
  return (
    <div className="row no-flex row-center row-vert-center titlebar window-titlebar">
      
      <div className="row row-center row-vert-center window-title">{remote.getCurrentWindow().getTitle()}</div>
      <ButtonBar/>
    </div>
  );
}

export default WindowTitleBar;
