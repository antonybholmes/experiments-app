import React, { Component } from "react";
import "./ribbon.css";

class QuickAccessToolbar extends Component {
  render() {
    return (
      <div className={"quick-access-toolbar"}>
        {this.props.children}
      </div>
    );
  }
}

export default QuickAccessToolbar;
