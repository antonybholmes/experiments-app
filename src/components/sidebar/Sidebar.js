import React, { Component } from "react";
import "../../app.scss";
import "./sidebar.scss";

const SideBar = (props) => {

    return (
      <div className="column sidebar col-sep">
        {props.children}
      </div>
    );
};

export default SideBar;
