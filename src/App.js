import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand h1 mb-0">The Redux Store</span>
        </div>
      </nav>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
