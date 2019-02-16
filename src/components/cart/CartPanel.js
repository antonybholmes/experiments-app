import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import PrimaryButton from "../button/PrimaryButton";
import HideButton from "../button/HideButton";
import CartEntry from "./CartEntry";

import "./cart.scss";
import Button from "../button/Button";
import DialogButton from "../button/DialogButton";

class CartPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { samples: new Map(this.props.samples) };

    this.clicked = this.clicked.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  clicked(e, cmd) {
    console.log('cart ' + cmd);
    switch (cmd) {
      case "clear":
        this.props.onClearCart();
        break;
      case "hide":
        this.props.onHide(e);
        break;
      default:
        break;
    }
  }

  removeFromCart(name) {
    this.props.onRemoveFromCart(name);
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
      <div key="cart-panel" className={classNames}>
        <div className="row no-flex row-vert-center justify-space-between">
          <h3>Samples</h3>
          <HideButton cmd="hide" type="fa-angle-right" onClick={this.clicked}/>
        </div>



        <div className="column">
          <Scrollbars>
            {this.renderItems()}
          </Scrollbars>
        </div>

        <div className="row no-flex">
          <DialogButton cmd="clear" onClick={this.clicked}>Clear</DialogButton>
        </div>

      </div>
    );
  }

  renderItems() {
    let keys = [];

    console.log('cart ' + this.props.samples.size);

    this.props.samples.forEach((index, name) => {
      keys.push(name);
    });

    keys.sort()

    let ret = [];

    keys.forEach((name, index) => {
      ret.push(<CartEntry key={name} name={name} onRemoveFromCart={this.removeFromCart} />)
    });

    return ret;
  }
}

export default CartPanel;
