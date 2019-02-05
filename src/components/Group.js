import React, { Component } from "react";
import "../css/groups.css";


class Group extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }
  
  clicked(e) {
    this.props.onClick(this.props.group);
  }

  render() {
    return (
      <li className={"group"} onClick={this.clicked} id={this.props.group.id}>{this.props.group.n}</li>
    );
  }
}

export default Group;
