import React, { Component } from "react";
import "../../app.scss";
import "./sidebar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="column sidebar col-sep">
        {this.props.children}
      </div>
    );
  }
}

export default SideBar;
