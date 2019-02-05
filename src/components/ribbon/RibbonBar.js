import React, { Component } from "react";
import "./ribbon.css";
import "../../app.css";


class RibbonBar extends Component {
  render() {
    return (
      <div className="row ribbon-bar">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonBar;
