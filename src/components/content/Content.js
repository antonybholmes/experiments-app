import React, { Component } from "react";
import "./content.scss";
import "../../app.scss";

class Content extends Component {
  render() {
    return (
      <div className="row content">
        {this.props.children}
      </div>
    );
  }
}

export default Content;
