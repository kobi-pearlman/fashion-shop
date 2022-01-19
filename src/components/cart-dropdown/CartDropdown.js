import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        go to checkout
      </CustomButton>
    </div>
  );
};


export default CartDropdown;
