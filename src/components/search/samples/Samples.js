import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

import "./samples.scss";
import "../../../app.scss";
import Sample from "./Sample";
import SampleInfo from "./SampleInfo";
import axios from "axios";

import Constants from '../../../Constants'
import SampleBlock from "./SampleBlock";
import SampleFilter from "./filter/SampleFilter";
import SampleList from "./list/SampleList";

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class Samples extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e, sample, index) {
    if (this.props.onClick !== undefined) {
      this.props.onClick(e, sample, index);
    }
  }

  render() {
    //console.log(this.props.samples['Microarray'].length + ' ff' );
    return (
        <SampleList samples={this.props.samples} onClick={this.clicked} />

    );
  }
}

export default Samples;
