import React from "react";
import "./content.scss";


const AppRibbonBlock = (props) => {
  return (
    <div id="app-ribbon-content" key="app-ribbon-content" className="column app-content">
      {props.children}
    </div>
  );
};

export default AppRibbonBlock;
