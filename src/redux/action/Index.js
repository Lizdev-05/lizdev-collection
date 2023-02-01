export const addCart = (product) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: product,
});

export const delCart = (product) => ({
  type: 'DELETE_ITEM',
  payload: product,
});

export const removeFromCart = (id) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};