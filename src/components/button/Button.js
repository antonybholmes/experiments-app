import React from "react";

const BUTTON_CLASSES = "row no-flex row-center row-vert-center button "

const Button = (props) => {
  return (
    <div className={BUTTON_CLASSES + props.type} onClick={props.onClick} >
      {props.children}
    </div>
  );
};

export default Button;
