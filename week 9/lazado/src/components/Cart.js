import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
