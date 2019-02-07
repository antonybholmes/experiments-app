import React, { Component } from "react";
import "../../app.scss";
import "./ribbon.scss";
import QuickAccessToolbar from "./QuickAccessToolbar"
import RibbonTabs from "./RibbonTabs"

class RibbonBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row no-flex ribbon-bar">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonBar;
