import React, { Component } from "react";
import "../../app.css";
import "./search.css";
import Samples from "./samples/Samples";
import SampleInfo from "./samples/SampleInfo";
import SearchBar from "./SearchBar";
import axios from "axios";
import Constants from "../../Constants"
import Tags from "../../Tags"

const KEY = Constants.KEY;
const URL = `http://52.206.83.98/edbw/api/v1/samples/search?&key=${KEY}&totp=031082&q=`;

const TAG_URL = `http://52.206.83.98/edbw/api/v1/samples/tags?&key=${KEY}&totp=031082&sample=`;


class SearchPane extends Component {
  constructor(props) {
    super(props);

    this.state = { query: props.query, sample: null, samples: [{ id: -1, n: "No results" }], sampleInfo: {} };

    this.sampleClicked = this.sampleClicked.bind(this);
    this.search = this.search.bind(this);
  }

  search(q) {
    this.setState({query : q});

    console.log("here" + q);

    let url = `${URL}${this.state.query}`;

    console.log(url);

    axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => {
        const samples = res.data;
        this.setState({ samples: samples });

        this.sampleClicked(samples[0]);
      })
  }

  componentDidMount() {
    this.search(this.state.query);
  }

  sampleClicked(s) {
    console.log("1. Received click in  parent " + s.id);

    this.setState({ sample: s });

    let url = `${TAG_URL}${s.id}`;

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

  render() {
    return (
      <div className="column search-pane">
        <SearchBar query={this.state.query} onSearch={this.search} />
        <div className="row search-results">
          <Samples search={this.state.query} samples={this.state.samples} onSampleClick={this.sampleClicked} />
          <SampleInfo key="sample-info" sample={this.state.sample} sampleInfo={this.state.sampleInfo} />
        </div>
      </div>
    );
  }
}

export default SearchPane;