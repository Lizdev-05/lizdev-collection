/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart/Cart";
import Header from "./component/header/Header";
import Products from "./pages/products/Products";
import Product from "./pages/products/Product";
import Checkout from "./pages/checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Subscribe from "./pages/subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
