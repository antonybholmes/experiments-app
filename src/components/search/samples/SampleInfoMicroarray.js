import React, { Component } from "react";
import SampleInfoEntry from "./SampleInfoEntry"

import "../../../app.scss";
import "./samples.scss";

class SampleInfoMicroarray extends Component {
  render() {
    return (
      <div className="column sample-info">
        <SampleInfoEntry key="/Microarray/Sample/Sample/Sample_Name" name="Sample Name" value={this.props.sampleInfo["/Microarray/Sample/Sample/Sample_Name"]} />
      </div>);
  }
}

export default SampleInfoMicroarray;
