import React from "react";

import "./ribbon.scss";


const RibbonBar = (props) => {
  return (
    <div className="row no-flex ribbon-bar">
      {props.children}
    </div>
  );
};

export default RibbonBar;
