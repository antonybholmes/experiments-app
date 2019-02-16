import React, { Component } from "react";

import "./ribbon-menu.scss";
import RibbonMenuBar from "./RibbonMenuBar";
import RibbonMenuPanel from "./RibbonMenuPanel";

class RibbonMenu extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onClose(e);
  }

  render() {
    let classNames = "ribbon-menu";

    if (this.props.show) {
      classNames += " ribbon-menu-show";
    }

    return (
      <div className={classNames} onClick={this.clicked}>
        <div className="ribbon-menu-content column">
          <div className="row">
            <RibbonMenuBar>Test</RibbonMenuBar>
            <RibbonMenuPanel>ddd</RibbonMenuPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default RibbonMenu;
