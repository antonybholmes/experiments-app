import React, { Component } from "react";
import "./samples.scss";


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
    this.props.onClick(e, this.props.sample);
  }

  render() {
    return (
      <div className="column sample" onClick={this.clicked} >
        <div className="row sample-title">{this.props.sample.n}</div>
        {this.renderType()}
      </div>
    );
  }

  renderType() {
    switch(this.props.sample.t) {
      case 2:
        return(<div className="row sample-sub-title">ChIP-seq</div>);
      case 1:
        return(<div className="row sample-sub-title">Microarray</div>);
      default:
        return(<div className="row sample-sub-title">Other</div>);
    }
  }
}

export default Sample;
