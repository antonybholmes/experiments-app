import React, { Component } from "react";

import "./cart.scss";
import PrimaryButton from "../button/PrimaryButton";

class CartPanel extends Component {
  constructor(props) {
    super(props);

    this.closeClicked = this.closeClicked.bind(this);
  }

  closeClicked(e) {
    this.props.onClose(e);
  }

  render() {
    let classNames = "column cart";

    if (this.props.show) {
      classNames += " cart-show";
    } else {
      classNames += " cart-hide";
    }

    console.log('cart ' + classNames);

    return (
      <div className={classNames} onClick={this.clicked}>
        <div className="row no-flex row-vert-center justify-space-between"><h3>Sample Cart</h3><PrimaryButton onClick={this.closeClicked}>Close</PrimaryButton></div>

      </div>
    );
  }
}

export default CartPanel;
