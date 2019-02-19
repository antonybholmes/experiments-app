import React, { Component } from "react";

import "./pages.scss";


class Page extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    if (!this.props.selected) {
      this.props.onClick(e, this.props.page);
    }
  }

  render() {
    let classNames = "row no-flex row-vert-center row-center page";

    if (this.props.selected) {
      classNames += " page-selected";
    } else {
      classNames += " page-highlight"
    }

    return (
      <div className={classNames} onClick={this.clicked}>
        {this.props.page}
      </div>
    );
  }
}

export default Page;