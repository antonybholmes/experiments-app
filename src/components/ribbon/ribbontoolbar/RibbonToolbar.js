import React, { Component } from "react";
import "../../../app.scss";
import "./ribbon-toolbar.scss";


class RibbonToolbar extends Component {
  render() {
    return (
      <div className="row row-vert-center ribbon-toolbar ribbon-toolbar-fade-in">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonToolbar;
