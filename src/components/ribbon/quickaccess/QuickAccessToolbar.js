import React  from "react";

import "./quick-access.scss";

const QuickAccessToolbar = (props) => {
  return (
    <div className="row no-flex row-vert-center justify-end quick-access-toolbar">
      {props.children}
    </div>
  );
};

export default QuickAccessToolbar;
