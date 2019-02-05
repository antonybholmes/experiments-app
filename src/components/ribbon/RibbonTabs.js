import React, { Component } from "react";
import "./ribbon.css";
import "../../app.css";


class RibbonTabs extends Component {
  render() {
    return (
      <div className="row ribbon-tabs">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonTabs;
