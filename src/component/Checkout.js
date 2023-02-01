/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.handleCart);

  const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    // <div className="row g-5">
    //   <div className="col-md-5 col-lg-4 order-md-last">
    //     <h4 className="d-flex justify-content-between align-items-center mb-3">
    //       <span className="text-primary">Your cart</span>
    //       <span className="badge bg-primary rounded-pill">{cart.length}</span>
    //     </h4>
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th scope="col">Product</th>
    //           <th scope="col">Description</th>
    //           <th scope="col">Quantity</th>
    //           <th scope="col">Price</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {cart.map((product) => (
    //           <tr key={product.id}>
    //             <th className="col-md-6">
    //               <img
    //                 src={product.image}
    //                 alt={product.title}
    //                 height="200px"
    //                 width="200px"
    //               />
    //             </th>
    //             <td>{product.title}</td>
    //             <td>{product.quantity}</td>
    //             <td>${product.price}</td>
    //           </tr>
    //         ))}
    //         <tr>
    //           <td>Total (USD)</td>
    //           <td>{price}</td>
    //         </tr>
    //       </tbody>
    //     </table>

    //     <div className="col-md-7 col-lg-8">
    //       <h4 className="mb-3">Billing address</h4>
    //       {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    //   <form action="" className="needs-validation" noValidate>
    //     <div className="row g-3">
    //       <div className="col-sm-6">
    //         <label htmlFor="firstName" className="form-label">
    //           First name
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="firstName"
    //           placeholder=""
    //           value=""
    //           required
    //         />
    //         <div className="invalid-feedback">
    //           Valid first name is required.
    //         </div>
    //       </div>

    //       <div className="col-sm-6">
    //         <label htmlFor="lastName" className="form-label">
    //           Last name
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="lastName"
    //           placeholder=""
    //           value=""
    //           required
    //         />
    //         <div className="invalid-feedback">
    //           Valid last name is required.
    //         </div>
    //       </div>
    //       <div className="col-12">
    //         <label htmlFor="email" className="form-label">
    //           Email{" "}
    //         </label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="email"
    //           placeholder="you@example.com"
    //         />
    //         <div className="invalid-feedback">
    //           Please enter a valid email address for shipping updates.
    //         </div>
    //       </div>
    //     </div>

    //     <hr className="my-4" />

    //     <h4 className="mb-3">Payment</h4>

    //     <div className="my-3">
    //       <div className="form-check">
    //         <input
    //           id="credit"
    //           name="paymentMethod"
    //           type="radio"
    //           className="form-check-input"
    //           checked
    //           required
    //         />
    //         <label className="form-check-label" htmlFor="credit">
    //           Credit card
    //         </label>
    //       </div>
    //       <div className="form-check">
    //         <input
    //           id="debit"
    //           name="paymentMethod"
    //           type="radio"
    //           className="form-check-input"
    //           required
    //         />
    //         <label className="form-check-label" htmlFor="debit">
    //           Debit card
    //         </label>
    //       </div>
    //       <div className="form-check">
    //         <input
    //           id="paypal"
    //           name="paymentMethod"
    //           type="radio"
    //           className="form-check-input"
    //           required
    //         />
    //         <label className="form-check-label" htmlFor="paypal">
    //           PayPal
    //         </label>
    //       </div>
    //     </div>

    //     <div className="row gy-3">
    //       <div className="col-md-6">
    //         <label htmlFor="cc-name" className="form-label">
    //           Name on card
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="cc-name"
    //           placeholder=""
    //           required
    //         />
    //         <small className="text-muted">
    //           Full name as displayed on card
    //         </small>
    //         <div className="invalid-feedback">Name on card is required</div>
    //       </div>

    //       <div className="col-md-6">
    //         <label htmlFor="cc-number" className="form-label">
    //           Credit card number
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="cc-number"
    //           placeholder=""
    //           required
    //         />
    //         <div className="invalid-feedback">
    //           Credit card number is required
    //         </div>
    //       </div>

    //       <div className="col-md-3">
    //         <label htmlFor="cc-expiration" className="form-label">
    //           Expiration
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="cc-expiration"
    //           placeholder=""
    //           required
    //         />
    //         <div className="invalid-feedback">Expiration date required</div>
    //       </div>

    //       <div className="col-md-3">
    //         <label htmlFor="cc-cvv" className="form-label">
    //           CVV
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="cc-cvv"
    //           placeholder=""
    //           required
    //         />
    //         <div className="invalid-feedback">Security code required</div>
    //       </div>
    //     </div>

    //     <hr className="my-4" />

    //     <button className="w-100 btn btn-primary btn-lg" type="submit">
    //       Continue to checkout
    //     </button>
    //   </form>
    //     </div>
    //   </div>

    <div class="container">
      <main>
        <div class="row g-5">
          <div class="col-md-5 col-lg-6 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </h4>

            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Description</th>
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
                            height="150px"
                            width="150px"
                          />
                        </th>
                        <td>{product.title}</td>
                        <td>{product.quantity}</td>
                        <td>${product.price}</td>
                      </tr>
                    ))}
                    <tr>
                      <td>Total (USD)</td>
                      <td>{price}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          <div class="col-md-7 col-lg-6">
            <h4 class="mb-3">Billing address</h4>
            <form action="" className="needs-validation" noValidate>
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
                    value=""
                    required
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
                    value=""
                    required
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
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
