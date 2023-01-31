import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
