import React, { Component } from "react";
import "../../../app.scss";
import "./ribbon-toolbar.scss";


class RibbonToolbarSection extends Component {
  render() {
    return (
      <div className="row row-vert-center ribbon-toolbar-section">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonToolbarSection;
