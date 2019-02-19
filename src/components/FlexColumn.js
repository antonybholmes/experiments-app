import React from "react";

const FlexColumn = (props) => {
  return (
    <div className={"column " + props.className} style={{flex : props.flex}}>
      {props.children}
    </div>
  );
}

export default FlexColumn;
