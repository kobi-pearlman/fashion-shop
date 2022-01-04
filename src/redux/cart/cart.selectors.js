import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHiden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumaltedQuantity, item) => {
      return accumaltedQuantity + item.quantity;
    }, 0)
);

export const selectCartItemTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumaltedToal, item) => {
      return accumaltedToal + item.quantity * item.price;
    }, 0)
);
