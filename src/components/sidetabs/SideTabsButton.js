import React, { Component } from "react";

import "../../app.scss";
import "./side-tabs.scss";
import "../../styles/button.scss";
import "../ribbon/ribbonbutton/ribbon-button.scss";


class SideTabsButton extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    //this.props.onClick(e);
    this.props.onChangeTab(this.props.name);
  }

  render() {
    return (
      <div className="row row-vert-center no-flex button side-tabs-button" onClick={this.clicked}>
        {this.props.name}
      </div>
    );
  }
}

export default SideTabsButton;
