import React, { Component } from "react";
import "../../../app.scss";
import "./samples.scss";

const SampleInfo = (props) => {
  return (<div className="row sample-info-entry">
      <div className="column sample-info-entry-name">{props.name}</div>
      <div className="column sample-info-entry-value">{props.value}</div>
    </div>);
};

export default SampleInfo;
