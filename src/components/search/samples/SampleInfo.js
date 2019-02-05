import React, { Component } from "react";
import SampleInfoMicroarray from "./SampleInfoMicroarray"

import "./samples.css";

class SampleInfo extends Component {


  render() {
    if (this.props.sample === null || this.props.sample === undefined) {
      return(<div>No sample found</div>);
    }

    console.log(this.props.sample);
    console.log('si ' + this.props.sampleInfo);

    switch (this.props.sample.t) {
      case 1:
        // Microarray
        return (<SampleInfoMicroarray sampleInfo={this.props.sampleInfo} />);
        break;
      default:
        return (<div>fail</div>);
        break;
    }
  }
}

export default SampleInfo;
