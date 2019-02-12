import React, { Component } from "react";
import "../../app.scss";
import Samples from "./samples/Samples";
import SampleInfo from "./samples/SampleInfo";
import SampleFilter from "./samples/filter/SampleFilter";
import axios from "axios";
import Constants from "../../Constants"
import Tags from "../../Tags"

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/search?&key=${KEY}&totp=031082&q=`;

const TAG_URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class SearchPane extends Component {
  constructor(props) {
    super(props);

    this.state = { sample: props.sample, sampleInfo: {} };

    this.clicked = this.clicked.bind(this);
    this.sortChanged = this.sortChanged.bind(this);
  }

  sortChanged(name) {
    this.props.onSortChanged(name);
  }

  clicked(e, sample) {
    console.log("1. Received click in  parent " + sample.id);

    this.setState({ sample: sample });

    let url = `${TAG_URL}${sample.id}`;

    console.log(url);

    axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => {
        const sampleInfo = res.data;
        const sampleInfoMap = {}

        sampleInfo.forEach(function(e) {
          let tag = "n/a";

          if (e.id in Tags) {
            tag = Tags[e.id];
          }

          sampleInfoMap[tag] = e.v;
        });

        this.setState({ sampleInfo: sampleInfoMap });
      })
  }

  componentDidMount() {
    //this.sampleClicked(this.props.sample);
  }

  render() {
    return (
      <div className="row search-pane">
        <Samples sortby={this.props.sortby} samples={this.props.samples} onClick={this.clicked} onSortChanged={this.sortChanged} />
       
        <SampleInfo key="sample-info" sample={this.state.sample} sampleInfo={this.state.sampleInfo} />
      </div>
    );
  }
}

export default SearchPane;