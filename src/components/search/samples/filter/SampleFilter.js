import React, { Component } from "react";

import "./sample-filter.scss";
import "../../../../app.scss";

class SampleFilter extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e, sample, index) {
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="row no-flex sample-filter">
        <div>test</div>
      </div>
    );
  }
}

export default SampleFilter;
