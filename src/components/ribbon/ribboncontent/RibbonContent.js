import React, { Component } from "react";
import "../../../app.css";
import "./ribbon-content.css";


class RibbonContent extends Component {
  constructor(props) {
    super(props);

    let toolMap = {};

    React.Children.map(this.props.children, (child, i) => {
      // Ignore the first child

      let name = child.props.name;

      toolMap[name] = child;
    });

    // Put the children into a named map rather than iterating over
    // the props.children
    this.state = { toolbars: toolMap };
  }

  render() {
    console.log('content ' + this.state.currentToolbar);

    return (
      <div className="row row-center ribbon-content">
        {this.state.toolbars[this.props.toolbar]}
      </div>
    );
  }
}

export default RibbonContent;
