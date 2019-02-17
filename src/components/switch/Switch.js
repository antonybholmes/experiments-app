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

const ToggleSlot = (props) => {
  return (
    <div className={["toggle-slot", (props.on) ? "switch-on" : "switch-off"].join(" ")}></div>)
  ;
}

class Switch extends Component {
  constructor(props) {
    super(props);

    let {on} = this.props;

    if (on === undefined) {
      on = false;
    }

    console.log('on ' + on);

    this.state = { on: on };

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
      <div className="row no-flex switch" onClick={this.clicked}>
        <ToggleSlot on={this.state.on} />
        <ToggleButton on={this.state.on} />
      </div>);
  }
}

export default Switch;
