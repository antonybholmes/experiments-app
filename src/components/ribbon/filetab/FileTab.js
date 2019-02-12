import React from "react";
import ButtonText from "../../button/ButtonText"

import "../../../app.scss";
import "../../button/button.scss";
import "./file-tab.scss";
import Button from "../../button/Button";


class FileTab extends Button {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row row-center row-vert-center button file-tab" onClick={this.clicked}>
        <ButtonText text="File" />
      </div>
    );
  }
}

export default FileTab;
