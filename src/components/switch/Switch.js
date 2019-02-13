import React, { Component } from "react";

import "./switch.scss";

class ToggleButton extends Component {
  render() {
    let classNames = ["toggle-button", (this.props.on) ? "toggle-right" : "toggle-left"].join(" ");

    console.log('r t ' + classNames);

    return (
      <div className={classNames}></div>);
  }
}

class Switch extends Component {
  constructor(props) {
    super(props);

    let {on} = this.props;

    if (on === undefined) {
      on = false;
    }

    console.log('on ' + on);

    this.state = { on: on, classNames: ["switch", on ? "switch-on" : "switch-off"].join(" ") };

    this.toggle = this.toggle.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    let on = !this.state.on;

    this.toggle(on);
  }

  toggle(on) {
    this.setState({ on: on, classNames: ["switch", on ? "switch-on" : "switch-off"].join(" ") });
  }

  render() {
    return (
      <div className={this.state.classNames} onClick={this.clicked}>
        <ToggleButton on={this.state.on} />
      </div>);
  }
}

export default Switch;
