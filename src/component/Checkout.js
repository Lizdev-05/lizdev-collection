import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.handleCart);

  const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="checkout">
      <div className="checkout-form">
        <div className="checkout-field">
          <label>Name</label>
          <input />
        </div>
        <div className="checkout-field">
          <label>Email</label>
          <input />
        </div>
        <div className="checkout-field">
          <label>Phone</label>
          <input />
        </div>
      </div>

      {cart.map((product) => (
        <div className="checkout__product">
          <div className="checkout__productImg">
            <img src={product.image} alt="" />
          </div>
          <div className="checkout__productInfo">
            <div className="checkout__productTitlePrice">
              <div className="checkout__productTitle">{product.title}</div>
              <div className="checkout__productPrice">${product.price}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="checkout__total">
        <div className="checkout__totalPrice">
          <div className="checkout__totalPriceTitle">Total</div>
          <div className="checkout__totalPriceValue">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
