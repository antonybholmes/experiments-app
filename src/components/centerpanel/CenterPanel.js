import React, { Component } from "react";
import "../../app.scss";
import "./center-panel.scss";

class CenterPanel extends Component {
  render() {
    return (
      <div className="column center-panel">
        {this.props.children}
      </div>
    );
  }
}

export default CenterPanel;
