import React from "react";

import "./ribbon.scss";


const RibbonBar = (props) => {
  return (
    <div className="row ribbon-bar">
      {props.children}
    </div>
  );
};

export default RibbonBar;
