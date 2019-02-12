import React from "react";

import "../../../app.scss";
import "./ribbon-content.scss";
import TabView from "../../TabView";


class RibbonContent extends TabView {
  render() {
    return (
      <div className="row row-vert-center ribbon-content">
        {this.state.tabs[this.props.tab]}
      </div>
    );
  }
}

export default RibbonContent;
