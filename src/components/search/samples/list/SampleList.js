import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { CSSTransitionGroup } from "react-transition-group";
import "./sample-list.scss";
import "../../../../app.scss";
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

      for (let i = s; i <= e; ++i) {
        samples.push(i);
        indexes[i] = !(i in this.state.sampleIndexMap);
      }
    } else {
      indexes = {};
      indexes[index] = true;
    }

    this.setState({ sampleIndexMap: indexes, selectedSamples: [index], selected: index })

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, sample, index);
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

        <div key="sample-list" className={this.state.classNames}>


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
      items.push(<SampleBlock key={t} name={t} start={start} samples={this.props.samples[t]} sampleIndexMap={this.state.sampleIndexMap} onClick={this.clicked} />)

      start += this.props.samples[t].length;
    });

    return items;
  }
}

export default SampleList;
