const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            // check if the product is already in the cart
            const itemExisting = state.find((p) => p.id === product.id);
            

}