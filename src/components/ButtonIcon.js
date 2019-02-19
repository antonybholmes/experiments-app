import React from "react";
import Icon from "./Icon";
import MaterialIcon from "./MaterialIcon";


const ButtonIcon = (props) => {
  return (<MaterialIcon type="button-icon" name={props.name}/>);
}

export default ButtonIcon;
