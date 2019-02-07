import React, { Component } from "react";

class TabView extends Component {
  constructor(props) {
    super(props);

    let tabs = {};

    React.Children.map(this.props.children, (child, i) => {
      // Ignore the first child

      let name = child.props.name;

      tabs[name] = child;
    });

    // Put the children into a named map rather than iterating over
    // the props.children
    this.state = { tabs: tabs };
  }
}

export default TabView;
