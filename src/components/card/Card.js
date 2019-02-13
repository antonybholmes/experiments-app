import React from "react";
import "../../app.scss";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="column base-card card">
      {props.children}
    </div>
  );
}

export default Card;
