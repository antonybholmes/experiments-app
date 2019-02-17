import React from "react";

const ICON_CLASSES = "row no-flex row-center row-vert-center material-icons";

const MaterialIcon = (props) => {
  return (<div className={ICON_CLASSES} style={{fontSize: props.size}}>{props.name}</div>);
}

export default MaterialIcon;
