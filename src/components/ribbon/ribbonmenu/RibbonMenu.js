import React, { Component } from "react";
import "./ribbon-menu.scss";

class RibbonMenu extends Component {
  render() {
    return (
      <div className="ribbon-menu">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonMenu;
