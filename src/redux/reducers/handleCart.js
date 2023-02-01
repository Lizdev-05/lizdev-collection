const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  let itemExisting;

  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      // check if the product is already in the cart
      itemExisting = state.find((p) => p.id === product.id);
      if (itemExisting) {
        // if the product is already in the cart, increase the quantity
        return state.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      // if the product is not in the cart, add it to the cart
      return [...state, { ...product, quantity: 1 }];
    case 'DELETE_ITEM':
      // check if the product is already in the cart
      itemExisting = state.find((p) => p.id === product.id);
      if (itemExisting.quantity === 1) {
        // if the product is just 1 in the cart, remove it from the cart
        return state.filter((p) => p.id !== product.id);
      }
      // if the product is more than 1 in the cart, decrease the quantity
      return state.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p));
    default:
      return state;
  }
};

export default handleCart;
