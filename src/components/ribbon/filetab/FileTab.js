import React  from "react";

import "./file-tab.scss";
import "../ribbontab/ribbon-tab.scss";
import Button from "../../button/Button";


const FileTab = (props) => {
  return (
    <Button type="row no-flex file-tab" onClick={props.onClick}>File</Button>
  );
}

export default FileTab;
