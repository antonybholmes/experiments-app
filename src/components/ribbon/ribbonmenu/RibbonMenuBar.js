import React, { Component } from "react";

import "./ribbon-menu.scss";
import BackButton from "../../button/BackButton";

class RibbonMenuBar extends Component {
  constructor(props) {
    super(props);

    this.closed = this.closed.bind(this);
  }

  closed(e) {
    this.props.onClose(e);
  }

  render() {
    return (
      <div className="column ribbon-menu-bar">
        <div className="row no-flex" style={{padding: "1.5rem"}}>
          <BackButton onClick={this.closed}/>
        </div>
        <div className="column" style={{paddingTop: "1rem"}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default RibbonMenuBar;
