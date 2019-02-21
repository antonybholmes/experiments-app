import React, { Component } from "react";

import "./ribbon-menu.scss";

class RibbonMenuPanel extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    //this.props.onClose(e);
  }

  render() {
    return (
      <div className="column base-card ribbon-menu-panel">
        {this.props.children}
      </div>
    );
  }
}

export default RibbonMenuPanel;
