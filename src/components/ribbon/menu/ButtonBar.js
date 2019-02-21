import React, { Component } from "react";
import "./ribbon-menu.scss";
import CloseButton from "../titlebar/CloseButton";
import MinButton from "../titlebar/MinButton";
import MaxButton from "../titlebar/MaxButton";

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
      <div className="row no-flex row-vert-center ribbon-menu-button-bar">
        <MinButton type="dark-title-button" onClick={this.minClicked} />
        <MaxButton type="dark-title-button" onClick={this.maxClicked} />
        <CloseButton type="dark-title-button" onClick={this.closeClicked} />
      </div>
    );
  }
}

export default ButtonBar;
