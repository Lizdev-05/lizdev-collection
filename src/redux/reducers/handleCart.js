const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            // check if the product is already in the cart
            const itemExisting = state.find((p) => p.id === product.id);
            if(itemExisting) {
                // if the product is already in the cart, increase the quantity
                return state.map((p) => p.id === product.id ? {...p, quantity: p.quantity + 1} : p);
            } else {
            // if the product is not in the cart, add it to the cart
                return [...state, {...product, quantity: 1}];


}