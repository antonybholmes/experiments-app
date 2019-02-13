import React from "react";

import "../../app.scss";
import "./side-tabs.scss";
import TabView from "../TabView";


class SideTabsView extends TabView {
  render() {
    return (
      <div className="row side-tabs-view">
        {this.state.tabs[this.props.tab]}
      </div>
    );
  }
}

export default SideTabsView;
