import React, { Component } from "react";


import "./samples.scss";
import Sample from "./Sample";
import SampleInfo from "./SampleInfo";
import axios from "axios";

import Constants from "../../../Constants"
import SampleBlock from "./SampleBlock";
import SampleFilter from "./filter/SampleFilter";
import SampleList from "./list/SampleList";
import SortBy from "./sortby/SortBy";


const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class Samples extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
    this.sortChanged = this.sortChanged.bind(this);
  }

  sortChanged(name) {
    this.props.onSortChanged(name);
  }

  clicked(e, sample, index) {
    if (this.props.onClick !== undefined) {
      this.props.onClick(e, sample, index);
    }
  }

  render() {
    //console.log(this.props.samples['Microarray'].length + ' ff' );
    return (
      <div className="column col-sep samples">
        <div className="row no-flex justify-end">
          <SortBy sortby={this.props.sortby} onSortChanged={this.sortChanged} />
        </div>

        <SampleList key="sample-list" samples={this.props.samples} onClick={this.clicked} />
      </div>
    );
  }
}

export default Samples;
