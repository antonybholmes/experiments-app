import React, { Component } from "react";

import "./ribbon-menu.scss";

class RibbonMenu extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onClose(e);
  }

  render() {
    let classNames = "row ribbon-menu";

    if (this.props.show) {
      classNames += " ribbon-menu-show";
    }

    return (
      <div className={classNames} onClick={this.clicked}>
        <div className="column">dsdfdsf</div>
        {this.props.children}
        <div className="column base-card" style={{flex: 4}}>fff</div>
      </div>
    );
  }
}

export default RibbonMenu;
