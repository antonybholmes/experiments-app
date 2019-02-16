import React from "react";

import MaterialIcon from "../MaterialIcon"
import QuickAccessButton from "../ribbon/quickaccess/QuickAccessButton"

const CartButton = (props) => {
  return (
    <QuickAccessButton onClick={props.onClick}>
      <MaterialIcon name="shopping_cart" />
    </QuickAccessButton>
  );
}

export default CartButton;
