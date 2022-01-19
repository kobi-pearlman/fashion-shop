import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.scss";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";


const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsQuantity);
  const dispatch = useDispatch();


  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};



export default CartIcon;
