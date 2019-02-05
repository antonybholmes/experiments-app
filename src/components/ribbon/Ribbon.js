import React, { Component } from "react";
import "./ribbon.css";

class Ribbon extends Component {
  render() {
    return (
      <div className="column ribbon">
        {this.props.children}
      </div>
    );
  }
}

export default Ribbon;
