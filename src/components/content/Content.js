import React, { Component } from "react";
import "./content.scss";


const Content = (props) => {
  return (
    <div className="row content">
      {props.children}
    </div>
  );
};

export default Content;
