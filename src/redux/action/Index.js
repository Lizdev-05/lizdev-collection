// export const addCart = (product) => ({
// type: 'ADD_ITEM_TO_CART',
// payload: product,
// });

// export const delCart = (product) => ({
// type: 'DELETE_ITEM',
// payload: product,
// });

export const addCart = (product) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: product,
});

// For deleting item from the Cart
export const delCart = (product) => ({
  type: 'DELETE_ITEM',
  payload: product,
});
