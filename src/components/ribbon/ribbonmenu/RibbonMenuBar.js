import React, { Component } from "react";

import "./ribbon-menu.scss";

class RibbonMenuBar extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    //this.props.onClose(e);
  }

  render() {
    return (
      <div className="column ribbon-menu-bar" onClick={this.clicked}>
        {this.props.children}
      </div>
    );
  }
}

export default RibbonMenuBar;
