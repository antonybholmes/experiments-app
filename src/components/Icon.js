import React from "react";

const ICON_CLASSES = "row no-flex row-center row-vert-center icon fas ";

const Icon = (props) => {
  return (<div className={ICON_CLASSES + props.name}></div>);
}

export default Icon;
