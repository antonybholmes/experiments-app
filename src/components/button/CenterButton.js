import React from "react";

import Button from "./Button";

const CenterButton = (props) => {
  return (
    <Button cmd={props.cmd} type={"row-center " + props.type} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default CenterButton;
