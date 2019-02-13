import React from "react";

import Icon from "../Icon"
import QuickAccessButton from "../ribbon/quickaccess/QuickAccessButton"
import CartEntryRemoveButton from "./CartEntryRemoveButton";

const CartEntry = (props) => {
  return (
    <div className="row no-flex row-vert-center justify-space-between cart-entry">
      <div className="cart-entry-title">{props.name}</div>
      <CartEntryRemoveButton/>
    </div>
  );
}

export default CartEntry;
