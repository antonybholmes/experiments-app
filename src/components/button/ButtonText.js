import React from "react";
import "../../app.scss";
import "../../styles/button.scss";

const ButtonText = (props) => {
  return (<div className="row row-vert-center button-text">{props.children}</div>);
}

export default ButtonText;
