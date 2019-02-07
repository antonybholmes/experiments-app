import React, { Component } from "react";
import "../../../app.scss";
import "./samples.scss";
import Tags from "../../../Tags"

class SampleInfo extends Component {
  render() {
    return (<div className={"row sample-info-entry"}>
      <div className={"column sample-info-entry-name"}>{this.props.name}</div>
      <div className={"column sample-info-entry-value"}>{this.props.value}</div>
    </div>);
  }
}

export default SampleInfo;
