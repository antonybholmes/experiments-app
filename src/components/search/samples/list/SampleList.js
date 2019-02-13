import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./sample-list.scss";
import SampleBlock from "../SampleBlock";



class SampleList extends Component {
  constructor(props) {
    super(props);

    this.state = { samples: {}, 
      selected: -1, 
      sampleInfo: [], 
      selectedSamples: [], 
      sampleIndexMap: { 0: true },
      classNames : "column sample-list"};

    this.clicked = this.clicked.bind(this);
  }

  clicked(e, sample, index) {
    let samples = [];
    let indexes = this.state.sampleIndexMap;
    let selected = this.state.selected;

    if (e.ctrlKey && this.state.selectedSamples.length > 0) {
      samples = samples.concat(this.state.selectedSamples);
      samples = samples.concat(index);

      indexes[index] = !(index in this.state.sampleIndexMap);
    } else if (e.shiftKey && this.state.selectedSamples.length > 0) {
      let s = Math.min(selected, index);
      let e = Math.max(selected, index);

      console.log('shift ' + s + '  '+ e);

      for (let i = s; i <= e; ++i) {
        samples.push(i);
        indexes[i] = true; //!(i in this.state.sampleIndexMap);
      }
    } else {
      indexes = {};
      samples = [index];
      indexes[index] = true;
    }

    this.setState({ sampleIndexMap: indexes, selectedSamples: samples, selected: index })

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, sample, index);
    }

    if (this.props.onSelectionChanged !== undefined) {
      this.props.onSelectionChanged(e, samples);
    }
  }

  shouldComponentUpdate() {
    console.log("going to update");

    return true;
  }

  componentDidMount() {
    console.log("samples loaded");

    this.setState({classNames : "column sample-list sample-list-show"})
  }

  render() {
    //console.log(this.props.samples["Microarray"].length + " ff" );
    return (

        <div className={this.state.classNames}>
          <Scrollbars>
            {this.renderItems()}
          </Scrollbars>

        </div>
    );
  }

  renderItems() {
    let start = 0;

    var items = []

    Object.keys(this.props.samples).map((t, ti) => {
      items.push(<SampleBlock 
        key={t} 
        name={t} 
        start={start} 
        samples={this.props.samples[t]} 
        sampleIndexMap={this.state.sampleIndexMap} 
        onClick={this.clicked} />)

      start += this.props.samples[t].length;
    });

    return items;
  }
}

export default SampleList;
