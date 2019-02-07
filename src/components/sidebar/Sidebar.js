import React, { Component } from "react";
import "./sidebar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="column sidebar">
        {this.props.children}
      </div>
    );
  }
}

export default SideBar;
