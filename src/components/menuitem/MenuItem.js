import React from "react";
import Button from "../button/Button";

import "../../app.scss";
import "../button/button.scss";
import "./menu-item.scss";


class MenuItem extends Button {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onClick(e, this.props.name);
  }

  render() {
    return (
      <div name={this.props.name} onClick={this.clicked} className="row row-vert-center button menu-item">
        {this.props.children}
      </div>
    );
  }
}

export default MenuItem;
