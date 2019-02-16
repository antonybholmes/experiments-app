import React from "react";

const ICON_CLASSES = "row no-flex row-center row-vert-center material-icons";

const MaterialIcon = (props) => {
  return (<div className={ICON_CLASSES} style={{fontSize: '16px'}}>{props.name}</div>);
}

export default MaterialIcon;
