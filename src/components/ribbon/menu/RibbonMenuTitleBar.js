import React from "react";
import "./ribbon-menu.scss";
import ButtonBar from "./ButtonBar";

const { remote } = window.require('electron');



const RibbonMenuTitleBar = (props) => {
  return (
    <div className="row justify-end row-vert-center ribbon-menu-titlebar">
      
      <div className="row row-center row-vert-center ribbon-menu-titlebar-title">{remote.getCurrentWindow().getTitle()}</div>
      <ButtonBar/>
    </div>
  );
}

export default RibbonMenuTitleBar;
