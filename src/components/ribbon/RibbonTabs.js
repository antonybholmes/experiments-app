import React, { Component } from "react";
import "./ribbon.css";


class RibbonTabs extends Component {
  render() {
    return (
      <div className={"ribbon-tabs"}>
        {this.props.children}
      </div>
    );
  }
}

export default RibbonTabs;
