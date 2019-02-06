import React, { Component } from "react";
import "../../../../app.css";
import "./ribbon-toolbar.css";


class RibbonToolbar extends Component {
  render() {
    return (
      <div className="row row-center ribbon-toolbar">{this.props.children}</div>
    );
  }
}

export default RibbonToolbar;
