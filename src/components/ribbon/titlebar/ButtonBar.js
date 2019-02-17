import React, { Component } from "react";
import "./titlebar.scss";
import MinButton from "./MinButton";
import CloseButton from "./CloseButton";
import MaxButton from "./MaxButton";

const { remote } = window.require('electron');


class ButtonBar extends Component {
  constructor(props) {
    super(props);

    this.minClicked = this.minClicked.bind(this);
    this.maxClicked = this.maxClicked.bind(this);
    this.closeClicked = this.closeClicked.bind(this);
  }

  minClicked(e) {
    remote.getCurrentWindow().minimize();
  }

  maxClicked(e) {
    const win = remote.getCurrentWindow();

    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
    
  }

  closeClicked(e) {
    remote.getCurrentWindow().close();
  }

  render() {
    return (
      <div className="row justify-end row-vert-center button-bar">
        <MinButton onClick={this.minClicked} />
        <MaxButton onClick={this.maxClicked} />
        <CloseButton onClick={this.closeClicked} />
      </div>
    );
  }
}

export default ButtonBar;
