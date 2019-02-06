import React, { Component } from "react";
import "../../app.css";
import "./ribbon.css";
import QuickAccessButton from "./QuickAccessButton";

class QuickAccessToolbar extends Component {
  render() {
    return (
      <div className="row quick-access-toolbar">
        <QuickAccessButton/>
      </div>
    );
  }
}

export default QuickAccessToolbar;
