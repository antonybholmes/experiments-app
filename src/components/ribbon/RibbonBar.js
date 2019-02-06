import React, { Component } from "react";
import "../../app.css";
import "./ribbon.css";
import QuickAccessToolbar from "./QuickAccessToolbar"
import RibbonTabs from "./RibbonTabs"

class RibbonBar extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(name) {
    this.props.onChangeTab(name);
  }

  render() {
    return (
      <div className="row ribbon-bar">
        <RibbonTabs onChangeTab={this.changeTab} />
      </div>
    );
  }
}

export default RibbonBar;
