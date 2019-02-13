import React from "react";

import "./titlebar.scss";

const MaxButton = (props) => {
  return (
      <div onClick={props.onClick} className="row no-flex row-center row-vert-center button base-title-button title-button">
        <div className="icon title-icon fas fa-window-maximize"/>
      </div>
    );
};

export default MaxButton;
