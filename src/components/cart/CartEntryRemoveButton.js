import React from "react";

import Button from "../button/Button";
import Icon from "../Icon";


const CartEntryRemoveButton = (props) => {
  return (
      <Button type="cart-entry-remove-button">
        <Icon name="fa-times"/>
      </Button>
    );
};

export default CartEntryRemoveButton;
