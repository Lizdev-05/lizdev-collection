/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./component/Cart";
import Header from "./component/header/Header";
import Products from "./component/Products";
import Product from "./component/Product";
import Checkout from "./component/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      </Routes>
    </div>
  );
}

export default App;
