import React, { Component } from "react";
import "./ribbon.css";


class RibbonTab extends Component {
  render() {
    return (
      <div className="ribbon-tab">
        {this.props.name}
      </div>
    );
  }
}

export default RibbonTab;
