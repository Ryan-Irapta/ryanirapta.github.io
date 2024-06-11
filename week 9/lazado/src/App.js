import React, { useState } from 'react';
import Header from './components/Header';
import NavButton from './components/Navigation';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { name: 'Apple', price: 'PHP10.00' },
    { name: 'Banana', price: 'PHP5.00' },
    { name: 'Watermelon', price: 'PHP25.00' },
    { name: 'Orange', price: 'PHP12.00' }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="app">
      <Header />
      <div className="navigation">
        <NavButton label="Home" onClick={() => {}} />
        <NavButton label="Products" onClick={() => {}} />
        <NavButton label="About" onClick={() => {}} />
        <NavButton label="Contact" onClick={() => {}} />
      </div>
      <div className="content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
