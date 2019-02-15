import React, { Component } from "react";

import Icon from "../Icon"
import QuickAccessButton from "../ribbon/quickaccess/QuickAccessButton"
import CartEntryRemoveButton from "./CartEntryRemoveButton";

class CartEntry extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    this.props.onRemoveFromCart(this.props.name);
  }


  render() {
    return (
      <div className="row no-flex row-vert-center justify-space-between cart-entry">
        <div className="cart-entry-title">{this.props.name}</div>
        <CartEntryRemoveButton onClick={this.clicked} />
      </div>
    );
  }
}

export default CartEntry;
