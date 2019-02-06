import React, { Component } from "react";
import "./ribbon.css";
import "../../app.css";
import RibbonTab from "./ribbontab/RibbonTab"


class RibbonTabs extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  clicked(e) {
    // Do nothing
  }

  changeTab(name) {
    this.props.onChangeTab(name);
  }

  render() {
    return (
      <div className="row ribbon-tabs">
        <RibbonTab name="Home" onClick={this.clicked} onChangeTab={this.changeTab} />
        <RibbonTab name="Other" onClick={this.clicked} onChangeTab={this.changeTab} />
      </div>
    );
  }
}

export default RibbonTabs;
