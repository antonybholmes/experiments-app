import React from "react";
import "../../../app.scss";
import "./ribbon-toolbar.scss";


const RibbonToolbar = (props) => {
  return (
    <div className="row row-vert-center ribbon-toolbar ribbon-toolbar-fade-in">
      {props.children}
    </div>
  );
}

export default RibbonToolbar;
