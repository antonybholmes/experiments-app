import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./dialog.scss";
import PrimaryButton from "../button/PrimaryButton";
import HSpace from "../HSpace";
import DialogButton from "../button/DialogButton";
import MaterialIcon from "../MaterialIcon";

class OKCancelDialog extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
    this.outsideClicked = this.outsideClicked.bind(this);
    //this.updateStatus = this.updateStatus.bind(this);
  }

  clicked(e, cmd) {
    if (cmd === "ok") {
      this.ok();
    } else {
      this.cancel();
    }
  }



  componentDidMount() {
    document.addEventListener('click', this.outsideClicked, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClicked, true);
  }

  outsideClicked(e) {
    this.cancel();
  }

  ok() {
    console.log('ok');
    this.updateStatus("ok");
  }

  cancel() {
    this.updateStatus("cancel");
  }

  updateStatus(status) {
    this.props.onStatus(status);
  }


  render() {
    let classNames = "modal";

    if (!this.props.show) {
      classNames += " modal-hidden";
    }

    console.log('aha ' + this.props.show);

    return (
      <div className={classNames}>
        <div className="modal-content column">
          <div className="row">
            <div className="column">
              <div className="row row-vert-center">
                <i className="material-icons" style={{ fontSize: '64px', color: '#ffe680' }}>warning</i>
              </div>
            </div>
            <div className="column" style={{ flex: 4 }}>
              <div className="row row-vert-center">
                <div style={{ fontWeight: 'bold' }}>{this.props.message}</div>
              </div>
            </div>
          </div>
          <div className="row row-center no-flex">
            <PrimaryButton cmd="ok" onClick={this.clicked}>OK</PrimaryButton>
            <HSpace size="1rem" />
            <DialogButton cmd="cancel" onClick={this.clicked}>Cancel</DialogButton>
          </div>
        </div>

      </div>
    );
  }
}

export default OKCancelDialog;
