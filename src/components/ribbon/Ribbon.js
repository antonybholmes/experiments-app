import React, { Component } from "react";
import "./ribbon.scss";

class Ribbon extends Component {
  render() {
    return (
      <div className="column no-flex ribbon">
        {this.props.children}
      </div>
    );
  }
}

export default Ribbon;
