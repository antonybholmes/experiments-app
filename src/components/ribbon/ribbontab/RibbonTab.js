import React, { Component } from "react";
import ButtonText from "../../button/ButtonText"

import "../../../app.scss";
import "../../../styles/button.scss";
import "./ribbon-tab.scss";


class RibbonTab extends Component {
  constructor(props) {
    super(props);
    
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onClick(e);
    this.props.onChangeTab(this.props.name);
  }

  render() {
    let classNames = ["row", "row-center", "row-vert-center", "button", "ribbon-tab", (this.props.currentTab === this.props.name) ? "ribbon-tab-on" : "ribbon-tab-off"].join(" ");

    return (
      <div className={classNames} onClick={this.clicked}>
        {this.props.name}
      </div>
    );
  }
}

export default RibbonTab;
