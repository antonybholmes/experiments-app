import React from "react";

import MaterialIcon1x from "../MaterialIcon1x";
import "./menu-icon.scss";

const MenuIcon = (props) => {
  return (<MaterialIcon1x type="menu-icon" name={props.name} style={{fontSize: props.size}}/>);
}

export default MenuIcon;
