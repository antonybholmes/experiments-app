import React, { Component } from "react";

import "./cart.scss";
import PrimaryButton from "../button/PrimaryButton";
import CartEntry from "./CartEntry";
import Icon from "../Icon";

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
        <div className="row no-flex row-vert-center justify-space-between">
        <h3>Samples</h3>
        <PrimaryButton onClick={this.closeClicked}>Hide</PrimaryButton>
        
        </div>

        <div className="column">{this.renderItems()}</div>

      </div>
    );
  }

  renderItems() {
    let ret = [];

    this.props.selectedSamples.forEach((index, i) => {
      ret.push(<CartEntry name={this.props.sampleList[index].n}/>)
    });

    return ret;
  }
}

export default CartPanel;
