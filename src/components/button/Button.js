import React,  { Component } from "react";

const BUTTON_CLASSES = "row no-flex row-center row-vert-center button "

class Button extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onClick(e, this.props.cmd)
  }

  render() {
    return (
      <div className={BUTTON_CLASSES + this.props.type} onClick={this.clicked} >
        {this.props.children}
      </div>
    );
  }
};

export default Button;
