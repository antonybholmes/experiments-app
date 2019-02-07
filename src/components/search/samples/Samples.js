import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

import "./samples.scss";
import "../../../app.scss";
import Sample from "./Sample";
import SampleInfo from "./SampleInfo";
import axios from "axios";

import Constants from '../../../Constants'

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class Samples extends Component {
  constructor(props) {
    super(props);

    this.state = { samples: [], sampleInfo: [], selectedSamples: [] };

    this.clicked = this.clicked.bind(this);
  }

  clicked(e, sample) {
    if (e.ctrlKey) {
      let samples = this.state.selectedSamples.concat(sample);
      this.setState({selectedSamples : samples})
    } else {
      this.setState({selectedSamples : [sample]})
    }

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, sample);
    }
  }

  mouseDown(e) {
    if (e.ctrlKey) {
      console.log('a');
    }
    console.log('mouse down');
  }

  componentDidMount() {
    console.log('samples loaded');
  }

  render() {
    return (
      <div key="samples" className="column samples">
      <Scrollbars>
        {this.props.samples.map(sample => <Sample key={sample.id} onClick={this.clicked} sample={sample} />)}
      </Scrollbars>
      </div>
    );
  }
}

export default Samples;
