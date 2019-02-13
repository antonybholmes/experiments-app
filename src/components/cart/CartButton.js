import React from "react";

import Icon from "../Icon"
import QuickAccessButton from "../ribbon/quickaccess/QuickAccessButton"

const CartButton = (props) => {
  return (
    <QuickAccessButton onClick={props.onClick}>
      <Icon name="fa-shopping-cart" />
    </QuickAccessButton>
  );
}

export default CartButton;
