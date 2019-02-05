import React, { Component } from "react";
import "./samples.css";


class Sample extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  loadDetails(e) {
    console.log('clicked on' + e.target.id);
  }

  clicked(e) {
    console.log(this.props.sample)
    this.props.onClick(this.props.sample);
  }

  render() {
    return (
      <li className="sample" onClick={this.clicked} >{this.props.sample.n}</li>
    );
  }
}

export default Sample;
