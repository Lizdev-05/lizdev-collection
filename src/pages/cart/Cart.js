import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const addCart = (product) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: product,
});

const delCart = (product) => ({
  type: 'DELETE_ITEM',
  payload: product,
});

const Cart = () => {
  const cart = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => (
    <div className="px-4 my-5 bg-light rounded-5 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  );
  const cartItems = (product) => (
    <>
      <div className="px-4 my-5 bg-light rounded-5 py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.quantity}
                {' '}
                X #
                {product.price}
                {' '}
                = #
                {product.quantity * product.price}
              </p>
              <button
                type="button"
                className="btn btn-outline-dark me-4"
                onClick={() => handleDel(product)}
              >
                <AiOutlineMinus />
              </button>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => handleAdd(product)}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const buttons = () => (
    <>
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    </>
  );

  return (
    <div className=" mx-5">
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartItems)}
      {cart.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
