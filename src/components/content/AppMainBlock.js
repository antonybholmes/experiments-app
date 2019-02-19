import React from "react";
import "./content.scss";


const AppMainBlock = (props) => {
  return (
    <div id="app-main" key="app-main" className="column  app-content">
      {props.children}
    </div>
  );
};

export default AppMainBlock;
