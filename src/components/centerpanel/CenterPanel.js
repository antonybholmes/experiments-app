import React from "react";

import "./center-panel.scss";

const CenterPanel = (props) => {
  return (
    <div className="column center-panel">
      {props.children}
    </div>
  );
}

export default CenterPanel;
