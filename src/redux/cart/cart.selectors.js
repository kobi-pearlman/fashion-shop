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
