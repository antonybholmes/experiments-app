import React, { Component } from "react";
import SampleInfoMicroarray from "./SampleInfoMicroarray"

import "./samples.scss";

class SampleInfo extends Component {


  render() {

    return (<div className="column sample-info">
      {this.renderItems()}
    </div>);
  }

  renderItems() {
    if (this.props.sample === undefined) {
      return (<div>Please select a sample.</div>);
    }

    switch (this.props.sample.t) {
      case 1:
        // Microarray
        return (<SampleInfoMicroarray sampleInfo={this.props.sampleInfo} />);
        break;
      default:
        return (<div>No view available.</div>);
        break;
    }
  }
}

export default SampleInfo;
