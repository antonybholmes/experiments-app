import React, { Component } from "react";
import "./groups.scss";
import Switch from "../switch/Switch";

class Group extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }
  
  clicked(e) {
    //this.props.onClick(this.props.group);
  }

  render() {
    return (
      <div className="row row-vert-center group" onClick={this.clicked} id={this.props.group.id}>
        <div className="column no-flex group-switch"><Switch on={false} /></div>
        <div className="column">{this.props.group.n}</div>
      </div>
    );
  }
}

export default Group;
