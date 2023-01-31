import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Products from './component/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        
      </Routes>
    </div>
  );
}

export default App;
