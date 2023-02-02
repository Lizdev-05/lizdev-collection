/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log(process.env);

const Checkout = () => {
  const cart = useSelector((state) => state.handleCart);

  const publicKey = "pk_test_ff4b64a8e8b894b1adc13baa72f42d6902653531";
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart]);

  const componentProps = {
    email,
    amount: Math.ceil(amount * 100),
    metadata: {
      firstName,
      lastName,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      toast.success("Thanks for doing business with us! Come back soon!!"),
    onClose: () => toast.error("Wait! You need this product, don't go!!!!"),
  };

  return (
    <div className="container">
      <main>
        <div className="row g-5">
          <div className="col-md-7 col-lg-6 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {cart.length}
              </span>
            </h4>

            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product.id}>
                        <th className="col-md-6">
                          <img
                            src={product.image}
                            alt={product.title}
                            height="100px"
                            width="100px"
                          />
                        </th>
                        <td>{product.quantity}</td>
                        <td>#{product.price}</td>
                      </tr>
                    ))}
                    <tr>
                      <td>Total (NGN)</td>
                      <td>{amount}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-lg-6">
            <h4 className="mb-3">Billing address</h4>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
              <hr className="my-4" />

              <PaystackButton
                className="paystack-button w-100 btn btn-primary btn-lg"
                {...componentProps}
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
