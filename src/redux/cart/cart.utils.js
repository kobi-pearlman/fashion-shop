export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === itemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingCartItem.id);
  }

  return cartItems.map((item) =>
    item.id === existingCartItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
