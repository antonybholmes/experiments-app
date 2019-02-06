import React, { Component } from "react";
import "./ribbon-tab.css";


class RibbonTab extends Component {
  constructor(props) {
    super(props);

    let {on} = this.props;

    if (on === undefined) {
      on = false;
    }

    console.log('on ' + on);

    this.state = { on: on, classNames: ["ribbon-tab", on ? "ribbon-tab-on" : "ribbon-tab-off"].join(" ") };

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    console.log('on ');

    this.setState({ on: true, classNames: ["ribbon-tab", "ribbon-tab-on"].join(" ") });

    this.props.onClick(e);
    this.props.onChangeTab(this.props.name);
  }

  render() {
    return (
      <div className={this.state.classNames} onClick={this.clicked}>
        {this.props.name}
      </div>
    );
  }
}

export default RibbonTab;
