import React, { Component } from "react";
import "../../app.scss";
import "./ribbon.scss";
import QuickAccessButton from "./QuickAccessButton";

class QuickAccessToolbar extends Component {
  render() {
    return (
      <div className="row no-flex quick-access-toolbar">
        {this.props.children}
      </div>
    );
  }
}

export default QuickAccessToolbar;
