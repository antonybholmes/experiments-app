import React from "react";

import MaterialIcon1x from "../MaterialIcon1x"
import QuickAccessButton from "../ribbon/quickaccess/QuickAccessButton"

const CartButton = (props) => {
  return (
    <QuickAccessButton onClick={props.onClick}>
      <MaterialIcon1x name="shopping_cart" />
    </QuickAccessButton>
  );
}

export default CartButton;
