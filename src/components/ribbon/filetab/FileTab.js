import React  from "react";

import "../../../app.scss";
import "../../../styles/button.scss";
import "./file-tab.scss";


const FileTab = (props) => {
  return (
    <div className="row row-center row-vert-center button file-tab" onClick={props.clicked}>
      File
    </div>
  );
}

export default FileTab;
