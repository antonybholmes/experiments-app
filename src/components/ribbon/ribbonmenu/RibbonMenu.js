import React, { Component } from "react";

import "./ribbon-menu.scss";
import RibbonMenuBar from "./RibbonMenuBar";
import RibbonMenuPanel from "./RibbonMenuPanel";

class RibbonMenu extends Component {
  constructor(props) {
    super(props);

    this.closed = this.closed.bind(this);
  }

  closed(e) {
    this.props.onClose(e);
  }

  render() {
    let classNames = "ribbon-menu";

    if (this.props.show) {
      classNames += " ribbon-menu-show";
    }

    return (
      <div className={classNames}>
        <div className="ribbon-menu-content column">
          <div className="row">
            <RibbonMenuBar onClose={this.closed}>
              {this.props.children}
            </RibbonMenuBar>
            <RibbonMenuPanel></RibbonMenuPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default RibbonMenu;
