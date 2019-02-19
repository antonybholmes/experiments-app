import React from "react";
import "./content.scss";


const AppRibbonBarBlock = (props) => {
  return (
    <div id="app-ribbon-bar-content" key="app-ribbon-bar-content" className="column app-content">
      {props.children}
    </div>
  );
};

export default AppRibbonBarBlock;
