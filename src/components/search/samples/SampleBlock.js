import React, { Component } from "react";
import Sample from "./Sample";

import "./samples.scss";


class SampleBlock extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e, sample, index) {
    this.props.onClick(e, sample, index);
  }

  render() {
    return (
      <div className="sample-block">
        <div className="row sample-block-title">{this.props.name}</div>

        {this.props.samples.map((sample, index) => <Sample key={sample.id} onClick={this.clicked} index={this.props.start + index} sample={sample} sampleIndexMap={this.props.sampleIndexMap} />)}
      </div>
    );
  }
}

export default SampleBlock;
