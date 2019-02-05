import React, { Component } from "react";
import "./samples.css";
import "../../../app.css";
import Sample from "./Sample";
import SampleInfo from "./SampleInfo";
import axios from "axios";

import Constants from '../../../Constants'

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class Samples extends Component {
  constructor(props) {
    super(props);

    this.state = { samples: [], sampleInfo: [] };

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onSampleClick(e);
  }

  render() {
    return (
      <div key="samples" className="column samples">
        <ul>
          {this.props.samples.map(sample => <Sample key={sample.id} onClick={this.clicked} sample={sample} />)}
        </ul>
      </div>
    );
  }
}

export default Samples;
