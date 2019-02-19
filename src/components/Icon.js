import React from "react";

const ICON_CLASSES = "row no-flex row-center row-vert-center icon ";

const Icon = (props) => {
  return (<div className={ICON_CLASSES + props.type} style={props.style}>{props.children}</div>);
}

export default Icon;
