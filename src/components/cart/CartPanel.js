import React, { Component } from "react";

import "./cart.scss";
import PrimaryButton from "../button/PrimaryButton";
import CartEntry from "./CartEntry";
import Icon from "../Icon";
import DangerButton from "../button/DangerButton";

class CartPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {remove : new Set()};

    this.closeClicked = this.closeClicked.bind(this);
    this.clearClicked = this.clearClicked.bind(this);
    this.removed = this.removed.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  closeClicked(e) {
    this.props.onClose(e);
  }

  clearClicked(e) {
    let remove = new Set();

    this.props.selectedSamples.forEach((index, i) => {
      let name = this.props.sampleList[index].n;

      remove.add(name);
    });

    this.setState({remove : remove});

    this.updateSelected();
  }

  removed(name) {
    let remove = this.state.remove;

    remove.add(name);

    console.log("remove " + name);

    this.setState({remove : remove});

    this.updateSelected();
  }

  updateSelected() {
    let samples = [];

    this.props.selectedSamples.forEach((index, i) => {
      let name = this.props.sampleList[index].n;

      if (!this.state.remove.has(name)) {
        samples.push(index);
      }
    });

    this.setState({samples : samples});

    this.props.onCartChange(samples);
  }

  componentDidMount() {
    this.updateSelected();
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

        <div className="column">
          {this.renderItems()}
        </div>

        <div className="row no-flex">
          <DangerButton onClick={this.clearClicked}>Clear</DangerButton>
        </div>

      </div>
    );
  }

  renderItems() {
    let ret = [];

    this.props.selectedSamples.forEach((index, i) => {
      let name = this.props.sampleList[index].n;

      if (!this.state.remove.has(name)) {
        ret.push(<CartEntry name={name} onRemove={this.removed} />)
      }
    });

    return ret;
  }
}

export default CartPanel;
