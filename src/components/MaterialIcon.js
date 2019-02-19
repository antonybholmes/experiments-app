import React from "react";

import Icon from "./Icon"

const MaterialIcon = (props) => {
  return (<Icon type={"material-icons " + props.type} style={{fontSize: props.size}}>{props.name}</Icon>);
}

export default MaterialIcon;
