import React, { Component } from "react";
import "../css/content.css";
import "../app.css";

class Content extends Component {
  render() {
    return (
      <div className={"content"}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
