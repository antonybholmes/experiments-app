import React, { Component } from "react";
import "../css/content.css";

class SideBar extends Component {
  render() {
    return (
      <div className={"column sidebar"}>
        {this.props.children}
      </div>
    );
  }
}

export default SideBar;
